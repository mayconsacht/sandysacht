import { CONTACT_INFO, SITE_CONFIG } from "@/lib/constants";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalBusiness",
      "@id": `${SITE_CONFIG.url}/#organization`,
      name: "Sandy Sacht Estética Facial",
      alternateName: "Sandy Sacht",
      url: SITE_CONFIG.url,
      logo: `${SITE_CONFIG.url}/logo.png`,
      image: `${SITE_CONFIG.url}/og-image.jpg`,
      description: SITE_CONFIG.description,
      telephone: CONTACT_INFO.phone,
      email: CONTACT_INFO.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: CONTACT_INFO.address.street,
        addressLocality: CONTACT_INFO.address.city,
        addressRegion: CONTACT_INFO.address.state,
        postalCode: CONTACT_INFO.address.zip,
        addressCountry: "BR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "-26.3044",
        longitude: "-48.8487",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "19:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "09:00",
          closes: "14:00",
        },
      ],
      sameAs: [SITE_CONFIG.links.instagram],
      priceRange: "$$$",
      medicalSpecialty: "Aesthetic Medicine",
      availableService: [
        {
          "@type": "MedicalProcedure",
          name: "Botox",
          description:
            "Aplicação de toxina botulínica para suavizar rugas e linhas de expressão.",
        },
        {
          "@type": "MedicalProcedure",
          name: "Harmonização Facial",
          description:
            "Procedimento estético para equilibrar e harmonizar as proporções do rosto.",
        },
        {
          "@type": "MedicalProcedure",
          name: "Preenchimento Labial",
          description:
            "Preenchimento com ácido hialurônico para lábios mais volumosos e definidos.",
        },
        {
          "@type": "MedicalProcedure",
          name: "Bioestimuladores de Colágeno",
          description:
            "Tratamento para estimular a produção natural de colágeno.",
        },
        {
          "@type": "MedicalProcedure",
          name: "Skinbooster",
          description:
            "Hidratação profunda da pele com ácido hialurônico injetável.",
        },
      ],
    },
    {
      "@type": "Person",
      "@id": `${SITE_CONFIG.url}/#person`,
      name: "Sandy Sacht",
      jobTitle: "Especialista em Estética Facial",
      worksFor: {
        "@id": `${SITE_CONFIG.url}/#organization`,
      },
      url: `${SITE_CONFIG.url}/about`,
      sameAs: [SITE_CONFIG.links.instagram],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_CONFIG.url}/#website`,
      url: SITE_CONFIG.url,
      name: SITE_CONFIG.name,
      description: SITE_CONFIG.description,
      publisher: {
        "@id": `${SITE_CONFIG.url}/#organization`,
      },
      inLanguage: "pt-BR",
    },
  ],
};

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
