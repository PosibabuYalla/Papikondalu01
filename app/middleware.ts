import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  
  // Handle redirects for broken links
  const redirects: Record<string, string> = {
    '/old-page': '/',
    '/blog-old': '/blog',
    '/tours': '/packages',
    '/booking': '/contact',
    '/about': '/aboutus',
  }
  
  if (redirects[url.pathname]) {
    url.pathname = redirects[url.pathname]
    return NextResponse.redirect(url, 301)
  }
  
  // Handle temporary redirects (302)
  const tempRedirects: Record<string, string> = {
    '/maintenance': '/',
    '/temp-page': '/',
  }
  
  if (tempRedirects[url.pathname]) {
    url.pathname = tempRedirects[url.pathname]
    return NextResponse.redirect(url, 302)
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|lms.txt).*)',
  ],
}