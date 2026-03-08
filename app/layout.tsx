import "./globals.css";
import type { ReactNode } from "react";
import SiteHeader from "../components/SiteHeader";

export const metadata = {
  title: "Axis Strategies",
  description: "Where Pharmacy Strategy Meets Performance",
  icons: {
    icon: [
      {
        url: "/favicon.png",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-800">

        <SiteHeader />

        {children}

      </body>
    </html>
  );
}