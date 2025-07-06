import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiTrendingUp, FiMapPin, FiUsers, FiDollarSign, FiCalendar, FiActivity } = FiIcons;

const Dashboard = () => {
  const stats = [
    {
      icon: FiTrendingUp,
      title: "Active Locations",
      value: "127",
      change: "+12%",
      color: "text-nomad-green"
    },
    {
      icon: FiUsers,
      title: "Connected Families",
      value: "2,847",
      change: "+8%",
      color: "text-nomad-blue"
    },
    {
      icon: FiMapPin,
      title: "Co-working Spaces",
      value: "5,234",
      change: "+15%",
      color: "text-nomad-purple"
    },
    {
      icon: FiDollarSign,
      title: "Legal Cases Resolved",
      value: "1,923",
      change: "+23%",
      color: "text-nomad-orange"
    }
  ];

  const recentActivities = [
    {
      type: "family",
      message: "The Johnson family joined from Lisbon",
      time: "2 hours ago",
      icon: FiUsers
    },
    {
      type: "space",
      message: "New co-working space added in Bali",
      time: "4 hours ago",
      icon: FiMapPin
    },
    {
      type: "legal",
      message: "Tax consultation completed for Sarah M.",
      time: "6 hours ago",
      icon: FiDollarSign
    },
    {
      type: "community",
      message: "Monthly nomad meetup scheduled in Bangkok",
      time: "8 hours ago",
      icon: FiCalendar
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold gradient-text mb-4">Platform Overview</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real-time insights into our global nomad community and co-working network
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="neu-card p-6 hover:shadow-neu-hover transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="neu-card p-3">
                  <SafeIcon icon={stat.icon} className={`w-6 h-6 ${stat.color}`} />
                </div>
                <span className="text-sm font-medium text-green-600">{stat.change}</span>
              </div>
              <div className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.title}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Activities */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="neu-card p-6"
          >
            <div className="flex items-center mb-6">
              <SafeIcon icon={FiActivity} className="w-5 h-5 text-nomad-blue mr-2" />
              <h3 className="text-xl font-semibold text-gray-800">Recent Activities</h3>
            </div>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="flex items-start space-x-3 p-3 rounded-lg neu-button"
                >
                  <div className="neu-card p-2 mt-1">
                    <SafeIcon icon={activity.icon} className="w-4 h-4 text-nomad-blue" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-800">{activity.message}</p>
                    <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="neu-card p-6"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-4">
              <motion.button
                className="neu-button p-4 text-left hover:shadow-neu-hover transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <SafeIcon icon={FiMapPin} className="w-6 h-6 text-nomad-blue mb-2" />
                <div className="text-sm font-medium">Find Spaces</div>
              </motion.button>
              <motion.button
                className="neu-button p-4 text-left hover:shadow-neu-hover transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <SafeIcon icon={FiUsers} className="w-6 h-6 text-nomad-green mb-2" />
                <div className="text-sm font-medium">Join Families</div>
              </motion.button>
              <motion.button
                className="neu-button p-4 text-left hover:shadow-neu-hover transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <SafeIcon icon={FiDollarSign} className="w-6 h-6 text-nomad-orange mb-2" />
                <div className="text-sm font-medium">Legal Help</div>
              </motion.button>
              <motion.button
                className="neu-button p-4 text-left hover:shadow-neu-hover transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <SafeIcon icon={FiCalendar} className="w-6 h-6 text-nomad-purple mb-2" />
                <div className="text-sm font-medium">Schedule</div>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;