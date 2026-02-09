import { useEffect, useState } from 'react'; 
import { ShoppingCart, Wrench, GraduationCap, Settings, Headphones, BarChart, Shield, Truck, Clock, Award, CheckCircle, Target, Zap, Users, ArrowRight, ShieldCheck } from 'lucide-react';
import { translations } from '../i18n/translations';

export default function Services() {
  // Usar localStorage para persistir o idioma
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('language') || 'pt';
    }
    return 'pt';
  });

  // Atualizar localStorage quando o idioma mudar
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', currentLanguage);
    }
  }, [currentLanguage]);

  // Função para obter traduções
  const t = (key: string): any => {
    try {
      const keys = key.split('.');
      let value = translations[currentLanguage as 'pt' | 'en'];
      
      for (const k of keys) {
        if (value && typeof value === 'object' && k in value) {
          value = value[k];
        } else {
          console.warn(`Chave não encontrada: ${key} em ${currentLanguage}`);
          return `[${key}]`;
        }
      }
      
      return value;
    } catch (error) {
      console.error('Erro na tradução:', error);
      return `[${key}]`;
    }
  };
  
  // Helper functions
  const tArray = (key: string): any[] => {
    const result = t(key);
    return Array.isArray(result) ? result : [];
  };
  
  const tObject = (key: string): Record<string, any> => {
    const result = t(key);
    return typeof result === 'object' && !Array.isArray(result) ? result : {};
  };
  
  // Atualizar título da página
  useEffect(() => {
    document.title = `${t('services.title')} | FieldAirTech`;
  }, [currentLanguage]);

  // Função para alternar idioma
  const toggleLanguage = () => {
    const newLang = currentLanguage === 'pt' ? 'en' : 'pt';
    setCurrentLanguage(newLang);
  };

  // Obter dados dos serviços
  const servicesData = tObject('services.servicesList');
  
  const services = [
    {
      icon: <ShoppingCart className="text-white" size={36} />,
      title: servicesData.vendas?.title || "Vendas",
      color: "from-green-600 to-green-700",
      description: servicesData.vendas?.description || "",
      features: servicesData.vendas?.features || [],
      highlight: servicesData.vendas?.highlight || ""
    },
    {
      icon: <Wrench className="text-white" size={36} />,
      title: servicesData.manutencao?.title || "Manutenção e Reparação",
      color: "from-blue-600 to-blue-700",
      description: servicesData.manutencao?.description || "",
      features: servicesData.manutencao?.features || [],
      highlight: servicesData.manutencao?.highlight || ""
    },
    {
      icon: <GraduationCap className="text-white" size={36} />,
      title: servicesData.formacao?.title || "Formação e Certificação",
      color: "from-purple-600 to-purple-700",
      description: servicesData.formacao?.description || "",
      features: servicesData.formacao?.features || [],
      highlight: servicesData.formacao?.highlight || ""
    },
    {
      icon: <Settings className="text-white" size={36} />,
      title: servicesData.configuracao?.title || "Configuração e Instalação",
      color: "from-amber-600 to-amber-700",
      description: servicesData.configuracao?.description || "",
      features: servicesData.configuracao?.features || [],
      highlight: servicesData.configuracao?.highlight || ""
    },
    {
      icon: <Headphones className="text-white" size={36} />,
      title: servicesData.suporte?.title || "Suporte Técnico",
      color: "from-indigo-600 to-indigo-700",
      description: servicesData.suporte?.description || "",
      features: servicesData.suporte?.features || [],
      highlight: servicesData.suporte?.highlight || ""
    },
    {
      icon: <BarChart className="text-white" size={36} />,
      title: servicesData.consultoria?.title || "Consultoria Agrícola",
      color: "from-teal-600 to-teal-700",
      description: servicesData.consultoria?.description || "",
      features: servicesData.consultoria?.features || [],
      highlight: servicesData.consultoria?.highlight || ""
    }
  ];

  // Obter dados dinâmicos
  const processSteps = tArray('services.processSteps');
  const advantagesList = tArray('services.advantagesList');

  return (
    <div className="pt-60 md:pt-50 min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Botão de alternar idioma */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={toggleLanguage}
          className="bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition-colors shadow-lg flex items-center gap-2"
        >
          {currentLanguage === 'pt' ? '🇵🇹 PT' : '🇬🇧 EN'}
        </button>
        <div className="mt-2 text-center text-xs text-gray-600">
          {currentLanguage === 'pt' ? 'Português' : 'English'}
        </div>
      </div>

    {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-green-600">{t('services.title')}</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Serviços em Destaque */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('services.ourServices')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('services.ourServicesDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className={`bg-gradient-to-br ${service.color} p-8 flex justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-colors"></div>
                  <div className="relative z-10 w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    {service.icon}
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                    {service.highlight && (
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-green-100 text-green-800">
                        {service.highlight}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pacotes de Serviços */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('services.packages')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('services.packagesDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-2xl shadow-lg border-2 ${pkg.color} ${pkg.recommended ? 'relative transform scale-105 shadow-2xl' : ''}`}
              >
                {pkg.recommended && pkg.badge && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                      {pkg.badge}
                    </span>
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">{pkg.name}</h3>
                  <div className="text-center mb-8">
                    <div className="text-3xl font-bold text-gray-900">{pkg.price}</div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/contactos"
                    className={`block w-full text-center py-3 rounded-xl font-semibold transition ${
                      pkg.recommended 
                        ? 'bg-green-600 text-white hover:bg-green-700' 
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                  >
                    {t('services.proposal')}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ===================== PROCESSO DE TRABALHO ===================== */}
        <div className="py-24">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-2.5 bg-emerald-50 rounded-full mb-12 border border-emerald-100">
              <Target className="text-emerald-600" size={20} />
              <span className="text-sm font-semibold uppercase text-emerald-700">
                {t('services.process')}
              </span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {t('services.process')} <span className="text-emerald-600">Transparente</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
              {t('services.processDesc')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
              {processSteps.map(
                (
                  item: { step: string; title: string; desc: string },
                  index: number
                ) => {
                  const icons = [
                    Users,
                    BarChart,
                    ShoppingCart,
                    GraduationCap,
                    ShieldCheck
                  ];
                  const Icon = icons[index] ?? ShieldCheck;

                  return (
                    <div key={index} className="text-center">
                      <div className="relative mx-auto mb-6">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center mx-auto shadow-lg">
                          <Icon className="text-white" size={28} />
                        </div>
                        <div className="absolute -top-2 -right-2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md border border-emerald-100">
                          <span className="text-emerald-600 font-bold">{item.step}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>

{/* ===================== VANTAGENS ===================== */}
<div className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-4 text-center">
    <div className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-full mb-6 border border-blue-100">
      <Zap className="text-blue-600" size={20} />
      <span className="text-sm font-semibold uppercase text-blue-700">
        {t('services.advantages')}
      </span>
    </div>
    
    <h2 className="text-4xl font-bold text-gray-900 mb-6">
      {t('services.advantages')}
    </h2>
    
    <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
      {t('services.advantagesDesc')}
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {advantagesList.map(
        (
          adv: { title: string; desc: string },
          index: number
        ) => {
          const icons = [Award, Truck, Shield, Clock];
          const colors = [
            "from-blue-500 to-cyan-500",
            "from-emerald-500 to-green-500",
            "from-amber-500 to-orange-500",
            "from-purple-500 to-pink-500"
          ];
          const Icon = icons[index] ?? Award;

          return (
            <div
              key={index}
              className="p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg transition-shadow bg-white group hover:border-transparent hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`relative w-16 h-16 ${colors[index]} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent"></div>
                <Icon className="text-white relative z-10" size={28} />
              </div>
              <h3 className="font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{adv.title}</h3>
              <p className="text-gray-600 text-sm">{adv.desc}</p>
              
              {/* Badge decorativo */}
              <div className={`mt-6 inline-flex items-center gap-1 px-3 py-1 ${colors[index].replace('from-', 'bg-').replace(' to-', '-').replace('500', '100')} rounded-full`}>
                <div className={`w-2 h-2 ${colors[index].replace('from-', 'bg-').replace(' to-', '-')} rounded-full`}></div>
                <span className={`text-xs font-semibold ${colors[index].replace('from-', 'text-').replace(' to-', '-')}`}>
                  ✓
                </span>
              </div>
            </div>
          );
        }
      )}
    </div>
  </div>
</div>

{/* CTA Final - Design Premium */}
<div className="py-24 bg-gradient-to-br from-gray-50 to-white">
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="relative overflow-hidden rounded-3xl shadow-2xl">
      {/* Background com gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500"></div>
      
      {/* Pattern sutil */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      <div className="relative z-10 p-12 md:p-16 text-center text-white">
        {/* Badge superior */}
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full mb-8 border border-white/20">
          <Target className="text-white" size={20} />
          <span className="text-sm font-semibold tracking-wide">
            {t('services.ready')}
          </span>
        </div>
        
        {/* Título principal - usando as traduções existentes */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
          {t('services.ready')}
        </h2>
        
        {/* Descrição */}
        <p className="text-xl text-emerald-100 mb-12 max-w-2xl mx-auto leading-relaxed">
          {t('services.readyDesc')}
        </p>
        
        {/* Botões principais */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <a
            href="/contact"
            className="group bg-white text-emerald-700 px-14 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 flex items-center gap-3 min-w-[220px] justify-center"
          >
            <span>{t('services.proposal')}</span>
            <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" size={20} />
          </a>
          
          <a
            href="tel:+351934449370"
            className="group bg-transparent border-2 border-white text-white px-14 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all duration-300 hover:scale-105 flex items-center gap-3 min-w-[220px] justify-center backdrop-blur-sm"
          >
            <span className="text-xl">📞</span>
            <span>{t('services.call')}</span>
          </a>
        </div>
        
        {/* Garantias - usando traduções do about */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 border-t border-white/20">
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
              <Clock className="text-emerald-200" size={20} />
            </div>
            <div className="text-center">
              <div className="text-sm font-semibold text-emerald-200 mb-1">
                {currentLanguage === 'pt' ? 'Resposta Rápida' : 'Quick Response'}
              </div>
              <div className="text-sm text-emerald-100">{t('services.response')}</div>
            </div>
          </div>
          
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
              <Users className="text-emerald-200" size={20} />
            </div>
            <div className="text-center">
              <div className="text-sm font-semibold text-emerald-200 mb-1">
                {currentLanguage === 'pt' ? 'Consultoria Gratuita' : 'Free Consulting'}
              </div>
              <div className="text-sm text-emerald-100">
                {currentLanguage === 'pt' ? 'Análise técnica sem compromisso' : 'Technical analysis without commitment'}
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
              <Shield className="text-emerald-200" size={20} />
            </div>
            <div className="text-center">
              <div className="text-sm font-semibold text-emerald-200 mb-1">
                {currentLanguage === 'pt' ? 'Garantia Total' : 'Full Warranty'}
              </div>
              <div className="text-sm text-emerald-100">
                {currentLanguage === 'pt' ? 'Suporte técnico garantido' : 'Guaranteed technical support'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
            </div>
          </div>
  );
}
