import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  Download, 
  Printer, 
  FileText, 
  Check,
  Maximize2,
  Minimize2,
  Droplets,
  Package,
  Target,
  Wind,
  Battery,
  Power,
  Shield,
  Phone,
  Mail,
  MapPin,
  Ruler,
  Wifi,
  Zap,
  Eye,
  Home,
  Globe,
  Clock,
  Thermometer,
  Layers,
  CloudRain,
  Weight,
  Gauge,
  Settings
} from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from '../../i18n/translations';

export default function P150MaxTechSheet() {
  const [isExpanded, setIsExpanded] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];

  // Memoize page texts for performance
  const pageTexts = useMemo(() => ({
    pt: {
      // Header
      backToProduct: "Voltar ao produto",
      technicalDocument: "Documento técnico",
      expand: "Expandir",
      contract: "Contrair",
      print: "Imprimir",
      downloadPDF: "Download PDF",
      
      // Product Info
      officialDistributor: "Distribuidor Oficial",
      productName: "XAG P150 Max",
      productDescription: "Plataforma aérea de alta capacidade para agricultura de precisão",
      productCode: "Código Produto",
      compatible: "Compatível",
      
      // Main Highlights
      highlights: [
        { 
          value: "80L", 
          label: "Tanque Líquido", 
          icon: Droplets,
          enLabel: "Liquid Tank"
        },
        { 
          value: "115L", 
          label: "Contentor Granular", 
          icon: Package,
          enLabel: "Granular Container"
        },
        { 
          value: "80kg", 
          label: "Carga Máxima", 
          icon: Weight,
          enLabel: "Maximum Load"
        },
        { 
          value: "20m/s", 
          label: "Velocidade Máx", 
          icon: Gauge,
          enLabel: "Max Speed"
        },
        { 
          value: "±10cm", 
          label: "Precisão RTK", 
          icon: Target,
          enLabel: "RTK Precision"
        },
        { 
          value: "IPX6K", 
          label: "Protecção", 
          icon: Shield,
          enLabel: "Protection"
        },
      ],
      
      // Technical Info Panel
      techInfo: "Info Técnica",
      goToSection: "Ir para secção",
      
      // Specification Sections
      sections: [
        { id: 'basicas', label: 'Parâmetros Básicos', icon: Ruler, enLabel: 'Basic Parameters' },
        { id: 'voo', label: 'Performance Voo', icon: Wind, enLabel: 'Flight Performance' },
        { id: 'propulsao', label: 'Propulsão', icon: Zap, enLabel: 'Propulsion' },
        { id: 'revospray', label: 'RevoSpray 5', icon: Droplets, enLabel: 'RevoSpray 5' },
        { id: 'revocast', label: 'RevoCast 5', icon: Package, enLabel: 'RevoCast 5' },
        { id: 'radar', label: 'Radar 4D', icon: Target, enLabel: '4D Radar' },
        { id: 'bateria', label: 'Bateria', icon: Battery, enLabel: 'Battery' },
        { id: 'carregamento', label: 'Carregamento', icon: Power, enLabel: 'Charging' },
        { id: 'controlo', label: 'Controlo', icon: Wifi, enLabel: 'Control' },
      ],
      
      // Specifications Data
      specifications: {
        basicas: [
          { label: "Dimensões (dobrado)", value: "1057×1016×765 mm", enLabel: "Dimensions (folded)" },
          { label: "Dimensões (desdobrado)", value: "3250×3254×765 mm", enLabel: "Dimensions (unfolded)" },
          { label: "Peso Vazio", value: "56 kg (RevoSpray)", enLabel: "Empty Weight" },
          { label: "Peso Máx Descolagem", value: "136 kg (pulverização)", enLabel: "Max Takeoff Weight" },
          { label: "Envergadura Diagonal", value: "2335 mm", enLabel: "Diagonal Wingspan" },
          { label: "Material dos Braços", value: "Liga de Alumínio", enLabel: "Arm Material" },
        ],
        voo: [
          { label: "Velocidade Máxima", value: "20 m/s", enLabel: "Maximum Speed" },
          { label: "Altitude Máxima", value: "30 m", enLabel: "Maximum Altitude" },
          { label: "Distância Máxima", value: "2000 m", enLabel: "Maximum Distance" },
          { label: "Precisão (com RTK)", value: "±10 cm horizontal/vertical", enLabel: "Precision (with RTK)" },
          { label: "Temperatura Operacional", value: "0°C a 40°C", enLabel: "Operating Temperature" },
          { label: "Altura de Voo Recomendada", value: "1.5 - 100 m", enLabel: "Recommended Flight Height" },
        ],
        propulsao: [
          { label: "Motores", value: "4 unidades", enLabel: "Motors" },
          { label: "Tração Máx (por motor)", value: "56 kg", enLabel: "Max Thrust (per motor)" },
          { label: "Potência Nominal", value: "4850 W cada", enLabel: "Nominal Power (each)" },
          { label: "ESC Corrente Máx (30s)", value: "380 A", enLabel: "ESC Max Current (30s)" },
          { label: "Corrente Contínua", value: "140 A", enLabel: "Continuous Current" },
          { label: "Hélices", value: "Fibra de carbono, 1600mm", enLabel: "Propellers" },
        ],
        revospray: [
          { label: "Capacidade Tanque", value: "80 L", enLabel: "Tank Capacity" },
          { label: "Carga Máxima", value: "80 kg", enLabel: "Maximum Load" },
          { label: "Bicos Atomizadores", value: "2 unidades", enLabel: "Atomizer Nozzles" },
          { label: "Tamanho Gotas", value: "60-500 μm", enLabel: "Droplet Size" },
          { label: "Velocidade Rotação", value: "1500-16000 RPM", enLabel: "Rotation Speed" },
          { label: "Largura Pulverização", value: "5-10 m", enLabel: "Spraying Width" },
          { label: "Bombas", value: "2 impeller flexível", enLabel: "Pumps" },
          { label: "Vazão Máxima", value: "32 L/min (dual)", enLabel: "Maximum Flow Rate" },
        ],
        revocast: [
          { label: "Capacidade Contentor", value: "115 L", enLabel: "Container Capacity" },
          { label: "Carga Máxima", value: "80 kg", enLabel: "Maximum Load" },
          { label: "Alimentador Parafuso", value: "1 unidade", enLabel: "Screw Feeder" },
          { label: "Velocidade Máxima", value: "17000 RPM", enLabel: "Maximum Speed" },
          { label: "Taxa Espalhamento", value: "300 kg/min", enLabel: "Spreading Rate" },
          { label: "Largura Efectiva", value: "5-9 m", enLabel: "Effective Width" },
          { label: "Tamanho Grânulos", value: "1-10 mm", enLabel: "Granule Size" },
        ],
        radar: [
          { label: "Modelo", valor: "RD2488_25", enLabel: "Model" },
          { label: "Alcance", valor: "1.5 - 100 m", enLabel: "Range" },
          { label: "Campo de Visão", valor: "±40° horizontal, ±115° vertical", enLabel: "Field of View" },
          { label: "Frequência", valor: "24 GHz", enLabel: "Frequency" },
          { label: "Potência", valor: "<15 W", enLabel: "Power" },
          { label: "Distância Evitação", valor: "2.5 m", enLabel: "Avoidance Distance" },
          { label: "Velocidade Relativa Máx", valor: "≤13.8 m/s", enLabel: "Max Relative Speed" },
        ],
        bateria: [
          { label: "Modelo", valor: "M1PPA141050AH", enLabel: "Model" },
          { label: "Tipo", valor: "Li-Polymer", enLabel: "Type" },
          { label: "Capacidade", valor: "20000 mAh", enLabel: "Capacity" },
          { label: "Tensão Nominal", valor: "52.5 V", enLabel: "Nominal Voltage" },
          { label: "Corrente Máx Carga", valor: "120 A", enLabel: "Max Charging Current" },
          { label: "Temperatura Carga", valor: "10°C a 45°C", enLabel: "Charging Temperature" },
        ],
        carregamento: [
          { label: "Carregador CM13600S", valor: "59.92V⎓55A", enLabel: "CM13600S Charger" },
          { label: "Estação GC4000+", valor: "3400W nominal / 5100W máx", enLabel: "GC4000+ Station" },
          { label: "Combustível Estação", valor: "15 L", enLabel: "Station Fuel" },
          { label: "Potência Estação", valor: "3400W nominal", enLabel: "Station Power" },
          { label: "Torre Refrigeração", valor: "5L capacidade", enLabel: "Cooling Tower" },
          { label: "Consumo Água", valor: "≤500 ml/h", enLabel: "Water Consumption" },
        ],
        controlo: [
          { label: "Controlador SRC5", valor: "20000 mAh", enLabel: "SRC5 Controller" },
          { label: "Alcance Sinal (FCC)", valor: "2000 m", enLabel: "Signal Range (FCC)" },
          { label: "Frequência", valor: "2.4GHz & 5.8GHz", enLabel: "Frequency" },
          { label: "Temperatura Operacional", valor: "-10°C a 40°C", enLabel: "Operating Temperature" },
          { label: "Compatibilidade", valor: "P150 Max, P150, P60", enLabel: "Compatibility" },
          { label: "Estação XRTK7", valor: "IP65, 10000mAh", enLabel: "XRTK7 Station" },
        ]
      },
      
      // Support Information
      certificationsLabel: "Certificações",
      certifications: ["CE", "IPX6K", "ISO 9001", "ISO 14001"],
      euCertified: "Equipamento certificado para operação na União Europeia",
      
      warrantyLabel: "Garantia & Suporte",
      warrantyPeriod: "Período de Garantia",
      warranty: {
        periodo: "12 meses",
        cobertura: "Cobertura completa peças e mão-de-obra",
        suporte: "Suporte técnico 24/7",
        resposta: "48h em Portugal Continental"
      },
      
      contactLabel: "Contacto Técnico",
      contact: {
        tecnico: "tecnico@fieldairtech.pt",
        telefone: "+351 934 449 370",
        morada: "Biscainho, Coruche, Portugal",
        website: "www.fieldairtech.pt"
      },
      
      // Footer
      professionalDoc: "Documento técnico para uso profissional",
      issuedOn: "Emitido em",
      distributorInfo: "Distribuidor Oficial XAG em Portugal",
      rightsReserved: "Todos os direitos reservados",
      documentId: "ID"
    },
    
    en: {
      // Header
      backToProduct: "Back to Product",
      technicalDocument: "Technical Document",
      expand: "Expand",
      contract: "Contract",
      print: "Print",
      downloadPDF: "Download PDF",
      
      // Product Info
      officialDistributor: "Official Distributor",
      productName: "XAG P150 Max",
      productDescription: "High-capacity aerial platform for precision agriculture",
      productCode: "Product Code",
      compatible: "Compatible",
      
      // Main Highlights
      highlights: [
        { 
          value: "80L", 
          label: "Liquid Tank", 
          icon: Droplets,
          ptLabel: "Tanque Líquido"
        },
        { 
          value: "115L", 
          label: "Granular Container", 
          icon: Package,
          ptLabel: "Contentor Granular"
        },
        { 
          value: "80kg", 
          label: "Maximum Load", 
          icon: Weight,
          ptLabel: "Carga Máxima"
        },
        { 
          value: "20m/s", 
          label: "Max Speed", 
          icon: Gauge,
          ptLabel: "Velocidade Máx"
        },
        { 
          value: "±10cm", 
          label: "RTK Precision", 
          icon: Target,
          ptLabel: "Precisão RTK"
        },
        { 
          value: "IPX6K", 
          label: "Protection", 
          icon: Shield,
          ptLabel: "Protecção"
        },
      ],
      
      // Technical Info Panel
      techInfo: "Technical Info",
      goToSection: "Go to Section",
      
      // Specification Sections
      sections: [
        { id: 'basicas', label: 'Basic Parameters', icon: Ruler, ptLabel: 'Parâmetros Básicos' },
        { id: 'voo', label: 'Flight Performance', icon: Wind, ptLabel: 'Performance Voo' },
        { id: 'propulsao', label: 'Propulsion', icon: Zap, ptLabel: 'Propulsão' },
        { id: 'revospray', label: 'RevoSpray 5', icon: Droplets, ptLabel: 'RevoSpray 5' },
        { id: 'revocast', label: 'RevoCast 5', icon: Package, ptLabel: 'RevoCast 5' },
        { id: 'radar', label: '4D Radar', icon: Target, ptLabel: 'Radar 4D' },
        { id: 'bateria', label: 'Battery', icon: Battery, ptLabel: 'Bateria' },
        { id: 'carregamento', label: 'Charging', icon: Power, ptLabel: 'Carregamento' },
        { id: 'controlo', label: 'Control', icon: Wifi, ptLabel: 'Controlo' },
      ],
      
      // Specifications Data
      specifications: {
        basicas: [
          { label: "Dimensions (folded)", value: "1057×1016×765 mm", ptLabel: "Dimensões (dobrado)" },
          { label: "Dimensions (unfolded)", value: "3250×3254×765 mm", ptLabel: "Dimensões (desdobrado)" },
          { label: "Empty Weight", value: "56 kg (RevoSpray)", ptLabel: "Peso Vazio" },
          { label: "Max Takeoff Weight", value: "136 kg (spraying)", ptLabel: "Peso Máx Descolagem" },
          { label: "Diagonal Wingspan", value: "2335 mm", ptLabel: "Envergadura Diagonal" },
          { label: "Arm Material", value: "Aluminum Alloy", ptLabel: "Material dos Braços" },
        ],
        voo: [
          { label: "Maximum Speed", value: "20 m/s", ptLabel: "Velocidade Máxima" },
          { label: "Maximum Altitude", value: "30 m", ptLabel: "Altitude Máxima" },
          { label: "Maximum Distance", value: "2000 m", ptLabel: "Distância Máxima" },
          { label: "Precision (with RTK)", value: "±10 cm horizontal/vertical", ptLabel: "Precisão (com RTK)" },
          { label: "Operating Temperature", value: "0°C to 40°C", ptLabel: "Temperatura Operacional" },
          { label: "Recommended Flight Height", value: "1.5 - 100 m", ptLabel: "Altura de Voo Recomendada" },
        ],
        propulsao: [
          { label: "Motors", value: "4 units", ptLabel: "Motores" },
          { label: "Max Thrust (per motor)", value: "56 kg", ptLabel: "Tração Máx (por motor)" },
          { label: "Nominal Power (each)", value: "4850 W each", ptLabel: "Potência Nominal" },
          { label: "ESC Max Current (30s)", value: "380 A", ptLabel: "ESC Corrente Máx (30s)" },
          { label: "Continuous Current", value: "140 A", ptLabel: "Corrente Contínua" },
          { label: "Propellers", value: "Carbon fiber, 1600mm", ptLabel: "Hélices" },
        ],
        revospray: [
          { label: "Tank Capacity", value: "80 L", ptLabel: "Capacidade Tanque" },
          { label: "Maximum Load", value: "80 kg", ptLabel: "Carga Máxima" },
          { label: "Atomizer Nozzles", value: "2 units", ptLabel: "Bicos Atomizadores" },
          { label: "Droplet Size", value: "60-500 μm", ptLabel: "Tamanho Gotas" },
          { label: "Rotation Speed", value: "1500-16000 RPM", ptLabel: "Velocidade Rotação" },
          { label: "Spraying Width", value: "5-10 m", ptLabel: "Largura Pulverização" },
          { label: "Pumps", value: "2 flexible impeller", ptLabel: "Bombas" },
          { label: "Maximum Flow Rate", value: "32 L/min (dual)", ptLabel: "Vazão Máxima" },
        ],
        revocast: [
          { label: "Container Capacity", value: "115 L", ptLabel: "Capacidade Contentor" },
          { label: "Maximum Load", value: "80 kg", ptLabel: "Carga Máxima" },
          { label: "Screw Feeder", value: "1 unit", ptLabel: "Alimentador Parafuso" },
          { label: "Maximum Speed", value: "17000 RPM", ptLabel: "Velocidade Máxima" },
          { label: "Spreading Rate", value: "300 kg/min", ptLabel: "Taxa Espalhamento" },
          { label: "Effective Width", value: "5-9 m", ptLabel: "Largura Efectiva" },
          { label: "Granule Size", value: "1-10 mm", ptLabel: "Tamanho Grânulos" },
        ],
        radar: [
          { label: "Model", value: "RD2488_25", ptLabel: "Modelo" },
          { label: "Range", value: "1.5 - 100 m", ptLabel: "Alcance" },
          { label: "Field of View", value: "±40° horizontal, ±115° vertical", ptLabel: "Campo de Visão" },
          { label: "Frequency", value: "24 GHz", ptLabel: "Frequência" },
          { label: "Power", value: "<15 W", ptLabel: "Potência" },
          { label: "Avoidance Distance", value: "2.5 m", ptLabel: "Distância Evitação" },
          { label: "Max Relative Speed", value: "≤13.8 m/s", ptLabel: "Velocidade Relativa Máx" },
        ],
        bateria: [
          { label: "Model", value: "M1PPA141050AH", ptLabel: "Modelo" },
          { label: "Type", value: "Li-Polymer", ptLabel: "Tipo" },
          { label: "Capacity", value: "20000 mAh", ptLabel: "Capacidade" },
          { label: "Nominal Voltage", value: "52.5 V", ptLabel: "Tensão Nominal" },
          { label: "Max Charging Current", value: "120 A", ptLabel: "Corrente Máx Carga" },
          { label: "Charging Temperature", value: "10°C to 45°C", ptLabel: "Temperatura Carga" },
        ],
        carregamento: [
          { label: "CM13600S Charger", value: "59.92V⎓55A", ptLabel: "Carregador CM13600S" },
          { label: "GC4000+ Station", value: "3400W nominal / 5100W max", ptLabel: "Estação GC4000+" },
          { label: "Station Fuel", value: "15 L", ptLabel: "Combustível Estação" },
          { label: "Station Power", value: "3400W nominal", ptLabel: "Potência Estação" },
          { label: "Cooling Tower", value: "5L capacity", ptLabel: "Torre Refrigeração" },
          { label: "Water Consumption", value: "≤500 ml/h", ptLabel: "Consumo Água" },
        ],
        controlo: [
          { label: "SRC5 Controller", value: "20000 mAh", ptLabel: "Controlador SRC5" },
          { label: "Signal Range (FCC)", value: "2000 m", ptLabel: "Alcance Sinal (FCC)" },
          { label: "Frequency", value: "2.4GHz & 5.8GHz", ptLabel: "Frequência" },
          { label: "Operating Temperature", value: "-10°C to 40°C", ptLabel: "Temperatura Operacional" },
          { label: "Compatibility", value: "P150 Max, P150, P60", ptLabel: "Compatibilidade" },
          { label: "XRTK7 Station", value: "IP65, 10000mAh", ptLabel: "Estação XRTK7" },
        ]
      },
      
      // Support Information
      certificationsLabel: "Certifications",
      certifications: ["CE", "IPX6K", "ISO 9001", "ISO 14001"],
      euCertified: "Equipment certified for operation in the European Union",
      
      warrantyLabel: "Warranty & Support",
      warrantyPeriod: "Warranty Period",
      warranty: {
        periodo: "12 months",
        cobertura: "Complete parts and labor coverage",
        suporte: "24/7 technical support",
        resposta: "48h in Continental Portugal"
      },
      
      contactLabel: "Technical Contact",
      contact: {
        tecnico: "tecnico@fieldairtech.pt",
        telefone: "+351 934 449 370",
        morada: "Biscainho, Coruche, Portugal",
        website: "www.fieldairtech.pt"
      },
      
      // Footer
      professionalDoc: "Technical document for professional use",
      issuedOn: "Issued on",
      distributorInfo: "Official XAG Distributor in Portugal",
      rightsReserved: "All rights reserved",
      documentId: "ID"
    }
  }), [language]);

  const p = pageTexts[language];
  const product = {
    nome: p.productName,
    codigo: language === 'pt' ? "XAG-P150MAX-PT" : "XAG-P150MAX-EN",
    versao: "2.1",
    categoria: language === 'pt' ? "Drone Agrícola" : "Agricultural Drone",
    descricao: p.productDescription,
  };

  const renderizarSecaoEspecificacoes = (secaoId, especificacoesLista) => {
    const secao = p.sections.find(s => s.id === secaoId);
    const Icone = secao?.icon;
    
    return (
      <div id={secaoId} className="scroll-mt-60 mb-12">
        <div className="flex items-center gap-3 mb-6">
          {Icone && (
            <div className="p-2 bg-gray-100 rounded-lg group">
              <Icone className="text-gray-600" size={20} />
            </div>
          )}
          <h3 className="text-xl font-bold text-gray-900">
            {secao?.label}
            {secao?.ptLabel && language === 'en' && (
              <span className="text-xs text-gray-500 ml-2 font-normal">
                ({secao.ptLabel})
              </span>
            )}
            {secao?.enLabel && language === 'pt' && (
              <span className="text-xs text-gray-500 ml-2 font-normal">
                ({secao.enLabel})
              </span>
            )}
          </h3>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          {especificacoesLista.map((item, idx) => (
            <div key={idx} className="group flex justify-between items-center py-3 px-4 bg-gray-50 rounded-lg border border-gray-100 hover:border-gray-200 transition-colors">
              <div className="flex flex-col">
                <span className="text-gray-700">{item.label}</span>
                {item.ptLabel && language === 'en' && (
                  <span className="text-xs text-gray-500 mt-0.5">{item.ptLabel}</span>
                )}
                {item.enLabel && language === 'pt' && (
                  <span className="text-xs text-gray-500 mt-0.5">{item.enLabel}</span>
                )}
              </div>
              <span className="font-medium text-gray-900 text-right">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderizarDestaqueItem = (item, idx) => {
    const Icone = item.icon;
    return (
      <div key={idx} className="bg-white border border-gray-200 rounded-lg p-4 hover:border-emerald-300 transition-colors group">
        <div className="flex flex-col items-center text-center">
          <div className="mb-2 p-2 bg-gray-50 rounded-lg group-hover:bg-emerald-50 transition-colors">
            <Icone size={20} className="text-gray-600 group-hover:text-emerald-600" />
          </div>
          <div className="text-xl font-bold text-gray-900 mb-1">{item.value}</div>
          <div className="text-xs text-gray-600">{item.label}</div>
          {item.ptLabel && language === 'en' && (
            <div className="text-xs text-gray-400 mt-0.5">{item.ptLabel}</div>
          )}
          {item.enLabel && language === 'pt' && (
            <div className="text-xs text-gray-400 mt-0.5">{item.enLabel}</div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-36">
      <style>{`
        .spec-card {
          position: relative;
          transition: all 0.3s ease;
        }
        
        .spec-card:hover .translation-overlay {
          opacity: 1;
          transform: translateY(0);
        }
        
        .translation-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(255,255,255,0.95), rgba(255,255,255,0.98));
          padding: 1rem;
          border-radius: 0.5rem;
          opacity: 0;
          transform: translateY(10px);
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          backdrop-filter: blur(5px);
        }
      `}</style>

      {/* Top Bar */}
      <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link 
                to="/produtos/p150-max" 
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors group"
              >
                <ArrowLeft size={18} className="group-hover:-translate-x-0.5 transition-transform" />
                <span className="text-sm font-medium">{p.backToProduct}</span>
              </Link>
              
              <div className="h-4 w-px bg-gray-200"></div>
              
              <div className="hidden md:flex items-center gap-2">
                <FileText size={16} className="text-gray-400" />
                <div>
                  <div className="text-xs text-gray-500">{p.technicalDocument}</div>
                  <div className="text-sm font-medium text-gray-700">v{product.versao}</div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors group"
                title={isExpanded ? p.contract : p.expand}
              >
                {isExpanded ? 
                  <Minimize2 size={18} className="text-gray-600 group-hover:text-gray-900" /> : 
                  <Maximize2 size={18} className="text-gray-600 group-hover:text-gray-900" />
                }
              </button>
              <button 
                onClick={() => window.print()}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors group"
                title={p.print}
              >
                <Printer size={18} className="text-gray-600 group-hover:text-gray-900" />
              </button>
              <button 
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors group"
                title={p.downloadPDF}
              >
                <Download size={18} className="text-gray-600 group-hover:text-gray-900" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              <div className="mb-2">
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-medium rounded-full border border-emerald-100">
                  <Check size={12} />
                  {p.officialDistributor}
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                {product.nome}
              </h1>
              
              <p className="text-lg text-gray-600 mb-8">
                {product.descricao}
              </p>
              
              {/* Highlights */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
                {p.highlights.map(renderizarDestaqueItem)}
              </div>
            </div>
            
            {/* Side Panel */}
            <div className="lg:w-68">
              <div className="bg-white border border-gray-200 rounded-xl p-4 sticky top-28">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-gray-900">{p.techInfo}</h3>
                  <div className="text-xs text-gray-400">v{product.versao}</div>
                </div>
                
                {/* Main Information */}
                <div className="space-y-3 mb-4">
                  <div>
                    <div className="text-xs text-gray-500 mb-0.5">{p.productCode}</div>
                    <div className="font-mono text-sm text-gray-900">{product.codigo}</div>
                  </div>
                  
                  <div>
                    <div className="text-xs text-gray-500 mb-0.5">{p.compatible}</div>
                    <div className="text-xs text-gray-700">
                      <div className="flex items-center gap-1">
                        <span className="px-1.5 py-0.5 bg-gray-100 rounded">P150 Max</span>
                        <span className="px-1.5 py-0.5 bg-gray-100 rounded">P150</span>
                        <span className="px-1.5 py-0.5 bg-gray-100 rounded">P60</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Quick Navigation */}
                <div className="pt-3 border-t border-gray-100">
                  <div className="text-xs text-gray-500 mb-2">{p.goToSection}</div>
                  <div className="grid grid-cols-2 gap-1.5">
                    {p.sections.map((secao) => (
                      <a 
                        key={secao.id}
                        href={`#${secao.id}`}
                        className="flex items-center gap-1.5 px-2 py-1.5 text-xs text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded transition-colors"
                      >
                        {secao.icon && <secao.icon size={12} />}
                        <span className="truncate">{secao.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className={isExpanded ? "space-y-8" : "space-y-12"}>
          {Object.entries(p.specifications).map(([key, specs]) => (
            renderizarSecaoEspecificacoes(key, specs)
          ))}
        </div>

        {/* Support Information */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {/* Certifications */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-50 rounded-lg">
                <Shield className="text-blue-600" size={20} />
              </div>
              <h3 className="text-lg font-bold text-gray-900">{p.certificationsLabel}</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              {p.certifications.map((cert, idx) => (
                <div key={idx} className="flex items-center justify-center p-3 bg-gray-50 rounded-lg border border-gray-100">
                  <span className="font-medium text-gray-900">{cert}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-100">
              <div className="text-sm text-gray-600">
                {p.euCertified}
              </div>
            </div>
          </div>

          {/* Warranty */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-emerald-50 rounded-lg">
                <Shield className="text-emerald-600" size={20} />
              </div>
              <h3 className="text-lg font-bold text-gray-900">{p.warrantyLabel}</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <div className="text-sm text-gray-500 mb-1">{p.warrantyPeriod}</div>
                <div className="text-xl font-bold text-gray-900">{p.warranty.periodo}</div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <Check size={16} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{p.warranty.cobertura}</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check size={16} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{p.warranty.suporte}</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check size={16} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{p.warranty.resposta}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-xl p-6">
            <h3 className="text-lg font-bold mb-6">{p.contactLabel}</h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-gray-300" />
                <a href={`tel:${p.contact.telefone}`} className="hover:text-gray-200 transition-colors">
                  {p.contact.telefone}
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-gray-300" />
                <a href={`mailto:${p.contact.tecnico}`} className="text-sm hover:text-gray-200 transition-colors">
                  {p.contact.tecnico}
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-gray-300" />
                <span className="text-sm text-gray-300">{p.contact.morada}</span>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-700">
              <div className="text-xs text-gray-400">
                {p.distributorInfo}
              </div>
            </div>
          </div>
        </div>

        {/* Document Footer */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="text-center">
            <div className="text-sm text-gray-500 mb-3">
              {p.professionalDoc} • {p.issuedOn} {new Date().toLocaleDateString(language === 'pt' ? 'pt-PT' : 'en-US')}
            </div>
            <div className="text-xs text-gray-400 space-y-1">
              <div>{p.distributorInfo} • {p.contact.website}</div>
              <div>{p.rightsReserved} • {p.documentId}: {product.codigo}-{product.versao}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}