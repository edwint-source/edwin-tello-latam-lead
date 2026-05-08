import {
  Server,
  Cpu,
  Cloud,
  ShieldCheck,
  Leaf,
  Landmark,
  Building2,
  Network,
  TrendingUp,
  Megaphone,
  Globe2,
  type LucideIcon,
} from "lucide-react";

export interface Topic {
  icon: LucideIcon;
  title: { es: string; en: string; pt: string };
  desc: { es: string; en: string; pt: string };
}

export const topics: Topic[] = [
  {
    icon: Server,
    title: { es: "Data Centers", en: "Data Centers", pt: "Data Centers" },
    desc: {
      es: "Diseño, operación y crecimiento de infraestructura crítica.",
      en: "Design, operation and growth of critical infrastructure.",
      pt: "Projeto, operação e crescimento de infraestrutura crítica.",
    },
  },
  {
    icon: Cpu,
    title: { es: "Inteligencia Artificial", en: "Artificial Intelligence", pt: "Inteligência Artificial" },
    desc: {
      es: "IA aplicada a infraestructura, eficiencia y nuevos modelos de negocio.",
      en: "AI applied to infrastructure, efficiency and new business models.",
      pt: "IA aplicada à infraestrutura, eficiência e novos modelos de negócio.",
    },
  },
  {
    icon: Cloud,
    title: { es: "Cloud", en: "Cloud", pt: "Cloud" },
    desc: {
      es: "Estrategias multi-cloud y soberanía digital regional.",
      en: "Multi-cloud strategies and regional digital sovereignty.",
      pt: "Estratégias multi-cloud e soberania digital regional.",
    },
  },
  {
    icon: ShieldCheck,
    title: { es: "Infraestructura crítica", en: "Critical infrastructure", pt: "Infraestrutura crítica" },
    desc: {
      es: "Estándares, certificaciones y resiliencia operacional.",
      en: "Standards, certifications and operational resilience.",
      pt: "Padrões, certificações e resiliência operacional.",
    },
  },
  {
    icon: Leaf,
    title: { es: "Sostenibilidad", en: "Sustainability", pt: "Sustentabilidade" },
    desc: {
      es: "Eficiencia energética, agua y descarbonización del sector.",
      en: "Energy efficiency, water and decarbonization of the sector.",
      pt: "Eficiência energética, água e descarbonização do setor.",
    },
  },
  {
    icon: Landmark,
    title: { es: "Gobierno digital", en: "Digital government", pt: "Governo digital" },
    desc: {
      es: "Política pública, regulación e infraestructura del Estado.",
      en: "Public policy, regulation and state infrastructure.",
      pt: "Política pública, regulação e infraestrutura do Estado.",
    },
  },
  {
    icon: Building2,
    title: { es: "Smart Cities", en: "Smart Cities", pt: "Smart Cities" },
    desc: {
      es: "Ciudades conectadas, inteligentes y habitables.",
      en: "Connected, intelligent and livable cities.",
      pt: "Cidades conectadas, inteligentes e habitáveis.",
    },
  },
  {
    icon: Network,
    title: { es: "Interoperabilidad", en: "Interoperability", pt: "Interoperabilidade" },
    desc: {
      es: "Estándares abiertos para acelerar el ecosistema digital.",
      en: "Open standards to accelerate the digital ecosystem.",
      pt: "Padrões abertos para acelerar o ecossistema digital.",
    },
  },
  {
    icon: TrendingUp,
    title: { es: "Inversión tecnológica", en: "Tech investment", pt: "Investimento tecnológico" },
    desc: {
      es: "Capital, riesgo y oportunidades en infraestructura digital LATAM.",
      en: "Capital, risk and opportunities in LATAM digital infrastructure.",
      pt: "Capital, risco e oportunidades em infraestrutura digital LATAM.",
    },
  },
  {
    icon: Megaphone,
    title: { es: "Marketing en telecom", en: "Telecom marketing", pt: "Marketing em telecom" },
    desc: {
      es: "Posicionamiento estratégico para el sector de telecomunicaciones.",
      en: "Strategic positioning for the telecommunications sector.",
      pt: "Posicionamento estratégico para o setor de telecomunicações.",
    },
  },
  {
    icon: Globe2,
    title: { es: "LATAM Digital Infrastructure", en: "LATAM Digital Infrastructure", pt: "LATAM Digital Infrastructure" },
    desc: {
      es: "Visión regional integrada para competir globalmente.",
      en: "Integrated regional vision to compete globally.",
      pt: "Visão regional integrada para competir globalmente.",
    },
  },
];