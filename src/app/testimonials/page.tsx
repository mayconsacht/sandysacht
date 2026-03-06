import { Metadata } from "next";
import { Star, Quote } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/AnimatedSection";
import { CTASection } from "@/components/sections";
import { testimonials, Testimonial } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "Depoimentos",
  description:
    "Veja o que nossas clientes dizem sobre os tratamentos estéticos realizados por Sandy Sacht. Depoimentos reais de resultados incríveis.",
};

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
        <div className="text-xs text-foreground-muted mt-1">
          {testimonial.date}
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-background-alt">
        <Container>
          <AnimatedSection>
            <SectionHeading
              eyebrow="Depoimentos"
              title="O Que Nossas Clientes Dizem"
              subtitle="A satisfação das nossas clientes é nossa maior conquista. Confira depoimentos reais de quem já realizou procedimentos conosco."
            />
          </AnimatedSection>

          {/* Stats */}
          <AnimatedSection delay={0.2}>
            <div className="mt-12 flex flex-wrap justify-center gap-8 md:gap-16">
              <div className="text-center">
                <div className="font-serif text-4xl font-semibold text-foreground">
                  +1.000
                </div>
                <div className="text-foreground-muted">Clientes Satisfeitas</div>
              </div>
              <div className="text-center">
                <div className="font-serif text-4xl font-semibold text-foreground">
                  5.0
                </div>
                <div className="text-foreground-muted">Nota no Google</div>
              </div>
              <div className="text-center">
                <div className="font-serif text-4xl font-semibold text-foreground">
                  98%
                </div>
                <div className="text-foreground-muted">Taxa de Recomendação</div>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={testimonial.id} delay={index * 0.05}>
                <TestimonialCard testimonial={testimonial} />
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Google Review CTA */}
      <section className="py-16 bg-background-alt">
        <Container>
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground">
                Já é nossa cliente?
              </h2>
              <p className="mt-4 text-foreground-muted">
                Sua opinião é muito importante para nós! Deixe sua avaliação no
                Google e ajude outras pessoas a conhecerem nosso trabalho.
              </p>
              <a
                href="https://g.page/r/review"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-white rounded-full border border-border hover:border-primary-300 transition-colors text-foreground font-medium"
              >
                <Star className="w-5 h-5 text-accent-400 fill-accent-400" />
                Avaliar no Google
              </a>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
