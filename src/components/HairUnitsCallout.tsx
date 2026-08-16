import Link from 'next/link';
import { Layers, ArrowLeft } from 'lucide-react';

interface HairUnitsCalloutProps {
  /** Short name of the current unit type, e.g. "טופר שיער" */
  unitName: string;
}

/**
 * Contextual "back-link" from a spoke service page (topper / padachat / tzamid /
 * custom wig) to the parent category hub `/hair-units`. Consolidates topical
 * authority onto the hub page and improves internal linking for SEO.
 */
export default function HairUnitsCallout({ unitName }: HairUnitsCalloutProps) {
  return (
    <section className="py-12 sm:py-14 bg-white" dir="rtl">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-navy-50 to-gold-50 border border-navy-100">
          <div className="w-12 h-12 shrink-0 rounded-[14px] bg-white flex items-center justify-center shadow-sm">
            <Layers size={22} className="text-navy-900" strokeWidth={2} />
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold text-gray-900 mb-1.5">
              {unitName} הוא סוג אחד מבין יחידות השיער
            </h2>
            <p className="text-gray-600 leading-relaxed">
              יחידת שיער היא שם כולל לכל פתרונות השיער הלא-כירורגיים שלנו – טופר, פדחת,
              צמיד ופאה מלאה. לא בטוחות איזה פתרון מתאים בדיוק לרמת הדלילות שלכן?{' '}
              <Link
                href="/hair-units"
                className="text-navy-900 font-semibold underline decoration-gold-400 underline-offset-4 hover:text-gold-600 transition-colors"
              >
                השוו בין כל סוגי יחידות השיער
              </Link>{' '}
              ומצאו את ההתאמה המדויקת.
            </p>
          </div>
          <Link
            href="/hair-units"
            className="shrink-0 inline-flex items-center gap-1.5 text-navy-900 font-semibold hover:gap-2.5 transition-all"
          >
            כל יחידות השיער <ArrowLeft size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
