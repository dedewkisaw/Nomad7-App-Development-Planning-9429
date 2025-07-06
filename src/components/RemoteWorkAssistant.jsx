import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHeadphones, FiDollarSign, FiFileText, FiShield, FiGlobe, FiMessageCircle, FiSend, FiCheck, FiClock, FiAlertTriangle } = FiIcons;

const RemoteWorkAssistant = () => {
  const [activeTab, setActiveTab] = useState('chat');
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      type: 'assistant',
      message: "Hello! I'm your Cross-Border Remote Work Assistant. I can help you with tax compliance, visa requirements, legal documentation, and more. What would you like to know?",
      timestamp: '10:30 AM'
    }
  ]);

  const services = [
    {
      icon: FiDollarSign,
      title: "Tax Compliance",
      description: "Navigate complex tax requirements across multiple countries",
      status: "active",
      color: "text-nomad-green"
    },
    {
      icon: FiFileText,
      title: "Visa Requirements",
      description: "Stay compliant with visa and work permit regulations",
      status: "active",
      color: "text-nomad-blue"
    },
    {
      icon: FiShield,
      title: "Legal Documentation",
      description: "Ensure all your contracts and agreements are valid",
      status: "active",
      color: "text-nomad-purple"
    },
    {
      icon: FiGlobe,
      title: "Banking Solutions",
      description: "Multi-currency accounts and international transfers",
      status: "coming-soon",
      color: "text-nomad-orange"
    }
  ];

  const recentCases = [
    {
      id: 1,
      title: "Tax residency consultation",
      client: "Sarah M.",
      status: "completed",
      date: "2 days ago",
      type: "tax"
    },
    {
      id: 2,
      title: "Visa extension assistance",
      client: "John D.",
      status: "in-progress",
      date: "1 week ago",
      type: "visa"
    },
    {
      id: 3,
      title: "Contract review",
      client: "Maria L.",
      status: "pending",
      date: "3 days ago",
      type: "legal"
    },
    {
      id: 4,
      title: "Multi-country tax filing",
      client: "Alex R.",
      status: "completed",
      date: "1 week ago",
      type: "tax"
    }
  ];

  const tabs = [
    { id: 'chat', label: 'AI Assistant', icon: FiMessageCircle },
    { id: 'services', label: 'Services', icon: FiHeadphones },
    { id: 'cases', label: 'Recent Cases', icon: FiFileText }
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: chatMessages.length + 1,
        type: 'user',
        message: message,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setChatMessages([...chatMessages, newMessage]);
      setMessage('');

      // Simulate AI response
      setTimeout(() => {
        const aiResponse = {
          id: chatMessages.length + 2,
          type: 'assistant',
          message: "I understand your question. Let me help you with that. Based on your current location and work situation, here are the key considerations...",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setChatMessages(prev => [...prev, aiResponse]);
      }, 1000);
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed': return FiCheck;
      case 'in-progress': return FiClock;
      case 'pending': return FiAlertTriangle;
      default: return FiFileText;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'text-green-600';
      case 'in-progress': return 'text-blue-600';
      case 'pending': return 'text-orange-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold gradient-text mb-4">Remote Work Assistant</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Your AI-powered legal and financial assistant for cross-border remote work
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="neu-card p-2 mb-8"
        >
          <div className="flex space-x-2">
            {tabs.map(tab => (
              <motion.button
                key={tab.id}
                className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-lg text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? 'neu-card-pressed text-nomad-blue'
                    : 'neu-button text-gray-600 hover:text-nomad-blue'
                }`}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <SafeIcon icon={tab.icon} className="w-4 h-4" />
                <span>{tab.label}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Content */}
        <div className="min-h-[600px]">
          {activeTab === 'chat' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="neu-card p-6"
            >
              <div className="flex flex-col h-[500px]">
                {/* Chat Messages */}
                <div className="flex-1 overflow-y-auto space-y-4 mb-4">
                  {chatMessages.map(msg => (
                    <div
                      key={msg.id}
                      className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                        msg.type === 'user'
                          ? 'bg-gradient-to-r from-nomad-blue to-nomad-purple text-white'
                          : 'neu-button text-gray-800'
                      }`}>
                        <p className="text-sm">{msg.message}</p>
                        <p className={`text-xs mt-1 ${
                          msg.type === 'user' ? 'text-white/70' : 'text-gray-500'
                        }`}>
                          {msg.timestamp}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Message Input */}
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Ask about taxes, visas, legal requirements..."
                    className="flex-1 neu-input px-4 py-3 text-gray-700 placeholder-gray-400"
                  />
                  <motion.button
                    onClick={handleSendMessage}
                    className="neu-button p-3 text-nomad-blue hover:text-nomad-purple"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <SafeIcon icon={FiSend} className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'services' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="neu-card p-6 hover:shadow-neu-hover transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="neu-card p-3">
                      <SafeIcon icon={service.icon} className={`w-6 h-6 ${service.color}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          service.status === 'active' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-orange-100 text-orange-800'
                        }`}>
                          {service.status === 'active' ? 'Active' : 'Coming Soon'}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <motion.button
                        className="neu-button px-4 py-2 text-sm font-medium text-nomad-blue hover:text-nomad-purple"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        disabled={service.status !== 'active'}
                      >
                        {service.status === 'active' ? 'Get Help' : 'Notify Me'}
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === 'cases' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="neu-card p-6"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Recent Cases</h3>
              <div className="space-y-4">
                {recentCases.map((case_, index) => (
                  <motion.div
                    key={case_.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="neu-button p-4 hover:shadow-neu-hover transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="neu-card p-2">
                          <SafeIcon 
                            icon={getStatusIcon(case_.status)} 
                            className={`w-4 h-4 ${getStatusColor(case_.status)}`} 
                          />
                        </div>
                        <div>
                          <div className="font-medium text-gray-800">{case_.title}</div>
                          <div className="text-sm text-gray-600">Client: {case_.client}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`text-sm font-medium capitalize ${getStatusColor(case_.status)}`}>
                          {case_.status.replace('-', ' ')}
                        </div>
                        <div className="text-xs text-gray-500">{case_.date}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RemoteWorkAssistant;