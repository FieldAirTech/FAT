// src/pages/Produtos/R200.tsx

import React, { useState, useMemo } from 'react';
import { Link } from "react-router-dom";
import {
  Play,
  Check,
  FileText,
  ChevronRight,
  Navigation,
  Battery,
  SprayCan,
  Target,
  Eye,
  Cpu,
  Map,
  Users,
  Smartphone,
  BarChart3,
  Zap,
  Shield,
  Droplets,
  Wind,
  ArrowRight,
  X,
  Cloud,
  Tree,
  Settings,
  Video,
  Globe
} from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from '../../i18n/translations';

export default function R200Page() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];

  const pageTexts = useMemo(() => ({
    pt: {

      // Hero Section
      autoSprayingTech: "VEÍCULO AGRÍCOLA AUTÓNOMO",
      model: "XAG R200",

      heroDescription:
        "O XAG R200 é um veículo agrícola autónomo desenvolvido para operações de pulverização em pomares, vinhas e outras culturas de linhas. Combina tração 6x6, navegação inteligente e o sistema RevoSpray para realizar aplicações de forma controlada e repetível.",

      contactSales: "Contactar Vendas",
      technicalSpecs: "Especificações Técnicas",
      watchVideo: "Ver Vídeo",
      backToProducts: "Voltar aos Produtos",

      // Features Icons
      features: [
        {
          icon: <Navigation className="text-red-600" size={28} />,
          title: "Navegação Autónoma",
          description: "RTK + seguimento inteligente de trajetórias"
        },
        {
          icon: <Droplets className="text-green-600" size={28} />,
          title: "RevoSpray 240 L",
          description: "4 bombas e 4 JetSprayers"
        },
        {
          icon: <Target className="text-cyan-600" size={28} />,
          title: "Pulverização Direcionada",
          description: "Gotas ajustáveis de 60–200 μm"
        },
        {
          icon: <Eye className="text-purple-600" size={28} />,
          title: "Visão em Tempo Real",
          description: "Câmara FPV e comando SRC 5"
        }
      ],

      // Precision Spraying Section
      greenRevolution: "SISTEMA REVOSPRAY",
      precisionSpraying: "Pulverização",
      precision: "Direcionada",

      precisionDescription:
        "O sistema RevoSpray foi desenvolvido para controlar a aplicação diretamente na zona de vegetação. O R200 utiliza quatro bombas de impulsor flexível e quatro atomizadores centrífugos JetSprayer, permitindo configurar a pulverização de acordo com a cultura e a operação.",

      precisionFeatures: [
        "Depósito inteligente com capacidade de 240 L",
        "Quatro bombas de impulsor flexível com caudal combinado até 16 L/min",
        "Atomização centrífuga com tamanho de gota ajustável entre 60 e 200 μm",
        "JetSprayers com fluxo de ar direcionado para favorecer a penetração na copa"
      ],

      // Deployment Section
      effortlessDeployment: "NAVEGAÇÃO E AUTOMAÇÃO",
      continuousScalable: "Percursos",
      continuousScalableHighlight: "Inteligentes e Repetíveis",

      deploymentDescription:
        "O XAG R200 permite transformar uma primeira passagem manual num percurso que pode ser repetido de forma autónoma. O sistema combina RTK, visão computacional, mapeamento e controlo inteligente da trajetória.",

      deploymentFeatures: [
        {
          icon: <Map className="text-orange-400" size={20} />,
          title: "RealTerra",
          description:
            "Criação de mapas da área através das imagens captadas durante a primeira passagem."
        },
        {
          icon: <Navigation className="text-orange-400" size={20} />,
          title: "Path Tracking",
          description:
            "Deteção e correção de desvios da trajetória durante o movimento."
        },
        {
          icon: <Cpu className="text-orange-400" size={20} />,
          title: "Repeat Mode",
          description:
            "Registo de percursos para posterior repetição autónoma da operação."
        }
      ],

      // Smart Management Section
      smartManagement: "CONTROLO DO EQUIPAMENTO",
      oneTapControl: "Operação",
      oneTapControlHighlight: "à Distância",

      managementDescription:
        "O comando SRC 5 disponibiliza ao operador uma interface dedicada para acompanhar e controlar o XAG R200 durante as operações no campo.",

      managementFeatures: [
        {
          icon: <Smartphone className="text-purple-600" size={28} />,
          title: "Comando SRC 5",
          description:
            "Comando equipado com ecrã tátil de 7 polegadas para controlo do equipamento."
        },
        {
          icon: <Eye className="text-purple-600" size={28} />,
          title: "Câmara FPV",
          description:
            "Campo de visão horizontal até 150° para acompanhar o equipamento em tempo real."
        },
        {
          icon: <GaugeIcon className="text-purple-600" size={28} />,
          title: "Cruise Mode",
          description:
            "Controlo da velocidade de deslocação entre 0,1 e 1,5 m/s."
        },
        {
          icon: <Shield className="text-purple-600" size={28} />,
          title: "Assistência à Segurança",
          description:
            "Sistema de deteção de pessoas e obstáculos para apoio à operação autónoma."
        }
      ],

      // Technical Capabilities Section
      provenROI: "CARACTERÍSTICAS DO R200",
      aiDriven: "Construído para",
      aiDrivenHighlight: "Operações Agrícolas",

      roiDescription:
        "Uma plataforma elétrica compacta concebida para circular entre linhas e executar operações agrícolas de forma autónoma e controlada.",

      roiStats: [
        {
          value: "240 L",
          label: "Capacidade do Depósito",
          icon: <Droplets className="text-yellow-400" size={24} />,
          description:
            "Depósito RevoSpray com sensor inteligente de nível de líquido."
        },
        {
          value: "16 L/min",
          label: "Caudal Máximo",
          icon: <Zap className="text-green-400" size={24} />,
          description:
            "Caudal combinado máximo das quatro bombas de pulverização."
        },
        {
          value: "6x6",
          label: "Tração Independente",
          icon: <Navigation className="text-red-400" size={24} />,
          description:
            "Seis rodas com acionamento independente para circulação no terreno."
        }
      ],

      // CTA Section
      transformOrchard: "Automatize as Operações do Seu Pomar",

      ctaDescription:
        "O XAG R200 reúne pulverização, navegação autónoma, mapeamento e tração 6x6 numa única plataforma agrícola. Conheça o equipamento e descubra como pode ser integrado às suas operações.",

      watchDemo: "Ver Demonstração",

      ctaSubtitle:
        "Agende uma demonstração • Conheça o equipamento no terreno • Suporte técnico FieldAirTech",

      // Floating Button
      technicalSpecifications: "Especificações Técnicas",

      // Modal
      close: "Fechar",

      // Alt texts
      altHero: "XAG R200 em operação",
      altPrecisionSpray: "Sistema de pulverização RevoSpray do XAG R200",
      altDeployment: "Sistema de navegação e planeamento do XAG R200",
      altAppInterface: "Interface de controlo do XAG R200"
    },

    en: {

      // Hero Section
      autoSprayingTech: "AUTONOMOUS AGRICULTURAL VEHICLE",
      model: "XAG R200",

      heroDescription:
        "The XAG R200 is an autonomous agricultural vehicle developed for spraying operations in orchards, vineyards and other row crops. It combines 6x6 traction, intelligent navigation and the RevoSpray system for controlled and repeatable applications.",

      contactSales: "Contact Sales",
      technicalSpecs: "Technical Specifications",
      watchVideo: "Watch Video",
      backToProducts: "Back to Products",

      // Features Icons
      features: [
        {
          icon: <Navigation className="text-red-600" size={28} />,
          title: "Autonomous Navigation",
          description: "RTK + intelligent path tracking"
        },
        {
          icon: <Droplets className="text-green-600" size={28} />,
          title: "240 L RevoSpray",
          description: "4 pumps and 4 JetSprayers"
        },
        {
          icon: <Target className="text-cyan-600" size={28} />,
          title: "Targeted Spraying",
          description: "Adjustable 60–200 μm droplets"
        },
        {
          icon: <Eye className="text-purple-600" size={28} />,
          title: "Real-Time Vision",
          description: "FPV camera and SRC 5 controller"
        }
      ],

      // Precision Spraying Section
      greenRevolution: "REVOSPRAY SYSTEM",
      precisionSpraying: "Targeted",
      precision: "Spraying",

      precisionDescription:
        "The RevoSpray system is designed to control application directly toward the crop canopy. The R200 uses four flexible impeller pumps and four centrifugal JetSprayers, allowing spraying to be configured according to crop and operational requirements.",

      precisionFeatures: [
        "Smart 240 L spraying tank",
        "Four flexible impeller pumps with up to 16 L/min combined flow",
        "Centrifugal atomization with adjustable 60–200 μm droplet size",
        "JetSprayers with directed airflow to support canopy penetration"
      ],

      // Deployment Section
      effortlessDeployment: "NAVIGATION & AUTOMATION",
      continuousScalable: "Smart and",
      continuousScalableHighlight: "Repeatable Paths",

      deploymentDescription:
        "The XAG R200 can turn an initial manual pass into a route that can be repeated autonomously. The system combines RTK, computer vision, mapping and intelligent path control.",

      deploymentFeatures: [
        {
          icon: <Map className="text-orange-400" size={20} />,
          title: "RealTerra",
          description:
            "Creates field maps using images captured during the first pass."
        },
        {
          icon: <Navigation className="text-orange-400" size={20} />,
          title: "Path Tracking",
          description:
            "Detects and corrects route deviations while the vehicle is moving."
        },
        {
          icon: <Cpu className="text-orange-400" size={20} />,
          title: "Repeat Mode",
          description:
            "Records routes for later autonomous repetition."
        }
      ],

      // Smart Management Section
      smartManagement: "EQUIPMENT CONTROL",
      oneTapControl: "Remote",
      oneTapControlHighlight: "Operation",

      managementDescription:
        "The SRC 5 controller provides the operator with a dedicated interface to monitor and control the XAG R200 during field operations.",

      managementFeatures: [
        {
          icon: <Smartphone className="text-purple-600" size={28} />,
          title: "SRC 5 Controller",
          description:
            "Controller equipped with a 7-inch touchscreen for equipment control."
        },
        {
          icon: <Eye className="text-purple-600" size={28} />,
          title: "FPV Camera",
          description:
            "Up to 150° horizontal field of view for real-time vehicle monitoring."
        },
        {
          icon: <GaugeIcon className="text-purple-600" size={28} />,
          title: "Cruise Mode",
          description:
            "Travel speed control between 0.1 and 1.5 m/s."
        },
        {
          icon: <Shield className="text-purple-600" size={28} />,
          title: "Safety Assistance",
          description:
            "Pedestrian and obstacle detection system supporting autonomous operation."
        }
      ],

      // Technical Capabilities Section
      provenROI: "R200 CAPABILITIES",
      aiDriven: "Built for",
      aiDrivenHighlight: "Agricultural Operations",

      roiDescription:
        "A compact electric platform designed to move between crop rows and perform agricultural operations in a controlled and autonomous way.",

      roiStats: [
        {
          value: "240 L",
          label: "Tank Capacity",
          icon: <Droplets className="text-yellow-400" size={24} />,
          description:
            "RevoSpray tank with intelligent liquid-level monitoring."
        },
        {
          value: "16 L/min",
          label: "Maximum Flow",
          icon: <Zap className="text-green-400" size={24} />,
          description:
            "Maximum combined flow from the four spraying pumps."
        },
        {
          value: "6x6",
          label: "Independent Drive",
          icon: <Navigation className="text-red-400" size={24} />,
          description:
            "Six independently driven wheels for agricultural terrain."
        }
      ],

      // CTA Section
      transformOrchard: "Automate Your Orchard Operations",

      ctaDescription:
        "The XAG R200 combines spraying, autonomous navigation, mapping and 6x6 traction in a single agricultural platform. Discover the vehicle and explore how it can be integrated into your operations.",

      watchDemo: "Watch Demo",

      ctaSubtitle:
        "Schedule a demonstration • See the vehicle in operation • FieldAirTech technical support",

      // Floating Button
      technicalSpecifications: "Technical Specifications",

      // Modal
      close: "Close",

      // Alt texts
      altHero: "XAG R200 in operation",
      altPrecisionSpray: "XAG R200 RevoSpray system",
      altDeployment: "XAG R200 navigation and operation planning system",
      altAppInterface: "XAG R200 control interface"
    }

  }), [language]);

  const p = pageTexts[language];

  return (
    <div className="pt-16 bg-white text-gray-900">

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }
      `}</style>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">

            <Link
              to="/produtos"
              className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
            >
              <ChevronRight
                className="rotate-180"
                size={20}
              />

              <span className="text-sm font-medium">
                {p.backToProducts}
              </span>
            </Link>

            <button
              onClick={() => setIsVideoOpen(true)}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-600 to-cyan-600 text-white rounded-lg hover:from-red-700 hover:to-cyan-700 transition-colors font-medium"
            >
              <Play size={16} />

              <span className="text-sm font-medium">
                {p.watchVideo}
              </span>
            </button>

          </div>
        </div>
      </nav>

      {/* 1. Hero Section */}
      <section className="pt-60 pb-20 bg-gray-50 relative overflow-hidden">

        <div className="absolute -top-3 left-0 right-0 h-6 bg-gray-50 z-10"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-20">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* TEXTO */}
            <div className="space-y-8">

              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-full text-sm font-medium">
                {p.autoSprayingTech}
              </div>

              <h1 className="text-5xl md:text-6xl font-black leading-tight">
                <span className="text-4xl md:text-5xl font-bold text-red-500">
                  {p.model}
                </span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                {p.heroDescription}
              </p>

              <div className="flex flex-wrap gap-4 pt-2">

                <Link
                  to="/contactos"
                  className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-red-400 hover:text-red-700 transition-colors font-semibold text-lg"
                >
                  {p.contactSales}
                </Link>

                <Link
                  to="/ficha-tecnica/R200"
                  className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-red-400 hover:text-red-700 transition-colors font-semibold text-lg"
                >
                  {p.technicalSpecs}
                </Link>

              </div>

            </div>

            {/* FOTO */}
            <div className="relative">

              <img
                src="https://i.imgur.com/vHxdrIb.png"
                alt={p.altHero}
                className="relative w-full h-auto rounded-2xl shadow-2xl"
              />

            </div>

          </div>

          {/* Features Icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-12 border-t border-gray-200">

            {p.features.map((feature, idx) => (
              <div
                key={idx}
                className="text-center group"
              >

                <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow mb-4">
                  {feature.icon}
                </div>

                <h3 className="font-bold text-gray-900 text-lg mb-2">
                  {feature.title}
                </h3>

                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>

              </div>
            ))}

          </div>

        </div>

        <div className="absolute -bottom-3 left-0 right-0 h-6 bg-gray-50 z-10"></div>

      </section>

      {/* 1.5. Video Section */}
      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-12">
          </div>

          <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl bg-black">

            <div className="absolute inset-0 overflow-hidden rounded-xl">

              <iframe
                src="https://www.youtube-nocookie.com/embed/2r66K-aK_BE?autoplay=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=2r66K-aK_BE&showinfo=0&iv_load_policy=3&disablekb=1&fs=0&playsinline=1"
                className="w-full h-full"
                title="XAG R200 Autonomous Agricultural Vehicle"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen={false}
                loading="lazy"
                frameBorder="0"
              />

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
                  {p.precisionSpraying}{' '}
                  <span className="text-green-600">
                    {p.precision}
                  </span>
                </h2>

                <p className="text-lg text-gray-600">
                  {p.precisionDescription}
                </p>

                <div className="space-y-4">

                  {p.precisionFeatures.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3"
                    >

                      <Check
                        className="text-green-500 mt-1 flex-shrink-0"
                        size={20}
                      />

                      <span className="text-gray-700">
                        {item}
                      </span>

                    </div>
                  ))}

                </div>

              </div>

            </div>

            <div className="relative">

              <div className="absolute -inset-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-3xl blur-3xl"></div>

              <img
                src="https://i.imgur.com/ZINKkfN.jpeg"
                alt={p.altPrecisionSpray}
                className="relative w-full h-auto rounded-2xl shadow-xl"
              />

            </div>

          </div>

        </div>

        <div className="absolute -bottom-3 left-0 right-0 h-6 bg-white z-10"></div>

      </section>

      {/* 3. Navigation & Automation Section */}
      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">

        <div className="absolute -top-3 left-0 right-0 h-6 bg-white z-10"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-20">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* FOTO */}
            <div className="relative">

              <div className="absolute -inset-4 bg-gradient-to-r from-red-600/20 to-orange-500/20 rounded-3xl blur-3xl"></div>

              <img
                src="https://i.imgur.com/mRh4KrR.jpeg"
                alt={p.altDeployment}
                className="relative w-full h-auto rounded-2xl shadow-xl"
              />

            </div>

            {/* TEXTO */}
            <div className="space-y-6">

              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-full text-sm font-medium">
                {p.effortlessDeployment}
              </div>

              <h2 className="text-4xl text-white font-bold">

                {p.continuousScalable}{' '}

                <span className="text-red-400">
                  {p.continuousScalableHighlight}
                </span>

              </h2>

              <p className="text-lg text-white">
                {p.deploymentDescription}
              </p>

              <div className="space-y-4 text-white">

                {p.deploymentFeatures.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3"
                  >

                    {feature.icon}

                    <div>

                      <h4 className="font-semibold text-white">
                        {feature.title}
                      </h4>

                      <p className="text-gray-400 text-sm">
                        {feature.description}
                      </p>

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

              {p.oneTapControl}{' '}

              <span className="text-purple-600">
                {p.oneTapControlHighlight}
              </span>

            </h2>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {p.managementDescription}
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {p.managementFeatures.map((feature, idx) => (

              <div
                key={idx}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >

                <div className="inline-flex items-center justify-center w-14 h-14 bg-purple-50 rounded-xl mb-6">
                  {feature.icon}
                </div>

                <h3 className="font-bold text-gray-900 text-xl mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-600">
                  {feature.description}
                </p>

              </div>

            ))}

          </div>

          <div className="mt-16 text-center">

            <img
              src="https://i.imgur.com/5CwNyOG.png"
              alt={p.altAppInterface}
              className="w-full max-w-4xl mx-auto rounded-2xl shadow-xl"
            />

          </div>

        </div>

        <div className="absolute -bottom-3 left-0 right-0 h-6 bg-white z-10"></div>

      </section>

      {/* 5. Technical Capabilities Section */}
      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">

        <div className="max-w-7xl mx-auto px-6 relative z-20">

          <div className="text-center mb-16">

            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-full text-sm font-medium mb-4">
              {p.provenROI}
            </div>

            <h2 className="text-4xl font-bold text-white mb-6">

              {p.aiDriven}{' '}

              <span className="text-red-400">
                {p.aiDrivenHighlight}
              </span>

            </h2>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {p.roiDescription}
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">

            {p.roiStats.map((stat, idx) => (

              <div
                key={idx}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20"
              >

                <div className="flex items-center justify-between mb-4">

                  <div className="text-5xl font-bold">
                    {stat.value}
                  </div>

                  <div className="p-3 bg-white/10 rounded-xl">
                    {stat.icon}
                  </div>

                </div>

                <h3 className="font-bold text-xl text-red-400 mb-2">
                  {stat.label}
                </h3>

                <p className="text-gray-300">
                  {stat.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* 6. CTA Section */}
      <section className="py-24 bg-red-700 text-white relative overflow-hidden">

        <div className="max-w-5xl mx-auto px-6 text-center relative z-20">

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {p.transformOrchard}
          </h2>

          <p className="text-xl text-red-100 mb-10 max-w-3xl mx-auto">
            {p.ctaDescription}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">

            <Link
              to="/contactos"
              className="group px-10 py-5 bg-white text-red-900 rounded-xl hover:bg-red-50 transition-all duration-300 font-bold text-lg shadow-2xl hover:shadow-3xl flex items-center gap-3 min-w-[240px] justify-center"
            >

              {p.contactSales}

              <ArrowRight
                className="group-hover:translate-x-1 transition-transform"
                size={20}
              />

            </Link>

            <button
              onClick={() => setIsVideoOpen(true)}
              className="px-10 py-5 bg-transparent border-2 border-white/30 text-white rounded-xl hover:bg-white/10 transition-all duration-300 font-bold text-lg flex items-center gap-3 min-w-[240px] justify-center"
            >

              <Play size={20} />

              {p.watchDemo}

            </button>

          </div>

          <p className="mt-8 text-red-200 text-sm">
            {p.ctaSubtitle}
          </p>

        </div>

      </section>

      {/* Floating Button */}
      <div className="fixed bottom-8 right-8 z-40">

        <Link
          to="/ficha-tecnica/R200"
          className="group flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-red-600 to-cyan-600 text-white rounded-full shadow-2xl hover:shadow-3xl font-semibold hover:from-red-700 hover:to-cyan-700 transition-all duration-300"
        >

          <FileText size={22} />

          <span>
            {p.technicalSpecifications}
          </span>

          <ArrowRight
            className="group-hover:translate-x-1 transition-transform"
            size={18}
          />

        </Link>

      </div>

      {/* Video Modal */}
      {isVideoOpen && (

        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 animate-fade-in">

          <div className="relative w-full max-w-6xl">

            <div className="aspect-video bg-black rounded-2xl overflow-hidden">

              <iframe
                src="https://www.youtube.com/embed/2r66K-aK_BE?autoplay=1&controls=1&modestbranding=1&rel=0"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={`${p.model} Demonstration`}
              />

            </div>

            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute -top-16 right-0 text-white hover:text-gray-300 transition-colors flex items-center gap-2"
            >

              <span className="text-sm">
                {p.close}
              </span>

              <X size={24} />

            </button>

          </div>

        </div>

      )}

    </div>
  );
}

/*
 * Pequeno componente auxiliar para manter
 * o ícone de velocidade/controlo isolado.
 */
function GaugeIcon({
  className,
  size
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      width={size || 24}
      height={size || 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 14l4-4" />
      <path d="M3.34 19a10 10 0 1 1 17.32 0" />
      <path d="M8 18h8" />
      <path d="M12 18v2" />
    </svg>
  );
}
