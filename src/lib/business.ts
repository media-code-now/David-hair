// Single source of truth for business identity / NAP + Google Business Profile.
// Keeping these here keeps schema, footer, and contact links consistent (NAP
// consistency is an important local-SEO signal).

export const BUSINESS_NAME = 'David Hair Solutions';
export const BUSINESS_PHONE = '+972504001187';
export const BUSINESS_PHONE_DISPLAY = '050-4001187';
export const BUSINESS_WHATSAPP = 'https://wa.me/972504001187';

export const BUSINESS_ADDRESS = {
  streetAddress: 'שביט 8',
  addressLocality: 'נס ציונה',
  addressRegion: 'מרכז',
  postalCode: '7408028',
  addressCountry: 'IL',
} as const;

// Google Business Profile — the numeric CID identifies the verified Maps listing.
export const GOOGLE_MAPS_CID = '18130055428509424412';

// Canonical link to the verified listing (used for schema hasMap/@id + "view on map").
export const GOOGLE_MAPS_URL = `https://www.google.com/maps?cid=${GOOGLE_MAPS_CID}`;
