import { useState, FormEvent, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Users, Award, CheckCircle, ChevronRight } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../i18n/translations';

// Default translations in case the translations file is missing
const defaultTranslations = {
  pt: {
    contact: {
      getInTouch: "Contacte-nos",
      title: "Fale Connosco",
      description: "Tem dúvidas? Estamos aqui para ajudar. Contacte-nos hoje.",
      quickContact: {
        phone: {
          title: "Telefone Rápido",
          description: "Fale diretamente com um dos nossos especialistas",
          hours: "Seg-Sex: 9h-18h • Sáb: 9h-13h"
        },
        email: {
          title: "Email",
          description: "Resposta garantida em até 24h"
        },
        visit: {
          title: "Visite-nos",
          description: "Conheça nossas instalações",
          address1: "Estrada 115, 117",
          address2: "Biscainho, Coruche",
          note: "Visitas apenas com marcação"
        }
      },
      form: {
        title: "Contacte-nos",
        description: "Tem dúvidas? Estamos aqui para ajudar. Contacte-nos hoje.",
        labels: {
          name: "Nome Completo *",
          namePlaceholder: "Ex: João Silva",
          company: "Empresa/Exploração",
          companyPlaceholder: "Nome da empresa",
          email: "Email *",
          emailPlaceholder: "geral@fieldairtech.com",
          phone: "Telemóvel",
          phonePlaceholder: "+351 912 345 678",
          subject: "Assunto *",
          message: "Mensagem *",
          messagePlaceholder: "Descreva sua necessidade ou questão..."
        },
        privacy: "Concordo com a <a href='/privacy' class='text-emerald-600 hover:text-emerald-700 font-medium'>política de privacidade</a> e autorizo o tratamento dos meus dados.",
        submit: "Enviar Mensagem",
        loading: "A enviar sua mensagem...",
        success: "✓ Mensagem enviada com sucesso!",
        successMessage: "Entraremos em contacto consigo em breve. Agradecemos seu interesse."
      },
      guarantees: {
        title: "Nossas Garantias",
        items: [
          { icon: "✓", text: "Resposta em até 24h úteis" },
          { icon: "✓", text: "Orçamento personalizado sem custo" },
          { icon: "✓", text: "Demonstração gratuita" },
          { icon: "✓", text: "Suporte técnico especializado" },
          { icon: "✓", text: "Formação incluída na compra" }
        ]
      },
      team: {
        title: "Nossa Equipa",
        scheduleTitle: "Horários de Atendimento",
        schedule: [
          { day: "Segunda a Sexta", hours: "9h00 - 18h00" },
          { day: "Sábado", hours: "9h00 - 13h00" },
          { day: "Domingo", hours: "Encerrado" }
        ],
        responseTime: "Tempo Médio de Resposta",
        emailResponse: "24h",
        phoneResponse: "Imediato",
        emailLabel: "Email",
        phoneLabel: "Telefone"
      },
      faq: {
        title: "Perguntas Frequentes",
        items: [
          { 
            q: "Quanto tempo demora uma resposta?", 
            a: "Respondemos a todos os contactos em até 24h úteis." 
          },
          { 
            q: "Oferecem formação técnica?", 
            a: "Sim, temos programas de formação completos para operadores." 
          },
          { 
            q: "Têm serviço pós-venda?", 
            a: "Oferecemos garantia e suporte técnico para todos os produtos." 
          }
        ]
      },
      map: {
        sectionTitle: "ENCONTRE-NOS",
        title: "Visite as Nossas <span class='text-emerald-600'>Instalações</span>",
        description: "Conheça nossa estrutura e equipe especializada",
        locationTitle: "Estamos em Coruche",
        locationDescription: "Nossa sede está localizada no coração da região agrícola, pronta para atendê-lo.",
        address1: "Estrada 115, 117 - Biscainho",
        address2: "Coruche, Portugal",
        parking: "Estacionamento gratuito",
        directionsTitle: "Como Chegar",
        gpsTitle: "📌 Coordenadas GPS",
        gpsCoordinates: "38.913894° N, 8.652688° W",
        instructionsTitle: "📍 Instruções",
        instructions: [
          "Siga pela Estrada Nacional 115",
          "Entre no Biscainho, Coruche",
          "Contacte-nos para coordenarmos a sua visita"
        ],
        openMap: "Abrir no Google Maps"
      }
    }
  },
  en: {
    contact: {
      getInTouch: "Contact Us",
      title: "Get in Touch",
      description: "Have questions? We're here to help. Contact us today.",
      quickContact: {
        phone: {
          title: "Quick Call",
          description: "Speak directly with one of our specialists",
          hours: "Mon-Fri: 9am-6pm • Sat: 9am-1pm"
        },
        email: {
          title: "Email",
          description: "Guaranteed response within 24h"
        },
        visit: {
          title: "Visit Us",
          description: "Get to know our facilities",
          address1: "Estrada 115, 117",
          address2: "Biscainho, Coruche",
          note: "Visits by appointment only"
        }
      },
      form: {
        title: "Contact Us",
        description: "Have questions? We're here to help. Contact us today.",
        labels: {
          name: "Full Name *",
          namePlaceholder: "Ex: John Smith",
          company: "Company/Farm",
          companyPlaceholder: "Company name",
          email: "Email *",
          emailPlaceholder: "geral@fieldairtech.com",
          phone: "Phone",
          phonePlaceholder: "+351 912 345 678",
          subject: "Subject *",
          message: "Message *",
          messagePlaceholder: "Describe your needs or questions..."
        },
        privacy: "I agree with the <a href='/privacy' class='text-emerald-600 hover:text-emerald-700 font-medium'>privacy policy</a> and authorize the processing of my data.",
        submit: "Send Message",
        loading: "Sending your message...",
        success: "✓ Message sent successfully!",
        successMessage: "We will contact you soon. Thank you for your interest."
      },
      guarantees: {
        title: "Our Guarantees",
        items: [
          { icon: "✓", text: "Response within 24 working hours" },
          { icon: "✓", text: "Custom quote at no cost" },
          { icon: "✓", text: "Free demonstration" },
          { icon: "✓", text: "Specialized technical support" },
          { icon: "✓", text: "Training included with purchase" }
        ]
      },
      team: {
        title: "Our Team",
        scheduleTitle: "Business Hours",
        schedule: [
          { day: "Monday to Friday", hours: "9:00 - 18:00" },
          { day: "Saturday", hours: "9:00 - 13:00" },
          { day: "Sunday", hours: "Closed" }
        ],
        responseTime: "Average Response Time",
        emailResponse: "24h",
        phoneResponse: "Immediate",
        emailLabel: "Email",
        phoneLabel: "Phone"
      },
      faq: {
        title: "Frequently Asked Questions",
        items: [
          { 
            q: "How long does a response take?", 
            a: "We respond to all contacts within 24 working hours." 
          },
          { 
            q: "Do you offer technical training?", 
            a: "Yes, we have complete training programs for operators." 
          },
          { 
            q: "Do you have after-sales service?", 
            a: "We offer warranty and technical support for all products." 
          }
        ]
      },
      map: {
        sectionTitle: "FIND US",
        title: "Visit Our <span class='text-emerald-600'>Facilities</span>",
        description: "Get to know our structure and specialized team",
        locationTitle: "We are in Coruche",
        locationDescription: "Our headquarters is located in the heart of the agricultural region, ready to serve you.",
        address1: "Estrada 115, 117 - Biscainho",
        address2: "Coruche, Portugal",
        parking: "Free parking",
        directionsTitle: "How to Get Here",
        gpsTitle: "📌 GPS Coordinates",
        gpsCoordinates: "38.913894° N, 8.652688° W",
        instructionsTitle: "📍 Directions",
        instructions: [
          "Follow National Road 115",
          "Enter Biscainho, Coruche",
          "Contact us to coordinate your visit"
        ],
        openMap: "Open in Google Maps"
      }
    }
  }
};

