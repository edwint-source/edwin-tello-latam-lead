import { ArrowUpRight, ArrowRight } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

/**
 * Hero — fondo oscuro premium, tipografía editorial, sin foto.
 */
export function Hero() {
  const { t } = useI18n();

  return (
    <section
      className="relative overflow-hidden text-white"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Sutil grid técnico — soporte visual, no protagonista */}
      <div className="absolute inset-0 hero-grid opacity-60" aria-hidden="true" />
      {/* Glow morado difuso */}
      <div
        aria-hidden="true"
        className="absolute -top-40 right-0 h-[700px] w-[700px] rounded-full opacity-50 blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.5 0.31 295 / 0.5), transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-4xl">
            <p className="kicker reveal is-visible">{t.hero.kicker}</p>
            <h1
              className="reveal is-visible mt-5 font-display text-white"
              style={{
                fontSize: "clamp(2.25rem, 7vw, 5rem)",
                lineHeight: 1.02,
                transitionDelay: "80ms",
              }}
            >
              {t.hero.titleBefore}
              <span className="highlight text-white">{t.hero.titleHighlight}</span>
              {t.hero.titleAfter}
            </h1>
            <p
              className="reveal is-visible mt-7 text-base sm:text-lg text-white/75 max-w-xl leading-relaxed"
              style={{ transitionDelay: "180ms" }}
            >
              {t.hero.subtitle}
            </p>
            <p
              className="reveal is-visible mt-6 text-sm text-white/55"
              style={{ transitionDelay: "260ms" }}
            >
              {t.hero.credentials}
            </p>
            <div
              className="reveal is-visible mt-9 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-4"
              style={{ transitionDelay: "340ms" }}
            >
              <a
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full bg-[var(--brand-lime)] text-[var(--ink)] font-semibold transition-transform hover:scale-[1.02] focus-lime"
              >
                {t.hero.ctaPrimary}
                <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
              </a>
              <a
                href="/videos"
                className="inline-flex items-center justify-center h-12 px-6 rounded-full border border-white/25 text-white text-sm font-medium hover:border-[var(--brand-lime)] hover:text-[var(--brand-lime)] transition-colors focus-lime"
              >
                {t.hero.ctaSecondary}
              </a>
              <a
                href="/insights"
                className="group inline-flex items-center gap-1.5 h-12 px-2 text-white/80 hover:text-[var(--brand-lime)] text-sm font-medium transition-colors focus-lime"
              >
                {t.hero.ctaTertiary}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.75} />
              </a>
            </div>
        </div>
      </div>
    </section>
  );
}