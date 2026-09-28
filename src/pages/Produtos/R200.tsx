import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle,
  Play,
  X,
  ChevronRight,
  Leaf,
  Navigation,
  Gauge,
  Camera,
  Droplets,
  ShieldCheck,
  Route,
  Map,
  Radio,
  BatteryCharging,
  Sprout,
  Tractor,
  Settings,
  Eye,
  Crosshair
} from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../translations';

const pageTexts = {
  pt: {
    hero: {
      autoSprayingTech: 'VEÍCULO AGRÍCOLA AUTÓNOMO',
      model: 'XAG R200',
      heroDescription:
        'Veículo agrícola autónomo desenvolvido para pulverização de precisão em pomares, vinhas e outras culturas de linhas. A combinação entre tração 6x6, navegação inteligente e sistema RevoSpray permite realizar aplicações controladas mesmo em ambientes agrícolas exigentes.',
      viewSpecs: 'Ver Ficha Técnica',
      watchVideo: 'Ver Vídeo'
    },

    features: [
      {
        icon: Droplets,
        title: 'RevoSpray 240 L',
        description: 'Sistema de pulverização equipado com 4 bombas e 4 JetSprayers.'
      },
      {
        icon: Navigation,
        title: 'Navegação Autónoma',
        description: 'SuperX 5 Ultra com posicionamento RTK e seguimento inteligente de trajetórias.'
      },
      {
        icon: Tractor,
        title: 'Tração 6x6',
        description: 'Seis rodas com acionamento independente para maior controlo sobre o terreno.'
      },
      {
        icon: Camera,
        title: 'Visão em Tempo Real',
        description: 'Câmara FPV integrada e controlo remoto através do comando SRC 5.'
      }
    ],

    precision: {
      badge: 'SISTEMA REVOSPRAY',
      title1: 'Pulverização',
      title2: 'Direcionada',
      description:
        'O XAG R200 foi desenvolvido para levar o tratamento diretamente à vegetação. O sistema RevoSpray combina quatro bombas de impulsor flexível com quatro atomizadores centrífugos JetSprayer, permitindo ajustar a aplicação às características da cultura e da operação.',
      features: [
        {
          icon: Droplets,
          title: 'Depósito de 240 L',
          description:
            'Depósito inteligente equipado com sensor de nível de líquido para acompanhamento da capacidade durante a operação.'
        },
        {
          icon: Gauge,
          title: 'Até 16 L/min',
          description:
            'Quatro bombas de impulsor flexível permitem atingir um caudal combinado máximo de 16 litros por minuto.'
        },
        {
          icon: Settings,
          title: 'Gotas de 60–200 μm',
          description:
            'Atomização centrífuga ajustável para adaptar o tamanho da gota às necessidades da aplicação.'
        },
        {
          icon: Eye,
          title: 'Distribuição de Ar',
          description:
            'Os JetSprayers direcionam o fluxo de ar e a pulverização para favorecer a penetração no interior da copa.'
        }
      ],
      stat: {
        value: '7 m',
        label: 'Alcance horizontal máximo por lado*'
      },
      note: '* O alcance efetivo depende das condições de operação, cultura e configuração da aplicação.'
    },

    navigation: {
      badge: 'NAVEGAÇÃO E AUTOMAÇÃO',
      title1: 'Percursos',
      title2: 'Inteligentes e Repetíveis',
      description:
        'O R200 utiliza o sistema SuperX 5 Ultra para transformar operações manuais em percursos programados. O equipamento pode seguir trajetórias definidas, corrigir desvios durante o movimento e repetir percursos previamente registados.',
      features: [
        {
          icon: Route,
          title: 'Path Tracking',
          description:
            'Algoritmos de visão identificam a trajetória e corrigem desvios em tempo real.'
        },
        {
          icon: Radio,
          title: 'Posicionamento RTK',
          description:
            'Posicionamento de elevada precisão através de RTK para manter o equipamento na trajetória definida.'
        },
        {
          icon: Map,
          title: 'RealTerra',
          description:
            'Mapeamento a bordo através de imagens captadas durante a primeira passagem manual.'
        },
        {
          icon: Route,
          title: 'Repeat Mode',
          description:
            'Registo de uma passagem inicial para posterior repetição autónoma do mesmo percurso.'
        }
      ]
    },

    control: {
      badge: 'CONTROLO DO EQUIPAMENTO',
      title1: 'Operação',
      title2: 'à Distância',
      description:
        'O comando SRC 5 concentra a informação e o controlo do R200 numa interface desenvolvida para utilização no campo. O operador pode acompanhar a operação, visualizar a imagem da câmara e gerir os percursos programados.',
      features: [
        {
          icon: Camera,
          title: 'Ecrã de 7"',
          description:
            'Ecrã tátil de elevada luminosidade, preparado para utilização em ambientes exteriores.'
        },
        {
          icon: Eye,
          title: 'Vista FPV',
          description:
            'Câmara com campo de visão horizontal de até 150° para acompanhamento da operação.'
        },
        {
          icon: Gauge,
          title: 'Cruise Mode',
          description:
            'Controlo da velocidade de deslocação entre 0,1 e 1,5 m/s durante a operação.'
        },
        {
          icon: ShieldCheck,
          title: 'Assistência à Segurança',
          description:
            'Sistema de deteção de obstáculos e pessoas para apoio à condução autónoma.'
        }
      ]
    },

    structure: {
      badge: 'CONSTRUÇÃO PARA O CAMPO',
      title1: 'Tração',
      title2: '6x6 • Estrutura Compacta',
      description:
        'A arquitetura do R200 foi pensada para circular entre linhas de cultivo. O chassis em alumínio, o eixo portal suspenso e os seis motores independentes proporcionam uma plataforma elétrica compacta para operações agrícolas.',
      features: [
        {
          icon: Tractor,
          title: 'Tração Independente',
          description:
            'Seis rodas acionadas individualmente para melhorar a capacidade de progressão em diferentes condições de terreno.'
        },
        {
          icon: Gauge,
          title: '1,5 m/s',
          description:
            'Velocidade máxima de deslocação para adaptar o ritmo de trabalho às condições da operação.'
        },
        {
          icon: Sprout,
          title: '270 mm de Altura ao Solo',
          description:
            'Maior espaço livre inferior para circulação em terrenos agrícolas e entre culturas.'
        },
        {
          icon: BatteryCharging,
          title: 'Propulsão Elétrica',
          description:
            'Sistema de acionamento elétrico alimentado por bateria inteligente XAG.'
        }
      ]
    },

    cta: {
      title: 'Leve a Automação para o Seu Pomar',
      description:
        'O XAG R200 combina pulverização de precisão, navegação autónoma, mapeamento e tração 6x6 numa única plataforma agrícola. Uma solução concebida para tornar operações repetitivas mais controladas e consistentes.',
      button: 'Conhecer o XAG R200'
    },

    video: {
      title: 'XAG R200 em Operação',
      description:
        'Veja o XAG R200 a trabalhar em ambiente agrícola e conheça o funcionamento da plataforma autónoma.',
      videoTitle: 'XAG R200 Autonomous Agricultural Rover'
    },

    floating: {
      technicalSheet: 'Ficha Técnica'
    }
  },

  en: {
    hero: {
      autoSprayingTech: 'AUTONOMOUS AGRICULTURAL VEHICLE',
      model: 'XAG R200',
      heroDescription:
        'An autonomous agricultural vehicle developed for precision spraying in orchards, vineyards and other row crops. The combination of 6x6 traction, intelligent navigation and the RevoSpray system enables controlled applications in demanding agricultural environments.',
      viewSpecs: 'View Technical Sheet',
      watchVideo: 'Watch Video'
    },

    features: [
      {
        icon: Droplets,
        title: '240 L RevoSpray',
        description: 'Spraying system equipped with 4 pumps and 4 JetSprayers.'
      },
      {
        icon: Navigation,
        title: 'Autonomous Navigation',
        description: 'SuperX 5 Ultra with RTK positioning and intelligent path tracking.'
      },
      {
        icon: Tractor,
        title: '6x6 Traction',
        description: 'Six independently driven wheels for greater control over the terrain.'
      },
      {
        icon: Camera,
        title: 'Real-Time Vision',
        description: 'Integrated FPV camera and remote control through the SRC 5 controller.'
      }
    ],

    precision: {
      badge: 'REVOSPRAY SYSTEM',
      title1: 'Targeted',
      title2: 'Spraying',
      description:
        'The XAG R200 was designed to deliver treatment directly to the crop canopy. The RevoSpray system combines four flexible impeller pumps with four centrifugal JetSprayers, allowing the application to be adapted to crop and operational requirements.',
      features: [
        {
          icon: Droplets,
          title: '240 L Tank',
          description:
            'Smart tank equipped with a liquid-level sensor for monitoring capacity during operation.'
        },
        {
          icon: Gauge,
          title: 'Up to 16 L/min',
          description:
            'Four flexible impeller pumps provide a combined maximum flow rate of 16 litres per minute.'
        },
        {
          icon: Settings,
          title: '60–200 μm Droplets',
          description:
            'Adjustable centrifugal atomization for adapting droplet size to application requirements.'
        },
        {
          icon: Eye,
          title: 'Air-Assisted Distribution',
          description:
            'JetSprayers direct airflow and spray toward the crop to support penetration into the canopy.'
        }
      ],
      stat: {
        value: '7 m',
        label: 'Maximum horizontal range per side*'
      },
      note: '* Effective range depends on operating conditions, crop and application configuration.'
    },

    navigation: {
      badge: 'NAVIGATION & AUTOMATION',
      title1: 'Smart and',
      title2: 'Repeatable Paths',
      description:
        'The R200 uses the SuperX 5 Ultra system to turn manual operations into programmed routes. The vehicle can follow defined paths, correct deviations while moving and repeat previously recorded routes.',
      features: [
        {
          icon: Route,
          title: 'Path Tracking',
          description:
            'Vision algorithms identify the route and correct deviations in real time.'
        },
        {
          icon: Radio,
          title: 'RTK Positioning',
          description:
            'High-precision positioning through RTK to maintain the defined trajectory.'
        },
        {
          icon: Map,
          title: 'RealTerra',
          description:
            'Onboard mapping using images captured during the first manual pass.'
        },
        {
          icon: Route,
          title: 'Repeat Mode',
          description:
            'Records an initial pass for autonomous repetition of the same route.'
        }
      ]
    },

    control: {
      badge: 'EQUIPMENT CONTROL',
      title1: 'Remote',
      title2: 'Operation',
      description:
        'The SRC 5 controller brings R200 information and control into an interface designed for field operation. The operator can monitor the vehicle, view the camera feed and manage programmed routes.',
      features: [
        {
          icon: Camera,
          title: '7" Display',
          description:
            'High-brightness touchscreen designed for outdoor operation.'
        },
        {
          icon: Eye,
          title: 'FPV View',
          description:
            'Camera with up to 150° horizontal field of view for monitoring operations.'
        },
        {
          icon: Gauge,
          title: 'Cruise Mode',
          description:
            'Travel speed control from 0.1 to 1.5 m/s during operation.'
        },
        {
          icon: ShieldCheck,
          title: 'Safety Assistance',
          description:
            'Obstacle and pedestrian detection system to support autonomous operation.'
        }
      ]
    },

    structure: {
      badge: 'BUILT FOR FIELD OPERATIONS',
      title1: '6x6 Traction',
      title2: 'Compact Agricultural Platform',
      description:
        'The R200 architecture was designed to move between crop rows. Its aluminum chassis, suspended portal axle and six independent motors provide a compact electric platform for agricultural operations.',
      features: [
        {
          icon: Tractor,
          title: 'Independent Drive',
          description:
            'Six individually driven wheels improve vehicle progression across different terrain conditions.'
        },
        {
          icon: Gauge,
          title: '1.5 m/s',
          description:
            'Maximum travel speed to adapt the operating pace to field conditions.'
        },
        {
          icon: Sprout,
          title: '270 mm Ground Clearance',
          description:
            'Increased underbody clearance for operation across agricultural terrain and crop rows.'
        },
        {
          icon: BatteryCharging,
          title: 'Electric Drive',
          description:
            'Electric drive system powered by an XAG intelligent battery.'
        }
      ]
    },

    cta: {
      title: 'Bring Automation to Your Orchard',
      description:
        'The XAG R200 combines precision spraying, autonomous navigation, mapping and 6x6 traction in a single agricultural platform. A solution designed to make repetitive operations more controlled and consistent.',
      button: 'Discover the XAG R200'
    },

    video: {
      title: 'XAG R200 in Operation',
      description:
        'Watch the XAG R200 operating in an agricultural environment and explore how the autonomous platform works.',
      videoTitle: 'XAG R200 Autonomous Agricultural Rover'
    },

    floating: {
      technicalSheet: 'Technical Sheet'
    }
  }
};

