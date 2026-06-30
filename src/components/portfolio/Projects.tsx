"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Stagger, itemVariants } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { SectionBackdrop } from "./SectionBackdrop";

type Project = {
  title: string;
  description: string;
  tags: string[];
  repo: string;
  demo: string | null;
  accent: string;
  screenshot?: string;
};

const projects: Project[] = [
  {
    title: "TFG · App Salud Mental",
    description:
      "Aplicación Android para mejorar la comunicación entre psicólogos y pacientes durante el proceso terapéutico. Acompañamiento continuo y registro de progreso.",
    tags: ["Kotlin", "Jetpack Compose", "Firebase", "MVVM"],
    repo: "https://github.com/jesuscb123",
    demo: null,
    accent: "from-electric/30 to-violet/20",
    screenshot: "/projects/app-movil-v2.webp",
  },
  {
    title: "Backend Microservicios",
    description:
      "API REST modular construida con Spring Boot, JWT y PostgreSQL. Documentación OpenAPI y arquitectura escalable orientada a despliegue en Docker.",
    tags: ["Java", "Spring Boot", "PostgreSQL", "Docker"],
    repo: "https://github.com/jesuscb123",
    demo: null,
    accent: "from-violet/30 to-electric/20",
    screenshot: "/projects/backend-microservicios.webp",
  },
  {
    title: "Integración Full-Stack · Libnamic",
    description:
      "Funcionalidades end-to-end sobre proyecto real de empresa: backend con FastAPI (Python) y frontend con Vue.js. Integración, mejoras y nuevas features.",
    tags: ["FastAPI", "Vue.js", "Python", "REST"],
    repo: "https://github.com/jesuscb123",
    demo: null,
    accent: "from-electric/25 to-violet/25",
  },
  {
    title: "Repositorio personal",
    description:
      "Colección de proyectos propios y prácticas: experimentos con Compose, retos de algoritmia, microproyectos backend y prototipos Android.",
    tags: ["Kotlin", "Java", "Android", "Sandbox"],
    repo: "https://github.com/jesuscb123",
    demo: null,
    accent: "from-violet/20 to-electric/30",
    screenshot: "/projects/imagen-repositorios-propios.webp",
  },
];

function ProjectVisual({ title }: { title: string }) {
  // Procedural visual avoids placeholder images
  const initials = title
    .replace(/[^A-Za-z ]/g, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
  return (
    <div className="relative grid h-full w-full place-items-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,oklch(0.72_0.20_255_/_0.25),transparent_55%),radial-gradient(circle_at_75%_70%,oklch(0.70_0.18_295_/_0.22),transparent_60%)]" />
      <div className="absolute inset-0 opacity-[0.08] [background:repeating-linear-gradient(45deg,#fff_0_1px,transparent_1px_12px)]" />
      <div className="relative font-display text-5xl font-semibold tracking-tight text-gradient">
        {initials}
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative px-4 py-28">
      <SectionBackdrop banded glow="electric" corner="top-right" />
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Proyectos" title="Trabajo seleccionado." />
        <Stagger className="mt-12 grid gap-5 md:grid-cols-2" stagger={0.08}>
          {projects.map((p) => (
            <motion.article
              key={p.title}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl border border-border glass p-6 transition-all hover:border-electric/40"
            >
              <div
                className={`pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-br ${p.accent} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100`}
              />
              <div className="relative flex h-full flex-col">
                <div className="relative flex aspect-[16/9] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-surface-2 via-surface to-surface-2">
                  {p.screenshot ? (
                    <Image
                      src={p.screenshot}
                      alt={`Captura de ${p.title}`}
                      fill
                      className="object-cover object-top"
                    />
                  ) : (
                    <ProjectVisual title={p.title} />
                  )}
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border bg-surface px-2.5 py-0.5 text-[11px] text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-3 pt-2 text-sm">
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-foreground transition-colors hover:text-electric"
                  >
                    <Github className="h-4 w-4" /> Repositorio
                  </a>
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-foreground transition-colors hover:text-electric"
                    >
                      <ExternalLink className="h-4 w-4" /> Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
