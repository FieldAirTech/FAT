import { useParams, Link, Navigate } from "react-router-dom";
import { Play, Check, FileText, ChevronRight, X } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { useLanguage } from "../../contexts/LanguageContext";

// Import your translations directly
import { translations } from '../../i18n/translations';
// Shared images (same for both language)
const sharedAssets = {
  heroImage: "https://i.imgur.com/cUEG2EQ.png",
  modules: [
    "https://i.imgur.com/Rr2EcdL.jpeg",
    "https://i.imgur.com/OG3BUgA.jpeg",
    "https://i.imgur.com/czWigbd.png"
  ],
  controlImage: "https://i.imgur.com/n7aSqF6.png",
  gallery: [
    { url: "https://i.imgur.com/y8GoRET.png" },
    { url: "https://i.imgur.com/Rr2EcdL.jpeg" },
    { url: "https://i.imgur.com/OG3BUgA.jpeg" },
    { url: "https://i.imgur.com/czWigbd.png" },
    { url: "https://i.imgur.com/n7aSqF6.png" },
    { url: "https://i.imgur.com/pDqQZOl.png" }
  ]
};

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const { language, setLanguage } = useLanguage();
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [activeSpecCategory, setActiveSpecCategory] = useState(
    language === 'pt' ? 'Performance' : 'Performance'
  );
  const droneRef = useRef<HTMLDivElement>(null);

  // Create a translation function that uses the imported translations
  const t = (key: string, options?: { returnObjects?: boolean }) => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        value = undefined;
        break;
      }
    }
    
    if (options?.returnObjects) {
      return value || {};
    }
    
    return value || key;
  };

  // Helper function to safely get array data from translations
  const getArrayData = (key: string) => {
    const data = t(key, { returnObjects: true });
    return Array.isArray(data) ? data : [];
  };

  // Helper function to safely get object data from translations
  const getObjectData = (key: string) => {
    const data = t(key, { returnObjects: true });
    return data && typeof data === 'object' ? data : {};
  };

  useEffect(() => {
    if (id === "p150-max") {
      document.title = language === 'pt' 
        ? "XAG P150 Max | Drone Agrícola Inteligente | Field Air Tech"
        : "XAG P150 Max | Smart Agricultural Drone | Field Air Tech";
    }
    
    const animateDrone = () => {
      if (droneRef.current) {
        droneRef.current.style.animation = 'droneFloat 3s ease-in-out infinite';
      }
    };
    animateDrone();
  }, [id, language]);

  // Update active category when language changes
  useEffect(() => {
    if (language === 'en') {
      if (activeSpecCategory === 'Pulverização') setActiveSpecCategory('Spraying');
      else if (activeSpecCategory === 'Distribuição') setActiveSpecCategory('Spreading');
      else if (activeSpecCategory === 'Sistema') setActiveSpecCategory('System');
      else if (activeSpecCategory === 'Performance') setActiveSpecCategory('Performance');
    } else {
      if (activeSpecCategory === 'Spraying') setActiveSpecCategory('Pulverização');
      else if (activeSpecCategory === 'Spreading') setActiveSpecCategory('Distribuição');
      else if (activeSpecCategory === 'System') setActiveSpecCategory('Sistema');
      else if (activeSpecCategory === 'Performance') setActiveSpecCategory('Performance');
    }
  }, [language, activeSpecCategory]);

  if (!id || id !== "p150-max") return <Navigate to="/produtos" replace />;

  const galleryTitles = {
    0: language === 'pt' ? "P150 Max" : "P150 Max",
    1: language === 'pt' ? "Sistema RevoSpray" : "RevoSpray System",
    2: language === 'pt' ? "Sistema RevoCast" : "RevoCast System",
    3: language === 'pt' ? "Módulo RevoSling" : "RevoSling Module",
    4: language === 'pt' ? "Controlador SuperX" : "SuperX Controller",
    5: language === 'pt' ? "Controle Remoto SRC4" : "SRC4 Remote Control"
  };

  const statsData = getArrayData('product.stats');
  const modulesData = getArrayData('product.modules');
  const designFeaturesData = getArrayData('product.designFeatures');
  const specificationsData = getArrayData('product.specifications');
  const technologyFeaturesData = getArrayData('product.technology.features');
  const technologyData = getObjectData('product.technology');

  return (
    <div className="pt-16 bg-white text-gray-900">
      <style>{`
        @keyframes droneFloat {
          0%, 100% { transform: translateY(0px) rotateX(0deg); }
          50% { transform: translateY(-20px) rotateX(5deg); }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }
      `}</style>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/produtos" className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors">
              <ChevronRight className="rotate-180" size={20} />
              <span className="text-sm font-medium">{t('product.back')}</span>
            </Link>
            
            <div className="flex items-center gap-4">
              {/* Language Toggle */}
              <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setLanguage('pt')}
                  className={`px-3 py-1 rounded text-sm font-medium transition-colors ${language === 'pt' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-900'}`}
                >
                  PT
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1 rounded text-sm font-medium transition-colors ${language === 'en' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-900'}`}
                >
                  EN
                </button>
              </div>

              <Link 
                to={`/ficha-tecnica/p150-max?lang=${language}`} 
                className="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                <FileText size={16} />
                {t('product.specSheet')}
              </Link>
              
              <button 
                onClick={() => setIsVideoOpen(true)}
                className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                <Play size={16} />
                <span className="text-sm font-medium">{t('product.watchVideo')}</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-60 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-medium mb-4">
                {t('product.droneCategory')}
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                <span className="text-emerald-600">XAG P150</span>
                <span className="text-emerald-600"> MAX</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t('product.description')}
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <Link 
                  to={`/ficha-tecnica/p150-max?lang=${language}`}
                  className="flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium"
                >
                  <FileText size={18} />
                  {t('product.fullSpecs')}
                </Link>
              </div>
            </div>
            
            <div className="relative" ref={droneRef}>
              <img 
                src={sharedAssets.heroImage} 
                alt="XAG P150 Max" 
                className="w-full h-auto rounded-xl shadow-xl"
              />
            </div>
          </div>
          
          {/* Stats Grid */}
          {statsData.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-8 border-t border-gray-100">
              {statsData.map((stat: any, idx: number) => (
                <div key={idx} className="text-center p-4">
                  <div className="text-3xl font-bold text-gray-900">
                    {stat.number}
                    <span className="text-emerald-600">{stat.unit}</span>
                  </div>
                  <div className="text-sm text-gray-500 mt-2">{stat.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">{t('product.sections.video.title')}</h2>
            <p className="text-gray-300">{t('product.sections.video.description')}</p>
          </div>
          
          <div className="relative aspect-video rounded-xl overflow-hidden">
            <iframe 
              src={`https://www.youtube-nocookie.com/embed/hUJC8pnoX2w?autoplay=1&mute=1&controls=1&modestbranding=1&rel=0&loop=1&playlist=hUJC8pnoX2w&start=52${language === 'en' ? '&cc_lang_pref=en&cc_load_policy=1' : '&cc_lang_pref=pt&cc_load_policy=1'}`}
              className="w-full h-full"
              title={`XAG P150 Max ${language === 'en' ? 'in Action' : 'em Ação'}`}
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Smart Agricultural Systems */}
      {modulesData.length > 0 && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('product.sections.systems.title')}</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">{t('product.sections.systems.description')}</p>
            </div>
            
            {modulesData.map((module: any, idx: number) => (
              <div key={module.id || idx} className={`mb-20 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className={`${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="space-y-6">
                      <div>
                        <div className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium mb-4">
                          {module.category || ''}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{module.name || ''}</h3>
                        <p className="text-gray-600">{module.description || ''}</p>
                      </div>
                      
                      {Array.isArray(module.features) && module.features.length > 0 && (
                        <div className="grid grid-cols-2 gap-4">
                          {module.features.map((feature: any, fIdx: number) => (
                            <div key={fIdx} className="p-4 bg-gray-50 rounded-lg">
                              <div className="text-xl font-bold text-gray-900">{feature.value || ''}</div>
                              <div className="text-sm text-gray-500 mt-1">{feature.label || ''}</div>
                            </div>
                          ))}
                        </div>
                      )}
                      
                      {Array.isArray(module.details) && module.details.length > 0 && (
                        <div className="space-y-3">
                          {module.details.map((detail: string, dIdx: number) => (
                            <div key={dIdx} className="flex items-start gap-3">
                              <Check className="text-emerald-500 mt-1 flex-shrink-0" size={18} />
                              <span className="text-gray-700">{detail}</span>
                            </div>
                          ))}
                        </div>
                      )}
                      
                      {Array.isArray(module.applications) && module.applications.length > 0 && (
                        <div className="pt-4">
                          <div className="font-medium text-gray-900 mb-3">
                            {language === 'pt' ? 'Aplicações Principais' : 'Main Applications'}
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {module.applications.map((app: string, aIdx: number) => (
                              <span 
                                key={aIdx} 
                                className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm"
                              >
                                {app}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className={`${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <img 
                      src={sharedAssets.modules[idx] || ''} 
                      alt={module.name || `Module ${idx + 1}`} 
                      className="w-full h-auto rounded-xl shadow-lg"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Smart Control System */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                <div>
                  <div className="text-sm text-emerald-600 font-medium mb-3">
                    {language === 'pt' ? 'CONTROLO INTELIGENTE' : 'SMART CONTROL'}
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{technologyData.name || t('product.technology.name')}</h2>
                  <p className="text-lg text-gray-700">{technologyData.title || t('product.technology.title')}</p>
                </div>
                
                {technologyFeaturesData.length > 0 && (
                  <div className="space-y-6">
                    {technologyFeaturesData.map((feature: any, idx: number) => (
                      <div key={idx} className="flex items-start gap-4">
                        <div className="p-3 bg-white rounded-lg shadow-sm">
                          <div className="text-emerald-500">✓</div>
                        </div>
                        <div>
                          <div className="font-bold text-gray-900 mb-1">{feature.name || ''}</div>
                          <p className="text-gray-600">{feature.description || ''}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                
                <div className="grid grid-cols-3 gap-4 pt-6">
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-xl font-bold text-emerald-600">
                      {t('product.technology.performance.computing')}
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      {language === 'pt' ? 'Computação' : 'Computing'}
                    </div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-xl font-bold text-emerald-600">
                      {t('product.technology.performance.coverage')}
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      {language === 'pt' ? 'Cobertura' : 'Coverage'}
                    </div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-xl font-bold text-emerald-600">
                      {t('product.technology.performance.autonomy')}
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      {language === 'pt' ? 'Autonomia' : 'Autonomy'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src={sharedAssets.controlImage} 
                alt={technologyData.name || t('product.technology.name')} 
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Built to Last */}
      {designFeaturesData.length > 0 && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('product.sections.design.title')}</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">{t('product.sections.design.description')}</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {designFeaturesData.map((feature: any, idx: number) => (
                <div key={idx} className="p-6 bg-white rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="p-3 bg-emerald-50 rounded-lg w-fit mb-4">
                    <div className="text-emerald-600">✓</div>
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{feature.name || ''}</h3>
                  <p className="text-gray-600 text-sm">{feature.description || ''}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Technical Specifications */}
      {specificationsData.length > 0 && (
        <section id="especificacoes" className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('product.sections.specs.title')}</h2>
              <p className="text-gray-600">{t('product.sections.specs.description')}</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="grid md:grid-cols-4 border-b border-gray-100">
                {specificationsData.map((category: any, idx: number) => (
                  <button
                    key={idx}
                    onClick={() => setActiveSpecCategory(category.category)}
                    className={`py-4 font-medium text-sm transition-colors ${
                      activeSpecCategory === category.category
                        ? 'text-emerald-600 border-b-2 border-emerald-500'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {category.category || ''}
                  </button>
                ))}
              </div>
              
              <div className="p-8">
                {specificationsData
                  .find((cat: any) => cat.category === activeSpecCategory)
                  ?.items?.map((item: any, idx: number) => (
                    <div key={idx} className="flex justify-between py-4 border-b border-gray-100 last:border-0">
                      <div className="text-gray-600">{item.label || ''}</div>
                      <div className="font-semibold text-gray-900">{item.value || ''}</div>
                    </div>
                  )) || (
                    <div className="text-center py-8 text-gray-500">
                      {language === 'pt' ? 'Nenhuma especificação encontrada' : 'No specifications found'}
                    </div>
                  )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Gallery */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('product.sections.gallery.title')}</h2>
            <p className="text-gray-600">{t('product.sections.gallery.description')}</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {sharedAssets.gallery.map((image, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-xl">
                <img 
                  src={image.url} 
                  alt={galleryTitles[idx as keyof typeof galleryTitles]} 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="font-medium">{galleryTitles[idx as keyof typeof galleryTitles]}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">{t('product.sections.cta.title')}</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            {t('product.sections.cta.description')}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              to={`/contactos?lang=${language}`}
              className="px-8 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium"
            >
              {t('product.sections.cta.buttons.contact')}
            </Link>
            <Link 
              to={`/ficha-tecnica/p150-max?lang=${language}`}
              className="px-8 py-3 border border-gray-600 text-white rounded-lg hover:border-gray-400 transition-colors font-medium"
            >
              {t('product.sections.cta.buttons.specs')}
            </Link>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 animate-fade-in">
          <div className="relative w-full max-w-6xl">
            <div className="aspect-video">
              <iframe 
                src={`https://www.youtube-nocookie.com/embed/hUJC8pnoX2w?autoplay=1&controls=1&modestbranding=1&rel=0${language === 'en' ? '&cc_lang_pref=en&cc_load_policy=1' : '&cc_lang_pref=pt&cc_load_policy=1'}`}
                className="w-full h-full rounded-lg"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title={`XAG P150 Max ${language === 'en' ? 'Video' : 'Vídeo'}`}
              />
            </div>
            <button 
              onClick={() => setIsVideoOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}