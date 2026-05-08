import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "@/components/site/Reveal";
import { useI18n } from "@/i18n/I18nProvider";
import { site } from "@/data/site";
import { Mail, Phone, Linkedin, Youtube, Instagram } from "lucide-react";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — Book Edwin Tello" },
      { name: "description", content: "Solicita a Edwin Tello para tu conferencia, panel, consultoría o entrevista." },
      { property: "og:title", content: "Contacto — Book Edwin Tello" },
      { property: "og:description", content: "Respondemos en menos de 48 horas." },
    ],
  }),
  component: ContactoPage,
});

function ContactoPage() {
  const { t } = useI18n();
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="bg-[var(--ink)] text-white pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <p className="kicker mb-4">{t.contact.kicker}</p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-tight max-w-4xl">{t.contact.title}</h1>
            <p className="mt-6 text-white/70 text-lg max-w-2xl">{t.contact.subtitle}</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 md:py-24 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5 space-y-6">
            <a href={`mailto:${site.email}`} className="flex items-center gap-3 text-base hover:text-[oklch(0.45_0.18_140)]"><Mail className="h-5 w-5" strokeWidth={1.5} /> {site.email}</a>
            <a href={site.phoneHref} className="flex items-center gap-3 text-base hover:text-[oklch(0.45_0.18_140)]"><Phone className="h-5 w-5" strokeWidth={1.5} /> {site.phone}</a>
            <div className="pt-6 border-t border-[var(--rule)] flex gap-4">
              <a href={site.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin className="h-5 w-5" strokeWidth={1.5} /></a>
              <a href={site.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube"><Youtube className="h-5 w-5" strokeWidth={1.5} /></a>
              <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram className="h-5 w-5" strokeWidth={1.5} /></a>
            </div>
          </div>

          <form
            className="lg:col-span-7 space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
              const data = new FormData(e.currentTarget);
              const params = new URLSearchParams();
              data.forEach((v, k) => params.append(k, String(v)));
              const body = `Nombre: ${data.get("name")}\nEmpresa: ${data.get("company")}\nCargo: ${data.get("role")}\nEmail: ${data.get("email")}\nTeléfono: ${data.get("phone")}\nPaís: ${data.get("country")}\nTipo: ${data.get("requestType")}\n\n${data.get("message")}`;
              window.location.href = `mailto:${site.email}?subject=${encodeURIComponent("Solicitud · " + (data.get("requestType") || "Contacto"))}&body=${encodeURIComponent(body)}`;
              setSent(true);
            }}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field name="name" label={t.contact.name} required />
              <Field name="company" label={t.contact.company} />
              <Field name="role" label={t.contact.role} />
              <Field name="email" label={t.contact.email} type="email" required />
              <Field name="phone" label={t.contact.phone} />
              <Field name="country" label={t.contact.country} />
            </div>
            <label className="block text-sm">
              <span className="kicker">{t.contact.requestType}</span>
              <select name="requestType" className="mt-2 w-full h-12 px-3 border border-[var(--rule)] bg-white">
                <option value="conference">{t.contact.requestTypes.conference}</option>
                <option value="panel">{t.contact.requestTypes.panel}</option>
                <option value="consulting">{t.contact.requestTypes.consulting}</option>
                <option value="press">{t.contact.requestTypes.press}</option>
                <option value="networking">{t.contact.requestTypes.networking}</option>
                <option value="other">{t.contact.requestTypes.other}</option>
              </select>
            </label>
            <label className="block text-sm">
              <span className="kicker">{t.contact.message}</span>
              <textarea name="message" rows={5} required className="mt-2 w-full p-3 border border-[var(--rule)] bg-white" />
            </label>
            <label className="flex items-start gap-3 text-sm text-muted-foreground">
              <input type="checkbox" required className="mt-1" />
              <span>{t.contact.consent}</span>
            </label>
            <button type="submit" className="h-12 px-7 rounded-full bg-[var(--brand-lime)] text-[var(--ink)] font-semibold">{t.contact.submit}</button>
            {sent && <p className="text-sm text-[oklch(0.45_0.18_140)]">{t.contact.success}</p>}
          </form>
        </div>
      </section>
    </>
  );
}

function Field({ name, label, type = "text", required = false }: { name: string; label: string; type?: string; required?: boolean }) {
  return (
    <label className="block text-sm">
      <span className="kicker">{label}</span>
      <input name={name} type={type} required={required} className="mt-2 w-full h-12 px-3 border border-[var(--rule)] bg-white" />
    </label>
  );
}
