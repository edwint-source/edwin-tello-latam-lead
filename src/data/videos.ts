export interface Video {
  youtubeId: string;
  title: string;
  category: "Keynote" | "Panel" | "Entrevista" | "Clip" | "ACOLDC/ICREA" | "Data Centers";
}

// EDITABLE — reemplazar youtubeId con los IDs reales
export const videos: Video[] = [
  { youtubeId: "dQw4w9WgXcQ", title: "El futuro de los Data Centers en Latinoamérica", category: "Keynote" },
  { youtubeId: "dQw4w9WgXcQ", title: "IA, infraestructura y soberanía digital regional", category: "Panel" },
  { youtubeId: "dQw4w9WgXcQ", title: "Conversación: inversión tecnológica en LATAM", category: "Entrevista" },
  { youtubeId: "dQw4w9WgXcQ", title: "ACOLDC: hoja de ruta 2026", category: "ACOLDC/ICREA" },
  { youtubeId: "dQw4w9WgXcQ", title: "Estándares ICREA para Data Centers", category: "Data Centers" },
  { youtubeId: "dQw4w9WgXcQ", title: "Clip · 60s sobre Smart Cities", category: "Clip" },
];