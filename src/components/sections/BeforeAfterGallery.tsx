"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/AnimatedSection";

const beforeAfterImages = [
  {
    id: "1",
    category: "Harmonização Facial",
    before: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=500&fit=crop",
    after: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&h=500&fit=crop",
  },
  {
    id: "2",
    category: "Preenchimento Labial",
    before: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=500&fit=crop",
    after: "https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?w=400&h=500&fit=crop",
  },
  {
    id: "3",
    category: "Botox",
    before: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=500&fit=crop",
    after: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=500&fit=crop",
  },
];

interface BeforeAfterGalleryProps {
  limit?: number;
  showCTA?: boolean;
}

export default function BeforeAfterGallery({ limit, showCTA = true }: BeforeAfterGalleryProps) {
  const displayImages = limit ? beforeAfterImages.slice(0, limit) : beforeAfterImages;

  return (
    <section className="py-20 lg:py-28">
      <Container>
        <AnimatedSection>
          <SectionHeading
            eyebrow="Resultados"
            title="Antes & Depois"
            subtitle="Confira alguns dos resultados obtidos com nossos procedimentos. Cada transformação é única e personalizada."
          />
        </AnimatedSection>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayImages.map((item, index) => (
            <AnimatedSection key={item.id} delay={index * 0.1}>
              <div className="bg-white rounded-2xl overflow-hidden border border-border-light shadow-sm">
                <div className="grid grid-cols-2">
                  <div className="relative aspect-[3/4]">
                    <img
                      src={item.before}
                      alt={`Antes - ${item.category}`}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <span className="absolute bottom-2 left-2 bg-foreground/80 text-white text-xs px-2 py-1 rounded">
                      Antes
                    </span>
                  </div>
                  <div className="relative aspect-[3/4]">
                    <img
                      src={item.after}
                      alt={`Depois - ${item.category}`}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <span className="absolute bottom-2 right-2 bg-primary-500 text-white text-xs px-2 py-1 rounded">
                      Depois
                    </span>
                  </div>
                </div>
                <div className="p-4 text-center">
                  <span className="text-sm font-medium text-foreground">
                    {item.category}
                  </span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {showCTA && (
          <AnimatedSection className="mt-12 text-center">
            <Button as="a" href="/before-after" variant="outline" size="lg">
              Ver Mais Resultados
              <ArrowRight className="w-5 h-5" />
            </Button>
          </AnimatedSection>
        )}
      </Container>
    </section>
  );
}
