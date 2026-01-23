import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, User, Tag, ArrowRight, Clock, Eye } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from '../i18n/translations';

interface Noticia {
  id: number;
  titulo: string;
  resumo: string;
  data: string;
  imagem: string;
  autor: string;
  categoria: string;
  tempoLeitura: string;
  visualizacoes: number;
  tags: string[];
  enTitulo?: string;
  enResumo?: string;
  enCategoria?: string;
}

export const route = "/noticias";

function formatarDataExtenso(data: string, language: string) {
  const options = language === 'pt' ? {
    day: "2-digit",
    month: "long",
    year: "numeric",
  } : {
    day: "2-digit",
    month: "long",
    year: "numeric",
  };

  const formatada = new Date(data).toLocaleDateString(
    language === 'pt' ? "pt-PT" : "en-US", 
    options
  );

  if (language === 'pt') {
    return formatada.replace(/ de ([a-z])/, (match, letra) => {
      return " de " + letra.toUpperCase();
    });
  }

  return formatada;
}

export default function Noticias() {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = translations[language];

  // Page texts
  const pageTexts = {
    pt: {
      title: "Notícias & Atualidades",
      description: "Mantenha-se atualizado com as últimas novidades em tecnologia agrícola, drones, veículos autónomos e tendências do setor em Portugal.",
      categoryLabel: "Categoria",
      readTime: "min de leitura",
      authorLabel: "Autor",
      readArticle: "Ler artigo completo",
      newsletterTitle: "Não perca nenhuma novidade!",
      newsletterDescription: "Subscreva a nossa newsletter e receba as últimas notícias sobre tecnologia agrícola diretamente no seu email.",
      emailPlaceholder: "Seu email",
      subscribeButton: "Subscrever",
      privacyNote: "Prometemos não enviar spam. Pode cancelar quando quiser.",
      viewsLabel: "visualizações",
    },
    en: {
      title: "News & Updates",
      description: "Stay updated with the latest news in agricultural technology, drones, autonomous vehicles and industry trends in Portugal.",
      categoryLabel: "Category",
      readTime: "min read",
      authorLabel: "Author",
      readArticle: "Read full article",
      newsletterTitle: "Don't miss any news!",
      newsletterDescription: "Subscribe to our newsletter and receive the latest news about agricultural technology directly in your email.",
      emailPlaceholder: "Your email",
      subscribeButton: "Subscribe",
      privacyNote: "We promise not to send spam. You can cancel anytime.",
      viewsLabel: "views",
    }
  };

  const p = pageTexts[language];
  
  const [noticias] = useState<Noticia[]>([
    {
      id: 1,
      titulo: "XAG revela o novo drone P150 Max na Agritechnica 2025",
      resumo: "A XAG apresentou o P150 Max e o rover R Series, reforçando a aposta na automação agrícola inteligente com capacidade de pulverização revolucionária.",
      data: "2025-11-17",
      imagem: "https://i.imgur.com/TaHcbEe.jpeg",
      autor: "Field Air Tech",
      categoria: "Novidades",
      tempoLeitura: "5",
      visualizacoes: 1245,
      tags: language === 'pt' ? ["XAG", "P150 Max", "Agritechnica", "Novo Lançamento"] : ["XAG", "P150 Max", "Agritechnica", "New Launch"],
      enTitulo: "XAG unveils the new P150 Max drone at Agritechnica 2025",
      enResumo: "XAG presented the P150 Max and the R Series rover, reinforcing its commitment to intelligent agricultural automation with revolutionary spraying capacity.",
      enCategoria: "News"
    },
    {
      id: 2,
      titulo: "O presente da agricultura: o campo inteligente já é realidade",
      resumo: "A digitalização agrícola está a redefinir processos, reduzir custos em até 40% e aumentar a eficiência nas explorações agrícolas portuguesas.",
      data: "2025-11-15",
      imagem: "https://i.imgur.com/OzYMit5.png",
      autor: "Field Air Tech",
      categoria: "Tecnologia",
      tempoLeitura: "7",
      visualizacoes: 892,
      tags: language === 'pt' ? ["Agricultura 4.0", "Digitalização", "Eficiência", "Portugal"] : ["Agriculture 4.0", "Digitalization", "Efficiency", "Portugal"],
      enTitulo: "The present of agriculture: the smart field is already a reality",
      enResumo: "Agricultural digitization is redefining processes, reducing costs by up to 40% and increasing efficiency on Portuguese farms.",
      enCategoria: "Technology"
    }
  ]);

  useEffect(() => {
    document.title = language === 'pt' ? "Notícias | FieldAirTech" : "News | FieldAirTech";
  }, [language]);

  const handleNoticiaClick = (noticiaId: number) => {
    const routes: Record<number, string> = {
      1: language === 'pt' ? "/noticia-xag" : "/noticia-xag",
      2: language === 'pt' ? "/noticia-campo-inteligente" : "/noticia-campo-inteligente"
    };
    
    navigate(routes[noticiaId] || `/noticia/${noticiaId}`);
  };

  const renderNoticia = (noticia: Noticia, index: number) => {
    const titulo = language === 'pt' ? noticia.titulo : (noticia.enTitulo || noticia.titulo);
    const resumo = language === 'pt' ? noticia.resumo : (noticia.enResumo || noticia.resumo);
    const categoria = language === 'pt' ? noticia.categoria : (noticia.enCategoria || noticia.categoria);
    const tempoLeitura = noticia.tempoLeitura;

    return (
      <div
        key={noticia.id}
        onClick={() => handleNoticiaClick(noticia.id)}
        className="
          grid grid-cols-1 lg:grid-cols-2 gap-10 items-center cursor-pointer
          bg-white rounded-2xl shadow-xl p-8 border border-gray-100
          hover:shadow-2xl transition-all duration-300
          group relative overflow-hidden mb-1
        "
      >
        {/* Linha de proteção dentro do card */}
        <div className="absolute -bottom-px left-0 right-0 h-px bg-white z-30"></div>
        <div className="absolute -bottom-2 left-0 right-0 h-3 bg-white z-20 opacity-90"></div>

        {/* Layout alternado baseado no índice */}
        {index % 2 === 0 ? (
          // Primeira notícia: Imagem à ESQUERDA
          <>
            {/* Coluna da Imagem */}
            <div className="relative overflow-hidden rounded-xl">
              <img
                src={noticia.imagem}
                alt={titulo}
                className="w-full h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {categoria}
                </span>
              </div>
            </div>

            {/* Coluna do Texto */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-gray-500 text-sm">
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  <span>{formatarDataExtenso(noticia.data, language)}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  <span>{tempoLeitura} {p.readTime}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Eye size={14} />
                  <span>{noticia.visualizacoes.toLocaleString(language === 'pt' ? 'pt-PT' : 'en-US')} {p.viewsLabel}</span>
                </div>
              </div>

              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                {titulo}
              </h2>

              <p className="text-gray-600 text-lg">
                {resumo}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-4">
                {noticia.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Autor e Botão */}
              <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <User className="text-green-600" size={20} />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{noticia.autor}</div>
                    <div className="text-sm text-gray-500">{p.authorLabel}</div>
                  </div>
                </div>
                
                <div className="flex items-center text-green-600 font-semibold group-hover:translate-x-2 transition-transform">
                  {p.readArticle}
                  <ArrowRight className="ml-2" size={20} />
                </div>
              </div>
            </div>
          </>
        ) : (
          // Segunda notícia: Imagem à DIREITA
          <>
            {/* Coluna do Texto */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-gray-500 text-sm">
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  <span>{formatarDataExtenso(noticia.data, language)}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  <span>{tempoLeitura} {p.readTime}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Eye size={14} />
                  <span>{noticia.visualizacoes.toLocaleString(language === 'pt' ? 'pt-PT' : 'en-US')} {p.viewsLabel}</span>
                </div>
              </div>

              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                {titulo}
              </h2>

              <p className="text-gray-600 text-lg">
                {resumo}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-4">
                {noticia.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Autor e Botão */}
              <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <User className="text-green-600" size={20} />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{noticia.autor}</div>
                    <div className="text-sm text-gray-500">{p.authorLabel}</div>
                  </div>
                </div>
                
                <div className="flex items-center text-green-600 font-semibold group-hover:translate-x-2 transition-transform">
                  {p.readArticle}
                  <ArrowRight className="ml-2" size={20} />
                </div>
              </div>
            </div>

            {/* Coluna da Imagem */}
            <div className="relative overflow-hidden rounded-xl order-first lg:order-none">
              <img
                src={noticia.imagem}
                alt={titulo}
                className="w-full h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {categoria}
                </span>
              </div>
            </div>
          </>
        )}
      </div>
    );
  };

  return (
    <div className="pt-60 md:pt-50 min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-green-600">{p.title.split(' ')[0]}</span> {p.title.includes('&') ? p.title.split('&')[1] : p.title.split(' ').slice(1).join(' ')}
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            {p.description}
          </p>
        </div>

        {/* Grid de Notícias - Layout Alternado */}
        <div className="space-y-20">
          {noticias.map((noticia, index) => renderNoticia(noticia, index))}
        </div>

        {/* Newsletter - VERSÃO CORRIGIDA (SEM LINHA DIAGONAL) */}
        <div className="mt-20 relative">
          {/* Linha de proteção superior */}
          <div className="absolute -top-2 left-0 right-0 h-3 bg-white z-10"></div>
          
          {/* Container do gradiente com overflow controlado */}
          <div className="relative bg-gradient-to-r from-green-600 to-green-800 rounded-2xl p-10 text-center text-white overflow-hidden">
            
            {/* Camada de corte para prevenir linhas diagonais */}
            <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-r from-green-600 to-green-800 z-0"></div>
            
            {/* Conteúdo da newsletter */}
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">
                {p.newsletterTitle}
              </h3>
              <p className="text-green-100 mb-8 max-w-xl mx-auto">
                {p.newsletterDescription}
              </p>
              
              <form className="max-w-md mx-auto">
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
          </div>
          
          {/* Barreira de proteção inferior (opcional) */}
          <div className="absolute -bottom-2 left-0 right-0 h-3 bg-white z-10"></div>
        </div>
      </div>
    </div>
  );
}