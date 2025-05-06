import { NextResponse } from 'next/server';
import type { NextFetchEvent, NextRequest } from 'next/server';

import { chain } from './middlewares/chain';
import { withCSPMiddleware } from './middlewares/with-csp-middleware';

export const middleware = async (request: NextRequest, event: NextFetchEvent) => {
  const response = NextResponse.next({ request });
  const outcomingResponse = await chain([withCSPMiddleware])(request, event, response);

  // Modify response if needed

  return outcomingResponse;
};

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    {
      source: '/((?!api|_next/static|_next/image|favicon.ico).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
};
