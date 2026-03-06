"use client";

import { ArrowRight, Star, Quote } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/AnimatedSection";
import { getFeaturedTestimonials, Testimonial } from "@/data/testimonials";

interface TestimonialsCarouselProps {
  limit?: number;
  showCTA?: boolean;
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="bg-white rounded-2xl p-8 border border-border-light shadow-sm h-full flex flex-col">
      <Quote className="w-10 h-10 text-primary-200 mb-4" />

      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < testimonial.rating
                ? "text-accent-400 fill-accent-400"
                : "text-gray-200"
            }`}
          />
        ))}
      </div>

      <p className="text-foreground-muted leading-relaxed flex-1">
        "{testimonial.content}"
      </p>

      <div className="mt-6 pt-6 border-t border-border-light">
        <div className="font-semibold text-foreground">{testimonial.name}</div>
        <div className="text-sm text-primary-500">{testimonial.treatment}</div>
        <div className="text-xs text-foreground-muted mt-1">{testimonial.date}</div>
      </div>
    </div>
  );
}

export default function TestimonialsCarousel({ limit = 3, showCTA = true }: TestimonialsCarouselProps) {
  const testimonials = getFeaturedTestimonials(limit);

  return (
    <section className="py-20 lg:py-28 bg-background-alt">
      <Container>
        <AnimatedSection>
          <SectionHeading
            eyebrow="Depoimentos"
            title="O Que Nossas Clientes Dizem"
            subtitle="A satisfação das nossas clientes é nossa maior conquista. Confira alguns depoimentos reais."
          />
        </AnimatedSection>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={testimonial.id} delay={index * 0.1}>
              <TestimonialCard testimonial={testimonial} />
            </AnimatedSection>
          ))}
        </div>

        {showCTA && (
          <AnimatedSection className="mt-12 text-center">
            <Button as="a" href="/testimonials" variant="outline" size="lg">
              Ver Todos os Depoimentos
              <ArrowRight className="w-5 h-5" />
            </Button>
          </AnimatedSection>
        )}
      </Container>
    </section>
  );
}
