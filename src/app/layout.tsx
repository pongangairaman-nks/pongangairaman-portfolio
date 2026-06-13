import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PonGangaiRaman NKS — Frontend Engineer",
  description:
    "Frontend Engineer with 4 years of experience building scalable, high-performance web applications using React, TypeScript, and Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${hanken.variable} h-full antialiased`}>
      <body className="min-h-full" suppressHydrationWarning>{children}</body>
    </html>
  );
}
