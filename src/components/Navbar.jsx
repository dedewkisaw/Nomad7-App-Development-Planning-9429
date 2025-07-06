import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiGlobe, FiUsers, FiMapPin, FiHeadphones, FiMenu, FiX } = FiIcons;

const Navbar = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: FiGlobe, path: '/' },
    { id: 'coworking', label: 'Co-Working', icon: FiMapPin, path: '/coworking' },
    { id: 'families', label: 'Families', icon: FiUsers, path: '/families' },
    { id: 'assistant', label: 'Assistant', icon: FiHeadphones, path: '/assistant' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <motion.div
              className="w-12 h-12 neu-card-deep flex items-center justify-center bg-gradient-to-br from-blue-400 to-purple-600"
              whileHover={{ scale: 1.02, rotate: 2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <SafeIcon icon={FiGlobe} className="w-6 h-6 text-white" />
            </motion.div>
            <span className="text-2xl font-bold gradient-text">Nomad7</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                onClick={() => setCurrentPage(item.id)}
              >
                <motion.div
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 ${
                    currentPage === item.id
                      ? 'neu-card-pressed text-blue-600 bg-gradient-to-r from-blue-50 to-purple-50'
                      : 'neu-button text-ingrained hover:text-blue-600'
                  }`}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                >
                  <div className={`w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-300 ${
                    currentPage === item.id
                      ? 'bg-gradient-to-br from-blue-400 to-purple-600'
                      : 'neu-card-deep bg-gradient-to-br from-gray-100 to-gray-200'
                  }`}>
                    <SafeIcon 
                      icon={item.icon} 
                      className={`w-4 h-4 transition-colors duration-300 ${
                        currentPage === item.id ? 'text-white' : 'text-gray-600'
                      }`} 
                    />
                  </div>
                  <span className="font-medium carved-text">{item.label}</span>
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <motion.button
            className="md:hidden neu-button p-3"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
          >
            <div className="w-6 h-6 neu-card-deep flex items-center justify-center rounded bg-gradient-to-br from-gray-100 to-gray-200">
              <SafeIcon icon={isMenuOpen ? FiX : FiMenu} className="w-4 h-4 text-gray-600" />
            </div>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden py-6"
          >
            <div className="space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setIsMenuOpen(false);
                  }}
                >
                  <motion.div
                    className={`flex items-center space-x-3 px-6 py-4 rounded-xl transition-all ${
                      currentPage === item.id
                        ? 'neu-card-pressed text-blue-600'
                        : 'neu-button text-ingrained'
                    }`}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                  >
                    <div className={`w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-300 ${
                      currentPage === item.id
                        ? 'bg-gradient-to-br from-blue-400 to-purple-600'
                        : 'neu-card-deep bg-gradient-to-br from-gray-100 to-gray-200'
                    }`}>
                      <SafeIcon 
                        icon={item.icon} 
                        className={`w-4 h-4 transition-colors duration-300 ${
                          currentPage === item.id ? 'text-white' : 'text-gray-600'
                        }`} 
                      />
                    </div>
                    <span className="font-medium carved-text">{item.label}</span>
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;