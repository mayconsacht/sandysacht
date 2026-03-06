import { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, Instagram, MessageCircle } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/AnimatedSection";
import { ContactForm } from "@/components/features";
import { CONTACT_INFO, SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato conosco para agendar sua consulta. Atendimento em Joinville, SC. WhatsApp, telefone e formulário de contato.",
};

const contactMethods = [
  {
    icon: Phone,
    title: "Telefone / WhatsApp",
    value: CONTACT_INFO.phoneFormatted,
    href: `tel:${CONTACT_INFO.phone}`,
    description: "Ligue ou envie mensagem",
  },
  /* TODO: uncomment after confirming info
  {
    icon: Mail,
    title: "E-mail",
    value: CONTACT_INFO.email,
    href: `mailto:${CONTACT_INFO.email}`,
    description: "Resposta em até 24h",
  },
  */
  {
    icon: Instagram,
    title: "Instagram",
    value: "@sandysacht",
    href: SITE_CONFIG.links.instagram,
    description: "Siga para novidades",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-background-alt">
        <Container>
          <AnimatedSection>
            <SectionHeading
              eyebrow="Contato"
              title="Vamos Conversar?"
              subtitle="Estou pronta para atender você. Entre em contato pelo canal de sua preferência ou preencha o formulário abaixo."
            />
          </AnimatedSection>
        </Container>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Info */}
            <AnimatedSection direction="left">
              <div className="space-y-8">
                {/* Quick Contact Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    as="a"
                    href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=Olá! Gostaria de agendar uma consulta.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="lg"
                    className="flex-1 justify-center bg-[#25D366] hover:bg-[#20BA5C]"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp
                  </Button>
                  <Button
                    as="a"
                    href={SITE_CONFIG.links.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline"
                    size="lg"
                    className="flex-1 justify-center"
                  >
                    <Instagram className="w-5 h-5" />
                    Instagram
                  </Button>
                </div>

                {/* Contact Methods */}
                <div className="space-y-4">
                  {contactMethods.map((method) => (
                    <a
                      key={method.title}
                      href={method.href}
                      target={method.href.startsWith("http") ? "_blank" : undefined}
                      rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-start gap-4 p-4 rounded-xl bg-white border border-border-light hover:border-primary-200 transition-colors"
                    >
                      <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                        <method.icon className="w-6 h-6 text-primary-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">
                          {method.title}
                        </div>
                        <div className="text-primary-600">{method.value}</div>
                        <div className="text-sm text-foreground-muted">
                          {method.description}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>

                {/* TODO: uncomment after confirming info
                <div className="p-6 rounded-xl bg-background-alt">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">
                        Localização
                      </div>
                      <div className="mt-1 text-foreground-muted">
                        {CONTACT_INFO.address.street}
                        <br />
                        {CONTACT_INFO.address.neighborhood},{" "}
                        {CONTACT_INFO.address.city} - {CONTACT_INFO.address.state}
                        <br />
                        CEP: {CONTACT_INFO.address.zip}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-background-alt">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">
                        Horário de Atendimento
                      </div>
                      <div className="mt-1 text-foreground-muted space-y-1">
                        <div>{CONTACT_INFO.hours.weekdays}</div>
                        <div>{CONTACT_INFO.hours.saturday}</div>
                        <div>{CONTACT_INFO.hours.sunday}</div>
                      </div>
                    </div>
                  </div>
                </div>
                */}
              </div>
            </AnimatedSection>

            {/* TODO: uncomment after confirming info
            <AnimatedSection direction="right">
              <ContactForm />
            </AnimatedSection>
            */}
          </div>
        </Container>
      </section>

      {/* TODO: uncomment after confirming info
      <section className="h-96 bg-gray-100">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113977.89459741368!2d-48.91843454335936!3d-26.303915699999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94de8ae3f7dc4f1f%3A0x51d57f75c52de52f!2sJoinville%2C%20SC!5e0!3m2!1spt-BR!2sbr!4v1709756123456!5m2!1spt-BR!2sbr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localização da clínica"
        />
      </section>
      */}
    </>
  );
}
