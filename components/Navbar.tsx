"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { useTheme } from "next-themes";
import { useAuth } from "@clerk/nextjs";

import {
  SignedIn,
  SignedOut,
  UserButton,
  OrganizationSwitcher,
  SignInButton,
  SignUpButton,
} from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { navLinks, sidebarLinks } from "@/lib/links";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  const pathname = usePathname();
  const { theme, resolvedTheme } = useTheme();
  const { has, isLoaded } = useAuth();

  const canManageOrg =
    isLoaded && (has?.({ role: "org:owner" }) || has?.({ role: "org:admin" }));

  const filteredLinks = navLinks.filter((link) => {
    const restrictedLinks = [
      "/dashboard/staff",
      "/dashboard/settings",
      "/dashboard/pricing",
    ];

    if (restrictedLinks.includes(link.href)) {
      return canManageOrg;
    }

    return true;
  });

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        {/* LOGO */}
        <Link href="/" className="text-lg font-bold">
          Shiftoria
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-6">
          {canManageOrg && (
            <OrganizationSwitcher
              afterSelectOrganizationUrl="/dashboard"
              appearance={{
                variables: {
                  colorText: theme === "dark" ? "#ffffff" : "#111827",
                  colorBackground: theme === "dark" ? "#1f1f23" : "#ffffff",
                  colorInputBackground:
                    theme === "dark" ? "#2a2a30" : "#ffffff",
                  colorNeutral: theme === "dark" ? "#BEBEBE" : "#101010",
                },
                elements: {
                  organizationSwitcherTrigger:
                    theme === "dark"
                      ? "text-white hover:bg-zinc-800"
                      : "text-gray-900 hover:bg-gray-100",
                },
              }}
            />
          )}

          {filteredLinks.map((link) => {
            const isActive =
              pathname === link.href || pathname.startsWith(`${link.href}/`);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          {/* SIGNED IN */}
          <SignedIn>
            <UserButton
              afterSwitchSessionUrl="/dashboard"
              appearance={{
                variables: {
                  colorText: theme === "dark" ? "#ffffff" : "#111827",
                },
              }}
            />
          </SignedIn>

          {/* SIGNED OUT */}
          <SignedOut>
            <div className="hidden md:flex items-center gap-2">
              <SignInButton mode="modal">
                <Button variant="ghost" size="sm">
                  Sign In
                </Button>
              </SignInButton>

              <SignUpButton mode="modal">
                <Button size="sm">Sign Up</Button>
              </SignUpButton>
            </div>
          </SignedOut>

          {/* MOBILE MENU */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side="left" className="w-64">
              <SheetHeader>
                <SheetTitle>Shiftoria</SheetTitle>
              </SheetHeader>

              {canManageOrg && (
                <div className="mt-4">
                  <OrganizationSwitcher
                    afterSelectOrganizationUrl="/dashboard"
                    appearance={{
                      variables: {
                        colorText: theme === "dark" ? "#ffffff" : "#111827",
                        colorBackground:
                          theme === "dark" ? "#1f1f23" : "#ffffff",
                        colorInputBackground:
                          theme === "dark" ? "#2a2a30" : "#ffffff",
                        colorNeutral: theme === "dark" ? "#BEBEBE" : "#101010",
                      },
                      elements: {
                        organizationSwitcherTrigger:
                          theme === "dark"
                            ? "text-white hover:bg-zinc-800"
                            : "text-gray-900 hover:bg-gray-100",
                      },
                    }}
                  />
                </div>
              )}

              <div className="mt-6 flex flex-col gap-4 p-2">
                {filteredLinks.map((link) => {
                  const isActive =
                    pathname === link.href ||
                    pathname.startsWith(`${link.href}/`);

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`text-sm font-medium ${
                        isActive ? "text-primary" : "text-muted-foreground"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}

                {sidebarLinks.map((link) => {
                  const isActive =
                    pathname === link.href ||
                    pathname.startsWith(`${link.href}/`);

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`text-sm font-medium ${
                        isActive ? "text-primary" : "text-muted-foreground"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}

                <SignedOut>
                  <div className="flex flex-col gap-2 pt-4">
                    <SignInButton mode="modal">
                      <Button variant="outline">Sign In</Button>
                    </SignInButton>

                    <SignUpButton mode="modal">
                      <Button>Sign Up</Button>
                    </SignUpButton>
                  </div>
                </SignedOut>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
