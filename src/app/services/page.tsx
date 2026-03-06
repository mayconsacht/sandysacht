import { Metadata } from "next";
import { Clock, CheckCircle } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/AnimatedSection";
import { CTASection } from "@/components/sections";
import { services } from "@/data/services";
import { CONTACT_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Procedimentos",
  description:
    "Conheça nossos procedimentos de estética facial: botox, harmonização facial, preenchimento labial, bioestimuladores, skinbooster e tratamentos faciais.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-background-alt">
        <Container>
          <AnimatedSection>
            <SectionHeading
              eyebrow="Procedimentos"
              title="Tratamentos Estéticos Premium"
              subtitle="Conheça em detalhes cada um dos procedimentos que ofereço. Todos são realizados com técnicas avançadas e produtos de alta qualidade para garantir resultados seguros e elegantes."
            />
          </AnimatedSection>
        </Container>
      </section>

      {/* Services Detailed */}
      <section className="py-20">
        <Container>
          <div className="space-y-24">
            {services.map((service, index) => (
              <AnimatedSection
                key={service.id}
                id={service.id}
                className="scroll-mt-24"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                    index % 2 === 1 ? "lg:grid-flow-dense" : ""
                  }`}
                >
                  {/* Image */}
                  <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <span className="inline-block text-sm font-medium tracking-wider uppercase text-primary-500 mb-3">
                      Procedimento
                    </span>
                    <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground">
                      {service.title}
                    </h2>

                    <p className="mt-4 text-foreground-muted leading-relaxed">
                      {service.fullDescription}
                    </p>

                    {/* Benefits */}
                    <div className="mt-6">
                      <h3 className="font-semibold text-foreground mb-3">
                        Benefícios:
                      </h3>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit) => (
                          <li
                            key={benefit}
                            className="flex items-start gap-2 text-foreground-muted"
                          >
                            <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Duration Info + CTA */}
                    <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                      <div className="inline-flex items-center gap-3 p-3 rounded-lg bg-background-alt">
                        <Clock className="w-5 h-5 text-primary-500" />
                        <div>
                          <span className="text-xs text-foreground-muted block">
                            Duração
                          </span>
                          <span className="text-sm font-medium text-foreground">
                            {service.duration}
                          </span>
                        </div>
                      </div>

                      <Button
                        as="a"
                        href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=Olá! Gostaria de agendar uma consulta para ${service.title}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Agendar Consulta
                      </Button>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
