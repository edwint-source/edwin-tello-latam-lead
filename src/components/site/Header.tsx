import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo-tll.svg";

export function Header() {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();
  const onDarkHero = !scrolled && location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  const navItems: { to: string; label: string }[] = [
    { to: "/", label: t.nav.home },
    { to: "/bio", label: t.nav.bio },
    { to: "/speaking", label: t.nav.speaking },
    { to: "/eventos", label: t.nav.events },
    { to: "/videos", label: t.nav.videos },
    { to: "/insights", label: t.nav.insights },
    { to: "/contacto", label: t.nav.contact },
  ];

  return (
    <header className={cn("fixed top-0 inset-x-0 z-50 transition-all duration-300", scrolled ? "bg-background/80 backdrop-blur-md border-b border-[var(--rule)]" : "bg-transparent")}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2" aria-label="Edwin Tello">
          <img src={logo} alt="" className="h-8 w-8" />
          <span className={cn("font-display text-base", onDarkHero ? "text-white" : "text-foreground")}>Edwin Tello</span>
        </Link>
        <nav className="hidden lg:flex items-center gap-7 text-sm">
          {navItems.map((item) => (
            <a key={item.to} href={item.to} className={cn("transition-colors hover:opacity-100", onDarkHero ? "text-white/70 hover:text-white" : "text-muted-foreground hover:text-foreground")}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className={cn("flex items-center gap-4", onDarkHero && "text-white")}>
          <LanguageSwitcher className="hidden sm:inline-flex" />
          <a href="/contacto" className="hidden md:inline-flex items-center justify-center h-10 px-5 rounded-full bg-[var(--brand-lime)] text-[var(--ink)] text-sm font-semibold transition-transform hover:scale-[1.02]">
            {t.nav.cta}
          </a>
          <button type="button" className={cn("lg:hidden p-2 -mr-2", onDarkHero ? "text-white" : "text-foreground")} aria-label="Open menu" onClick={() => setOpen(true)}>
            <Menu className="h-6 w-6" strokeWidth={1.5} />
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden fixed inset-0 z-50 bg-[var(--ink)] text-white">
          <div className="px-6 h-16 flex items-center justify-between border-b border-white/10">
            <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
              <img src={logo} alt="" className="h-8 w-8" />
              <span className="font-display text-base">Edwin Tello</span>
            </Link>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close menu" className="p-2 -mr-2">
              <X className="h-6 w-6" strokeWidth={1.5} />
            </button>
          </div>
          <nav className="px-6 py-8 flex flex-col gap-1">
            {navItems.map((item) => (
              <a key={item.to} href={item.to} onClick={() => setOpen(false)} className="font-display text-3xl py-3 border-b border-white/10">
                {item.label}
              </a>
            ))}
            <a href="/contacto" onClick={() => setOpen(false)} className="mt-8 inline-flex items-center justify-center h-12 rounded-full bg-[var(--brand-lime)] text-[var(--ink)] font-semibold">
              {t.nav.cta}
            </a>
            <div className="mt-8"><LanguageSwitcher /></div>
          </nav>
        </div>
      )}
    </header>
  );
}