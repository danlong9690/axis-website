import type { Metadata } from "next";
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

export const metadata = {
  title: "Axis Strategies | Pharmacy, 340B, Infusion & Healthcare Strategy Consulting",
  description:
    "Axis Strategies provides executive pharmacy leadership, 340B optimization, infusion strategy, and revenue growth consulting for healthcare organizations and FQHC systems.",
  keywords: [
    "340B consulting",
    "pharmacy consulting",
    "FQHC pharmacy strategy",
    "infusion program development",
    "healthcare revenue optimization",
    "pharmacy operations consulting",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
