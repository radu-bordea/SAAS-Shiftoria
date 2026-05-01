"use client";
import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="min-h-dvh grid place-items-center">
      <SignUp forceRedirectUrl="/dashboard" />
    </div>
  );
}