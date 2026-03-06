export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  targetAudience: string;
  duration: string;
  results: string;
  image: string;
}

export const services: Service[] = [
  {
    id: "botox",
    title: "Botox",
    shortDescription:
      "Suavização de rugas e linhas de expressão para uma aparência rejuvenescida e natural.",
    fullDescription:
      "A toxina botulínica é o tratamento gold standard para suavizar rugas dinâmicas, aquelas causadas pela movimentação muscular. Aplicamos com técnica precisa para garantir resultados naturais, preservando sua expressividade e eliminando marcas indesejadas.",
    benefits: [
      "Suaviza linhas de expressão da testa",
      "Reduz rugas entre as sobrancelhas",
      "Ameniza os pés de galinha",
      "Resultados visíveis em até 14 dias",
      "Duração de 4 a 6 meses",
    ],
    targetAudience:
      "Indicado para quem deseja prevenir ou tratar rugas de expressão, proporcionando uma aparência mais descansada e jovem.",
    duration: "30 a 45 minutos",
    results: "Resultados aparecem gradualmente entre 3 a 14 dias após a aplicação.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&h=600&fit=crop",
  },
  {
    id: "harmonizacao-facial",
    title: "Harmonização Facial",
    shortDescription:
      "Equilíbrio e simetria facial através de procedimentos combinados e personalizados.",
    fullDescription:
      "A harmonização facial é um conjunto de procedimentos que visam equilibrar e harmonizar as proporções do rosto. Combinamos diferentes técnicas como preenchimento, botox e bioestimuladores para criar um resultado personalizado que realça sua beleza natural.",
    benefits: [
      "Melhora o contorno facial",
      "Corrige assimetrias",
      "Define mandíbula e queixo",
      "Valoriza traços naturais",
      "Resultados personalizados",
    ],
    targetAudience:
      "Para quem busca um rosto mais equilibrado e harmônico, valorizando seus traços únicos.",
    duration: "1 a 2 horas",
    results: "Resultados imediatos com melhora progressiva ao longo das semanas.",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&h=600&fit=crop",
  },
  {
    id: "preenchimento-labial",
    title: "Preenchimento Labial",
    shortDescription:
      "Lábios mais definidos e volumosos com ácido hialurônico de última geração.",
    fullDescription:
      "O preenchimento labial com ácido hialurônico proporciona lábios mais volumosos, definidos e hidratados. Utilizamos produtos de alta qualidade e técnicas avançadas para garantir resultados naturais e harmônicos com seu rosto.",
    benefits: [
      "Aumento de volume dos lábios",
      "Definição do contorno labial",
      "Hidratação profunda",
      "Correção de assimetrias",
      "Resultado natural e personalizado",
    ],
    targetAudience:
      "Indicado para quem deseja lábios mais volumosos ou definidos, mantendo a naturalidade.",
    duration: "30 a 45 minutos",
    results: "Resultado imediato com duração de 8 a 12 meses.",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=600&fit=crop",
  },
  {
    id: "bioestimuladores",
    title: "Bioestimuladores de Colágeno",
    shortDescription:
      "Estimulação natural do colágeno para firmeza e rejuvenescimento progressivo.",
    fullDescription:
      "Os bioestimuladores são substâncias que estimulam a produção natural de colágeno pelo próprio organismo. Diferente dos preenchimentos, eles tratam a causa do envelhecimento, proporcionando firmeza, elasticidade e qualidade à pele de forma progressiva e duradoura.",
    benefits: [
      "Estimula produção de colágeno",
      "Melhora firmeza da pele",
      "Reduz flacidez facial",
      "Resultados progressivos e naturais",
      "Duração de até 2 anos",
    ],
    targetAudience:
      "Ideal para quem busca tratamento de rejuvenescimento a longo prazo, combatendo flacidez e perda de sustentação.",
    duration: "45 minutos a 1 hora",
    results: "Resultados progressivos ao longo de 2 a 3 meses.",
    image: "https://images.unsplash.com/photo-1552693673-1bf958298935?w=800&h=600&fit=crop",
  },
  {
    id: "skinbooster",
    title: "Skinbooster",
    shortDescription:
      "Hidratação profunda e revitalização da pele com ácido hialurônico injetável.",
    fullDescription:
      "O Skinbooster é um tratamento que injeta micropartículas de ácido hialurônico na derme, promovendo hidratação profunda e duradoura. O resultado é uma pele mais luminosa, uniforme e com aspecto saudável, perfeito para quem busca melhorar a qualidade da pele.",
    benefits: [
      "Hidratação profunda e duradoura",
      "Melhora textura da pele",
      "Aumenta luminosidade",
      "Reduz linhas finas",
      "Pele mais viçosa",
    ],
    targetAudience:
      "Perfeito para quem deseja melhorar a qualidade da pele, ideal para peles opacas, desidratadas ou com sinais iniciais de envelhecimento.",
    duration: "30 a 45 minutos",
    results: "Resultados visíveis após a primeira sessão, com melhora progressiva.",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&h=600&fit=crop",
  },
  {
    id: "tratamentos-faciais",
    title: "Tratamentos Faciais",
    shortDescription:
      "Protocolos personalizados para cuidar da saúde e beleza da sua pele.",
    fullDescription:
      "Oferecemos uma variedade de tratamentos faciais personalizados, incluindo limpeza de pele profunda, peelings químicos, microagulhamento e protocolos de skincare profissional. Cada tratamento é adaptado às necessidades específicas da sua pele.",
    benefits: [
      "Limpeza profunda da pele",
      "Renovação celular",
      "Controle de oleosidade e acne",
      "Uniformização do tom de pele",
      "Protocolos personalizados",
    ],
    targetAudience:
      "Para todos que desejam manter a saúde e beleza da pele com cuidados profissionais regulares.",
    duration: "1 a 2 horas",
    results: "Resultados variam conforme o protocolo, com melhorias visíveis após cada sessão.",
    image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&h=600&fit=crop",
  },
];

export function getServiceById(id: string): Service | undefined {
  return services.find((service) => service.id === id);
}
