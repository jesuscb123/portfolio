"use client";

import Image from "next/image";
import { motion } from "framer-motion";
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
                Durante mi trayectoria académica y profesional, he trabajado con un stack tecnológico
                versátil que incluye{" "}
                <span className="text-foreground">
                  Python, Kotlin, Java, PHP, Next.js, Spring Boot o Angular
                </span>
                . Sin embargo, mi mayor aprendizaje ha sido comprender que programar va mucho más allá
                de picar código. Mi enfoque se centra en cómo se construye el software: aplico patrones
                de diseño y buenas prácticas para garantizar soluciones que sean escalables, robustas y
                fáciles de mantener.
              </p>
              <p>
                Me considero parte de una generación en plena revolución tecnológica. Aprendí las bases
                del desarrollo de forma tradicional, pero vivo de lleno la introducción de la{" "}
                <span className="text-foreground">Inteligencia Artificial</span> en el flujo de trabajo.
                Esto me permite ser mucho más ágil y productivo, usando la IA para acelerar el desarrollo
                y resolver errores de forma rápida, pero manteniendo siempre el sólido criterio técnico
                necesario para saber exactamente qué está sucediendo en las entrañas del software.
              </p>
              <p>
                He validado estos conocimientos en el mundo real desarrollando{" "}
                <span className="text-foreground">plataformas web a nivel corporativo</span>, lo que me
                ha proporcionado una comprensión profunda del ciclo de vida del software y de las
                necesidades de negocio. Esta experiencia, sumada a mi trabajo como técnico en
                optimización y reparación de equipos, ha forjado en mí una mentalidad analítica y
                altamente resolutiva frente a cualquier desafío.
              </p>
              <p>
                Además, aporto un valor que va más allá del código. Mi experiencia previa como
                teleoperador me ha dotado de una excelente capacidad para trabajar bajo presión,
                adaptarme rápidamente a los cambios y gestionar una comunicación eficaz y empática con
                los clientes o el equipo.
              </p>
            </div>

            <Stagger className="mt-14 flex flex-wrap gap-2" stagger={0.05}>
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

          <Reveal delay={0.15} className="md:col-span-2 flex items-center justify-center">
            <div className="relative w-64 h-64 md:w-full md:h-auto md:aspect-square">
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "conic-gradient(from 0deg, #00f0ff, #a855f7, #f59e0b, #10b981, #ec4899, #00f0ff)",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute -inset-3 rounded-full opacity-50 blur-2xl"
                style={{
                  background:
                    "conic-gradient(from 0deg, #00f0ff, #a855f7, #f59e0b, #10b981, #ec4899, #00f0ff)",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute inset-[3px] rounded-full overflow-hidden">
                <Image
                  src="/profile/foto-jesus.webp"
                  alt="Jesús Conde Barba"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
