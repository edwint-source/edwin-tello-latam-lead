import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { Reveal } from "@/components/site/Reveal";
import { useI18n } from "@/i18n/I18nProvider";
import { topics } from "@/data/topics";
import { events } from "@/data/events";
import { videos } from "@/data/videos";
import { insights } from "@/data/insights";
import { ArrowRight, ArrowUpRight, Play, MapPin, Calendar } from "lucide-react";
import aboutImg from "@/assets/edwin-about.jpg";

const MONTHS_ES = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];
const MONTHS_EN = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const MONTHS_PT = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];

function formatStableDate(iso: string, locale: string) {
  // Stable, locale-aware formatter that yields the same output on server & client (no timezone drift).
  const [y, m, d] = iso.split("-").map(Number);
  const months = locale === "en" ? MONTHS_EN : locale === "pt" ? MONTHS_PT : MONTHS_ES;
  const day = String(d).padStart(2, "0");
  return `${day} ${months[m - 1]} ${y}`;
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Edwin Tello — Executive thought leader LATAM" },
      { name: "description", content: "Speaker internacional en infraestructura digital, Data Centers, IA y conectividad para Latinoamérica." },
      { property: "og:title", content: "Edwin Tello — Executive thought leader LATAM" },
      { property: "og:description", content: "Conectando infraestructura, inversión y transformación digital para una Latinoamérica más competitiva." },
    ],
  }),
  component: Index,
});

