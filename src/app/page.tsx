import {
  Hero,
  TrustIndicators,
  ServicesGrid,
  AboutPreview,
  // BeforeAfterGallery, // TODO: uncomment after confirming info
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
      {/* TODO: uncomment after confirming info */}
      {/* <BeforeAfterGallery limit={3} /> */}
      <TestimonialsCarousel limit={3} />
      <CTASection />
    </>
  );
}
