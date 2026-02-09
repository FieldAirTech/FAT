// src/pages/Noticias/NoticiaXAG.ts
import { useEffect, useState } from "react";
import { Calendar, User, Clock, Share2, Bookmark, ArrowLeft, Tag, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from '../../i18n/translations';

export const route = "/noticia-xag";

export default function NoticiaXAG() {
  const [noticia, setNoticia] = useState<any>(null);
  const { language } = useLanguage();
  const t = translations[language];

  // Page texts
  const pageTexts = {
    pt: {
      backButton: "Voltar às Notícias",
      readingTime: "min de leitura",
      views: "visualizações",
      author: "Autor",
      tagsLabel: "Tags:",
      saveButton: "Guardar",
      shareButton: "Partilhar",
      newsletterTitle: "Quer saber mais sobre drones agrícolas?",
      newsletterDescription: "Subscreva a nossa newsletter e receba as últimas novidades em tecnologia agrícola, lançamentos e dicas práticas.",
      emailPlaceholder: "Seu email",
      subscribeButton: "Subscrever",
      privacyNote: "Prometemos não enviar spam. Pode cancelar quando quiser.",
      relatedArticles: "Artigos Relacionados",
      newLaunch: "NOVO LANÇAMENTO",
      technology: "TECNOLOGIA",
      comingSoon: "Em breve...",
    },
    en: {
      backButton: "Back to News",
      readingTime: "min read",
      views: "views",
      author: "Author",
      tagsLabel: "Tags:",
      saveButton: "Save",
      shareButton: "Share",
      newsletterTitle: "Want to know more about agricultural drones?",
      newsletterDescription: "Subscribe to our newsletter and receive the latest news in agricultural technology, launches and practical tips.",
      emailPlaceholder: "Your email",
      subscribeButton: "Subscribe",
      privacyNote: "We promise not to send spam. You can cancel anytime.",
      relatedArticles: "Related Articles",
      newLaunch: "NEW LAUNCH",
      technology: "TECHNOLOGY",
      comingSoon: "Coming soon...",
    }
  };

  const p = pageTexts[language];

  useEffect(() => {
    // Mock data in both languages
    const noticiaData = language === 'pt' ? {
      titulo: "XAG revela drone P150 Max e rover série R na Agritechnica 2025",
      data: "2025-11-17",
      autor: "FieldAirTech",
      tempoLeitura: "8",
      visualizacoes: 1245,
      tags: ["XAG", "P150 Max", "Agritechnica", "Drone Agrícola", "Inovação"],
      resumo: "A XAG apresentou o P150 Max e o rover R Series na maior feira de tecnologia agrícola do mundo, reforçando a aposta na automação agrícola inteligente com capacidades revolucionárias.",
      conteudo: `
        <div class="space-y-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <img 
                src="https://i.imgur.com/TaHcbEe.jpeg" 
                alt="XAG P150 Max na Agritechnica 2025" 
                class="w-full h-72 object-cover rounded-xl shadow-lg"
              />
              <p class="text-gray-500 text-sm mt-2 text-center">XAG P150 Max em demonstração na Agritechnica</p>
            </div>
            <div>
              <img 
                src="https://i.imgur.com/ZINKkfN.jpeg" 
                alt="Rover série R da XAG" 
                class="w-full h-72 object-cover rounded-xl shadow-lg"
              />
              <p class="text-gray-500 text-sm mt-2 text-center">Rover série R - nova plataforma terrestre</p>
            </div>
          </div>

          <p class="text-lg text-gray-700 leading-relaxed">
            A XAG, líder mundial em tecnologia agrícola de precisão, marcou presença na Agritechnica 2025 
            com o lançamento do <strong>P150 Max</strong> e da <strong>Série R de rovers</strong>. 
            A feira, que aconteceu em Hanover, Alemanha, serviu de palco para apresentar as mais recentes 
            inovações que prometem revolucionar a agricultura digital.
          </p>

          <div class="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg my-8">
            <h3 class="text-xl font-bold text-gray-900 mb-4">Principais Características do P150 Max:</h3>
            <ul class="space-y-3">
              <li class="flex items-start">
                <div class="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                <span><strong>Capacidade de tanque</strong>: 150 litros - maior capacidade da categoria</span>
              </li>
              <li class="flex items-start">
                <div class="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                <span><strong>Tecnologia JetSprayer 3.0</strong>: Pulverização ultra-precisa com gotas uniformes</span>
              </li>
              <li class="flex items-start">
                <div class="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                <span><strong>Autonomia estendida</strong>: Até 20 minutos com carga completa</span>
              </li>
              <li class="flex items-start">
                <div class="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                <span><strong>SuperX 5.0</strong>: Sistema de inteligência artificial para navegação autónoma</span>
              </li>
              <li class="flex items-start">
                <div class="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                <span><strong>Carregamento rápido</strong>: 0-80% em apenas 10 minutos</span>
              </li>
            </ul>
          </div>

          <p class="text-lg text-gray-700 leading-relaxed">
            O <strong>P150 Max</strong> representa um salto tecnológico significativo em relação aos modelos anteriores. 
            Com um design aerodinâmico otimizado e materiais mais leves, oferece uma relação carga-eficiencia 
            inédita no mercado. O sistema de pulverização foi completamente redesenhado para garantir uma 
            distribuição mais uniforme e eficiente dos produtos fitofarmacêuticos.
          </p>

          <h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">Rover Série R: A Nova Fronteira Terrestre</h2>
          
          <p class="text-lg text-gray-700 leading-relaxed">
            Paralelamente ao drone, a XAG apresentou a <strong>Série R de rovers</strong> - uma nova linha de 
            veículos terrestres autónomos projetados para operações agrícolas em condições desafiadoras. 
            Estes rovers são especialmente adequados para pomares, vinhas e culturas em linha onde 
            os drones tradicionais têm limitações.
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div class="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <div class="text-lg font-bold text-blue-600 mb-3">R200</div>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <div class="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 mr-2"></div>
                  <span>Capacidade: 240 litros</span>
                </li>
                <li class="flex items-start">
                  <div class="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 mr-2"></div>
                  <span>Tração 6×6 independente</span>
                </li>
                <li class="flex items-start">
                  <div class="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 mr-2"></div>
                  <span>Alcance lateral: 7 metros</span>
                </li>
              </ul>
            </div>
            <div class="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <div class="text-lg font-bold text-blue-600 mb-3">R400 Pro</div>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <div class="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 mr-2"></div>
                  <span>Capacidade: 400 litros</span>
                </li>
                <li class="flex items-start">
                  <div class="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 mr-2"></div>
                  <span>Tração 8×8 com suspensão ativa</span>
                </li>
                <li class="flex items-start">
                  <div class="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 mr-2"></div>
                  <span>Alcance lateral: 10 metros</span>
                </li>
              </ul>
            </div>
          </div>

          <blockquote class="bg-gray-50 border-l-4 border-blue-600 p-8 rounded-r-xl my-10">
            <p class="text-xl italic text-gray-800 mb-4">
              "O P150 Max e a Série R representam nossa visão para o futuro da agricultura: 
              sistemas integrados que combinam a precisão aérea dos drones com a robustez terrestre 
              dos rovers. Estamos a criar ecossistemas completos de automação agrícola."
            </p>
            <div class="flex items-center">
              <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                <div class="text-blue-600 font-bold">JW</div>
              </div>
              <div>
                <div class="font-bold text-gray-900">Justin Gong</div>
                <div class="text-gray-600 text-sm">Co-fundador da XAG</div>
              </div>
            </div>
          </blockquote>

          <h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">Impacto no Mercado e Disponibilidade</h2>
          
          <p class="text-lg text-gray-700 leading-relaxed">
            Segundo a XAG, o P150 Max estará disponível para entrega a partir do primeiro trimestre de 2026, 
            enquanto os rovers da Série R iniciarão as entregas no segundo trimestre. A empresa já recebeu 
            mais de 5.000 reservas durante a feira, demonstrando o forte interesse do mercado.
          </p>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
            <div class="bg-white p-6 rounded-xl border border-gray-200 text-center shadow-sm">
              <div class="text-3xl font-bold text-blue-600 mb-2">5.000+</div>
              <div class="text-gray-700 font-medium">Reservas durante a feira</div>
            </div>
            <div class="bg-white p-6 rounded-xl border border-gray-200 text-center shadow-sm">
              <div class="text-3xl font-bold text-blue-600 mb-2">40%</div>
              <div class="text-gray-700 font-medium">Mais eficiente que modelos anteriores</div>
            </div>
            <div class="bg-white p-6 rounded-xl border border-gray-200 text-center shadow-sm">
              <div class="text-3xl font-bold text-blue-600 mb-2">2026 Q1</div>
              <div class="text-gray-700 font-medium">Disponibilidade P150 Max</div>
            </div>
          </div>

          <p class="text-lg text-gray-700 leading-relaxed">
            A Field AirTech, como distribuidor oficial da XAG em Portugal, já abriu a lista de espera 
            para estes novos produtos. Agricultores portugueses poderão testar as unidades de demonstração 
            a partir de janeiro de 2026, com condições especiais de pré-encomenda disponíveis.
          </p>

          <div class="bg-green-50 border border-green-200 rounded-xl p-6 mt-8">
            <h3 class="text-lg font-bold text-gray-900 mb-3">🛒 Pré-reserva disponível</h3>
            <p class="text-gray-700">
              A Field AirTech já aceita pré-reservas para o XAG P150 Max e rovers Série R. 
              Contacte-nos para garantir prioridade na entrega e condições especiais de lançamento.
            </p>
          </div>
        </div>
      `,
    } : {
      titulo: "XAG unveils P150 Max drone and R Series rover at Agritechnica 2025",
      data: "2025-11-17",
      autor: "FieldAirTech",
      tempoLeitura: "8",
      visualizacoes: 1245,
      tags: ["XAG", "P150 Max", "Agritechnica", "Agricultural Drone", "Innovation"],
      resumo: "XAG presented the P150 Max and R Series rover at the world's largest agricultural technology fair, reinforcing its commitment to intelligent agricultural automation with revolutionary capabilities.",
      conteudo: `
        <div class="space-y-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <img 
                src="https://i.imgur.com/TaHcbEe.jpeg" 
                alt="XAG P150 Max at Agritechnica 2025" 
                class="w-full h-72 object-cover rounded-xl shadow-lg"
              />
              <p class="text-gray-500 text-sm mt-2 text-center">XAG P150 Max demonstration at Agritechnica</p>
            </div>
            <div>
              <img 
                src="https://i.imgur.com/ZINKkfN.jpeg" 
                alt="XAG R Series rover" 
                class="w-full h-72 object-cover rounded-xl shadow-lg"
              />
              <p class="text-gray-500 text-sm mt-2 text-center">R Series rover - new ground platform</p>
            </div>
          </div>

          <p class="text-lg text-gray-700 leading-relaxed">
            XAG, a global leader in precision agricultural technology, made its mark at Agritechnica 2025 
            with the launch of the <strong>P150 Max</strong> and the <strong>R Series rovers</strong>. 
            The fair, held in Hanover, Germany, served as a stage to present the latest innovations 
            that promise to revolutionize digital agriculture.
          </p>

          <div class="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg my-8">
            <h3 class="text-xl font-bold text-gray-900 mb-4">Main Features of the P150 Max:</h3>
            <ul class="space-y-3">
              <li class="flex items-start">
                <div class="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                <span><strong>Tank capacity</strong>: 150 liters - largest in its category</span>
              </li>
              <li class="flex items-start">
                <div class="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                <span><strong>JetSprayer 3.0 technology</strong>: Ultra-precise spraying with uniform droplets</span>
              </li>
              <li class="flex items-start">
                <div class="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                <span><strong>Extended autonomy</strong>: Up to 20 minutes with full load</span>
              </li>
              <li class="flex items-start">
                <div class="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                <span><strong>SuperX 5.0</strong>: Artificial intelligence system for autonomous navigation</span>
              </li>
              <li class="flex items-start">
                <div class="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                <span><strong>Fast charging</strong>: 0-80% in just 10 minutes</span>
              </li>
            </ul>
          </div>

          <p class="text-lg text-gray-700 leading-relaxed">
            The <strong>P150 Max</strong> represents a significant technological leap compared to previous models. 
            With an optimized aerodynamic design and lighter materials, it offers an unprecedented 
            load-efficiency ratio in the market. The spraying system has been completely redesigned to ensure 
            more uniform and efficient distribution of phytopharmaceutical products.
          </p>

          <h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">R Series Rover: The New Terrestrial Frontier</h2>
          
          <p class="text-lg text-gray-700 leading-relaxed">
            Parallel to the drone, XAG presented the <strong>R Series rovers</strong> - a new line of 
            autonomous ground vehicles designed for agricultural operations in challenging conditions. 
            These rovers are especially suitable for orchards, vineyards and row crops where 
            traditional drones have limitations.
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div class="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <div class="text-lg font-bold text-blue-600 mb-3">R200</div>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <div class="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 mr-2"></div>
                  <span>Capacity: 240 liters</span>
                </li>
                <li class="flex items-start">
                  <div class="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 mr-2"></div>
                  <span>6×6 independent traction</span>
                </li>
                <li class="flex items-start">
                  <div class="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 mr-2"></div>
                  <span>Lateral reach: 7 meters</span>
                </li>
              </ul>
            </div>
            <div class="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <div class="text-lg font-bold text-blue-600 mb-3">R400 Pro</div>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <div class="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 mr-2"></div>
                  <span>Capacity: 400 liters</span>
                </li>
                <li class="flex items-start">
                  <div class="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 mr-2"></div>
                  <span>8×8 traction with active suspension</span>
                </li>
                <li class="flex items-start">
                  <div class="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 mr-2"></div>
                  <span>Lateral reach: 10 meters</span>
                </li>
              </ul>
            </div>
          </div>

          <blockquote class="bg-gray-50 border-l-4 border-blue-600 p-8 rounded-r-xl my-10">
            <p class="text-xl italic text-gray-800 mb-4">
              "The P150 Max and R Series represent our vision for the future of agriculture: 
              integrated systems that combine the aerial precision of drones with the terrestrial robustness 
              of rovers. We are creating complete agricultural automation ecosystems."
            </p>
            <div class="flex items-center">
              <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                <div class="text-blue-600 font-bold">JG</div>
              </div>
              <div>
                <div class="font-bold text-gray-900">Justin Gong</div>
                <div class="text-gray-600 text-sm">Co-founder of XAG</div>
              </div>
            </div>
          </blockquote>

          <h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">Market Impact and Availability</h2>
          
          <p class="text-lg text-gray-700 leading-relaxed">
            According to XAG, the P150 Max will be available for delivery starting in the first quarter of 2026, 
            while the R Series rovers will begin deliveries in the second quarter. The company has already received 
            over 5,000 reservations during the fair, demonstrating strong market interest.
          </p>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
            <div class="bg-white p-6 rounded-xl border border-gray-200 text-center shadow-sm">
              <div class="text-3xl font-bold text-blue-600 mb-2">5,000+</div>
              <div class="text-gray-700 font-medium">Reservations during the fair</div>
            </div>
            <div class="bg-white p-6 rounded-xl border border-gray-200 text-center shadow-sm">
              <div class="text-3xl font-bold text-blue-600 mb-2">40%</div>
              <div class="text-gray-700 font-medium">More efficient than previous models</div>
            </div>
            <div class="bg-white p-6 rounded-xl border border-gray-200 text-center shadow-sm">
              <div class="text-3xl font-bold text-blue-600 mb-2">2026 Q1</div>
              <div class="text-gray-700 font-medium">P150 Max availability</div>
            </div>
          </div>

          <p class="text-lg text-gray-700 leading-relaxed">
            Field AirTech, as the official XAG distributor in Portugal, has already opened the waiting list 
            for these new products. Portuguese farmers will be able to test demonstration units 
            from January 2026, with special pre-order conditions available.
          </p>

          <div class="bg-green-50 border border-green-200 rounded-xl p-6 mt-8">
            <h3 class="text-lg font-bold text-gray-900 mb-3">🛒 Pre-reservation available</h3>
            <p class="text-gray-700">
              Field AirTech is already accepting pre-reservations for the XAG P150 Max and R Series rovers. 
              Contact us to guarantee priority in delivery and special launch conditions.
            </p>
          </div>
        </div>
      `,
    };
    
    setNoticia(noticiaData);
  }, [language]);

  if (!noticia) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const options = language === 'pt' ? {
      day: "2-digit",
      month: "long",
      year: "numeric",
    } : {
      day: "2-digit",
      month: "long",
      year: "numeric",
    };

    const date = new Date(dateString);
    const formatted = date.toLocaleDateString(language === 'pt' ? 'pt-PT' : 'en-US', options);

    if (language === 'pt') {
      return formatted.replace(/ de ([a-z])/, (match, letter) => {
        return " de " + letter.toUpperCase();
      });
    }

    return formatted;
  };

  // Related articles content based on language
  const relatedArticles = language === 'pt' ? [
    {
      label: p.technology,
      title: "Campo Inteligente: a transformação tecnológica que está a redefinir o futuro agrícola",
      description: "A digitalização agrícola está a redefinir processos, reduzir custos em até 40% e aumentar a eficiência nas explorações agrícolas portuguesas.",
      color: "green",
      link: "/noticia-campo-inteligente",
    },
    {
      label: p.newLaunch,
      title: "Guia Completo: Como escolher o drone agrícola ideal para a sua exploração",
      description: "Análise detalhada das características, custos e benefícios dos principais modelos disponíveis no mercado em 2025.",
      color: "blue",
      comingSoon: true,
    }
  ] : [
    {
      label: p.technology,
      title: "Smart Field: the technological transformation redefining the agricultural future",
      description: "Agricultural digitization is redefining processes, reducing costs by up to 40% and increasing efficiency on Portuguese farms.",
      color: "green",
      link: "/news-smart-field",
    },
    {
      label: p.newLaunch,
      title: "Complete Guide: How to choose the ideal agricultural drone for your farm",
      description: "Detailed analysis of features, costs and benefits of the main models available on the market in 2025.",
      color: "blue",
      comingSoon: true,
    }
  ];

  return (
    <div className="pt-60 min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <div className="mb-8">
          <Link 
            to={language === 'pt' ? "/noticias" : "/news"}
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            <ArrowLeft className="mr-2" size={20} />
            {p.backButton}
          </Link>
        </div>

        {/* News Header */}
        <div className="mb-10">
          <div className="flex flex-wrap items-center gap-4 text-gray-500 text-sm mb-6">
            <div className="flex items-center gap-1">
              <Calendar size={16} />
              <span>{formatDate(noticia.data)}</span>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {noticia.titulo}
          </h1>

          <p className="text-xl text-gray-600 mb-8">
            {noticia.resumo}
          </p>

          {/* Author and Actions */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-6 border-t border-gray-200">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center">
                <User className="text-blue-600" size={24} />
              </div>
              <div>
                <div className="font-bold text-gray-900">{noticia.autor}</div>
                <div className="text-gray-600">{noticia.cargo}</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
                <Bookmark size={20} />
                <span className="hidden sm:inline">{p.saveButton}</span>
              </button>
              <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
                <Share2 size={20} />
                <span className="hidden sm:inline">{p.shareButton}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <Tag size={18} className="text-gray-500" />
            <span className="text-gray-700 font-medium">{p.tagsLabel}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {noticia.tags.map((tag: string, index: number) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* News Content */}
        <article className="prose prose-lg max-w-none">
          <div 
            className="text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: noticia.conteudo }}
          />
        </article>

        {/* Newsletter after article */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-10 text-white">
          <h3 className="text-2xl font-bold mb-4">{p.newsletterTitle}</h3>
          <p className="text-blue-100 mb-8">
            {p.newsletterDescription}
          </p>
          
          <form className="max-w-md">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder={p.emailPlaceholder}
                className="flex-grow px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap"
              >
                {p.subscribeButton}
              </button>
            </div>
            <p className="text-blue-200 text-sm mt-3">
              {p.privacyNote}
            </p>
          </form>
        </div>

        {/* Reading Suggestions */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">{p.relatedArticles}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedArticles.map((article, index) => (
              article.link ? (
                <Link 
                  key={index}
                  to={article.link} 
                  className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-3 h-3 bg-${article.color}-500 rounded-full`}></div>
                    <span className="text-sm font-medium text-gray-500">{article.label}</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h4>
                  <p className="text-gray-600">
                    {article.description}
                  </p>
                </Link>
              ) : (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-3 h-3 bg-${article.color}-500 rounded-full`}></div>
                    <span className="text-sm font-medium text-gray-500">{article.label}</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    {article.title}
                  </h4>
                  <p className="text-gray-600">
                    {article.description}
                  </p>
                  {article.comingSoon && (
                    <div className="mt-4 text-blue-600 font-medium">{p.comingSoon}</div>
                  )}
                </div>
              )
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
