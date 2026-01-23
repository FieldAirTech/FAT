import { useState, useMemo } from 'react';
import { TrendingUp, TrendingDown, Calculator, DollarSign, Percent, Calendar, Target, Leaf } from 'lucide-react';

interface CalculationInputs {
  area: number; // hectares
  applicationsPerYear: number;
  laborCost: number; // €/hour
  chemicalCost: number; // €/hectare
  waterCost: number; // €/hectare
  droneCost: number; // €
  financingTerm: number; // months
}

export default function PerformanceCalculator() {
  const [inputs, setInputs] = useState<CalculationInputs>({
    area: 100,
    applicationsPerYear: 8,
    laborCost: 15,
    chemicalCost: 150,
    waterCost: 50,
    droneCost: 55000,
    financingTerm: 36,
  });

  const [results, setResults] = useState({
    traditionalCost: 0,
    droneCost: 0,
    annualSavings: 0,
    roiMonths: 0,
    fiveYearSavings: 0,
  });

  const calculateROI = () => {
    // Traditional method calculations
    const laborHoursPerHectare = 2; // hours
    const waterUsageTraditional = 300; // L/hectare
    const chemicalWasteTraditional = 0.3; // 30% waste
    
    const laborCostTraditional = inputs.area * laborHoursPerHectare * inputs.laborCost * inputs.applicationsPerYear;
    const chemicalCostTraditional = inputs.area * inputs.chemicalCost * (1 + chemicalWasteTraditional) * inputs.applicationsPerYear;
    const waterCostTraditional = inputs.area * waterUsageTraditional * (inputs.waterCost / 1000) * inputs.applicationsPerYear;
    
    const traditionalTotal = laborCostTraditional + chemicalCostTraditional + waterCostTraditional;

    // Drone method calculations
    const laborHoursDrone = 0.2; // hours (automated)
    const waterUsageDrone = 50; // L/hectare
    const chemicalWasteDrone = 0.1; // 10% waste
    
    const laborCostDrone = inputs.area * laborHoursDrone * inputs.laborCost * inputs.applicationsPerYear;
    const chemicalCostDrone = inputs.area * inputs.chemicalCost * (1 - chemicalWasteDrone) * inputs.applicationsPerYear;
    const waterCostDrone = inputs.area * waterUsageDrone * (inputs.waterCost / 1000) * inputs.applicationsPerYear;
    const maintenanceCost = inputs.droneCost * 0.05; // 5% annual maintenance
    const batteryCost = 2000; // annual battery replacement
    
    const droneOperationalCost = laborCostDrone + chemicalCostDrone + waterCostDrone + maintenanceCost + batteryCost;
    const droneAnnualCost = droneOperationalCost + (inputs.droneCost / inputs.financingTerm) * 12;

    const annualSavings = traditionalTotal - droneAnnualCost;
    const roiMonths = annualSavings > 0 ? Math.ceil(inputs.droneCost / annualSavings * 12) : 999;
    const fiveYearSavings = annualSavings * 5 - inputs.droneCost;

    setResults({
      traditionalCost: Math.round(traditionalTotal),
      droneCost: Math.round(droneAnnualCost),
      annualSavings: Math.round(annualSavings),
      roiMonths,
      fiveYearSavings: Math.round(fiveYearSavings),
    });
  };

  useMemo(() => {
    calculateROI();
  }, [inputs]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('pt-PT', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="p-8">
      <div className="flex items-center gap-3 mb-8">
        <Calculator className="text-emerald-400" size={32} />
        <div>
          <h3 className="text-2xl font-bold">Calculadora de ROI</h3>
          <p className="text-white/60">Calcule o retorno do investimento do P150 Max</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          <h4 className="text-lg font-bold mb-4">Configure sua operação</h4>
          
          {[
            {
              label: 'Área Total (hectares)',
              value: inputs.area,
              min: 10,
              max: 1000,
              step: 10,
              icon: <Target size={20} />,
              onChange: (val: number) => setInputs({...inputs, area: val}),
            },
            {
              label: 'Aplicações por Ano',
              value: inputs.applicationsPerYear,
              min: 1,
              max: 20,
              step: 1,
              icon: <Calendar size={20} />,
              onChange: (val: number) => setInputs({...inputs, applicationsPerYear: val}),
            },
            {
              label: 'Custo Mão-de-Obra (€/hora)',
              value: inputs.laborCost,
              min: 10,
              max: 30,
              step: 1,
              icon: <DollarSign size={20} />,
              onChange: (val: number) => setInputs({...inputs, laborCost: val}),
            },
            {
              label: 'Custo Produtos (€/hectare)',
              value: inputs.chemicalCost,
              min: 50,
              max: 300,
              step: 10,
              icon: <Leaf size={20} />,
              onChange: (val: number) => setInputs({...inputs, chemicalCost: val}),
            },
            {
              label: 'Financiamento (meses)',
              value: inputs.financingTerm,
              min: 12,
              max: 60,
              step: 12,
              icon: <Percent size={20} />,
              onChange: (val: number) => setInputs({...inputs, financingTerm: val}),
            },
          ].map((input, idx) => (
            <div key={idx} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-white/80">
                  {input.icon}
                  <span>{input.label}</span>
                </div>
                <div className="text-lg font-bold">{input.value}</div>
              </div>
              <input
                type="range"
                min={input.min}
                max={input.max}
                step={input.step}
                value={input.value}
                onChange={(e) => input.onChange(Number(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-xs text-white/40">
                <span>{input.min}</span>
                <span>{input.max}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Results Section */}
        <div className="space-y-6">
          <h4 className="text-lg font-bold mb-4">Resultados do Investimento</h4>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 rounded-xl border border-emerald-500/20">
              <div className="text-sm text-emerald-300 mb-1">Método Tradicional</div>
              <div className="text-2xl font-bold">{formatCurrency(results.traditionalCost)}</div>
              <div className="text-xs text-white/40 mt-1">Custo anual</div>
            </div>
            
            <div className="p-4 bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-xl border border-blue-500/20">
              <div className="text-sm text-blue-300 mb-1">Com P150 Max</div>
              <div className="text-2xl font-bold">{formatCurrency(results.droneCost)}</div>
              <div className="text-xs text-white/40 mt-1">Custo anual</div>
            </div>
          </div>

          {/* Savings Highlight */}
          <div className="p-6 bg-gradient-to-r from-emerald-600/20 to-green-600/20 rounded-xl border border-emerald-500/30">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-emerald-300 mb-1">ECONOMIA ANUAL</div>
                <div className="text-3xl font-bold">{formatCurrency(results.annualSavings)}</div>
              </div>
              <div className="p-3 bg-emerald-500/20 rounded-full">
                <TrendingUp className="text-emerald-400" size={32} />
              </div>
            </div>
          </div>

          {/* ROI Timeline */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="text-white/80">Retorno do Investimento</div>
              <div className="text-xl font-bold">
                {results.roiMonths < 999 ? `${results.roiMonths} meses` : '> 10 anos'}
              </div>
            </div>
            
            <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-emerald-500 to-green-500 transition-all duration-1000"
                style={{ width: `${Math.min(100, (results.roiMonths / 36) * 100)}%` }}
              />
            </div>
            
            <div className="flex justify-between text-xs text-white/40">
              <span>Investimento</span>
              <span>ROI 12m</span>
              <span>ROI 24m</span>
              <span>ROI 36m</span>
            </div>
          </div>

          {/* 5-Year Projection */}
          <div className="p-4 bg-gradient-to-br from-purple-500/10 to-purple-600/5 rounded-xl border border-purple-500/20">
            <div className="flex items-center gap-3 mb-2">
              <Calendar className="text-purple-400" size={20} />
              <div className="text-sm text-purple-300">Projeção 5 Anos</div>
            </div>
            <div className={`text-2xl font-bold ${results.fiveYearSavings > 0 ? 'text-emerald-400' : 'text-red-400'}`}>
              {results.fiveYearSavings > 0 ? '+' : ''}{formatCurrency(results.fiveYearSavings)}
            </div>
            <div className="text-xs text-white/40 mt-1">Lucro líquido acumulado</div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-3 gap-3">
            <div className="text-center p-3 bg-white/5 rounded-lg">
              <div className="text-lg font-bold text-emerald-400">-85%</div>
              <div className="text-xs text-white/60 mt-1">Água</div>
            </div>
            <div className="text-center p-3 bg-white/5 rounded-lg">
              <div className="text-lg font-bold text-emerald-400">-60%</div>
              <div className="text-xs text-white/60 mt-1">Produtos</div>
            </div>
            <div className="text-center p-3 bg-white/5 rounded-lg">
              <div className="text-lg font-bold text-emerald-400">-90%</div>
              <div className="text-xs text-white/60 mt-1">Mão-de-Obra</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #10b981;
          cursor: pointer;
        }
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #10b981;
          cursor: pointer;
          border: none;
        }
      `}</style>
    </div>
  );
}