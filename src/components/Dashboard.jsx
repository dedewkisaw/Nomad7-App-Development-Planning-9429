import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiTrendingUp, FiMapPin, FiUsers, FiDollarSign, FiCalendar, FiActivity, FiArrowUp } = FiIcons;

const Dashboard = () => {
  const stats = [
    {
      icon: FiTrendingUp,
      title: "Active Locations",
      value: "127",
      change: "+12%",
      color: "text-emerald-500",
      bgGradient: "from-emerald-400 to-emerald-600"
    },
    {
      icon: FiUsers,
      title: "Connected Families",
      value: "2,847",
      change: "+8%",
      color: "text-blue-500",
      bgGradient: "from-blue-400 to-blue-600"
    },
    {
      icon: FiMapPin,
      title: "Co-working Spaces",
      value: "5,234",
      change: "+15%",
      color: "text-purple-500",
      bgGradient: "from-purple-400 to-purple-600"
    },
    {
      icon: FiDollarSign,
      title: "Legal Cases Resolved",
      value: "1,923",
      change: "+23%",
      color: "text-orange-500",
      bgGradient: "from-orange-400 to-orange-600"
    }
  ];

  const recentActivities = [
    {
      type: "family",
      message: "The Johnson family joined from Lisbon",
      time: "2 hours ago",
      icon: FiUsers,
      color: "text-blue-500"
    },
    {
      type: "space",
      message: "New co-working space added in Bali",
      time: "4 hours ago",
      icon: FiMapPin,
      color: "text-purple-500"
    },
    {
      type: "legal",
      message: "Tax consultation completed for Sarah M.",
      time: "6 hours ago",
      icon: FiDollarSign,
      color: "text-orange-500"
    },
    {
      type: "community",
      message: "Monthly nomad meetup scheduled in Bangkok",
      time: "8 hours ago",
      icon: FiCalendar,
      color: "text-green-500"
    }
  ];

  const quickActions = [
    {
      icon: FiMapPin,
      title: "Find Spaces",
      description: "Discover co-working spaces",
      color: "text-blue-500",
      bgGradient: "from-blue-400 to-blue-600"
    },
    {
      icon: FiUsers,
      title: "Join Families",
      description: "Connect with nomads",
      color: "text-emerald-500",
      bgGradient: "from-emerald-400 to-emerald-600"
    },
    {
      icon: FiDollarSign,
      title: "Legal Help",
      description: "Get assistance",
      color: "text-orange-500",
      bgGradient: "from-orange-400 to-orange-600"
    },
    {
      icon: FiCalendar,
      title: "Schedule",
      description: "Plan your journey",
      color: "text-purple-500",
      bgGradient: "from-purple-400 to-purple-600"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Platform Overview</h2>
          <p className="text-xl carved-text-light max-w-3xl mx-auto leading-relaxed">
            Real-time insights into our global nomad community and co-working network
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="neu-card-deep p-6 hover:shadow-neu-hover transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-14 h-14 neu-card-deep flex items-center justify-center bg-gradient-to-br ${stat.bgGradient} group-hover:scale-110 transition-transform`}>
                  <SafeIcon icon={stat.icon} className="w-7 h-7 text-white" />
                </div>
                <div className="flex items-center text-emerald-500 font-semibold">
                  <SafeIcon icon={FiArrowUp} className="w-3 h-3 mr-1" />
                  <span className="text-xs carved-text">{stat.change}</span>
                </div>
              </div>
              <div className="text-2xl font-bold carved-text-deep mb-1">{stat.value}</div>
              <div className="carved-text-light font-medium text-sm">{stat.title}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Activities */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="neu-card-deep p-6"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 neu-card-deep flex items-center justify-center bg-gradient-to-br from-blue-400 to-blue-600 mr-3">
                <SafeIcon icon={FiActivity} className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold carved-text-deep">Recent Activities</h3>
            </div>
            <div className="space-y-3">
              {recentActivities.map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="flex items-start space-x-3 p-4 rounded-xl neu-button hover:shadow-neu-hover transition-all"
                >
                  <div className="w-10 h-10 neu-card-deep flex items-center justify-center flex-shrink-0 mt-0.5">
                    <SafeIcon icon={activity.icon} className={`w-5 h-5 ${activity.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="carved-text-deep font-medium mb-1 text-sm">{activity.message}</p>
                    <p className="text-xs carved-text-light">{activity.time}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="neu-card-deep p-6"
          >
            <h3 className="text-xl font-bold carved-text-deep mb-6">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-4">
              {quickActions.map((action, index) => (
                <motion.button
                  key={index}
                  className="p-4 text-left neu-button hover:shadow-neu-hover transition-all duration-300 group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                >
                  <div className={`w-12 h-12 neu-card-deep flex items-center justify-center bg-gradient-to-br ${action.bgGradient} mb-3 group-hover:scale-110 transition-transform`}>
                    <SafeIcon icon={action.icon} className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-sm font-semibold carved-text-deep mb-1">{action.title}</div>
                  <div className="text-xs carved-text-light">{action.description}</div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;