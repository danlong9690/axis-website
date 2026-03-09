import "./globals.css";
import type { ReactNode } from "react";
import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";

export const metadata: Metadata = {
  title:
    "340B Consulting | URAC & ACHC Specialty Pharmacy Credentialing | Axis Strategies",
  description:
    "Axis Strategies provides executive-level consulting for FQHC pharmacy programs, 340B optimization, URAC and ACHC specialty pharmacy credentialing, pharmacy operations, infusion startup, pharmacy startup, and pharmacy revenue optimization.",
  keywords: [
    "340B consulting",
    "FQHC pharmacy consulting",
    "URAC specialty pharmacy accreditation",
    "URAC specialty pharmacy credentialing",
    "ACHC specialty pharmacy accreditation",
    "ACHC specialty pharmacy credentialing",
    "specialty pharmacy credentialing",
    "specialty pharmacy accreditation",
    "pharmacy operations consulting",
    "infusion startup",
    "infusion center startup",
    "infusion program development",
    "pharmacy startup",
    "pharmacy startup consulting",
    "pharmacy revenue optimization",
    "contract pharmacy optimization",
  ],
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
      },
      {
        url: "/favicon.png",
        type: "image/png",
      },
    ],
    shortcut: ["/favicon.ico"],
    apple: ["/favicon.png"],
  },
  openGraph: {
    title: "Axis Strategies | 340B, Specialty Pharmacy & Infusion Consulting",
    description:
      "Executive-level consulting for 340B programs, URAC and ACHC specialty pharmacy credentialing, pharmacy operations, infusion startup, pharmacy startup, and revenue optimization.",
    url: "https://axisstrategiesgroup.com",
    siteName: "Axis Strategies",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Axis Strategies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Axis Strategies | 340B, Specialty Pharmacy & Infusion Consulting",
    description:
      "Executive-level consulting for 340B programs, URAC and ACHC specialty pharmacy credentialing, pharmacy operations, infusion startup, pharmacy startup, and revenue optimization.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Axis Strategies",
    url: "https://axisstrategiesgroup.com",
    logo: "https://axisstrategiesgroup.com/logo.png",
    description:
      "Axis Strategies provides executive-level consulting for FQHC pharmacy programs, 340B optimization, URAC and ACHC specialty pharmacy credentialing, pharmacy operations, infusion startup, pharmacy startup, and pharmacy revenue optimization.",
    areaServed: "United States",
    serviceType: [
      "340B Consulting",
      "FQHC Pharmacy Consulting",
      "URAC Specialty Pharmacy Credentialing",
      "ACHC Specialty Pharmacy Credentialing",
      "Specialty Pharmacy Accreditation",
      "Pharmacy Operations Consulting",
      "Infusion Startup",
      "Pharmacy Startup",
      "Pharmacy Revenue Optimization",
      "Contract Pharmacy Optimization",
    ],
  };

  return (
    <html lang="en">
      <body className="bg-white text-slate-800">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        <SiteHeader />

        {children}
      </body>
    </html>
  );
}