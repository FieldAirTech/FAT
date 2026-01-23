import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight, Star, Zap, Target } from "lucide-react";
import { Link } from "react-router-dom";

interface Product {
  id: string;
  name: string;
  image?: string;
  description?: string;
  features?: string[];
  tag?: string;
}

export default function ProductCarousel({ items }: { items: Product[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  // Auto-rotate slides
  useEffect(() => {
    if (isHovering) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % items.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isHovering, items.length]);

  const nextSlide = () => setCurrentIndex((i) => (i + 1) % items.length);
  const prevSlide = () => setCurrentIndex((i) => (i - 1 + items.length) % items.length);

  return (
    <div 
      className="relative w-full h-[620px] overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-black"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* SLIDES */}
      <div
        className="flex transition-transform duration-700 ease-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((product, index) => (  // ⬅️ CORREÇÃO: 'product' em vez de 'produtos'
          <div
            key={product.id}  // ⬅️ AGORA FUNCIONA
            className="w-full h-full flex-shrink-0 relative flex items-center"
          >
            {/* Background Image */}
            {product.image && (  // ⬅️ AGORA FUNCIONA
              <div className="absolute inset-0">
                <img
                  src={product.image}  // ⬅️ AGORA FUNCIONA
                  alt={product.name}  // ⬅️ AGORA FUNCIONA
                  className="w-full h-full object-cover opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
              </div>
            )}

            {/* Content */}
            <div className="relative z-20 max-w-7xl mx-auto px-8 lg:px-12 w-full">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div className="space-y-8">
                  {/* Tag/Badge */}
                  {product.tag && (  // ⬅️ AGORA FUNCIONA
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 backdrop-blur-sm border border-emerald-500/30 rounded-full">
                      <Zap size={16} className="text-emerald-400" />
                      <span className="text-sm font-semibold text-emerald-300">{product.tag}</span>  {/* ⬅️ AGORA FUNCIONA */}
                    </div>
                  )}

                  {/* Title */}
                  <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
                    {product.name.split(' ').map((word, i) => (  // ⬅️ AGORA FUNCIONA
                      <span key={i} className="block">
                        {word}
                      </span>
                    ))}
                  </h2>

                  {/* Description */}
                  {product.description && (  // ⬅️ AGORA FUNCIONA
                    <p className="text-xl text-white/80 leading-relaxed max-w-2xl">
                      {product.description}  {/* ⬅️ AGORA FUNCIONA */}
                    </p>
                  )}

                  {/* Features */}
                  {product.features && (  // ⬅️ AGORA FUNCIONA
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-white/60">
                        <Target size={18} />
                        <span className="font-medium">Características principais:</span>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {product.features.map((feature, i) => (  // ⬅️ AGORA FUNCIONA
                          <div key={i} className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                            <span className="text-white/70">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* CTA Button */}
                  <div className="pt-8">
                    <Link
                      to={`/produtos/${product.id}`}  // ⬅️ AGORA FUNCIONA
                      className="group inline-flex items-center gap-4 px-10 py-4 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 rounded-2xl font-bold text-lg text-white shadow-2xl hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-105"
                    >
                      <span>Explorar {product.name.split(' ')[0]}</span>  {/* ⬅️ AGORA FUNCIONA */}
                      <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                    </Link>
                  </div>
                </div>

                {/* Image Showcase */}
                <div className="relative hidden lg:block">
                  <div className="relative">
                    {/* Main Image */}
                    <div className="relative rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl">
                      <img
                        src={product.image}  // ⬅️ AGORA FUNCIONA
                        alt={product.name}  // ⬅️ AGORA FUNCIONA
                        className="w-full h-[400px] object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute -top-6 -right-6">
                      <div className="bg-gradient-to-br from-emerald-500 to-cyan-500 text-white p-4 rounded-2xl shadow-2xl">
                        <Star size={24} fill="white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* NAVIGATION DOTS */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30">
        <div className="flex gap-3">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index 
                  ? 'bg-emerald-400 scale-125' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* NAVIGATION ARROWS */}
      <button
        onClick={prevSlide}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-30 group"
        aria-label="Slide anterior"
      >
        <div className="p-4 bg-black/40 backdrop-blur-sm rounded-2xl border border-white/10 group-hover:border-emerald-500/50 transition-all duration-300 group-hover:scale-110">
          <ChevronLeft className="text-white group-hover:text-emerald-300" size={28} />
        </div>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-30 group"
        aria-label="Próximo slide"
      >
        <div className="p-4 bg-black/40 backdrop-blur-sm rounded-2xl border border-white/10 group-hover:border-emerald-500/50 transition-all duration-300 group-hover:scale-110">
          <ChevronRight className="text-white group-hover:text-emerald-300" size={28} />
        </div>
      </button>

      {/* SLIDE COUNTER */}
      <div className="absolute top-8 right-8 z-30">
        <div className="px-4 py-2 bg-black/40 backdrop-blur-sm rounded-full border border-white/10">
          <span className="text-white font-medium text-sm">
            {currentIndex + 1} / {items.length}
          </span>
        </div>
      </div>
    </div>
  );
}