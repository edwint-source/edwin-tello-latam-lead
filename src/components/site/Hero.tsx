import { ArrowUpRight, ArrowRight } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import edwinPortrait from "@/assets/edwin-portrait.jpg";

/**
 * Hero — fondo oscuro premium, tipografía editorial, retrato keynote.
 */
export function Hero() {
  const { t } = useI18n();

  return (
    <section
      className="relative overflow-hidden text-white"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="absolute inset-0 hero-grid opacity-60" aria-hidden="true" />
      <div
        aria-hidden="true"
        className="absolute -top-40 -right-40 h-[820px] w-[820px] rounded-full opacity-60 blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.5 0.31 295 / 0.55), transparent 70%)" }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-[420px] w-[420px] rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.92 0.22 122 / 0.35), transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7">
            <p className="kicker reveal is-visible">{t.hero.kicker}</p>
            <h1
              className="reveal is-visible mt-5 font-display text-white"
              style={{
                fontSize: "clamp(2.5rem, 7.5vw, 5.5rem)",
                lineHeight: 0.98,
                letterSpacing: "-0.035em",
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
            <div
              className="reveal is-visible mt-7 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm pl-2 pr-5 py-2"
              style={{ transitionDelay: "260ms" }}
            >
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[var(--brand-lime)] text-[var(--ink)] text-[10px] font-bold">★</span>
              <span className="text-xs sm:text-sm font-medium tracking-wide text-white/85">
                {t.hero.credentials}
              </span>
            </div>
            <div
              className="reveal is-visible mt-9 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-4"
              style={{ transitionDelay: "340ms" }}
            >
              <a
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full bg-[var(--brand-lime)] text-[var(--ink)] font-semibold shadow-[0_10px_40px_-10px_oklch(0.92_0.22_122_/_0.6)] transition-transform hover:scale-[1.02] focus-lime"
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

          {/* Portrait — keynote presence */}
          <div className="reveal is-visible lg:col-span-5 relative" style={{ transitionDelay: "120ms" }}>
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div
                aria-hidden="true"
                className="absolute -inset-6 rounded-[2rem] opacity-70 blur-2xl"
                style={{ background: "radial-gradient(circle at 30% 30%, oklch(0.5 0.31 295 / 0.55), transparent 70%)" }}
              />
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-white/10 shadow-[0_40px_80px_-30px_oklch(0.18_0.13_290_/_0.6)]">
                <img
                  src={edwinPortrait}
                  alt="Edwin Tello — keynote speaker"
                  className="h-full w-full object-cover"
                  loading="eager"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(180deg, transparent 55%, oklch(0.09 0.03 280 / 0.55) 100%)" }}
                />
              </div>
              {/* Lime corner frame */}
              <div className="absolute -bottom-3 -right-3 h-20 w-20 border-b-2 border-r-2 border-[var(--brand-lime)]" aria-hidden="true" />
              <div className="absolute -top-3 -left-3 h-12 w-12 border-t border-l border-white/30" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}