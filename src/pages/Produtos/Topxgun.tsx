import { useEffect, useRef, useState, useMemo } from "react";
import { useNavigate, Link } from "react-router-dom";
import { 
  Play, ChevronRight, Check, FileText, X, ArrowRight, 
  Shield, Zap, Battery, Globe, Smartphone, Radar, 
  Droplets, Sprout, Map, Settings, Navigation, 
  Download, BookOpen, FileDown, Calendar, Headphones, Award,
  Video
} from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from '../../i18n/translations';

export default function TopXGun() {
  const navigate = useNavigate();
  const heroRef = useRef<HTMLDivElement>(null);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [activeSpecCategory, setActiveSpecCategory] = useState("Performance");
  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    document.title = language === 'pt' 
      ? "TopXGun FP700 | Drone Agrícola Profissional | Field Air Tech" 
      : "TopXGun FP700 | Professional Agricultural Drone | Field Air Tech";
    
    if (heroRef.current) {
      heroRef.current.style.animation = "floatUpDown 3s ease-in-out infinite";
    }
  }, [language]);

  const handleBack = () => navigate("/produtos");

  const pageTexts = useMemo(() => ({
    pt: {
      // Navbar
      backToProducts: "Voltar para Produtos",
      technicalSheet: "Ficha Técnica",
      watchVideo: "Ver Vídeo",

      // Hero Section
      proAgriDrone: "DRONE AGRÍCOLA PROFISSIONAL 2025",
      heroTitle: "TopXGun",
      model: "FP700",
      heroDescription: "O drone agrícola de última geração para 2025. Equipado com tanque de 60L para pulverização, 80L para distribuição, proteção IP67 e inteligência avançada para operações autónomas.",
      requestDemo: "Solicitar Demonstração",
      completeTechSheet: "Ficha Técnica Completa",
      maxLoad: "Carga Máxima",
      
      // Stats
      stats: [
        { value: "60L", label: "Tanque Líquidos", icon: Droplets, color: "text-blue-600" },
        { value: "80L", label: "Tanque Sólidos", icon: Sprout, color: "text-green-600" },
        { value: "IP67", label: "Proteção Total", icon: Shield, color: "text-purple-600" },
        { value: "40L/min", label: "Vazão Máxima", icon: Zap, color: "text-orange-600" },
      ],

      // Video Section
      demoInAction: "Demonstração em Ação",
      videoDescription: "Veja o TopXGun FP700 operando em condições reais",

      // Technology Sections
      advancedTechnology: "Tecnologia Avançada",
      techDescription: "Equipado com sistemas de última geração para operações agrícolas precisas, eficientes e totalmente automatizadas",
      
      technologySections: [
        {
          title: "Sistema de Evitação de Obstáculos",
          description: "Equipado com sensores avançados que permitem navegação segura mesmo em áreas complexas com árvores, cabos e estruturas.",
          image: "https://i.imgur.com/cP2a9WV.jpeg",
          details: [
            "Deteção em múltiplas direções",
            "Reação automática a obstáculos",
            "Operação em diversas condições climáticas",
            "Segurança reforçada para operações autónomas"
          ],
          features: ["Navegação segura", "Deteção de obstáculos", "Opera em diversas condições", "Funciona dia/noite"]
        },
        {
          title: "Sistema de Pulverização de Alto Desempenho",
          description: "Bomba dosadora de alto fluxo de duplo canal desenvolvida para máxima eficiência e cobertura uniforme.",
          image: "https://i.imgur.com/69GkWjg.png",
          details: [
            "Bomba de duplo canal de alto fluxo",
            "Vazão máxima: até 40 L/min",
            "Cobertura uniforme de gotas",
            "Penetração eficaz em copas densas"
          ],
          reverse: true
        },
        {
          title: "Distribuição de Grânulos",
          description: "Sistema especializado para distribuição precisa de sementes e fertilizantes granulares com controle de taxa variável.",
          image: "https://i.imgur.com/pOJCq5t.jpeg",
          details: [
            "Tanque de 80L para grânulos",
            "Largura de faixa: até 10 metros",
            "Distribuição uniforme e precisa",
            "Ideal para múltiplas aplicações"
          ]
        },
        {
          title: "Criação de Mapas HD",
          description: "Sistema de mapeamento de alta definição que permite planejamento preciso de operações e análise detalhada do terreno.",
          image: "https://i.imgur.com/yms7fQo.jpeg",
          details: [
            "Resolução de mapeamento avançada",
            "Análise de NDVI integrada",
            "Planejamento de rotas automático",
            "Exportação de dados para análise"
          ],
          reverse: true
        }
      ],

      // Components Section
      highPrecisionComponents: "Componentes de Alta Precisão",
      componentsDescription: "Sistema modular com componentes especializados para máxima eficiência operacional",

      componentsDetails: [
        {
          title: "Sistema de Bicos",
          description: "Bicos de pulverização de precisão com múltiplos padrões de aspersão para aplicação versátil",
          image: "https://i.imgur.com/UDlp6nt.jpeg",
          features: ["Múltiplos bicos", "Controle de fluxo preciso", "Padrões ajustáveis", "Anti-gotejamento"]
        },
        {
          title: "Bomba Dosadora de Alto Fluxo",
          description: "Sistema de bombeamento de duplo canal desenvolvido para alta vazão e durabilidade.",
          image: "https://i.imgur.com/jqoRHDT.jpeg",
          features: ["Duplo canal", "Vazão até 40 L/min", "Alta durabilidade", "Manutenção simplificada"]
        }
      ],

      // Specifications Section
      technicalSpecs: "ESPECIFICAÇÕES TÉCNICAS",
      technicalDetails: "Detalhes Técnicos",
      specsDescription: "Conheça todas as capacidades do TopXGun FP700",

      specifications: [
        { 
          category: "Performance", 
          items: [
            { label: "Velocidade Máxima", value: "20 m/s" },
            { label: "Velocidade de Trabalho", value: "8-10 m/s" },
            { label: "Tempo de Voo (com carga)", value: "10-12 minutos" },
            { label: "Tempo de Voo (sem carga)", value: "20-22 minutos" }
          ]
        },
        { 
          category: "Capacidade", 
          items: [
            { label: "Tanque de Pulverização", value: "60 L" },
            { label: "Tanque de Distribuição", value: "80 L" },
            { label: "Carga Máxima de Decolagem", value: "Até 70 kg" },
            { label: "Vazão Máxima", value: "Até 40 L/min" }
          ]
        },
        { 
          category: "Tecnologia", 
          items: [
            { label: "Sistema de Evitação", value: "Sensores Omnidirecionais" },
            { label: "Proteção", value: "IP67 Waterproof" },
            { label: "Posicionamento", value: "RTK + GNSS ±5cm" },
            { label: "Comunicação", value: "4G + Radio Link" }
          ]
        },
        { 
          category: "Dimensões", 
          items: [
            { label: "Envergadura", value: "2800 mm" },
            { label: "Peso (vazio)", value: "42 kg" },
            { label: "Peso (máximo)", value: "112 kg" },
            { label: "Material", value: "Carbon Fiber + Liga Aeronáutica" }
          ]
        }
      ],

      // CTA Section
      scheduleDemo: "AGENDE SUA DEMONSTRAÇÃO",
      transformAgriOp: "Transforme sua Operação Agrícola",
      ctaDescription: "O TopXGun FP700 está pronto para elevar a produtividade da sua fazenda a um novo nível. Entre em contacto para uma demonstração personalizada.",
      
      // Stats in CTA
      support247: "Suporte Técnico",
      warranty: "Garantia",
      operationalUnits: "Unidades Operacionais",

      // Modal
      close: "Fechar",

      // Alt texts
      altHero: "TopXGun FP700",
      altSystemView: "Sistema de Pulverização TopXGun FP700 - Vista Detalhada"
    },

    en: {
      // Navbar
      backToProducts: "Back to Products",
      technicalSheet: "Technical Sheet",
      watchVideo: "Watch Video",

      // Hero Section
      proAgriDrone: "PROFESSIONAL AGRICULTURAL DRONE 2025",
      heroTitle: "TopXGun",
      model: "FP700",
      heroDescription: "The next-generation agricultural drone for 2025. Equipped with a 60L spray tank, 80L distribution tank, IP67 protection, and advanced intelligence for autonomous operations.",
      requestDemo: "Request Demo",
      completeTechSheet: "Complete Technical Sheet",
      maxLoad: "Max Load",
      
      // Stats
      stats: [
        { value: "60L", label: "Liquid Tank", icon: Droplets, color: "text-blue-600" },
        { value: "80L", label: "Solid Tank", icon: Sprout, color: "text-green-600" },
        { value: "IP67", label: "Full Protection", icon: Shield, color: "text-purple-600" },
        { value: "40L/min", label: "Max Flow Rate", icon: Zap, color: "text-orange-600" },
      ],

      // Video Section
      demoInAction: "Demo in Action",
      videoDescription: "See the TopXGun FP700 operating in real conditions",

      // Technology Sections
      advancedTechnology: "Advanced Technology",
      techDescription: "Equipped with state-of-the-art systems for precise, efficient, and fully automated agricultural operations",
      
      technologySections: [
        {
          title: "Obstacle Avoidance System",
          description: "Equipped with advanced sensors that allow safe navigation even in complex areas with trees, cables, and structures.",
          image: "https://i.imgur.com/cP2a9WV.jpeg",
          details: [
            "Multi-directional detection",
            "Automatic obstacle reaction",
            "Operation in various weather conditions",
            "Enhanced safety for autonomous operations"
          ],
          features: ["Safe navigation", "Obstacle detection", "Operates in various conditions", "Works day/night"]
        },
        {
          title: "High-Performance Spraying System",
          description: "High-flow dual-channel dosing pump designed for maximum efficiency and uniform coverage.",
          image: "https://i.imgur.com/69GkWjg.png",
          details: [
            "Dual-channel high-flow pump",
            "Maximum flow: up to 40 L/min",
            "Uniform droplet coverage",
            "Effective penetration in dense canopies"
          ],
          reverse: true
        },
        {
          title: "Granule Distribution",
          description: "Specialized system for precise distribution of seeds and granular fertilizers with variable rate control.",
          image: "https://i.imgur.com/pOJCq5t.jpeg",
          details: [
            "80L tank for granules",
            "Swath width: up to 10 meters",
            "Uniform and precise distribution",
            "Ideal for multiple applications"
          ]
        },
        {
          title: "HD Mapping Creation",
          description: "High-definition mapping system that allows precise operation planning and detailed terrain analysis.",
          image: "https://i.imgur.com/yms7fQo.jpeg",
          details: [
            "Advanced mapping resolution",
            "Integrated NDVI analysis",
            "Automatic route planning",
            "Data export for analysis"
          ],
          reverse: true
        }
      ],

      // Components Section
      highPrecisionComponents: "High Precision Components",
      componentsDescription: "Modular system with specialized components for maximum operational efficiency",

      componentsDetails: [
        {
          title: "Nozzle System",
          description: "Precision spray nozzles with multiple spray patterns for versatile application",
          image: "https://i.imgur.com/UDlp6nt.jpeg",
          features: ["Multiple nozzles", "Precise flow control", "Adjustable patterns", "Anti-drip"]
        },
        {
          title: "High-Flow Dosing Pump",
          description: "Dual-channel pumping system designed for high flow rate and durability.",
          image: "https://i.imgur.com/jqoRHDT.jpeg",
          features: ["Dual channel", "Flow up to 40 L/min", "High durability", "Simplified maintenance"]
        }
      ],

      // Specifications Section
      technicalSpecs: "TECHNICAL SPECIFICATIONS",
      technicalDetails: "Technical Details",
      specsDescription: "Discover all the capabilities of the TopXGun FP700",

      specifications: [
        { 
          category: "Performance", 
          items: [
            { label: "Maximum Speed", value: "20 m/s" },
            { label: "Working Speed", value: "8-10 m/s" },
            { label: "Flight Time (with load)", value: "10-12 minutes" },
            { label: "Flight Time (no load)", value: "20-22 minutes" }
          ]
        },
        { 
          category: "Capacity", 
          items: [
            { label: "Spraying Tank", value: "60 L" },
            { label: "Distribution Tank", value: "80 L" },
            { label: "Maximum Takeoff Load", value: "Up to 70 kg" },
            { label: "Maximum Flow Rate", value: "Up to 40 L/min" }
          ]
        },
        { 
          category: "Technology", 
          items: [
            { label: "Avoidance System", value: "Omnidirectional Sensors" },
            { label: "Protection", value: "IP67 Waterproof" },
            { label: "Positioning", value: "RTK + GNSS ±5cm" },
            { label: "Communication", value: "4G + Radio Link" }
          ]
        },
        { 
          category: "Dimensions", 
          items: [
            { label: "Wingspan", value: "2800 mm" },
            { label: "Weight (empty)", value: "42 kg" },
            { label: "Weight (maximum)", value: "112 kg" },
            { label: "Material", value: "Carbon Fiber + Aeronautical Alloy" }
          ]
        }
      ],

      // CTA Section
      scheduleDemo: "SCHEDULE YOUR DEMO",
      transformAgriOp: "Transform Your Agricultural Operation",
      ctaDescription: "The TopXGun FP700 is ready to take your farm's productivity to a new level. Contact us for a personalized demonstration.",
      
      // Stats in CTA
      support247: "Technical Support",
      warranty: "Warranty",
      operationalUnits: "Operational Units",

      // Modal
      close: "Close",

      // Alt texts
      altHero: "TopXGun FP700",
      altSystemView: "TopXGun FP700 Spraying System - Detailed View"
    }
  }), [language]);

  const p = pageTexts[language];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <style>{`
        @keyframes floatUpDown {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }
        
        .gradient-bg {
          background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
        }
        
        .shadow-soft {
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
        }
        
        .shadow-medium {
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);
        }
      `}</style>

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-gray-700 hover:text-blue-700 transition-colors group"
          >
            <ChevronRight className="rotate-180 group-hover:-translate-x-1 transition-transform" size={20} />
            <span className="text-sm font-medium">{p.backToProducts}</span>
          </button>

          <div className="flex items-center gap-3">
            <Link 
              to="/ficha-tecnica/FP700"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors bg-blue-50 hover:bg-blue-100 rounded-lg"
            >
              <FileDown size={16} />
              {p.technicalSheet}
            </Link>
            
            <button 
              onClick={() => setIsVideoOpen(true)}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              <Play size={18} className="group-hover:scale-110 transition-transform" />
              <span className="font-medium">{p.watchVideo}</span>
            </button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  {p.proAgriDrone}
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  {p.heroTitle} <span className="text-blue-600">{p.model}</span>
                </h1>
                <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
                  {p.heroDescription}
                </p>
              </div>
              
