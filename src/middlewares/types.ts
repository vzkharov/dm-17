import type { NextFetchEvent, NextRequest, NextResponse } from 'next/server';

type NextMiddlewareResult = NextResponse | Response | null | undefined | void;

type UnknownMiddleware = (
  request: NextRequest,
  event: NextFetchEvent,
  response: NextResponse
) => NextMiddlewareResult | Promise<NextMiddlewareResult>;

type MiddlewareFactory = (middleware: UnknownMiddleware) => UnknownMiddleware;

export type { UnknownMiddleware, MiddlewareFactory };
