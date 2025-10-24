import {NextRequest, NextResponse} from "next/server";

import {isAuthenticated} from "./features/auth";

const ROUTE_CONFIG = {
  // Routes that require authentication (user must be logged in)
  protected: ["/chat", "/files", "/quiz", "/settings"],

  // Routes that require no authentication (user must be logged out)
  auth: ["/login", "/signup", "/forgot-password", "/reset-password", "/verify-email"],

  // Public routes that anyone can access
  public: ["/", "/about", "/contact", "/pricing", "/privacy", "/terms", "/cookies", "/kvkk"],

  // Default redirects
  redirects: {
    authenticated: "/files", // Where to redirect authenticated users trying to access auth pages
    unauthenticated: "/login", // Where to redirect unauthenticated users trying to access protected pages
  },
} as const;

function matchesRoute(pathname: string, routes: readonly string[]): boolean {
  return routes.some((route) => {
    // Exact match
    if (pathname === route) return true;

    // Match route with parameters (e.g., /files/[id])
    if (pathname.startsWith(`${route}/`)) return true;

    return false;
  });
}

function getRouteType(pathname: string): "protected" | "auth" | "public" {
  if (matchesRoute(pathname, ROUTE_CONFIG.protected)) return "protected";
  if (matchesRoute(pathname, ROUTE_CONFIG.auth)) return "auth";

  return "public";
}

/**
 * Main middleware function
 * Handles authentication-based routing logic
 */
export function middleware(request: NextRequest) {
  const {pathname} = request.nextUrl;
  const authenticated = isAuthenticated();
  const routeType = getRouteType(pathname);

  if (routeType === "protected" && !authenticated) {
    const loginUrl = new URL(ROUTE_CONFIG.redirects.unauthenticated, request.url);

    // Add callback URL to redirect back after login
    loginUrl.searchParams.set("callbackUrl", pathname);

    return NextResponse.redirect(loginUrl);
  }

  if (routeType === "auth" && authenticated) {
    const redirectUrl = new URL(ROUTE_CONFIG.redirects.authenticated, request.url);

    return NextResponse.redirect(redirectUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
