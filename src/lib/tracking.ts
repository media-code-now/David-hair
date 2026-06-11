type TrackingPayload = Record<string, string | number | boolean | undefined>;

type GtagFunction = (
  command: 'event' | 'config' | 'js',
  targetIdOrEventName: string | Date,
  config?: TrackingPayload
) => void;

type FbqFunction = (
  action: 'track' | 'init',
  eventNameOrPixelId: string,
  payload?: TrackingPayload
) => void;

declare global {
  interface Window {
    gtag?: GtagFunction;
    fbq?: FbqFunction;
  }
}

export function trackGaEvent(eventName: string, params?: TrackingPayload): void {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
    return;
  }

  window.gtag('event', eventName, params);
}

export function trackMetaEvent(eventName: string, params?: TrackingPayload): void {
  if (typeof window === 'undefined' || typeof window.fbq !== 'function') {
    return;
  }

  window.fbq('track', eventName, params);
}