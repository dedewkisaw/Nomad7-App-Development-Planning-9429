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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-neu-bg/80 backdrop-blur-md border-b border-neu-dark/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              className="neu-card p-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <SafeIcon icon={FiGlobe} className="w-6 h-6 text-nomad-blue" />
            </motion.div>
            <span className="text-xl font-bold gradient-text">Nomad7</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                onClick={() => setCurrentPage(item.id)}
              >
                <motion.div
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                    currentPage === item.id
                      ? 'neu-card-pressed text-nomad-blue'
                      : 'neu-button text-gray-600 hover:text-nomad-blue'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <SafeIcon icon={item.icon} className="w-4 h-4" />
                  <span className="text-sm font-medium">{item.label}</span>
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <motion.button
            className="md:hidden neu-button p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <SafeIcon icon={isMenuOpen ? FiX : FiMenu} className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4"
          >
            <div className="space-y-2">
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
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                      currentPage === item.id
                        ? 'neu-card-pressed text-nomad-blue'
                        : 'neu-button text-gray-600'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <SafeIcon icon={item.icon} className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
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