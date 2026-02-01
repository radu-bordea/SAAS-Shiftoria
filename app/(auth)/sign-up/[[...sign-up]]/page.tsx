"use client";
import { SignIn } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="min-h-dvh grid place-items-center">
      <SignIn forceRedirectUrl="/dashboard" />
    </div>
  );
}
