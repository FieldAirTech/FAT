// src/pages/Products.tsx
import { useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import Link from 'next/link';

// Imagens
import p150MaxImg from '../assets/p150max.jpg';
const p100ProImg = 'https://i.imgur.com/EjmNvne.jpeg';
const s1000Img = 'https://i.imgur.com/UBfflHF.jpeg';
const s500ProImg = 'https://i.imgur.com/T4VXlJ9.jpeg';
const s450Img = 'https://i.imgur.com/dFmaM5J.jpeg';
const xagAPC2Img = 'https://i.imgur.com/kSA1vGU.png';
const nstGPSImg = 'https://i.imgur.com/YliCyHq.png';

export default function Products() {
  useEffect(() => {
    document.title = 'Produtos - Field Air Tech';
  }, []);

  return (
    <div className="pt-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Catálogo de Produtos
          </h1>
          <p className="text-gray-600">
            Tecnologia agrícola de precisão
          </p>
        </div>

        {/* SEÇÃO 1: DRONES (2 produtos) */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Drones Agrícolas
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ProductCard
              id="p150-max"
              name="XAG P150 Max"
              category="Drone de Pulverização"
              image={p150MaxImg}
              description="Capacidade 80L, 16ha/h, tecnologia VTOL"
              specs={['80L Tanque', '16 ha/h', '71KM/H']}
            />
            
            <ProductCard
              id="p100-pro"
              name="TopXGun FP700"
              category="Drone de Pulverização"
              image={p100ProImg}
              description="Precisão centimétrica, radar 3D"
              specs={['60L Tanque', '10 ha/h', 'Radar 3D']}
            />
          </div>
        </div>

        {/* Separador */}
        <div className="my-16 border-t border-gray-200"></div>

        {/* SEÇÃO 2: VEÍCULOS AUTÓNOMOS (3 produtos) */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Veículos Autónomos
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <ProductCard
              id="lj-tech-s1000"
              name="LJ Tech S1000"
              category="Rover Agrícola"
              image={s1000Img}
              description="Rover autónomo todo-terreno"
              specs={['1000L Tanque', 'Construção Robusta', '4WD']}
            />
            
            <ProductCard
              id="s500-pro"
              name="LJ Tech S500 Pro"
              category="Rover Agrícola"
              image={s500ProImg}
              description="Compacto e eficiente"
              specs={['500L Tanque', 'Operação Precisa', 'GPS RTK']}
            />
            
            <ProductCard
              id="s450"
              name="LJ Tech S450"
              category="Rover Agrícola"
              image={s450Img}
              description="Mapeamento de alta precisão"
              specs={['240L Tanque', '16L/Min', '60-200μm']}
            />
          </div>
        </div>

        {/* Separador */}
        <div className="my-16 border-t border-gray-200"></div>

        {/* SEÇÃO 3: GPS (2 produtos) */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              GPS para Trator
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ProductCard
              id="xag-apc2"
              name="XAG APC2"
              category="GPS para Trator"
              image={xagAPC2Img}
              description="Piloto automático de alta precisão"
              specs={['2.5cm Precisão', 'U-Turn Automática', 'Fácil instalação']}
            />
            
            <ProductCard
              id="nst-gps"
              name="NST GPS"
              category="GPS Profissional"
              image={nstGPSImg}
              description="Sistema GPS multi-marca"
              specs={['Correção RTK', 'ISOBUS', 'Display 10.1"']}
            />
          </div>
        </div>

{/* Contacto */}
<div className="text-center mt-20">
  <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 max-w-2xl mx-auto">
    <h3 className="text-lg font-bold text-gray-900 mb-3">
      Interessado em algum produto?
    </h3>
    <Link href="/contactos" passHref>
      <a className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition-colors">
        Pedir Orçamento
      </a>
    </Link>
  </div>
</div>
      </div>
    </div>
  );
}
