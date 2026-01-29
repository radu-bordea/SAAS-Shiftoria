import type { Metadata } from "next";

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
