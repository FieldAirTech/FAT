import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { LanguageProvider } from "./contexts/LanguageContext";

import NavbarEnhanced from "./components/NavbarEnhanced";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import PP from "./pages/PP.tsx";

// Fichas Técnicas
import Fichatecnica150max from "./pages/FichasTecnicas/Fichatecnica150max";
import FichatecnicaR200 from "./pages/FichasTecnicas/FichatecnicaR200";
import FichatecnicaS500pro from "./pages/FichasTecnicas/FichatecnicaS500pro";
import FichatecnicaS1000 from "./pages/FichasTecnicas/FichatecnicaS1000";
import FichatecnicaFP700 from "./pages/FichasTecnicas/FichatecnicaFP700";
import FichatecnicaAPC2 from "./pages/FichasTecnicas/FichatecnicaAPC2";
import FichatecnicaN500 from "./pages/FichasTecnicas/FichatecnicaN500";

// Produtos
              //Drones
import ProductDetail from "./pages/Produtos/ProductDetail";
import Topxgun from "./pages/Produtos/Topxgun";
              //GPS
import N500 from "./pages/Produtos/N500";
import APC2 from "./pages/Produtos/APC2";
              //Rovers
import LJTecS1000OrchardPage from "./pages/Produtos/LJTechS1000";
import S500pro from "./pages/Produtos/S500pro";
import R200 from "./pages/Produtos/R200";

// Outras páginas
import Services from "./pages/Services";
import Sobre from "./pages/About";
import Contactos from "./pages/Contact";

// Notícias
import Noticias from "./pages/Noticias";
import NoticiaXAG from "./pages/Noticias/NoticiaXAG";
import NoticiaCampoInteligente from "./pages/Noticias/NoticiaCampoInteligente";

/* =========================
   CONTROLO GLOBAL DE SCROLL
========================= */
function PageEffects() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const page = document.querySelector(".page-wrapper");
    if (page) {
      page.classList.remove("page-fade-in");
      void page.offsetWidth;
      page.classList.add("page-fade-in");
    }
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <PageEffects />

        <div className="flex flex-col min-h-screen relative">
          <NavbarEnhanced />

        <main className="flex-grow page-wrapper">
          <Routes>
            {/* Página inicial */}
            <Route path="/" element={<Home />} />

            {/* Produtos */}
            <Route path="/produtos" element={<Products />} />
            <Route path="/produtos/lj-tech-s1000" element={<LJTecS1000OrchardPage />} />
            <Route path="/produtos/s500-pro" element={<S500pro />} />
            <Route path="/produtos/R200" element={<R200 />} />
            <Route path="/produtos/n500" element={<N500 />} />
            <Route path="/produtos/APC2" element={<APC2 />} />
            <Route path="/produtos/topxgun" element={<Topxgun />} />

            {/* Produto genérico (tem de ficar depois!) */}
            <Route path="/produtos/:id" element={<ProductDetail />} />

            {/* Outras páginas */}
            <Route path="/servicos" element={<Services />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contactos" element={<Contactos />} />
            <Route path="/privacy" element={<PP />} />

            {/* Notícias */}
            <Route path="/noticias" element={<Noticias />} />
            <Route path="/noticia-xag" element={<NoticiaXAG />} />
            <Route path="/noticia-campo-inteligente" element={<NoticiaCampoInteligente />} />

            {/* Ficha técnica */}
            <Route path="/ficha-tecnica/p150-max" element={<Fichatecnica150max />} />
            <Route path="/ficha-tecnica/FP700" element={<FichatecnicaFP700 />} />
            <Route path="/ficha-tecnica/R200" element={<FichatecnicaR200 />} />
            <Route path="/ficha-tecnica/S500pro" element={<FichatecnicaS500pro />} />
            <Route path="/ficha-tecnica/S1000" element={<FichatecnicaS1000 />} />
            <Route path="/ficha-tecnica/APC2" element={<FichatecnicaAPC2 />} />
            <Route path="/ficha-tecnica/N500" element={<FichatecnicaN500 />} />
            {/* 404 */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        <div className="relative">
          <div className="absolute -top-px left-0 right-0 h-px bg-[#0f4c75] z-10" />
          <Footer />
          <div className="absolute -top-0.5 left-0 right-0 h-[2px] bg-[#0f4c75] opacity-0" />
        </div>
      </div>
      </Router>
    </LanguageProvider>
  );
}
