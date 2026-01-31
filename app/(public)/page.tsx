"use client";

import Link from "next/link";
import { useUser } from "@clerk/nextjs";

export default function Home() {
  const { isSignedIn } = useUser();

  return (
    <div className="flex flex-col min-h-[60vh] items-center justify-center gap-6 px-4">
      <h1 className="text-3xl font-semibold text-foreground dark:text-background text-center">
        Welcome to Shiftoria
      </h1>

      {!isSignedIn && (
        <div className="flex gap-4">
          <Link href="/sign-in">
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md shadow hover:bg-primary/90 transition">
              Sign In
            </button>
          </Link>
          <Link href="/sign-up">
            <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md shadow hover:bg-secondary/90 transition">
              Sign Up
            </button>
          </Link>
        </div>
      )}

      {isSignedIn && (
        <Link href="/dashboard">
          <button className="px-4 py-2 bg-accent text-accent-foreground rounded-md shadow hover:bg-accent/90 transition cursor-pointer border-2">
            Go to Dashboard
          </button>
        </Link>
      )}
    </div>
  );
}
