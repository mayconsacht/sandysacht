export interface Testimonial {
  id: string;
  name: string;
  treatment: string;
  content: string;
  rating: number;
  image?: string;
  date: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Mariana L.",
    treatment: "Harmonização Facial",
    content:
      "A Sandy é uma profissional excepcional! Fiz a harmonização facial e o resultado superou todas as minhas expectativas. Muito natural, exatamente o que eu queria. Me sinto muito mais confiante.",
    rating: 5,
    date: "Janeiro 2024",
  },
  {
    id: "2",
    name: "Patricia R.",
    treatment: "Botox",
    content:
      "Primeira vez fazendo botox e estava super nervosa. A Sandy me deixou muito tranquila, explicou todo o procedimento e o resultado ficou incrível. Pareço mais descansada e jovem!",
    rating: 5,
    date: "Dezembro 2023",
  },
  {
    id: "3",
    name: "Ana Carolina M.",
    treatment: "Preenchimento Labial",
    content:
      "Sempre quis fazer preenchimento labial mas tinha medo de ficar artificial. A Sandy foi muito cuidadosa, respeitou minhas características e o resultado foi um lábio lindo e natural. Amei!",
    rating: 5,
    date: "Novembro 2023",
  },
  {
    id: "4",
    name: "Juliana S.",
    treatment: "Bioestimuladores",
    content:
      "Fiz os bioestimuladores há 6 meses e minha pele está incrível! A melhora foi progressiva e natural, exatamente como a Sandy havia explicado. Recomendo demais!",
    rating: 5,
    date: "Outubro 2023",
  },
  {
    id: "5",
    name: "Fernanda B.",
    treatment: "Skinbooster",
    content:
      "Minha pele nunca esteve tão bonita! O skinbooster trouxe uma hidratação e luminosidade que eu nunca tinha conseguido com produtos convencionais. A Sandy é maravilhosa!",
    rating: 5,
    date: "Setembro 2023",
  },
  {
    id: "6",
    name: "Camila T.",
    treatment: "Harmonização Facial",
    content:
      "Procurei a Sandy por indicação e foi a melhor decisão. Ela é extremamente profissional, atenciosa e seu trabalho é impecável. O resultado da minha harmonização está perfeito!",
    rating: 5,
    date: "Agosto 2023",
  },
  {
    id: "7",
    name: "Renata F.",
    treatment: "Botox",
    content:
      "Já faço botox com a Sandy há 2 anos e não troco por nada. Ela sempre acerta na dose e o resultado é sempre natural. Profissional nota 10!",
    rating: 5,
    date: "Julho 2023",
  },
  {
    id: "8",
    name: "Beatriz A.",
    treatment: "Tratamentos Faciais",
    content:
      "O protocolo de tratamento facial que a Sandy desenvolveu para minha pele transformou completamente a aparência do meu rosto. Pele mais uniforme, sem manchas e muito mais saudável.",
    rating: 5,
    date: "Junho 2023",
  },
];

export function getFeaturedTestimonials(count: number = 3): Testimonial[] {
  return testimonials.slice(0, count);
}
