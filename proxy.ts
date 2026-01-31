import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - _next (Next.js internals)
     * - static files (images, favicon, etc.)
     */
    "/((?!_next|.*\\..*).*)",
  ],
};
