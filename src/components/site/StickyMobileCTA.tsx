import { useEffect, useState } from "react";
import { useRouterState } from "@tanstack/react-router";
import { useI18n } from "@/i18n/I18nProvider";
import { ArrowUpRight } from "lucide-react";

export function StickyMobileCTA() {
  const { t } = useI18n();
  const [show, setShow] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (location.pathname === "/contacto") return null;

  return (
    <div className={`md:hidden fixed bottom-4 inset-x-4 z-40 transition-all duration-300 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}>
      <a href="/contacto" className="sticky-cta-shadow flex items-center justify-center gap-2 py-4 rounded-full bg-[var(--brand-lime)] text-[var(--ink)] font-semibold">
        {t.nav.cta}
        <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
      </a>
    </div>
  );
}