import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { useI18n } from "@/i18n/I18nProvider";
import { topics } from "@/data/topics";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/speaking")({
  head: () => ({
    meta: [
      { title: "Speaking — Edwin Tello" },
      { name: "description", content: "Keynotes, paneles, moderación y workshops ejecutivos con Edwin Tello." },
      { property: "og:title", content: "Speaking — Edwin Tello" },
      { property: "og:description", content: "Formatos disponibles para tu evento o sesión ejecutiva." },
    ],
  }),
  component: SpeakingPage,
});

const formats = [
  { n: "01", t: { es: "Keynote", en: "Keynote", pt: "Keynote" }, d: { es: "Conferencia magistral de 30–60 minutos.", en: "30–60 minute master keynote.", pt: "Conferência magistral de 30–60 minutos." } },
  { n: "02", t: { es: "Panel", en: "Panel", pt: "Painel" }, d: { es: "Panelista experto en mesas regionales.", en: "Expert panelist in regional roundtables.", pt: "Painelista expert em mesas regionais." } },
  { n: "03", t: { es: "Moderación", en: "Moderation", pt: "Moderação" }, d: { es: "Moderación estratégica que convierte un panel en conversación.", en: "Strategic moderation.", pt: "Moderação estratégica." } },
  { n: "04", t: { es: "Workshop ejecutivo", en: "Executive workshop", pt: "Workshop executivo" }, d: { es: "Sesión cerrada con líderes de tu organización.", en: "Closed session with leaders.", pt: "Sessão fechada com líderes." } },
  { n: "05", t: { es: "Advisory session", en: "Advisory session", pt: "Sessão de assessoria" }, d: { es: "Asesoría privada para C-level e inversionistas.", en: "Private advisory for C-level.", pt: "Consultoria privada para C-level." } },
  { n: "06", t: { es: "Entrevista", en: "Interview", pt: "Entrevista" }, d: { es: "Para prensa, podcast o contenido de marca.", en: "For press, podcast or branded content.", pt: "Para imprensa, podcast ou conteúdo." } },
];

function SpeakingPage() {
  const { t, locale } = useI18n();
  return (
    <>
      <section className="bg-[var(--ink)] text-white pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <p className="kicker mb-4">{t.speaking.kicker}</p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-tight max-w-4xl">{t.speaking.title}</h1>
            <p className="mt-6 text-white/70 text-lg max-w-2xl">{t.speaking.subtitle}</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 md:py-24">
          <ol className="grid gap-px bg-[var(--rule)] sm:grid-cols-2 lg:grid-cols-3 border border-[var(--rule)]">
            {formats.map((f, i) => (
              <Reveal as="li" key={f.n} delay={i * 40} className="bg-white p-7">
                <span className="font-display text-2xl text-[var(--brand-purple)]">{f.n}</span>
                <h3 className="mt-3 font-display text-xl">{f.t[locale]}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.d[locale]}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-[var(--surface-soft)]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 md:py-24">
          <header className="max-w-3xl">
            <p className="kicker mb-4">{t.topics.kicker}</p>
            <h2 className="font-display text-3xl sm:text-4xl tracking-tight">{t.topics.title}</h2>
          </header>
          <ul className="mt-12 grid gap-px bg-[var(--rule)] sm:grid-cols-2 lg:grid-cols-3 border border-[var(--rule)]">
            {topics.map((topic) => {
              const Icon = topic.icon;
              return (
                <li key={topic.title.es} className="bg-white p-7">
                  <Icon className="h-6 w-6 text-[var(--brand-purple)]" strokeWidth={1.5} />
                  <h3 className="mt-5 font-display text-lg">{topic.title[locale]}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{topic.desc[locale]}</p>
                </li>
              );
            })}
          </ul>
          <div className="mt-12">
            <a href="/contacto" className="inline-flex items-center gap-2 h-12 px-7 rounded-full bg-[var(--brand-lime)] text-[var(--ink)] font-semibold">
              {t.speaking.cta}
              <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
