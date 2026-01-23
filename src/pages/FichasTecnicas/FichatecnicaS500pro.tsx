// src/pages/FichatecnicaS500pro.tsx
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
  Wind,
  Target,
  Shield,
  Satellite,
  Wifi,
  Power,
  Ruler,
  Phone,
  Mail,
  MapPin,
  Zap,
  Globe,
  Home,
  Settings,
  Thermometer,
  Gauge,
  Battery,
  Clock,
  Navigation
} from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from '../../i18n/translations';

export default function FichatecnicaS500pro() {
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
      productName: "LJ Tech S500Pro",
      productDescription: "Pulverizador autónomo inteligente para pomares e culturas de precisão com navegação 5D e controlo dinâmico de pulverização.",
      productCode: "Código Produto",
      modelYear: "Ano Modelo",
      applications: "Aplicações",
      
      // Main Highlights
      highlights: [
        { 
          value: "500 L", 
          label: "Capacidade do Tanque", 
          icon: Droplets,
          enLabel: "Tank Capacity"
        },
        { 
          value: "15–28 m", 
          label: "Largura de Pulverização", 
          icon: Wind,
          enLabel: "Spraying Width"
        },
        { 
          value: "5–7 m", 
          label: "Altura de Pulverização", 
          icon: Wind,
          enLabel: "Spraying Height"
        },
        { 
          value: "≥6 h", 
          label: "Autonomia de Operação", 
          icon: Zap,
          enLabel: "Operation Autonomy"
        },
        { 
          value: "±5 cm", 
          label: "Precisão de Navegação", 
          icon: Target,
          enLabel: "Navigation Precision"
        },
        { 
          value: "IP55", 
          label: "Protecção IP", 
          icon: Shield,
          enLabel: "IP Protection"
        },
      ],
      
      // Technical Info Panel
      techInfo: "Info Técnica",
      goToSection: "Ir para secção",
      quickNavigation: "Navegação Rápida",
      category: "Categoria",
      sprayerCategory: "Pulverizador Agrícola Autónomo",
      orchardCategory: "Pomares",
      precisionCategory: "Precisão",
      
      // Specification Sections
      sections: [
        { id: 'basicas', label: 'Dados Básicos', icon: Ruler, enLabel: 'Basic Data' },
        { id: 'desempenho', label: 'Desempenho & Mobilidade', icon: Zap, enLabel: 'Performance & Mobility' },
        { id: 'sistema_pulverizacao', label: 'Sistema de Pulverização', icon: Droplets, enLabel: 'Spraying System' },
        { id: 'navegacao', label: 'Navegação Inteligente', icon: Satellite, enLabel: 'Intelligent Navigation' },
        { id: 'controlo', label: 'Controlo & Monitorização', icon: Wifi, enLabel: 'Control & Monitoring' },
        { id: 'motor', label: 'Motor & Energia', icon: Power, enLabel: 'Engine & Energy' },
        { id: 'garantia', label: 'Garantia & Suporte', icon: Shield, enLabel: 'Warranty & Support' },
      ],
      
      // Specifications Data
      specifications: {
        basicas: [
          { label: "Dimensões (CxLxA)", value: "2720 × 1290 × 1370 mm", enLabel: "Dimensions (LxWxH)" },
          { label: "Peso em vazio", value: "≈ 1230 kg", enLabel: "Unladen Weight" },
          { label: "Chassis", value: "Chassi de rastos (track)", enLabel: "Chassis" },
          { label: "Classificação de Proteção", value: "IP55", enLabel: "Protection Rating" },
        ],
        desempenho: [
          { label: "Velocidade de Deslocamento", value: "0–4.5 km/h", enLabel: "Travel Speed" },
          { label: "Capacidade de Subida", value: "≤ 10 °", enLabel: "Climbing Capacity" },
          { label: "Autonomia Operacional", value: "≥ 6 h", enLabel: "Operational Autonomy" },
          { label: "Folga ao Solo", value: "≈ 176 mm", enLabel: "Ground Clearance" },
        ],
        sistema_pulverizacao: [
          { label: "Capacidade Tanque Principal", value: "500 L", enLabel: "Main Tank Capacity" },
          { label: "Tanque de Limpeza", value: "30 L (com auto‑clean)", enLabel: "Cleaning Tank" },
          { label: "Pressão de Spray", value: "0–1.3 MPa", enLabel: "Spray Pressure" },
          { label: "Vazão", value: "0–60 L/min", enLabel: "Flow Rate" },
          { label: "Número de Bicos", value: "12", enLabel: "Number of Nozzles" },
          { label: "Tamanho de Gotas", value: "80–200 µm", enLabel: "Droplet Size" },
          { label: "Largura Pulverização", value: "15–28 m", enLabel: "Spraying Width" },
          { label: "Altura Pulverização", value: "5–7 m", enLabel: "Spraying Height" },
        ],
        navegacao: [
          { label: "Sistema de Navegação", value: "5D Fusion Navigation", enLabel: "Navigation System" },
          { label: "Tecnologias Integradas", value: "GNSS + RTK + LiDAR + IMU + Visual Recognition", enLabel: "Integrated Technologies" },
          { label: "Precisão de Posicionamento", value: "± 5 cm", enLabel: "Positioning Accuracy" },
          { label: "Gestão Inteligente", value: "Partilha de trajectória / Interrupção de pulverização nas curvas / Pulverização de um lado apenas / Dosagem precisa / Alerta de reabastecimento", enLabel: "Intelligent Management" },
        ],
        controlo: [
          { label: "Monitorização", value: "PC / Big data / App smartphone", enLabel: "Monitoring" },
          { label: "Video em tempo real", value: "Sim", enLabel: "Real-time Video" },
          { label: "Telemetria de dados", value: "Sim", enLabel: "Data Telemetry" },
        ],
        motor: [
          { label: "Tipo de Energia", value: "Range‑extended electric powertrain", enLabel: "Energy Type" },
          { label: "Motor Diesel", value: "33 kW / 45 HP", enLabel: "Diesel Engine" },
          { label: "Supercap", value: "83.7 V Super‑Capacitor", enLabel: "Supercap" },
          { label: "Gerador", value: "14 kW", enLabel: "Generator" },
        ],
        garantia: [
          { label: "Período de Garantia", value: "12 meses", enLabel: "Warranty Period" },
          { label: "Cobertura", value: "Peças e mão‑de‑obra", enLabel: "Coverage" },
          { label: "Treinamento", value: "Treinamento incluído", enLabel: "Training" },
          { label: "Suporte Técnico", value: "Após venda disponível", enLabel: "Technical Support" },
        ]
      },
      
      // Support Information
      certificationsLabel: "Certificações",
      certifications: ["CE", "IP55", "ISO 9001", "ISO 14001"],
      euUsCertified: "Equipamento certificado para operação na União Europeia",
      
      warrantyLabel: "Garantia & Suporte",
      warrantyPeriod: "Período de Garantia",
      warranty: {
        periodo: "12 meses",
        cobertura: "Cobertura completa peças e mão-de-obra",
        suporte: "Suporte técnico 24/7",
        resposta: "48h de resposta em Portugal Continental",
        treinamento: "Treinamento incluído"
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
        "Sistema de navegação 5D Fusion com múltiplos sensores",
        "Controlo inteligente de pulverização adaptativo",
        "Monitorização remota em tempo real via app",
        "Relatórios automáticos de produtividade",
        "Integração com sistemas de gestão agrícola",
        "Suporte para culturas em linha e pomares"
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
      productName: "LJ Tech S500Pro",
      productDescription: "Intelligent autonomous sprayer for orchards and precision crops with 5D navigation and dynamic spray control.",
      productCode: "Product Code",
      modelYear: "Model Year",
      applications: "Applications",
      
      // Main Highlights
      highlights: [
        { 
          value: "500 L", 
          label: "Tank Capacity", 
          icon: Droplets,
          ptLabel: "Capacidade do Tanque"
        },
        { 
          value: "15–28 m", 
          label: "Spraying Width", 
          icon: Wind,
          ptLabel: "Largura de Pulverização"
        },
        { 
          value: "5–7 m", 
          label: "Spraying Height", 
          icon: Wind,
          ptLabel: "Altura de Pulverização"
        },
        { 
          value: "≥6 h", 
          label: "Operation Autonomy", 
          icon: Zap,
          ptLabel: "Autonomia de Operação"
        },
        { 
          value: "±5 cm", 
          label: "Navigation Precision", 
          icon: Target,
          ptLabel: "Precisão de Navegação"
        },
        { 
          value: "IP55", 
          label: "IP Protection", 
          icon: Shield,
          ptLabel: "Protecção IP"
        },
      ],
      
      // Technical Info Panel
      techInfo: "Technical Info",
      goToSection: "Go to Section",
      quickNavigation: "Quick Navigation",
      category: "Category",
      sprayerCategory: "Autonomous Agricultural Sprayer",
      orchardCategory: "Orchards",
      precisionCategory: "Precision",
      
      // Specification Sections
      sections: [
        { id: 'basicas', label: 'Basic Data', icon: Ruler, ptLabel: 'Dados Básicos' },
        { id: 'desempenho', label: 'Performance & Mobility', icon: Zap, ptLabel: 'Desempenho & Mobilidade' },
        { id: 'sistema_pulverizacao', label: 'Spraying System', icon: Droplets, ptLabel: 'Sistema de Pulverização' },
        { id: 'navegacao', label: 'Intelligent Navigation', icon: Satellite, ptLabel: 'Navegação Inteligente' },
        { id: 'controlo', label: 'Control & Monitoring', icon: Wifi, ptLabel: 'Controlo & Monitorização' },
        { id: 'motor', label: 'Engine & Energy', icon: Power, ptLabel: 'Motor & Energia' },
        { id: 'garantia', label: 'Warranty & Support', icon: Shield, ptLabel: 'Garantia & Suporte' },
      ],
      
      // Specifications Data
      specifications: {
        basicas: [
          { label: "Dimensions (LxWxH)", value: "2720 × 1290 × 1370 mm", ptLabel: "Dimensões (CxLxA)" },
          { label: "Unladen Weight", value: "≈ 1230 kg", ptLabel: "Peso em vazio" },
          { label: "Chassis", value: "Track chassis", ptLabel: "Chassis" },
          { label: "Protection Rating", value: "IP55", ptLabel: "Classificação de Proteção" },
        ],
        desempenho: [
          { label: "Travel Speed", value: "0–4.5 km/h", ptLabel: "Velocidade de Deslocamento" },
          { label: "Climbing Capacity", value: "≤ 10 °", ptLabel: "Capacidade de Subida" },
          { label: "Operational Autonomy", value: "≥ 6 h", ptLabel: "Autonomia Operacional" },
          { label: "Ground Clearance", value: "≈ 176 mm", ptLabel: "Folga ao Solo" },
        ],
        sistema_pulverizacao: [
          { label: "Main Tank Capacity", value: "500 L", ptLabel: "Capacidade Tanque Principal" },
          { label: "Cleaning Tank", value: "30 L (with auto‑clean)", ptLabel: "Tanque de Limpeza" },
          { label: "Spray Pressure", value: "0–1.3 MPa", ptLabel: "Pressão de Spray" },
          { label: "Flow Rate", value: "0–60 L/min", ptLabel: "Vazão" },
          { label: "Number of Nozzles", value: "12", ptLabel: "Número de Bicos" },
          { label: "Droplet Size", value: "80–200 µm", ptLabel: "Tamanho de Gotas" },
          { label: "Spraying Width", value: "15–28 m", ptLabel: "Largura Pulverização" },
          { label: "Spraying Height", value: "5–7 m", ptLabel: "Altura Pulverização" },
        ],
        navegacao: [
          { label: "Navigation System", value: "5D Fusion Navigation", ptLabel: "Sistema de Navegação" },
          { label: "Integrated Technologies", value: "GNSS + RTK + LiDAR + IMU + Visual Recognition", ptLabel: "Tecnologias Integradas" },
          { label: "Positioning Accuracy", value: "± 5 cm", ptLabel: "Precisão de Posicionamento" },
          { label: "Intelligent Management", value: "Trajectory sharing / Spray interruption in curves / One-sided spraying / Precise dosing / Refill alert", ptLabel: "Gestão Inteligente" },
        ],
        controlo: [
          { label: "Monitoring", value: "PC / Big data / Smartphone app", ptLabel: "Monitorização" },
          { label: "Real-time Video", value: "Yes", ptLabel: "Video em tempo real" },
          { label: "Data Telemetry", value: "Yes", ptLabel: "Telemetria de dados" },
        ],
        motor: [
          { label: "Energy Type", value: "Range‑extended electric powertrain", ptLabel: "Tipo de Energia" },
          { label: "Diesel Engine", value: "33 kW / 45 HP", ptLabel: "Motor Diesel" },
          { label: "Supercap", value: "83.7 V Super‑Capacitor", ptLabel: "Supercap" },
          { label: "Generator", value: "14 kW", ptLabel: "Gerador" },
        ],
        garantia: [
          { label: "Warranty Period", value: "12 months", ptLabel: "Período de Garantia" },
          { label: "Coverage", value: "Parts and labor", ptLabel: "Cobertura" },
          { label: "Training", value: "Training included", ptLabel: "Treinamento" },
          { label: "Technical Support", value: "After-sales available", ptLabel: "Suporte Técnico" },
        ]
      },
      
      // Support Information
      certificationsLabel: "Certifications",
      certifications: ["CE", "IP55", "ISO 9001", "ISO 14001"],
      euUsCertified: "Equipment certified for operation in European Union",
      
      warrantyLabel: "Warranty & Support",
      warrantyPeriod: "Warranty Period",
      warranty: {
        periodo: "12 months",
        cobertura: "Complete parts and labor coverage",
        suporte: "24/7 technical support",
        resposta: "48h response in mainland Portugal",
        treinamento: "Training included"
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
        "5D Fusion navigation system with multiple sensors",
        "Adaptive intelligent spray control",
        "Real-time remote monitoring via app",
        "Automatic productivity reports",
        "Integration with farm management systems",
        "Support for row crops and orchards"
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
    codigo: language === 'pt' ? "LJTECH-S500PRO-PT" : "LJTECH-S500PRO-EN",
    versao: "1.0",
    categoria: p.sprayerCategory,
    descricao: p.productDescription,
  };

  const renderizarSecaoEspecificacoes = (secaoId: string, especificacoesLista: { label: string; value: string; ptLabel?: string; enLabel?: string }[]) => {
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

  const renderizarDestaqueItem = (item: { value: string; label: string; icon: any; ptLabel?: string; enLabel?: string }, idx: number) => {
    const Icone = item.icon;
    return (
      <div key={idx} className="bg-white border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors group text-center">
        <div className="mb-2 p-2 bg-gray-50 rounded-lg group-hover:bg-blue-50 transition-colors">
          <Icone size={20} className="text-gray-600 group-hover:text-blue-600" />
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
                to="/produtos/s500-pro"
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
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full border border-blue-100">
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
                          {p.sprayerCategory}
                        </span>
                        <span className="px-1.5 py-0.5 bg-gray-100 rounded">
                          {p.orchardCategory}
                        </span>
                        <span className="px-1.5 py-0.5 bg-gray-100 rounded">
                          {p.precisionCategory}
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
            renderizarSecaoEspecificacoes(key, specs as any)
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
                <div className="flex items-start gap-2">
                  <Check size={16} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{p.warranty.treinamento}</span>
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