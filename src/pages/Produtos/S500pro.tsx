// src/pages/Produtos/S500Pro.tsx
import React, { useState, useMemo } from 'react';
import { Link } from "react-router-dom";
import { 
  Play, Check, MessageCircle, FileText, ChevronRight, 
  Navigation, Battery, Target, Eye, Cpu, Map, 
  Users, Smartphone, BarChart3, Zap, Shield, 
  Droplets, Wind, Clock, DollarSign, ArrowRight, X,
  Cloud, Tree, Settings, Video
} from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from '../../i18n/translations';

export default function S500ProPage() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];
  
  const pageTexts = useMemo(() => ({
    pt: {
      // Hero Section
      autoSprayingTech: "TECNOLOGIA DE PULVERIZAÇÃO AUTÓNOMA",
      orchardSprayer: "Orchard Sprayer",
      model: "S500 PRO",
      heroDescription: "Pulverização autónoma de precisão para pomares e vinhas. Maximize a eficiência operacional e minimize o impacto ambiental com tecnologia inteligente.",
      contactSales: "Contactar Vendas",
      technicalSpecs: "Especificações Técnicas",
      watchVideo: "Ver Vídeo",
      backToProducts: "Voltar aos Produtos",
      
      // Features Icons
      features: [
        {
          icon: <Navigation className="text-blue-600" size={28} />,
          title: "Navegação Integrada",
          description: "GPS RTK + Visão Computacional"
        },
        {
          icon: <Battery className="text-green-600" size={28} />,
          title: "Autonomia Extendida",
          description: "Até 12h de operação contínua"
        },
        {
          icon: <Target className="text-cyan-600" size={28} />,
          title: "Pulverização de Precisão",
          description: "Controlo de taxa variável"
        },
        {
          icon: <Eye className="text-purple-600" size={28} />,
          title: "Gestão Visual",
          description: "Monitorização em tempo real"
        }
      ],
      
      // Precision Spraying Section
      greenRevolution: "REVOLUÇÃO VERDE",
      precisionSpraying: "Pulverização de",
      precision: "Precisão",
      precisionDescription: "Tecnologia avançada para aplicação precisa de produtos fitossanitários, reduzindo desperdício e impacto ambiental.",
      precisionFeatures: [
        "Dosagem precisa por árvore",
        "Controlo programável de RPM do ventilador",
        "Controlo dinâmico de caudal baseado em velocidade em tempo real",
        "Início/paragem inteligente e controlo unilateral (reduz químicos em 30%)"
      ],
      
      // Deployment Section
      effortlessDeployment: "IMPLEMENTAÇÃO SEM ESFORÇO",
      continuousScalable: "Operação",
      continuousScalableHighlight: "Contínua & Escalável",
      deploymentDescription: "Planeamento inteligente para todos os tipos de terreno e culturas.",
      deploymentFeatures: [
        {
          icon: <Map className="text-cyan-400" size={20} />,
          title: "Planeamento de Pontos Inteligente",
          description: "Adapta-se a sombra, árvores altas, estufas e terrenos inclinados"
        },
        {
          icon: <Users className="text-cyan-400" size={20} />,
          title: "Operação em Frota",
          description: "Controlo de 5+ máquinas por um único operador"
        },
        {
          icon: <Cpu className="text-cyan-400" size={20} />,
          title: "Integração Total",
          description: "Compatível com sistemas de gestão agrícola existentes"
        }
      ],
      
      // Smart Management Section
      smartManagement: "GESTÃO INTELIGENTE",
      oneTapControl: "Controlo com",
      oneTapControlHighlight: "Um Toque",
      managementDescription: "Monitorização completa através da app Orchard Mate",
      managementFeatures: [
        {
          icon: <Smartphone className="text-purple-600" size={28} />,
          title: "App Orchard Mate",
          description: "Controlo remoto e monitorização em tempo real"
        },
        {
          icon: <Eye className="text-purple-600" size={28} />,
          title: "Monitorização em Tempo Real",
          description: "Visualização de progresso e status"
        },
        {
          icon: <BarChart3 className="text-purple-600" size={28} />,
          title: "Relatórios Automáticos",
          description: "Análise de produtividade e eficiência"
        },
        {
          icon: <Shield className="text-purple-600" size={28} />,
          title: "Diagnóstico Inteligente",
          description: "Alertas e manutenção preditiva"
        }
      ],
      
      // ROI Section
      provenROI: "ROI COMPROVADO",
      aiDriven: "Operação com",
      aiDrivenHighlight: "IA • Alto Retorno",
      roiDescription: "Resultados baseados em operações reais em grandes pomares comerciais",
      roiStats: [
        {
          value: "40%",
          label: "Maior Eficiência",
          icon: <Zap className="text-yellow-400" size={24} />,
          description: "Redução de tempo de operação"
        },
        {
          value: "5%",
          label: "Aumento de Produção",
          icon: <Droplets className="text-green-400" size={24} />,
          description: "Melhor cobertura e absorção"
        },
        {
          value: "10%",
          label: "Menos Pesticidas",
          icon: <Wind className="text-blue-400" size={24} />,
          description: "Redução de produtos químicos"
        }
      ],
      
      // CTA Section
      transformOrchard: "Transforme as Operações do Seu Pomar",
      ctaDescription: "Junte-se aos principais produtores que já otimizaram as suas operações com tecnologia autónoma de ponta.",
      watchDemo: "Ver Demonstração",
      ctaSubtitle: "Agende uma demonstração no seu terreno • Análise personalizada • Suporte técnico dedicado",
      
      // Floating Button
      technicalSpecifications: "Especificações Técnicas",
      
      // Modal
      close: "Fechar",
      
      // Alt texts
      altHero: "S500 Pro Orchard Sprayer em operação",
      altPrecisionSpray: "Sistema de pulverização de precisão S500 Pro",
      altDeployment: "Diagrama de planeamento de operações S500 Pro",
      altAppInterface: "Interface da app Orchard Mate para S500 Pro"
    },
    
    en: {
      // Hero Section
      autoSprayingTech: "AUTONOMOUS SPRAYING TECHNOLOGY",
      orchardSprayer: "Orchard Sprayer",
      model: "S500 PRO",
      heroDescription: "Autonomous precision spraying for orchards and vineyards. Maximize operational efficiency and minimize environmental impact with intelligent technology.",
      contactSales: "Contact Sales",
      technicalSpecs: "Technical Specifications",
      watchVideo: "Watch Video",
      backToProducts: "Back to Products",
      
      // Features Icons
      features: [
        {
          icon: <Navigation className="text-blue-600" size={28} />,
          title: "Integrated Navigation",
          description: "GPS RTK + Computer Vision"
        },
        {
          icon: <Battery className="text-green-600" size={28} />,
          title: "Extended Autonomy",
          description: "Up to 12h continuous operation"
        },
        {
          icon: <Target className="text-cyan-600" size={28} />,
          title: "Precision Spraying",
          description: "Variable rate control"
        },
        {
          icon: <Eye className="text-purple-600" size={28} />,
          title: "Visual Management",
          description: "Real-time monitoring"
        }
      ],
      
      // Precision Spraying Section
      greenRevolution: "GREEN REVOLUTION",
      precisionSpraying: "Precision",
      precision: "Spraying",
      precisionDescription: "Advanced technology for precise application of phytosanitary products, reducing waste and environmental impact.",
      precisionFeatures: [
        "Precise dosage per tree",
        "Programmable fan RPM control",
        "Dynamic flow control based on real-time speed",
        "Smart start/stop and unilateral control (reduces chemicals by 30%)"
      ],
      
      // Deployment Section
      effortlessDeployment: "EFFORTLESS DEPLOYMENT",
      continuousScalable: "Continuous &",
      continuousScalableHighlight: "Scalable Operation",
      deploymentDescription: "Smart planning for all types of terrain and crops.",
      deploymentFeatures: [
        {
          icon: <Map className="text-cyan-400" size={20} />,
          title: "Smart Point Planning",
          description: "Adapts to shade, tall trees, greenhouses and sloping terrain"
        },
        {
          icon: <Users className="text-cyan-400" size={20} />,
          title: "Fleet Operation",
          description: "Control 5+ machines by a single operator"
        },
        {
          icon: <Cpu className="text-cyan-400" size={20} />,
          title: "Full Integration",
          description: "Compatible with existing farm management systems"
        }
      ],
      
      // Smart Management Section
      smartManagement: "SMART MANAGEMENT",
      oneTapControl: "One-Tap",
      oneTapControlHighlight: "Control",
      managementDescription: "Complete monitoring through the Orchard Mate app",
      managementFeatures: [
        {
          icon: <Smartphone className="text-purple-600" size={28} />,
          title: "Orchard Mate App",
          description: "Remote control and real-time monitoring"
        },
        {
          icon: <Eye className="text-purple-600" size={28} />,
          title: "Real-time Monitoring",
          description: "Progress and status visualization"
        },
        {
          icon: <BarChart3 className="text-purple-600" size={28} />,
          title: "Automatic Reports",
          description: "Productivity and efficiency analysis"
        },
        {
          icon: <Shield className="text-purple-600" size={28} />,
          title: "Smart Diagnostics",
          description: "Alerts and predictive maintenance"
        }
      ],
      
      // ROI Section
      provenROI: "PROVEN ROI",
      aiDriven: "AI-Driven",
      aiDrivenHighlight: "Operation • High ROI",
      roiDescription: "Results based on real operations in large commercial orchards",
      roiStats: [
        {
          value: "40%",
          label: "Higher Efficiency",
          icon: <Zap className="text-yellow-400" size={24} />,
          description: "Operation time reduction"
        },
        {
          value: "5%",
          label: "Production Increase",
          icon: <Droplets className="text-green-400" size={24} />,
          description: "Better coverage and absorption"
        },
        {
          value: "10%",
          label: "Less Pesticides",
          icon: <Wind className="text-blue-400" size={24} />,
          description: "Chemical reduction"
        }
      ],
      
      // CTA Section
      transformOrchard: "Transform Your Orchard Operations",
      ctaDescription: "Join leading producers who have already optimized their operations with cutting-edge autonomous technology.",
      watchDemo: "Watch Demo",
      ctaSubtitle: "Schedule a demo on your land • Personalized analysis • Dedicated technical support",
      
      // Floating Button
      technicalSpecifications: "Technical Specifications",
      
      // Modal
      close: "Close",
      
      // Alt texts
      altHero: "S500 Pro Orchard Sprayer in operation",
      altPrecisionSpray: "S500 Pro precision spraying system",
      altDeployment: "S500 Pro operation planning diagram",
      altAppInterface: "Orchard Mate app interface for S500 Pro"
    }
  }), [language]);

  const p = pageTexts[language];

  return (
    <div className="pt-16 bg-white text-gray-900">
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fadeIn 0.8s ease-out; }
      `}</style>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/produtos" className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors">
              <ChevronRight className="rotate-180" size={20} />
              <span className="text-sm font-medium">{p.backToProducts}</span>
            </Link>
            <button 
              onClick={() => setIsVideoOpen(true)}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-colors font-medium"
            >
              <Play size={16} />
              <span className="text-sm font-medium">{p.watchVideo}</span>
            </button>
          </div>
        </div>
      </nav>

      {/* 1. Hero Section */}
      <section className="pt-60 pb-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute -top-3 left-0 right-0 h-6 bg-gray-50 z-10"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full text-sm font-medium">
                {p.autoSprayingTech}
              </div>
              
              <h1 className="text-5xl md:text-6xl font-black leading-tight">
                <span className="text-gray-900">{p.orchardSprayer}</span>
                <br />
                <span className="text-4xl md:text-5xl font-bold text-gray-700">{p.model}</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                {p.heroDescription}
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <Link 
                  to="/contactos" 
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl"
                >
                  {p.contactSales}
                </Link>
                <Link 
                  to="/ficha-tecnica/S500pro"
                  className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-blue-400 hover:text-blue-700 transition-colors font-semibold text-lg"
                >
                  {p.technicalSpecs}
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://i.imgur.com/9jPc15n.png" 
                alt={p.altHero}
                className="relative w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
          
          {/* Features Icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-12 border-t border-gray-200">
            {p.features.map((feature, idx) => (
              <div key={idx} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="absolute -bottom-3 left-0 right-0 h-6 bg-gray-50 z-10"></div>
      </section>

      {/* 1.5. Video Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
          </div>
          
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl bg-black">
            <div className="absolute inset-0 overflow-hidden rounded-xl">
              <iframe 
                src="https://www.youtube-nocookie.com/embed/AYMVCJpuM3c?autoplay=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=AYMVCJpuM3c&showinfo=0&iv_load_policy=3&disablekb=1&fs=0&start=1&volume=35"
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
      
      {/* 2. Precision Spraying Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute -top-3 left-0 right-0 h-6 bg-white z-10"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full text-sm font-medium">
                  {p.greenRevolution}
                </div>
                <h2 className="text-4xl font-bold text-gray-900">
                  {p.precisionSpraying} <span className="text-green-600">{p.precision}</span>
                </h2>
                <p className="text-lg text-gray-600">
                  {p.precisionDescription}
                </p>
                
                <div className="space-y-4">
                  {p.precisionFeatures.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-3xl blur-3xl"></div>
              <img 
                src="https://i.imgur.com/QZyuxij.png" 
                alt={p.altPrecisionSpray}
                className="relative w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
        
        <div className="absolute -bottom-3 left-0 right-0 h-6 bg-white z-10"></div>
      </section>
      {/* 3. Deployment Section */}
      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute -top-3 left-0 right-0 h-6 bg-gray-900 z-10"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-3xl"></div>
              <img 
                src="https://i.imgur.com/fc9kVOV.jpeg" 
                alt={p.altDeployment}
                className="relative w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
            
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full text-sm font-medium">
                {p.effortlessDeployment}
              </div>
              <h2 className="text-4xl font-bold text-white">
                {p.continuousScalable} <span className="text-cyan-400">{p.continuousScalableHighlight}</span>
              </h2>
              <p className="text-lg text-gray-300">
                {p.deploymentDescription}
              </p>
              
              <div className="space-y-4">
                {p.deploymentFeatures.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    {feature.icon}
                    <div>
                      <h4 className="font-semibold text-white">{feature.title}</h4>
                      <p className="text-gray-400 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute -bottom-3 left-0 right-0 h-6 bg-gray-900 z-10"></div>
      </section>

      {/* 4. Smart Management Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute -top-3 left-0 right-0 h-6 bg-white z-10"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-medium mb-4">
              {p.smartManagement}
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {p.oneTapControl} <span className="text-purple-600">{p.oneTapControlHighlight}</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {p.managementDescription}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {p.managementFeatures.map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-purple-50 rounded-xl mb-6">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-xl mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <img 
              src="https://i.imgur.com/3nRrSxW.png" 
              alt={p.altAppInterface}
              className="w-full max-w-4xl mx-auto rounded-2xl shadow-xl"
            />
          </div>
        </div>
        
        <div className="absolute -bottom-3 left-0 right-0 h-6 bg-white z-10"></div>
      </section>

      {/* 5. ROI Section */}
      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute -top-4 left-0 right-0 h-8 bg-gray-900 z-10"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full text-sm font-medium mb-4">
              {p.provenROI}
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">
              {p.aiDriven} <span className="text-cyan-400">{p.aiDrivenHighlight}</span>
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              {p.roiDescription}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {p.roiStats.map((stat, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-5xl font-bold">{stat.value}</div>
                  <div className="p-3 bg-white/10 rounded-xl">
                    {stat.icon}
                  </div>
                </div>
                <h3 className="font-bold text-xl text-cyan-500 mb-2">{stat.label}</h3>
                <p className="text-gray-300">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="absolute -bottom-4 left-0 right-0 h-8 bg-gray-900 z-10"></div>
      </section>

      {/* 6. CTA Section */}
      <section className="py-24 bg-blue-700 text-white relative overflow-hidden">
        <div className="absolute -top-6 left-0 right-0 h-12 bg-blue-700 z-10"></div>
        
        <div className="max-w-5xl mx-auto px-6 text-center relative z-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {p.transformOrchard}
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
            {p.ctaDescription}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              to="/contactos" 
              className="group px-10 py-5 bg-white text-blue-900 rounded-xl hover:bg-blue-50 transition-all duration-300 font-bold text-lg shadow-2xl hover:shadow-3xl flex items-center gap-3 min-w-[240px] justify-center"
            >
              {p.contactSales}
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
            
            <button 
              onClick={() => setIsVideoOpen(true)}
              className="px-10 py-5 bg-transparent border-2 border-white/30 text-white rounded-xl hover:bg-white/10 transition-all duration-300 font-bold text-lg flex items-center gap-3 min-w-[240px] justify-center"
            >
              <Play size={20} />
              {p.watchDemo}
            </button>
          </div>
          
          <p className="mt-8 text-blue-200 text-sm">
            {p.ctaSubtitle}
          </p>
        </div>
        
        <div className="absolute -bottom-6 left-0 right-0 h-12 bg-blue-700 z-10"></div>
      </section>

      {/* Floating Button */}
      <div className="fixed bottom-8 right-8 z-40">
        <Link 
          to="/ficha-tecnica/S1000"
          className="group flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full shadow-2xl hover:shadow-3xl font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
        >
          <FileText size={22} />
          <span>{p.technicalSpecifications}</span>
          <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
        </Link>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 animate-fade-in">
          <div className="relative w-full max-w-6xl">
            <div className="aspect-video bg-black rounded-2xl overflow-hidden">
              <iframe 
                src="https://www.youtube.com/embed/EXAMPLE_VIDEO_ID?autoplay=1&controls=1&modestbranding=1&rel=0"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="LJ Tech S500 Orchard Sprayer Demo"
              />
            </div>
            <button 
              onClick={() => setIsVideoOpen(false)}
              className="absolute -top-16 right-0 text-white hover:text-gray-300 transition-colors flex items-center gap-2"
            >
              <span className="text-sm">{p.close}</span>
              <X size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
