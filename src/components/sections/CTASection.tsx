"use client";

import { ArrowRight, Phone } from "lucide-react";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/AnimatedSection";
import { CONTACT_INFO } from "@/lib/constants";

export default function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-foreground text-white">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <span className="inline-block text-sm font-medium tracking-wider uppercase text-primary-300 mb-4">
              Agende Sua Consulta
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
              Pronta para Realçar Sua{" "}
              <span className="text-primary-300">Beleza Natural</span>?
            </h2>
            <p className="mt-6 text-lg text-white/70 leading-relaxed">
              Agende uma consulta personalizada e descubra os melhores tratamentos
              para você. Atendimento exclusivo e resultados que respeitam sua
              individualidade.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                as="a"
                href={`https://wa.me/${CONTACT_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                className="bg-primary-400 hover:bg-primary-500"
              >
                Agendar pelo WhatsApp
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button
                as="a"
                href={`tel:${CONTACT_INFO.phone}`}
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10"
              >
                <Phone className="w-5 h-5" />
                Ligar Agora
              </Button>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <p className="mt-8 text-white/50 text-sm">
              Resposta rápida pelo WhatsApp • Consulta presencial em Joinville
            </p>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
