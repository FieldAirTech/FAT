import React, { useState } from "react";
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
  Cpu,
  Battery,
  Power,
  Satellite,
  Shield,
  Phone,
  Mail,
  MapPin,
  Ruler,
  Wifi,
  Zap,
  Globe,
  Home,
  Settings,
  Thermometer,
  Weight,
  Gauge
} from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from '../../i18n/translations';

export default function FichatecnicaR200() {
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
      officialDistributor: "Distribuidor Oficial",
      productName: "XAG R200",
      productDescription: "Plataforma terrestre autónoma de pulverização de precisão e operação inteligente.",
      productCode: "Código Produto",
      modelYear: "Ano Modelo",
      applications: "Aplicações",
      
      // Main Highlights
      highlights: [
        { 
          value: "240 L", 
          label: "Tanque de Líquido", 
          icon: Droplets,
          enLabel: "Liquid Tank"
        },
        { 
          value: "4", 
          label: "JetSprayers", 
          icon: Droplets,
          enLabel: "JetSprayers"
        },
        { 
          value: "60–200 µm", 
          label: "Tamanho de Gota", 
          icon: Target,
          enLabel: "Droplet Size"
        },
        { 
          value: "7 m", 
          label: "Alcance Pulverização", 
          icon: Wind,
          enLabel: "Spraying Range"
        },
        { 
          value: "1.5 m/s", 
          label: "Velocidade Máx.", 
          icon: Zap,
          enLabel: "Max Speed"
        },
        { 
          value: "IPX6", 
          label: "Protecção", 
          icon: Shield,
          enLabel: "Protection"
        },
      ],
      
      // Technical Info Panel
      techInfo: "Info Técnica",
      goToSection: "Ir para secção",
      quickNavigation: "Navegação Rápida",
      category: "Categoria",
      roverCategory: "Rover Agrícola Autónomo",
      sprayingCategory: "Pulverização",
      autonomousCategory: "Autónomo",
      
      // Specification Sections
      sections: [
        { id: 'basicas', label: 'Parâmetros Básicos', icon: Ruler, enLabel: 'Basic Parameters' },
        { id: 'mobilidade', label: 'Mobilidade e Dinâmica', icon: Zap, enLabel: 'Mobility & Dynamics' },
        { id: 'revospray', label: 'Sistema RevoSpray', icon: Droplets, enLabel: 'RevoSpray System' },
        { id: 'radar', label: 'Sensores & Radar', icon: Target, enLabel: 'Sensors & Radar' },
        { id: 'controlo', label: 'Controlo e Percepção', icon: Wifi, enLabel: 'Control & Perception' },
        { id: 'bateria', label: 'Energia & Bateria', icon: Battery, enLabel: 'Energy & Battery' },
        { id: 'carregamento', label: 'Carregamento Rápido', icon: Power, enLabel: 'Fast Charging' },
        { id: 'garantia', label: 'Garantia & Suporte', icon: Shield, enLabel: 'Warranty & Support' },
      ],
      
      // Specifications Data
      specifications: {
        basicas: [
          { label: "Largura do Veículo", value: "80 cm", enLabel: "Vehicle Width" },
          { label: "Peso em Ordem de Marcha", value: "130 kg", enLabel: "Unladen Weight" },
          { label: "Carga Útil Máx.", value: "240 kg", enLabel: "Max Payload" },
          { label: "Classificação de Impermeabilização", value: "IPX6", enLabel: "Waterproof Rating" },
          { label: "Folga ao Solo", value: "270 mm", enLabel: "Ground Clearance" },
        ],
        mobilidade: [
          { label: "Sistema de Tração", value: "6×6 Independente", enLabel: "Traction System" },
          { label: "Velocidade Máxima", value: "1.5 m/s", enLabel: "Maximum Speed" },
          { label: "Inclinação Máx. Suportada", value: "20 %", enLabel: "Max Supported Slope" },
          { label: "Raio de Giro Mínimo", value: "0 m (gira no lugar)", enLabel: "Minimum Turning Radius" },
        ],
        revospray: [
          { label: "Capacidade Tanque", value: "240 L", enLabel: "Tank Capacity" },
          { label: "Número de JetSprayers", value: "4", enLabel: "Number of JetSprayers" },
          { label: "Tamanho de Gotas", value: "60–200 µm", enLabel: "Droplet Size" },
          { label: "Vazão Máx.", value: "16 L/min", enLabel: "Max Flow Rate" },
          { label: "Alcance Lateral", value: "Até 7 m por lado", enLabel: "Lateral Reach" },
          { label: "Pressão Máx.", value: "0.5 MPa", enLabel: "Max Pressure" },
        ],
        radar: [
          { label: "Tipo", value: "Radar 4D Anti-colisão", enLabel: "Type" },
          { label: "Alcance", value: "0.5–50 m", enLabel: "Range" },
          { label: "Campo de Visão", value: "±45° horizontal, ±25° vertical", enLabel: "Field of View" },
          { label: "Detecção de Obstáculos", value: "360° ao redor", enLabel: "Obstacle Detection" },
        ],
        controlo: [
          { label: "Sistema de Controlo", value: "SuperX 5 Ultra Intelligent", enLabel: "Control System" },
          { label: "Controlador Remoto SRC5", value: "7″ Touchscreen & FPV", enLabel: "SRC5 Remote Controller" },
          { label: "Frequências", value: "2.4 GHz / 5.8 GHz", enLabel: "Frequencies" },
          { label: "Alcance XLink", value: "≈ 500 m (linha de vista)", enLabel: "XLink Range" },
          { label: "Compatibilidade App", value: "XAG Smart App para Android/iOS", enLabel: "App Compatibility" },
        ],
        bateria: [
          { label: "Modelo", value: "XAG B141050 Smart SuperCharge", enLabel: "Model" },
          { label: "Capacidade", value: "1050 Wh (20 Ah)", enLabel: "Capacity" },
          { label: "Tipo", value: "Lithium‑Polymer", enLabel: "Type" },
          { label: "Tempo Operação", value: "8–15 min (pulverização)", enLabel: "Operation Time" },
          { label: "Tempo de Carga", value: "≈12 min (30%→95%)", enLabel: "Charging Time" },
          { label: "Número Máx. de Baterias", value: "2 (opcional para duplicar autonomia)", enLabel: "Max Number of Batteries" },
        ],
        carregamento: [
          { label: "Estação de Carregamento", value: "XAG QuickCharge GC4000", enLabel: "Charging Station" },
          { label: "Potência Nominal", value: "3400 W", enLabel: "Nominal Power" },
          { label: "Potência Máx.", value: "5100 W", enLabel: "Max Power" },
          { label: "Consumo de Água Resfriamento", value: "≤ 500 ml/h", enLabel: "Cooling Water Consumption" },
          { label: "Capacidade Combustível Estação", value: "15 L", enLabel: "Station Fuel Capacity" },
        ],
        garantia: [
          { label: "Período", value: "12 meses", enLabel: "Period" },
          { label: "Cobertura", value: "Peças e mão-de-obra", enLabel: "Coverage" },
          { label: "Suporte Técnico", value: "24/7", enLabel: "Technical Support" },
          { label: "Tempo de Resposta", value: "48h Portugal Continental", enLabel: "Response Time" },
        ]
      },
      
      // Support Information
      certificationsLabel: "Certificações",
      certifications: ["CE", "IPX6", "ISO 9001", "ISO 14001"],
      euUsCertified: "Equipamento certificado para operação na União Europeia",
      
      warrantyLabel: "Garantia & Suporte",
      warrantyPeriod: "Período de Garantia",
      warranty: {
        periodo: "12 meses",
        cobertura: "Cobertura completa peças e mão-de-obra",
        suporte: "Suporte técnico 24/7",
        resposta: "48h de resposta em Portugal Continental"
      },
      
      contactLabel: "Contacto Técnico",
      contact: {
        tecnico: "tecnico@fieldairtech.pt",
        telefone: "+351 934 449 370",
        morada: "Biscainho, Coruche, Portugal",
        website: "www.fieldairtech.pt"
      },
      
      // Additional Information
      additionalInfoLabel: "Informações Adicionais",
      additionalInfoItems: [
        "Navegação por satélite GNSS de alta precisão",
        "Planeamento de rota automático via aplicação",
        "Monitorização em tempo real das operações",
        "Sistema de auto-retorno em caso de baixa bateria",
        "Histórico detalhado de pulverizações",
        "Integração com sistemas de gestão agrícola"
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
      officialDistributor: "Official Distributor",
      productName: "XAG R200",
      productDescription: "Autonomous ground platform for precision spraying and intelligent operation.",
      productCode: "Product Code",
      modelYear: "Model Year",
      applications: "Applications",
      
      // Main Highlights
      highlights: [
        { 
          value: "240 L", 
          label: "Liquid Tank", 
          icon: Droplets,
          ptLabel: "Tanque de Líquido"
        },
        { 
          value: "4", 
          label: "JetSprayers", 
          icon: Droplets,
          ptLabel: "JetSprayers"
        },
        { 
          value: "60–200 µm", 
          label: "Droplet Size", 
          icon: Target,
          ptLabel: "Tamanho de Gota"
        },
        { 
          value: "7 m", 
          label: "Spraying Range", 
          icon: Wind,
          ptLabel: "Alcance Pulverização"
        },
        { 
          value: "1.5 m/s", 
          label: "Max Speed", 
          icon: Zap,
          ptLabel: "Velocidade Máx."
        },
        { 
          value: "IPX6", 
          label: "Protection", 
          icon: Shield,
          ptLabel: "Protecção"
        },
      ],
      
      // Technical Info Panel
      techInfo: "Technical Info",
      goToSection: "Go to Section",
      quickNavigation: "Quick Navigation",
      category: "Category",
      roverCategory: "Autonomous Agricultural Rover",
      sprayingCategory: "Spraying",
      autonomousCategory: "Autonomous",
      
      // Specification Sections
      sections: [
        { id: 'basicas', label: 'Basic Parameters', icon: Ruler, ptLabel: 'Parâmetros Básicos' },
        { id: 'mobilidade', label: 'Mobility & Dynamics', icon: Zap, ptLabel: 'Mobilidade e Dinâmica' },
        { id: 'revospray', label: 'RevoSpray System', icon: Droplets, ptLabel: 'Sistema RevoSpray' },
        { id: 'radar', label: 'Sensors & Radar', icon: Target, ptLabel: 'Sensores & Radar' },
        { id: 'controlo', label: 'Control & Perception', icon: Wifi, ptLabel: 'Controlo e Percepção' },
        { id: 'bateria', label: 'Energy & Battery', icon: Battery, ptLabel: 'Energia & Bateria' },
        { id: 'carregamento', label: 'Fast Charging', icon: Power, ptLabel: 'Carregamento Rápido' },
        { id: 'garantia', label: 'Warranty & Support', icon: Shield, ptLabel: 'Garantia & Suporte' },
      ],
      
      // Specifications Data
      specifications: {
        basicas: [
          { label: "Vehicle Width", value: "80 cm", ptLabel: "Largura do Veículo" },
          { label: "Unladen Weight", value: "130 kg", ptLabel: "Peso em Ordem de Marcha" },
          { label: "Max Payload", value: "240 kg", ptLabel: "Carga Útil Máx." },
          { label: "Waterproof Rating", value: "IPX6", ptLabel: "Classificação de Impermeabilização" },
          { label: "Ground Clearance", value: "270 mm", ptLabel: "Folga ao Solo" },
        ],
        mobilidade: [
          { label: "Traction System", value: "6×6 Independent", ptLabel: "Sistema de Tração" },
          { label: "Maximum Speed", value: "1.5 m/s", ptLabel: "Velocidade Máxima" },
          { label: "Max Supported Slope", value: "20 %", ptLabel: "Inclinação Máx. Suportada" },
          { label: "Minimum Turning Radius", value: "0 m (spins in place)", ptLabel: "Raio de Giro Mínimo" },
        ],
        revospray: [
          { label: "Tank Capacity", value: "240 L", ptLabel: "Capacidade Tanque" },
          { label: "Number of JetSprayers", value: "4", ptLabel: "Número de JetSprayers" },
          { label: "Droplet Size", value: "60–200 µm", ptLabel: "Tamanho de Gotas" },
          { label: "Max Flow Rate", value: "16 L/min", ptLabel: "Vazão Máx." },
          { label: "Lateral Reach", value: "Up to 7 m per side", ptLabel: "Alcance Lateral" },
          { label: "Max Pressure", value: "0.5 MPa", ptLabel: "Pressão Máx." },
        ],
        radar: [
          { label: "Type", value: "4D Anti-collision Radar", ptLabel: "Tipo" },
          { label: "Range", value: "0.5–50 m", ptLabel: "Alcance" },
          { label: "Field of View", value: "±45° horizontal, ±25° vertical", ptLabel: "Campo de Visão" },
          { label: "Obstacle Detection", value: "360° around", ptLabel: "Detecção de Obstáculos" },
        ],
        controlo: [
          { label: "Control System", value: "SuperX 5 Ultra Intelligent", ptLabel: "Sistema de Controlo" },
          { label: "SRC5 Remote Controller", value: "7″ Touchscreen & FPV", ptLabel: "Controlador Remoto SRC5" },
          { label: "Frequencies", value: "2.4 GHz / 5.8 GHz", ptLabel: "Frequências" },
          { label: "XLink Range", value: "≈ 500 m (line of sight)", ptLabel: "Alcance XLink" },
          { label: "App Compatibility", value: "XAG Smart App for Android/iOS", ptLabel: "Compatibilidade App" },
        ],
        bateria: [
          { label: "Model", value: "XAG B141050 Smart SuperCharge", ptLabel: "Modelo" },
          { label: "Capacity", value: "1050 Wh (20 Ah)", ptLabel: "Capacidade" },
          { label: "Type", value: "Lithium‑Polymer", ptLabel: "Tipo" },
          { label: "Operation Time", value: "8–15 min (spraying)", ptLabel: "Tempo Operação" },
          { label: "Charging Time", value: "≈12 min (30%→95%)", ptLabel: "Tempo de Carga" },
          { label: "Max Number of Batteries", value: "2 (optional to double autonomy)", ptLabel: "Número Máx. de Baterias" },
        ],
        carregamento: [
          { label: "Charging Station", value: "XAG QuickCharge GC4000", ptLabel: "Estação de Carregamento" },
          { label: "Nominal Power", value: "3400 W", ptLabel: "Potência Nominal" },
          { label: "Max Power", value: "5100 W", ptLabel: "Potência Máx." },
          { label: "Cooling Water Consumption", value: "≤ 500 ml/h", ptLabel: "Consumo de Água Resfriamento" },
          { label: "Station Fuel Capacity", value: "15 L", ptLabel: "Capacidade Combustível Estação" },
        ],
        garantia: [
          { label: "Period", value: "12 months", ptLabel: "Período" },
          { label: "Coverage", value: "Parts and labor", ptLabel: "Cobertura" },
          { label: "Technical Support", value: "24/7", ptLabel: "Suporte Técnico" },
          { label: "Response Time", value: "48h in mainland Portugal", ptLabel: "Tempo de Resposta" },
        ]
      },
      
      // Support Information
      certificationsLabel: "Certifications",
      certifications: ["CE", "IPX6", "ISO 9001", "ISO 14001"],
      euUsCertified: "Equipment certified for operation in European Union",
      
      warrantyLabel: "Warranty & Support",
      warrantyPeriod: "Warranty Period",
      warranty: {
        periodo: "12 months",
        cobertura: "Complete parts and labor coverage",
        suporte: "24/7 technical support",
        resposta: "48h response in mainland Portugal"
      },
      
      contactLabel: "Technical Contact",
      contact: {
        tecnico: "tecnico@fieldairtech.pt",
        telefone: "+351 934 449 370",
        morada: "Biscainho, Coruche, Portugal",
        website: "www.fieldairtech.pt"
      },
      
      // Additional Information
      additionalInfoLabel: "Additional Information",
      additionalInfoItems: [
        "High precision GNSS satellite navigation",
        "Automatic route planning via application",
        "Real-time operation monitoring",
        "Auto-return system in case of low battery",
        "Detailed spraying history",
        "Integration with farm management systems"
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
    codigo: language === 'pt' ? "XAG-R200-PT" : "XAG-R200-EN",
    versao: "1.0",
    categoria: p.roverCategory,
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
      <div key={idx} className="bg-white border border-gray-200 rounded-lg p-4 hover:border-emerald-300 transition-colors group text-center">
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
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-36">
      {/* Top Bar */}
      <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link 
                to="/produtos/r200" 
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
              <div className="mb-2">
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-medium rounded-full border border-emerald-100">
                  <Check size={12} />
                  {p.officialDistributor}
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                {language === 'pt' ? 'Ficha Técnica: ' : 'Technical Sheet: '}{produto.nome}
              </h1>
              
              <p className="text-lg text-gray-600 mb-8">
                {produto.descricao}
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
                  <div className="text-xs text-gray-400">v{produto.versao}</div>
                </div>
                
                {/* Main Information */}
                <div className="space-y-3 mb-4">
                  <div>
                    <div className="text-xs text-gray-500 mb-0.5">{p.productCode}</div>
                    <div className="font-mono text-sm text-gray-900">{produto.codigo}</div>
                  </div>
                  
                  <div>
                    <div className="text-xs text-gray-500 mb-0.5">{p.modelYear}</div>
                    <div className="text-sm font-medium text-gray-900">2024</div>
                  </div>
                  
                  <div>
                    <div className="text-xs text-gray-500 mb-0.5">{p.category}</div>
                    <div className="text-xs text-gray-700">
                      <div className="flex flex-wrap gap-1">
                        <span className="px-1.5 py-0.5 bg-gray-100 rounded">
                          {p.roverCategory}
                        </span>
                        <span className="px-1.5 py-0.5 bg-gray-100 rounded">
                          {p.sprayingCategory}
                        </span>
                        <span className="px-1.5 py-0.5 bg-gray-100 rounded">
                          {p.autonomousCategory}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Quick Navigation */}
                <div className="pt-3 border-t border-gray-100">
                  <div className="text-xs text-gray-500 mb-2">{p.quickNavigation}</div>
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
                {p.euUsCertified}
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
        <div className="mt-12 bg-gradient-to-r from-emerald-50 to-gray-50 border border-emerald-100 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <Settings className="text-emerald-600" size={20} />
            <h3 className="text-lg font-bold text-gray-900">{p.additionalInfoLabel}</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              {p.additionalInfoItems.slice(0, 3).map((item, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <Check size={16} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="space-y-3">
              {p.additionalInfoItems.slice(3).map((item, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <Check size={16} className="text-emerald-600 mt-0.5 flex-shrink-0" />
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