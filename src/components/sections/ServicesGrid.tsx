"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card, { CardImage, CardContent, CardTitle, CardDescription } from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/AnimatedSection";
import { services } from "@/data/services";

interface ServicesGridProps {
  limit?: number;
  showCTA?: boolean;
}

export default function ServicesGrid({ limit, showCTA = true }: ServicesGridProps) {
  const displayServices = limit ? services.slice(0, limit) : services;

  return (
    <section className="py-20 lg:py-28">
      <Container>
        <AnimatedSection>
          <SectionHeading
            eyebrow="Procedimentos"
            title="Tratamentos Estéticos Premium"
            subtitle="Conheça nossos procedimentos faciais desenvolvidos para realçar sua beleza natural com resultados elegantes e duradouros."
          />
        </AnimatedSection>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayServices.map((service, index) => (
            <AnimatedSection key={service.id} delay={index * 0.1}>
              <Link href={`/services#${service.id}`} className="block h-full">
                <Card className="h-full">
                  <CardImage
                    src={service.image}
                    alt={service.title}
                    aspectRatio="video"
                  />
                  <CardContent>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.shortDescription}</CardDescription>
                    <div className="mt-4 flex items-center text-primary-600 text-sm font-medium group">
                      Saiba mais
                      <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        {showCTA && (
          <AnimatedSection className="mt-12 text-center">
            <Button as="a" href="/services" variant="outline" size="lg">
              Ver Todos os Procedimentos
              <ArrowRight className="w-5 h-5" />
            </Button>
          </AnimatedSection>
        )}
      </Container>
    </section>
  );
}
