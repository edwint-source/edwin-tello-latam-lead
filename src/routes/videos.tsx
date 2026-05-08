import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { useI18n } from "@/i18n/I18nProvider";
import { videos } from "@/data/videos";
import { Play } from "lucide-react";

export const Route = createFileRoute("/videos")({
  head: () => ({
    meta: [
      { title: "Videos — Edwin Tello" },
      { name: "description", content: "Keynotes, paneles y entrevistas en video de Edwin Tello." },
      { property: "og:title", content: "Videos — Edwin Tello" },
      { property: "og:description", content: "Ideas en movimiento: video selection." },
    ],
  }),
  component: VideosPage,
});

function VideosPage() {
  const { t } = useI18n();
  return (
    <>
      <section className="bg-[var(--ink)] text-white pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <p className="kicker mb-4">{t.videos.kicker}</p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-tight max-w-4xl">{t.videos.title}</h1>
            <p className="mt-6 text-white/70 text-lg max-w-2xl">{t.videos.subtitle}</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-[var(--ink)] text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 pb-24">
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {videos.map((v, i) => (
              <Reveal as="li" key={i} delay={i * 50}>
                <a href={`https://www.youtube.com/watch?v=${v.youtubeId}`} target="_blank" rel="noopener noreferrer" className="group block">
                  <div className="relative aspect-video overflow-hidden rounded-sm bg-black/40 border border-white/10">
                    <img src={`https://i.ytimg.com/vi/${v.youtubeId}/hqdefault.jpg`} alt="" className="h-full w-full object-cover opacity-80 transition-opacity group-hover:opacity-100" loading="lazy" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[var(--brand-lime)] text-[var(--ink)] transition-transform group-hover:scale-110">
                        <Play className="h-5 w-5 ml-0.5" strokeWidth={2} fill="currentColor" />
                      </span>
                    </div>
                  </div>
                  <p className="mt-4 kicker">{v.category}</p>
                  <h3 className="mt-2 font-display text-lg text-white group-hover:text-[var(--brand-lime)] transition-colors">{v.title}</h3>
                </a>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
