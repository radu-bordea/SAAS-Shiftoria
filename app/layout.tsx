import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import Providers from "@/providers";
import "./globals.css";
import Navbar from "@/components/Navbar";

import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shiftoria",
  description: "Staff scheduling made simple",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen mt-24`}
        >
          <Providers>
            <Navbar />
            {children}
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}