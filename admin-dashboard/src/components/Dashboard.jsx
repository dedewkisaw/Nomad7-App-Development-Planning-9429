import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import SafeIcon from './SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiUsers, FiMessageSquare, FiShield, FiTrendingUp, FiGlobe, FiActivity, FiAlertTriangle, FiCheckCircle } = FiIcons;

const Dashboard = () => {
  const [realTimeData, setRealTimeData] = useState({
    activeUsers: 1247,
    onlineFamilies: 89,
    messagesLast24h: 456,
    safetyIncidents: 2,
    newRegistrations: 34,
    verificationsPending: 12
  });

  const [activityData, setActivityData] = useState([
    { time: '00:00', users: 245, messages: 12 },
    { time: '04:00', users: 189, messages: 8 },
    { time: '08:00', users: 567, messages: 45 },
    { time: '12:00', users: 892, messages: 78 },
    { time: '16:00', users: 1247, messages: 123 },
    { time: '20:00', users: 1089, messages: 89 },
    { time: '24:00', users: 756, messages: 56 }
  ]);

  const [safetyMetrics, setSafetyMetrics] = useState([
    { name: 'Verified Families', value: 2847, color: '#10B981' },
    { name: 'Pending Verification', value: 156, color: '#F59E0B' },
    { name: 'Safety Alerts', value: 8, color: '#EF4444' },
    { name: 'Resolved Issues', value: 234, color: '#3B82F6' }
  ]);

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setRealTimeData(prev => ({
        ...prev,
        activeUsers: prev.activeUsers + Math.floor(Math.random() * 10) - 5,
        onlineFamilies: prev.onlineFamilies + Math.floor(Math.random() * 4) - 2,
        messagesLast24h: prev.messagesLast24h + Math.floor(Math.random() * 5)
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const stats = [
    {
      icon: FiUsers,
      title: "Active Users",
      value: realTimeData.activeUsers.toLocaleString(),
      change: "+12%",
      color: "text-blue-500",
      bgGradient: "from-blue-400 to-blue-600",
      realTime: true
    },
    {
      icon: FiShield,
      title: "Online Families",
      value: realTimeData.onlineFamilies,
      change: "+5%",
      color: "text-green-500",
      bgGradient: "from-green-400 to-green-600",
      realTime: true
    },
    {
      icon: FiMessageSquare,
      title: "Messages (24h)",
      value: realTimeData.messagesLast24h.toLocaleString(),
      change: "+18%",
      color: "text-purple-500",
      bgGradient: "from-purple-400 to-purple-600",
      realTime: true
    },
    {
      icon: FiAlertTriangle,
      title: "Safety Incidents",
      value: realTimeData.safetyIncidents,
      change: "-2%",
      color: "text-orange-500",
      bgGradient: "from-orange-400 to-orange-600",
      realTime: false
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold gradient-text mb-2">Admin Dashboard</h1>
          <p className="text-ingrained-light">Real-time monitoring of Nomad7.life platform</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center text-green-600">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
            <span className="text-sm font-medium">Live Data</span>
          </div>
        </div>
      </div>

      {/* Real-time Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="neu-card-deep p-6 hover:shadow-neu-hover transition-all duration-300 relative"
          >
            {stat.realTime && (
              <div className="absolute top-2 right-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              </div>
            )}
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 neu-card-deep flex items-center justify-center bg-gradient-to-br ${stat.bgGradient}`}>
                <SafeIcon icon={stat.icon} className="w-6 h-6 text-white" />
              </div>
              <div className="text-right">
                <div className="text-xs text-green-600 font-medium">{stat.change}</div>
              </div>
            </div>
            <div className="text-2xl font-bold carved-text-deep mb-1">{stat.value}</div>
            <div className="carved-text-light font-medium text-sm">{stat.title}</div>
          </motion.div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Activity Chart */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="neu-card-deep p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold carved-text-deep">Real-time Activity</h3>
            <div className="flex items-center text-green-600">
              <SafeIcon icon={FiActivity} className="w-4 h-4 mr-2" />
              <span className="text-sm">Live</span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={activityData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis dataKey="time" stroke="#666" />
              <YAxis stroke="#666" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#f8f9fa', 
                  border: 'none', 
                  borderRadius: '12px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                }} 
              />
              <Area 
                type="monotone" 
                dataKey="users" 
                stroke="#3B82F6" 
                fill="url(#userGradient)" 
                strokeWidth={2}
              />
              <defs>
                <linearGradient id="userGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                </linearGradient>
              </defs>
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Safety Metrics */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="neu-card-deep p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold carved-text-deep">Safety Overview</h3>
            <SafeIcon icon={FiShield} className="w-5 h-5 text-green-600" />
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={safetyMetrics}
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label={({ name, value }) => `${name}: ${value}`}
              >
                {safetyMetrics.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Recent Activity & Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="neu-card-deep p-6"
        >
          <h3 className="text-xl font-bold carved-text-deep mb-6">Recent Activity</h3>
          <div className="space-y-4">
            {[
              { type: 'user', message: 'New family verification: The Johnsons', time: '2 min ago', status: 'success' },
              { type: 'message', message: 'Secure message sent between families', time: '5 min ago', status: 'info' },
              { type: 'safety', message: 'Safety report resolved successfully', time: '15 min ago', status: 'success' },
              { type: 'alert', message: 'Unusual login activity detected', time: '1 hour ago', status: 'warning' }
            ].map((activity, index) => (
              <div key={index} className="flex items-center space-x-4 p-3 neu-button rounded-lg">
                <div className={`w-8 h-8 neu-card-deep flex items-center justify-center ${
                  activity.status === 'success' ? 'bg-green-100' :
                  activity.status === 'warning' ? 'bg-orange-100' : 'bg-blue-100'
                }`}>
                  <SafeIcon 
                    icon={activity.type === 'user' ? FiUsers : 
                          activity.type === 'message' ? FiMessageSquare :
                          activity.type === 'safety' ? FiShield : FiAlertTriangle} 
                    className={`w-4 h-4 ${
                      activity.status === 'success' ? 'text-green-600' :
                      activity.status === 'warning' ? 'text-orange-600' : 'text-blue-600'
                    }`} 
                  />
                </div>
                <div className="flex-1">
                  <p className="text-sm carved-text-deep font-medium">{activity.message}</p>
                  <p className="text-xs carved-text-light">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* System Health */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="neu-card-deep p-6"
        >
          <h3 className="text-xl font-bold carved-text-deep mb-6">System Health</h3>
          <div className="space-y-4">
            {[
              { service: 'API Gateway', status: 'healthy', uptime: '99.9%', response: '45ms' },
              { service: 'Database', status: 'healthy', uptime: '99.8%', response: '12ms' },
              { service: 'Message Service', status: 'healthy', uptime: '99.9%', response: '23ms' },
              { service: 'Security Scanner', status: 'warning', uptime: '98.5%', response: '156ms' }
            ].map((service, index) => (
              <div key={index} className="flex items-center justify-between p-3 neu-button rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${
                    service.status === 'healthy' ? 'bg-green-500' : 'bg-orange-500'
                  }`}></div>
                  <span className="carved-text-deep font-medium">{service.service}</span>
                </div>
                <div className="text-right">
                  <div className="text-sm carved-text-deep">{service.uptime}</div>
                  <div className="text-xs carved-text-light">{service.response}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;