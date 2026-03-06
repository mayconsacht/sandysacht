"use client";

import { Award, Users, Shield, Star } from "lucide-react";
import Container from "@/components/layout/Container";
import AnimatedSection from "@/components/AnimatedSection";

const indicators = [
  {
    icon: Award,
    value: "+5",
    label: "Anos de Experiência",
    description: "Especialização em estética facial",
  },
  {
    icon: Users,
    value: "+1.000",
    label: "Clientes Satisfeitas",
    description: "Confiança e resultados comprovados",
  },
  {
    icon: Shield,
    value: "100%",
    label: "Produtos Certificados",
    description: "Marcas premium e aprovadas",
  },
  {
    icon: Star,
    value: "5.0",
    label: "Avaliação",
    description: "Nota máxima no Google",
  },
];

export default function TrustIndicators() {
  return (
    <section className="py-16 bg-background-alt">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {indicators.map((indicator, index) => (
            <AnimatedSection key={indicator.label} delay={index * 0.1}>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary-100 mb-4">
                  <indicator.icon className="w-7 h-7 text-primary-600" />
                </div>
                <div className="font-serif text-3xl md:text-4xl font-semibold text-foreground">
                  {indicator.value}
                </div>
                <div className="mt-1 font-medium text-foreground">
                  {indicator.label}
                </div>
                <p className="mt-1 text-sm text-foreground-muted">
                  {indicator.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
