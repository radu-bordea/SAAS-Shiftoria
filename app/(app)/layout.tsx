import { ReactNode } from "react";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Sidebar from "@/components/Sidebar";

export default async function AppLayout({
  children,
}: {
  children: ReactNode;
}) {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <div className="flex h-[calc(100vh-4rem)] pt-16 overflow-hidden">
      <aside className="hidden md:flex md:flex-col w-64 shrink-0 border-r bg-background">
        <Sidebar />
      </aside>

      <main className="flex-1 overflow-auto bg-muted/20 p-6">
        {children}
      </main>
    </div>
  );
}