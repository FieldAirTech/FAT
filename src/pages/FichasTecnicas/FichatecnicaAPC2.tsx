import React, { useState, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  ArrowLeft, 
  Download, 
  Printer, 
  FileText, 
  Check,
  Maximize2,
  Minimize2,
  Target,
  Shield,
  Power,
  Clock,
  Navigation,
  Satellite,
  Cpu,
  Radio,
  Zap,
  Wifi,
  Phone,
  Mail,
  MapPin,
  Package,
  Globe,
  Thermometer,
  Battery,
  Home,
  Settings
} from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from '../../i18n/translations';

export default function APC2TechSheet() {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();
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
      productName: "XAG APC2",
      productDescription: "Sistema de navegação por satélite de alta precisão para agricultura de precisão",
      productCode: "Código Produto",
      applications: "Aplicações",
      
      // Main Highlights
      highlights: [
        { 
          value: "±1cm", 
          label: "Precisão RTK", 
          icon: Target,
          enLabel: "RTK Precision"
        },
        { 
          value: "IP67", 
          label: "Protecção", 
          icon: Shield,
          enLabel: "Protection"
        },
        { 
          value: "24V", 
          label: "Alimentação", 
          icon: Power,
          enLabel: "Power Supply"
        },
        { 
          value: "10min", 
          label: "Tolerância RTK", 
          icon: Clock,
          enLabel: "RTK Tolerance"
        },
        { 
          value: "7.45kg", 
          label: "Peso Total", 
          icon: Package,
          enLabel: "Total Weight"
        },
        { 
          value: "2000m", 
          label: "Alcance", 
          icon: Navigation,
          enLabel: "Range"
        },
      ],
      
      // Technical Info Panel
      techInfo: "Info Técnica",
      goToSection: "Ir para secção",
      
      // Specification Sections
      sections: [
        { id: 'basicas', label: 'Parâmetros Básicos', icon: MapPin, enLabel: 'Basic Parameters' },
        { id: 'mainframe', label: 'Mainframe', icon: Cpu, enLabel: 'Mainframe' },
        { id: 'gnss', label: 'GNSS & Ambiente', icon: Satellite, enLabel: 'GNSS & Environment' },
        { id: 'wireless', label: 'Comunicações', icon: Radio, enLabel: 'Communications' },
        { id: 'motor', label: 'Motor Direcção', icon: Zap, enLabel: 'Steering Motor' },
        { id: 'drive', label: 'Drive Motor', icon: Power, enLabel: 'Drive Motor' },
        { id: 'xre1', label: 'XRE1 Extensor', icon: Wifi, enLabel: 'XRE1 Extender' },
        { id: 'xrtk7', label: 'Estação Móvel XRTK7', icon: Navigation, enLabel: 'XRTK7 Mobile Station' },
        { id: 'wcp1', label: 'Painel Controlo WCP1', icon: Settings, enLabel: 'WCP1 Control Panel' },
      ],
      
      // Specifications Data
      specifications: {
        basicas: [
          { label: "Modelo", value: "XAPC2AHBD-2.5RD", enLabel: "Model" },
          { label: "Controlo de Direcção", value: "Volante eléctrico", enLabel: "Steering Control" },
          { label: "Precisão Operacional", value: "≤ 2.5 cm linha/espacamento", enLabel: "Operational Precision" },
          { label: "Classificação IP", value: "IP67", enLabel: "IP Rating" },
          { label: "Dimensões Totais", value: "452×452×230 mm", enLabel: "Total Dimensions" },
          { label: "Peso Total", value: "7.45 kg", enLabel: "Total Weight" },
        ],
        mainframe: [
          { label: "Dimensões", value: "115×202×150 mm", enLabel: "Dimensions" },
          { label: "Precisão RTK FIX (Horizontal)", value: "1 cm + 1 ppm", enLabel: "RTK FIX Precision (Horizontal)" },
          { label: "Precisão RTK FIX (Vertical)", value: "1.5 cm + 1 ppm", enLabel: "RTK FIX Precision (Vertical)" },
          { label: "Precisão PPP", value: "< 20 cm", enLabel: "PPP Precision" },
          { label: "Antena GNSS", value: "Antena única", enLabel: "GNSS Antenna" },
          { label: "Potência Transmissor Rádio", value: "≤ 20 dBm (EIRP)", enLabel: "Radio Transmitter Power" },
          { label: "Componentes Integrados", value: "Antena satélite, controlador, módulo PCB receptor", enLabel: "Integrated Components" },
          { label: "Alimentação", value: "DC 24 V", enLabel: "Power Supply" },
        ],
        gnss: [
          { label: "Sistemas Suportados", value: "BeiDou/GPS/GLONASS", enLabel: "Supported Systems" },
          { label: "Tolerância Perda Sinal RTK", value: "10 min", enLabel: "RTK Signal Loss Tolerance" },
          { label: "Temperatura Operacional", value: "-20°C a 70°C", enLabel: "Operating Temperature" },
          { label: "Temperatura Armazenamento", value: "-40°C a 85°C", enLabel: "Storage Temperature" },
        ],
        wireless: [
          { label: "Banda LTE-FDD", value: "B1/B2/B3/B4/B5/B7/B8/B12/B13/B18/B19/B20/B25/B26/B28", enLabel: "LTE-FDD Band" },
          { label: "Banda LTE-TDD", value: "B38/B39/B40/B41", enLabel: "LTE-TDD Band" },
          { label: "Banda WCDMA", value: "B1/B2/B4/B5/B6/B8/B19", enLabel: "WCDMA Band" },
          { label: "Banda GSM", value: "850/900/1800/1900 MHz", enLabel: "GSM Band" },
        ],
        motor: [
          { label: "Dimensões", value: "88×269×170 mm", enLabel: "Dimensions" },
          { label: "Diâmetro Volante", value: "400 mm", enLabel: "Wheel Diameter" },
          { label: "Tensão Nominal", value: "DC 12V-24V", enLabel: "Nominal Voltage" },
          { label: "Tensão Máxima", value: "28 V", enLabel: "Maximum Voltage" },
          { label: "Tensão Isolamento", value: "500 VDC", enLabel: "Insulation Voltage" },
          { label: "Binário", value: "Nom: 10 N·m, Máx: 20 N·m", enLabel: "Torque" },
        ],
        drive: [
          { label: "Dimensões", value: "298×243×79 mm", enLabel: "Dimensions" },
          { label: "Tensão Nominal", value: "12V - 24V", enLabel: "Nominal Voltage" },
          { label: "Tensão Máxima", value: "32 V", enLabel: "Maximum Voltage" },
          { label: "Tensão Mínima", value: "9 V", enLabel: "Minimum Voltage" },
          { label: "Tensão Isolamento", value: "500 VDC", enLabel: "Insulation Voltage" },
          { label: "Binário (12V)", value: "Nom: 8 N·m, Máx: 16 N·m", enLabel: "Torque (12V)" },
          { label: "Temperatura Operacional", value: "-20°C a 70°C", enLabel: "Operating Temperature" },
          { label: "Protecção", value: "IP54, Núcleo IP67", enLabel: "Protection" },
        ],
        xre1: [
          { label: "Modelo", value: "XRE1 Range Extender", enLabel: "Model" },
          { label: "Dimensões", value: "73×73×161 mm", enLabel: "Dimensions" },
          { label: "Tensão Nominal", value: "12V - 24V", enLabel: "Nominal Voltage" },
          { label: "Consumo Energia", value: "2.5 W", enLabel: "Power Consumption" },
          { label: "Frequência Operação", value: "2.400-2.467GHz / 5.725-5.850GHz", enLabel: "Operating Frequency" },
          { label: "Potência EIRP", value: "≤ 20 dBm (2.4GHz) / ≤ 33 dBm (5.8GHz)", enLabel: "EIRP Power" },
          { label: "Classificação IP", value: "IP67", enLabel: "IP Rating" },
        ],
        xrtk7: [
          { label: "Modelo", value: "M3XRTK7A", enLabel: "Model" },
          { label: "Dimensões", value: "222×112×75 mm", enLabel: "Dimensions" },
          { label: "Frequência XLink", value: "2.400-2.476GHz / 5.725-5.829GHz", enLabel: "XLink Frequency" },
          { label: "Frequência Wi-Fi", value: "2.400-2.476GHz / 5.725-5.850GHz", enLabel: "Wi-Fi Frequency" },
          { label: "Banda 4G", value: "LTE: B1, B3, B5, B8, B34, B38, B39, B40, B41", enLabel: "4G Band" },
          { label: "Precisão Posicionamento", value: "<5 cm+1 ppm (H) / <7.5 cm+1 ppm (V)", enLabel: "Positioning Accuracy" },
          { label: "Capacidade Bateria", value: "10000 mAh / 3.65 V", enLabel: "Battery Capacity" },
          { label: "Alcance Máx Sinal", value: "2000 m (sem obstáculos)", enLabel: "Maximum Signal Range" },
          { label: "Classificação IP", value: "IP65", enLabel: "IP Rating" },
        ],
        wcp1: [
          { label: "Modelo", value: "WCP1 Wireless Control Panel", enLabel: "Model" },
          { label: "Dimensões", value: "156×103×33 mm", enLabel: "Dimensions" },
          { label: "Resolução", value: "320×480", enLabel: "Resolution" },
          { label: "Tamanho Ecrã", value: "4 polegadas", enLabel: "Screen Size" },
          { label: "Brilho Ecrã", value: "≥ 700 nit", enLabel: "Screen Brightness" },
          { label: "Capacidade Bateria", value: "5000 mAh", enLabel: "Battery Capacity" },
          { label: "Porta Carregamento", value: "Type-C", enLabel: "Charging Port" },
          { label: "Classificação IP", value: "IP67", enLabel: "IP Rating" },
          { label: "Autonomia (standby)", value: "11.5 horas", enLabel: "Standby Autonomy" },
          { label: "Autonomia (trabalho)", value: "4-8 horas", enLabel: "Working Autonomy" },
        ]
      },
      
      // Support Information
      certificationsLabel: "Certificações",
      certifications: ["CE", "IP67", "FCC", "RoHS"],
      euUsCertified: "Equipamento certificado para operação na União Europeia e América",
      
      warrantyLabel: "Garantia & Suporte",
      warrantyPeriod: "Período de Garantia",
      warranty: {
        periodo: "24 meses",
        cobertura: "Cobertura completa componentes electrónicos",
        suporte: "Suporte técnico especializado",
        resposta: "24h para diagnóstico remoto"
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
      documentId: "ID",
      
      // Image Alt Text
      altImage: "XAG APC2 GNSS RTK Receiver - Visão Geral"
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
      productName: "XAG APC2",
      productDescription: "High-precision satellite navigation system for precision agriculture",
      productCode: "Product Code",
      applications: "Applications",
      
      // Main Highlights
      highlights: [
        { 
          value: "±1cm", 
          label: "RTK Precision", 
          icon: Target,
          ptLabel: "Precisão RTK"
        },
        { 
          value: "IP67", 
          label: "Protection", 
          icon: Shield,
          ptLabel: "Protecção"
        },
        { 
          value: "24V", 
          label: "Power Supply", 
          icon: Power,
          ptLabel: "Alimentação"
        },
        { 
          value: "10min", 
          label: "RTK Tolerance", 
          icon: Clock,
          ptLabel: "Tolerância RTK"
        },
        { 
          value: "7.45kg", 
          label: "Total Weight", 
          icon: Package,
          ptLabel: "Peso Total"
        },
        { 
          value: "2000m", 
          label: "Range", 
          icon: Navigation,
          ptLabel: "Alcance"
        },
      ],
      
      // Technical Info Panel
      techInfo: "Technical Info",
      goToSection: "Go to Section",
      
      // Specification Sections
      sections: [
        { id: 'basicas', label: 'Basic Parameters', icon: MapPin, ptLabel: 'Parâmetros Básicos' },
        { id: 'mainframe', label: 'Mainframe', icon: Cpu, ptLabel: 'Mainframe' },
        { id: 'gnss', label: 'GNSS & Environment', icon: Satellite, ptLabel: 'GNSS & Ambiente' },
        { id: 'wireless', label: 'Communications', icon: Radio, ptLabel: 'Comunicações' },
        { id: 'motor', label: 'Steering Motor', icon: Zap, ptLabel: 'Motor Direcção' },
        { id: 'drive', label: 'Drive Motor', icon: Power, ptLabel: 'Drive Motor' },
        { id: 'xre1', label: 'XRE1 Extender', icon: Wifi, ptLabel: 'XRE1 Extensor' },
        { id: 'xrtk7', label: 'XRTK7 Mobile Station', icon: Navigation, ptLabel: 'Estação Móvel XRTK7' },
        { id: 'wcp1', label: 'WCP1 Control Panel', icon: Settings, ptLabel: 'Painel Controlo WCP1' },
      ],
      
      // Specifications Data
      specifications: {
        basicas: [
          { label: "Model", value: "XAPC2AHBD-2.5RD", ptLabel: "Modelo" },
          { label: "Steering Control", value: "Electric steering wheel", ptLabel: "Controlo de Direcção" },
          { label: "Operational Precision", value: "≤ 2.5 cm line/spacing", ptLabel: "Precisão Operacional" },
          { label: "IP Rating", value: "IP67", ptLabel: "Classificação IP" },
          { label: "Total Dimensions", value: "452×452×230 mm", ptLabel: "Dimensões Totais" },
          { label: "Total Weight", value: "7.45 kg", ptLabel: "Peso Total" },
        ],
        mainframe: [
          { label: "Dimensions", value: "115×202×150 mm", ptLabel: "Dimensões" },
          { label: "RTK FIX Precision (Horizontal)", value: "1 cm + 1 ppm", ptLabel: "Precisão RTK FIX (Horizontal)" },
          { label: "RTK FIX Precision (Vertical)", value: "1.5 cm + 1 ppm", ptLabel: "Precisão RTK FIX (Vertical)" },
          { label: "PPP Precision", value: "< 20 cm", ptLabel: "Precisão PPP" },
          { label: "GNSS Antenna", value: "Single antenna", ptLabel: "Antena GNSS" },
          { label: "Radio Transmitter Power", value: "≤ 20 dBm (EIRP)", ptLabel: "Potência Transmissor Rádio" },
          { label: "Integrated Components", value: "Satellite antenna, controller, PCB receiver module", ptLabel: "Componentes Integrados" },
          { label: "Power Supply", value: "DC 24 V", ptLabel: "Alimentação" },
        ],
        gnss: [
          { label: "Supported Systems", value: "BeiDou/GPS/GLONASS", ptLabel: "Sistemas Suportados" },
          { label: "RTK Signal Loss Tolerance", value: "10 min", ptLabel: "Tolerância Perda Sinal RTK" },
          { label: "Operating Temperature", value: "-20°C to 70°C", ptLabel: "Temperatura Operacional" },
          { label: "Storage Temperature", value: "-40°C to 85°C", ptLabel: "Temperatura Armazenamento" },
        ],
        wireless: [
          { label: "LTE-FDD Band", value: "B1/B2/B3/B4/B5/B7/B8/B12/B13/B18/B19/B20/B25/B26/B28", ptLabel: "Banda LTE-FDD" },
          { label: "LTE-TDD Band", value: "B38/B39/B40/B41", ptLabel: "Banda LTE-TDD" },
          { label: "WCDMA Band", value: "B1/B2/B4/B5/B6/B8/B19", ptLabel: "Banda WCDMA" },
          { label: "GSM Band", value: "850/900/1800/1900 MHz", ptLabel: "Banda GSM" },
        ],
        motor: [
          { label: "Dimensions", value: "88×269×170 mm", ptLabel: "Dimensões" },
          { label: "Wheel Diameter", value: "400 mm", ptLabel: "Diâmetro Volante" },
          { label: "Nominal Voltage", value: "DC 12V-24V", ptLabel: "Tensão Nominal" },
          { label: "Maximum Voltage", value: "28 V", ptLabel: "Tensão Máxima" },
          { label: "Insulation Voltage", value: "500 VDC", ptLabel: "Tensão Isolamento" },
          { label: "Torque", value: "Nom: 10 N·m, Max: 20 N·m", ptLabel: "Binário" },
        ],
        drive: [
          { label: "Dimensions", value: "298×243×79 mm", ptLabel: "Dimensões" },
          { label: "Nominal Voltage", value: "12V - 24V", ptLabel: "Tensão Nominal" },
          { label: "Maximum Voltage", value: "32 V", ptLabel: "Tensão Máxima" },
          { label: "Minimum Voltage", value: "9 V", ptLabel: "Tensão Mínima" },
          { label: "Insulation Voltage", value: "500 VDC", ptLabel: "Tensão Isolamento" },
          { label: "Torque (12V)", value: "Nom: 8 N·m, Max: 16 N·m", ptLabel: "Binário (12V)" },
          { label: "Operating Temperature", value: "-20°C to 70°C", ptLabel: "Temperatura Operacional" },
          { label: "Protection", value: "IP54, Core IP67", ptLabel: "Protecção" },
        ],
        xre1: [
          { label: "Model", value: "XRE1 Range Extender", ptLabel: "Modelo" },
          { label: "Dimensions", value: "73×73×161 mm", ptLabel: "Dimensões" },
          { label: "Nominal Voltage", value: "12V - 24V", ptLabel: "Tensão Nominal" },
          { label: "Power Consumption", value: "2.5 W", ptLabel: "Consumo Energia" },
          { label: "Operating Frequency", value: "2.400-2.467GHz / 5.725-5.850GHz", ptLabel: "Frequência Operação" },
          { label: "EIRP Power", value: "≤ 20 dBm (2.4GHz) / ≤ 33 dBm (5.8GHz)", ptLabel: "Potência EIRP" },
          { label: "IP Rating", value: "IP67", ptLabel: "Classificação IP" },
        ],
        xrtk7: [
          { label: "Model", value: "M3XRTK7A", ptLabel: "Modelo" },
          { label: "Dimensions", value: "222×112×75 mm", ptLabel: "Dimensões" },
          { label: "XLink Frequency", value: "2.400-2.476GHz / 5.725-5.829GHz", ptLabel: "Frequência XLink" },
          { label: "Wi-Fi Frequency", value: "2.400-2.476GHz / 5.725-5.850GHz", ptLabel: "Frequência Wi-Fi" },
          { label: "4G Band", value: "LTE: B1, B3, B5, B8, B34, B38, B39, B40, B41", ptLabel: "Banda 4G" },
          { label: "Positioning Accuracy", value: "<5 cm+1 ppm (H) / <7.5 cm+1 ppm (V)", ptLabel: "Precisão Posicionamento" },
          { label: "Battery Capacity", value: "10000 mAh / 3.65 V", ptLabel: "Capacidade Bateria" },
          { label: "Maximum Signal Range", value: "2000 m (no obstacles)", ptLabel: "Alcance Máx Sinal" },
          { label: "IP Rating", value: "IP65", ptLabel: "Classificação IP" },
        ],
        wcp1: [
          { label: "Model", value: "WCP1 Wireless Control Panel", ptLabel: "Modelo" },
          { label: "Dimensions", value: "156×103×33 mm", ptLabel: "Dimensões" },
          { label: "Resolution", value: "320×480", ptLabel: "Resolução" },
          { label: "Screen Size", value: "4 inches", ptLabel: "Tamanho Ecrã" },
          { label: "Screen Brightness", value: "≥ 700 nit", ptLabel: "Brilho Ecrã" },
          { label: "Battery Capacity", value: "5000 mAh", ptLabel: "Capacidade Bateria" },
          { label: "Charging Port", value: "Type-C", ptLabel: "Porta Carregamento" },
          { label: "IP Rating", value: "IP67", ptLabel: "Classificação IP" },
          { label: "Standby Autonomy", value: "11.5 hours", ptLabel: "Autonomia (standby)" },
          { label: "Working Autonomy", value: "4-8 hours", ptLabel: "Autonomia (trabalho)" },
        ]
      },
      
      // Support Information
      certificationsLabel: "Certifications",
      certifications: ["CE", "IP67", "FCC", "RoHS"],
      euUsCertified: "Equipment certified for operation in European Union and America",
      
      warrantyLabel: "Warranty & Support",
      warrantyPeriod: "Warranty Period",
      warranty: {
        periodo: "24 months",
        cobertura: "Complete electronic components coverage",
        suporte: "Specialized technical support",
        resposta: "24h for remote diagnosis"
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
      documentId: "ID",
      
      // Image Alt Text
      altImage: "XAG APC2 GNSS RTK Receiver - Overview"
    }
  }), [language]);

  const p = pageTexts[language];
  const produto = {
    nome: p.productName,
    codigo: language === 'pt' ? "XAG-XG4-RTK-PT" : "XAG-XG4-RTK-EN",
    versao: "3.0",
    categoria: language === 'pt' ? "Receptor GNSS RTK" : "GNSS RTK Receiver",
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
              <button 
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors group"
              >
                <ArrowLeft size={18} className="group-hover:-translate-x-0.5 transition-transform" />
                <span className="text-sm font-medium">{p.backToProduct}</span>
              </button>
              
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
        {/* Top Image */}
        <div className="mb-10 rounded-xl overflow-hidden shadow-lg border border-gray-200">
          <img
            src="https://i.imgur.com/j7x94wQ.png"
            alt={p.altImage}
            className="w-full h-auto object-cover"
          />
        </div>

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
                {produto.nome}
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
                    <div className="text-xs text-gray-500 mb-0.5">{p.applications}</div>
                    <div className="text-xs text-gray-700">
                      <div className="flex flex-wrap gap-1">
                        <span className="px-1.5 py-0.5 bg-gray-100 rounded">
                          {language === 'pt' ? 'Tratores' : 'Tractors'}
                        </span>
                        <span className="px-1.5 py-0.5 bg-gray-100 rounded">
                          {language === 'pt' ? 'Colheitadeiras' : 'Harvesters'}
                        </span>
                        <span className="px-1.5 py-0.5 bg-gray-100 rounded">
                          {language === 'pt' ? 'Pulverizadores' : 'Sprayers'}
                        </span>
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
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-700">
              <div className="text-xs text-gray-400">
                {language === 'pt' ? 'Field Air Tech • Especialistas em Agricultura de Precisão' : 'Field Air Tech • Precision Agriculture Specialists'}
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
              <div>{p.rightsReserved} • {p.documentId}: {produto.codigo}-{produto.versao}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}