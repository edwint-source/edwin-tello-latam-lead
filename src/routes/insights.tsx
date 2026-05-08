import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { useI18n } from "@/i18n/I18nProvider";
import { insights } from "@/data/insights";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights — Edwin Tello" },
      { name: "description", content: "Análisis estratégicos sobre Data Centers, IA, cloud e infraestructura digital LATAM." },
      { property: "og:title", content: "Insights — Edwin Tello" },
      { property: "og:description", content: "Pensamiento estratégico para la transformación digital regional." },
    ],
  }),
  component: InsightsPage,
});

function InsightsPage() {
  const { t } = useI18n();
  return (
    <>
      <section className="bg-[var(--ink)] text-white pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <p className="kicker mb-4">{t.insights.kicker}</p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-tight max-w-4xl">{t.insights.title}</h1>
            <p className="mt-6 text-white/70 text-lg max-w-2xl">{t.insights.subtitle}</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 md:py-24">
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {insights.map((insight, i) => (
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

      <section className="bg-[var(--surface-soft)]">
        <div className="mx-auto max-w-3xl px-6 lg:px-10 py-20 md:py-24 text-center">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl tracking-tight">{t.insights.newsletterTitle}</h2>
            <p className="mt-4 text-muted-foreground">{t.insights.newsletterCopy}</p>
            <form className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input type="email" required placeholder={t.insights.newsletterPlaceholder} className="flex-1 h-12 px-4 rounded-full border border-[var(--rule)] bg-white text-sm" />
              <button type="submit" className="h-12 px-6 rounded-full bg-[var(--brand-lime)] text-[var(--ink)] font-semibold">{t.insights.newsletterCta}</button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
