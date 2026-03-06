"use client";

import { useState, FormEvent } from "react";
import { Send, Loader2, CheckCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const services = [
  { value: "", label: "Selecione um procedimento" },
  { value: "botox", label: "Botox" },
  { value: "harmonizacao", label: "Harmonização Facial" },
  { value: "preenchimento", label: "Preenchimento Labial" },
  { value: "bioestimuladores", label: "Bioestimuladores de Colágeno" },
  { value: "skinbooster", label: "Skinbooster" },
  { value: "tratamentos", label: "Tratamentos Faciais" },
  { value: "outro", label: "Outro" },
];

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch {
      setError("Ocorreu um erro ao enviar a mensagem. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl p-8 border border-border-light text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="font-serif text-2xl font-semibold text-foreground">
          Mensagem Enviada!
        </h3>
        <p className="mt-2 text-foreground-muted">
          Obrigada pelo contato! Responderemos em breve.
        </p>
        <Button
          onClick={() => setIsSubmitted(false)}
          variant="outline"
          className="mt-6"
        >
          Enviar Nova Mensagem
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl p-8 border border-border-light"
    >
      <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">
        Envie uma Mensagem
      </h3>

      <div className="space-y-4">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-foreground mb-1"
          >
            Nome Completo *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={cn(
              "w-full px-4 py-3 rounded-lg border border-border bg-background",
              "focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent",
              "placeholder:text-foreground-muted/50"
            )}
            placeholder="Seu nome"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-foreground mb-1"
          >
            E-mail *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={cn(
              "w-full px-4 py-3 rounded-lg border border-border bg-background",
              "focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent",
              "placeholder:text-foreground-muted/50"
            )}
            placeholder="seu@email.com"
          />
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-foreground mb-1"
          >
            Telefone / WhatsApp *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className={cn(
              "w-full px-4 py-3 rounded-lg border border-border bg-background",
              "focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent",
              "placeholder:text-foreground-muted/50"
            )}
            placeholder="(47) 99999-9999"
          />
        </div>

        {/* Service */}
        <div>
          <label
            htmlFor="service"
            className="block text-sm font-medium text-foreground mb-1"
          >
            Procedimento de Interesse
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className={cn(
              "w-full px-4 py-3 rounded-lg border border-border bg-background",
              "focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent",
              "text-foreground"
            )}
          >
            {services.map((service) => (
              <option key={service.value} value={service.value}>
                {service.label}
              </option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-foreground mb-1"
          >
            Mensagem
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className={cn(
              "w-full px-4 py-3 rounded-lg border border-border bg-background resize-none",
              "focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent",
              "placeholder:text-foreground-muted/50"
            )}
            placeholder="Conte-nos mais sobre o que você procura..."
          />
        </div>

        {error && (
          <p className="text-red-600 text-sm">{error}</p>
        )}

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full justify-center"
          size="lg"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Enviando...
            </>
          ) : (
            <>
              Enviar Mensagem
              <Send className="w-5 h-5" />
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