<div className="flex flex-wrap gap-4">
  {/* Botão Request Demo removido */}

  <Link 
    to="/ficha-tecnica/FP700"
    className="flex items-center gap-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3.5 rounded-xl font-medium transition-all duration-300"
  >
    <BookOpen size={18} />
    {p.completeTechSheet}
    <Download size={18} />
  </Link>
</div>

            </div>

            <div ref={heroRef} className="flex justify-center">
              <div className="relative w-full max-w-2xl">
                <img
                  src="https://i.imgur.com/goqMAuX.png"
                  alt={p.altHero}
                  className="w-full rounded-3xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-2xl shadow-xl">
                  <div className="text-2xl font-bold">70kg</div>
                  <div className="text-sm">{p.maxLoad}</div>
                </div>
              </div>
            </div>
          </div>


          {/* STATS */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
            {p.stats.map((item, i) => (
              <div 
                key={i} 
                className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg bg-gray-50 group-hover:scale-110 transition-transform ${item.color}`}>
                    <item.icon size={24} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{item.value}</div>
                    <div className="text-sm text-gray-600">{item.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 1.5. Video Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
          </div>
          
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl bg-black">
            <div className="absolute inset-0 overflow-hidden rounded-xl">
              <iframe 
                src="https://www.youtube-nocookie.com/embed/uewIvL5rFK0?autoplay=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=uewIvL5rFK0&mute=1&showinfo=0&iv_load_policy=3&disablekb=1&fs=0&start=3&playsinline=1"
                className="w-full h-full"
                title="S500 PRO Autonomous Sprayer"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen={false}
                loading="lazy"
                frameBorder="0"
              />
            </div>
            
            {/* Overlay suave para esconder elementos */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-black/70 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY SECTIONS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{p.advancedTechnology}</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {p.techDescription}
            </p>
          </div>
          
          {p.technologySections.map((section, index) => (
            <div 
              key={index} 
              className={`mb-20 ${section.reverse ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className={`${section.reverse ? 'lg:order-2' : ''}`}>
                  <div className="space-y-6">
                    <div>
                      <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
                        {language === 'pt' ? 'TECNOLOGIA' : 'TECHNOLOGY'} {index + 1}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{section.description}</p>
                    </div>
                    
                    {section.details && (
                      <div className="space-y-3">
                        {section.details.map((detail, dIdx) => (
                          <div key={dIdx} className="flex items-start gap-3">
                            <Check className="text-blue-500 mt-1 flex-shrink-0" size={18} />
                            <span className="text-gray-700">{detail}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {section.features && (
                      <div className="pt-6">
                        <div className="font-medium text-gray-900 mb-3">
                          {language === 'pt' ? 'Funcionalidades do Sistema:' : 'System Features:'}
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {section.features.map((feature, fIdx) => (
                            <span 
                              key={fIdx} 
                              className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className={`${section.reverse ? 'lg:order-1' : ''}`}>
                  <img 
                    src={section.image} 
                    alt={section.title}
                    className="w-full h-auto rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* COMPONENT DETAILS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{p.highPrecisionComponents}</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {p.componentsDescription}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {p.componentsDetails.map((component, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{component.title}</h3>
                  <p className="text-gray-600 mb-6">{component.description}</p>
                  
                  <img 
                    src={component.image} 
                    alt={component.title}
                    className="w-full h-48 object-cover rounded-xl mb-6 group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  <div className="grid grid-cols-2 gap-3">
                    {component.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 p-3 bg-blue-50 rounded-lg">
                        <Check size={16} className="text-blue-600" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIFICATIONS SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-4">
              <Settings size={16} />
              {p.technicalSpecs}
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{p.technicalDetails}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {p.specsDescription}
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-soft overflow-hidden border border-gray-100">
            <div className="grid grid-cols-2 md:grid-cols-4 border-b border-gray-200">
              {p.specifications.map((spec, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSpecCategory(spec.category)}
                  className={`py-5 font-medium transition-colors relative ${
                    activeSpecCategory === spec.category
                      ? 'text-blue-600'
                      : 'text-gray-600 hover:text-blue-700'
                  }`}
                >
                  {spec.category}
                  {activeSpecCategory === spec.category && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500"></div>
                  )}
                </button>
              ))}
            </div>
            
            <div className="p-8">
              {p.specifications
                .find((cat) => cat.category === activeSpecCategory)
                ?.items?.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="flex justify-between items-center py-5 border-b border-gray-100 last:border-0 hover:bg-gray-50 px-4 rounded-lg transition-colors"
                  >
                    <div className="text-gray-700">{item.label}</div>
                    <div className="font-bold text-gray-900 text-lg">{item.value}</div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* IMAGE SECTION */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="https://i.imgur.com/8bVriaY.png" 
              alt={p.altSystemView}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-6">
            <Calendar size={16} />
            {p.scheduleDemo}
          </div>
          
          <h2 className="text-4xl text-white font-bold mb-6">{p.transformAgriOp}</h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
            {p.ctaDescription}
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <button 
              onClick={() => setIsVideoOpen(true)}
              className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl flex items-center gap-3"
            >
              <Headphones size={20} />
              {p.requestDemo}
            </button>
            <Link 
              to="/ficha-tecnica/FP700"
              className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center gap-3"
            >
              <FileDown size={20} />
              {p.completeTechSheet}
            </Link>
          </div>
          
          <div className="grid grid-cols-3 gap-8 border-t border-blue-400/30 pt-8">
            <div>
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-blue-200 text-sm">{p.support247}</div>
            </div>
            <div>
              <div className="text-2xl font-bold">2 {language === 'pt' ? 'anos' : 'years'}</div>
              <div className="text-blue-200 text-sm">{p.warranty}</div>
            </div>
            <div>
              <div className="text-2xl font-bold">+500</div>
              <div className="text-blue-200 text-sm">{p.operationalUnits}</div>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO MODAL */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 animate-fade-in">
          <div className="relative w-full max-w-6xl">
            <div className="aspect-video rounded-2xl overflow-hidden">
              <iframe 
                src="https://www.youtube-nocookie.com/embed/uewIvL5rFK0?autoplay=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=uewIvL5rFK0&volume=35&showinfo=0&iv_load_policy=3&disablekb=1&fs=0&start=3&playsinline=1"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={`${p.heroTitle} ${p.model} - Demonstration`}
              />
            </div>
            <button 
              onClick={() => setIsVideoOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors p-2 bg-black/50 rounded-full"
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
