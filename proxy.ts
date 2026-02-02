import {
  clerkMiddleware,
  createRouteMatcher,
  clerkClient,
} from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Public routes (sign-in/sign-up)
const publicRoutes = createRouteMatcher(["/sign-in(.*)", "/sign-up(.*)"]);

// Owner-only route: /businesses
const ownerOnlyRoute = createRouteMatcher(["/businesses(.*)"]);

// Owner-only route: /businesses
const adminAndOwnerRoute = createRouteMatcher([
  "/dashboard/staff",
  "/dashboard/settings",
]);

export default clerkMiddleware(async (auth, req) => {
  // Allow public routes
  if (publicRoutes(req)) return NextResponse.next();

  // Get user auth info
  const { userId, orgId } = await auth();

  if (!userId) {
    // Not signed in → redirect to sign-in
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  // Init Clerk client
  const client = await clerkClient();

  // Fetch current user's organization memberships
  const memberships = (
    await client.users.getOrganizationMembershipList({ userId })
  ).data;

  // Find membership for current org
  const membership = memberships.find((m) => m.organization.id === orgId);
  const orgRole = membership?.role; // "owner" | "admin" | "staff"

  console.log("Request URL:", req.url);
  console.log("Org ID:", orgId);
  console.log("Memberships:", memberships);
  console.log("Role:", orgRole);

  // Owner-only route protection
  if (ownerOnlyRoute(req) && orgRole !== "org:owner") {
    // Not owner → redirect to dashboard
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

const isAdminOrOwner =
  orgRole === "org:admin" || orgRole === "org:owner";

if (adminAndOwnerRoute(req) && !isAdminOrOwner) {
  return NextResponse.redirect(new URL("/dashboard", req.url));
}


  // All other pages are accessible
  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"], // match all except static files
};
