export const APP_NAME = 'AstraMindAI';
export const APP_VERSION = '1.0.0';

export const APP_ENV = (process.env.NODE_ENV as 'development' | 'staging' | 'production') || 'development';

export const APP_DEFAULT_LOCALE = 'en-GB';

export const SECURITY_HEADERS = {
  contentSecurityPolicy: "default-src 'self'; img-src 'self' data:; script-src 'self'; style-src 'self' 'unsafe-inline'",
  referrerPolicy: 'no-referrer',
  xContentTypeOptions: 'nosniff',
  xFrameOptions: 'DENY',
};
