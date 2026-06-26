"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import { Particles } from "./Particles";
import { Counter } from "./Counter";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative flex min-h-[100svh] items-center justify-center px-4 pt-24">
      <div className="pointer-events-none absolute inset-0">
        <Particles density={70} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 mx-auto max-w-4xl text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-muted-foreground"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-electric opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-electric" />
          </span>
          Disponible para nuevas oportunidades · Cádiz, España
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
        >
          Jesús <span className="text-gradient">Conde Barba</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-5 text-lg text-muted-foreground sm:text-xl"
        >
          <span className="text-foreground">Mobile & Web Software Engineer</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mx-auto mt-5 max-w-2xl text-balance text-base text-muted-foreground"
        >
          Dando vida a productos digitales de principio a fin. Especializado en apps Android y
          plataformas web Full Stack. Potencio mi flujo de trabajo con herramientas de IA para
          optimizar los tiempos de entrega, garantizando un código robusto, seguro y bajo
          supervisión humana.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="/cv-jesus-conde-barba.pdf"
            download
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-electric to-violet px-6 py-3 text-sm font-medium text-background shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-0.5"
          >
            <Download className="h-4 w-4" />
            Descargar CV
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-electric/60 hover:bg-surface"
          >
            Contactar
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-3 gap-4"
        >
          {[
            { k: 2, s: "", l: "Años desarrollando" },
            { k: 15, s: "+", l: "Proyectos" },
            { k: 18, s: "", l: "Tecnologías" },
          ].map((s) => (
            <div key={s.l} className="rounded-2xl glass px-4 py-5">
              <div className="font-display text-3xl font-semibold text-gradient sm:text-4xl">
                <Counter to={s.k} suffix={s.s} />
              </div>
              <div className="mt-1 text-xs text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
        aria-label="Scroll"
      >
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <ArrowDown className="h-4 w-4" />
        </motion.div>
      </motion.a>
    </section>
  );
}
