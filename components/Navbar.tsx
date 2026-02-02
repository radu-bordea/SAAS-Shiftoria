"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { navLinks } from "@/lib/nav";
import ThemeToggle from "@/components/ThemeToggle";
import { SignedIn, SignedOut, SignInButton, UserButton, useOrganization } from "@clerk/nextjs";
import ActiveOrgInfo from "@/components/ActiveOrgInfo";

export default function Navbar() {
  const pathname = usePathname();
  const { membership } = useOrganization();
  const role = membership?.role; // "owner" | "admin" | "staff"

  // Filter links safely: show /businesses only for owners
  const filteredLinks = navLinks.filter((link) => {
    if (link.href === "/businesses") {
      return role === "org:owner"; // show only for owners
    }
    return true;
  });

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        {/* Logo */}
        <Link href="/dashboard" className="text-lg font-bold">
          Shiftoria
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {filteredLinks.map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          <SignedIn>
            {/* Organization + role */}
            {membership && <ActiveOrgInfo />}

            {/* Clerk user button */}
            <UserButton showName={true} afterSwitchSessionUrl="/dashboard" />
          </SignedIn>

          <SignedOut>
            <SignInButton>
              <Button variant="outline">Sign In</Button>
            </SignInButton>
          </SignedOut>

          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side="left" className="w-64 dark:bg-neutral-900">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>

              {/* Organization + role on mobile */}
              {membership && (
                <div className="mt-2 mb-4 px-2">
                  <ActiveOrgInfo />
                </div>
              )}

              {/* Mobile nav links */}
              <div className="flex flex-col gap-4">
                {filteredLinks.map((link) => {
                  const isActive = pathname.startsWith(link.href);
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`ml-4 text-sm font-medium ${
                        isActive ? "text-primary" : "text-muted-foreground"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
