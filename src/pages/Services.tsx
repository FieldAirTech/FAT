import { useEffect, useState } from 'react';
import {
  ShoppingCart,
  Wrench,
  GraduationCap,
  Settings,
  Headphones,
  BarChart,
  Shield,
  Truck,
  Clock,
  Award,
  CheckCircle,
  Target,
  Zap,
  Users,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';

import { translations } from '../i18n/translations';

type Language = 'pt' | 'en';

interface ServiceData {
  title?: string;
  description?: string;
  features?: string[];
  highlight?: string;
}

interface ProcessStep {
  step: string;
  title: string;
  desc: string;
}

interface Advantage {
  title: string;
  desc: string;
}

export default function Services() {
  // =========================
  // IDIOMA
  // =========================
  const [currentLanguage, setCurrentLanguage] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('language');

      if (savedLanguage === 'pt' || savedLanguage === 'en') {
        return savedLanguage;
      }
    }

    return 'pt';
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', currentLanguage);
    }
  }, [currentLanguage]);

  // =========================
  // TRADUÇÕES
  // =========================
  const t = (key: string): any => {
    try {
      const keys = key.split('.');
      let value: any = translations[currentLanguage];

      for (const k of keys) {
        if (
          value &&
          typeof value === 'object' &&
          Object.prototype.hasOwnProperty.call(value, k)
        ) {
          value = value[k];
        } else {
          console.warn(
            `Chave não encontrada: ${key} em ${currentLanguage}`
          );

          return `[${key}]`;
        }
      }

      return value;
    } catch (error) {
      console.error('Erro na tradução:', error);
      return `[${key}]`;
    }
  };

  const tArray = (key: string): any[] => {
    const result = t(key);
    return Array.isArray(result) ? result : [];
  };

  const tObject = (key: string): Record<string, any> => {
    const result = t(key);

    return result &&
      typeof result === 'object' &&
      !Array.isArray(result)
      ? result
      : {};
  };

  // =========================
  // TÍTULO DA PÁGINA
  // =========================
  useEffect(() => {
    document.title = `${t('services.title')} | FieldAirTech`;
  }, [currentLanguage]);

  // =========================
  // ALTERAR IDIOMA
  // =========================
  const toggleLanguage = () => {
    setCurrentLanguage((prev) => (prev === 'pt' ? 'en' : 'pt'));
  };

  // =========================
  // DADOS DOS SERVIÇOS
  // =========================
  const servicesData = tObject('services.servicesList');

  const services = [
    {
      icon: <ShoppingCart className="text-white" size={36} />,
      title: servicesData.vendas?.title || 'Vendas',
      color: 'from-green-600 to-green-700',
      description: servicesData.vendas?.description || '',
      features: servicesData.vendas?.features || [],
      highlight: servicesData.vendas?.highlight || '',
    },
    {
      icon: <Wrench className="text-white" size={36} />,
      title:
        servicesData.manutencao?.title || 'Manutenção e Reparação',
      color: 'from-blue-600 to-blue-700',
      description: servicesData.manutencao?.description || '',
      features: servicesData.manutencao?.features || [],
      highlight: servicesData.manutencao?.highlight || '',
    },
    {
      icon: <GraduationCap className="text-white" size={36} />,
      title:
        servicesData.formacao?.title ||
        'Formação e Certificação',
      color: 'from-purple-600 to-purple-700',
      description: servicesData.formacao?.description || '',
      features: servicesData.formacao?.features || [],
      highlight: servicesData.formacao?.highlight || '',
    },
    {
      icon: <Settings className="text-white" size={36} />,
      title:
        servicesData.configuracao?.title ||
        'Configuração e Instalação',
      color: 'from-amber-600 to-amber-700',
      description: servicesData.configuracao?.description || '',
      features: servicesData.configuracao?.features || [],
      highlight: servicesData.configuracao?.highlight || '',
    },
    {
      icon: <Headphones className="text-white" size={36} />,
      title:
        servicesData.suporte?.title || 'Suporte Técnico',
      color: 'from-indigo-600 to-indigo-700',
      description: servicesData.suporte?.description || '',
      features: servicesData.suporte?.features || [],
      highlight: servicesData.suporte?.highlight || '',
    },
    {
      icon: <BarChart className="text-white" size={36} />,
      title:
        servicesData.consultoria?.title ||
        'Consultoria Agrícola',
      color: 'from-teal-600 to-teal-700',
      description: servicesData.consultoria?.description || '',
      features: servicesData.consultoria?.features || [],
      highlight: servicesData.consultoria?.highlight || '',
    },
  ];

  // =========================
  // PROCESSO E VANTAGENS
  // =========================
  const processSteps = tArray('services.processSteps') as ProcessStep[];
  const advantagesList = tArray(
    'services.advantagesList'
  ) as Advantage[];

  const processIcons = [
    Users,
    BarChart,
    ShoppingCart,
    GraduationCap,
    ShieldCheck,
  ];

  const advantageIcons = [
    Award,
    Truck,
    Shield,
    Clock,
  ];

  const advantageColors = [
    {
      box: 'from-blue-500 to-cyan-500',
      badge: 'bg-blue-100',
      dot: 'bg-blue-500',
      text: 'text-blue-600',
    },
    {
      box: 'from-emerald-500 to-green-500',
      badge: 'bg-emerald-100',
      dot: 'bg-emerald-500',
      text: 'text-emerald-600',
    },
    {
      box: 'from-amber-500 to-orange-500',
      badge: 'bg-amber-100',
      dot: 'bg-amber-500',
      text: 'text-amber-600',
    },
    {
      box: 'from-purple-500 to-pink-500',
      badge: 'bg-purple-100',
      dot: 'bg-purple-500',
      text: 'text-purple-600',
    },
  ];

  return (
    <div className="pt-20 md:pt-24 min-h-screen bg-gradient-to-b from-white to-gray-50">

      {/* =========================
          BOTÃO DE IDIOMA
      ========================= */}
      <div className="fixed top-4 right-4 z-50">
        <button
          type="button"
          onClick={toggleLanguage}
          className="bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition-colors shadow-lg flex items-center gap-2"
          aria-label={
            currentLanguage === 'pt'
              ? 'Mudar para inglês'
              : 'Mudar para português'
          }
        >
          {currentLanguage === 'pt' ? '🇵🇹 PT' : '🇬🇧 EN'}
        </button>

        <div className="mt-2 text-center text-xs text-gray-600">
          {currentLanguage === 'pt' ? 'Português' : 'English'}
        </div>
      </div>

      {/* =========================
          CONTEÚDO PRINCIPAL
      ========================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* =========================
            HERO
        ========================= */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-green-600">
              {t('services.title')}
            </span>
          </h1>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </section>

        {/* =========================
            SERVIÇOS
        ========================= */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('services.ourServices')}
            </h2>

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
                {/* Cabeçalho do serviço */}
                <div
                  className={`bg-gradient-to-br ${service.color} p-8 flex justify-center relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-colors" />

                  <div className="relative z-10 w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    {service.icon}
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="p-8">
                  <div className="flex justify-between items-start gap-3 mb-4">
                    <h3 className="text-xl font-bold text-gray-900">
                      {service.title}
                    </h3>

                    {service.highlight && (
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-green-100 text-green-800 whitespace-nowrap">
                        {service.highlight}
                      </span>
                    )}
                  </div>

                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-3">
                    {service.features.map(
                      (feature: string, idx: number) => (
                        <li
                          key={idx}
                          className="flex items-start"
                        >
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />

                          <span className="text-gray-700">
                            {feature}
                          </span>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================
            PROCESSO DE TRABALHO
        ========================= */}
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-4 text-center">

            <div className="inline-flex items-center gap-2 px-6 py-2.5 bg-emerald-50 rounded-full mb-12 border border-emerald-100">
              <Target
                className="text-emerald-600"
                size={20}
              />

              <span className="text-sm font-semibold uppercase text-emerald-700">
                {t('services.process')}
              </span>
            </div>

            <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
              {t('services.processDesc')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
              {processSteps.map(
                (item, index) => {
                  const Icon =
                    processIcons[index] ?? ShieldCheck;

                  return (
                    <div
                      key={index}
                      className="text-center"
                    >
                      <div className="relative mx-auto mb-6">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center mx-auto shadow-lg">
                          <Icon
                            className="text-white"
                            size={28}
                          />
                        </div>

                        <div className="absolute -top-2 -right-2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md border border-emerald-100">
                          <span className="text-emerald-600 font-bold">
                            {item.step}
                          </span>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {item.title}
                      </h3>

                      <p className="text-gray-600 text-sm">
                        {item.desc}
                      </p>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </section>

        {/* =========================
            VANTAGENS
        ========================= */}
        <section className="py-24 bg-white rounded-3xl">
          <div className="max-w-7xl mx-auto px-4 text-center">

            <div className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-full mb-6 border border-blue-100">
              <Zap
                className="text-blue-600"
                size={20}
              />

              <span className="text-sm font-semibold uppercase text-blue-700">
                {t('services.advantages')}
              </span>
            </div>

            <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
              {t('services.advantagesDesc')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {advantagesList.map(
                (adv, index) => {
                  const Icon =
                    advantageIcons[index] ?? Award;

                  const colors =
                    advantageColors[index] ??
                    advantageColors[0];

                  return (
                    <div
                      key={index}
                      className="p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 bg-white group hover:border-transparent hover:-translate-y-1"
                    >
                      <div
                        className={`relative w-16 h-16 bg-gradient-to-br ${colors.box} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}
                      >
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent" />

                        <Icon
                          className="text-white relative z-10"
                          size={28}
                        />
                      </div>

                      <h3 className="font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {adv.title}
                      </h3>

                      <p className="text-gray-600 text-sm">
                        {adv.desc}
                      </p>

                      {/* Badge decorativo */}
                      <div
                        className={`mt-6 inline-flex items-center gap-1 px-3 py-1 ${colors.badge} rounded-full`}
                      >
                        <div
                          className={`w-2 h-2 ${colors.dot} rounded-full`}
                        />

                        <span
                          className={`text-xs font-semibold ${colors.text}`}
                        >
                          ✓
                        </span>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </section>

        {/* =========================
            CTA FINAL
        ========================= */}
        <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="relative overflow-hidden rounded-3xl shadow-2xl">

              {/* Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500" />

              {/* Pattern */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
                    backgroundSize: '40px 40px',
                  }}
                />
              </div>

              {/* Conteúdo CTA */}
              <div className="relative z-10 px-6 py-14 md:px-12 md:py-16 text-center text-white">

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                  {t('services.ready')}
                </h2>

                {/* Botões */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">

                  <a
                    href="/contact"
                    className="group bg-white text-emerald-700 px-10 md:px-14 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 flex items-center gap-3 min-w-[220px] justify-center"
                  >
                    <span>
                      {t('services.proposal')}
                    </span>

                    <ArrowRight
                      className="group-hover:translate-x-2 transition-transform duration-300"
                      size={20}
                    />
                  </a>

                  <a
                    href="tel:+351934449370"
                    className="group bg-transparent border-2 border-white text-white px-10 md:px-14 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all duration-300 hover:scale-105 flex items-center gap-3 min-w-[220px] justify-center backdrop-blur-sm"
                  >
                    <span className="text-xl">
                      📞
                    </span>

                    <span>
                      {t('services.call')}
                    </span>
                  </a>

                </div>

                {/* Garantias */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 border-t border-white/20">

                  {/* Resposta rápida */}
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                      <Clock
                        className="text-emerald-200"
                        size={20}
                      />
                    </div>

                    <div className="text-center">
                      <div className="text-sm font-semibold text-emerald-200 mb-1">
                        {currentLanguage === 'pt'
                          ? 'Resposta Rápida'
                          : 'Quick Response'}
                      </div>

                      <div className="text-sm text-emerald-100">
                        {t('services.response')}
                      </div>
                    </div>
                  </div>

                  {/* Consultoria */}
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                      <Users
                        className="text-emerald-200"
                        size={20}
                      />
                    </div>

                    <div className="text-center">
                      <div className="text-sm font-semibold text-emerald-200 mb-1">
                        {currentLanguage === 'pt'
                          ? 'Consultoria Gratuita'
                          : 'Free Consulting'}
                      </div>

                      <div className="text-sm text-emerald-100">
                        {currentLanguage === 'pt'
                          ? 'Análise técnica sem compromisso'
                          : 'Technical analysis without commitment'}
                      </div>
                    </div>
                  </div>

                  {/* Garantia */}
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                      <Shield
                        className="text-emerald-200"
                        size={20}
                      />
                    </div>

                    <div className="text-center">
                      <div className="text-sm font-semibold text-emerald-200 mb-1">
                        {currentLanguage === 'pt'
                          ? 'Garantia Total'
                          : 'Full Warranty'}
                      </div>

                      <div className="text-sm text-emerald-100">
                        {currentLanguage === 'pt'
                          ? 'Suporte técnico garantido'
                          : 'Guaranteed technical support'}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
