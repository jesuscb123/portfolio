import type { Metadata } from "next";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Stack } from "@/components/portfolio/Stack";
import { Projects } from "@/components/portfolio/Projects";
import { Live } from "@/components/portfolio/Live";
import { Timeline } from "@/components/portfolio/Timeline";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const metadata: Metadata = {
  title: "Jesús Conde Barba — Java Backend & Android Developer",
  description:
    "Portfolio de Jesús Conde Barba, desarrollador junior especializado en Java, Spring Boot, Kotlin y Android. Proyectos, stack y experiencia.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Jesús Conde Barba — Java Backend & Android Developer",
    description:
      "Desarrollador junior enfocado en código limpio y escalable. Java, Spring Boot, Kotlin, Android.",
    type: "website",
    url: "/",
  },
  twitter: {
    title: "Jesús Conde Barba — Developer",
    description: "Portfolio profesional: Java Backend, Kotlin & Android.",
  },
};

export default function Index() {
  return (
    <div id="top" className="relative min-h-screen overflow-x-hidden">
      <Nav />
      <main>
        <Hero />
        <About />
        <Stack />
        <Live />
        <Projects />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
