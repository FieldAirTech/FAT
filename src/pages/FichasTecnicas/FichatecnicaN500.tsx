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
  Target,
  Cpu,
  Satellite,
  Shield,
  Phone,
  Mail,
  MapPin,
  Ruler,
  Wifi,
  Zap,
  Navigation,
  Power,
  Thermometer,
  Globe,
  Clock,
  Settings,
  Home
} from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from '../../i18n/translations';

export default function FichatecnicaN500() {
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
      productName: "NST N500",
      productDescription: "Sistema de condução automática GNSS para tratores e máquinas agrícolas com alta precisão RTK",
      productCode: "Código Produto",
      modelYear: "Ano Modelo",
      applications: "Aplicações",
      
      // Main Highlights
      highlights: [
        { 
          value: "±2,5 cm", 
          label: "Precisão RTK", 
          icon: Target,
          enLabel: "RTK Precision"
        },
        { 
          value: "RTK / PPP", 
          label: "Correções", 
          icon: Satellite,
          enLabel: "Corrections"
        },
        { 
          value: "ISOBUS", 
          label: "Compatibilidade", 
          icon: Cpu,
          enLabel: "Compatibility"
        },
        { 
          value: "U-Turn", 
          label: "Automática", 
          icon: Navigation,
          enLabel: "Automatic"
        },
        { 
          value: "GNSS Multi", 
          label: "Constelações", 
          icon: Satellite,
          enLabel: "Constellations"
        },
        { 
          value: "IMU", 
          label: "Compensação Terreno", 
          icon: Ruler,
          enLabel: "Terrain Compensation"
        },
      ],
      
      // Technical Info Panel
      techInfo: "Info Técnica",
      goToSection: "Ir para secção",
      quickNavigation: "Navegação Rápida",
      category: "Categoria",
      steeringSystem: "Direção Automática GNSS",
      tractorCategory: "Tratores",
      machineCategory: "Máquinas Agrícolas",
      
      // Specification Sections
      sections: [
        { id: 'basicas', label: 'Parâmetros Básicos', icon: Ruler, enLabel: 'Basic Parameters' },
        { id: 'gnss', label: 'GNSS & Precisão', icon: Satellite, enLabel: 'GNSS & Precision' },
        { id: 'direcao', label: 'Direção Automática', icon: Navigation, enLabel: 'Automatic Steering' },
        { id: 'comunicacoes', label: 'Comunicações', icon: Wifi, enLabel: 'Communications' },
        { id: 'funcoes', label: 'Funções Software', icon: Cpu, enLabel: 'Software Functions' },
        { id: 'ambiente', label: 'Ambiente', icon: Shield, enLabel: 'Environment' },
        { id: 'alimentacao', label: 'Alimentação', icon: Zap, enLabel: 'Power Supply' },
      ],
      
      // Specifications Data
      specifications: {
        basicas: [
          { label: "Modelo", value: "NST N500", enLabel: "Model" },
          { label: "Tipo", value: "Sistema de direção automática GNSS", enLabel: "Type" },
          { label: "Aplicação", value: "Tratores e máquinas agrícolas", enLabel: "Application" },
          { label: "Interface", value: "Ecrã tátil 10.1”", enLabel: "Interface" },
          { label: "Sistema Operativo", value: "Android", enLabel: "Operating System" },
          { label: "Idiomas", value: "Português, Inglês, Espanhol", enLabel: "Languages" },
        ],
        gnss: [
          { label: "Constelações", value: "GPS, GLONASS, Galileo, BeiDou", enLabel: "Constellations" },
          { label: "Frequências", value: "L1/L2", enLabel: "Frequencies" },
          { label: "Modo RTK", value: "Sim", enLabel: "RTK Mode" },
          { label: "Modo PPP", value: "Sim", enLabel: "PPP Mode" },
          { label: "Precisão RTK", value: "±2,5 cm", enLabel: "RTK Precision" },
          { label: "Precisão DGPS", value: "±20–30 cm", enLabel: "DGPS Precision" },
        ],
        direcao: [
          { label: "Tipo de Direção", value: "Motor elétrico no volante / hidráulico", enLabel: "Steering Type" },
          { label: "Tempo de Engate", value: "< 3 s", enLabel: "Engagement Time" },
          { label: "Precisão de Linha", value: "±2,5 cm (RTK)", enLabel: "Line Precision" },
          { label: "U-Turn Automática", value: "Sim", enLabel: "Automatic U-Turn" },
          { label: "Compensação de Terreno", value: "IMU integrada", enLabel: "Terrain Compensation" },
          { label: "Calibração", value: "Automática", enLabel: "Calibration" },
        ],
        comunicacoes: [
          { label: "RTK NTRIP", value: "4G / Wi-Fi", enLabel: "RTK NTRIP" },
          { label: "Portas", value: "CAN, RS232, USB", enLabel: "Ports" },
          { label: "ISOBUS", value: "Compatível", enLabel: "ISOBUS" },
          { label: "Atualizações", value: "OTA (online)", enLabel: "Updates" },
          { label: "Exportação Dados", value: "USB / Cloud", enLabel: "Data Export" },
          { label: "Formatos", value: "SHP, ISOXML", enLabel: "Formats" },
        ],
        funcoes: [
          { label: "Linhas AB", value: "Reta, curva, diagonal, fechada", enLabel: "AB Lines" },
          { label: "Mudança de Linha", value: "Automática", enLabel: "Line Change" },
          { label: "Gestão de Campos", value: "Sim (GIS)", enLabel: "Field Management" },
          { label: "Sobreposição", value: "Minimização automática", enLabel: "Overlap" },
          { label: "U-Turn", value: "Automática no cabeceiro", enLabel: "U-Turn" },
          { label: "Histórico Trabalhos", value: "Sim", enLabel: "Work History" },
        ],
        ambiente: [
          { label: "Temperatura Operacional", value: "-20 °C a 60 °C", enLabel: "Operating Temperature" },
          { label: "Proteção", value: "IP65", enLabel: "Protection" },
          { label: "Vibração", value: "ISO 16750", enLabel: "Vibration" },
          { label: "Choque", value: "IEC 60068", enLabel: "Shock" },
          { label: "Humidade", value: "Até 95%", enLabel: "Humidity" },
        ],
        alimentacao: [
          { label: "Tensão Entrada", value: "9–36 V DC", enLabel: "Input Voltage" },
          { label: "Consumo", value: "< 25 W", enLabel: "Consumption" },
          { label: "Proteções", value: "Inversão polaridade / surtos", enLabel: "Protections" },
          { label: "Bateria Interna", value: "Backup RTC", enLabel: "Internal Battery" },
        ]
      },
      
      // Support Information
      certificationsLabel: "Certificações",
      certifications: ["CE", "IP65", "ISO 9001"],
      euUsCertified: "Equipamento certificado para operação na União Europeia",
      
      warrantyLabel: "Garantia & Suporte",
      warrantyPeriod: "Período de Garantia",
      warranty: {
        periodo: "24 meses",
        cobertura: "Cobertura completa de hardware",
        suporte: "Suporte técnico especializado",
        resposta: "48h em Portugal Continental"
      },
      
      contactLabel: "Contacto Técnico",
      contact: {
        tecnico: "suporte@nst-agro.pt",
        telefone: "+351 9XX XXX XXX",
        morada: "Portugal",
        website: "www.nst-agro.pt"
      },
      
      // Additional Information
      additionalInfoLabel: "Informações Adicionais",
      additionalInfoItems: [
        "Suporte para múltiplos tipos de implementos agrícolas",
        "Integração com sistemas de gestão agrícola",
        "Mapas de produtividade e aplicação",
        "Relatórios detalhados de operações",
        "Assistência remota via internet",
        "Formação técnica incluída"
      ],
      
      // Footer
      professionalDoc: "Documento técnico para uso profissional",
      issuedOn: "Emitido em",
      distributorInfo: "Equipamentos Agrícolas de Precisão",
      companyDescription: "NST Agro • Sistemas de Navegação Agrícola",
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
      productName: "NST N500",
      productDescription: "GNSS automatic steering system for tractors and agricultural machinery with high RTK precision",
      productCode: "Product Code",
      modelYear: "Model Year",
      applications: "Applications",
      
      // Main Highlights
      highlights: [
        { 
          value: "±2.5 cm", 
          label: "RTK Precision", 
          icon: Target,
          ptLabel: "Precisão RTK"
        },
        { 
          value: "RTK / PPP", 
          label: "Corrections", 
          icon: Satellite,
          ptLabel: "Correções"
        },
        { 
          value: "ISOBUS", 
          label: "Compatibility", 
          icon: Cpu,
          ptLabel: "Compatibilidade"
        },
        { 
          value: "U-Turn", 
          label: "Automatic", 
          icon: Navigation,
          ptLabel: "Automática"
        },
        { 
          value: "Multi GNSS", 
          label: "Constellations", 
          icon: Satellite,
          ptLabel: "Constelações"
        },
        { 
          value: "IMU", 
          label: "Terrain Compensation", 
          icon: Ruler,
          ptLabel: "Compensação Terreno"
        },
      ],
      
      // Technical Info Panel
      techInfo: "Technical Info",
      goToSection: "Go to Section",
      quickNavigation: "Quick Navigation",
      category: "Category",
      steeringSystem: "GNSS Automatic Steering",
      tractorCategory: "Tractors",
      machineCategory: "Agricultural Machinery",
      
      // Specification Sections
      sections: [
        { id: 'basicas', label: 'Basic Parameters', icon: Ruler, ptLabel: 'Parâmetros Básicos' },
        { id: 'gnss', label: 'GNSS & Precision', icon: Satellite, ptLabel: 'GNSS & Precisão' },
        { id: 'direcao', label: 'Automatic Steering', icon: Navigation, ptLabel: 'Direção Automática' },
        { id: 'comunicacoes', label: 'Communications', icon: Wifi, ptLabel: 'Comunicações' },
        { id: 'funcoes', label: 'Software Functions', icon: Cpu, ptLabel: 'Funções Software' },
        { id: 'ambiente', label: 'Environment', icon: Shield, ptLabel: 'Ambiente' },
        { id: 'alimentacao', label: 'Power Supply', icon: Zap, ptLabel: 'Alimentação' },
      ],
      
      // Specifications Data
      specifications: {
        basicas: [
          { label: "Model", value: "NST N500", ptLabel: "Modelo" },
          { label: "Type", value: "GNSS automatic steering system", ptLabel: "Tipo" },
          { label: "Application", value: "Tractors and agricultural machinery", ptLabel: "Aplicação" },
          { label: "Interface", value: "10.1” Touch Screen", ptLabel: "Interface" },
          { label: "Operating System", value: "Android", ptLabel: "Sistema Operativo" },
          { label: "Languages", value: "Portuguese, English, Spanish", ptLabel: "Idiomas" },
        ],
        gnss: [
          { label: "Constellations", value: "GPS, GLONASS, Galileo, BeiDou", ptLabel: "Constelações" },
          { label: "Frequencies", value: "L1/L2", ptLabel: "Frequências" },
          { label: "RTK Mode", value: "Yes", ptLabel: "Modo RTK" },
          { label: "PPP Mode", value: "Yes", ptLabel: "Modo PPP" },
          { label: "RTK Precision", value: "±2.5 cm", ptLabel: "Precisão RTK" },
          { label: "DGPS Precision", value: "±20–30 cm", ptLabel: "Precisão DGPS" },
        ],
        direcao: [
          { label: "Steering Type", value: "Electric wheel motor / hydraulic", ptLabel: "Tipo de Direção" },
          { label: "Engagement Time", value: "< 3 s", ptLabel: "Tempo de Engate" },
          { label: "Line Precision", value: "±2.5 cm (RTK)", ptLabel: "Precisão de Linha" },
          { label: "Automatic U-Turn", value: "Yes", ptLabel: "U-Turn Automática" },
          { label: "Terrain Compensation", value: "Integrated IMU", ptLabel: "Compensação de Terreno" },
          { label: "Calibration", value: "Automatic", ptLabel: "Calibração" },
        ],
        comunicacoes: [
          { label: "RTK NTRIP", value: "4G / Wi-Fi", ptLabel: "RTK NTRIP" },
          { label: "Ports", value: "CAN, RS232, USB", ptLabel: "Portas" },
          { label: "ISOBUS", value: "Compatible", ptLabel: "ISOBUS" },
          { label: "Updates", value: "OTA (online)", ptLabel: "Atualizações" },
          { label: "Data Export", value: "USB / Cloud", ptLabel: "Exportação Dados" },
          { label: "Formats", value: "SHP, ISOXML", ptLabel: "Formatos" },
        ],
        funcoes: [
          { label: "AB Lines", value: "Straight, curve, diagonal, closed", ptLabel: "Linhas AB" },
          { label: "Line Change", value: "Automatic", ptLabel: "Mudança de Linha" },
          { label: "Field Management", value: "Yes (GIS)", ptLabel: "Gestão de Campos" },
          { label: "Overlap", value: "Automatic minimization", ptLabel: "Sobreposição" },
          { label: "U-Turn", value: "Automatic at headland", ptLabel: "U-Turn" },
          { label: "Work History", value: "Yes", ptLabel: "Histórico Trabalhos" },
        ],
        ambiente: [
          { label: "Operating Temperature", value: "-20 °C to 60 °C", ptLabel: "Temperatura Operacional" },
          { label: "Protection", value: "IP65", ptLabel: "Proteção" },
          { label: "Vibration", value: "ISO 16750", ptLabel: "Vibração" },
          { label: "Shock", value: "IEC 60068", ptLabel: "Choque" },
          { label: "Humidity", value: "Up to 95%", ptLabel: "Humidade" },
        ],
        alimentacao: [
          { label: "Input Voltage", value: "9–36 V DC", ptLabel: "Tensão Entrada" },
          { label: "Consumption", value: "< 25 W", ptLabel: "Consumo" },
          { label: "Protections", value: "Reverse polarity / surges", ptLabel: "Proteções" },
          { label: "Internal Battery", value: "RTC backup", ptLabel: "Bateria Interna" },
        ]
      },
      
      // Support Information
      certificationsLabel: "Certifications",
      certifications: ["CE", "IP65", "ISO 9001"],
      euUsCertified: "Equipment certified for operation in European Union",
      
      warrantyLabel: "Warranty & Support",
      warrantyPeriod: "Warranty Period",
      warranty: {
        periodo: "24 months",
        cobertura: "Complete hardware coverage",
        suporte: "Specialized technical support",
        resposta: "48h in mainland Portugal"
      },
      
      contactLabel: "Technical Contact",
      contact: {
        tecnico: "suporte@nst-agro.pt",
        telefone: "+351 9XX XXX XXX",
        morada: "Portugal",
        website: "www.nst-agro.pt"
      },
      
      // Additional Information
      additionalInfoLabel: "Additional Information",
      additionalInfoItems: [
        "Support for multiple agricultural implement types",
        "Integration with farm management systems",
        "Yield and application maps",
        "Detailed operation reports",
        "Remote assistance via internet",
        "Technical training included"
      ],
      
      // Footer
      professionalDoc: "Technical document for professional use",
      issuedOn: "Issued on",
      distributorInfo: "Precision Agriculture Equipment",
      companyDescription: "NST Agro • Agricultural Navigation Systems",
      rightsReserved: "All rights reserved",
      documentId: "ID",
    }
  };

  const p = pageTexts[language];
  const produto = {
    nome: p.productName,
    codigo: language === 'pt' ? "NST-N500-PT" : "NST-N500-EN",
    versao: "1.0",
    categoria: p.steeringSystem,
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
      <div key={idx} className="bg-white border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors group">
        <div className="flex flex-col items-center text-center">
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
                to="/produtos/n500"
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
                          {p.tractorCategory}
                        </span>
                        <span className="px-1.5 py-0.5 bg-gray-100 rounded">
                          {p.machineCategory}
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
              <div className="p-2 bg-blue-50 rounded-lg">
                <Shield className="text-blue-600" size={20} />
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
                  <Check size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{p.warranty.cobertura}</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{p.warranty.suporte}</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{p.warranty.resposta}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-gradient-to-br from-gray-900 to-blue-900 text-white rounded-xl p-6">
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