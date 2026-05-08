export interface EventItem {
  name: string;
  city: string;
  country: string;
  date: string;
  role: "Keynote" | "Panelista" | "Moderador" | "Invitado";
  status: "upcoming" | "recent" | "international";
  link?: string;
}

// EDITABLE — placeholders. Reemplazar con eventos reales.
export const events: EventItem[] = [
  { name: "Conecta LATAM", city: "Ciudad de México", country: "México", date: "2026-04-15", role: "Keynote", status: "upcoming" },
  { name: "Datacenter Dynamics", city: "Bogotá", country: "Colombia", date: "2026-05-22", role: "Panelista", status: "upcoming" },
  { name: "ICREA Summit", city: "Miami", country: "USA", date: "2026-06-10", role: "Moderador", status: "international" },
  { name: "Conecta Mexico 2025", city: "Ciudad de México", country: "México", date: "2025-11-12", role: "Panelista", status: "recent" },
  { name: "ACOLDC Annual", city: "Bogotá", country: "Colombia", date: "2025-10-08", role: "Keynote", status: "recent" },
  { name: "LATAM Cloud Forum", city: "São Paulo", country: "Brasil", date: "2026-08-20", role: "Keynote", status: "international" },
];