const R200 = () => {
  const { activeLanguage } = useLanguage();
  const [showVideo, setShowVideo] = useState(false);

  const currentLanguage = activeLanguage === 'en' ? 'en' : 'pt';
  const t = pageTexts[currentLanguage];

  const featureCards = useMemo(() => t.features, [t]);

  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            <Link to="/" className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="FieldAirTech"
                className="h-10 w-auto"
              />
            </Link>

            <div className="flex items-center gap-4">
              <Link
                to="/ficha-tecnica/R200"
                className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
              >
                <Settings size={18} />
                {t.floating.technicalSheet}
              </Link>
            </div>

          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-60 pb-20 bg-gray-50 relative overflow-hidden">

        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

          <div className="max-w-4xl">

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-sm font-bold tracking-wide mb-6">
              <Leaf size={16} />
              {t.hero.autoSprayingTech}
            </div>

            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
              {t.hero.model}
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mb-10">
              {t.hero.heroDescription}
            </p>

            <div className="flex flex-wrap gap-4">

              <Link
                to="/ficha-tecnica/R200"
                className="inline-flex items-center gap-3 px-7 py-4 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-700 transition-all"
              >
                {t.hero.viewSpecs}
                <ArrowRight size={20} />
              </Link>

              <button
                onClick={() => setShowVideo(true)}
                className="inline-flex items-center gap-3 px-7 py-4 bg-white border border-gray-200 text-gray-900 rounded-xl font-bold hover:bg-gray-50 transition-all"
              >
                <Play size={20} />
                {t.hero.watchVideo}
              </button>

            </div>

          </div>

        </div>
      </section>

      {/* FEATURE CARDS */}
      <section className="py-16 bg-white">

        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            {featureCards.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={index}
                  className="p-7 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5">
                    <Icon size={24} />
                  </div>

                  <h3 className="text-xl font-bold mb-3">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}

          </div>

        </div>
      </section>

      {/* VIDEO */}
      <section className="py-20 bg-gray-900">

        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="max-w-3xl mb-10">
            <div className="text-emerald-400 font-bold tracking-widest text-sm mb-4">
              XAG R200
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-white mb-5">
              {t.video.title}
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed">
              {t.video.description}
            </p>
          </div>

          <div className="relative w-full aspect-video rounded-3xl overflow-hidden bg-black shadow-2xl">

            <iframe
              src="https://www.youtube-nocookie.com/embed/2r66K-aK_BE?autoplay=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=2r66K-aK_BE&showinfo=0&iv_load_policy=3&disablekb=1&fs=0&playsinline=1"
              className="absolute inset-0 w-full h-full"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title={t.video.videoTitle}
            />

          </div>

        </div>
      </section>

      {/* PRECISION SPRAYING */}
      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <div className="text-emerald-600 font-bold tracking-widest text-sm mb-5">
                {t.precision.badge}
              </div>

              <h2 className="text-5xl md:text-6xl font-black leading-tight mb-7">
                {t.precision.title1}
                <br />
                <span className="text-emerald-600">
                  {t.precision.title2}
                </span>
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed mb-10">
                {t.precision.description}
              </p>

              <div className="space-y-7">

                {t.precision.features.map((feature, index) => {
                  const Icon = feature.icon;

                  return (
                    <div key={index} className="flex gap-4">

                      <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                        <Icon size={21} />
                      </div>

                      <div>
                        <h3 className="font-bold text-lg mb-1">
                          {feature.title}
                        </h3>

                        <p className="text-gray-600 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>

                    </div>
                  );
                })}

              </div>

            </div>

            <div className="relative">

              <div className="rounded-3xl bg-gray-900 p-10 md:p-14 overflow-hidden">

                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl" />

                <div className="relative">

                  <div className="text-emerald-400 text-sm font-bold tracking-widest mb-6">
                    REVOSPRAY
                  </div>

                  <div className="text-7xl md:text-8xl font-black text-white mb-3">
                    {t.precision.stat.value}
                  </div>

                  <div className="text-xl text-gray-300 max-w-xs">
                    {t.precision.stat.label}
                  </div>

                  <div className="mt-12 pt-8 border-t border-white/10">

                    <div className="flex items-center gap-3 text-white mb-4">
                      <Droplets className="text-emerald-400" size={22} />
                      <span className="font-bold">
                        240 L
                      </span>
                      <span className="text-gray-400">
                        RevoSpray
                      </span>
                    </div>

                    <div className="flex items-center gap-3 text-white mb-4">
                      <Gauge className="text-emerald-400" size={22} />
                      <span className="font-bold">
                        16 L/min
                      </span>
                      <span className="text-gray-400">
                        {currentLanguage === 'pt'
                          ? 'caudal máximo'
                          : 'maximum flow'}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 text-white">
                      <Crosshair className="text-emerald-400" size={22} />
                      <span className="font-bold">
                        60–200 μm
                      </span>
                      <span className="text-gray-400">
                        {currentLanguage === 'pt'
                          ? 'tamanho da gota'
                          : 'droplet size'}
                      </span>
                    </div>

                  </div>

                  <p className="text-gray-500 text-xs mt-10 leading-relaxed">
                    {t.precision.note}
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* NAVIGATION */}
      <section className="py-24 bg-gray-50">

        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="max-w-3xl mb-14">

            <div className="text-emerald-600 font-bold tracking-widest text-sm mb-5">
              {t.navigation.badge}
            </div>

            <h2 className="text-5xl md:text-6xl font-black leading-tight mb-7">
              {t.navigation.title1}
              <br />
              <span className="text-emerald-600">
                {t.navigation.title2}
              </span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              {t.navigation.description}
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {t.navigation.features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm"
                >

                  <div className="w-12 h-12 bg-gray-900 text-white rounded-xl flex items-center justify-center mb-6">
                    <Icon size={23} />
                  </div>

                  <h3 className="font-bold text-xl mb-3">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>
      </section>

      {/* CONTROL */}
      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div className="order-2 lg:order-1">

              <div className="grid sm:grid-cols-2 gap-5">

                {t.control.features.map((feature, index) => {
                  const Icon = feature.icon;

                  return (
                    <div
                      key={index}
                      className="rounded-2xl border border-gray-100 p-6"
                    >

                      <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5">
                        <Icon size={21} />
                      </div>

                      <h3 className="font-bold text-lg mb-2">
                        {feature.title}
                      </h3>

                      <p className="text-gray-600 text-sm leading-relaxed">
                        {feature.description}
                      </p>

                    </div>
                  );
                })}

              </div>

            </div>

            <div className="order-1 lg:order-2">

              <div className="text-emerald-600 font-bold tracking-widest text-sm mb-5">
                {t.control.badge}
              </div>

              <h2 className="text-5xl md:text-6xl font-black leading-tight mb-7">
                {t.control.title1}
                <br />
                <span className="text-emerald-600">
                  {t.control.title2}
                </span>
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed">
                {t.control.description}
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* STRUCTURE */}
      <section className="py-24 bg-gray-900">

        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="max-w-3xl mb-14">

            <div className="text-emerald-400 font-bold tracking-widest text-sm mb-5">
              {t.structure.badge}
            </div>

            <h2 className="text-5xl md:text-6xl font-black text-white leading-tight mb-7">
              {t.structure.title1}
              <br />
              <span className="text-emerald-400">
                {t.structure.title2}
              </span>
            </h2>

            <p className="text-lg text-gray-300 leading-relaxed">
              {t.structure.description}
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {t.structure.features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-2xl p-7"
                >

                  <div className="w-12 h-12 bg-emerald-500/10 text-emerald-400 rounded-xl flex items-center justify-center mb-6">
                    <Icon size={23} />
                  </div>

                  <h3 className="font-bold text-xl text-white mb-3">
                    {feature.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-emerald-600">

        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">

          <h2 className="text-5xl md:text-6xl font-black text-white mb-7">
            {t.cta.title}
          </h2>

          <p className="text-xl text-emerald-50 leading-relaxed max-w-3xl mx-auto mb-10">
            {t.cta.description}
          </p>

          <Link
            to="/ficha-tecnica/R200"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-emerald-700 rounded-xl font-bold hover:bg-gray-50 transition-all"
          >
            {t.cta.button}
            <ArrowRight size={21} />
          </Link>

        </div>

      </section>

      {/* FLOATING TECHNICAL SHEET BUTTON */}
      <Link
        to="/ficha-tecnica/R200"
        className="fixed bottom-6 right-6 z-40 hidden md:flex items-center gap-2 px-5 py-3 bg-gray-900 text-white rounded-full shadow-xl hover:bg-gray-800 transition-all"
      >
        <Settings size={18} />
        {t.floating.technicalSheet}
        <ChevronRight size={17} />
      </Link>

      {/* VIDEO MODAL */}
      {showVideo && (
        <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-5">

          <div className="relative w-full max-w-6xl aspect-video bg-black rounded-2xl overflow-hidden">

            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-4 right-4 z-10 w-11 h-11 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-black transition-colors"
              aria-label="Close video"
            >
              <X size={24} />
            </button>

            <iframe
              src="https://www.youtube-nocookie.com/embed/2r66K-aK_BE?autoplay=1&controls=1&modestbranding=1&rel=0"
              className="absolute inset-0 w-full h-full"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title={t.video.videoTitle}
            />

          </div>

        </div>
      )}

    </div>
  );
};

export default R200;
