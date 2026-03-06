import {
  Hero,
  TrustIndicators,
  ServicesGrid,
  AboutPreview,
  BeforeAfterGallery,
  TestimonialsCarousel,
  CTASection,
} from "@/components/sections";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustIndicators />
      <ServicesGrid limit={6} />
      <AboutPreview />
      <BeforeAfterGallery limit={3} />
      <TestimonialsCarousel limit={3} />
      <CTASection />
    </>
  );
}
