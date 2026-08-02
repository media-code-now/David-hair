export const TIKTOK_USERNAME = 'davidedenis';
export const TIKTOK_PROFILE_URL = `https://www.tiktok.com/@${TIKTOK_USERNAME}`;

export type TikTokReel = {
  id: string;
  desc: string;
  coverUrl: string | null;
};

/**
 * Newest videos as of the last check — used when TikTok is unreachable at build /
 * revalidate time so the section still renders (cover images come back empty and
 * the cards fall back to a branded placeholder).
 */
const FALLBACK_REEL_IDS = [
  '7669397567016406293',
  '7667862125817203989',
  '7666754752973212948',
  '7664240545480346900',
  '7662365440307383572',
  '7661535926035713301',
  '7659810624314363157',
  '7659783782043503893',
  '7656722467884600597',
  '7655215728731229461',
];

/**
 * TikTok captions arrive with bidi isolate/embedding controls, stray tabs and a tail
 * of hashtags — all of which render as odd gaps in a card. Keep just the sentence.
 */
function cleanCaption(raw: string): string {
  const text = raw
    .replace(/[\u200E\u200F\u202A-\u202E\u2066-\u2069]/g, '')
    .replace(/#[^\s#]+/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  return text.length > 95 ? `${text.slice(0, 95).trimEnd()}…` : text;
}

type EmbedVideo = {
  id?: string;
  desc?: string;
  coverUrl?: string;
  originCoverUrl?: string;
  privateItem?: boolean;
};

/**
 * TikTok has no public "list a creator's videos" API, but the creator embed page
 * ships the list in its hydration state. Cover URLs are signed and expire, so this
 * is re-fetched hourly rather than checked in.
 */
export async function getTikTokReels(limit = 8): Promise<TikTokReel[]> {
  try {
    const res = await fetch(`https://www.tiktok.com/embed/@${TIKTOK_USERNAME}`, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
        'Accept-Language': 'he-IL,he;q=0.9,en;q=0.8',
      },
      next: { revalidate: 3600 },
    });
    if (!res.ok) throw new Error(`TikTok embed responded ${res.status}`);

    const html = await res.text();
    const state = html.match(
      /id="__FRONTITY_CONNECT_STATE__"[^>]*>([\s\S]*?)<\/script>/
    )?.[1];
    if (!state) throw new Error('TikTok embed hydration state not found');

    const data = JSON.parse(state)?.source?.data ?? {};
    const key = Object.keys(data).find((k) => k.startsWith('/embed/@'));
    const videos: EmbedVideo[] = (key && data[key]?.videoList) || [];

    const reels = videos
      .filter((v) => v?.id && !v.privateItem)
      .slice(0, limit)
      .map((v) => ({
        id: v.id as string,
        desc: cleanCaption(v.desc || ''),
        coverUrl: v.coverUrl || v.originCoverUrl || null,
      }));

    if (reels.length === 0) throw new Error('TikTok embed returned no videos');
    return reels;
  } catch {
    return FALLBACK_REEL_IDS.slice(0, limit).map((id) => ({
      id,
      desc: '',
      coverUrl: null,
    }));
  }
}
