import { useState } from 'react';
import { TrendingUp, Check, X, BarChart3, Target, Package, Droplets, Wind } from 'lucide-react';

interface Competitor {
  name: string;
  price: string;
  specs: {
    tank: string;
    payload: string;
    precision: string;
    speed: string;
    autonomy: string;
    swarm: string;
  };
}

export default function ComparisonTool() {
  const [selectedCompetitors, setSelectedCompetitors] = useState<string[]>(['DJI Agras', 'Hanhe', 'XAIRCRAFT']);
  
  const competitors: Competitor[] = [
    {
      name: 'XAG P150 Max',
      price: '€42.500',
      specs: {
        tank: '80L',
        payload: '80kg',
        precision: '±2cm',
        speed: '20 m/s',
        autonomy: '15 min',
        swarm: '10 drones',
      },
    },
    {
      name: 'DJI Agras T40',
      price: '€38.000',
      specs: {
        tank: '40L',
        payload: '50kg',
        precision: '±10cm',
        speed: '15 m/s',
        autonomy: '12 min',
        swarm: '3 drones',
      },
    },
    {
      name: 'Hanhe H6',
      price: '€35.000',
      specs: {
        tank: '32L',
        payload: '35kg',
        precision: '±15cm',
        speed: '12 m/s',
        autonomy: '10 min',
        swarm: 'Não suportado',
      },
    },
    {
      name: 'XAIRCRAFT P80',
      price: '€40.000',
      specs: {
        tank: '45L',
        payload: '45kg',
        precision: '±8cm',
        speed: '18 m/s',
        autonomy: '13 min',
        swarm: '5 drones',
      },
    },
  ];

  const features = [
    {
      label: 'Capacidade do Tanque',
      icon: <Droplets size={20} />,
      key: 'tank' as const,
      unit: 'L',
      better: 'higher',
    },
    {
      label: 'Carga Aérea',
      icon: <Package size={20} />,
      key: 'payload' as const,
      unit: 'kg',
      better: 'higher',
    },
    {
      label: 'Precisão RTK',
      icon: <Target size={20} />,
      key: 'precision' as const,
      unit: 'cm',
      better: 'lower',
    },
    {
      label: 'Velocidade Máxima',
      icon: <Wind size={20} />,
      key: 'speed' as const,
      unit: 'm/s',
      better: 'higher',
    },
    {
      label: 'Autonomia',
      icon: <BarChart3 size={20} />,
      key: 'autonomy' as const,
      unit: 'min',
      better: 'higher',
    },
    {
      label: 'Operação Swarm',
      icon: <TrendingUp size={20} />,
      key: 'swarm' as const,
      unit: '',
      better: 'higher',
    },
  ];

  const calculateAdvantage = (p150Value: string, competitorValue: string, better: 'higher' | 'lower') => {
    if (better === 'higher') {
      const p150 = parseFloat(p150Value);
      const comp = parseFloat(competitorValue);
      if (isNaN(p150) || isNaN(comp)) return null;
      const advantage = ((p150 - comp) / comp) * 100;
      return advantage > 0 ? `+${advantage.toFixed(0)}%` : null;
    } else {
      const p150 = parseFloat(p150Value.replace('±', ''));
      const comp = parseFloat(competitorValue.replace('±', ''));
      if (isNaN(p150) || isNaN(comp)) return null;
      const advantage = ((comp - p150) / comp) * 100;
      return advantage > 0 ? `+${advantage.toFixed(0)}%` : null;
    }
  };

  return (
    <div className="p-8">
      <div className="flex items-center gap-3 mb-8">
        <BarChart3 className="text-emerald-400" size={32} />
        <div>
          <h3 className="text-2xl font-bold">Comparador de Drones</h3>
          <p className="text-white/60">Compare o P150 Max com a concorrência</p>
        </div>
      </div>

      {/* Competitor Selector */}
      <div className="flex flex-wrap gap-3 mb-8">
        {competitors.slice(1).map((competitor) => (
          <button
            key={competitor.name}
            onClick={() => {
              if (selectedCompetitors.includes(competitor.name)) {
                setSelectedCompetitors(selectedCompetitors.filter(name => name !== competitor.name));
              } else {
                setSelectedCompetitors([...selectedCompetitors, competitor.name]);
              }
            }}
            className={`px-4 py-2 rounded-lg transition-all ${
              selectedCompetitors.includes(competitor.name)
                ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                : 'bg-white/5 text-white/60 hover:text-white hover:bg-white/10'
            }`}
          >
            {competitor.name}
          </button>
        ))}
      </div>

      {/* Comparison Table */}
      <div className="overflow-x-auto rounded-2xl border border-white/10">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left p-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 rounded-lg">
                    <TrendingUp className="text-emerald-400" size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-lg">Característica</div>
                    <div className="text-sm text-white/60">Clique nas especificações para detalhes</div>
                  </div>
                </div>
              </th>
              
              {/* P150 Max Column - Highlighted */}
              <th className="text-center p-6">
                <div className="relative">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <div className="px-3 py-1 bg-gradient-to-r from-emerald-600 to-green-600 rounded-full text-sm font-bold whitespace-nowrap">
                      NOSSO PRODUTO
                    </div>
                  </div>
                  <div className="pt-4">
                    <div className="text-xl font-bold mb-1">P150 Max</div>
                    <div className="text-lg font-bold text-emerald-400">{competitors[0].price}</div>
                  </div>
                </div>
              </th>
              
              {/* Competitor Columns */}
              {competitors
                .filter(comp => comp.name !== 'XAG P150 Max')
                .filter(comp => selectedCompetitors.includes(comp.name))
                .map((competitor, idx) => (
                  <th key={competitor.name} className="text-center p-6">
                    <div className="text-xl font-bold mb-1">{competitor.name}</div>
                    <div className="text-lg font-bold text-white/60">{competitor.price}</div>
                  </th>
                ))}
            </tr>
          </thead>
          
          <tbody>
            {features.map((feature, featureIdx) => (
              <tr 
                key={feature.label}
                className={`border-b border-white/5 hover:bg-white/5 transition-colors ${
                  featureIdx % 2 === 0 ? 'bg-white/2' : ''
                }`}
              >
                <td className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/5 rounded-lg">
                      {feature.icon}
                    </div>
                    <div>
                      <div className="font-bold">{feature.label}</div>
                      <div className="text-sm text-white/60">{feature.unit}</div>
                    </div>
                  </div>
                </td>
                
                {/* P150 Max Value */}
                <td className="text-center p-6">
                  <div className="flex flex-col items-center gap-2">
                    <div className="text-xl font-bold">
                      {competitors[0].specs[feature.key]}
                    </div>
                    <div className="px-2 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-xs font-medium">
                      MELHOR DA CLASSE
                    </div>
                  </div>
                </td>
                
                {/* Competitor Values */}
                {competitors
                  .filter(comp => comp.name !== 'XAG P150 Max')
                  .filter(comp => selectedCompetitors.includes(comp.name))
                  .map((competitor) => {
                    const advantage = calculateAdvantage(
                      competitors[0].specs[feature.key],
                      competitor.specs[feature.key],
                      feature.better
                    );
                    
                    return (
                      <td key={competitor.name} className="text-center p-6">
                        <div className="flex flex-col items-center gap-2">
                          <div className={`text-xl font-bold ${
                            advantage ? 'text-white/60' : 'text-white'
                          }`}>
                            {competitor.specs[feature.key]}
                          </div>
                          
                          {advantage && (
                            <div className="px-2 py-1 bg-gradient-to-r from-emerald-600/20 to-green-600/20 text-emerald-300 rounded-full text-xs font-medium border border-emerald-500/30">
                              {advantage} vantagem
                            </div>
                          )}
                          
                          {!advantage && feature.key === 'swarm' && competitor.specs[feature.key] === 'Não suportado' && (
                            <div className="px-2 py-1 bg-red-500/20 text-red-300 rounded-full text-xs font-medium">
                              <X className="inline-block mr-1" size={10} />
                              Não disponível
                            </div>
                          )}
                        </div>
                      </td>
                    );
                  })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Summary Stats */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-6 bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 rounded-xl border border-emerald-500/20">
          <div className="text-sm text-emerald-300 mb-2">VANTAGEM MÉDIA</div>
          <div className="text-3xl font-bold">+68%</div>
          <div className="text-sm text-white/60 mt-1">Superioridade técnica</div>
        </div>
        
        <div className="p-6 bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-xl border border-blue-500/20">
          <div className="text-sm text-blue-300 mb-2">ECONOMIA ANUAL</div>
          <div className="text-3xl font-bold">€12.500+</div>
          <div className="text-sm text-white/60 mt-1">Vs. concorrência</div>
        </div>
        
        <div className="p-6 bg-gradient-to-br from-purple-500/10 to-purple-600/5 rounded-xl border border-purple-500/20">
          <div className="text-sm text-purple-300 mb-2">ROI MAIS RÁPIDO</div>
          <div className="text-3xl font-bold">6 meses</div>
          <div className="text-sm text-white/60 mt-1">Tempo médio de retorno</div>
        </div>
      </div>

      {/* Features Comparison */}
      <div className="mt-8">
        <h4 className="text-lg font-bold mb-4">Diferenciadores Exclusivos</h4>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-white/5 rounded-lg">
            <div className="flex items-center gap-3 mb-2">
              <Check className="text-emerald-400" size={20} />
              <span className="font-medium">Sistema XRTK</span>
            </div>
            <p className="text-sm text-white/60">
              Precisão centimétrica exclusiva XAG. Concorrentes usam RTK convencional com menor estabilidade.
            </p>
          </div>
          
          <div className="p-4 bg-white/5 rounded-lg">
            <div className="flex items-center gap-3 mb-2">
              <Check className="text-emerald-400" size={20} />
              <span className="font-medium">Operação Swarm</span>
            </div>
            <p className="text-sm text-white/60">
              Controle de até 10 drones simultaneamente. Competição limitada a 3-5 drones.
            </p>
          </div>
          
          <div className="p-4 bg-white/5 rounded-lg">
            <div className="flex items-center gap-3 mb-2">
              <Check className="text-emerald-400" size={20} />
              <span className="font-medium">SuperX 5 Ultra</span>
            </div>
            <p className="text-sm text-white/60">
              IA integrada com radar 4D. Sistemas concorrentes usam processadores convencionais.
            </p>
          </div>
          
          <div className="p-4 bg-white/5 rounded-lg">
            <div className="flex items-center gap-3 mb-2">
              <Check className="text-emerald-400" size={20} />
              <span className="font-medium">Garantia 3 Anos</span>
            </div>
            <p className="text-sm text-white/60">
              Garantia extendida exclusiva. Concorrentes oferecem apenas 1-2 anos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}