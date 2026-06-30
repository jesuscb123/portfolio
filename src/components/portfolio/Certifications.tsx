"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Stagger, itemVariants } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { SectionBackdrop } from "./SectionBackdrop";

const certifications = [
  {
    title: "Certificado de Iniciación al Desarrollo con IA",
    issuer: "BIG school",
    date: "Marzo 2026",
    image: "/certifications/certificado-IA.webp",
  },
  {
    title: "Desarrollo seguro asistido por Inteligencia Artificial",
    issuer: "IES Rafael Alberti",
    date: "Mayo 2026",
    image: "/certifications/certificado-profesional.webp",
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="relative px-4 py-28">
      <SectionBackdrop glow="electric" corner="top-right" />
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="Acreditaciones" title="Certificaciones." />
        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2" stagger={0.1}>
          {certifications.map((c) => (
            <motion.a
              key={c.title}
              href={c.image}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface/60 transition-colors hover:border-electric/40"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-surface-2">
                <Image
                  src={c.image}
                  alt={`Vista previa de ${c.title}`}
                  fill
                  className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-3 p-6">
                <div>
                  <h3 className="font-display text-base font-semibold">{c.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {c.issuer} · {c.date}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-electric">
                  Ver certificado <ExternalLink className="h-3.5 w-3.5" />
                </span>
              </div>
            </motion.a>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
