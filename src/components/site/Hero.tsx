import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import portrait from "@/assets/edwin-portrait.jpg";
import logo from "@/assets/logo-tll.png";

/**
 * Hero — fondo oscuro premium, dirección editorial executive thought leader.
 * NOTA: El retrato actual es un placeholder editorial. Reemplazar
 * src/assets/edwin-portrait.jpg con una foto profesional definitiva.
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
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-12 items-center">
          {/* Texto */}
          <div className="lg:col-span-7">
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
              <Link
                to="/contacto"
                className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full bg-[var(--brand-lime)] text-[var(--ink)] font-semibold transition-transform hover:scale-[1.02] focus-lime"
              >
                {t.hero.ctaPrimary}
                <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
              </Link>
              <Link
                to="/videos"
                className="inline-flex items-center justify-center h-12 px-6 rounded-full border border-white/25 text-white text-sm font-medium hover:border-[var(--brand-lime)] hover:text-[var(--brand-lime)] transition-colors focus-lime"
              >
                {t.hero.ctaSecondary}
              </Link>
              <Link
                to="/insights"
                className="group inline-flex items-center gap-1.5 h-12 px-2 text-white/80 hover:text-[var(--brand-lime)] text-sm font-medium transition-colors focus-lime"
              >
                {t.hero.ctaTertiary}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.75} />
              </Link>
            </div>
          </div>

          {/* Visual */}
          <div className="lg:col-span-5">
            <div
              className="reveal is-visible relative mx-auto max-w-md lg:max-w-none"
              style={{ transitionDelay: "200ms" }}
            >
              <div
                aria-hidden="true"
                className="absolute -inset-8 rounded-full opacity-50 blur-3xl"
                style={{ background: "radial-gradient(circle, oklch(0.5 0.31 295 / 0.45), transparent 70%)" }}
              />
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-white/10">
                <img
                  src={portrait}
                  alt="Edwin Tello"
                  className="h-full w-full object-cover"
                  loading="eager"
                />
                {/* Marco editorial lima — esquina */}
                <div className="pointer-events-none absolute -top-3 -left-3 h-16 w-16 border-t border-l border-[var(--brand-lime)]" />
                <div className="pointer-events-none absolute -bottom-3 -right-3 h-16 w-16 border-b border-r border-[var(--brand-lime)]" />
                <img
                  src={logo}
                  alt=""
                  className="absolute bottom-3 left-3 h-9 w-9 opacity-90"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}