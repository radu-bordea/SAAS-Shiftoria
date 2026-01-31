// app/(app)/layout.tsx
"use server";

import { ReactNode } from "react";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import Navbar from "@/components/Navbar";
import Container from "@/components/Container";

export default async function AppLayout({ children }: { children: ReactNode }) {
  const { userId } = await auth(); // server-side auth check

  if (!userId) {
    redirect("/sign-in"); // not logged in → redirect
  }

  return (
    <>
      <Navbar />
      <Container className="pt-24 pb-10">{children}</Container>
    </>
  );
}
