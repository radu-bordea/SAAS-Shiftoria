"use client";

import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background dark:bg-black px-4">
      <div className="w-full max-w-md p-6 bg-card dark:bg-card-foreground rounded-xl shadow-md border border-border">
        <h1 className="text-xl font-bold text-foreground dark:text-background mb-4 text-center">
          Sign Up to Shiftoria
        </h1>

        <SignUp
          path="/sign-up"
          routing="path"
          signInUrl="/sign-in" // links to the Sign In page
          forceRedirectUrl='/dashboard'
        />
      </div>
    </div>
  );
}
