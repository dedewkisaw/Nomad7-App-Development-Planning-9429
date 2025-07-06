import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from './SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHome, FiUsers, FiShield, FiBarChart3, FiMessageSquare, FiSettings, FiGlobe } = FiIcons;

const Sidebar = ({ isOpen, currentPage, setCurrentPage }) => {
  const navigate = useNavigate();

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: FiHome, path: '/dashboard' },
    { id: 'users', label: 'User Management', icon: FiUsers, path: '/users' },
    { id: 'family-safety', label: 'Family Safety', icon: FiShield, path: '/family-safety' },
    { id: 'analytics', label: 'Analytics', icon: FiBarChart3, path: '/analytics' },
    { id: 'messages', label: 'Messages', icon: FiMessageSquare, path: '/messages' },
    { id: 'settings', label: 'Settings', icon: FiSettings, path: '/settings' }
  ];

  const handleNavigation = (item) => {
    setCurrentPage(item.id);
    navigate(item.path);
  };

  return (
    <motion.aside
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.3 }}
      className={`fixed left-0 top-0 h-full bg-neu-bg border-r border-neu-dark/20 transition-all duration-300 z-40 ${
        isOpen ? 'w-64' : 'w-16'
      }`}
    >
      <div className="p-6">
        {/* Logo */}
        <div className={`flex items-center mb-8 ${!isOpen && 'justify-center'}`}>
          <div className="w-10 h-10 neu-card-deep flex items-center justify-center bg-gradient-to-br from-red-500 to-orange-600">
            <SafeIcon icon={FiGlobe} className="w-5 h-5 text-white" />
          </div>
          {isOpen && (
            <div className="ml-3">
              <h1 className="text-xl font-bold gradient-text">Nomad7</h1>
              <p className="text-xs text-ingrained-light">Admin Dashboard</p>
            </div>
          )}
        </div>

        {/* Navigation */}
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => handleNavigation(item)}
              className={`w-full flex items-center p-3 rounded-xl transition-all duration-300 ${
                currentPage === item.id
                  ? 'neu-card-pressed text-blue-600 bg-gradient-to-r from-blue-50 to-purple-50'
                  : 'neu-button text-ingrained hover:text-blue-600'
              } ${!isOpen && 'justify-center'}`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <SafeIcon icon={item.icon} className="w-5 h-5" />
              {isOpen && <span className="ml-3 font-medium">{item.label}</span>}
            </motion.button>
          ))}
        </nav>
      </div>

      {/* Platform Status */}
      {isOpen && (
        <div className="absolute bottom-6 left-6 right-6">
          <div className="neu-card-deep p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-ingrained-dark">Platform Status</span>
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            </div>
            <div className="text-xs text-ingrained-light">
              <div>Nomad7.life: Online</div>
              <div>Real-time sync: Active</div>
            </div>
          </div>
        </div>
      )}
    </motion.aside>
  );
};

export default Sidebar;