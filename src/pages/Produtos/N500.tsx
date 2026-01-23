// src/pages/Produtos/N500.tsx
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { 
  Play, ChevronRight, 
  Navigation, Target, Eye, Cpu, 
  ArrowRight, X
} from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from '../../i18n/translations';

export default function N500Page() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const { language } = useLanguage();
  const t = translations[language].product.n500 || translations[language].product.apc2; // Usa apc2 como fallback
  const generalT = translations[language];

  // Features Grid com ícones e textos
  const features = [
    { icon: <Navigation size={28} />, title: t.multiLineOption, desc: t.multiLineOptionDesc },
    { icon: <Target size={28} />, title: t.agriculturalManagement, desc: t.agriculturalManagementDesc },
    { icon: <Cpu size={28} />, title: t.isobus, desc: t.isobusDesc },
    { icon: <Eye size={28} />, title: t.terrainCompensation, desc: t.terrainCompensationDesc },
    { icon: <Navigation size={28} />, title: t.highPrecisionRTK, desc: t.highPrecisionRTKDesc },
    { icon: <Target size={28} />, title: t.pppPositioning, desc: t.pppPositioningDesc },
    { icon: <Cpu size={28} />, title: t.gisInformation, desc: t.gisInformationDesc },
    { icon: <Eye size={28} />, title: t.automaticDirectionChange, desc: t.automaticDirectionChangeDesc }
  ];

  return (
    <div className="pt-16 bg-white text-gray-900">
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fadeIn 0.8s ease-out; }
      `}</style>

      {/* Navbar Minimalista */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/produtos" className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors">
              <ChevronRight className="rotate-180" size={20} />
              <span className="text-sm font-medium">{t.backToProducts}</span>
            </Link>
            <button 
              onClick={() => setIsVideoOpen(true)}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-colors font-medium"
            >
              <Play size={16} />
              <span className="text-sm font-medium">{generalT.product.watchVideo}</span>
            </button>
          </div>
        </div>
      </nav>

      {/* 1. Hero */}
      <section className="pt-60 pb-20 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-yellow-500 text-white rounded-full text-sm font-medium">
              {t.gnssAutoSteering}
            </div>

            <h1 className="text-5xl md:text-6xl font-black leading-tight">
              <span className="text-gray-900">NST</span>
              <span className="text-5xl md:text-yellow-500"> N500</span>
              <br />
              <span className="text-4xl md:text-5xl font-bold text-yellow-500">
                {t.autoSteering || t.autoPilot}
              </span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              {language === 'pt' 
                ? "Sistema avançado de direção automática por GNSS para tratores e máquinas agrícolas. Maior precisão, menos sobreposições e máxima eficiência operacional em qualquer cultura."
                : "Advanced GNSS auto-steering system for tractors and agricultural machinery. Higher accuracy, less overlap and maximum operational efficiency in any crop."}
            </p>

            <div className="flex gap-4">
              <Link 
                to="/contactos"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold text-lg shadow-lg"
              >
                {t.requestInfo}
              </Link>
              <Link 
                to="/ficha-tecnica/N500"
                className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold text-lg"
              >
                {generalT.product.specSheet}
              </Link>
            </div>
          </div>

          <img 
            src="https://i.imgur.com/t2NrTUH.jpeg"
            alt={t.altHero || "NST N500 Auto Steering"}
            className="w-full max-w-6xl mx-auto rounded-2xl shadow-2xl"
          />
        </div>

        {/* Destaques */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto px-6 mt-24 pt-12 border-t">
          {features.map((f, i) => (
            <div key={i} className="text-center">
              <div className="w-16 h-16 mx-auto bg-white rounded-2xl shadow flex items-center justify-center mb-4">
                {f.icon}
              </div>
              <h3 className="font-bold">{f.title}</h3>
              <p className="text-sm text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Tipos de Linhas - Grid 2x2 */}
      <section className="py-24 bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">{t.smartLinePlanning}</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            {language === 'pt' 
              ? "O N500 permite definir linhas de trabalho precisas, seja em linha reta, curva, fechada ou diagonal."
              : "The N500 allows you to define precise work lines, whether straight, curved, closed or diagonal."}
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <img src="https://i.imgur.com/ZL3RWQ9.png" alt={t.altStraightLine || "Straight Line"} className="rounded-2xl shadow-lg" />
          <img src="https://i.imgur.com/6klQ8ek.png" alt={t.altCurveLine || "Curve Line"} className="rounded-2xl shadow-lg" />
          <img src="https://i.imgur.com/oY3iAcQ.png" alt={t.altClosedLine || "Closed Line"} className="rounded-2xl shadow-lg" />
          <img src="https://i.imgur.com/f4USeNZ.png" alt={t.altDiagonalLine || "Diagonal Line"} className="rounded-2xl shadow-lg" />
        </div>
      </section>

      {/* 3. Funcionalidades Avançadas */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-24">

          {/* Compensação de Terreno */}
          <div className="space-y-6 text-center">
            <h2 className="text-4xl font-bold text-gray-900">{t.terrainCompensationFull}</h2>
            <p className="text-lg text-gray-600">
              {language === 'pt' 
                ? "Correção automática da trajetória em terrenos inclinados, mantendo a precisão real do sistema."
                : "Automatic trajectory correction on sloping terrain, maintaining the system's real precision."}
            </p>
            <img 
              src="https://imgur.com/SAMQfkM.png" 
              alt={t.altTerrainComp || "Terrain Compensation"} 
              className="rounded-2xl shadow-xl w-full mx-auto"
            />
          </div>

          {/* ISOBUS */}
          <div className="space-y-6 text-center">
            <h2 className="text-4xl font-bold text-gray-900">{t.isobus}</h2>
            <p className="text-lg text-gray-600">
              {t.isobusDesc}
            </p>
            <img 
              src="https://imgur.com/QOcotI6.png" 
              alt="ISOBUS NST N500" 
              className="rounded-2xl shadow-xl w-full mx-auto"
            />
          </div>

          {/* U-Turn Automática */}
          <div className="space-y-6 text-center">
            <h2 className="text-4xl font-bold text-gray-900">{t.autoUTurn}</h2>
            <p className="text-lg text-gray-600">
              {t.autoUTurnDesc}
            </p>
            <img 
              src="https://imgur.com/zHEgLtt.png" 
              alt={t.altUTurn || "Automatic U-Turn"} 
              className="rounded-2xl shadow-xl w-full mx-auto"
            />
          </div>
          
          {/* Aplicações e Funções */}
          <div className="space-y-6 text-center">
            <h2 className="text-4xl font-bold text-gray-900">{t.applicationsFunctions}</h2>
            <p className="text-lg text-gray-600">
              {language === 'pt' 
                ? "O N500 pode ser utilizado em diversas funções agrícolas, como sementeira, pulverização, preparação de solo e muito mais, garantindo precisão e eficiência em cada tarefa."
                : "The N500 can be used in various agricultural functions, such as seeding, spraying, soil preparation and much more, ensuring precision and efficiency in each task."}
            </p>
            <img 
              src="https://i.imgur.com/QkkwAga.png" 
              alt={t.altApplications || "NST N500 Applications"} 
              className="rounded-2xl shadow-xl w-full mx-auto"
            />
          </div>

          {/* Acessórios Extra */}
          <div className="space-y-6 text-center">
            <h2 className="text-4xl font-bold text-gray-900">
              {language === 'pt' ? "Acessórios Extra" : "Extra Accessories"}
            </h2>
            <p className="text-lg text-gray-600">
              {language === 'pt' 
                ? "Explore os acessórios adicionais do N500 para expandir as suas funcionalidades, personalizar operações e otimizar a produtividade no campo."
                : "Explore the N500's additional accessories to expand its functionalities, customize operations and optimize field productivity."}
            </p>
            <img 
              src="https://i.imgur.com/CyFKInD.png" 
              alt={language === 'pt' ? "Acessórios Extra NST N500" : "NST N500 Extra Accessories"} 
              className="rounded-2xl shadow-xl w-full mx-auto"
            />
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="py-24 bg-blue-900 text-white text-center">
        <h2 className="text-5xl font-bold text-white">
          {t.maxPrecision}
        </h2>
        <p className="text-xl mb-10 text-white">
          {language === 'pt' 
            ? "O NST N500 é o primeiro passo para agricultura de precisão acessível."
            : "The NST N500 is the first step towards affordable precision agriculture."}
        </p>

        <Link 
          to="/contactos"
          className="inline-flex items-center gap-3 px-10 py-5 bg-white text-blue-900 rounded-xl font-bold text-lg"
        >
          {t.talkToExpert}
          <ArrowRight />
        </Link>
      </section>

      {/* Modal Vídeo */}
      {isVideoOpen && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
          <div className="max-w-5xl w-full relative">
            <iframe
              className="w-full aspect-video rounded-xl"
              src="https://www.youtube.com/embed/EXAMPLE_VIDEO_ID"
              title="NST N500 Demonstration Video"
              allowFullScreen
            />
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute -top-12 right-0 text-white flex gap-2"
            >
              {t.close} <X />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}