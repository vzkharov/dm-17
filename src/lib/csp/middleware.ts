import { NextRequest, NextResponse } from 'next/server';

import { HEADER_CSP } from './constants';
import type { CreateCSPMiddlewareOptions } from './types';

const createCSPMiddleware = (options: CreateCSPMiddlewareOptions) => {
  const _nonce = Buffer.from(crypto.randomUUID()).toString('base64');
  const _allowedDomains: string = options.allowedDomains.join(' ');

  const cspHeader = `
        script-src 'self' 'unsafe-inline' 'unsafe-eval' ${_allowedDomains};
        style-src 'self' 'unsafe-inline' ${_allowedDomains};
        img-src 'self' blob: data: ${_allowedDomains};
        font-src 'self';
        object-src 'none';
        base-uri 'self';
        form-action 'self';
        frame-ancestors 'none';
        block-all-mixed-content;
        upgrade-insecure-requests;
    `;

  // Replace newline characters and spaces
  const contentSecurityPolicyHeaderValue = cspHeader.replaceAll(/\s{2,}/g, ' ').trim();

  const middleware = (request: NextRequest, response: NextResponse): NextResponse => {
    // Set the nonce and CSP header
    request.headers.set(options.nonce, _nonce);
    request.headers.set(HEADER_CSP, contentSecurityPolicyHeaderValue);

    // Set the CSP header
    response.headers.set(HEADER_CSP, contentSecurityPolicyHeaderValue);

    return response;
  };

  const nonce = (request: NextRequest) => request.headers.get(options.nonce) ?? undefined;

  return { nonce, middleware };
};

export { createCSPMiddleware };
