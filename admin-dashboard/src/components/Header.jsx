import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from './SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMenu, FiBell, FiUser, FiLogOut, FiSettings, FiShield } = FiIcons;

const Header = ({ user, onToggleSidebar, onLogout }) => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [notifications] = useState([
    { id: 1, type: 'alert', message: 'New safety report requires attention', time: '5 min ago' },
    { id: 2, type: 'info', message: 'Family verification completed', time: '15 min ago' },
    { id: 3, type: 'warning', message: 'System maintenance scheduled', time: '1 hour ago' }
  ]);

  return (
    <header className="h-16 bg-neu-bg border-b border-neu-dark/20 px-6 flex items-center justify-between">
      {/* Left Side */}
      <div className="flex items-center space-x-4">
        <motion.button
          onClick={onToggleSidebar}
          className="neu-button p-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <SafeIcon icon={FiMenu} className="w-5 h-5 text-ingrained" />
        </motion.button>
        
        <div>
          <h2 className="text-lg font-semibold carved-text-deep">Admin Dashboard</h2>
          <p className="text-xs carved-text-light">Real-time platform monitoring</p>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center space-x-4">
        {/* Notifications */}
        <div className="relative">
          <motion.button
            className="neu-button p-2 relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <SafeIcon icon={FiBell} className="w-5 h-5 text-ingrained" />
            {notifications.length > 0 && (
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                {notifications.length}
              </div>
            )}
          </motion.button>
        </div>

        {/* User Menu */}
        <div className="relative">
          <motion.button
            onClick={() => setShowUserMenu(!showUserMenu)}
            className="flex items-center space-x-3 neu-button p-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="w-8 h-8 neu-card-deep flex items-center justify-center bg-gradient-to-br from-blue-400 to-purple-600">
              <SafeIcon icon={FiUser} className="w-4 h-4 text-white" />
            </div>
            <div className="text-left hidden sm:block">
              <div className="text-sm font-medium carved-text-deep">{user?.username}</div>
              <div className="text-xs carved-text-light">{user?.role}</div>
            </div>
          </motion.button>

          {showUserMenu && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute right-0 top-12 w-48 neu-card-deep p-2 z-50"
            >
              <div className="space-y-1">
                <button className="w-full flex items-center space-x-3 p-2 neu-button text-left">
                  <SafeIcon icon={FiUser} className="w-4 h-4 text-ingrained" />
                  <span className="text-sm carved-text">Profile</span>
                </button>
                <button className="w-full flex items-center space-x-3 p-2 neu-button text-left">
                  <SafeIcon icon={FiSettings} className="w-4 h-4 text-ingrained" />
                  <span className="text-sm carved-text">Settings</span>
                </button>
                <hr className="my-2 border-neu-dark/20" />
                <button 
                  onClick={onLogout}
                  className="w-full flex items-center space-x-3 p-2 neu-button text-left hover:text-red-600"
                >
                  <SafeIcon icon={FiLogOut} className="w-4 h-4" />
                  <span className="text-sm">Logout</span>
                </button>
              </div>
            </motion.div>
          )}
        </div>

        {/* System Status */}
        <div className="flex items-center space-x-2 neu-card-pressed px-3 py-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-xs carved-text-light">System Online</span>
        </div>
      </div>
    </header>
  );
};

export default Header;