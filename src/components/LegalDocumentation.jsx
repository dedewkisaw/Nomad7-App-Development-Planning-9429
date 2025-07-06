import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiFileText, FiShield, FiDownload, FiCheckCircle, FiClock, FiUser, FiGlobe, FiX } = FiIcons;

const LegalDocumentation = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [isDownloading, setIsDownloading] = useState(false);

  const documentTemplates = [
    {
      id: 1,
      title: "Remote Work Contract",
      description: "Comprehensive employment contract for remote workers",
      type: "Contract",
      pages: 12,
      languages: [
        { code: 'en', name: 'English', flag: '🇺🇸' },
        { code: 'es', name: 'Spanish', flag: '🇪🇸' },
        { code: 'de', name: 'German', flag: '🇩🇪' }
      ],
      includes: ["Work terms", "Compensation", "IP rights", "Termination clauses"],
      price: "Free",
      popular: true,
      content: {
        en: {
          title: "Remote Work Employment Contract",
          sections: [
            "1. PARTIES TO THE CONTRACT",
            "2. EMPLOYMENT TERMS AND CONDITIONS",
            "3. COMPENSATION AND BENEFITS",
            "4. INTELLECTUAL PROPERTY RIGHTS",
            "5. CONFIDENTIALITY OBLIGATIONS",
            "6. TERMINATION CLAUSES"
          ]
        },
        es: {
          title: "Contrato de Trabajo Remoto",
          sections: [
            "1. PARTES DEL CONTRATO",
            "2. TÉRMINOS Y CONDICIONES DE EMPLEO",
            "3. COMPENSACIÓN Y BENEFICIOS",
            "4. DERECHOS DE PROPIEDAD INTELECTUAL",
            "5. OBLIGACIONES DE CONFIDENCIALIDAD",
            "6. CLÁUSULAS DE TERMINACIÓN"
          ]
        },
        de: {
          title: "Remote-Arbeitsvertrag",
          sections: [
            "1. VERTRAGSPARTEIEN",
            "2. BESCHÄFTIGUNGSBEDINGUNGEN",
            "3. VERGÜTUNG UND LEISTUNGEN",
            "4. GEISTIGE EIGENTUMSRECHTE",
            "5. VERTRAULICHKEITSPFLICHTEN",
            "6. KÜNDIGUNGSKLAUSELN"
          ]
        }
      }
    },
    {
      id: 2,
      title: "Freelancer Agreement",
      description: "Independent contractor agreement for freelancers",
      type: "Agreement",
      pages: 8,
      languages: [
        { code: 'en', name: 'English', flag: '🇺🇸' },
        { code: 'pt', name: 'Portuguese', flag: '🇵🇹' },
        { code: 'fr', name: 'French', flag: '🇫🇷' }
      ],
      includes: ["Scope of work", "Payment terms", "Deliverables", "Liability"],
      price: "$29",
      popular: false,
      content: {
        en: {
          title: "Freelancer Service Agreement",
          sections: [
            "1. SCOPE OF SERVICES",
            "2. PAYMENT TERMS",
            "3. DELIVERABLES AND TIMELINE",
            "4. LIABILITY AND INDEMNIFICATION",
            "5. INTELLECTUAL PROPERTY",
            "6. TERMINATION"
          ]
        },
        pt: {
          title: "Acordo de Serviços Freelancer",
          sections: [
            "1. ESCOPO DOS SERVIÇOS",
            "2. TERMOS DE PAGAMENTO",
            "3. ENTREGÁVEIS E CRONOGRAMA",
            "4. RESPONSABILIDADE E INDENIZAÇÃO",
            "5. PROPRIEDADE INTELECTUAL",
            "6. RESCISÃO"
          ]
        },
        fr: {
          title: "Accord de Services Freelance",
          sections: [
            "1. PORTÉE DES SERVICES",
            "2. CONDITIONS DE PAIEMENT",
            "3. LIVRABLES ET CALENDRIER",
            "4. RESPONSABILITÉ ET INDEMNISATION",
            "5. PROPRIÉTÉ INTELLECTUELLE",
            "6. RÉSILIATION"
          ]
        }
      }
    },
    {
      id: 3,
      title: "NDA Template",
      description: "Non-disclosure agreement for client relationships",
      type: "Legal",
      pages: 4,
      languages: [
        { code: 'en', name: 'English', flag: '🇺🇸' },
        { code: 'de', name: 'German', flag: '🇩🇪' },
        { code: 'it', name: 'Italian', flag: '🇮🇹' }
      ],
      includes: ["Confidentiality", "Mutual protection", "Exceptions", "Duration"],
      price: "Free",
      popular: true,
      content: {
        en: {
          title: "Non-Disclosure Agreement (NDA)",
          sections: [
            "1. DEFINITION OF CONFIDENTIAL INFORMATION",
            "2. OBLIGATIONS OF RECEIVING PARTY",
            "3. EXCEPTIONS TO CONFIDENTIALITY",
            "4. TERM AND TERMINATION",
            "5. REMEDIES",
            "6. MISCELLANEOUS"
          ]
        },
        de: {
          title: "Geheimhaltungsvereinbarung (NDA)",
          sections: [
            "1. DEFINITION VERTRAULICHER INFORMATIONEN",
            "2. VERPFLICHTUNGEN DER EMPFANGENDEN PARTEI",
            "3. AUSNAHMEN VON DER VERTRAULICHKEIT",
            "4. LAUFZEIT UND KÜNDIGUNG",
            "5. RECHTSMITTEL",
            "6. VERSCHIEDENES"
          ]
        },
        it: {
          title: "Accordo di Non Divulgazione (NDA)",
          sections: [
            "1. DEFINIZIONE DI INFORMAZIONI RISERVATE",
            "2. OBBLIGHI DELLA PARTE RICEVENTE",
            "3. ECCEZIONI ALLA RISERVATEZZA",
            "4. DURATA E RISOLUZIONE",
            "5. RIMEDI",
            "6. VARIE"
          ]
        }
      }
    },
    {
      id: 4,
      title: "Client Service Agreement",
      description: "Service agreement for consulting and client work",
      type: "Agreement",
      pages: 10,
      languages: [
        { code: 'en', name: 'English', flag: '🇺🇸' },
        { code: 'es', name: 'Spanish', flag: '🇪🇸' }
      ],
      includes: ["Service scope", "Timeline", "Payments", "Modifications"],
      price: "$19",
      popular: false,
      content: {
        en: {
          title: "Client Service Agreement",
          sections: [
            "1. SERVICES TO BE PROVIDED",
            "2. PROJECT TIMELINE",
            "3. PAYMENT SCHEDULE",
            "4. CHANGE REQUESTS",
            "5. INTELLECTUAL PROPERTY",
            "6. TERMINATION CONDITIONS"
          ]
        },
        es: {
          title: "Acuerdo de Servicios al Cliente",
          sections: [
            "1. SERVICIOS A PROPORCIONAR",
            "2. CRONOGRAMA DEL PROYECTO",
            "3. PROGRAMA DE PAGOS",
            "4. SOLICITUDES DE CAMBIO",
            "5. PROPIEDAD INTELECTUAL",
            "6. CONDICIONES DE TERMINACIÓN"
          ]
        }
      }
    }
  ];

  const legalServices = [
    {
      icon: FiFileText,
      title: "Document Review",
      description: "Expert review of your legal documents",
      features: ["Legal compliance check", "Risk assessment", "Recommendations"],
      price: "$99/document"
    },
    {
      icon: FiShield,
      title: "Legal Consultation",
      description: "One-on-one consultation with legal experts",
      features: ["30-minute session", "Personalized advice", "Follow-up support"],
      price: "$149/hour"
    },
    {
      icon: FiGlobe,
      title: "Multi-Jurisdiction Support",
      description: "Legal support across multiple countries",
      features: ["Local law expertise", "Cross-border compliance", "Ongoing support"],
      price: "$299/month"
    }
  ];

  const generateDocumentContent = (template, languageCode) => {
    const content = template.content[languageCode];
    const currentDate = new Date().toLocaleDateString();
    
    let documentText = `
${content.title}
${'='.repeat(content.title.length)}

Generated on: ${currentDate}
Document Type: ${template.type}
Language: ${template.languages.find(l => l.code === languageCode)?.name}

${content.sections.map((section, index) => `
${section}
${'-'.repeat(section.length)}

[This section contains detailed legal provisions and clauses specific to ${section.toLowerCase()}. This is a template document that should be customized for your specific needs and reviewed by a qualified legal professional.]

`).join('')}

DISCLAIMER:
This document is provided as a template for informational purposes only. It does not constitute legal advice and should be reviewed and customized by a qualified legal professional before use. Nomad7 disclaims any liability for the use of this template.

For legal consultation and customization services, contact our legal experts at legal@nomad7.com

© 2024 Nomad7 - Legal Document Templates
    `.trim();

    return documentText;
  };

  const downloadDocument = async () => {
    if (!selectedTemplate || !selectedLanguage) return;

    setIsDownloading(true);

    try {
      // Generate document content
      const documentContent = generateDocumentContent(selectedTemplate, selectedLanguage);
      
      // Create blob and download
      const blob = new Blob([documentContent], { type: 'text/plain' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      
      const languageName = selectedTemplate.languages.find(l => l.code === selectedLanguage)?.name;
      const filename = `${selectedTemplate.title.replace(/\s+/g, '_')}_${languageName}.txt`;
      
      link.href = url;
      link.download = filename;
      link.click();
      
      // Cleanup
      window.URL.revokeObjectURL(url);
      
      // Show success message
      setTimeout(() => {
        setIsDownloading(false);
        setSelectedTemplate(null);
        setSelectedLanguage('');
        
        // Success notification
        const notification = document.createElement('div');
        notification.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50';
        notification.textContent = `✓ ${selectedTemplate.title} downloaded successfully!`;
        document.body.appendChild(notification);
        
        setTimeout(() => {
          notification.remove();
        }, 3000);
      }, 1500);

    } catch (error) {
      console.error('Download error:', error);
      setIsDownloading(false);
      
      // Error notification
      const notification = document.createElement('div');
      notification.className = 'fixed top-4 right-4 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg z-50';
      notification.textContent = '❌ Download failed. Please try again.';
      document.body.appendChild(notification);
      
      setTimeout(() => {
        notification.remove();
      }, 3000);
    }
  };

  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="w-16 h-16 neu-card-deep flex items-center justify-center bg-gradient-to-br from-blue-400 to-purple-600 mx-auto mb-6">
            <SafeIcon icon={FiFileText} className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">Legal Documentation</h1>
          <p className="text-xl text-ingrained-light max-w-3xl mx-auto leading-relaxed">
            Access professionally crafted legal templates and expert services for digital nomads and remote workers.
          </p>
        </motion.div>

        {/* Document Templates */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-ingrained-dark mb-8 text-center">Legal Document Templates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {documentTemplates.map((template) => (
              <motion.div
                key={template.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * template.id }}
                className="neu-card-deep p-6 hover:shadow-neu-hover transition-all duration-300 relative"
              >
                {template.popular && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-400 to-pink-400 text-white px-2 py-1 rounded-lg text-xs font-semibold">
                    Popular
                  </div>
                )}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-ingrained-dark mb-2">{template.title}</h3>
                    <p className="text-ingrained-light text-sm mb-3">{template.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600 mb-1">{template.price}</div>
                    <div className="text-xs text-ingrained-light">{template.type}</div>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-ingrained">
                    <SafeIcon icon={FiFileText} className="w-4 h-4 mr-2" />
                    <span>{template.pages} pages</span>
                  </div>
                  <div className="flex items-start text-sm text-ingrained">
                    <SafeIcon icon={FiGlobe} className="w-4 h-4 mr-2 mt-0.5" />
                    <div className="flex flex-wrap gap-1">
                      <span>Available in:</span>
                      {template.languages.map((lang, idx) => (
                        <span key={lang.code} className="inline-flex items-center">
                          {lang.flag} {lang.name}
                          {idx < template.languages.length - 1 && <span className="ml-1 mr-1">,</span>}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-ingrained-dark mb-2">Includes:</h4>
                  <ul className="space-y-1">
                    {template.includes.map((item, idx) => (
                      <li key={idx} className="flex items-center text-sm text-ingrained">
                        <SafeIcon icon={FiCheckCircle} className="w-3 h-3 text-green-500 mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <motion.button
                  className="w-full neu-button-primary py-3 px-6 font-semibold text-white flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedTemplate(template)}
                >
                  <SafeIcon icon={FiDownload} className="w-4 h-4 mr-2" />
                  Download Template
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Legal Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-ingrained-dark mb-8 text-center">Professional Legal Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {legalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="neu-card-deep p-6 hover:shadow-neu-hover transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 neu-card-deep flex items-center justify-center bg-gradient-to-br from-blue-400 to-purple-600 mx-auto mb-6">
                  <SafeIcon icon={service.icon} className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-ingrained-dark mb-3">{service.title}</h3>
                <p className="text-ingrained-light mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center justify-center text-sm text-ingrained">
                      <SafeIcon icon={FiCheckCircle} className="w-3 h-3 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-2xl font-bold text-blue-600 mb-4">{service.price}</div>
                <motion.button
                  className="w-full neu-button py-3 px-6 font-semibold text-ingrained hover:text-blue-600"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Started
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="neu-card-deep p-8 text-center"
        >
          <h3 className="text-3xl font-bold text-ingrained-dark mb-4">Need Custom Legal Documents?</h3>
          <p className="text-ingrained-light mb-8 max-w-2xl mx-auto">
            Our legal experts can create custom documents tailored to your specific needs and jurisdiction requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="neu-button-primary py-3 px-8 font-semibold text-white"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Request Custom Document
            </motion.button>
            <motion.button
              className="neu-button py-3 px-8 font-semibold text-ingrained hover:text-blue-600"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Schedule Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Enhanced Download Modal */}
      {selectedTemplate && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="neu-card-deep max-w-lg w-full p-6"
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-ingrained-dark mb-2">Download {selectedTemplate.title}</h3>
                <p className="text-ingrained-light text-sm">Choose your preferred language</p>
              </div>
              <motion.button
                className="neu-button p-2 text-gray-600 hover:text-red-500"
                onClick={() => {
                  setSelectedTemplate(null);
                  setSelectedLanguage('');
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <SafeIcon icon={FiX} className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Language Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-ingrained-dark mb-3">Select Language:</label>
              <div className="grid grid-cols-1 gap-2">
                {selectedTemplate.languages.map((language) => (
                  <motion.button
                    key={language.code}
                    className={`p-3 rounded-lg text-left transition-all duration-300 ${
                      selectedLanguage === language.code
                        ? 'neu-card-pressed text-blue-600 bg-gradient-to-r from-blue-50 to-purple-50'
                        : 'neu-button text-ingrained hover:text-blue-600'
                    }`}
                    onClick={() => setSelectedLanguage(language.code)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">{language.flag}</span>
                      <div>
                        <div className="font-semibold">{language.name}</div>
                        <div className="text-xs opacity-75">
                          {selectedTemplate.content[language.code]?.title}
                        </div>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Document Preview */}
            {selectedLanguage && (
              <div className="mb-6">
                <h4 className="font-semibold text-ingrained-dark mb-2">Document Preview:</h4>
                <div className="neu-card-pressed p-4 max-h-32 overflow-y-auto">
                  <div className="text-sm text-ingrained">
                    <div className="font-semibold mb-2">
                      {selectedTemplate.content[selectedLanguage]?.title}
                    </div>
                    <div className="space-y-1">
                      {selectedTemplate.content[selectedLanguage]?.sections.slice(0, 3).map((section, idx) => (
                        <div key={idx} className="text-xs opacity-75">{section}</div>
                      ))}
                      {selectedTemplate.content[selectedLanguage]?.sections.length > 3 && (
                        <div className="text-xs opacity-50">... and more sections</div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="flex gap-4">
              <motion.button
                className="flex-1 neu-button py-3 px-6 text-ingrained hover:text-blue-600"
                onClick={() => {
                  setSelectedTemplate(null);
                  setSelectedLanguage('');
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Cancel
              </motion.button>
              <motion.button
                className={`flex-1 py-3 px-6 font-semibold text-white flex items-center justify-center ${
                  selectedLanguage && !isDownloading
                    ? 'neu-button-primary'
                    : 'neu-card-pressed opacity-50 cursor-not-allowed'
                }`}
                onClick={downloadDocument}
                disabled={!selectedLanguage || isDownloading}
                whileHover={selectedLanguage && !isDownloading ? { scale: 1.02 } : {}}
                whileTap={selectedLanguage && !isDownloading ? { scale: 0.98 } : {}}
              >
                {isDownloading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Downloading...
                  </>
                ) : (
                  <>
                    <SafeIcon icon={FiDownload} className="w-4 h-4 mr-2" />
                    Download Now
                  </>
                )}
              </motion.button>
            </div>

            <div className="mt-4 p-3 bg-blue-50 rounded-lg">
              <p className="text-xs text-blue-800">
                <SafeIcon icon={FiShield} className="w-3 h-3 inline mr-1" />
                This template should be reviewed by a qualified legal professional before use.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default LegalDocumentation;