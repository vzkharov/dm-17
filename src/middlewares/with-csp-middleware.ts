import { env } from '~/env/server';
import { createCSPMiddleware } from '~/lib/csp/middleware';

import type { MiddlewareFactory } from './types';

const { middleware: cspMiddleware } = createCSPMiddleware({
  nonce: 'x-nonce',
  allowedDomains: env.CSP_ALLOWED_DOMAINS,
});

const withCSPMiddleware: MiddlewareFactory = (middleware) => async (request, event, response) => {
  const nextResponse = cspMiddleware(request, response);

  return middleware(request, event, nextResponse);
};

export { withCSPMiddleware };
