import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiGlobe, FiMapPin, FiClock, FiCheckCircle, FiXCircle, FiInfo, FiSearch } = FiIcons;

const VisaRequirements = () => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [nationality, setNationality] = useState('');

  const visaInfo = [
    {
      country: "Portugal",
      flag: "🇵🇹",
      requirements: {
        "US": { type: "Visa Free", days: 90, requirements: ["Valid passport"] },
        "UK": { type: "Visa Free", days: 90, requirements: ["Valid passport"] },
        "AU": { type: "Visa Free", days: 90, requirements: ["Valid passport"] }
      },
      nomadVisa: {
        available: true,
        name: "D7 Visa",
        duration: "1-2 years",
        requirements: ["Proof of income", "Health insurance", "Criminal record"]
      }
    },
    {
      country: "Estonia",
      flag: "🇪🇪",
      requirements: {
        "US": { type: "Visa Free", days: 90, requirements: ["Valid passport"] },
        "UK": { type: "Visa Free", days: 90, requirements: ["Valid passport"] },
        "AU": { type: "Visa Free", days: 90, requirements: ["Valid passport"] }
      },
      nomadVisa: {
        available: true,
        name: "Digital Nomad Visa",
        duration: "1 year",
        requirements: ["€3504/month income", "Health insurance", "Work contract"]
      }
    },
    {
      country: "Thailand",
      flag: "🇹🇭",
      requirements: {
        "US": { type: "Visa Free", days: 30, requirements: ["Valid passport", "Return ticket"] },
        "UK": { type: "Visa Free", days: 30, requirements: ["Valid passport", "Return ticket"] },
        "AU": { type: "Visa Free", days: 30, requirements: ["Valid passport", "Return ticket"] }
      },
      nomadVisa: {
        available: false,
        name: "Tourist Visa",
        duration: "60 days",
        requirements: ["Visa application", "Proof of funds", "Hotel booking"]
      }
    }
  ];

  const countries = [
    { code: "PT", name: "Portugal", flag: "🇵🇹" },
    { code: "EE", name: "Estonia", flag: "🇪🇪" },
    { code: "TH", name: "Thailand", flag: "🇹🇭" },
    { code: "DE", name: "Germany", flag: "🇩🇪" },
    { code: "MX", name: "Mexico", flag: "🇲🇽" },
    { code: "ID", name: "Indonesia", flag: "🇮🇩" }
  ];

  const nationalities = [
    { code: "US", name: "United States", flag: "🇺🇸" },
    { code: "UK", name: "United Kingdom", flag: "🇬🇧" },
    { code: "AU", name: "Australia", flag: "🇦🇺" },
    { code: "CA", name: "Canada", flag: "🇨🇦" },
    { code: "DE", name: "Germany", flag: "🇩🇪" }
  ];

  const getVisaInfo = (country, nat) => {
    const info = visaInfo.find(v => v.country === country);
    if (info && info.requirements[nat]) {
      return info.requirements[nat];
    }
    return null;
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
            <SafeIcon icon={FiGlobe} className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">Visa Requirements</h1>
          <p className="text-xl text-ingrained-light max-w-3xl mx-auto leading-relaxed">
            Navigate visa requirements and work permits for digital nomads across 70+ countries.
          </p>
        </motion.div>

        {/* Visa Checker */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="neu-card-deep p-8 mb-16"
        >
          <h2 className="text-3xl font-bold text-ingrained-dark mb-8 text-center">Visa Requirements Checker</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-ingrained-dark mb-2">Your Nationality</label>
                <select
                  className="neu-input w-full px-4 py-3 text-ingrained"
                  value={nationality}
                  onChange={(e) => setNationality(e.target.value)}
                >
                  <option value="">Select your nationality</option>
                  {nationalities.map((nat) => (
                    <option key={nat.code} value={nat.code}>
                      {nat.flag} {nat.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-ingrained-dark mb-2">Destination Country</label>
                <select
                  className="neu-input w-full px-4 py-3 text-ingrained"
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                >
                  <option value="">Select destination</option>
                  {countries.map((country) => (
                    <option key={country.code} value={country.name}>
                      {country.flag} {country.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="neu-card-pressed p-6">
              <h3 className="text-xl font-bold text-ingrained-dark mb-4">Visa Requirements</h3>
              {selectedCountry && nationality ? (
                <div className="space-y-4">
                  {(() => {
                    const visa = getVisaInfo(selectedCountry, nationality);
                    if (visa) {
                      return (
                        <>
                          <div className="flex items-center justify-between">
                            <span className="text-ingrained">Visa Type:</span>
                            <span className={`font-semibold flex items-center ${visa.type === 'Visa Free' ? 'text-green-600' : 'text-orange-600'}`}>
                              <SafeIcon icon={visa.type === 'Visa Free' ? FiCheckCircle : FiInfo} className="w-4 h-4 mr-1" />
                              {visa.type}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-ingrained">Duration:</span>
                            <span className="font-semibold text-blue-600">{visa.days} days</span>
                          </div>
                          <div>
                            <span className="text-ingrained block mb-2">Requirements:</span>
                            <ul className="space-y-1">
                              {visa.requirements.map((req, idx) => (
                                <li key={idx} className="flex items-center text-sm text-ingrained">
                                  <SafeIcon icon={FiCheckCircle} className="w-3 h-3 text-green-500 mr-2" />
                                  {req}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </>
                      );
                    } else {
                      return <p className="text-ingrained-light">Visa information not available for this combination.</p>;
                    }
                  })()}
                </div>
              ) : (
                <p className="text-ingrained-light">Select nationality and destination to see visa requirements</p>
              )}
            </div>
          </div>
        </motion.div>

        {/* Digital Nomad Visas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-ingrained-dark mb-8 text-center">Digital Nomad Visas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visaInfo.map((country, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="neu-card-deep p-6 hover:shadow-neu-hover transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{country.flag}</span>
                  <h3 className="text-xl font-bold text-ingrained-dark">{country.country}</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-ingrained">Nomad Visa:</span>
                    <span className={`flex items-center font-semibold ${country.nomadVisa.available ? 'text-green-600' : 'text-red-600'}`}>
                      <SafeIcon icon={country.nomadVisa.available ? FiCheckCircle : FiXCircle} className="w-4 h-4 mr-1" />
                      {country.nomadVisa.available ? 'Available' : 'Not Available'}
                    </span>
                  </div>
                  <div>
                    <span className="text-ingrained block">Visa Name:</span>
                    <span className="font-semibold text-blue-600">{country.nomadVisa.name}</span>
                  </div>
                  <div>
                    <span className="text-ingrained block">Duration:</span>
                    <span className="font-semibold text-ingrained-dark">{country.nomadVisa.duration}</span>
                  </div>
                  <div>
                    <span className="text-ingrained block mb-2">Requirements:</span>
                    <ul className="space-y-1">
                      {country.nomadVisa.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start text-sm text-ingrained">
                          <SafeIcon icon={FiCheckCircle} className="w-3 h-3 text-green-500 mr-2 mt-0.5" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
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
          <h3 className="text-3xl font-bold text-ingrained-dark mb-4">Need Visa Assistance?</h3>
          <p className="text-ingrained-light mb-8 max-w-2xl mx-auto">
            Our visa experts can help you navigate complex requirements and ensure your applications are successful.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="neu-button-primary py-3 px-8 font-semibold text-white"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Visa Help
            </motion.button>
            <motion.button
              className="neu-button py-3 px-8 font-semibold text-ingrained hover:text-blue-600"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Download Guide
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default VisaRequirements;