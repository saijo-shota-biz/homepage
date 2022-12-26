import { GoogleTagManagerId } from '@function/GoogleTagManager';

export const googleTagManagerId = (process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID as GoogleTagManagerId) || '';

export const event = (eventName: string, option: any) => {
  window.dataLayer.push({
    event: eventName,
    ...option,
  });
};

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}
