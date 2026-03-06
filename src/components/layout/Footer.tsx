import Link from "next/link";
import { Instagram, Phone, Mail, MapPin } from "lucide-react";
import Container from "./Container";
import { NAV_LINKS, CONTACT_INFO, SITE_CONFIG } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white/90">
      <Container>
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <Link
                href="/"
                className="font-serif text-2xl font-semibold text-white tracking-wide"
              >
                Sandy Sacht
              </Link>
              <p className="mt-4 text-white/70 text-sm leading-relaxed">
                Especialista em estética facial, dedicada a realçar sua beleza
                natural com procedimentos seguros e resultados elegantes.
              </p>
              <div className="flex gap-4 mt-6">
                <a
                  href={SITE_CONFIG.links.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-primary-500 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href={SITE_CONFIG.links.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-primary-500 transition-colors"
                  aria-label="WhatsApp"
                >
                  <Phone className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-primary-300 transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-4">Contato</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary-300 flex-shrink-0 mt-0.5" />
                  <div>
                    <a
                      href={`tel:${CONTACT_INFO.phone}`}
                      className="text-white/70 hover:text-primary-300 transition-colors text-sm"
                    >
                      {CONTACT_INFO.phoneFormatted}
                    </a>
                  </div>
                </li>
                {/* TODO: uncomment after confirming info
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary-300 flex-shrink-0 mt-0.5" />
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="text-white/70 hover:text-primary-300 transition-colors text-sm"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary-300 flex-shrink-0 mt-0.5" />
                  <span className="text-white/70 text-sm">
                    {CONTACT_INFO.address.full}
                  </span>
                </li>
                */}
              </ul>
            </div>

            {/* TODO: uncomment after confirming info
            <div>
              <h4 className="text-white font-semibold mb-4">Horário</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>{CONTACT_INFO.hours.weekdays}</li>
                <li>{CONTACT_INFO.hours.saturday}</li>
                <li>{CONTACT_INFO.hours.sunday}</li>
              </ul>
            </div>
            */}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">
              &copy; {currentYear} Sandy Sacht. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <Link
                href="/privacy"
                className="text-white/50 hover:text-primary-300 transition-colors"
              >
                Política de Privacidade
              </Link>
              <Link
                href="/terms"
                className="text-white/50 hover:text-primary-300 transition-colors"
              >
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
