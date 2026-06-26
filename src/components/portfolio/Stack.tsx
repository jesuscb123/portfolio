"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { IconType } from "react-icons";
import {
  SiPython,
  SiKotlin,
  SiPhp,
  SiJavascript,
  SiAnthropic,
  SiOpenai,
  SiFastapi,
  SiSpringboot,
  SiHtml5,
  SiCss,
  SiAngular,
  SiVuedotjs,
  SiPostgresql,
  SiFirebase,
  SiGit,
  SiGithub,
} from "react-icons/si";
import { Coffee, MousePointer2, Code2, Sparkles, Server, Layout, Database, Wrench } from "lucide-react";
import { Stagger, itemVariants } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { SectionBackdrop } from "./SectionBackdrop";

type Tech = {
  name: string;
  icon: IconType | typeof Coffee;
  color: string;
  hint: string;
};

const groups: { label: string; icon: typeof Code2; items: Tech[] }[] = [
  {
    label: "Lenguajes",
    icon: Code2,
    items: [
      { name: "Python", icon: SiPython, color: "#3776AB", hint: "Scripting & automatización" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", hint: "Interactividad web" },
      { name: "Kotlin", icon: SiKotlin, color: "#7F52FF", hint: "Apps Android nativas" },
      { name: "Java", icon: Coffee, color: "#ED8B00", hint: "Backend orientado a objetos" },
      { name: "PHP", icon: SiPhp, color: "#777BB4", hint: "Desarrollo web backend" },
    ],
  },
  {
    label: "IA",
    icon: Sparkles,
    items: [
      { name: "Claude", icon: SiAnthropic, color: "#D97757", hint: "Asistente de desarrollo" },
      { name: "Cursor", icon: MousePointer2, color: "#6EA8FE", hint: "Editor con IA" },
      { name: "GPT", icon: SiOpenai, color: "#74AA9C", hint: "Apoyo en código" },
    ],
  },
  {
    label: "Backend",
    icon: Server,
    items: [
      { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F", hint: "Microservicios Java" },
      { name: "FastAPI", icon: SiFastapi, color: "#009688", hint: "APIs REST rápidas" },
    ],
  },
  {
    label: "Frontend",
    icon: Layout,
    items: [
      { name: "Angular", icon: SiAngular, color: "#DD0031", hint: "SPAs empresariales" },
      { name: "Vue.js", icon: SiVuedotjs, color: "#4FC08D", hint: "UI reactiva" },
      { name: "HTML", icon: SiHtml5, color: "#E34F26", hint: "Estructura semántica" },
      { name: "CSS", icon: SiCss, color: "#1572B6", hint: "Estilos & diseño" },
    ],
  },
  {
    label: "Bases de datos",
    icon: Database,
    items: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791", hint: "SQL relacional" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28", hint: "BaaS en tiempo real" },
    ],
  },
  {
    label: "Herramientas",
    icon: Wrench,
    items: [
      { name: "GitHub", icon: SiGithub, color: "#F0F6FC", hint: "Colaboración & CI" },
      { name: "Git", icon: SiGit, color: "#F05032", hint: "Control de versiones" },
    ],
  },
];

function TechChip({ tech }: { tech: Tech }) {
  const Icon = tech.icon;
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      variants={itemVariants}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{
        y: -4,
        color: tech.color,
        borderColor: `${tech.color}66`,
        boxShadow: `0 0 0 1px ${tech.color}33, 0 20px 48px -16px ${tech.color}`,
      }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="tech-chip group relative col-span-1 flex flex-col items-center justify-center gap-1 rounded-xl border border-white/10 bg-white/5 p-2 text-center text-muted-foreground backdrop-blur-md hover:z-20"
    >
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle at 50% 20%, ${tech.color}33, transparent 70%)`,
        }}
      />
      <div className="relative grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-white/5">
        <Icon className="h-3.5 w-3.5" />
      </div>
      <span className="relative text-[10px] font-medium text-foreground">{tech.name}</span>
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.92 }}
            transition={{ duration: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-none absolute left-1/2 top-full z-30 mt-2.5 w-max max-w-[160px] -translate-x-1/2"
          >
            <div className="relative rounded-xl border border-white/10 bg-popover/95 px-3 py-2 text-left shadow-xl backdrop-blur-md">
              <span
                className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 border-l border-t border-white/10 bg-popover/95"
              />
              <p className="text-[10.5px] font-semibold" style={{ color: tech.color }}>
                {tech.name}
              </p>
              <p className="mt-0.5 text-[10px] leading-snug text-muted-foreground">
                {tech.hint}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function TechGroup({
  group,
  isOpen,
  onToggle,
}: {
  group: (typeof groups)[number];
  isOpen: boolean;
  onToggle: () => void;
}) {
  const [isAnimating, setIsAnimating] = useState(false);
  const GroupIcon = group.icon;

  return (
    <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md has-[.tech-chip:hover]:z-20">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center gap-2.5 rounded-2xl px-4 py-4 text-left"
      >
        <div className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-electric to-violet text-background">
          <GroupIcon className="h-4 w-4" />
        </div>
        <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-foreground">
          {group.label}
        </h3>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="ml-auto text-muted-foreground"
        >
          <ChevronDown className="h-4 w-4" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onAnimationStart={() => setIsAnimating(true)}
            onAnimationComplete={() => setIsAnimating(false)}
            className={isAnimating ? "overflow-hidden" : "overflow-visible"}
          >
            <Stagger
              className="grid auto-rows-[78px] grid-cols-4 gap-2 px-4 pb-4 sm:auto-rows-[88px] sm:grid-cols-6 lg:auto-rows-[96px] lg:grid-cols-8"
              stagger={0.04}
            >
              {group.items.map((tech) => (
                <TechChip key={tech.name} tech={tech} />
              ))}
            </Stagger>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Stack() {
  const [openLabels, setOpenLabels] = useState<Set<string>>(
    () => new Set(groups.map((g) => g.label))
  );

  const toggle = (label: string) => {
    setOpenLabels((prev) => {
      const next = new Set(prev);
      if (next.has(label)) next.delete(label);
      else next.add(label);
      return next;
    });
  };

  return (
    <section id="stack" className="relative px-4 py-28">
      <SectionBackdrop banded glow="violet" corner="top-right" />
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Stack técnico"
          title="Las herramientas que uso cada día."
        />
        <div className="mt-14 space-y-4">
          {groups.map((g) => {
            const isOpen = openLabels.has(g.label);
            return (
              <TechGroup
                key={g.label}
                group={g}
                isOpen={isOpen}
                onToggle={() => toggle(g.label)}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
