import { Link } from "@tanstack/react-router";
import { Linkedin, Youtube, Instagram, Mail, Phone } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import { site } from "@/data/site";
import logo from "@/assets/logo-tll.svg";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="bg-[var(--ink)] text-white/80">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid gap-12 lg:grid-cols-3">
        <div>
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="" className="h-9 w-9" />
            <span className="font-display text-lg text-white">Edwin Tello</span>
          </Link>
          <p className="mt-5 font-display text-xl leading-tight text-white max-w-xs">
            {t.footer.tagline}
          </p>
        </div>

        <div>
          <p className="kicker mb-4">{t.footer.contact}</p>
          <ul className="space-y-3 text-sm">
            <li>
              <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 hover:text-[var(--brand-lime)] transition-colors">
                <Mail className="h-4 w-4" strokeWidth={1.5} /> {site.email}
              </a>
            </li>
            <li>
              <a href={site.phoneHref} className="inline-flex items-center gap-2 hover:text-[var(--brand-lime)] transition-colors">
                <Phone className="h-4 w-4" strokeWidth={1.5} /> {site.phone}
              </a>
            </li>
            <li className="text-white/60">{site.url.replace("https://", "")}</li>
          </ul>
        </div>

        <div>
          <p className="kicker mb-4">{t.footer.follow}</p>
          <ul className="flex gap-3">
            <li>
              <a href={site.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 hover:border-[var(--brand-lime)] hover:text-[var(--brand-lime)] transition-colors">
                <Linkedin className="h-4 w-4" strokeWidth={1.5} />
              </a>
            </li>
            <li>
              <a href={site.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 hover:border-[var(--brand-lime)] hover:text-[var(--brand-lime)] transition-colors">
                <Youtube className="h-4 w-4" strokeWidth={1.5} />
              </a>
            </li>
            <li>
              <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 hover:border-[var(--brand-lime)] hover:text-[var(--brand-lime)] transition-colors">
                <Instagram className="h-4 w-4" strokeWidth={1.5} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-5 text-xs text-white/50 flex flex-wrap items-center justify-between gap-2">
          <span>© {new Date().getFullYear()} Edwin Tello. {t.footer.rights}</span>
          <span>www.edwintello.com</span>
        </div>
      </div>
    </footer>
  );
}