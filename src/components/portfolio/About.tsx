"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";
import { Reveal, Stagger, itemVariants } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { SectionBackdrop } from "./SectionBackdrop";

export function About() {
  return (
    <section id="about" className="relative px-4 py-28">
      <SectionBackdrop glow="electric" corner="top-left" />
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Sobre mí" title="Construyo con intención y curiosidad." />
        <div className="mt-12 grid gap-10 md:grid-cols-5">
          <Reveal className="md:col-span-3">
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                Soy <span className="text-foreground">Jesús</span>, desarrollador junior con base sólida
                en Java backend y desarrollo Android nativo. Vengo del mundo de los sistemas y las
                telecomunicaciones, y eso me ha enseñado a pensar en cada pieza del stack —no solo
                en la capa visible.
              </p>
              <p>
                Trabajo a diario con{" "}
                <span className="text-foreground">Java, Spring Boot, Kotlin y Jetpack Compose</span>,
                modelando dominios con cuidado y buscando siempre arquitecturas que escalen bien.
                Ahora mismo profundizo en{" "}
                <span className="text-foreground">arquitecturas limpias, testing y Docker</span> para
                cerrar el ciclo del desarrollo profesional.
              </p>
              <p>
                Me obsesiona el detalle: nombres claros, capas bien definidas, tests que sirvan y
                commits que cuenten una historia. Creo que el buen software se nota en lo pequeño.
              </p>
            </div>

            <Stagger className="mt-8 flex flex-wrap gap-2" stagger={0.05}>
              {[
                "Clean Code",
                "Arquitectura limpia",
                "Testing",
                "MVVM",
                "REST APIs",
                "SQL",
              ].map((t) => (
                <motion.span
                  key={t}
                  variants={itemVariants}
                  className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted-foreground"
                >
                  {t}
                </motion.span>
              ))}
            </Stagger>
          </Reveal>

          <Reveal delay={0.15} className="md:col-span-2">
            <div className="relative overflow-hidden rounded-3xl glass p-2">
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-electric/20 via-transparent to-violet/20 opacity-60 blur-xl" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-gradient-to-br from-surface-2 via-surface to-surface-2">
                <div className="absolute inset-0 grid place-items-center text-muted-foreground">
                  <User className="h-16 w-16" strokeWidth={1.25} />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
