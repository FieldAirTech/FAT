import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Check, FileText, Download, Printer, Maximize2, Minimize2, 
  ArrowLeft, Ruler, Wind, Zap, Droplets, Package, 
  Target, Battery, Power, Wifi, Shield, 
  Phone, Mail, MapPin, Globe, Clock, 
  Thermometer, Weight, Gauge, Radar, Camera,
  CloudRain, Sprout, Layers, Settings, Home
} from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from '../../i18n/translations';

export default function FP700TechSheet() {
  const [isExpanded, setIsExpanded] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];

  // Memoize page texts for performance
  const pageTexts = {
    pt: {
      // Header
      backToProduct: "Voltar ao produto",
      technicalDocument: "Documento técnico",
      expand: "Expandir",
      contract: "Contrair",
      print: "Imprimir",
      downloadPDF: "Download PDF",
      
      // Product Info
      officialDistributor: "Distribuidor Oficial XAG Portugal",
      productName: "TopXGun FP700",
      productDescription: "Drone agrícola profissional de alto desempenho com capacidade para pulverização e distribuição de grânulos. Equipamento ideal para operações agrícolas de larga escala com precisão e eficiência.",
      productCode: "Código Produto",
      modelYear: "Ano Modelo",
      applications: "Aplicações",
      
      // Main Highlights
      highlights: [
        { 
          value: "60 L", 
          label: "Tanque Pulverização", 
          icon: Droplets,
          enLabel: "Spraying Tank"
        },
        { 
          value: "80 L", 
          label: "Tanque Espalhamento", 
          icon: Package,
          enLabel: "Spreading Tank"
        },
        { 
          value: "70 kg", 
          label: "Carga Máxima", 
          icon: Weight,
          enLabel: "Max Load"
        },
        { 
          value: "13.8 m/s", 
          label: "Velocidade Máx", 
          icon: Gauge,
          enLabel: "Max Speed"
        },
        { 
          value: "2 km", 
          label: "Alcance Operacional", 
          icon: Radar,
          enLabel: "Operational Range"
        },
        { 
          value: "10 L/min", 
          label: "Caudal Máx Pulv.", 
          icon: CloudRain,
          enLabel: "Max Spray Flow"
        },
      ],
      
      // Technical Info Panel
      techInfo: "Info Técnica",
      goToSection: "Ir para secção",
      quickNavigation: "Navegação Rápida",
      category: "Categoria",
      droneCategory: "Drone Agrícola",
      sprayingCategory: "Pulverização",
      
      // Specification Sections
      sections: [
        { id: 'capacidades', label: 'Capacidades Principais', icon: Weight, enLabel: 'Main Capacities' },
        { id: 'desempenho', label: 'Desempenho de Voo', icon: Wind, enLabel: 'Flight Performance' },
        { id: 'aplicacao', label: 'Aplicação', icon: Sprout, enLabel: 'Application' },
        { id: 'sensores', label: 'Sensores & Segurança', icon: Radar, enLabel: 'Sensors & Safety' },
        { id: 'bateria', label: 'Bateria & Carregamento', icon: Battery, enLabel: 'Battery & Charging' },
        { id: 'controle', label: 'Controle & Software', icon: Wifi, enLabel: 'Control & Software' },
        { id: 'ambiente', label: 'Ambiente Operacional', icon: Thermometer, enLabel: 'Operating Environment' },
      ],
      
      // Specifications Data
      specifications: {
        capacidades: [
          { label: "Capacidade Tanque Pulverização", value: "60 L", enLabel: "Spraying Tank Capacity" },
          { label: "Capacidade Tanque Espalhamento", value: "80 L", enLabel: "Spreading Tank Capacity" },
          { label: "Carga Útil Máxima", value: "70 kg", enLabel: "Maximum Payload" },
          { label: "Peso Vazio (aprox.)", value: "56 kg", enLabel: "Empty Weight (approx.)" },
          { label: "Peso Máximo Decolagem", value: "126 kg", enLabel: "Maximum Takeoff Weight" },
          { label: "Material Estrutura", value: "Liga Alumínio Aeronáutico", enLabel: "Frame Material" },
        ],
        desempenho: [
          { label: "Velocidade Máxima de Voo", value: "13.8 m/s (≈50 km/h)", enLabel: "Maximum Flight Speed" },
          { label: "Altitude Máxima de Voo", value: "30 m", enLabel: "Maximum Flight Altitude" },
          { label: "Alcance Operacional", value: "2000 m", enLabel: "Operational Range" },
          { label: "Tempo de Voo (com carga)", value: "10-15 min", enLabel: "Flight Time (with load)" },
          { label: "Tempo de Voo (sem carga)", value: "20-25 min", enLabel: "Flight Time (without load)" },
          { label: "Precisão RTK", value: "±5 cm", enLabel: "RTK Precision" },
        ],
        aplicacao: [
          { label: "Largura de Espalhamento", value: "5 – 10 m", enLabel: "Spreading Width" },
          { label: "Caudal Máx Pulverização", value: "10 L/min (por bico)", enLabel: "Max Spraying Flow Rate" },
          { label: "Tamanho Gota Ajustável", value: "30 – 500 μm", enLabel: "Adjustable Droplet Size" },
          { label: "Taxa Máx Distribuição", value: "≈220 kg/min", enLabel: "Max Distribution Rate" },
          { label: "Nº de Bicos", value: "2 unidades", enLabel: "Number of Nozzles" },
          { label: "Sistema Bombas", value: "Pressurizado", enLabel: "Pump System" },
        ],
        sensores: [
          { label: "Radar 4D", value: "Deteção até 150 m", enLabel: "4D Radar" },
          { label: "Câmara Mapeamento HD", value: "Integrada", enLabel: "HD Mapping Camera" },
          { label: "Sensores Obstáculos", value: "Omnidirecionais", enLabel: "Obstacle Sensors" },
          { label: "GPS + GLONASS", value: "Dual Frequency", enLabel: "GPS + GLONASS" },
          { label: "RTK", value: "Opcional", enLabel: "RTK" },
          { label: "Proteção IP", value: "IPX6K", enLabel: "IP Protection" },
        ],
        bateria: [
          { label: "Sistema Bateria", value: "Dual Battery Pack", enLabel: "Battery System" },
          { label: "Capacidade Bateria", value: "2×20000 mAh", enLabel: "Battery Capacity" },
          { label: "Tensão Nominal", value: "52.5 V", enLabel: "Nominal Voltage" },
          { label: "Tipo Bateria", value: "Li-Polymer", enLabel: "Battery Type" },
          { label: "Carregador", value: "Dual-channel 9000W", enLabel: "Charger" },
          { label: "Tempo Carregamento", value: "20-30 min", enLabel: "Charging Time" },
        ],
        controle: [
          { label: "Controlador", value: "SRC5", enLabel: "Controller" },
          { label: "Alcance Transmissão (FCC)", value: "2000 m", enLabel: "Transmission Range (FCC)" },
          { label: "Frequência", value: "2.4GHz & 5.8GHz", enLabel: "Frequency" },
          { label: "App Controlo", value: "XAG Field", enLabel: "Control App" },
          { label: "Comunicação", value: "4G + Radio Link", enLabel: "Communication" },
          { label: "Compatibilidade", value: "ISOBUS (opcional)", enLabel: "Compatibility" },
        ],
        ambiente: [
          { label: "Temperatura Operacional", value: "0°C a 40°C", enLabel: "Operating Temperature" },
          { label: "Humidade Operacional", value: "10% - 90% (não condensação)", enLabel: "Operating Humidity" },
          { label: "Altitude Máx Operação", value: "2000 m", enLabel: "Maximum Operating Altitude" },
          { label: "Resistência Vento", value: "Até 8 m/s", enLabel: "Wind Resistance" },
          { label: "Proteção Chuva", value: "Operação leve", enLabel: "Rain Protection" },
          { label: "Armazenamento", value: "-20°C a 45°C", enLabel: "Storage" },
        ]
      },
      
      // Support Information
      certificationsLabel: "Certificações",
      certifications: ["CE", "IPX6K", "FCC", "ISO 9001", "ISO 14001", "RoHS"],
      euUsCertified: "Equipamento certificado para operação na União Europeia e Estados Unidos",
      
      warrantyLabel: "Garantia & Suporte",
      warrantyPeriod: "Período de Garantia",
      warranty: {
        periodo: "12 meses",
        cobertura: "Cobertura completa peças e mão-de-obra",
        suporte: "Suporte técnico 24/7",
        resposta: "48h em Portugal Continental",
        treinamento: "Curso de operação incluído"
      },
      
      contactLabel: "Contacto Técnico",
      contact: {
        tecnico: "tecnico@fieldairtech.pt",
        comercial: "comercial@fieldairtech.pt",
        telefone: "+351 934 449 370",
        emergencia: "+351 912 345 678",
        morada: "Biscainho, Coruche, Portugal",
        website: "www.fieldairtech.pt"
      },
      
      // Additional Information
      additionalInfoLabel: "Informações Adicionais",
      additionalInfoItems: [
        "Inclui software de planeamento de voo e análise de dados",
        "Suporte para múltiplos tipos de bicos (cone, leque, defletores)",
        "Sistema de limpeza automática dos bicos",
        "Monitorização em tempo real via aplicação móvel",
        "Histórico de operações e relatórios automáticos",
        "Integração com sistemas de gestão agrícola (opcional)"
      ],
      
      // Footer
      professionalDoc: "Documento técnico para uso profissional",
      issuedOn: "Emitido em",
      distributorInfo: "Distribuidor Oficial XAG em Portugal",
      companyDescription: "Field Air Tech • Equipamentos Agrícolas de Precisão",
      rightsReserved: "Todos os direitos reservados",
      documentId: "ID",
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
      officialDistributor: "Official XAG Distributor Portugal",
      productName: "TopXGun FP700",
      productDescription: "Professional high-performance agricultural drone with spraying and granule distribution capabilities. Ideal equipment for large-scale agricultural operations with precision and efficiency.",
      productCode: "Product Code",
      modelYear: "Model Year",
      applications: "Applications",
      
      // Main Highlights
      highlights: [
        { 
          value: "60 L", 
          label: "Spraying Tank", 
          icon: Droplets,
          ptLabel: "Tanque Pulverização"
        },
        { 
          value: "80 L", 
          label: "Spreading Tank", 
          icon: Package,
          ptLabel: "Tanque Espalhamento"
        },
        { 
          value: "70 kg", 
          label: "Max Load", 
          icon: Weight,
          ptLabel: "Carga Máxima"
        },
        { 
          value: "13.8 m/s", 
          label: "Max Speed", 
          icon: Gauge,
          ptLabel: "Velocidade Máx"
        },
        { 
          value: "2 km", 
          label: "Operational Range", 
          icon: Radar,
          ptLabel: "Alcance Operacional"
        },
        { 
          value: "10 L/min", 
          label: "Max Spray Flow", 
          icon: CloudRain,
          ptLabel: "Caudal Máx Pulv."
        },
      ],
      
      // Technical Info Panel
      techInfo: "Technical Info",
      goToSection: "Go to Section",
      quickNavigation: "Quick Navigation",
      category: "Category",
      droneCategory: "Agricultural Drone",
      sprayingCategory: "Spraying",
      
      // Specification Sections
      sections: [
        { id: 'capacidades', label: 'Main Capacities', icon: Weight, ptLabel: 'Capacidades Principais' },
        { id: 'desempenho', label: 'Flight Performance', icon: Wind, ptLabel: 'Desempenho de Voo' },
        { id: 'aplicacao', label: 'Application', icon: Sprout, ptLabel: 'Aplicação' },
        { id: 'sensores', label: 'Sensors & Safety', icon: Radar, ptLabel: 'Sensores & Segurança' },
        { id: 'bateria', label: 'Battery & Charging', icon: Battery, ptLabel: 'Bateria & Carregamento' },
        { id: 'controle', label: 'Control & Software', icon: Wifi, ptLabel: 'Controle & Software' },
        { id: 'ambiente', label: 'Operating Environment', icon: Thermometer, ptLabel: 'Ambiente Operacional' },
      ],
      
      // Specifications Data
      specifications: {
        capacidades: [
          { label: "Spraying Tank Capacity", value: "60 L", ptLabel: "Capacidade Tanque Pulverização" },
          { label: "Spreading Tank Capacity", value: "80 L", ptLabel: "Capacidade Tanque Espalhamento" },
          { label: "Maximum Payload", value: "70 kg", ptLabel: "Carga Útil Máxima" },
          { label: "Empty Weight (approx.)", value: "56 kg", ptLabel: "Peso Vazio (aprox.)" },
          { label: "Maximum Takeoff Weight", value: "126 kg", ptLabel: "Peso Máximo Decolagem" },
          { label: "Frame Material", value: "Aeronautical Aluminum Alloy", ptLabel: "Material Estrutura" },
        ],
        desempenho: [
          { label: "Maximum Flight Speed", value: "13.8 m/s (≈50 km/h)", ptLabel: "Velocidade Máxima de Voo" },
          { label: "Maximum Flight Altitude", value: "30 m", ptLabel: "Altitude Máxima de Voo" },
          { label: "Operational Range", value: "2000 m", ptLabel: "Alcance Operacional" },
          { label: "Flight Time (with load)", value: "10-15 min", ptLabel: "Tempo de Voo (com carga)" },
          { label: "Flight Time (without load)", value: "20-25 min", ptLabel: "Tempo de Voo (sem carga)" },
          { label: "RTK Precision", value: "±5 cm", ptLabel: "Precisão RTK" },
        ],
        aplicacao: [
          { label: "Spreading Width", value: "5 – 10 m", ptLabel: "Largura de Espalhamento" },
          { label: "Max Spraying Flow Rate", value: "10 L/min (per nozzle)", ptLabel: "Caudal Máx Pulverização" },
          { label: "Adjustable Droplet Size", value: "30 – 500 μm", ptLabel: "Tamanho Gota Ajustável" },
          { label: "Max Distribution Rate", value: "≈220 kg/min", ptLabel: "Taxa Máx Distribuição" },
          { label: "Number of Nozzles", value: "2 units", ptLabel: "Nº de Bicos" },
          { label: "Pump System", value: "Pressurized", ptLabel: "Sistema Bombas" },
        ],
        sensores: [
          { label: "4D Radar", value: "Detection up to 150 m", ptLabel: "Radar 4D" },
          { label: "HD Mapping Camera", value: "Integrated", ptLabel: "Câmara Mapeamento HD" },
          { label: "Obstacle Sensors", value: "Omnidirectional", ptLabel: "Sensores Obstáculos" },
          { label: "GPS + GLONASS", value: "Dual Frequency", ptLabel: "GPS + GLONASS" },
          { label: "RTK", value: "Optional", ptLabel: "RTK" },
          { label: "IP Protection", value: "IPX6K", ptLabel: "Proteção IP" },
        ],
        bateria: [
          { label: "Battery System", value: "Dual Battery Pack", ptLabel: "Sistema Bateria" },
          { label: "Battery Capacity", value: "2×20000 mAh", ptLabel: "Capacidade Bateria" },
          { label: "Nominal Voltage", value: "52.5 V", ptLabel: "Tensão Nominal" },
          { label: "Battery Type", value: "Li-Polymer", ptLabel: "Tipo Bateria" },
          { label: "Charger", value: "Dual-channel 9000W", ptLabel: "Carregador" },
          { label: "Charging Time", value: "20-30 min", ptLabel: "Tempo Carregamento" },
        ],
        controle: [
          { label: "Controller", value: "SRC5", ptLabel: "Controlador" },
          { label: "Transmission Range (FCC)", value: "2000 m", ptLabel: "Alcance Transmissão (FCC)" },
          { label: "Frequency", value: "2.4GHz & 5.8GHz", ptLabel: "Frequência" },
          { label: "Control App", value: "XAG Field", ptLabel: "App Controlo" },
          { label: "Communication", value: "4G + Radio Link", ptLabel: "Comunicação" },
          { label: "Compatibility", value: "ISOBUS (optional)", ptLabel: "Compatibilidade" },
        ],
        ambiente: [
          { label: "Operating Temperature", value: "0°C to 40°C", ptLabel: "Temperatura Operacional" },
          { label: "Operating Humidity", value: "10% - 90% (non-condensing)", ptLabel: "Humidade Operacional" },
          { label: "Maximum Operating Altitude", value: "2000 m", ptLabel: "Altitude Máx Operação" },
          { label: "Wind Resistance", value: "Up to 8 m/s", ptLabel: "Resistência Vento" },
          { label: "Rain Protection", value: "Light operation", ptLabel: "Proteção Chuva" },
          { label: "Storage", value: "-20°C to 45°C", ptLabel: "Armazenamento" },
        ]
      },
      
      // Support Information
      certificationsLabel: "Certifications",
      certifications: ["CE", "IPX6K", "FCC", "ISO 9001", "ISO 14001", "RoHS"],
      euUsCertified: "Equipment certified for operation in European Union and United States",
      
      warrantyLabel: "Warranty & Support",
      warrantyPeriod: "Warranty Period",
      warranty: {
        periodo: "12 months",
        cobertura: "Complete parts and labor coverage",
        suporte: "24/7 technical support",
        resposta: "48h in mainland Portugal",
        treinamento: "Included operation course"
      },
      
      contactLabel: "Technical Contact",
      contact: {
        tecnico: "tecnico@fieldairtech.pt",
        comercial: "comercial@fieldairtech.pt",
        telefone: "+351 934 449 370",
        emergencia: "+351 912 345 678",
        morada: "Biscainho, Coruche, Portugal",
        website: "www.fieldairtech.pt"
      },
      
      // Additional Information
      additionalInfoLabel: "Additional Information",
      additionalInfoItems: [
        "Includes flight planning software and data analysis",
        "Support for multiple nozzle types (cone, fan, deflectors)",
        "Automatic nozzle cleaning system",
        "Real-time monitoring via mobile application",
        "Operation history and automatic reports",
        "Integration with farm management systems (optional)"
      ],
      
      // Footer
      professionalDoc: "Technical document for professional use",
      issuedOn: "Issued on",
      distributorInfo: "Official XAG Distributor in Portugal",
      companyDescription: "Field Air Tech • Precision Agriculture Equipment",
      rightsReserved: "All rights reserved",
      documentId: "ID",
    }
  };

  const p = pageTexts[language];
  const produto = {
    nome: p.productName,
    codigo: language === 'pt' ? "FP700-PT" : "FP700-EN",
    versao: "2.0",
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
            <div className="p-2 bg-blue-50 rounded-lg group">
              <Icone className="text-blue-600" size={20} />
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
      <div key={idx} className="bg-white border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors group hover:shadow-md">
        <div className="flex flex-col items-center text-center">
          <div className="mb-2 p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
            <Icone size={20} className="text-blue-600 group-hover:text-blue-700" />
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
      {/* Top Bar */}
      <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link 
                to="/produtos/FP700" 
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
                  <div className="text-sm font-medium text-gray-700">v{produto.versao}</div>
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
              <div className="mb-4">
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full border border-blue-100">
                  <Check size={12} />
                  {p.officialDistributor}
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                {language === 'pt' ? 'Ficha Técnica: ' : 'Technical Sheet: '}{produto.nome}
              </h1>
              
              <p className="text-lg text-gray-600 mb-8 max-w-3xl">
                {produto.descricao}
              </p>
              
              {/* Highlights */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
                {p.highlights.map(renderizarDestaqueItem)}
              </div>
            </div>
            
            {/* Side Panel */}
            <div className="lg:w-72">
              <div className="bg-white border border-gray-200 rounded-xl p-4 sticky top-28 shadow-sm">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-gray-900">{p.techInfo}</h3>
                  <div className="text-xs text-gray-400">v{produto.versao}</div>
                </div>
                
                {/* Main Information */}
                <div className="space-y-3 mb-6">
                  <div>
                    <div className="text-xs text-gray-500 mb-0.5">{p.productCode}</div>
                    <div className="font-mono text-sm text-gray-900">{produto.codigo}</div>
                  </div>
                  
                  <div>
                    <div className="text-xs text-gray-500 mb-0.5">{p.modelYear}</div>
                    <div className="text-sm font-medium text-gray-900">2025</div>
                  </div>
                  
                  <div>
                    <div className="text-xs text-gray-500 mb-0.5">{p.category}</div>
                    <div className="text-xs text-gray-700">
                      <span className="px-2 py-1 bg-gray-100 rounded">{p.droneCategory}</span>
                      <span className="px-2 py-1 bg-gray-100 rounded ml-1">{p.sprayingCategory}</span>
                    </div>
                  </div>
                </div>
                
                {/* Quick Navigation */}
                <div className="pt-4 border-t border-gray-100">
                  <div className="text-xs text-gray-500 mb-2">{p.quickNavigation}</div>
                  <div className="grid grid-cols-2 gap-1.5">
                    {p.sections.map((secao) => (
                      <a 
                        key={secao.id}
                        href={`#${secao.id}`}
                        className="flex items-center gap-1.5 px-2 py-1.5 text-xs text-gray-600 hover:text-gray-900 hover:bg-blue-50 rounded transition-colors"
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
        <div className={isExpanded ? "space-y-6" : "space-y-12"}>
          {Object.entries(p.specifications).map(([key, specs]) => (
            renderizarSecaoEspecificacoes(key, specs)
          ))}
        </div>

        {/* Support Information */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {/* Certifications */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
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
                {p.euUsCertified}
              </div>
            </div>
          </div>

          {/* Warranty */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
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
                <div className="flex items-start gap-2">
                  <Check size={16} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{p.warranty.treinamento}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-gradient-to-br from-gray-900 to-blue-900 text-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-white/20 rounded-lg">
                <Phone className="text-white" size={20} />
              </div>
              <h3 className="text-lg font-bold">{p.contactLabel}</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-gray-300" />
                <div>
                  <a href={`tel:${p.contact.telefone}`} className="hover:text-gray-200 transition-colors block">
                    {p.contact.telefone}
                  </a>
                  <div className="text-xs text-gray-400 mt-0.5">
                    {language === 'pt' ? 'Emergência: ' : 'Emergency: '}{p.contact.emergencia}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-gray-300" />
                <div>
                  <a href={`mailto:${p.contact.tecnico}`} className="text-sm hover:text-gray-200 transition-colors block">
                    {p.contact.tecnico}
                  </a>
                  <div className="text-xs text-gray-400 mt-0.5">{p.contact.comercial}</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Home size={18} className="text-gray-300" />
                <span className="text-sm text-gray-300">{p.contact.morada}</span>
              </div>
              
              <div className="flex items-center gap-3">
                <Globe size={18} className="text-gray-300" />
                <a href={`https://${p.contact.website}`} target="_blank" rel="noopener noreferrer" className="text-sm hover:text-gray-200 transition-colors">
                  {p.contact.website}
                </a>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-700">
              <div className="text-xs text-gray-400">
                {p.companyDescription}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-gray-50 border border-blue-100 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <Settings className="text-blue-600" size={20} />
            <h3 className="text-lg font-bold text-gray-900">{p.additionalInfoLabel}</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              {p.additionalInfoItems.slice(0, 3).map((item, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <Check size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="space-y-3">
              {p.additionalInfoItems.slice(3).map((item, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <Check size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              ))}
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
              <div>{p.rightsReserved} • {p.documentId}: {produto.codigo}-{produto.versao}-{new Date().getFullYear()}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}