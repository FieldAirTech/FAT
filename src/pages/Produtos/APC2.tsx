// src/pages/Produtos/APC2.tsx
import React, { useState, useMemo, lazy, Suspense } from 'react';
import { Link } from "react-router-dom";
import { 
  Play, Check, ChevronRight, 
  Navigation, Target, Eye, Cpu, 
  ArrowRight, X, Maximize2, Download,
  Map, Crop, Zap, Globe, Video
} from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from '../../i18n/translations';


interface FeatureCard {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

export default function APC2Page() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const { language } = useLanguage();
  const t = translations[language];
  
  // Memoize page texts for performance
  const pageTexts = useMemo(() => ({
    pt: {
      gnssAutoSteering: "DIREÇÃO AUTOMÁTICA GNSS",
      autoPilot: "Auto-Pilot",
      description: "Sistema avançado de direção automática por GNSS para tratores e máquinas agrícolas. Maior precisão, menos sobreposições e máxima eficiência operacional em qualquer cultura.",
      
      // Features Grid with more relevant icons
      features: [
        { 
          icon: <Map size={28} />, 
          title: "Opção Multi-Linhas", 
          desc: "Permite trabalhar múltiplas linhas simultaneamente, aumentando eficiência e reduzindo passagens desnecessárias.",
          // Texto adicional em inglês por cima
          enTitle: "Multi-Line Operation",
          enDesc: "Allows working multiple lines simultaneously, increasing efficiency and reducing unnecessary passes."
        },
        { 
          icon: <Navigation size={28} />, 
          title: "RTK Alta Precisão", 
          desc: "Correção RTK para alinhamento exato e trabalho preciso em campo com precisão centimétrica.",
          enTitle: "High Precision RTK",
          enDesc: "RTK correction for exact alignment and precise field work with centimeter-level accuracy."
        },
        { 
          icon: <Target size={28} />, 
          title: "Posicionamento PPP", 
          desc: "Precisão absoluta com posicionamento global via PPP (Point Precise Positioning).",
          enTitle: "PPP Positioning",
          enDesc: "Absolute precision with global positioning via PPP (Point Precise Positioning)."
        },
        { 
          icon: <Eye size={28} />, 
          title: "U-Turn Automática", 
          desc: "Inversão automática no final da linha, reduzindo erros e aumentando produtividade em 30%.",
          enTitle: "Automatic U-Turn",
          enDesc: "Automatic reversal at the end of the line, reducing errors and increasing productivity by 30%."
        }
      ],
      
      // Line Planning Section
      smartLinePlanning: "Planeamento Inteligente de Linhas",
      linePlanningDesc: "O APC2 permite definir linhas de trabalho precisas, seja em linha reta, curva, fechada ou diagonal. Adapta-se a qualquer formato de terreno.",
      
      // Video Section
      watchDemo: "Ver Demonstração",
      videoTitle: "XAG APC2 em Ação",
      videoDescription: "Veja como o sistema de direção automática transforma a precisão agrícola. Menos sobreposição, mais eficiência.",
      
      // Advanced Features
      terrainCompensation: "Compensação de Terreno Inteligente",
      terrainCompensationDesc: "Correção automática da trajetória em terrenos inclinados, mantendo a precisão real do sistema mesmo nas condições mais desafiantes.",
      autoUTurn: "U-Turn Automática Inteligente",
      autoUTurnDesc: "Inversão automática no final da linha com ajuste de velocidade, reduzindo erros e aumentando a produtividade em operações de larga escala.",
      applicationsFunctions: "Aplicações e Funções Versáteis",
      applicationsFunctionsDesc: "O APC2 pode ser utilizado em diversas funções agrícolas, como sementeira de precisão, pulverização, preparação de solo, colheita e muito mais, garantindo precisão e eficiência em cada tarefa.",
      
      // CTA Section
      maxPrecision: "Leve a Precisão ao Máximo",
      ctaDescription: "O XAG APC2 é o primeiro passo para agricultura de precisão acessível. Reduza custos e aumente produtividade.",
      talkToExpert: "Falar com um Especialista",
      
      // Modal
      close: "Fechar",
      fullscreen: "Tela Cheia",
      
      // Alt texts para imagens
      altHero: "XAG APC2 Auto Steering System - Sistema de Direção Automática",
      altStraightLine: "Linha Reta - Modo de Trabalho XAG APC2",
      altCurveLine: "Linha Curva - Modo de Trabalho XAG APC2",
      altClosedLine: "Linha Fechada - Modo de Trabalho XAG APC2",
      altDiagonalLine: "Linha Diagonal - Modo de Trabalho XAG APC2",
      altTerrainComp: "Compensação de Terreno XAG APC2 em Ação",
      altUTurn: "U-Turn Automática XAG APC2 Demonstração",
      altApplications: "Aplicações Diversas do XAG APC2 na Agricultura"
    },
    
    en: {
      gnssAutoSteering: "GNSS AUTO STEERING",
      autoPilot: "Auto-Pilot",
      description: "Advanced GNSS auto-steering system for tractors and agricultural machinery. Higher accuracy, less overlap and maximum operational efficiency in any crop.",
      
      // Features Grid - Usando os textos fornecidos
      features: [
        { 
          icon: <Map size={28} />, 
          title: "Multi-Line Operation", 
          desc: "Allows working multiple lines simultaneously, increasing efficiency and reducing unnecessary passes.",
          ptTitle: "Opção Multi-Linhas",
          ptDesc: "Permite trabalhar múltiplas linhas simultaneamente, aumentando eficiência e reduzindo passagens desnecessárias."
        },
        { 
          icon: <Navigation size={28} />, 
          title: "High Precision RTK", 
          desc: "RTK correction for exact alignment and precise field work with centimeter-level accuracy.",
          ptTitle: "RTK Alta Precisão",
          ptDesc: "Correção RTK para alinhamento exato e trabalho preciso em campo com precisão centimétrica."
        },
        { 
          icon: <Target size={28} />, 
          title: "PPP Positioning", 
          desc: "Absolute precision with global positioning via PPP (Point Precise Positioning).",
          ptTitle: "Posicionamento PPP",
          ptDesc: "Precisão absoluta com posicionamento global via PPP (Point Precise Positioning)."
        },
        { 
          icon: <Eye size={28} />, 
          title: "Automatic U-Turn", 
          desc: "Automatic reversal at the end of the line, reducing errors and increasing productivity by 30%.",
          ptTitle: "U-Turn Automática",
          ptDesc: "Inversão automática no final da linha, reduzindo erros e aumentando produtividade em 30%."
        }
      ],
      
      // Line Planning Section
      smartLinePlanning: "Smart Line Planning",
      linePlanningDesc: "The APC2 allows you to define precise work lines, whether straight, curved, closed or diagonal. Adapts to any terrain format.",
      
      // Video Section
      watchDemo: "Watch Demo",
      videoTitle: "XAG APC2 in Action",
      videoDescription: "See how the auto-steering system transforms agricultural precision. Less overlap, more efficiency.",
      
      // Advanced Features
      terrainCompensation: "Intelligent Terrain Compensation",
      terrainCompensationDesc: "Automatic trajectory correction on sloping terrain, maintaining the system's real precision even in the most challenging conditions.",
      autoUTurn: "Smart Automatic U-Turn",
      autoUTurnDesc: "Automatic reversal at the end of the line with speed adjustment, reducing errors and increasing productivity in large-scale operations.",
      applicationsFunctions: "Versatile Applications and Functions",
      applicationsFunctionsDesc: "The APC2 can be used in various agricultural functions, such as precision seeding, spraying, soil preparation, harvesting and much more, ensuring precision and efficiency in each task.",
      
      // CTA Section
      maxPrecision: "Take Precision to the Maximum",
      ctaDescription: "The XAG APC2 is the first step towards affordable precision agriculture. Reduce costs and increase productivity.",
      talkToExpert: "Talk to an Expert",
      
      // Modal
      close: "Close",
      fullscreen: "Fullscreen",
      
      // Alt texts para imagens
      altHero: "XAG APC2 Auto Steering System - Automatic Direction System",
      altStraightLine: "Straight Line - XAG APC2 Work Mode",
      altCurveLine: "Curve Line - XAG APC2 Work Mode",
      altClosedLine: "Closed Line - XAG APC2 Work Mode",
      altDiagonalLine: "Diagonal Line - XAG APC2 Work Mode",
      altTerrainComp: "Terrain Compensation XAG APC2 in Action",
      altUTurn: "Automatic U-Turn XAG APC2 Demonstration",
      altApplications: "Various Applications of XAG APC2 in Agriculture"
    }
  }), [language]);

