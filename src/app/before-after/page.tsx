"use client";

import { useState } from "react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/AnimatedSection";
import { ImageLightbox } from "@/components/features";
import { CTASection } from "@/components/sections";
import { cn } from "@/lib/utils";

const categories = [
  "Todos",
  "Harmonização Facial",
  "Preenchimento Labial",
  "Botox",
  "Bioestimuladores",
  "Skinbooster",
];

const beforeAfterImages = [
  {
    id: "1",
    category: "Harmonização Facial",
    before:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=800&fit=crop",
    after:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&h=800&fit=crop",
  },
  {
    id: "2",
    category: "Preenchimento Labial",
    before:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=600&h=800&fit=crop",
    after:
      "https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?w=600&h=800&fit=crop",
  },
  {
    id: "3",
    category: "Botox",
    before:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=800&fit=crop",
    after:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&h=800&fit=crop",
  },
  {
    id: "4",
    category: "Harmonização Facial",
    before:
      "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=600&h=800&fit=crop",
    after:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&h=800&fit=crop",
  },
  {
    id: "5",
    category: "Bioestimuladores",
    before:
      "https://images.unsplash.com/photo-1504199367641-aba8151af406?w=600&h=800&fit=crop",
    after:
      "https://images.unsplash.com/photo-1503104834685-7205e8607eb9?w=600&h=800&fit=crop",
  },
  {
    id: "6",
    category: "Skinbooster",
    before:
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=600&h=800&fit=crop",
    after:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=800&fit=crop",
  },
];

export default function BeforeAfterPage() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredImages =
    activeCategory === "Todos"
      ? beforeAfterImages
      : beforeAfterImages.filter((img) => img.category === activeCategory);

  const lightboxImages = filteredImages.flatMap((item) => [
    { src: item.before, alt: `Antes - ${item.category}` },
    { src: item.after, alt: `Depois - ${item.category}` },
  ]);

  const openLightbox = (itemIndex: number, type: "before" | "after") => {
    const imageIndex = itemIndex * 2 + (type === "after" ? 1 : 0);
    setCurrentImageIndex(imageIndex);
    setLightboxOpen(true);
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % lightboxImages.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + lightboxImages.length) % lightboxImages.length
    );
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-background-alt">
        <Container>
          <AnimatedSection>
            <SectionHeading
              eyebrow="Resultados"
              title="Antes & Depois"
              subtitle="Confira a transformação das nossas clientes. Cada resultado é único e personalizado para realçar a beleza natural de cada pessoa."
            />
          </AnimatedSection>
        </Container>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-background-alt border-b border-border-light">
        <Container>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all",
                  activeCategory === category
                    ? "bg-primary-400 text-white"
                    : "bg-white text-foreground-muted hover:bg-primary-50 hover:text-primary-600 border border-border"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((item, index) => (
              <AnimatedSection key={item.id} delay={index * 0.05}>
                <div className="bg-white rounded-2xl overflow-hidden border border-border-light shadow-sm">
                  <div className="grid grid-cols-2">
                    <button
                      onClick={() => openLightbox(index, "before")}
                      className="relative aspect-[3/4] group cursor-pointer"
                    >
                      <img
                        src={item.before}
                        alt={`Antes - ${item.category}`}
                        className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-105"
                      />
                      <span className="absolute bottom-2 left-2 bg-foreground/80 text-white text-xs px-2 py-1 rounded">
                        Antes
                      </span>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                    </button>
                    <button
                      onClick={() => openLightbox(index, "after")}
                      className="relative aspect-[3/4] group cursor-pointer"
                    >
                      <img
                        src={item.after}
                        alt={`Depois - ${item.category}`}
                        className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-105"
                      />
                      <span className="absolute bottom-2 right-2 bg-primary-500 text-white text-xs px-2 py-1 rounded">
                        Depois
                      </span>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                    </button>
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

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-foreground-muted">
                Nenhum resultado encontrado para esta categoria.
              </p>
            </div>
          )}
        </Container>
      </section>

      {/* Lightbox */}
      <ImageLightbox
        images={lightboxImages}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={handleNext}
        onPrev={handlePrev}
      />

      {/* CTA */}
      <CTASection />
    </>
  );
}
