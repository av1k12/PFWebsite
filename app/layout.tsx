import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Avaneesh Konda | Software Engineer",
  description:
    "CS & Mathematics at Purdue University. Systems programming, distributed backend architectures, and machine learning infrastructure.",
  authors: [{ name: "Avaneesh Konda" }],
  keywords: [
    "Avaneesh Konda",
    "Purdue",
    "software engineer",
    "systems programming",
    "distributed systems",
    "machine learning infrastructure",
  ],
};

export const viewport: Viewport = {
  themeColor: "#080808",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#080808] font-sans text-[#ededed]">
        {children}
      </body>
    </html>
  );
}