function Index() {
  const { t, locale } = useI18n();
  const featuredVideos = videos.slice(0, 3);
  const upcomingEvents = events.filter((e) => e.status !== "recent").slice(0, 3);
  const featuredInsights = insights.slice(0, 6);

  return (
    <>
      <Hero />

      {/* Stat strip */}
      <section className="bg-[var(--ink)] text-white border-t border-white/10">
        <div className="mx-auto max-w-7xl">
          <ul className="flex md:grid md:grid-cols-4 overflow-x-auto md:overflow-visible no-scrollbar snap-x snap-mandatory">
            {[
              { value: "25+", label: t.stats.years },
              { value: "ACOLDC", label: t.stats.acoldc },
              { value: "ICREA", label: t.stats.icrea },
              { value: "LATAM", label: t.stats.speaker },
            ].map((it, i) => (
              <li key={it.label} className={`snap-start min-w-[70%] md:min-w-0 px-6 lg:px-10 py-7 md:py-9 ${i > 0 ? "md:border-l border-white/10" : ""}`}>
                <p className="font-display text-3xl md:text-4xl text-white">
                  {it.value === "25+" ? <>25<span className="text-[var(--brand-lime)]">+</span></> : it.value}
                </p>
                <p className="mt-2 text-xs uppercase tracking-widest text-white/55">{it.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* About Edwin — humano */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            <Reveal className="lg:col-span-5">
              <div className="relative">
                <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-[0_30px_60px_-30px_rgba(0,0,0,0.25)]">
                  <img src={aboutImg} alt="Edwin Tello en evento" className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div className="absolute -bottom-3 -left-3 h-16 w-16 border-b border-l border-[var(--brand-lime)]" aria-hidden="true" />
              </div>
            </Reveal>
            <Reveal className="lg:col-span-7" delay={120}>
              <p className="kicker">{t.about.kicker}</p>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl tracking-tight max-w-xl">{t.about.title}</h2>
              <div className="mt-6 space-y-4 text-base sm:text-lg leading-relaxed text-[oklch(0.35_0.02_270)] max-w-xl">
                <p>{t.about.p1}</p>
                <p>{t.about.p2}</p>
                <p>{t.about.p3}</p>
              </div>
              <a href="/bio" className="group mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--ink)] hover:text-[oklch(0.45_0.18_140)] transition-colors">
                {t.about.cta}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.75} />
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="bg-[var(--surface-soft)]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 md:py-28">
          <header className="max-w-3xl">
            <p className="kicker mb-4">{t.topics.kicker}</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-tight">{t.topics.title}</h2>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">{t.topics.subtitle}</p>
          </header>
          <ul className="mt-14 grid gap-px bg-[var(--rule)] sm:grid-cols-2 lg:grid-cols-3 border border-[var(--rule)]">
            {topics.map((topic, i) => {
              const Icon = topic.icon;
              return (
                <Reveal key={topic.title.es} as="li" delay={i * 30} className="bg-white p-7 group transition-colors hover:bg-[var(--surface-soft)]">
                  <Icon className="h-6 w-6 text-[var(--brand-purple)] transition-colors group-hover:text-[oklch(0.45_0.18_140)]" strokeWidth={1.5} />
                  <h3 className="mt-5 font-display text-lg text-foreground">{topic.title[locale]}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{topic.desc[locale]}</p>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Videos */}
      <section className="bg-[var(--ink)] text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 md:py-28">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <header className="max-w-2xl">
              <p className="kicker mb-4">{t.videos.kicker}</p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white">{t.videos.title}</h2>
              <p className="mt-5 text-white/70 leading-relaxed">{t.videos.subtitle}</p>
            </header>
            <a href="/videos" className="group inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--brand-lime)] hover:text-white transition-colors">
              {t.videos.cta}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.75} />
            </a>
          </div>
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredVideos.map((v, i) => (
              <Reveal as="li" key={i} delay={i * 60}>
                <a href={`https://www.youtube.com/watch?v=${v.youtubeId}`} target="_blank" rel="noopener noreferrer" className="group block">
                  <div className="relative aspect-video overflow-hidden rounded-sm bg-black/40 border border-white/10">
                    <img src={`https://i.ytimg.com/vi/${v.youtubeId}/hqdefault.jpg`} alt="" className="h-full w-full object-cover opacity-80 transition-opacity group-hover:opacity-100" loading="lazy" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[var(--brand-lime)] text-[var(--ink)] transition-transform group-hover:scale-110">
                        <Play className="h-5 w-5 ml-0.5" strokeWidth={2} fill="currentColor" />
                      </span>
                    </div>
                  </div>
                  <p className="mt-4 kicker">{v.category}</p>
                  <h3 className="mt-2 font-display text-lg text-white group-hover:text-[var(--brand-lime)] transition-colors">{v.title}</h3>
                </a>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Speaking */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 md:py-28">
          <header className="max-w-3xl">
            <p className="kicker mb-4">{t.speaking.kicker}</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-tight">{t.speaking.title}</h2>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-2xl">{t.speaking.subtitle}</p>
          </header>
          <ol className="mt-12 grid gap-px bg-[var(--rule)] sm:grid-cols-2 lg:grid-cols-3 border border-[var(--rule)]">
            {[
              { n: "01", t: { es: "Keynote", en: "Keynote", pt: "Keynote" }, d: { es: "Conferencia magistral de 30–60 minutos.", en: "30–60 minute master keynote.", pt: "Conferência magistral de 30–60 minutos." } },
              { n: "02", t: { es: "Panel", en: "Panel", pt: "Painel" }, d: { es: "Panelista experto en mesas regionales.", en: "Expert panelist in regional roundtables.", pt: "Painelista expert em mesas regionais." } },
              { n: "03", t: { es: "Moderación", en: "Moderation", pt: "Moderação" }, d: { es: "Moderación estratégica que convierte un panel en conversación.", en: "Strategic moderation.", pt: "Moderação estratégica." } },
              { n: "04", t: { es: "Workshop ejecutivo", en: "Executive workshop", pt: "Workshop executivo" }, d: { es: "Sesión cerrada con líderes de tu organización.", en: "Closed session with leaders.", pt: "Sessão fechada com líderes." } },
              { n: "05", t: { es: "Advisory session", en: "Advisory session", pt: "Sessão de assessoria" }, d: { es: "Asesoría privada para C-level e inversionistas.", en: "Private advisory for C-level.", pt: "Consultoria privada para C-level." } },
              { n: "06", t: { es: "Entrevista", en: "Interview", pt: "Entrevista" }, d: { es: "Para prensa, podcast o contenido de marca.", en: "For press, podcast or branded content.", pt: "Para imprensa, podcast ou conteúdo." } },
            ].map((f, i) => (
              <Reveal as="li" key={f.n} delay={i * 40} className="bg-white p-7">
                <span className="font-display text-2xl text-[var(--brand-purple)]">{f.n}</span>
                <h3 className="mt-3 font-display text-xl">{f.t[locale]}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.d[locale]}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Events */}
      <section className="bg-[var(--surface-soft)]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 md:py-28">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <header className="max-w-2xl">
              <p className="kicker mb-4">{t.events.kicker}</p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-tight">{t.events.title}</h2>
              <p className="mt-5 text-base sm:text-lg text-muted-foreground">{t.events.subtitle}</p>
            </header>
            <a href="/eventos" className="group inline-flex items-center gap-1.5 text-sm font-semibold hover:text-[oklch(0.45_0.18_140)] transition-colors">
              {t.events.cta}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.75} />
            </a>
          </div>
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {upcomingEvents.map((e, i) => (
              <Reveal as="li" key={i} delay={i * 60}>
                <article className="h-full bg-white border border-[var(--rule)] p-6 transition-shadow hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.15)]">
                  <p className="kicker">{formatStableDate(e.date, locale)}</p>
                  <h3 className="mt-3 font-display text-xl">{e.name}</h3>
                  <p className="mt-3 inline-flex items-center gap-1.5 text-sm text-muted-foreground"><MapPin className="h-3.5 w-3.5" strokeWidth={1.5} /> {e.city}, {e.country}</p>
                  <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-muted-foreground"><Calendar className="h-3.5 w-3.5" strokeWidth={1.5} /> {e.role}</p>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Insights */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 md:py-28">
          <header className="max-w-3xl">
            <p className="kicker mb-4">{t.insights.kicker}</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-tight">{t.insights.title}</h2>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-2xl">{t.insights.subtitle}</p>
          </header>
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredInsights.map((insight, i) => (
              <Reveal as="li" key={insight.title} delay={i * 40}>
                <article className="h-full border border-[var(--rule)] p-6 transition-colors hover:border-[var(--brand-lime)]">
                  <div className="flex items-center justify-between">
                    <p className="kicker-muted">{insight.category}</p>
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-[var(--brand-purple)] border border-[var(--brand-purple)]/30 rounded-full px-2 py-0.5">{t.insights.soon}</span>
                  </div>
                  <h3 className="mt-4 font-display text-lg leading-tight">{insight.title}</h3>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-[var(--ink)] text-white">
        <div aria-hidden="true" className="absolute inset-0 opacity-60" style={{ background: "radial-gradient(60% 60% at 80% 30%, oklch(0.4 0.28 295 / 0.45), transparent 60%), radial-gradient(50% 50% at 10% 80%, oklch(0.4 0.28 295 / 0.25), transparent 60%)" }} />
        <div className="relative mx-auto max-w-5xl px-6 lg:px-10 py-24 md:py-32 text-center">
          <Reveal>
            <p className="kicker mb-6">{t.finalCta.cta}</p>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl tracking-tight max-w-3xl mx-auto">{t.finalCta.title}</h2>
            <p className="mt-6 text-white/70 text-base sm:text-lg max-w-xl mx-auto">{t.finalCta.subtitle}</p>
            <a href="/contacto" className="mt-10 inline-flex items-center gap-2 h-12 px-7 rounded-full bg-[var(--brand-lime)] text-[var(--ink)] font-semibold transition-transform hover:scale-[1.02]">
              {t.finalCta.cta}
              <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
