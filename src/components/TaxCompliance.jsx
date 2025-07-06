import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiDollarSign, FiFileText, FiGlobe, FiCalculator, FiShield, FiCheckCircle, FiAlertTriangle, FiClock } = FiIcons;

const TaxCompliance = () => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [taxForm, setTaxForm] = useState({
    income: '',
    workDays: '',
    residencyStatus: ''
  });

  const services = [
    {
      icon: FiCalculator,
      title: "Tax Calculator",
      description: "Calculate your tax obligations across multiple countries",
      features: ["Multi-country calculations", "Real-time rates", "Deduction optimization"],
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: FiFileText,
      title: "Document Preparation",
      description: "Prepare and file tax documents for digital nomads",
      features: ["Form preparation", "Electronic filing", "Document storage"],
      color: "from-green-400 to-green-600"
    },
    {
      icon: FiGlobe,
      title: "Multi-Country Support",
      description: "Navigate tax laws across 70+ countries",
      features: ["Local expertise", "Treaty benefits", "Compliance monitoring"],
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: FiShield,
      title: "Audit Protection",
      description: "Protection and support during tax audits",
      features: ["Audit representation", "Document review", "Legal support"],
      color: "from-orange-400 to-orange-600"
    }
  ];

  const countries = [
    "United States", "United Kingdom", "Germany", "Portugal", "Estonia", "Dubai (UAE)",
    "Thailand", "Indonesia", "Mexico", "Brazil", "Canada", "Australia", "Singapore"
  ];

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
            <SafeIcon icon={FiDollarSign} className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">Tax Compliance</h1>
          <p className="text-xl text-ingrained-light max-w-3xl mx-auto leading-relaxed">
            Navigate complex international tax requirements with confidence. Our expert team helps digital nomads stay compliant across multiple jurisdictions.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="neu-card-deep p-8 hover:shadow-neu-hover transition-all duration-300"
            >
              <div className={`w-16 h-16 neu-card-deep flex items-center justify-center bg-gradient-to-br ${service.color} mb-6`}>
                <SafeIcon icon={service.icon} className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-ingrained-dark mb-4">{service.title}</h3>
              <p className="text-ingrained-light mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-ingrained">
                    <SafeIcon icon={FiCheckCircle} className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Tax Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="neu-card-deep p-8 mb-16"
        >
          <h2 className="text-3xl font-bold text-ingrained-dark mb-8 text-center">Quick Tax Calculator</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-ingrained-dark mb-2">Select Country</label>
                <select
                  className="neu-input w-full px-4 py-3 text-ingrained"
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                >
                  <option value="">Choose a country</option>
                  {countries.map((country) => (
                    <option key={country} value={country}>{country}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-ingrained-dark mb-2">Annual Income (USD)</label>
                <input
                  type="number"
                  className="neu-input w-full px-4 py-3 text-ingrained"
                  value={taxForm.income}
                  onChange={(e) => setTaxForm({ ...taxForm, income: e.target.value })}
                  placeholder="e.g., 75000"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-ingrained-dark mb-2">Days Worked in Country</label>
                <input
                  type="number"
                  className="neu-input w-full px-4 py-3 text-ingrained"
                  value={taxForm.workDays}
                  onChange={(e) => setTaxForm({ ...taxForm, workDays: e.target.value })}
                  placeholder="e.g., 120"
                />
              </div>
              <motion.button
                className="w-full neu-button-primary py-3 px-6 font-semibold text-white"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Calculate Tax Liability
              </motion.button>
            </div>
            <div className="neu-card-pressed p-6">
              <h3 className="text-xl font-bold text-ingrained-dark mb-4">Tax Estimation Results</h3>
              {selectedCountry ? (
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-ingrained">Country:</span>
                    <span className="font-semibold text-ingrained-dark">{selectedCountry}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-ingrained">Estimated Tax Rate:</span>
                    <span className="font-semibold text-blue-600">15-25%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-ingrained">Tax Liability:</span>
                    <span className="font-semibold text-green-600">Calculate above</span>
                  </div>
                  <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
                    <div className="flex items-start">
                      <SafeIcon icon={FiAlertTriangle} className="w-5 h-5 text-yellow-600 mr-2 mt-0.5" />
                      <p className="text-sm text-yellow-800">
                        This is an estimate. Consult with our tax experts for accurate calculations.
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <p className="text-ingrained-light">Select a country to see tax estimation</p>
              )}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="neu-card-deep p-8 text-center"
        >
          <h3 className="text-3xl font-bold text-ingrained-dark mb-4">Need Expert Help?</h3>
          <p className="text-ingrained-light mb-8 max-w-2xl mx-auto">
            Our certified tax professionals specialize in digital nomad taxation and can help you navigate complex international tax requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="neu-button-primary py-3 px-8 font-semibold text-white"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Schedule Consultation
            </motion.button>
            <motion.button
              className="neu-button py-3 px-8 font-semibold text-ingrained hover:text-blue-600"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Download Tax Guide
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TaxCompliance;