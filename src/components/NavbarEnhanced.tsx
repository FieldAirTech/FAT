import { useLocation, Link } from 'react-router-dom';
import {
  Menu,
  X,
  ChevronDown,
  Home,
  Briefcase,
  Info,
  Newspaper,
  Phone,
  Search,
  Check,
  Globe,
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

// Imagens locais dos drones
import p150MaxImg from '../assets/p150max.jpg';

interface AccordionCategoryProps {
  category: {
    title: string;
    icon: string;
    items: { id: string; name: string; image: string }[];
  };
}

// =====================
// COMPONENTE ACCORDION CORRIGIDO
// =====================
function AccordionCategory({ category }: AccordionCategoryProps) {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();
  
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-2 font-medium text-gray-900 hover:bg-gray-50 rounded-lg"
      >
        <div className="flex items-center gap-2">
          <span className="text-lg">{category.icon}</span>
          {t(`products.categories.${category.title.toLowerCase()}`)}
        </div>
        <ChevronDown size={16} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="mt-2 space-y-1 ml-6">
          {category.items.map((item) => (
            <Link
              key={item.id}
              to={`/produtos/${item.id}`}
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50"
            >
              <img src={item.image} alt={item.name} className="w-10 h-10 rounded" />
              <span className="text-gray-900 text-sm">{item.name}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const [isLangOpen, setIsLangOpen] = useState(false);

  const [currentDroneImage, setCurrentDroneImage] = useState(p150MaxImg);
  const [currentRoverImage, setCurrentRoverImage] = useState(
    'https://i.imgur.com/UBfflHF.jpeg'
  );
  const [currentGpsImage, setCurrentGpsImage] = useState(
    'https://i.imgur.com/kSA1vGU.png'
  );

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const drones = [
    { id: 'p150-max', name: 'XAG P150 Max', image: p150MaxImg, category: 'drones' },
    {
      id: 'topxgun',
      name: 'TopXGun FP700',
      image: 'https://i.imgur.com/EjmNvne.jpeg',
      category: 'drones',
    },
  ];

  const rovers = [
    { id: 'lj-tech-s1000', name: 'LJ Tech S1000', image: 'https://i.imgur.com/UBfflHF.jpeg', category: 'rovers' },
    { id: 's500-pro', name: 'LJ Tech S500 Pro', image: 'https://i.imgur.com/T4VXlJ9.jpeg', category: 'rovers' },
    { id: 'R200', name: 'XAG R200', image: 'https://i.imgur.com/ZINKkfN.jpeg', category: 'rovers' },
  ];

  const gpsTractor = [
    { id: 'Apc2', name: 'XAG APC2', image: 'https://i.imgur.com/kSA1vGU.png', category: 'gps' },
    { id: 'n500', name: 'NST N500', image: 'https://i.imgur.com/YliCyHq.png', category: 'gps' },
  ];

  const handleDroneHover = (droneImage: string) => setCurrentDroneImage(droneImage);
  const handleRoverHover = (roverImage: string) => setCurrentRoverImage(roverImage);
  const handleGpsHover = (gpsImage: string) => setCurrentGpsImage(gpsImage);

  const resetDroneImage = () => setCurrentDroneImage(p150MaxImg);
  const resetRoverImage = () => setCurrentRoverImage('https://i.imgur.com/UBfflHF.jpeg');
  const resetGpsImage = () => setCurrentGpsImage('https://i.imgur.com/kSA1vGU.png');

  const isActive = (path: string) => location.pathname === path;

  // =====================
  // CORREÇÃO 1: PRODUTOS AO CENTRO
  // =====================
  const linksBeforeProducts = [
    { path: '/', label: t('nav.home'), icon: <Home size={18} /> },
    { path: '/sobre', label: t('nav.about'), icon: <Info size={18} /> },
  ];

  const linksAfterProducts = [
    { path: '/servicos', label: t('nav.services'), icon: <Briefcase size={18} /> },
    { path: '/noticias', label: t('nav.news'), icon: <Newspaper size={18} /> },
    { path: '/contactos', label: t('nav.contact'), icon: <Phone size={18} /> },
  ];

  const productCategories = [
    { title: 'Drones', icon: '🚁', items: drones },
    { title: 'Rovers', icon: '🚜', items: rovers },
    { title: 'GPS', icon: '📍', items: gpsTractor },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-white/95 backdrop-blur-xl shadow-2xl py-2' : 'bg-white/90 backdrop-blur-lg py-4'
        }`}
      >
        <div className="max-w-8xl mx-auto px-6">
          <div className="flex justify-between items-center">
            {/* LOGO */}
            <Link to="/" className="flex items-center group">
              <div className="relative">
                <img
                  src="https://i.imgur.com/zQ6kKdF.png"
                  alt="FieldAirTech Logo"
                  className={`w-46 h-12 object-contain transition-all duration-300 ${
                    scrolled ? 'h-24' : 'h-24'
                  }`}
                />
              </div>
              <div className="ml-3">
                <div className="text-sm text-gray-500 font-medium">{t('nav.distributor')}</div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-green-600 font-bold">XAG • LJ Tech • NST</span>
                </div>
              </div>
            </Link>

            {/* MENU CENTRAL - COM PRODUTOS AO CENTRO */}
            <div className="hidden xl:flex items-center space-x-8">
              {/* LINKS ANTES DOS PRODUTOS */}
              {linksBeforeProducts.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`group relative px-4 py-2 font-medium transition-all duration-300 ${
                    isActive(item.path) ? 'text-emerald-600' : 'text-gray-700 hover:text-emerald-600'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {item.icon}
                    {item.label}
                  </div>
                  {isActive(item.path) && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full"></div>
                  )}
                </Link>
              ))}

              {/* PRODUTOS - NO CENTRO */}
              <div className="relative">
                <button
                  onClick={() => setIsProductsOpen(!isProductsOpen)}
                  onMouseEnter={() => setIsProductsOpen(true)}
                  className="group flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-emerald-600 to-green-600 text-white font-semibold rounded-lg hover:from-emerald-700 hover:to-green-700 transition-all duration-300"
                >
                  <Briefcase size={18} />
                  {t('nav.products')}
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${isProductsOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                {/* DROPDOWN PRODUTOS */}
                <div
                  className={`absolute left-1/2 transform -translate-x-1/2 mt-2 w-[1200px] bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl border border-gray-200 z-50 transition-all duration-300 ${
                    isProductsOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                  }`}
                  onMouseEnter={() => setIsProductsOpen(true)}
                  onMouseLeave={() => setIsProductsOpen(false)}
                >
                  <div className="p-8">
                    {/* REMOVI O DIV DUPLICADO AQUI */}
                    <div className="grid grid-cols-3 gap-8">
                      {/* COLUNA 1: DRONES */}
                      <div className="space-y-6 text-center">
                        <h3 className="text-lg font-bold text-gray-900 mb-4">
                          {t(`products.categories.drones`)}
                        </h3>
                        <div className="mb-4">
                          <img
                            src={currentDroneImage}
                            alt="Drone"
                            className="w-full h-48 object-contain rounded-xl border border-gray-200 bg-gray-50 p-4"
                          />
                        </div>
                        <div className="space-y-2">
                          {drones.map((drone) => (
                            <Link
                              key={drone.id}
                              to={`/produtos/${drone.id}`}
                              className="block p-3 rounded-lg hover:bg-emerald-50 transition-colors duration-200"
                              onMouseEnter={() => handleDroneHover(drone.image)}
                              onMouseLeave={resetDroneImage}
                            >
                              <div className="font-medium text-gray-700 hover:text-emerald-700 text-center">
                                {drone.name}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* COLUNA 2: ROVERS */}
                      <div className="space-y-6 text-center">
                        <h3 className="text-lg font-bold text-gray-900 mb-4">
                          {t(`products.categories.rovers`)}
                        </h3>
                        <div className="mb-4">
                          <img
                            src={currentRoverImage}
                            alt="Rover"
                            className="w-full h-48 object-contain rounded-xl border border-gray-200 bg-gray-50 p-4"
                          />
                        </div>
                        <div className="space-y-2">
                          {rovers.map((rover) => (
                            <Link
                              key={rover.id}
                              to={`/produtos/${rover.id}`}
                              className="block p-3 rounded-lg hover:bg-blue-50 transition-colors duration-200"
                              onMouseEnter={() => handleRoverHover(rover.image)}
                              onMouseLeave={resetRoverImage}
                            >
                              <div className="font-medium text-gray-700 hover:text-blue-700 text-center">
                                {rover.name}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* COLUNA 3: GPS */}
                      <div className="space-y-6 text-center">
                        <h3 className="text-lg font-bold text-gray-900 mb-4">
                          {t(`products.categories.gps`)}
                        </h3>
                        <div className="mb-4">
                          <img
                            src={currentGpsImage}
                            alt="GPS"
                            className="w-full h-48 object-contain rounded-xl border border-gray-200 bg-white p-4"
                          />
                        </div>
                        <div className="space-y-2">
                          {gpsTractor.map((gps) => (
                            <Link
                              key={gps.id}
                              to={`/produtos/${gps.id}`}
                              className="block p-3 rounded-lg hover:bg-purple-50 transition-colors duration-200"
                              onMouseEnter={() => handleGpsHover(gps.image)}
                              onMouseLeave={resetGpsImage}
                            >
                              <div className="font-medium text-gray-700 hover:text-purple-700 text-center">
                                {gps.name}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 pt-8 border-t border-gray-200 text-center">
                      <Link
                        to="/produtos"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-900 to-black text-white font-semibold rounded-lg hover:from-black hover:to-gray-900 transition-all duration-300 shadow-lg"
                      >
                        <Briefcase size={16} />
                        {t('products.viewAll')}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* LINKS DEPOIS DOS PRODUTOS */}
              {linksAfterProducts.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`group relative px-4 py-2 font-medium transition-all duration-300 ${
                    isActive(item.path) ? 'text-emerald-600' : 'text-gray-700 hover:text-emerald-600'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {item.icon}
                    {item.label}
                  </div>
                  {isActive(item.path) && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full"></div>
                  )}
                </Link>
              ))}
            </div>

            {/* LADO DIREITO */}
            <div className="flex items-center gap-4">
              {/* ===================== */}
              {/* CORREÇÃO 2: BOTÃO IDIOMA COM GLOBO + "IDIOMA" + BANDEIRA */}
              {/* ===================== */}
              <div className="relative">
                <button
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-300 hover:border-emerald-500 transition-colors"
                >
                  <img 
                    src={language === 'pt' 
                      ? "https://www.xagrifly.com/wp-content/plugins/sitepress-multilingual-cms/res/flags/pt-pt.png"
                      : "https://www.xagrifly.com/wp-content/plugins/sitepress-multilingual-cms/res/flags/en.png"
                    } 
                    alt={language === 'pt' ? "Português" : "English"} 
                    className="w-5 h-4 rounded-sm object-cover"
                  />
                  <span className="font-medium text-gray-700 text-sm">
                    {language === 'pt' ? 'Português' : 'English'}
                  </span>
                  <ChevronDown
                    size={14}
                    className={`transition-transform ${isLangOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                
                {isLangOpen && (
                  <div className="absolute top-full mt-1 right-0 bg-white rounded-lg shadow-lg border border-gray-200 min-w-[180px] z-50 overflow-hidden">
                    <div className="py-2">
                      {/* Português */}
                      <button
                        onClick={() => {
                          setLanguage('pt');
                          setIsLangOpen(false);
                          window.location.reload();
                        }}
                        className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors ${
                          language === 'pt'
                            ? 'bg-emerald-50 text-emerald-700 font-semibold'
                            : 'text-gray-700'
                        }`}
                      >
                        <img 
                          src="https://www.xagrifly.com/wp-content/plugins/sitepress-multilingual-cms/res/flags/pt-pt.png"
                          alt="Português"
                          className="w-5 h-4 rounded-sm object-cover"
                        />
                        <span className="text-sm">Português</span>
                        {language === 'pt' && (
                          <div className="ml-auto w-2 h-2 bg-emerald-500 rounded-full" />
                        )}
                      </button>
                      
                      {/* English */}
                      <button
                        onClick={() => {
                          setLanguage('en');
                          setIsLangOpen(false);
                          window.location.reload();
                        }}
                        className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors border-t border-gray-100 ${
                          language === 'en'
                            ? 'bg-emerald-50 text-emerald-700 font-semibold'
                            : 'text-gray-700'
                        }`}
                      >
                        <img 
                          src="https://www.xagrifly.com/wp-content/plugins/sitepress-multilingual-cms/res/flags/en.png"
                          alt="English"
                          className="w-5 h-4 rounded-sm object-cover"
                        />
                        <span className="text-sm">English</span>
                        {language === 'en' && (
                          <div className="ml-auto w-2 h-2 bg-emerald-500 rounded-full" />
                        )}
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <button className="p-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors duration-300">
                <Search size={20} className="text-gray-600" />
              </button>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="xl:hidden p-2.5 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* MENU MOBILE */}
      {isOpen && (
        <div
          className="xl:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="fixed top-0 right-0 h-full w-72 bg-white shadow-2xl z-50"
            onClick={(e) => e.stopPropagation()}
          >
            {/* HEADER FIXO NO TOPO */}
            <div className="sticky top-0 bg-white z-10 border-b border-gray-200">
              <div className="flex items-center justify-between p-5">
                <div className="flex items-center gap-3">
                  <img src="https://i.imgur.com/IrAZoGI.png" alt="Logo" className="h-10 w-auto" />
                  <div>
                    <div className="font-bold text-gray-900 text-sm">FieldAirTech</div>
                    <div className="text-xs text-emerald-600 font-medium">{t('nav.distributor')}</div>
                  </div>
                </div>
                <button onClick={() => setIsOpen(false)} className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200">
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* CONTEÚDO COM SCROLL */}
            <div className="h-[calc(100vh-80px)] overflow-y-auto">
              <div className="p-5 pt-16">
                
                {/* BOTÃO DE IDIOMA NO MOBILE (TAMBÉM ATUALIZADO) */}
                <div className="mb-6">
                  <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3 px-2">
                    Idioma
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => setLanguage('pt')}
                      className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg border ${
                        language === 'pt' 
                          ? 'bg-emerald-50 border-emerald-500 text-emerald-700' 
                          : 'border-gray-300 text-gray-700'
                      }`}
                    >
                      <span className="text-lg">🇵🇹</span>
                      <span>Português</span>
                    </button>
                    <button
                      onClick={() => setLanguage('en')}
                      className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg border ${
                        language === 'en' 
                          ? 'bg-emerald-50 border-emerald-500 text-emerald-700' 
                          : 'border-gray-300 text-gray-700'
                      }`}
                    >
                      <span className="text-lg">🇬🇧</span>
                      <span>English</span>
                    </button>
                  </div>
                </div>

                {/* LINKS PRINCIPAIS MOBILE */}
                <div className="space-y-2 mb-8">
                  {[...linksBeforeProducts, ...linksAfterProducts].map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-4 px-4 py-3 rounded-xl font-medium ${
                        isActive(item.path) ? 'bg-emerald-50 text-emerald-700' : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {item.icon}
                      {item.label}
                    </Link>
                  ))}
                </div>

                {/* PRODUTOS MOBILE COM ACCORDION */}
                <div className="mb-8">
                  <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4 px-2">
                    {t('nav.products')}
                  </div>
                  {productCategories.map((cat) => (
                    <AccordionCategory key={cat.title} category={cat} />
                  ))}
                </div>

                {/* VER TODOS PRODUTOS */}
                <Link
                  to="/produtos"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-emerald-600 to-green-600 text-white font-semibold rounded-lg hover:from-emerald-700 hover:to-green-700 transition-all duration-300 mb-8"
                >
                  <Briefcase size={16} />
                  {t('products.viewAll')}
                </Link>

                {/* TELEFONE */}
                <div className="text-center pt-8 border-t border-gray-200">
                  <div className="flex items-center justify-center gap-2 text-emerald-600 font-bold">
                    <Phone size={16} />
                    <span>+351 912 345 678</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">{t('nav.available247')}</p>
                </div>
                
                {/* ESPAÇO EXTRA NO FINAL PARA SCROLL */}
                <div className="h-10"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
