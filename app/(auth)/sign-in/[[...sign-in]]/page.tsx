// app/sign-in/page.tsx
"use client";
import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background dark:bg-black px-4">
      <div className="w-full max-w-md p-6 bg-card dark:bg-card-foreground rounded-xl shadow-md border border-border">
        <h1 className="text-xl font-bold text-foreground dark:text-background mb-4 text-center">
          Sign In to Shiftoria
        </h1>
        <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" forceRedirectUrl='/dashboard'/>
      </div>
    </div>
  );
}
