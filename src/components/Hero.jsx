import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiGlobe, FiUsers, FiMapPin, FiTrendingUp, FiShield, FiWifi } = FiIcons;

const Hero = () => {
  const features = [
    {
      icon: FiMapPin,
      title: "70+ Countries",
      description: "Co-working spaces worldwide"
    },
    {
      icon: FiUsers,
      title: "Nomad Families",
      description: "Connect with like-minded travelers"
    },
    {
      icon: FiShield,
      title: "Legal Assistant",
      description: "Navigate cross-border work laws"
    },
    {
      icon: FiWifi,
      title: "Remote Work",
      description: "Seamless digital nomad experience"
    }
  ];

  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Welcome to Nomad7</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Connect nomad families, auto-manage co-working spaces across 70+ countries, 
              and navigate cross-border remote work with our intelligent assistant.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <motion.button
              className="neu-button px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-nomad-blue to-nomad-purple"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Journey
            </motion.button>
            <motion.button
              className="neu-button px-8 py-4 text-lg font-semibold text-gray-700"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Locations
            </motion.button>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="neu-card p-6 text-center hover:shadow-neu-hover transition-all duration-300"
            >
              <motion.div
                className="w-16 h-16 mx-auto mb-4 neu-card flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <SafeIcon icon={feature.icon} className="w-8 h-8 text-nomad-blue" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 neu-card p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold gradient-text mb-2">70+</div>
              <div className="text-gray-600">Countries Covered</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text mb-2">5,000+</div>
              <div className="text-gray-600">Co-working Spaces</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text mb-2">15,000+</div>
              <div className="text-gray-600">Nomad Families</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;