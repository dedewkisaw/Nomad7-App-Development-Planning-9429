import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from './SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiGlobe, FiLock, FiUser, FiEye, FiEyeOff, FiShield } = FiIcons;

const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Demo credentials for testing
  const demoCredentials = [
    { username: 'superadmin', password: 'admin123', role: 'super_admin', name: 'Super Administrator' },
    { username: 'admin', password: 'nomad123', role: 'admin', name: 'Platform Administrator' },
    { username: 'moderator', password: 'mod123', role: 'moderator', name: 'Content Moderator' },
    { username: 'support', password: 'support123', role: 'support', name: 'Support Agent' }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate authentication delay
    setTimeout(() => {
      // Check demo credentials
      const user = demoCredentials.find(
        cred => cred.username === formData.username && cred.password === formData.password
      );

      if (user) {
        const userData = {
          id: Date.now(),
          username: user.username,
          name: user.name,
          role: user.role,
          permissions: user.role === 'super_admin' ? ['all'] : [user.role],
          token: 'admin_token_' + Date.now(),
          loginTime: new Date().toISOString()
        };
        onLogin(userData);
      } else {
        setError('Invalid username or password');
      }
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-neu-bg flex items-center justify-center px-4">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-red-400/20 to-orange-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-orange-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="neu-card-deep p-8 w-full max-w-md relative z-10"
      >
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 neu-card-deep flex items-center justify-center bg-gradient-to-br from-red-500 to-orange-600 mx-auto mb-4">
            <SafeIcon icon={FiGlobe} className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold gradient-text mb-2">Nomad7 Admin</h1>
          <p className="text-sm text-ingrained-light">Secure access to admin dashboard</p>
        </div>

        {/* Demo Credentials Info */}
        <div className="mb-6 p-4 bg-blue-50 rounded-lg">
          <h3 className="text-sm font-semibold text-blue-800 mb-2">Demo Login Credentials:</h3>
          <div className="space-y-1 text-xs text-blue-700">
            <div><strong>Super Admin:</strong> superadmin / admin123</div>
            <div><strong>Admin:</strong> admin / nomad123</div>
            <div><strong>Moderator:</strong> moderator / mod123</div>
            <div><strong>Support:</strong> support / support123</div>
          </div>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
              {error}
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-ingrained-dark mb-2">Username</label>
            <div className="relative">
              <SafeIcon icon={FiUser} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                required
                className="neu-input w-full pl-12 pr-4 py-3 text-ingrained"
                value={formData.username}
                onChange={(e) => setFormData({...formData, username: e.target.value})}
                placeholder="Enter your username"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-ingrained-dark mb-2">Password</label>
            <div className="relative">
              <SafeIcon icon={FiLock} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type={showPassword ? 'text' : 'password'}
                required
                className="neu-input w-full pl-12 pr-12 py-3 text-ingrained"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                placeholder="Enter your password"
              />
              <button
                type="button"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                onClick={() => setShowPassword(!showPassword)}
              >
                <SafeIcon icon={showPassword ? FiEyeOff : FiEye} className="w-5 h-5" />
              </button>
            </div>
          </div>

          <motion.button
            type="submit"
            className="w-full neu-button-primary py-3 px-6 font-semibold text-white flex items-center justify-center"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                Authenticating...
              </>
            ) : (
              <>
                <SafeIcon icon={FiShield} className="w-5 h-5 mr-2" />
                Secure Login
              </>
            )}
          </motion.button>
        </form>

        {/* Security Notice */}
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <div className="flex items-start">
            <SafeIcon icon={FiShield} className="w-5 h-5 text-blue-600 mr-2 mt-0.5" />
            <div className="text-sm text-blue-800">
              <p className="font-semibold mb-1">Secure Access</p>
              <p>This dashboard provides administrative access to Nomad7.life platform data and user management.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;