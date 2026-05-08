import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { useI18n } from "@/i18n/I18nProvider";
import { events } from "@/data/events";
import { MapPin, Calendar } from "lucide-react";

const MONTHS_ES = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];
const MONTHS_EN = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const MONTHS_PT = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];

function fmt(iso: string, locale: string) {
  const [y, m, d] = iso.split("-").map(Number);
  const months = locale === "en" ? MONTHS_EN : locale === "pt" ? MONTHS_PT : MONTHS_ES;
  return `${String(d).padStart(2, "0")} ${months[m - 1]} ${y}`;
}

export const Route = createFileRoute("/eventos")({
  head: () => ({
    meta: [
      { title: "Eventos — Edwin Tello" },
      { name: "description", content: "Agenda completa de conferencias, paneles y foros con Edwin Tello en LATAM e internacional." },
      { property: "og:title", content: "Eventos — Edwin Tello" },
      { property: "og:description", content: "Próximas participaciones y eventos recientes." },
    ],
  }),
  component: EventosPage,
});

function EventosPage() {
  const { t, locale } = useI18n();
  const groups: { key: "upcoming" | "international" | "recent"; label: string }[] = [
    { key: "upcoming", label: t.events.upcoming },
    { key: "international", label: t.events.international },
    { key: "recent", label: t.events.recent },
  ];
  return (
    <>
      <section className="bg-[var(--ink)] text-white pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <p className="kicker mb-4">{t.events.kicker}</p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-tight max-w-4xl">{t.events.title}</h1>
            <p className="mt-6 text-white/70 text-lg max-w-2xl">{t.events.subtitle}</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 md:py-24 space-y-16">
          {groups.map((g) => {
            const items = events.filter((e) => e.status === g.key);
            if (!items.length) return null;
            return (
              <div key={g.key}>
                <h2 className="font-display text-2xl sm:text-3xl mb-8">{g.label}</h2>
                <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((e, i) => (
                    <Reveal as="li" key={i} delay={i * 60}>
                      <article className="h-full bg-white border border-[var(--rule)] p-6 transition-shadow hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.15)]">
                        <p className="kicker">{fmt(e.date, locale)}</p>
                        <h3 className="mt-3 font-display text-xl">{e.name}</h3>
                        <p className="mt-3 inline-flex items-center gap-1.5 text-sm text-muted-foreground"><MapPin className="h-3.5 w-3.5" strokeWidth={1.5} /> {e.city}, {e.country}</p>
                        <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-muted-foreground"><Calendar className="h-3.5 w-3.5" strokeWidth={1.5} /> {e.role}</p>
                      </article>
                    </Reveal>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
