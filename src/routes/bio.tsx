import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { useI18n } from "@/i18n/I18nProvider";
import aboutImg from "@/assets/edwin-about.jpg";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/bio")({
  head: () => ({
    meta: [
      { title: "Bio — Edwin Tello" },
      { name: "description", content: "Trayectoria, liderazgo regional y visión de Edwin Tello en infraestructura digital LATAM." },
      { property: "og:title", content: "Bio — Edwin Tello" },
      { property: "og:description", content: "25+ años construyendo infraestructura digital para Latinoamérica." },
    ],
  }),
  component: BioPage,
});

function BioPage() {
  const { t } = useI18n();
  return (
    <>
      <section className="bg-[var(--ink)] text-white pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <p className="kicker mb-4">{t.bio.kicker}</p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-tight max-w-4xl">{t.bio.title}</h1>
          </Reveal>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 md:py-24 grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-[0_30px_60px_-30px_rgba(0,0,0,0.25)]">
              <img src={aboutImg} alt="Edwin Tello" className="h-full w-full object-cover" />
            </div>
          </Reveal>
          <div className="lg:col-span-7 space-y-10">
            <Reveal>
              <p className="kicker">{t.bio.sections.profile}</p>
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-[oklch(0.35_0.02_270)]">{t.about.p1}</p>
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-[oklch(0.35_0.02_270)]">{t.about.p2}</p>
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-[oklch(0.35_0.02_270)]">{t.about.p3}</p>
            </Reveal>
            <Reveal>
              <p className="kicker">{t.bio.sections.leadership}</p>
              <ul className="mt-4 space-y-2 text-base text-[oklch(0.35_0.02_270)]">
                <li>• Presidente — ACOLDC (Asociación Colombiana de Data Centers)</li>
                <li>• Chief LATAM — ICREA (International Computer Room Experts Association)</li>
                <li>• Speaker internacional en foros de infraestructura digital</li>
              </ul>
            </Reveal>
            <Reveal>
              <p className="kicker">{t.bio.sections.certifications}</p>
              <ul className="mt-4 space-y-2 text-base text-[oklch(0.35_0.02_270)]">
                <li>• ICREA Accredited Professional</li>
                <li>• Ingeniero electrónico — 25+ años de carrera</li>
              </ul>
            </Reveal>
            <Reveal>
              <p className="kicker">{t.bio.sections.vision}</p>
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-[oklch(0.35_0.02_270)]">
                Una Latinoamérica conectada, soberana y sostenible, donde la infraestructura digital sea palanca de competitividad y bienestar.
              </p>
            </Reveal>
            <a href="/contacto" className="inline-flex items-center gap-2 h-12 px-7 rounded-full bg-[var(--brand-lime)] text-[var(--ink)] font-semibold transition-transform hover:scale-[1.02]">
              {t.nav.cta}
              <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
