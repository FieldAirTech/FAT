import { useEffect, useState } from "react";
import { Calendar, User, Clock, Share2, Bookmark, ArrowLeft, Tag, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from '../../i18n/translations';

export const route = "/noticia-campo-inteligente";

export default function NoticiaCampoInteligente() {
  const [noticia, setNoticia] = useState<any>(null);
  const { language } = useLanguage();
  const t = translations[language];

  // Page texts
  const pageTexts = {
    pt: {
      backButton: "Voltar às Notícias",
      readingTime: "de leitura",
      views: "visualizações",
      author: "Autor",
      tagsLabel: "Tags:",
      saveButton: "Guardar",
      shareButton: "Partilhar",
      newsletterTitle: "Gostou deste artigo?",
      newsletterDescription: "Subscreva a nossa newsletter e receba artigos como este diretamente no seu email, além das últimas novidades em tecnologia agrícola.",
      emailPlaceholder: "Seu email",
      subscribeButton: "Subscrever",
      privacyNote: "Prometemos não enviar spam. Pode cancelar quando quiser.",
      relatedArticles: "Artigos Relacionados",
      newLaunch: "NOVO LANÇAMENTO",
      practicalGuide: "GUIA PRÁTICO",
      comingSoon: "Em breve...",
    },
    en: {
      backButton: "Back to News",
      readingTime: "read",
      views: "views",
      author: "Author",
      tagsLabel: "Tags:",
      saveButton: "Save",
      shareButton: "Share",
      newsletterTitle: "Did you like this article?",
      newsletterDescription: "Subscribe to our newsletter and receive articles like this directly in your email, plus the latest news in agricultural technology.",
      emailPlaceholder: "Your email",
      subscribeButton: "Subscribe",
      privacyNote: "We promise not to send spam. You can cancel anytime.",
      relatedArticles: "Related Articles",
      newLaunch: "NEW LAUNCH",
      practicalGuide: "PRACTICAL GUIDE",
      comingSoon: "Coming soon...",
    }
  };

  const p = pageTexts[language];

  useEffect(() => {
    // Mock data in both languages
    const noticiaData = language === 'pt' ? {
      titulo: "Campo Inteligente: a transformação tecnológica que está a redefinir o futuro agrícola",
      data: "2025-11-15",
      autor: "Maria Santos",
      cargo: "Especialista em Agrotecnologia",
      tempoLeitura: "7",
      visualizacoes: 892,
      tags: ["Agricultura 4.0", "Digitalização", "Eficiência", "Portugal", "Tecnologia"],
      resumo: "A digitalização agrícola está a redefinir processos, reduzir custos em até 40% e aumentar a eficiência nas explorações agrícolas portuguesas.",
      conteudo: `
        <div class="space-y-8">
          <div class="grid grid-cols-2 gap-4 md:gap-6 mb-8">
            <div class="col-span-2 md:col-span-1">
              <img 
                src="https://i.imgur.com/rM5od2U.jpeg" 
                alt="Drone agrícola em operação" 
                class="w-full h-64 md:h-72 object-cover rounded-xl shadow-lg"
              />
              <p class="text-gray-500 text-sm mt-2 text-center">Drones de alta precisão em ação</p>
            </div>
            <div class="col-span-2 md:col-span-1">
              <img 
                src="https://i.imgur.com/OzYMit5.png" 
                alt="Agricultura de precisão" 
                class="w-full h-64 md:h-72 object-cover rounded-xl shadow-lg"
              />
              <p class="text-gray-500 text-sm mt-2 text-center">Sensores IoT no campo</p>
            </div>
            <div class="col-span-2 md:col-span-1">
              <img 
                src="https://i.imgur.com/6DqHpfS.jpeg" 
                alt="Sistema de irrigação inteligente" 
                class="w-full h-64 md:h-72 object-cover rounded-xl shadow-lg"
              />
              <p class="text-gray-500 text-sm mt-2 text-center">Irrigação inteligente</p>
            </div>
            <div class="col-span-2 md:col-span-1">
              <img 
                src="https://i.imgur.com/HhxmJRL.png"  
                alt="Monitorização em tempo real" 
                class="w-full h-64 md:h-72 object-cover rounded-xl shadow-lg"
              />
              <p class="text-gray-500 text-sm mt-2 text-center">Monitorização em tempo real</p>
            </div>
          </div>

          <p class="text-lg text-gray-700 leading-relaxed">
            A agricultura vive atualmente um dos períodos mais disruptivos da sua evolução. 
            A rápida progressão da automação agrícola está a transformar profundamente o 
            funcionamento das explorações rurais, dando origem a um novo modelo produtivo 
            baseado em precisão, eficiência operacional e análise avançada de dados em tempo real.
          </p>

          <p class="text-lg text-gray-700 leading-relaxed">
            As principais empresas tecnológicas e do setor agroindustrial têm intensificado 
            o investimento em soluções inteligentes, que já começam a alterar de forma 
            significativa o panorama agrícola português.
          </p>

          <div class="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg my-8">
            <h3 class="text-xl font-bold text-gray-900 mb-4">Tecnologias que estão a transformar a agricultura:</h3>
            <ul class="space-y-3">
              <li class="flex items-start">
                <div class="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                <span><strong>Drones de alta precisão</strong>, capazes de mapear culturas, analisar área de produção e aplicar insumos de forma seletiva</span>
              </li>
              <li class="flex items-start">
                <div class="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                <span><strong>Sensores IoT</strong>, que monitorizam em tempo real a humidade, temperatura, qualidade do solo e desenvolvimento das plantas</span>
              </li>
              <li class="flex items-start">
                <div class="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                <span><strong>Sistemas de rega autónomos</strong>, ajustando automaticamente o consumo de água de acordo com as necessidades reais de cada cultura</span>
              </li>
              <li class="flex items-start">
                <div class="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                <span><strong>Plataformas avançadas de gestão agrícola</strong>, capazes de processar grandes volumes de dados e gerar recomendações técnicas de alta precisão</span>
              </li>
            </ul>
          </div>

          <p class="text-lg text-gray-700 leading-relaxed">
            Estas soluções representam um salto tecnológico que promete redefinir os 
            padrões de eficiência, reduzir desperdícios em até <strong>40%</strong> e promover uma agricultura mais 
            sustentável, marcando uma mudança estrutural no futuro do setor agrícola português.
          </p>

          <blockquote class="bg-gray-50 border-l-4 border-green-600 p-8 rounded-r-xl my-10">
            <p class="text-xl italic text-gray-800 mb-4">
              "Estamos a assistir ao nascimento de uma nova agricultura, mais eficiente e com impacto ambiental reduzido. 
              O futuro do campo será digital e Portugal está na linha da frente desta transformação."
            </p>
            <div class="flex items-center">
              <div class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                <div class="text-green-600 font-bold">CM</div>
              </div>
              <div>
                <div class="font-bold text-gray-900">Dr. Carlos Mendes</div>
                <div class="text-gray-600 text-sm">Especialista em Agricultura Sustentável</div>
              </div>
            </div>
          </blockquote>

          <h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">Impacto na Agricultura Portuguesa</h2>
          
          <p class="text-lg text-gray-700 leading-relaxed">
            Em Portugal, agricultores das regiões do Alentejo, Ribatejo e Douro já reportam aumentos significativos 
            na produtividade após a adoção destas tecnologias. A redução no consumo de água chega aos 35% em algumas 
            culturas, enquanto o uso otimizado de fertilizantes e pesticidas diminui em média 25%.
          </p>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
            <div class="bg-white p-6 rounded-xl border border-gray-200 text-center shadow-sm">
              <div class="text-3xl font-bold text-green-600 mb-2">35%</div>
              <div class="text-gray-700 font-medium">Redução no consumo de água</div>
            </div>
            <div class="bg-white p-6 rounded-xl border border-gray-200 text-center shadow-sm">
              <div class="text-3xl font-bold text-green-600 mb-2">25%</div>
              <div class="text-gray-700 font-medium">Menos insumos químicos</div>
            </div>
            <div class="bg-white p-6 rounded-xl border border-gray-200 text-center shadow-sm">
              <div class="text-3xl font-bold text-green-600 mb-2">40%</div>
              <div class="text-gray-700 font-medium">Aumento na eficiência</div>
            </div>
          </div>

          <p class="text-lg text-gray-700 leading-relaxed">
            A Field AirTech tem desempenhado um papel crucial nesta transformação, fornecendo tecnologia de ponta 
            e formação especializada a centenas de agricultores portugueses. Através das soluções XAG e LJTech, 
            estamos a contribuir para uma agricultura mais inteligente, produtiva e sustentável.
          </p>
        </div>
      `,
    } : {
      titulo: "Smart Field: the technological transformation redefining the agricultural future",
      data: "2025-11-15",
      autor: "Maria Santos",
      cargo: "Agrotechnology Specialist",
      tempoLeitura: "7",
      visualizacoes: 892,
      tags: ["Agriculture 4.0", "Digitalization", "Efficiency", "Portugal", "Technology"],
      resumo: "Agricultural digitization is redefining processes, reducing costs by up to 40% and increasing efficiency on Portuguese farms.",
      conteudo: `
        <div class="space-y-8">
          <div class="grid grid-cols-2 gap-4 md:gap-6 mb-8">
            <div class="col-span-2 md:col-span-1">
              <img 
                src="https://i.imgur.com/rM5od2U.jpeg" 
                alt="Agricultural drone in operation" 
                class="w-full h-64 md:h-72 object-cover rounded-xl shadow-lg"
              />
              <p class="text-gray-500 text-sm mt-2 text-center">High-precision drones in action</p>
            </div>
            <div class="col-span-2 md:col-span-1">
              <img 
                src="https://i.imgur.com/OzYMit5.png" 
                alt="Precision agriculture" 
                class="w-full h-64 md:h-72 object-cover rounded-xl shadow-lg"
              />
              <p class="text-gray-500 text-sm mt-2 text-center">IoT sensors in the field</p>
            </div>
            <div class="col-span-2 md:col-span-1">
              <img 
                src="https://i.imgur.com/6DqHpfS.jpeg" 
                alt="Smart irrigation system" 
                class="w-full h-64 md:h-72 object-cover rounded-xl shadow-lg"
              />
              <p class="text-gray-500 text-sm mt-2 text-center">Smart irrigation</p>
            </div>
            <div class="col-span-2 md:col-span-1">
              <img 
                src="https://i.imgur.com/HhxmJRL.png"  
                alt="Real-time monitoring" 
                class="w-full h-64 md:h-72 object-cover rounded-xl shadow-lg"
              />
              <p class="text-gray-500 text-sm mt-2 text-center">Real-time monitoring</p>
            </div>
          </div>

          <p class="text-lg text-gray-700 leading-relaxed">
            Agriculture is currently experiencing one of the most disruptive periods in its evolution. 
            The rapid progression of agricultural automation is profoundly transforming the 
            functioning of rural farms, giving rise to a new production model 
            based on precision, operational efficiency and real-time advanced data analysis.
          </p>

          <p class="text-lg text-gray-700 leading-relaxed">
            Major technology companies and the agribusiness sector have intensified 
            investment in smart solutions, which are already beginning to significantly 
            change the Portuguese agricultural landscape.
          </p>

          <div class="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg my-8">
            <h3 class="text-xl font-bold text-gray-900 mb-4">Technologies transforming agriculture:</h3>
            <ul class="space-y-3">
              <li class="flex items-start">
                <div class="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                <span><strong>High-precision drones</strong>, capable of mapping crops, analyzing production areas and applying inputs selectively</span>
              </li>
              <li class="flex items-start">
                <div class="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                <span><strong>IoT sensors</strong>, which monitor in real time humidity, temperature, soil quality and plant development</span>
              </li>
              <li class="flex items-start">
                <div class="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                <span><strong>Autonomous irrigation systems</strong>, automatically adjusting water consumption according to the real needs of each crop</span>
              </li>
              <li class="flex items-start">
                <div class="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                <span><strong>Advanced agricultural management platforms</strong>, capable of processing large volumes of data and generating high-precision technical recommendations</span>
              </li>
            </ul>
          </div>

          <p class="text-lg text-gray-700 leading-relaxed">
            These solutions represent a technological leap that promises to redefine 
            efficiency standards, reduce waste by up to <strong>40%</strong> and promote more 
            sustainable agriculture, marking a structural change in the future of the Portuguese agricultural sector.
          </p>

          <blockquote class="bg-gray-50 border-l-4 border-green-600 p-8 rounded-r-xl my-10">
            <p class="text-xl italic text-gray-800 mb-4">
              "We are witnessing the birth of a new agriculture, more efficient and with reduced environmental impact. 
              The future of the field will be digital and Portugal is at the forefront of this transformation."
            </p>
            <div class="flex items-center">
              <div class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                <div class="text-green-600 font-bold">CM</div>
              </div>
              <div>
                <div class="font-bold text-gray-900">Dr. Carlos Mendes</div>
                <div class="text-gray-600 text-sm">Sustainable Agriculture Specialist</div>
              </div>
            </div>
          </blockquote>

          <h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">Impact on Portuguese Agriculture</h2>
          
          <p class="text-lg text-gray-700 leading-relaxed">
            In Portugal, farmers from the Alentejo, Ribatejo and Douro regions already report significant increases 
            in productivity after adopting these technologies. Water consumption reduction reaches 35% in some 
            crops, while optimized use of fertilizers and pesticides decreases by an average of 25%.
          </p>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
            <div class="bg-white p-6 rounded-xl border border-gray-200 text-center shadow-sm">
              <div class="text-3xl font-bold text-green-600 mb-2">35%</div>
              <div class="text-gray-700 font-medium">Water consumption reduction</div>
            </div>
            <div class="bg-white p-6 rounded-xl border border-gray-200 text-center shadow-sm">
              <div class="text-3xl font-bold text-green-600 mb-2">25%</div>
              <div class="text-gray-700 font-medium">Less chemical inputs</div>
            </div>
            <div class="bg-white p-6 rounded-xl border border-gray-200 text-center shadow-sm">
              <div class="text-3xl font-bold text-green-600 mb-2">40%</div>
              <div class="text-gray-700 font-medium">Efficiency increase</div>
            </div>
          </div>

          <p class="text-lg text-gray-700 leading-relaxed">
            Field AirTech has played a crucial role in this transformation, providing cutting-edge technology 
            and specialized training to hundreds of Portuguese farmers. Through XAG and LJTech solutions, 
            we are contributing to a smarter, more productive and sustainable agriculture.
          </p>
        </div>
      `,
    };
    
    setNoticia(noticiaData);
  }, [language]);

  if (!noticia) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-600"></div>
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
      label: p.newLaunch,
      title: "XAG revela o novo drone P150 Max na Agritechnica 2025",
      description: "A XAG apresentou o P150 Max e o rover R Series, reforçando a aposta na automação agrícola inteligente.",
      color: "green",
      link: "/noticia-xag",
    },
    {
      label: p.practicalGuide,
      title: "Como escolher o drone agrícola ideal para a sua exploração",
      description: "Análise completa das características, custos e benefícios dos principais modelos disponíveis no mercado.",
      color: "blue",
      comingSoon: true,
    }
  ] : [
    {
      label: p.newLaunch,
      title: "XAG unveils the new P150 Max drone at Agritechnica 2025",
      description: "XAG presented the P150 Max and the R Series rover, reinforcing its commitment to intelligent agricultural automation.",
      color: "green",
      link: "/news-xag",
    },
    {
      label: p.practicalGuide,
      title: "How to choose the ideal agricultural drone for your farm",
      description: "Complete analysis of features, costs and benefits of the main models available on the market.",
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
            className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
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
            <div className="flex items-center gap-1">
              <Clock size={16} />
              <span>{noticia.tempoLeitura} {p.readingTime}</span>
            </div>
            <div className="flex items-center gap-1">
              <Eye size={16} />
              <span>{noticia.visualizacoes.toLocaleString(language === 'pt' ? 'pt-PT' : 'en-US')} {p.views}</span>
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
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center">
                <User className="text-green-600" size={24} />
              </div>
              <div>
                <div className="font-bold text-gray-900">{noticia.autor}</div>
                <div className="text-gray-600">{noticia.cargo}</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 text-gray-600 hover:text-green-600">
                <Bookmark size={20} />
                <span className="hidden sm:inline">{p.saveButton}</span>
              </button>
              <button className="flex items-center gap-2 text-gray-600 hover:text-green-600">
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
                className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-green-100 hover:text-green-700 transition-colors cursor-pointer"
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
        <div className="mt-16 bg-gradient-to-r from-green-600 to-green-800 rounded-2xl p-10 text-white">
          <h3 className="text-2xl font-bold mb-4">{p.newsletterTitle}</h3>
          <p className="text-green-100 mb-8">
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
                className="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap"
              >
                {p.subscribeButton}
              </button>
            </div>
            <p className="text-green-200 text-sm mt-3">
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
                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
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
                    <div className="mt-4 text-green-600 font-medium">{p.comingSoon}</div>
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