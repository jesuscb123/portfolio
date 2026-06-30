"use client";

import { useState } from "react";
import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { SectionBackdrop } from "./SectionBackdrop";

type Status = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
        }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative px-4 py-28">
      <SectionBackdrop banded glow="electric" corner="bottom-right" />
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Contacto"
          title="¿Hablamos?"
          kicker="Estoy abierto a oportunidades junior, prácticas y colaboraciones."
        />
        <div className="mt-12 grid gap-8 md:grid-cols-5">
          <Reveal className="md:col-span-2">
            <div className="flex flex-col gap-5">
              <ContactRow icon={Mail} label="jesusctech.dev@gmail.com" href="mailto:jesusctech.dev@gmail.com" />
              <ContactRow icon={Phone} label="640 32 41 52" href="tel:+34640324152" />
              <ContactRow icon={Github} label="github.com/jesuscb123" href="https://github.com/jesuscb123" external />
              <ContactRow icon={Linkedin} label="LinkedIn" href="https://www.linkedin.com/" external />
              <ContactRow icon={MapPin} label="Cádiz, España" />
            </div>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-3">
            <form
              onSubmit={onSubmit}
              className="space-y-4 rounded-3xl glass p-6"
            >
              <Field label="Nombre" name="name" placeholder="Tu nombre" />
              <Field label="Email" name="email" type="email" placeholder="tu@email.com" />
              <Field label="Mensaje" name="message" textarea placeholder="Cuéntame brevemente en qué te puedo ayudar..." />
              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-electric to-violet px-6 py-3 text-sm font-medium text-background shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === "loading" && "Enviando..."}
                {status === "success" && "¡Mensaje enviado!"}
                {status === "error" && "Error al enviar"}
                {status === "idle" && (
                  <>
                    Enviar mensaje
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </>
                )}
              </button>
              {status === "error" && (
                <p className="text-center text-xs text-red-400">
                  No se pudo enviar. Inténtalo de nuevo o escríbeme directamente.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  textarea,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  textarea?: boolean;
}) {
  const cls =
    "w-full rounded-xl border border-border bg-surface/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-all focus:border-electric/60 focus:ring-2 focus:ring-electric/20";
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
      {textarea ? (
        <textarea required name={name} placeholder={placeholder} rows={5} className={cls} />
      ) : (
        <input required name={name} type={type} placeholder={placeholder} className={cls} />
      )}
    </label>
  );
}

function ContactRow({
  icon: Icon,
  label,
  href,
  external,
}: {
  icon: typeof Mail;
  label: string;
  href?: string;
  external?: boolean;
}) {
  const inner = (
    <div className="group flex items-center gap-3 rounded-2xl border border-border bg-surface/50 px-4 py-3 transition-all hover:border-electric/50">
      <div className="grid h-9 w-9 place-items-center rounded-xl bg-surface-2 text-electric transition-colors group-hover:bg-gradient-to-br group-hover:from-electric group-hover:to-violet group-hover:text-background">
        <Icon className="h-4 w-4" />
      </div>
      <span className="text-sm text-foreground">{label}</span>
      {href && <ArrowUpRight className="ml-auto h-4 w-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-electric" />}
    </div>
  );
  if (!href) return inner;
  return (
    <a href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}>
      {inner}
    </a>
  );
}