export default function Contact() {
  const { language } = useLanguage();
  
  // Use translations from context or fallback to defaults
  const getTranslations = () => {
    if (translations && translations[language] && translations[language].contact) {
      return translations[language].contact;
    }
    return defaultTranslations[language].contact;
  };
  
  const t = getTranslations();
  
  useEffect(() => {
    document.title = language === 'pt' 
      ? "Contactos | FieldAirTech" 
      : "Contact | FieldAirTech";
  }, [language]);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Inicializar EmailJS
  useEffect(() => {
    emailjs.init("1y9MhZkkT6oEyvL2x");
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Validação com mensagens traduzidas
    const validationMessages = {
      pt: {
        required: 'Por favor, preencha os campos obrigatórios (Nome, Email e Mensagem).',
        subject: 'Por favor, selecione um assunto.',
        configError: 'Erro de configuração. Por favor, verifique o Template ID.',
        serviceError: 'Erro de configuração. Por favor, verifique o Service ID.',
        generalError: 'Erro ao enviar mensagem. Por favor, tente novamente ou contacte-nos diretamente por telefone: +351 934 449 370'
      },
      en: {
        required: 'Please fill in the required fields (Name, Email and Message).',
        subject: 'Please select a subject.',
        configError: 'Configuration error. Please check the Template ID.',
        serviceError: 'Configuration error. Please check the Service ID.',
        generalError: 'Error sending message. Please try again or contact us directly by phone: +351 934 449 370'
      }
    };

    if (!formData.name || !formData.email || !formData.message) {
      setError(validationMessages[language].required);
      return;
    }

    if (!formData.subject || formData.subject === '') {
      setError(validationMessages[language].subject);
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const result = await emailjs.send(
        'service_hecfifz',
        'template_ft748ya',
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone || (language === 'pt' ? 'Não fornecido' : 'Not provided'),
          company: formData.company || (language === 'pt' ? 'Não fornecido' : 'Not provided'),
          subject: formData.subject,
          message: formData.message,
          date: new Date().toLocaleString('pt-PT', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          }),
          to_email: 'info@fieldairtech.pt',
          language: language
        }
      );

      if (result.status === 200) {
        setSubmitted(true);
        setFormData({ 
          name: '', 
          email: '', 
          phone: '', 
          company: '', 
          subject: '', 
          message: '' 
        });
        
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      }
    } catch (err: any) {
      console.error('EmailJS Error:', err);
      
      if (err.text?.includes('Invalid template ID')) {
        setError(validationMessages[language].configError);
      } else if (err.text?.includes('Invalid service ID')) {
        setError(validationMessages[language].serviceError);
      } else {
        setError(validationMessages[language].generalError);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (error) setError('');
  };

  // Obter assuntos baseados no idioma
  const getSubjects = () => {
    if (language === 'pt') {
      return [
        { value: '', label: 'Selecione um assunto *' },
        { value: 'Demonstração', label: '📅 Agendar Demonstração' },
        { value: 'Orçamento', label: '💰 Pedido de Orçamento' },
        { value: 'Técnico', label: '🔧 Suporte Técnico' },
        { value: 'Vendas', label: '💼 Informações de Vendas' },
        { value: 'Formação', label: '🎓 Formação/Cursos' },
        { value: 'Parceria', label: '🤝 Parcerias Comerciais' },
        { value: 'Outro', label: '❓ Outro Assunto' },
      ];
    } else {
      return [
        { value: '', label: 'Select a subject *' },
        { value: 'Demo', label: '📅 Schedule a Demo' },
        { value: 'Quote', label: '💰 Request a Quote' },
        { value: 'Technical', label: '🔧 Technical Support' },
        { value: 'Sales', label: '💼 Sales Information' },
        { value: 'Training', label: '🎓 Training/Courses' },
        { value: 'Partnership', label: '🤝 Commercial Partnerships' },
        { value: 'Other', label: '❓ Other Subject' },
      ];
    }
  };

  // Labels dinâmicas para "DIRETO" e "MARCAÇÃO"
  const quickContactLabels = {
    pt: {
      phoneLabel: 'DIRETO',
      visitLabel: 'MARCAÇÃO'
    },
    en: {
      phoneLabel: 'DIRECT',
      visitLabel: 'APPOINTMENT'
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 pt-32 bg-gradient-to-br from-emerald-600 via-green-600 to-emerald-700 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '30px 30px'
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-12">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full mb-8">
              <MessageSquare size={20} />
              <span className="text-sm font-semibold">{t.getInTouch?.toUpperCase() || 'CONTACTE-NOS'}</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="block">{t.title || 'Fale Connosco'}</span>
              <span className="text-2xl md:text-3xl font-normal opacity-90 mt-4 block">
                {t.description || 'Tem dúvidas? Estamos aqui para ajudar. Contacte-nos hoje.'}
              </span>
            </h1>

            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              {t.description || 'Tem dúvidas? Estamos aqui para ajudar. Contacte-nos hoje.'}
            </p>
          </div>

          {/* Quick Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {/* Phone */}
            <div className="group relative">
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105">
                <div className="mb-6 flex items-center justify-between">
                  <div className="p-4 bg-gradient-to-br from-white/20 to-transparent rounded-xl">
                    <Phone className="text-white" size={28} />
                  </div>
                  <div className="text-white/60 text-sm font-medium">
                    {quickContactLabels[language].phoneLabel}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">{t.quickContact?.phone?.title || 'Telefone Rápido'}</h3>
                <p className="text-white/80 mb-6">{t.quickContact?.phone?.description || 'Fale diretamente com um dos nossos especialistas'}</p>
                
                <a 
                  href="tel:+351934449370" 
                  className="inline-flex items-center gap-3 text-white font-bold text-lg hover:text-emerald-200 transition-colors group/link"
                >
                  <span className="text-2xl">+351 934 449 370</span>
                  <ChevronRight size={20} className="group-hover/link:translate-x-2 transition-transform" />
                </a>
                
                <div className="mt-4 pt-4 border-t border-white/10">
                  <div className="text-white/60 text-sm">{t.quickContact?.phone?.hours || 'Seg-Sex: 9h-18h • Sáb: 9h-13h'}</div>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="group relative">
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105">
                <div className="mb-6 flex items-center justify-between">
                  <div className="p-4 bg-gradient-to-br from-white/20 to-transparent rounded-xl">
                    <Mail className="text-white" size={28} />
                  </div>
                  <div className="text-white/60 text-sm font-medium">24H</div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">{t.quickContact?.email?.title || 'Email'}</h3>
                <p className="text-white/80 mb-6">{t.quickContact?.email?.description || 'Resposta garantida em até 24h'}</p>
                
                <a 
                  href="mailto:geral@fieldairtech.com" 
                  className="inline-flex items-center gap-3 text-white font-bold text-lg hover:text-emerald-200 transition-colors group/link break-all"
                >
                  <span>geral@fieldairtech.com</span>
                  <ChevronRight size={20} className="group-hover/link:translate-x-2 transition-transform" />
                </a>
              </div>
            </div>

            {/* Visit */}
            <div className="group relative">
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105">
                <div className="mb-6 flex items-center justify-between">
                  <div className="p-4 bg-gradient-to-br from-white/20 to-transparent rounded-xl">
                    <MapPin className="text-white" size={28} />
                  </div>
                  <div className="text-white/60 text-sm font-medium">
                    {quickContactLabels[language].visitLabel}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">{t.quickContact?.visit?.title || 'Visite-nos'}</h3>
                <p className="text-white/80 mb-6">{t.quickContact?.visit?.description || 'Conheça nossas instalações'}</p>
                
                <div className="space-y-1">
                  <p className="text-white font-medium">{t.quickContact?.visit?.address1 || 'Estrada 115, 117'}</p>
                  <p className="text-white/80">{t.quickContact?.visit?.address2 || 'Biscainho, Coruche'}</p>
                </div>
                
                <div className="mt-4 pt-4 border-t border-white/10">
                  <div className="text-white/60 text-sm">{t.quickContact?.visit?.note || 'Visitas apenas com marcação'}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Section - Form and Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl p-10 border border-gray-200">
                <div className="flex items-center gap-4 mb-10">
                  <div className="p-4 bg-gradient-to-br from-emerald-100 to-green-100 rounded-2xl">
                    <Send className="text-emerald-600" size={28} />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">{t.form?.title || 'Contacte-nos'}</h2>
                    <p className="text-gray-600 mt-2">{t.form?.description || 'Tem dúvidas? Estamos aqui para ajudar. Contacte-nos hoje.'}</p>
                  </div>
                </div>

                {/* Success Message */}
                {submitted && (
                  <div className="mb-8 p-6 bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200 rounded-2xl animate-fadeIn">
                    <div className="flex items-start">
                      <div className="p-3 bg-emerald-100 rounded-full mr-4">
                        <CheckCircle className="text-emerald-600" size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-emerald-800 text-lg mb-2">{t.form?.success || '✓ Mensagem enviada com sucesso!'}</h4>
                        <p className="text-emerald-700">
                          {t.form?.successMessage || 'Entraremos em contacto consigo em breve. Agradecemos seu interesse.'}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Error Message */}
                {error && (
                  <div className="mb-8 p-6 bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-2xl animate-fadeIn">
                    <div className="flex items-start">
                      <div className="p-3 bg-red-100 rounded-full mr-4">
                        <div className="text-red-600 font-bold">!</div>
                      </div>
                      <div>
                        <h4 className="font-bold text-red-800 text-lg mb-2">
                          {language === 'pt' ? 'Atenção' : 'Attention'}
                        </h4>
                        <p className="text-red-700">{error}</p>
                      </div>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        {t.form?.labels?.name || 'Nome Completo *'}
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-5 py-4 bg-white border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-300"
                        placeholder={t.form?.labels?.namePlaceholder || 'Ex: João Silva'}
                        disabled={isLoading}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        {t.form?.labels?.company || 'Empresa/Exploração'}
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-5 py-4 bg-white border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-300"
                        placeholder={t.form?.labels?.companyPlaceholder || 'Nome da empresa'}
                        disabled={isLoading}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        {t.form?.labels?.email || 'Email *'}
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-5 py-4 bg-white border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-300"
                        placeholder={t.form?.labels?.emailPlaceholder || 'geral@fieldairtech.com'}
                        disabled={isLoading}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        {t.form?.labels?.phone || 'Telemóvel'}
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-5 py-4 bg-white border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-300"
                        placeholder={t.form?.labels?.phonePlaceholder || '+351 912 345 678'}
                        disabled={isLoading}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      {t.form?.labels?.subject || 'Assunto *'}
                    </label>
                    <select
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-white border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-300 appearance-none"
                      disabled={isLoading}
                    >
                      {getSubjects().map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      {t.form?.labels?.message || 'Mensagem *'}
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-white border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-300 resize-none"
                      placeholder={t.form?.labels?.messagePlaceholder || 'Descreva sua necessidade ou questão...'}
                      disabled={isLoading}
                    />
                  </div>

                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="privacy"
                      required
                      className="mt-1 h-5 w-5 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                      disabled={isLoading}
                    />
                    <label htmlFor="privacy" className="text-gray-600 text-sm" 
                      dangerouslySetInnerHTML={{ __html: t.form?.privacy || 'Concordo com a <a href="/privacy" class="text-emerald-600 hover:text-emerald-700 font-medium">política de privacidade</a> e autorizo o tratamento dos meus dados.' }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full px-8 py-5 rounded-xl font-bold text-lg transition-all duration-300 ${
                      isLoading 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 shadow-xl hover:shadow-2xl transform hover:-translate-y-1'
                    } text-white`}
                  >
                    {isLoading ? (
                      <span className="flex items-center justify-center">
                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                        {t.form?.loading || 'A enviar sua mensagem...'}
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-3">
                        <Send size={22} />
                        {t.form?.submit || 'Enviar Mensagem'}
                      </span>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Additional Information */}
            <div className="space-y-8">
              {/* Guarantees */}
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl p-10 border border-gray-200">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-4 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl">
                    <Award className="text-blue-600" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{t.guarantees?.title || 'Nossas Garantias'}</h3>
                </div>
                
                <div className="space-y-6">
                  {(t.guarantees?.items || defaultTranslations.pt.contact.guarantees.items).map((item, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 bg-gray-50/50 rounded-xl hover:bg-gray-50 transition-colors">
                      <div className="w-8 h-8 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center font-bold">
                        {item.icon}
                      </div>
                      <span className="text-gray-700 font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Team and Schedule */}
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl p-10 border border-gray-200">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-4 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl">
                    <Users className="text-purple-600" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{t.team?.title || 'Nossa Equipa'}</h3>
                </div>
                
                <div className="space-y-8">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                      <Clock className="text-gray-500" size={18} />
                      {t.team?.scheduleTitle || 'Horários de Atendimento'}
                    </h4>
                    <div className="space-y-3">
                      {(t.team?.schedule || defaultTranslations.pt.contact.team.schedule).map((schedule, idx) => (
                        <div key={idx} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                          <span className="text-gray-700">{schedule.day}</span>
                          <span className="font-semibold text-gray-900">{schedule.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-200">
                    <h4 className="font-semibold text-gray-800 mb-3">{t.team?.responseTime || 'Tempo Médio de Resposta'}</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-emerald-50 rounded-xl">
                        <div className="text-2xl font-bold text-emerald-700">{t.team?.emailResponse || '24h'}</div>
                        <div className="text-sm text-emerald-600">{t.team?.emailLabel || 'Email'}</div>
                      </div>
                      <div className="text-center p-4 bg-blue-50 rounded-xl">
                        <div className="text-2xl font-bold text-blue-700">{t.team?.phoneResponse || 'Imediato'}</div>
                        <div className="text-sm text-blue-600">{t.team?.phoneLabel || 'Telefone'}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-3xl shadow-xl p-10 border border-emerald-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">{t.faq?.title || 'Perguntas Frequentes'}</h3>
                <div className="space-y-6">
                  {(t.faq?.items || defaultTranslations.pt.contact.faq.items).map((faq, idx) => (
                    <div key={idx} className="group">
                      <h4 className="font-semibold text-gray-800 mb-2 group-hover:text-emerald-700 transition-colors">
                        {faq.q}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-100 to-green-100 rounded-full mb-6">
              <MapPin className="text-emerald-600" size={20} />
              <span className="text-sm font-semibold text-emerald-700">{t.map?.sectionTitle || 'ENCONTRE-NOS'}</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6" 
                dangerouslySetInnerHTML={{ __html: t.map?.title || 'Visite as Nossas <span class="text-emerald-600">Instalações</span>' }} />
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {t.map?.description || 'Conheça nossa estrutura e equipe especializada'}
            </p>
          </div>
          
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
            <div className="grid md:grid-cols-2">
              {/* Coruche Photo Background */}
              <div 
                className="relative p-12 flex flex-col items-center justify-center min-h-[500px]"
                style={{
                  backgroundImage: `url('https://i.imgur.com/S99eZq5.jpeg')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div className="absolute inset-0 bg-black/30"></div>
                
                <div className="relative z-10 text-center text-white">
                  <div className="relative inline-block mb-8">
                    <div className="absolute inset-0 bg-white/20 blur-3xl rounded-full"></div>
                    <MapPin className="relative text-white" size={80} />
                  </div>
                  <h3 className="text-3xl font-bold mb-6">{t.map?.locationTitle || 'Estamos em Coruche'}</h3>
                  <p className="text-xl text-white/90 mb-8 max-w-md leading-relaxed">
                    {t.map?.locationDescription || 'Nossa sede está localizada no coração da região agrícola, pronta para atendê-lo.'}
                  </p>
                  
                  <div className="space-y-4 text-left max-w-sm mx-auto bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <MapPin size={16} className="text-white" />
                      </div>
                      <span className="font-medium">{t.map?.address1 || 'Estrada 115, 117 - Biscainho'}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <MapPin size={16} className="text-white" />
                      </div>
                      <span className="font-medium">{t.map?.address2 || 'Coruche, Portugal'}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 border-2 border-white rounded"></div>
                      </div>
                      <span className="font-medium">{t.map?.parking || 'Estacionamento gratuito'}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Map Information */}
              <div className="p-12 bg-gradient-to-br from-emerald-50 to-white">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">{t.map?.directionsTitle || 'Como Chegar'}</h3>
                
                <div className="space-y-8">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-4">{t.map?.gpsTitle || '📌 Coordenadas GPS'}</h4>
                    <div className="bg-white p-4 rounded-xl border border-gray-200">
                      <code className="text-gray-700 font-mono">{t.map?.gpsCoordinates || '38.913894° N, 8.652688° W'}</code>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-4">{t.map?.instructionsTitle || '📍 Instruções'}</h4>
                    <ul className="space-y-3">
                      {(t.map?.instructions || defaultTranslations.pt.contact.map.instructions).map((instruction, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-sm font-bold mt-1">
                            {idx + 1}
                          </div>
                          <span className="text-gray-600">{instruction}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-6 border-t border-gray-200">
                    <a 
                      href="https://www.google.com/maps/dir//38.913894,-8.652688/@38.913894,-8.6533317,19z/data=!4m8!1m5!3m4!2zMzjCsDU0JzUwLjAiTiA4wrAzOScwOS43Ilc!8m2!3d38.913894!4d-8.652688!4m1!3e0?entry=ttu&g_ep=EgoyMDI1MTIwNy4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-emerald-600 to-green-600 text-white font-semibold rounded-xl hover:from-emerald-700 hover:to-green-700 transition-all duration-300 hover:scale-105"
                    >
                      <MapPin size={20} />
                      {t.map?.openMap || 'Abrir no Google Maps'}
                      <ChevronRight size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}