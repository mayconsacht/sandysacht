"use client";

import { ArrowRight, CheckCircle } from "lucide-react";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/AnimatedSection";

const highlights = [
  "Especialista em harmonização facial",
  "Técnicas avançadas e atualizadas",
  "Atendimento personalizado e humanizado",
  "Resultados naturais e elegantes",
];

export default function AboutPreview() {
  return (
    <section className="py-20 lg:py-28 bg-background-alt">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <AnimatedSection direction="left">
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=800&h=1000&fit=crop"
                  alt="Sandy Sacht - Especialista em Estética Facial"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary-100 rounded-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent-100 rounded-2xl -z-10" />
            </div>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection direction="right">
            <span className="inline-block text-sm font-medium tracking-wider uppercase text-primary-500 mb-4">
              Sobre Mim
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground leading-tight">
              Sandy Sacht
            </h2>
            <p className="mt-2 text-xl text-primary-600 font-medium">
              Especialista em Estética Facial
            </p>

            <p className="mt-6 text-foreground-muted leading-relaxed">
              Com mais de 5 anos de experiência em estética facial, dedico minha
              carreira a realçar a beleza natural de cada cliente. Minha filosofia
              é baseada em resultados naturais e elegantes, respeitando as
              características únicas de cada rosto.
            </p>

            <p className="mt-4 text-foreground-muted leading-relaxed">
              Utilizo apenas produtos de alta qualidade e técnicas avançadas,
              sempre me atualizando com as melhores práticas do mercado para
              oferecer tratamentos seguros e eficazes.
            </p>

            <ul className="mt-8 space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3 text-foreground">
                  <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Button as="a" href="/about" variant="outline">
                Conhecer Minha História
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
