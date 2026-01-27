import { useEffect, useState, useRef } from 'react';
import ProductCarousel from '../components/ProductCarousel';
import StatsCounter from '../components/StatsCounter';
import p150maxImg from '../assets/p150max.jpg';
import { useLanguage } from '../contexts/LanguageContext';
import {
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  Target,
  Zap,
  Shield,
  Globe,
  ArrowRight,
  Check,
  Award,
  MapPin,
  Phone,
  Mail,
} from 'lucide-react';


export default function Home() {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = 'FieldAirTech | Tecnologia Agrícola de Precisão';
  }, []);

  const [currentDroneImage, setCurrentDroneImage] = useState(p150maxImg);
  const [activeVideo, setActiveVideo] = useState(true);

  // Dados dos produtos (agora dentro do componente ou pode manter fora)
  const drones = [
    {
      id: 'p150-max',
      name: 'XAG P150 Max',
      image: p150maxImg,
      description: 'Capacidade 40L • 16ha/h • Tecnologia VTOL',
      specs: ['40L Tanque', '16 ha/h', 'VTOL'],
      category: 'Drone de Pulverização',
  },
  {
    id: 'p100-pro',
    name: 'TopXGun FP700',
    image: 'https://i.imgur.com/EjmNvne.jpeg',
    description: 'Precisão centimétrica • Radar 3D',
    specs: ['25L Tanque', '10 ha/h', 'Radar 3D'],
    category: 'Drone de Pulverização',
  },
];

const rovers = [
  {
    id: 's1000',
    name: 'LJ Tech S1000',
    image: 'https://i.imgur.com/UBfflHF.jpeg',
    description: 'Rover autónomo • Todo-terreno',
    specs: ['150L Tanque', '8 ha/h', '4WD'],
    category: 'Rover Agrícola',
  },
  {
    id: 's500-pro',
    name: 'LJ Tech S500 Pro',
    image: 'https://i.imgur.com/QZyuxij.png',
    description: 'Compacto • Preciso • Eficiente',
    specs: ['80L Tanque', '5 ha/h', 'GPS RTK'],
    category: 'Rover Agrícola',
  },
  {
    id: 's450',
    name: 'XAG R-200',
    image: 'https://i.imgur.com/ZINKkfN.jpeg',
    description: 'Automação total • Alta produtividade',
    specs: ['GPS RTK', 'Autónomo', 'Longa autonomia'],
    category: 'Rover Agrícola',
  },
];

const gpsSystems = [
  {
    id: 'xag-apc2',
    name: 'XAG APC2',
    image: 'https://i.imgur.com/gtizIph.png',
    description: 'Piloto automático • Precisão RTK',
    specs: ['Precisão 2.5cm', 'Compatível XAG', 'Fácil instalação'],
    category: 'GPS para Trator',
  },
  {
    id: 'nst-gps',
    name: 'NST GPS',
    image: 'https://i.imgur.com/t2NrTUH.jpeg',
    description: 'Sistema profissional • Alta precisão',
    specs: ['RTK Correção', 'Multi-marca', 'Interface intuitiva'],
    category: 'GPS para Trator',
  },
];

const stats = [
  {
    value: 200,
    suffix: '+',
    label: 'Agricultores',
    description: 'Em Portugal',
  },
  {
    value: 60000,
    suffix: '+',
    label: 'Hectares',
    description: 'Tratados',
  },
  {
    value: 95,
    suffix: '%',
    label: 'Satisfação',
    description: 'Dos clientes',
  },
  {
    value: 40,
    suffix: '%',
    label: 'Economia',
    description: 'Redução de custos',
  },
];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ================================ */}
      {/* HERO SECTION - COM IMAGEM DE FUNDO */}
      {/* ================================ */}
      <section className="relative h-[80vh] md:h-[90vh] flex items-center pt-16">
        {/* Background com overlay */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://i.imgur.com/WAuTNDZ.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        />
        
        {/* Conteúdo Hero */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600/90 backdrop-blur-sm rounded-full mb-6">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="text-white text-sm font-semibold">
                {t('hero.officialDistributor')}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {t('hero.title')} <span className="text-emerald-400"></span>
            </h1>

            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
              {t('hero.description')}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#produtos"
                className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-emerald-500/25"
              >
                <span className="flex items-center gap-3">
                  <Target className="w-5 h-5" />
                  {t('hero.viewSolutions')}
                </span>
              </a>

              <a
                href="/contactos"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
              >
                <span className="flex items-center gap-3">
                  <Phone className="w-5 h-5" />
                  {t('hero.contactNow')}
                </span>
              </a>
            </div>

            {/* Indicadores de confiança */}
            <div className="flex flex-wrap gap-6 mt-12">
              {[
                t('hero.trust1'),
                t('hero.trust2'),
                t('hero.trust3'),
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-gray-300">
                  <Check className="w-4 h-4 text-green-400" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <ChevronRight className="w-6 h-6 text-white transform rotate-90" />
          </div>
        </div>
      </section>

      {/* ================================ */}
      {/* STATS COUNTER */}
      {/* ================================ */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StatsCounter
                key={index}
                endValue={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                description={stat.description}
                duration={2}
                className="text-center"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ================================ */}
      {/* CARROSSEL DE PRODUTOS - DRONES */}
      {/* ================================ */}
      <section id="produtos" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              <span className="text-emerald-600">{t('products.drones')}</span> 
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              {t('products.description')}
            </p>
          </div>
          <ProductCarousel items={drones} />
        </div>
      </section>

      {/* ================================ */}
      {/* CARROSSEL DE PRODUTOS - ROVERS */}
      {/* ================================ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              <span className="text-emerald-600">{t('products.rovers')}</span> 
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              {t('products.terrestrial')}
            </p>
          </div>
          <ProductCarousel items={rovers} />
        </div>
      </section>

      {/* ================================ */}
      {/* CARROSSEL DE PRODUTOS - GPS */}
      {/* ================================ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t('products.gpsSystems')}
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              {t('products.autopilot')}
            </p>
          </div>
          <ProductCarousel items={gpsSystems} />
        </div>
      </section>

      {/* ================================ */}
      {/* SOBRE A EMPRESA */}
      {/* ================================ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {t('about.title')}
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  {t('about.description1')}
                </p>
                <p>
                  {t('about.description2')}
                </p>
                <p>
                  {t('about.description3')}
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://i.imgur.com/Dd4JIQy.jpeg"
                  alt="Agricultura de precisão em Portugal"
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-emerald-600 text-white p-6 rounded-xl shadow-xl">
                <div className="text-4xl font-bold">200+</div>
                <div className="text-sm font-medium">{t('about.happyClients')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================ */}
      {/* CTA FINAL */}
      {/* ================================ */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-green-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Award className="w-16 h-16 text-white mx-auto mb-6" />

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            {t('cta.ready')}
          </h2>

          <p className="text-emerald-100 text-xl mb-10 max-w-2xl mx-auto">
            {t('cta.schedule')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contactos"
              className="px-10 py-4 bg-white text-emerald-700 rounded-lg font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
            >
              <span className="flex items-center justify-center gap-3">
                <Phone className="w-5 h-5" />
                {t('cta.schedule')}
              </span>
            </a>

            <a
              href="tel:+351934449370"
              className="px-10 py-4 bg-transparent border-2 border-white text-white rounded-lg font-bold text-lg hover:bg-white/10 transition-all duration-300"
            >
              <span className="flex items-center justify-center gap-3">
                <Phone className="w-5 h-5" />
                {t('cta.phone')}
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
