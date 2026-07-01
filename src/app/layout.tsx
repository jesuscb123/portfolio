import type { Metadata, Viewport } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sora-var",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#141414",
};

export const metadata: Metadata = {
  title: "SENTINEL AI — Security Systems",
  description:
    "Enterprise security systems built in days. AI-powered surveillance deployed with zero-trust architecture. Smart access control for your entire facility.",
  openGraph: {
    title: "SENTINEL AI — Security Systems",
    description:
      "Enterprise security systems built in days. AI-powered surveillance with zero-trust architecture.",
    siteName: "SENTINEL AI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SENTINEL AI — Security Systems",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={sora.variable} suppressHydrationWarning>
      <body className="font-sora antialiased">{children}</body>
    </html>
  );
}
