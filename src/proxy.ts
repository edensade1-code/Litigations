import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const COOKIE_NAME = "litigation_session";

export function proxy(request: NextRequest) {
  const role = request.cookies.get(COOKIE_NAME)?.value;
  const path = request.nextUrl.pathname;

  // No session → login
  if (!role || !["gordon", "foster"].includes(role)) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Foster can only access /Foster routes
  if (role === "foster" && !path.startsWith("/Foster")) {
    return NextResponse.redirect(new URL("/Foster", request.url));
  }

  // Gordon can only access /jason routes
  if (role === "gordon" && !path.startsWith("/jason")) {
    return NextResponse.redirect(new URL("/jason/rutledge", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all paths except:
     * - / (root redirect page)
     * - /login
     * - /_next (static files, HMR)
     * - /favicon.ico, /icon.svg, /opengraph-image
     */
    "/((?!login|_next|favicon\\.ico|icon\\.svg|opengraph-image).*)",
  ],
};
