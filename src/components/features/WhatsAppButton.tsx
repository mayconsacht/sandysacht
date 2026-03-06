"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

export default function WhatsAppButton() {
  return (
    <motion.a
      href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=Olá! Gostaria de agendar uma consulta.`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] text-white pl-4 pr-5 py-3 rounded-full shadow-lg hover:bg-[#20BA5C] transition-colors"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="font-medium text-sm hidden sm:inline">
        Fale Conosco
      </span>
    </motion.a>
  );
}
