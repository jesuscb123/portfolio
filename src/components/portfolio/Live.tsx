"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Stagger, itemVariants } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { SectionBackdrop } from "./SectionBackdrop";

const live = [
  {
    title: "Educación Virtual Activa",
    description:
      "Plataforma web educativa desarrollada con PHP y Bootstrap, pensada para ofrecer una experiencia de aprendizaje clara y accesible.",
    tags: ["PHP", "JavaScript", "Bootstrap"],
    site: "https://www.educacionvirtualactiva.com",
    screenshot: "/projects/captura-web-educacionactiva.webp",
  },
  {
    title: "España Emprende",
    description:
      "Sitio web institucional construido con PHP, JavaScript y Bootstrap, con un diseño responsive orientado a la difusión de programas de emprendimiento.",
    tags: ["PHP", "JavaScript", "Bootstrap"],
    site: "https://www.pixemun.com/espana-emprende",
  },
  {
    title: "Talento Joven",
    description:
      "Landing page desarrollada con PHP y Bootstrap para la difusión de un programa de empleo e impulso al talento joven.",
    tags: ["PHP", "JavaScript", "Bootstrap"],
    site: "https://www.pixemun.com/talento-joven",
  },
  {
    title: "Talento 45",
    description:
      "Landing page desarrollada con PHP y Bootstrap para la difusión de un programa de empleo dirigido a mayores de 45 años.",
    tags: ["PHP", "JavaScript", "Bootstrap"],
    site: "https://www.pixemun.com/talento-45",
  },
];

export function Live() {
  return (
    <section id="live" className="relative px-4 py-28">
      <SectionBackdrop glow="violet" corner="bottom-left" />
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Live Projects"
          title="Aplicaciones desplegadas."
          kicker="Productos en producción que puedes visitar ahora mismo."
        />
        <Stagger className="mt-12 grid gap-5 md:grid-cols-2" stagger={0.1}>
          {live.map((p) => (
            <motion.article
              key={p.title}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-surface/50 transition-all hover:border-electric/40"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-surface-2">
                {p.screenshot ? (
                  <Image
                    src={p.screenshot}
                    alt={`Captura de ${p.title}`}
                    fill
                    className="object-cover object-top"
                  />
                ) : (
                  <iframe
                    src={p.site}
                    title={p.title}
                    loading="lazy"
                    className="pointer-events-none absolute left-0 top-0 h-[400%] w-[400%] origin-top-left scale-[0.25]"
                  />
                )}
                <div className="absolute left-4 top-4 flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-foreground/30" />
                  <span className="h-2.5 w-2.5 rounded-full bg-foreground/30" />
                  <span className="h-2.5 w-2.5 rounded-full bg-foreground/30" />
                </div>
                <div className="absolute inset-x-6 bottom-6 rounded-xl glass p-3 font-mono text-[11px] text-muted-foreground">
                  <span className="text-electric">→</span>{" "}
                  {p.site.replace(/^https?:\/\//, "")}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold">{p.title}</h3>
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
                <div className="mt-5 flex flex-wrap gap-2">
                  <a
                    href={p.site}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-electric to-violet px-4 py-2 text-xs font-medium text-background transition-transform hover:-translate-y-0.5"
                  >
                    Visitar sitio <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
