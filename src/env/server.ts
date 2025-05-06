import { z } from 'zod';
import { createEnv } from '@t3-oss/env-nextjs';

const env = createEnv({
  server: {
    DADATA_API_KEY: z.string(),
    DADATA_API_URL: z.string().default('http://suggestions.dadata.ru/suggestions/api/4_1/rs'),
    /**
     * Content Security Policy
     */
    CSP_ALLOWED_DOMAINS: z.array(z.string()).default([]).catch([]),
  },

  experimental__runtimeEnv: process.env,
});

export { env };
