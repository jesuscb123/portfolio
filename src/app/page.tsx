import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/features/HeroSection";

export const metadata: Metadata = {
  title: "SENTINEL AI — Security Systems",
  description:
    "Enterprise security systems built in days. AI-powered surveillance deployed with zero-trust architecture. Smart access control set up for your entire facility.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "SENTINEL AI — Security Systems",
    description:
      "Enterprise security systems built in days. AI-powered surveillance with zero-trust architecture.",
    type: "website",
    url: "/",
  },
};

export default function Index() {
  return (
    <div className="bg-hero-bg min-h-screen">
      <Navbar />
      <HeroSection />
    </div>
  );
}
