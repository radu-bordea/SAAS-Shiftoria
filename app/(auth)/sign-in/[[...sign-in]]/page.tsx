"use client";
import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="min-h-dvh grid place-items-center">
      <SignIn forceRedirectUrl="/dashboard" />
    </div>
  );
}
