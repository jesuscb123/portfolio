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
                A lo largo de mi formación he trabajado con tecnologías como{" "}
                <span className="text-foreground">Python, Kotlin, Java, Spring Boot o Angular</span>,
                pero si algo he aprendido en este tiempo es que programar no es solo escribir código.
                Para mí, lo importante es cómo se construye: por eso me centro en aplicar patrones de
                diseño y buenas prácticas que aseguren que el software sea escalable y fácil de mantener.
              </p>
              <p>
                Me considero parte de una generación que está en plena revolución tecnológica: aprendí
                las bases del desarrollo de forma tradicional, pero vivo de lleno la introducción de la{" "}
                <span className="text-foreground">Inteligencia Artificial</span> en el flujo de trabajo.
                Esto me permite ser mucho más ágil y productivo, usando la IA para acelerar y resolver
                errores de forma rápida, pero manteniendo siempre el criterio técnico para saber
                exactamente qué está sucediendo en las entrañas del software.
              </p>
              <p>
                Además, aporto un valor que va más allá del código. Mi experiencia previa como
                teleoperador me ha dado una gran capacidad para trabajar bajo presión y gestionar la
                comunicación con clientes. También he trabajado como técnico freelance optimizando y
                reparando equipos informáticos, lo que me ha dado una visión práctica y resolutiva ante
                cualquier problema técnico.
              </p>
              <p>
                Estoy en busca de mi primera oportunidad laboral para demostrar mi capacidad de
                resolución y seguir creciendo dentro de un equipo profesional.
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
