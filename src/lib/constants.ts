export const SITE_CONFIG = {
  name: "Sandy Sacht",
  title: "Sandy Sacht | Estética Facial Premium",
  description:
    "Clínica de estética facial premium em Joinville. Especialista em harmonização facial, botox, preenchimento labial e bioestimuladores.",
  url: "https://sandysacht.com.br",
  ogImage: "/og-image.jpg",
  links: {
    instagram: "https://instagram.com/sandysacht",
    whatsapp: "https://wa.me/5547991159329",
  },
};

export const CONTACT_INFO = {
  phone: "+55 47 99115-9329",
  phoneFormatted: "(47) 99115-9329",
  whatsappNumber: "5547991159329",
  email: "contato@sandysacht.com.br",
  address: {
    street: "Rua das Palmeiras, 123",
    neighborhood: "Centro",
    city: "Joinville",
    state: "SC",
    zip: "89201-000",
    full: "Rua das Palmeiras, 123 - Centro, Joinville - SC",
  },
  hours: {
    weekdays: "Seg - Sex: 9h às 19h",
    saturday: "Sáb: 9h às 14h",
    sunday: "Dom: Fechado",
  },
};

export const NAV_LINKS = [
  { href: "/", label: "Início" },
  { href: "/about", label: "Sobre" },
  { href: "/services", label: "Procedimentos" },
  { href: "/before-after", label: "Antes & Depois" },
  { href: "/testimonials", label: "Depoimentos" },
  { href: "/contact", label: "Contato" },
] as const;
