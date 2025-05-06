import { z } from 'zod';
import { createEnv } from '@t3-oss/env-nextjs';

const env = createEnv({
  shared: {
    NODE_ENV: z.enum(['development', 'test', 'staging', 'production']).default('development'),
  },

  experimental__runtimeEnv: process.env,
});

export { env };
