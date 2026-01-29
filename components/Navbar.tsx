"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import clsx from "clsx";

const navItems = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Staff", href: "/staff" },
  { label: "Schedule", href: "/schedule" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        
        {/* Logo */}
        <Link href="/" className="text-lg font-semibold">
          Shiftoria
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-6 text-sm">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              pathname.startsWith(item.href + "/");

            return (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  "relative transition-colors hover:text-primary",
                  isActive
                    ? "text-primary font-medium"
                    : "text-muted-foreground"
                )}
              >
                {item.label}

                {/* underline indicator */}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-primary" />
                )}
              </Link>
            );
          })}

          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
