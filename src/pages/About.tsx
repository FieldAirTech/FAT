import { useEffect, useState } from 'react';
import { Target, History, TrendingUp, Users, Award, MapPin, Leaf, Shield, Globe, Rocket, Heart, CheckCircle, ChevronRight } from 'lucide-react';

// Importar as traduções diretamente
import { translations } from '../i18n/translations';

export default function Sobre() {
  // Pegar o idioma do localStorage ou usar 'pt' como padrão
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('language') || 'pt';
    }
    return 'pt';
  });
  
  const t = (key) => {
    const keys = key.split('.');
    let value = translations[currentLanguage];
    
    for (const k of keys) {
      if (value && value[k] !== undefined) {
        value = value[k];
      } else {
        console.warn(`Translation key not found: ${key}`);
        return key;
      }
    }
    
    return value;
  };
  
  useEffect(() => {
    document.title = currentLanguage === 'pt' 
      ? "Sobre Nós | FieldAirTech" 
      : "About Us | FieldAirTech";
    
    // Opcional: atualizar quando o idioma mudar
    const handleLanguageChange = () => {
      if (typeof window !== 'undefined') {
        const lang = localStorage.getItem('language') || 'pt';
        setCurrentLanguage(lang);
      }
    };
    
    window.addEventListener('storage', handleLanguageChange);
    return () => window.removeEventListener('storage', handleLanguageChange);
  }, [currentLanguage]);
  
  return (
    <div className="pt-60 md:pt-50 min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section - Design Premium */}
      <section className="relative py-20 bg-gradient-to-br from-emerald-600 via-green-600 to-teal-600 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full mb-8">
            <Target size={20} className="text-white" />
            <span className="text-sm font-semibold text-white">{t('about.historia')}</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-black text-white mb-8">
            <span className="block">{t('about.heroFirstPart')}</span>
            <span className="bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">
              {t('about.heroSecondPart')}
            </span>
          </h1>
          
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-12">
            {t('about.heroSubtitle')}
          </p>
          
          {/* Foto sugerida aqui: Equipe da FieldAirTech em ação no campo */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              { icon: <History className="text-white" size={24} />, label: t('about.stats.founded'), desc: t('about.stats.foundedDesc') },
              { icon: <MapPin className="text-white" size={24} />, label: t('about.stats.location'), desc: t('about.stats.locationDesc') },
              { icon: <Users className="text-white" size={24} />, label: t('about.stats.clients'), desc: t('about.stats.clientsDesc') }
            ].map((item, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center group hover:bg-white/15 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-4">
                  {item.icon}
                </div>
                <div className="text-white font-bold text-lg">{item.label}</div>
                <div className="text-white/70 text-sm">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Missão e Visão - Com foto à esquerda */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Foto sugerida aqui: Drone em ação sobre plantação portuguesa */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <div 
                  className="h-[400px] bg-gradient-to-br from-emerald-500/20 to-blue-500/20 flex items-center justify-center"
                  style={{
                    backgroundImage: `url('https://i.imgur.com/2k9JVRu.jpeg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
              </div>
            </div>
            
            <div className="space-y-12">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-gradient-to-br from-emerald-100 to-green-100 rounded-2xl">
                    <Target className="text-emerald-600" size={28} />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">{t('about.missaoTitle')}</h2>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {t('about.missaoText')}
                </p>
              </div>
              
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl">
                    <Globe className="text-blue-600" size={28} />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">{t('about.visaoTitle')}</h2>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {t('about.visaoText')}
                </p>
              </div>
            </div>
          </div>

          {/* Valores - Com ícones grandes */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-100 to-green-100 rounded-full mb-6">
                <Heart className="text-emerald-600" size={20} />
                <span className="text-sm font-semibold text-emerald-700">{t('about.valoresTitle')}</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                {t('about.valoresSubtitle')}
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <TrendingUp className="text-emerald-600" size={32} />,
                  title: t('about.valores.inovacao.title'),
                  description: t('about.valores.inovacao.text'),
                  colorClass: "from-emerald-50 to-emerald-100"
                },
                {
                  icon: <Shield className="text-blue-600" size={32} />,
                  title: t('about.valores.fiabilidade.title'),
                  description: t('about.valores.fiabilidade.text'),
                  colorClass: "from-blue-50 to-blue-100"
                },
                {
                  icon: <Leaf className="text-green-600" size={32} />,
                  title: t('about.valores.sustentabilidade.title'),
                  description: t('about.valores.sustentabilidade.text'),
                  colorClass: "from-green-50 to-green-100"
                },
                {
                  icon: <Users className="text-purple-600" size={32} />,
                  title: t('about.valores.parceria.title'),
                  description: t('about.valores.parceria.text'),
                  colorClass: "from-purple-50 to-purple-100"
                }
              ].map((value, index) => (
                <div 
                  key={index} 
                  className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-8 border border-gray-200 hover:border-emerald-500/30 transition-all duration-500 hover:scale-105"
                >
                  <div className={`mb-6 p-5 rounded-2xl bg-gradient-to-br ${value.colorClass} w-fit mx-auto`}>
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 text-center mb-4 group-hover:text-emerald-700 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Números que Contam - Design Premium */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 via-green-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
              <span className="block">{t('about.numerosTitle')}</span>
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              {t('about.numerosSubtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { 
                value: t('about.numeros.agricultores.value'), 
                label: t('about.numeros.agricultores.label'), 
                desc: t('about.numeros.agricultores.desc'),
                icon: "👨‍🌾"
              },
              { 
                value: t('about.numeros.hectares.value'), 
                label: t('about.numeros.hectares.label'), 
                desc: t('about.numeros.hectares.desc'),
                icon: "🌾"
              },
              { 
                value: t('about.numeros.satisfacao.value'), 
                label: t('about.numeros.satisfacao.label'), 
                desc: t('about.numeros.satisfacao.desc'),
                icon: "⭐"
              },
              { 
                value: t('about.numeros.suporte.value'), 
                label: t('about.numeros.suporte.label'), 
                desc: t('about.numeros.suporte.desc'),
                icon: "🔧"
              }
            ].map((stat, index) => (
              <div key={index} className="group text-center">
                <div className="relative mb-6">
                  <div className="text-5xl md:text-6xl font-black text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="text-3xl">{stat.icon}</div>
                </div>
                <div className="space-y-2">
                  <div className="text-white font-bold text-lg">{stat.label}</div>
                  <div className="text-emerald-200 text-sm">{stat.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipa e Localização - Com layout melhorado */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Foto sugerida aqui: Equipa técnica em formação ou em campo */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl p-10 border border-gray-200">
              <div className="flex items-center gap-4 mb-10">
                <div className="p-4 bg-gradient-to-br from-emerald-100 to-green-100 rounded-2xl">
                  <Users className="text-emerald-600" size={32} />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    {t('about.equipaTitle')}
                  </h2>
                  <p className="text-emerald-600 font-medium mt-2">
                    {t('about.equipaSubtitle')}
                  </p>
                </div>
              </div>
              
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                {t('about.equipaText')}
              </p>
              
              <div className="space-y-4">
                {Array.isArray(t('about.equipaItems', { returnObjects: true })) 
                  ? t('about.equipaItems', { returnObjects: true }).map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-4 p-4 bg-gray-50/50 rounded-xl hover:bg-gray-50 transition-colors"
                    >
                      <CheckCircle className="text-emerald-600" size={20} />
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))
                  : null}
              </div>
            </div>

            {/* Foto sugerida aqui: Mapa de Portugal com pontos de atuação */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl p-10 border border-gray-200">
              <div className="flex items-center gap-4 mb-10">
                <div className="p-4 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl">
                  <MapPin className="text-blue-600" size={32} />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    {t('about.localizacaoTitle')}
                  </h2>
                  <p className="text-blue-600 font-medium mt-2">
                    {t('about.localizacaoSubtitle')}
                  </p>
                </div>
              </div>
              
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                {t('about.localizacaoText')}
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {[t('about.localizacaoSede')].map((region, index) => (
                  <div key={index} className="group">
                    <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-5 text-center hover:from-emerald-100 hover:to-green-100 transition-all duration-300">
                      <div className="font-bold text-emerald-700 text-lg">
                        {region}
                      </div>
                      {index === 0 && (
                        <div className="text-emerald-600 text-sm mt-1">
                          {t('about.localizacaoSedeDesc')}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Final - Design Premium */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-emerald-600 via-green-600 to-teal-600 rounded-3xl shadow-2xl p-12 text-center text-white">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" />
            </div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full mb-8">
                <Rocket size={20} />
                <span className="text-sm font-semibold">{t('about.ctaSubtitle')}</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-black mb-10">
                <span className="block">{t('about.ctaFirstPart')}</span>
                <span className="bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">
                  {t('about.ctaSecondPart')}
                </span>
              </h2>
              
              <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
                {t('about.ctaText')}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="/contact"
                  className="group relative px-12 py-5 bg-white text-emerald-700 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <Target size={22} />
                    {t('about.ctaButtons.demo')}
                    <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform" />
                  </span>
                </a>
                
                <a
                  href="tel:+351934449370"
                  className="group px-12 py-5 bg-transparent border-2 border-white text-white rounded-2xl font-bold text-lg hover:bg-white/10 transition-all duration-300"
                >
                  <span className="flex items-center gap-3">
                    {t('about.ctaButtons.phone')}
                  </span>
                </a>
              </div>
              
              <div className="mt-16 pt-8 border-t border-white/20">
                <div className="flex justify-center">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-md">
                    {Array.isArray(t('about.ctaFeatures', { returnObjects: true })) 
                      ? t('about.ctaFeatures', { returnObjects: true }).map((feature, index) => (
                        <div key={index} className="text-center">
                          <div className="text-2xl font-bold text-white mb-2">✓</div>
                          <div className="text-white/80 text-sm">{feature}</div>
                        </div>
                      ))
                      : null}
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
