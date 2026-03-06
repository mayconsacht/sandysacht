"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import { CONTACT_INFO } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=1920&h=1080&fit=crop"
          alt="Aesthetic clinic background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-sm font-medium tracking-wider uppercase text-primary-500 mb-4">
              Estética Facial Premium
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight"
          >
            Realce sua beleza natural com{" "}
            <span className="text-primary-500">elegância</span> e{" "}
            <span className="text-primary-500">sofisticação</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg text-foreground-muted leading-relaxed"
          >
            Procedimentos estéticos personalizados com técnica apurada e
            resultados naturais. Descubra o equilíbrio perfeito entre ciência e
            arte para realçar sua beleza única.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            <Button
              as="a"
              href={`https://wa.me/${CONTACT_INFO.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
            >
              Agendar Consulta
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button as="a" href="/services" variant="outline" size="lg">
              Conhecer Procedimentos
            </Button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 flex flex-wrap gap-6 text-sm text-foreground-muted"
          >
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                <span className="text-primary-600 font-semibold">+5</span>
              </div>
              <span>Anos de experiência</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                <span className="text-primary-600 font-semibold">+1k</span>
              </div>
              <span>Clientes satisfeitas</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                <span className="text-primary-600 font-semibold">100%</span>
              </div>
              <span>Segurança e qualidade</span>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
