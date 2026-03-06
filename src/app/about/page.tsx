import { Metadata } from "next";
import { CheckCircle, Award, Heart, Sparkles } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/AnimatedSection";
import { CTASection } from "@/components/sections";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheça Sandy Sacht, especialista em estética facial com mais de 5 anos de experiência em harmonização facial, botox e preenchimentos.",
};

const certifications = [
  "Especialização em Harmonização Orofacial",
  "Certificação em Toxina Botulínica",
  "Técnicas Avançadas de Preenchimento",
  "Bioestimuladores de Colágeno",
  "Skinbooster e Hidratação Profunda",
  "Protocolos de Skincare Profissional",
];

const values = [
  {
    icon: Heart,
    title: "Cuidado Humanizado",
    description:
      "Cada cliente é única e merece atenção personalizada. Escuto suas necessidades e desejos para oferecer o melhor tratamento.",
  },
  {
    icon: Award,
    title: "Excelência Técnica",
    description:
      "Busca constante por atualização e aperfeiçoamento. Utilizo técnicas avançadas e produtos de alta qualidade.",
  },
  {
    icon: Sparkles,
    title: "Resultados Naturais",
    description:
      "Minha filosofia é realçar a beleza que você já possui, com resultados harmônicos que respeitam suas características.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-background-alt">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <AnimatedSection direction="left">
              <div className="relative">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                  <img
                    src="/sandy-sacht.jpg"
                    alt="Sandy Sacht - Especialista em Estética Facial"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary-100 rounded-2xl -z-10" />
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent-100 rounded-2xl -z-10" />
              </div>
            </AnimatedSection>

            {/* Content */}
            <AnimatedSection direction="right">
              <span className="inline-block text-sm font-medium tracking-wider uppercase text-primary-500 mb-4">
                Sobre Mim
              </span>
              <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground leading-tight">
                Sandy Sacht
              </h1>
              <p className="mt-2 text-xl text-primary-600 font-medium">
                Especialista em Estética Facial
              </p>

              <div className="mt-8 space-y-4 text-foreground-muted leading-relaxed">
                <p>
                  Olá! Sou Sandy Sacht, e minha paixão é ajudar mulheres a se
                  sentirem mais confiantes e bonitas através da estética facial.
                  Com mais de 5 anos de experiência, dedico minha carreira a
                  oferecer tratamentos que realçam a beleza natural de cada
                  cliente.
                </p>
                <p>
                  Minha jornada na estética começou com a formação em
                  Biomedicina, seguida de especializações em harmonização
                  orofacial e técnicas avançadas de rejuvenescimento. Acredito
                  que a beleza está em valorizar o que cada pessoa tem de único.
                </p>
                <p>
                  Em minha clínica em Joinville, proporciono um ambiente
                  acolhedor e exclusivo, onde cada atendimento é personalizado.
                  Utilizo apenas produtos de marcas premium e técnicas
                  cientificamente comprovadas para garantir resultados seguros e
                  elegantes.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <Container>
          <AnimatedSection>
            <SectionHeading
              eyebrow="Minha Filosofia"
              title="Valores que Guiam Meu Trabalho"
              subtitle="Acredito que a estética vai além de procedimentos técnicos. É sobre cuidado, confiança e resultados que fazem diferença na vida das pessoas."
            />
          </AnimatedSection>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.1}>
                <div className="text-center p-8 rounded-2xl bg-background-alt">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary-100 mb-6">
                    <value.icon className="w-7 h-7 text-primary-600" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-foreground-muted leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-background-alt">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <span className="inline-block text-sm font-medium tracking-wider uppercase text-primary-500 mb-4">
                Qualificações
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground leading-tight">
                Formação e Certificações
              </h2>
              <p className="mt-4 text-foreground-muted leading-relaxed">
                Invisto constantemente em minha formação para oferecer o que há
                de mais moderno e seguro em estética facial. Cada certificação
                representa meu compromisso com a excelência.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <ul className="space-y-4">
                {certifications.map((cert) => (
                  <li
                    key={cert}
                    className="flex items-center gap-4 p-4 rounded-lg bg-white border border-border-light"
                  >
                    <CheckCircle className="w-6 h-6 text-primary-500 flex-shrink-0" />
                    <span className="text-foreground font-medium">{cert}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
