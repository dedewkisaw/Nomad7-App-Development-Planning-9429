import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiGlobe, FiUsers, FiMapPin, FiTrendingUp, FiShield, FiWifi, FiStar, FiArrowRight } = FiIcons;

const Hero = () => {
  const features = [
    {
      icon: FiMapPin,
      title: "70+ Countries",
      description: "Premium co-working spaces worldwide",
      color: "text-blue-500",
      bgGradient: "from-blue-400 to-blue-600"
    },
    {
      icon: FiUsers,
      title: "Nomad Families",
      description: "Connect with like-minded travelers",
      color: "text-purple-500",
      bgGradient: "from-purple-400 to-purple-600"
    },
    {
      icon: FiShield,
      title: "Legal Assistant",
      description: "Navigate cross-border work laws",
      color: "text-green-500",
      bgGradient: "from-green-400 to-green-600"
    },
    {
      icon: FiWifi,
      title: "Remote Work",
      description: "Seamless digital nomad experience",
      color: "text-orange-500",
      bgGradient: "from-orange-400 to-orange-600"
    }
  ];

  const stats = [
    { value: "70+", label: "Countries", icon: FiGlobe },
    { value: "5,000+", label: "Co-working Spaces", icon: FiMapPin },
    { value: "15,000+", label: "Nomad Families", icon: FiUsers }
  ];

  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Hero Content */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <motion.div
              className="inline-flex items-center px-6 py-3 rounded-full glass-card mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <SafeIcon icon={FiStar} className="w-5 h-5 text-yellow-500 mr-2" />
              <span className="text-sm font-medium carved-text-light">Trusted by 15,000+ Digital Nomads</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="gradient-text">Welcome to Nomad7</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-light carved-text-light">
              Connect nomad families, auto-manage co-working spaces across 70+ countries, 
              and navigate cross-border remote work with our intelligent assistant.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-20"
          >
            <motion.button
              className="group relative px-10 py-4 text-lg font-semibold neu-button-primary overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center text-white">
                Start Your Journey
                <SafeIcon icon={FiArrowRight} className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
            <motion.button
              className="px-10 py-4 text-lg font-semibold neu-button carved-text"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Locations
            </motion.button>
          </motion.div>
        </div>

        {/* Features Grid - Matching Dashboard Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="neu-card-deep p-6 hover:shadow-neu-hover transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-14 h-14 neu-card-deep flex items-center justify-center bg-gradient-to-br ${feature.bgGradient} group-hover:scale-110 transition-transform`}>
                  <SafeIcon icon={feature.icon} className="w-7 h-7 text-white" />
                </div>
              </div>
              <div className="text-2xl font-bold carved-text-deep mb-1">{feature.title}</div>
              <div className="carved-text-light font-medium text-sm">{feature.description}</div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="neu-card-deep p-10 bg-gradient-to-br from-white/50 to-white/30"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="group"
              >
                <div className="neu-card-deep p-6 mb-4 w-fit mx-auto">
                  <SafeIcon icon={stat.icon} className="w-8 h-8 text-blue-500 group-hover:text-purple-500 transition-colors icon-ingrained" />
                </div>
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="carved-text font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;