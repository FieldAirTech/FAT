// src/components/ProductCard.tsx
import { Link } from 'react-router-dom';

interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  category: string;
  description?: string;
  specs?: string[];
}

export default function ProductCard({ 
  id, 
  name, 
  image, 
  category, 
  description,
  specs = []
}: ProductCardProps) {
  return (
    <Link 
      to={`/produtos/${id}`}
      className="block bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-gray-300 transition-colors h-full"
    >
      {/* Imagem */}
      <div className="h-48 bg-gray-50 flex items-center justify-center p-4">
        <img 
          src={image} 
          alt={name} 
          className="max-h-full max-w-full object-contain"
        />
      </div>
      
      {/* Conteúdo */}
      <div className="p-6">
        {/* Categoria */}
        <div className="text-sm text-gray-500 mb-1">
          {category}
        </div>
        
        {/* Nome */}
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {name}
        </h3>
        
        {/* Descrição */}
        {description && (
          <p className="text-gray-600 mb-4">
            {description}
          </p>
        )}
        
        {/* Especificações */}
        {specs.length > 0 && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {specs.map((spec, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded"
                >
                  {spec}
                </span>
              ))}
            </div>
          </div>
        )}
        
        {/* Link */}
        <div className="text-blue-600 text-sm font-medium">
          Ver especificações →
        </div>
      </div>
    </Link>
  );
}