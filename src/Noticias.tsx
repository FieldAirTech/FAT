import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Noticia {
  id: number;
  titulo: string;
  resumo: string;
  data: string;
}

export const route = "/noticias";

export default function Noticias() {
  const navigate = useNavigate();

  const [noticias, setNoticias] = useState<Noticia[]>([
    {
      id: 1,
      titulo: 'Nova tecnologia agrícola XAG',
      resumo: 'Conheça a nova linha de drones e rovers que chegaram ao mercado Português.',
      data: '2025-11-17'
    },
    {
      id: 2,
      titulo: 'Campo inteligente em expansão',
      resumo: 'Como a automação agrícola está transformando propriedades rurais.',
      data: '2025-11-15'
    }
  ]);

  useEffect(() => {
    document.title = 'Notícias | Meu Site Agrícola';
  }, []);

  return (
    <div className="pt-32 max-w-6xl mx-auto px-6">
      <h1 className="text-4xl font-bold mb-10">Notícias</h1>

      <div className="space-y-8">
        {noticias.map((item) => (
          <div
            key={item.id}
            onClick={() => {
              if (item.id === 1) navigate("/noticia-xag");
              if (item.id === 2) navigate("/noticia-campo-inteligente");
            }}
            className="p-6 border rounded-xl shadow hover:shadow-lg transition cursor-pointer"
          >
            <h2 className="text-2xl font-semibold mb-2">{item.titulo}</h2>
            <p className="text-gray-600 mb-2">{item.resumo}</p>
            <p className="text-sm text-gray-400">{item.data}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
