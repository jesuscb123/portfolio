"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { Stagger, itemVariants } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { SectionBackdrop } from "./SectionBackdrop";

const experience = [
  {
    when: "2026 — Actualidad",
    title: "Desarrollador Full-Stack · Guzmark",
    detail: "Desarrollo de webs responsive con PHP, HTML, CSS, JavaScript y Bootstrap.",
  },
  {
    when: "2026",
    title: "Desarrollador Full-Stack · Libnamic",
    detail: "Backend con FastAPI y frontend con Vue.js sobre un proyecto real de empresa.",
  },
  {
    when: "2022",
    title: "Técnico informático freelance",
    detail: "Diagnóstico, resolución de hardware/software y soporte adaptado a cada usuario.",
  },
  {
    when: "2020",
    title: "Teleoperador · Yoigo",
    detail: "Trabajo bajo presión, gestión del tiempo y adaptación rápida a nuevos procesos.",
  },
];

const education = [
  {
    when: "2023 — 2025",
    title: "CFGS Desarrollo de Aplicaciones Multiplataforma",
    detail: "I.E.S Rafael Alberti — Cádiz. Java, Kotlin, Android, bases de datos y arquitectura.",
  },
  {
    when: "2021 — 2023",
    title: "CFGM Sistemas Microinformáticos y Redes",
    detail: "I.E.S Rafael Alberti — Base sólida en sistemas, redes y administración.",
  },
  {
    when: "2018 — 2020",
    title: "CFGM Técnico de Telecomunicaciones",
    detail: "I.E.S Fernando Aguilar Quignon — Fundamentos técnicos y electrónica.",
  },
];

function TimelineColumn({
  label,
  icon: Icon,
  items,
}: {
  label: string;
  icon: typeof Briefcase;
  items: { when: string; title: string; detail: string }[];
}) {
  return (
    <div>
      <div className="flex items-center gap-2.5">
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-electric to-violet text-background">
          <Icon className="h-4 w-4" />
        </span>
        <h3 className="font-display text-lg font-semibold">{label}</h3>
      </div>
      <Stagger className="mt-6 space-y-4" stagger={0.08}>
        {items.map((item) => (
          <motion.div
            key={item.title}
            variants={itemVariants}
            whileHover={{ y: -3 }}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
            className="rounded-2xl border border-border bg-surface/60 p-5 transition-colors hover:border-electric/40"
          >
            <div className="text-xs uppercase tracking-widest text-electric">{item.when}</div>
            <h4 className="mt-1.5 font-display text-base font-semibold">{item.title}</h4>
            <p className="mt-2 text-sm text-muted-foreground">{item.detail}</p>
          </motion.div>
        ))}
      </Stagger>
    </div>
  );
}

export function Timeline() {
  return (
    <section id="timeline" className="relative px-4 py-28">
      <SectionBackdrop glow="violet" corner="top-left" />
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Trayectoria" title="Experiencia y formación." />
        <div className="mt-14 grid gap-10 md:grid-cols-2 md:gap-8">
          <TimelineColumn label="Experiencia" icon={Briefcase} items={experience} />
          <TimelineColumn label="Formación" icon={GraduationCap} items={education} />
        </div>
      </div>
    </section>
  );
}
