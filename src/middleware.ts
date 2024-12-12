import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { TOKEN_COOKIE_NAME } from './constants';
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const { cookies } = request;

  const token = cookies.get(TOKEN_COOKIE_NAME);

  console.log("token", token);

  // if (request.nextUrl.pathname.includes('/about')) {
  //   return NextResponse.rewrite(new URL('/about-2', request.url))
  // }
 
  // if (request.nextUrl.pathname.startsWith('/dashboard')) {
  //   return NextResponse.rewrite(new URL('/dashboard/user', request.url))
  // }
  if(!!token && ['/login', '/register'].includes(request.nextUrl.pathname)) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  // return NextResponse.redirect(new URL('/home', request.url))
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
}