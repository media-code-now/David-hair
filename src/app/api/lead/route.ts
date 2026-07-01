import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'nodejs';

type FormType = 'booking' | 'ads' | 'ppc';

interface LeadRequestBody {
  formType: FormType;
  name?: string;
  phone?: string;
  email?: string;
  whatsapp?: string;
  city?: string;
  preferredTime?: string;
  service?: string;
  notes?: string;
  photoBase64?: string;
  photoFileName?: string;
  pageUrl?: string;
}

const TO_EMAIL = process.env.LEAD_TO_EMAIL || 'office@hairtoppersisrael.com';
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'David Hair Solutions <onboarding@resend.dev>';

// Keep attachment payloads well under typical serverless request-body limits (~4.5MB on Vercel).
const MAX_ATTACHMENT_BYTES = 3.5 * 1024 * 1024;

const FORM_TYPE_LABELS: Record<FormType, string> = {
  booking: 'טופס קביעת ייעוץ (עמוד /book)',
  ads: 'טופס עמוד פרסום (Ads)',
  ppc: 'טופס עמוד נחיתה (PPC)',
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function buildEmailHtml(body: LeadRequestBody, photoNote: string | null): string {
  const rows: Array<[string, string | undefined]> = [
    ['שם מלא', body.name],
    ['טלפון', body.phone],
    ['וואטסאפ', body.whatsapp],
    ['אימייל', body.email],
    ['עיר', body.city],
    ['שירות מבוקש', body.service],
    ['שעה מועדפת', body.preferredTime],
    ['הערות', body.notes],
    ['מקור', FORM_TYPE_LABELS[body.formType]],
    ['עמוד', body.pageUrl],
  ];

  const rowsHtml = rows
    .filter(([, value]) => Boolean(value && value.trim().length > 0))
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:10px 14px;font-weight:600;color:#0f172a;background:#f8fafc;border:1px solid #e2e8f0;white-space:nowrap;">${escapeHtml(label)}</td>
          <td style="padding:10px 14px;color:#334155;border:1px solid #e2e8f0;">${escapeHtml(String(value))}</td>
        </tr>`
    )
    .join('');

  const photoNoteHtml = photoNote
    ? `<p dir="rtl" style="color:#b45309;background:#fffbeb;border:1px solid #fde68a;padding:10px 14px;border-radius:8px;margin-top:16px;font-family:Arial,Helvetica,sans-serif;">⚠️ ${escapeHtml(photoNote)}</p>`
    : '';

  return `
    <div dir="rtl" style="font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:0 auto;">
      <h2 style="color:#0f172a;">ליד חדש מהאתר 🎉</h2>
      <p style="color:#64748b;">התקבלה פנייה חדשה דרך ${escapeHtml(FORM_TYPE_LABELS[body.formType])}.</p>
      <table style="border-collapse:collapse;width:100%;margin-top:12px;">
        ${rowsHtml}
      </table>
      ${photoNoteHtml}
    </div>
  `;
}

export async function POST(request: Request) {
  let body: LeadRequestBody;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ success: false, error: 'invalid_json' }, { status: 400 });
  }

  if (!body.formType || !FORM_TYPE_LABELS[body.formType] || !body.name?.trim() || !body.phone?.trim()) {
    return NextResponse.json({ success: false, error: 'missing_required_fields' }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error('[api/lead] Missing RESEND_API_KEY environment variable. Lead payload was NOT emailed:', body);
    return NextResponse.json({ success: false, error: 'email_service_not_configured' }, { status: 500 });
  }

  const resend = new Resend(apiKey);

  const attachments: Array<{ filename: string; content: Buffer }> = [];
  let photoNote: string | null = null;

  if (body.photoBase64) {
    const commaIndex = body.photoBase64.indexOf(',');
    const base64Data = commaIndex >= 0 ? body.photoBase64.slice(commaIndex + 1) : body.photoBase64;

    try {
      const buffer = Buffer.from(base64Data, 'base64');
      if (buffer.byteLength > MAX_ATTACHMENT_BYTES) {
        photoNote = 'הלקוחה העלתה תמונה של השיער, אך הקובץ גדול מדי לצירוף אוטומטי במייל. מומלץ לבקש ממנה לשלוח אותה ישירות בוואטסאפ.';
      } else {
        attachments.push({
          filename: body.photoFileName || 'hair-photo.jpg',
          content: buffer,
        });
      }
    } catch (error) {
      console.error('[api/lead] Failed to decode photo attachment:', error);
      photoNote = 'הלקוחה העלתה תמונה, אך אירעה שגיאה בעיבוד הקובץ. מומלץ לבקש ממנה לשלוח אותה בוואטסאפ.';
    }
  }

  const html = buildEmailHtml(body, photoNote);
  const subject = `ליד חדש מהאתר – ${FORM_TYPE_LABELS[body.formType]}${body.name ? ` – ${body.name}` : ''}`;

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      subject,
      html,
      replyTo: body.email || undefined,
      attachments: attachments.length > 0 ? attachments : undefined,
    });

    if (error) {
      console.error('[api/lead] Resend API error:', error);
      return NextResponse.json({ success: false, error: 'send_failed' }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('[api/lead] Unexpected error sending lead email:', error);
    return NextResponse.json({ success: false, error: 'unexpected_error' }, { status: 500 });
  }
}
