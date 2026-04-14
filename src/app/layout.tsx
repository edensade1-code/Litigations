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

export const metadata: Metadata = {
  metadataBase: new URL("https://litigation.sadeventure.com"),
  title: "Rutledge Case — Litigation Summary",
  description:
    "Complete litigation summary for the Rutledge case. Timeline, court docket, documents, and email archive — prepared for Jason Gordon, Esq.",
  openGraph: {
    title: "Rutledge Case Summary",
    description:
      "Litigation summary with full timeline, court docket, 20 documents, and 15 emails. 8155 Cypress Point Road, West Palm Beach, FL.",
    type: "website",
    siteName: "ASAP Cash Home Buyers",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rutledge Case Summary",
    description:
      "Litigation summary with full timeline, court docket, documents, and email archive.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 font-sans">
        {children}
      </body>
    </html>
  );
}
