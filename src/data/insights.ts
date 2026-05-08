export interface Insight {
  category: string;
  title: string;
  status: "soon" | "available";
}

export const insights: Insight[] = [
  { category: "Data Centers", title: "Hoja de ruta de Data Centers en LATAM 2026", status: "soon" },
  { category: "Inteligencia Artificial", title: "IA e infraestructura crítica en la región", status: "soon" },
  { category: "Cloud", title: "Soberanía digital y estrategia multi-cloud", status: "soon" },
  { category: "Infraestructura crítica", title: "Estándares ICREA aplicados", status: "soon" },
  { category: "Inversión tecnológica", title: "Capital LATAM para infraestructura digital", status: "soon" },
  { category: "Gobierno digital", title: "Política pública para acelerar la región", status: "soon" },
  { category: "Smart Cities", title: "Ciudades conectadas que funcionan", status: "soon" },
  { category: "Interoperabilidad", title: "Estándares abiertos en telecom", status: "soon" },
  { category: "Marketing en telecom", title: "Posicionamiento estratégico del sector", status: "soon" },
];