import type { NextRequest } from 'next/server';

import { isTokenExpired } from './utils';

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const token = req.cookies.get('session_token');

  const isExpiredToken = isTokenExpired(token?.value);

  if (pathname.startsWith('/admin')) {
    if (!token?.value || isExpiredToken) {
      return Response.redirect(new URL('/auth/login', req.url));
    }

    return;
  }
}
