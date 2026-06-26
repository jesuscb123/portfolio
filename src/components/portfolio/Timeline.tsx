"use client";

import { motion } from "framer-motion";
import { Stagger, itemVariants } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { SectionBackdrop } from "./SectionBackdrop";

const timeline = [
  {
    when: "2026 — Actualidad",
    title: "Desarrollador Full-Stack · Guzmark",
    detail: "Desarrollo de webs responsive con PHP, HTML, CSS, JavaScript y Bootstrap.",
    tag: "Experiencia",
  },
  {
    when: "2026",
    title: "Desarrollador Full-Stack · Libnamic",
    detail: "Backend con FastAPI y frontend con Vue.js sobre un proyecto real de empresa.",
    tag: "Experiencia",
  },
  {
    when: "2023 — 2025",
    title: "CFGS Desarrollo de Aplicaciones Multiplataforma",
    detail: "I.E.S Rafael Alberti — Cádiz. Java, Kotlin, Android, bases de datos y arquitectura.",
    tag: "Formación",
  },
  {
    when: "2022",
    title: "Técnico informático freelance",
    detail: "Diagnóstico, resolución de hardware/software y soporte adaptado a cada usuario.",
    tag: "Experiencia",
  },
  {
    when: "2021 — 2023",
    title: "CFGM Sistemas Microinformáticos y Redes",
    detail: "I.E.S Rafael Alberti — Base sólida en sistemas, redes y administración.",
    tag: "Formación",
  },
  {
    when: "2020",
    title: "Teleoperador · Yoigo",
    detail: "Trabajo bajo presión, gestión del tiempo y adaptación rápida a nuevos procesos.",
    tag: "Experiencia",
  },
  {
    when: "2018 — 2020",
    title: "CFGM Técnico de Telecomunicaciones",
    detail: "I.E.S Fernando Aguilar Quignon — Fundamentos técnicos y electrónica.",
    tag: "Formación",
  },
];

export function Timeline() {
  return (
    <section id="timeline" className="relative px-4 py-28">
      <SectionBackdrop glow="violet" corner="top-left" />
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="Trayectoria" title="Experiencia y formación." />
        <div className="relative mt-14">
          <div className="absolute left-3 top-0 h-full w-px bg-gradient-to-b from-electric/40 via-violet/30 to-transparent md:left-1/2" />
          <Stagger className="space-y-10" stagger={0.1}>
            {timeline.map((t, i) => (
              <motion.div
                key={t.title}
                variants={itemVariants}
                className={`relative grid grid-cols-[28px_1fr] gap-4 md:grid-cols-2 md:gap-12 ${
                  i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"
                }`}
              >
                <div className={`hidden md:block ${i % 2 === 0 ? "text-right" : "text-left"}`}>
                  <div className="text-xs uppercase tracking-widest text-electric">{t.tag}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{t.when}</div>
                </div>
                <div className="relative">
                  <span className="absolute -left-[34px] top-2 grid h-6 w-6 place-items-center rounded-full border border-electric/40 bg-background md:left-auto md:-translate-x-[calc(100%+24px)]">
                    <span className="h-2 w-2 rounded-full bg-gradient-to-br from-electric to-violet" />
                  </span>
                  <div className="rounded-2xl border border-border bg-surface/60 p-5 transition-colors hover:border-electric/40">
                    <div className="text-xs text-muted-foreground md:hidden">
                      <span className="text-electric">{t.tag}</span> · {t.when}
                    </div>
                    <h3 className="mt-1 font-display text-base font-semibold md:mt-0">{t.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{t.detail}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