  const p = pageTexts[language];

  // Função para extrair o ID do YouTube
  const getYouTubeId = (url: string) => {
    const match = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
    return match ? match[1] : null;
  };

  const videoId = getYouTubeId("https://www.youtube.com/watch?v=YRgqrb98Ksg");

  return (
    <div className="pt-16 bg-white text-gray-900">
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fadeIn 0.8s ease-out; }
        .video-container {
          position: relative;
          padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
          height: 0;
          overflow: hidden;
          border-radius: 1rem;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
        .video-container iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: none;
        }
        .gradient-border {
          position: relative;
          background: linear-gradient(45deg, #ffffff, #f8fafc);
        }
        .gradient-border::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(45deg, #3b82f6, #06b6d4, #10b981);
          border-radius: 1.5rem;
          z-index: -1;
          opacity: 0.7;
        }
        
        /* Estilos para o dual language */
        .feature-card {
          position: relative;
          transition: all 0.3s ease;
        }
        
        .feature-card:hover .en-overlay {
          opacity: 1;
          transform: translateY(0);
        }
        
        .en-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(255,255,255,0.95), rgba(255,255,255,0.98));
          padding: 1.5rem;
          border-radius: 1rem;
          opacity: 0;
          transform: translateY(10px);
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          backdrop-filter: blur(10px);
        }
      `}</style>

      {/* Navbar Minimalista */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link 
              to="/produtos" 
              className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors group"
            >
              <ChevronRight className="rotate-180 group-hover:-translate-x-1 transition-transform" size={20} />
              <span className="text-sm font-medium">{t.nav?.back || "Back to Products"}</span>
            </Link>
            <div className="flex items-center gap-4">
              <Link 
                to="/ficha-tecnica/APC2"
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              >
                <Download size={16} />
                <span className="text-sm font-medium">{t.product?.specSheet || "Spec Sheet"}</span>
              </Link>
              <button 
                onClick={() => setIsVideoOpen(true)}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 font-medium shadow-md hover:shadow-lg"
              >
                <Play size={16} />
                <span className="text-sm font-medium">{t.product?.watchVideo || "Watch Video"}</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* 1. Hero Section */}
      <section className="pt-60 pb-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full text-sm font-medium shadow-lg">
              {p.gnssAutoSteering}
            </div>

            <h1 className="text-5xl md:text-6xl font-black leading-tight">
              <span className="text-gray-900">XAG</span>
              <span className="text-5xl md:text-red-600"> APC2</span>
              <br />
              <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
                {p.autoPilot}
              </span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              {p.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link 
                to="/contactos"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
              >
                {t.cta?.call || "Contact Us"}
              </Link>
              <Link 
                to="/ficha-tecnica/APC2"
                className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold text-lg hover:border-blue-500 hover:text-blue-600 transition-all duration-300"
              >
                {t.product?.specSheet || "Technical Sheet"}
              </Link>
            </div>
          </div>

          <div className="relative gradient-border rounded-2xl p-2 shadow-2xl">
            <img 
              src="https://i.imgur.com/gtizIph.png"
              alt={p.altHero}
              className="w-full rounded-2xl"
            />
          </div>
        </div>

        {/* Destaques com Dual Language */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-6 mt-24 pt-12 border-t border-gray-200">
          {p.features.map((f, i) => (
            <div 
              key={i} 
              className="feature-card group p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 cursor-default relative overflow-hidden"
            >
              {/* Conteúdo Principal */}
              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl shadow flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-blue-600">
                    {f.icon}
                  </div>
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2 text-center">{f.title}</h3>
                <p className="text-sm text-gray-600 text-center">{f.desc}</p>
              </div>
              
              {/* Overlay com tradução */}
              <div className="en-overlay">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full mb-2">
                    {language === 'pt' ? 'ENGLISH' : 'PORTUGUÊS'}
                  </span>
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  {language === 'pt' ? f.enTitle : f.ptTitle}
                </h3>
                <p className="text-sm text-gray-600">
                  {language === 'pt' ? f.enDesc : f.ptDesc}
                </p>
                <div className="mt-4 flex items-center gap-1 text-blue-600 text-xs">
                  <Eye size={12} />
                  <span>Hover to see in {language === 'pt' ? 'English' : 'Portuguese'}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

       {/* 2. Video Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
          </div>
          
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl bg-black">
            <div className="absolute inset-0 overflow-hidden rounded-xl">
              <iframe 
                src="https://www.youtube-nocookie.com/embed/YRgqrb98Ksg?autoplay=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=YRgqrb98Ksg&volume=35&showinfo=0&iv_load_policy=3&disablekb=1&fs=0&start=0&playsinline=1"
                className="w-full h-full"
                title="S500 PRO Autonomous Sprayer"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen={false}
                loading="lazy"
                frameBorder="0"
              />
            </div>
          </div>
        
        </div>
      </section>

      {/* 3. Tipos de Linhas - Grid 2x2 */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">{p.smartLinePlanning}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {p.linePlanningDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group cursor-pointer" onClick={() => setActiveImage("https://i.imgur.com/ZL3RWQ9.png")}>
              <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300">
                <img 
                  src="https://i.imgur.com/ZL3RWQ9.png" 
                  alt={p.altStraightLine} 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                  <span className="text-white font-medium">
                    {language === 'pt' ? 'Linha Reta' : 'Straight Line'}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="group cursor-pointer" onClick={() => setActiveImage("https://i.imgur.com/6klQ8ek.png")}>
              <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300">
                <img 
                  src="https://i.imgur.com/6klQ8ek.png" 
                  alt={p.altCurveLine} 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                  <span className="text-white font-medium">
                    {language === 'pt' ? 'Linha Curva' : 'Curved Line'}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="group cursor-pointer" onClick={() => setActiveImage("https://i.imgur.com/oY3iAcQ.png")}>
              <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300">
                <img 
                  src="https://i.imgur.com/oY3iAcQ.png" 
                  alt={p.altClosedLine} 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                  <span className="text-white font-medium">
                    {language === 'pt' ? 'Linha Fechada' : 'Closed Line'}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="group cursor-pointer" onClick={() => setActiveImage("https://i.imgur.com/f4USeNZ.png")}>
              <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300">
                <img 
                  src="https://i.imgur.com/f4USeNZ.png" 
                  alt={p.altDiagonalLine} 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                  <span className="text-white font-medium">
                    {language === 'pt' ? 'Linha Diagonal' : 'Diagonal Line'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Funcionalidades Avançadas */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-32">
          {/* Compensação de Terreno */}
          <div className="space-y-8 text-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">{p.terrainCompensation}</h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                {p.terrainCompensationDesc}
              </p>
            </div>
            <img 
              src="https://imgur.com/SAMQfkM.png" 
              alt={p.altTerrainComp} 
              className="rounded-2xl shadow-xl w-full max-w-6xl mx-auto hover:shadow-2xl transition-shadow duration-300"
            />
          </div>

          {/* U-Turn Automática */}
          <div className="space-y-8 text-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">{p.autoUTurn}</h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                {p.autoUTurnDesc}
              </p>
            </div>
            <img 
              src="https://imgur.com/zHEgLtt.png" 
              alt={p.altUTurn} 
              className="rounded-2xl shadow-xl w-full max-w-6xl mx-auto hover:shadow-2xl transition-shadow duration-300"
            />
          </div>
          
          {/* Aplicações Diversas */}
          <div className="space-y-8 text-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">{p.applicationsFunctions}</h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                {p.applicationsFunctionsDesc}
              </p>
            </div>
            <img 
              src="https://i.imgur.com/QkkwAga.png" 
              alt={p.altApplications} 
              className="rounded-2xl shadow-xl w-full max-w-6xl mx-auto hover:shadow-2xl transition-shadow duration-300"
            />
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-gradient-to-r from-blue-900 to-cyan-900 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 bg-grid-16"></div>
        <div className="relative max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-8">
            {p.maxPrecision}
          </h2>
          <p className="text-2xl mb-12 text-blue-100">
            {p.ctaDescription}
          </p>

          <Link 
            to="/contactos"
            className="inline-flex items-center gap-4 px-12 py-6 bg-white text-blue-900 rounded-2xl font-bold text-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 group"
          >
            {p.talkToExpert}
            <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </Link>
          
          <p className="mt-8 text-blue-200">
            {t.cta?.scheduleDemo || "Schedule a demo with our specialists"}
          </p>
        </div>
      </section>

      {/* Modal para Imagem Ampliada */}
      {activeImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setActiveImage(null)}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveImage(null);
            }}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
          >
            <X size={32} />
          </button>
          <img 
            src={activeImage} 
            alt="Imagem ampliada" 
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Modal Vídeo Completo */}
      <Suspense fallback={
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
          <div className="text-white">Carregando vídeo...</div>
        </div>
      }>
        {isVideoOpen && (
          <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-6xl w-full">
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute -top-12 right-0 text-white flex items-center gap-2 hover:text-gray-300 transition-colors"
              >
                {p.close} <X size={20} />
              </button>
              
              <div className="video-container">
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&showinfo=0&controls=1`}
                  title="XAG APC2 Demonstration Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              
              <div className="flex justify-between items-center mt-4 text-white">
                <div className="flex items-center gap-2">
                  <Video size={16} />
                  <span className="text-sm">XAG APC2 Demo</span>
                </div>
                <button
                  onClick={() => {
                    const iframe = document.querySelector('iframe');
                    if (iframe) iframe.requestFullscreen();
                  }}
                  className="flex items-center gap-2 text-sm hover:text-gray-300 transition-colors"
                >
                  <Maximize2 size={16} />
                  {p.fullscreen}
                </button>
              </div>
            </div>
          </div>
        )}
      </Suspense>
    </div>
  );
}
