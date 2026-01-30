import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import Providers from "@/providers";
import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import "./globals.css";

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
  title: "Shiftoria - Staff Scheduling Made Simple",
  description: "Shiftoria helps restaurants and small businesses manage staff schedules, shifts, and requests easily.",
  keywords: ["staff scheduling", "restaurant shifts", "employee management", "Shiftoria", "small business SaaS"],
  authors: [{ name: "Your Name", url: "https://www.shiftoria.com" }],
  creator: "Your Name",
  openGraph: {
    title: "Shiftoria - Staff Scheduling Made Simple",
    description: "Shiftoria helps restaurants and small businesses manage staff schedules, shifts, and requests easily.",
    url: "https://www.shiftoria.com",
    siteName: "Shiftoria",
    images: [
      {
        url: "https://www.shiftoria.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Shiftoria App Screenshot",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shiftoria - Staff Scheduling Made Simple",
    description: "Shiftoria helps restaurants and small businesses manage staff schedules, shifts, and requests easily.",
    creator: "@YourTwitterHandle",
    images: ["https://www.shiftoria.com/og-image.png"],
  },
  themeColor: "#5F3DC4", // match your brand / Tailwind primary
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Providers>
            <Navbar />
            <Container className="pt-24 pb-10">{children}</Container>
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}