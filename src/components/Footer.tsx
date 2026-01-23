import {
  Phone,
  Mail,
  MapPin,
  Home,
  Briefcase,
  Info,
  FileText,
  MessageSquare,
  Linkedin,
  Facebook,
  Instagram,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();

  // Footer texts
  const footerTexts = {
    pt: {
      contacts: "Contactos",
      phone: "+351 934 449 370",
      phoneLabel: "Suporte técnico",
      email: "geral@fieldairtech.com",
      emailLabel: "Respondemos em 24h",
      address: "Biscainho, Coruche",
      addressLabel: "Santarém, Portugal",
      navigation: "Navegação",
      home: "Home",
      products: "Produtos",
      services: "Serviços",
      about: "Sobre Nós",
      blog: "Blog",
      privacy: "Política de Privacidade",
      socialMedia: "Redes Sociais",
      followUs: "Siga-nos para as últimas novidades",
      copyright: `© ${currentYear} FieldAirTech, Lda. Todos os direitos reservados.`,
      company: "Empresa",
      legal: "Legal",
    },
    en: {
      contacts: "Contacts",
      phone: "+351 934 449 370",
      phoneLabel: "Technical support",
      email: "geral@fieldairtech.com",
      emailLabel: "We respond within 24h",
      address: "Biscainho, Coruche",
      addressLabel: "Santarém, Portugal",
      navigation: "Navigation",
      home: "Home",
      products: "Products",
      services: "Services",
      about: "About Us",
      blog: "Blog",
      privacy: "Privacy Policy",
      socialMedia: "Social Media",
      followUs: "Follow us for the latest news",
      copyright: `© ${currentYear} FieldAirTech, Lda. All rights reserved.`,
      company: "Company",
      legal: "Legal",
    }
  };

  const p = footerTexts[language];

  return (
    <footer className="bg-[#0f4c75] text-gray-200 relative overflow-hidden">
      
      {/* Main horizontal line */}
      <div className="absolute -top-px left-0 right-0 h-px bg-[#0f4c75] z-10"></div>
      
      {/* Coverage diagonal lines */}
      <div className="absolute -top-1 left-0 right-0 h-3 bg-[#0f4c75] transform -rotate-1 z-5 opacity-95"></div>
      <div className="absolute -top-1 left-0 right-0 h-3 bg-[#0f4c75] transform rotate-1 z-5 opacity-95"></div>
      
      {/* Smooth transition gradient */}
      <div className="absolute -top-3 left-0 right-0 h-6 bg-gradient-to-b from-transparent to-[#0f4c75] z-0 opacity-80"></div>
      
      <div className="relative z-20">
        <div className="max-w-7xl mx-auto px-6 py-12">

          {/* 3 Columns (removida a coluna de idiomas) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

            {/* Column 1: Contacts */}
            <div>
              <h3 className="font-bold text-white text-lg mb-6">{p.contacts}</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="text-blue-300 mt-1" size={18} />
                  <div>
                    <div className="font-medium text-white">{p.phone}</div>
                    <div className="text-sm text-gray-300">{p.phoneLabel}</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Mail className="text-blue-300 mt-1" size={18} />
                  <div>
                    <div className="font-medium text-white">{p.email}</div>
                    <div className="text-sm text-gray-300">{p.emailLabel}</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MapPin className="text-blue-300 mt-1" size={18} />
                  <div>
                    <div className="font-medium text-white">{p.address}</div>
                    <div className="text-sm text-gray-300">{p.addressLabel}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2: Navigation */}
            <div>
              <h3 className="font-bold text-white text-lg mb-6">{p.navigation}</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-3">
                  <Link to="/" className="flex items-center gap-2 hover:text-white transition-colors">
                    <Home size={16} />
                    <span>{p.home}</span>
                  </Link>
                  <Link to="/produtos" className="flex items-center gap-2 hover:text-white transition-colors">
                    <Briefcase size={16} />
                    <span>{p.products}</span>
                  </Link>
                  <Link to="/servicos" className="flex items-center gap-2 hover:text-white transition-colors">
                    <FileText size={16} />
                    <span>{p.services}</span>
                  </Link>
                </div>
                <div className="space-y-3">
                  <Link to="/sobre" className="flex items-center gap-2 hover:text-white transition-colors">
                    <Info size={16} />
                    <span>{p.about}</span>
                  </Link>
                  <Link to="/noticias" className="flex items-center gap-2 hover:text-white transition-colors">
                    <MessageSquare size={16} />
                    <span>{p.blog}</span>
                  </Link>
                  <Link to="/privacy" className="flex items-center gap-2 hover:text-white transition-colors">
                    <FileText size={16} />
                    <span>{p.privacy}</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Column 3: Social Media */}
            <div>
              <h3 className="font-bold text-white text-lg mb-6">{p.socialMedia}</h3>
              <div className="grid grid-cols-3 gap-3 mb-6">
                <a 
                  href="https://www.linkedin.com/in/fieldairtech-services-02a583209/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#0e3b5c] hover:bg-[#0c324f] rounded-lg flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="https://www.facebook.com/people/Fieldairtech-Lda/100081235196712/#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#0e3b5c] hover:bg-[#0c324f] rounded-lg flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                  title="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a 
                  href="https://www.instagram.com/fieldairtech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#0e3b5c] hover:bg-[#0c324f] rounded-lg flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                  title="Instagram"
                >
                  <Instagram size={20} />
                </a>
              </div>
              <div className="text-sm text-gray-300">
                {p.followUs}
              </div>
            </div>

          </div>

          {/* Bottom Line */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-[#0e3b5c]">
            <div className="text-center md:text-left">
              <div className="text-gray-300 text-sm">
                {p.copyright}
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}