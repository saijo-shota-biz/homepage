// Initialize Client SDK.
import { createClient } from 'microcms-js-sdk';

const serviceDomain = process.env.NEXT_PUBLIC_MICRO_CMS_SERVICE_DOMAIN;
const apiKey = process.env.NEXT_PUBLIC_MICRO_CMS_API_KEY;
if (!serviceDomain || !apiKey) {
  throw new Error('NEXT_PUBLIC_MICRO_CMS_SERVICE_DOMAIN or NEXT_PUBLIC_MICRO_CMS_API_KEY is undefined');
}

const client = createClient({
  serviceDomain,
  apiKey,
});

export { client };
