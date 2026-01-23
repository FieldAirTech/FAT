// src/pages/PP.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Lock, 
  User, 
  FileText, 
  Mail, 
  Phone, 
  Home, 
  Calendar,
  CheckCircle,
  AlertCircle,
  ExternalLink,
  ArrowLeft,
  Globe,
  Database,
  Eye,
  Trash2
} from 'lucide-react';

export const route = "/privacy";

export default function PoliticaPrivacidade() {
  const [activeLanguage, setActiveLanguage] = useState('pt');

  const content = {
    pt: {
      title: "Política de Privacidade",
      lastUpdated: "Última atualização: 15 de Novembro de 2024",
      backButton: "Voltar à página inicial",
      
      sections: [
        {
          id: "introducao",
          title: "1. Introdução",
          icon: <Shield className="text-blue-600" />,
          content: `
            <p>A Field Air Tech, Lda. valoriza a sua privacidade e está empenhada em proteger os seus dados pessoais. Esta Política de Privacidade explica como recolhemos, utilizamos, partilhamos e protegemos as suas informações quando visita o nosso website <strong>fieldairtech.com</strong> e utiliza os nossos serviços.</p>
            <p>Ao utilizar o nosso website, concorda com a recolha e utilização de informações de acordo com esta política. Esta política está em conformidade com o <strong>Regulamento Geral sobre a Proteção de Dados (RGPD)</strong> e a legislação portuguesa aplicável.</p>
          `
        },
        {
          id: "dados-recolhidos",
          title: "2. Dados que Recolhemos",
          icon: <Database className="text-blue-600" />,
          content: `
            <h4 class="font-bold mt-4 mb-2">Dados Pessoais</h4>
            <ul class="list-disc pl-5 space-y-2 mb-4">
              <li><strong>Informações de contacto:</strong> Nome, email, telefone, empresa, cargo</li>
              <li><strong>Informações profissionais:</strong> Setor de atividade, tipo de exploração agrícola, área de cultivo</li>
              <li><strong>Informações de faturação:</strong> Morada fiscal, NIF, dados de pagamento (processados de forma segura)</li>
            </ul>
            
            <h4 class="font-bold mt-4 mb-2">Dados Técnicos</h4>
            <ul class="list-disc pl-5 space-y-2">
              <li><strong>Informações de dispositivo:</strong> Tipo de dispositivo, sistema operativo, navegador</li>
              <li><strong>Dados de navegação:</strong> Páginas visitadas, tempo gasto, links clicados</li>
              <li><strong>Dados de localização:</strong> País, região (quando permitido)</li>
              <li><strong>Cookies e tecnologias similares:</strong> Para melhorar a experiência do utilizador</li>
            </ul>
          `
        },
        {
          id: "finalidade",
          title: "3. Finalidade do Tratamento",
          icon: <CheckCircle className="text-blue-600" />,
          content: `
            <p>Os seus dados pessoais são tratados para as seguintes finalidades:</p>
            <ul class="list-disc pl-5 space-y-2">
              <li><strong>Prestação de serviços:</strong> Processamento de encomendas, fornecimento de suporte técnico</li>
              <li><strong>Comunicação comercial:</strong> Informação sobre produtos, promoções, eventos (apenas com consentimento)</li>
              <li><strong>Melhoria de serviços:</strong> Análise de uso do website, otimização da experiência do utilizador</li>
              <li><strong>Cumprimento legal:</strong> Faturação, contabilidade, obrigações fiscais</li>
              <li><strong>Marketing:</strong> Envio de newsletter (apenas para subscritores)</li>
            </ul>
          `
        },
        {
          id: "base-legal",
          title: "4. Base Legal do Tratamento",
          icon: <FileText className="text-blue-600" />,
          content: `
            <p>O tratamento dos seus dados baseia-se em:</p>
            <ul class="list-disc pl-5 space-y-2">
              <li><strong>Consentimento:</strong> Quando subscreve a nossa newsletter ou solicita informações</li>
              <li><strong>Execução de contrato:</strong> Para processamento de encomendas e prestação de serviços</li>
              <li><strong>Interesse legítimo:</strong> Para melhorar os nossos serviços e comunicação</li>
              <li><strong>Obrigação legal:</strong> Para cumprimento de obrigações fiscais e legais</li>
            </ul>
          `
        },
        {
          id: "partilha-dados",
          title: "5. Partilha de Dados",
          icon: <Eye className="text-blue-600" />,
          content: `
            <p>Os seus dados podem ser partilhados com:</p>
            <ul class="list-disc pl-5 space-y-2 mb-4">
              <li><strong>Fornecedores de serviços:</strong> Empresas de transporte, processamento de pagamentos, hospedagem</li>
              <li><strong>Parceiros tecnológicos:</strong> Desenvolvedores de software, fornecedores de CRM</li>
              <li><strong>Autoridades públicas:</strong> Quando exigido por lei ou regulamentação</li>
              <li><strong>Grupo empresarial:</strong> Empresas do mesmo grupo, quando aplicável</li>
            </ul>
            <p class="italic">Todos os nossos parceiros são selecionados com base nos seus padrões de segurança e conformidade com o RGPD.</p>
          `
        },
        {
          id: "retencao",
          title: "6. Período de Retenção",
          icon: <Calendar className="text-blue-600" />,
          content: `
            <p>Conservamos os seus dados apenas durante o tempo necessário para as finalidades para as quais foram recolhidos:</p>
            <ul class="list-disc pl-5 space-y-2">
              <li><strong>Dados de clientes:</strong> 10 anos após a última transação (obrigação legal fiscal)</li>
              <li><strong>Dados de prospectos:</strong> 2 anos após o último contacto</li>
              <li><strong>Dados de newsletter:</strong> Até cancelamento da subscrição</li>
              <li><strong>Cookies:</strong> Consultar a nossa <a href="/cookies" class="text-blue-600 underline">Política de Cookies</a></li>
            </ul>
          `
        },
        {
          id: "direitos",
          title: "7. Direitos do Titular",
          icon: <User className="text-blue-600" />,
          content: `
            <p>De acordo com o RGPD, tem os seguintes direitos:</p>
            <ul class="list-disc pl-5 space-y-2">
              <li><strong>Direito de acesso:</strong> Solicitar cópia dos seus dados pessoais</li>
              <li><strong>Direito de retificação:</strong> Corrigir dados inexatos ou incompletos</li>
              <li><strong>Direito ao apagamento:</strong> Solicitar eliminação dos seus dados ("direito ao esquecimento")</li>
              <li><strong>Direito à limitação:</strong> Restringir o tratamento em determinadas circunstâncias</li>
              <li><strong>Direito à portabilidade:</strong> Receber os seus dados num formato estruturado</li>
              <li><strong>Direito de oposição:</strong> Opor-se ao tratamento para fins de marketing direto</li>
              <li><strong>Direito de retirar consentimento:</strong> Em qualquer altura, sem afetar a licitude do tratamento anterior</li>
            </ul>
          `
        },
        {
          id: "seguranca",
          title: "8. Medidas de Segurança",
          icon: <Lock className="text-blue-600" />,
          content: `
            <p>Implementamos medidas técnicas e organizacionais adequadas para proteger os seus dados:</p>
            <ul class="list-disc pl-5 space-y-2">
              <li><strong>Criptografia:</strong> Dados transmitidos via HTTPS/SSL</li>
              <li><strong>Controlo de acesso:</strong> Acesso restrito a pessoal autorizado</li>
              <li><strong>Backups regulares:</strong> Sistemas de cópia de segurança</li>
              <li><strong>Monitorização:</strong> Sistemas de deteção de intrusões</li>
              <li><strong>Formação:</strong> Equipa formada em proteção de dados</li>
            </ul>
          `
        },
        {
          id: "cookies",
          title: "9. Cookies e Tecnologias Similares",
          icon: <AlertCircle className="text-blue-600" />,
          content: `
            <p>Utilizamos cookies para melhorar a sua experiência no nosso website:</p>
            <ul class="list-disc pl-5 space-y-2 mb-4">
              <li><strong>Cookies essenciais:</strong> Necessários para funcionamento do site</li>
              <li><strong>Cookies de desempenho:</strong> Para análise de uso e melhorias</li>
              <li><strong>Cookies de funcionalidade:</strong> Para lembrar preferências</li>
              <li><strong>Cookies de marketing:</strong> Para publicidade personalizada (apenas com consentimento)</li>
            </ul>
            <p>Pode gerir as suas preferências de cookies através do nosso <a href="/cookie-settings" class="text-blue-600 underline">painel de configuração</a> ou do seu navegador.</p>
          `
        },
        {
          id: "contacto",
          title: "10. Contacto e Exercício de Direitos",
          icon: <Mail className="text-blue-600" />,
          content: `
            <p>Para exercer os seus direitos ou para qualquer questão sobre proteção de dados:</p>
            
            <div class="bg-gray-50 p-6 rounded-lg mt-4">
              <h5 class="font-bold mb-3">Encarregado de Proteção de Dados (DPO)</h5>
              <div class="space-y-3">
                <div class="flex items-center gap-2">
                  <Mail size={16} className="text-gray-600" />
                  <span><strong>Email:</strong> comercial@fieldairtech.com</span>
                </div>
                <div class="flex items-center gap-2">
                  <Phone size={16} className="text-gray-600" />
                  <span><strong>Telefone:</strong> +351 934 449 370</span>
                </div>
                <div class="flex items-center gap-2">
                  <Home size={16} className="text-gray-600" />
                  <span><strong>Morada:</strong> Field Air Tech, Lda. - Biscainho, Coruche, Santarém, Portugal</span>
                </div>
              </div>
            </div>
            
            <p class="mt-4">Tem também o direito de apresentar reclamação junto da autoridade de controlo nacional:</p>
            <p class="pl-5 mt-2"><strong>Comissão Nacional de Proteção de Dados (CNPD)</strong><br>
            Rua de São Bento, 148-3º, 1200-821 Lisboa<br>
            Telefone: +351 213 928 400 | Email: geral@cnpd.pt</p>
          `
        },
        {
          id: "alteracoes",
          title: "11. Alterações à Política",
          icon: <FileText className="text-blue-600" />,
          content: `
            <p>Esta Política de Privacidade pode ser atualizada periodicamente. Publicaremos as alterações nesta página e, quando relevantes, enviaremos uma notificação por email.</p>
            <p>Recomendamos que consulte regularmente esta página para se manter informado sobre como protegemos a sua informação.</p>
          `
        }
      ]
    },
    
    en: {
      title: "Privacy Policy",
      lastUpdated: "Last updated: November 15, 2024",
      backButton: "Back to homepage",
      
      sections: [
        {
          id: "introduction",
          title: "1. Introduction",
          icon: <Shield className="text-blue-600" />,
          content: `
            <p>Field Air Tech, Lda. values your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, share, and protect your information when you visit our website <strong>fieldairtech.com</strong> and use our services.</p>
            <p>By using our website, you agree to the collection and use of information in accordance with this policy. This policy complies with the <strong>General Data Protection Regulation (GDPR)</strong> and applicable Portuguese legislation.</p>
          `
        },
        {
          id: "data-collected",
          title: "2. Data We Collect",
          icon: <Database className="text-blue-600" />,
          content: `
            <h4 class="font-bold mt-4 mb-2">Personal Data</h4>
            <ul class="list-disc pl-5 space-y-2 mb-4">
              <li><strong>Contact information:</strong> Name, email, phone, company, position</li>
              <li><strong>Professional information:</strong> Industry sector, type of farm, cultivation area</li>
              <li><strong>Billing information:</strong> Tax address, VAT number, payment data (securely processed)</li>
            </ul>
            
            <h4 class="font-bold mt-4 mb-2">Technical Data</h4>
            <ul class="list-disc pl-5 space-y-2">
              <li><strong>Device information:</strong> Device type, operating system, browser</li>
              <li><strong>Browsing data:</strong> Pages visited, time spent, links clicked</li>
              <li><strong>Location data:</strong> Country, region (when permitted)</li>
              <li><strong>Cookies and similar technologies:</strong> To improve user experience</li>
            </ul>
          `
        },
        {
          id: "purpose",
          title: "3. Purpose of Processing",
          icon: <CheckCircle className="text-blue-600" />,
          content: `
            <p>Your personal data is processed for the following purposes:</p>
            <ul class="list-disc pl-5 space-y-2">
              <li><strong>Service provision:</strong> Order processing, technical support</li>
              <li><strong>Commercial communication:</strong> Information about products, promotions, events (only with consent)</li>
              <li><strong>Service improvement:</strong> Website usage analysis, user experience optimization</li>
              <li><strong>Legal compliance:</strong> Invoicing, accounting, tax obligations</li>
              <li><strong>Marketing:</strong> Newsletter sending (only for subscribers)</li>
            </ul>
          `
        },
        {
          id: "legal-basis",
          title: "4. Legal Basis for Processing",
          icon: <FileText className="text-blue-600" />,
          content: `
            <p>The processing of your data is based on:</p>
            <ul class="list-disc pl-5 space-y-2">
              <li><strong>Consent:</strong> When you subscribe to our newsletter or request information</li>
              <li><strong>Contract execution:</strong> For order processing and service provision</li>
              <li><strong>Legitimate interest:</strong> To improve our services and communication</li>
              <li><strong>Legal obligation:</strong> To comply with tax and legal obligations</li>
            </ul>
          `
        },
        {
          id: "data-sharing",
          title: "5. Data Sharing",
          icon: <Eye className="text-blue-600" />,
          content: `
            <p>Your data may be shared with:</p>
            <ul class="list-disc pl-5 space-y-2 mb-4">
              <li><strong>Service providers:</strong> Shipping companies, payment processors, hosting</li>
              <li><strong>Technology partners:</strong> Software developers, CRM providers</li>
              <li><strong>Public authorities:</strong> When required by law or regulation</li>
              <li><strong>Corporate group:</strong> Companies within the same group, when applicable</li>
            </ul>
            <p class="italic">All our partners are selected based on their security standards and GDPR compliance.</p>
          `
        },
        {
          id: "retention",
          title: "6. Retention Period",
          icon: <Calendar className="text-blue-600" />,
          content: `
            <p>We keep your data only for as long as necessary for the purposes for which it was collected:</p>
            <ul class="list-disc pl-5 space-y-2">
              <li><strong>Customer data:</strong> 10 years after last transaction (legal tax obligation)</li>
              <li><strong>Prospect data:</strong> 2 years after last contact</li>
              <li><strong>Newsletter data:</strong> Until subscription cancellation</li>
              <li><strong>Cookies:</strong> See our <a href="/cookies" class="text-blue-600 underline">Cookie Policy</a></li>
            </ul>
          `
        },
        {
          id: "rights",
          title: "7. Data Subject Rights",
          icon: <User className="text-blue-600" />,
          content: `
            <p>According to GDPR, you have the following rights:</p>
            <ul class="list-disc pl-5 space-y-2">
              <li><strong>Right of access:</strong> Request a copy of your personal data</li>
              <li><strong>Right to rectification:</strong> Correct inaccurate or incomplete data</li>
              <li><strong>Right to erasure:</strong> Request deletion of your data ("right to be forgotten")</li>
              <li><strong>Right to restriction:</strong> Restrict processing in certain circumstances</li>
              <li><strong>Right to data portability:</strong> Receive your data in a structured format</li>
              <li><strong>Right to object:</strong> Object to processing for direct marketing purposes</li>
              <li><strong>Right to withdraw consent:</strong> At any time, without affecting the lawfulness of previous processing</li>
            </ul>
          `
        },
        {
          id: "security",
          title: "8. Security Measures",
          icon: <Lock className="text-blue-600" />,
          content: `
            <p>We implement appropriate technical and organizational measures to protect your data:</p>
            <ul class="list-disc pl-5 space-y-2">
              <li><strong>Encryption:</strong> Data transmitted via HTTPS/SSL</li>
              <li><strong>Access control:</strong> Restricted access to authorized personnel</li>
              <li><strong>Regular backups:</strong> Backup systems</li>
              <li><strong>Monitoring:</strong> Intrusion detection systems</li>
              <li><strong>Training:</strong> Team trained in data protection</li>
            </ul>
          `
        },
        {
          id: "cookies",
          title: "9. Cookies and Similar Technologies",
          icon: <AlertCircle className="text-blue-600" />,
          content: `
            <p>We use cookies to improve your experience on our website:</p>
            <ul class="list-disc pl-5 space-y-2 mb-4">
              <li><strong>Essential cookies:</strong> Necessary for website functioning</li>
              <li><strong>Performance cookies:</strong> For usage analysis and improvements</li>
              <li><strong>Functionality cookies:</strong> To remember preferences</li>
              <li><strong>Marketing cookies:</strong> For personalized advertising (only with consent)</li>
            </ul>
            <p>You can manage your cookie preferences through our <a href="/cookie-settings" class="text-blue-600 underline">configuration panel</a> or your browser.</p>
          `
        },
        {
          id: "contact",
          title: "10. Contact and Rights Exercise",
          icon: <Mail className="text-blue-600" />,
          content: `
            <p>To exercise your rights or for any questions about data protection:</p>
            
            <div class="bg-gray-50 p-6 rounded-lg mt-4">
              <h5 class="font-bold mb-3">Data Protection Officer (DPO)</h5>
              <div class="space-y-3">
                <div class="flex items-center gap-2">
                  <Mail size={16} className="text-gray-600" />
                  <span><strong>Email:</strong> comercial@fieldairtech.com</span>
                </div>
                <div class="flex items-center gap-2">
                  <Phone size={16} className="text-gray-600" />
                  <span><strong>Phone:</strong> +351 934 449 370</span>
                </div>
                <div class="flex items-center gap-2">
                  <Home size={16} className="text-gray-600" />
                  <span><strong>Address:</strong> Field Air Tech, Lda. - Biscainho, Coruche, Santarém, Portugal</span>
                </div>
              </div>
            </div>
            
            <p class="mt-4">You also have the right to lodge a complaint with the national supervisory authority:</p>
            <p class="pl-5 mt-2"><strong>Comissão Nacional de Proteção de Dados (CNPD)</strong><br>
            Rua de São Bento, 148-3º, 1200-821 Lisboa, Portugal<br>
            Phone: +351 213 928 400 | Email: geral@cnpd.pt</p>
          `
        },
        {
          id: "changes",
          title: "11. Policy Changes",
          icon: <FileText className="text-blue-600" />,
          content: `
            <p>This Privacy Policy may be updated periodically. We will post changes on this page and, when relevant, send an email notification.</p>
            <p>We recommend that you check this page regularly to stay informed about how we protect your information.</p>
          `
        }
      ]
    }
  };

  const currentContent = content[activeLanguage];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Language Selector */}
        <div className="flex justify-end mb-8">
          <div className="flex items-center gap-2 bg-white rounded-lg border border-gray-200 p-1">
            <button
              onClick={() => setActiveLanguage('pt')}
              className={`px-4 py-2 rounded-md transition-colors ${
                activeLanguage === 'pt' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <div className="flex items-center gap-2">
                <Globe size={16} />
                <span>PT</span>
              </div>
            </button>
            <button
              onClick={() => setActiveLanguage('en')}
              className={`px-4 py-2 rounded-md transition-colors ${
                activeLanguage === 'en' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <div className="flex items-center gap-2">
                <Globe size={16} />
                <span>EN</span>
              </div>
            </button>
          </div>
        </div>

        {/* Back Button */}
        <div className="mb-10">
          <Link 
            to="/" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            <ArrowLeft className="mr-2" size={20} />
            {currentContent.backButton}
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full mb-6">
            <Shield className="mr-2" size={18} />
            {activeLanguage === 'pt' ? 'Proteção de Dados' : 'Data Protection'}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {currentContent.title}
          </h1>
          
          <div className="flex items-center justify-center gap-2 text-gray-600">
            <Calendar size={18} />
            <span>{currentContent.lastUpdated}</span>
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="mb-16 bg-blue-50 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6">
            {activeLanguage === 'pt' ? 'Navegação Rápida' : 'Quick Navigation'}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {currentContent.sections.map((section, index) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="flex items-center gap-2 px-4 py-3 bg-white rounded-lg hover:bg-blue-100 transition-colors"
              >
                <div className="text-blue-600">
                  {section.icon}
                </div>
                <span className="text-sm font-medium text-gray-900">
                  {section.title.split(' ')[0]} {section.title.split(' ')[1]}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-16">
          {currentContent.sections.map((section, index) => (
            <section 
              key={section.id} 
              id={section.id}
              className="scroll-mt-24"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl">
                  {section.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {section.title}
                  </h2>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="w-8 h-px bg-blue-600"></div>
                    <span className="text-sm text-gray-500">
                      {activeLanguage === 'pt' ? 'Artigo' : 'Section'} {index + 1}
                    </span>
                  </div>
                </div>
              </div>

              <div 
                className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: section.content }}
              />
            </section>
          ))}
        </div>

        {/* Download Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-10 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            {activeLanguage === 'pt' ? 'Versão para Download' : 'Download Version'}
          </h3>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            {activeLanguage === 'pt' 
              ? 'Descarregue a versão completa da nossa Política de Privacidade em formato PDF para os seus registos.' 
              : 'Download the complete version of our Privacy Policy in PDF format for your records.'}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-700 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              <FileText size={20} />
              {activeLanguage === 'pt' ? 'Descarregar PDF' : 'Download PDF'}
            </button>
            <button className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">
              <Mail size={20} />
              {activeLanguage === 'pt' ? 'Solicitar por Email' : 'Request by Email'}
            </button>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6">
            {activeLanguage === 'pt' ? 'Informações de Contacto' : 'Contact Information'}
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="font-bold text-gray-900 flex items-center gap-2">
                <Mail className="text-blue-600" size={18} />
                {activeLanguage === 'pt' ? 'Email' : 'Email'}
              </h4>
              <div className="space-y-2">
                <div>
                  <div className="font-medium">geral@fieldairtech.com</div>
                  <div className="text-sm text-gray-600">
                    {activeLanguage === 'pt' ? 'Informações gerais' : 'General information'}
                  </div>
                </div>
                <div>
                  <div className="font-medium">comercial@fieldairtech.com</div>
                  <div className="text-sm text-gray-600">
                    {activeLanguage === 'pt' ? 'Proteção de dados' : 'Data protection'}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-bold text-gray-900 flex items-center gap-2">
                <Phone className="text-blue-600" size={18} />
                {activeLanguage === 'pt' ? 'Telefone' : 'Phone'}
              </h4>
              <div className="space-y-2">
                <div>
                  <div className="font-medium">+351 934 449 370</div>
                  <div className="text-sm text-gray-600">
                    {activeLanguage === 'pt' ? 'Suporte técnico' : 'Technical support'}
                  </div>
                </div>
                <div>
                  <div className="font-medium">+351 934 449 370</div>
                  <div className="text-sm text-gray-600">
                    {activeLanguage === 'pt' ? 'Proteção de dados' : 'Data protection'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-600">
          <p className="text-sm">
            {activeLanguage === 'pt' 
              ? 'Esta política é válida para todos os serviços prestados pela Field Air Tech, Lda.' 
              : 'This policy is valid for all services provided by Field Air Tech, Lda.'}
          </p>
          <p className="text-xs mt-2 text-gray-500">
            © {new Date().getFullYear()} Field Air Tech, Lda. • {activeLanguage === 'pt' 
              ? 'Todos os direitos reservados' 
              : 'All rights reserved'}
          </p>
        </div>
      </div>
    </div>
  );
}