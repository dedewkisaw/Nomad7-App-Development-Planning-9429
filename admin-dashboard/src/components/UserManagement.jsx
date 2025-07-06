import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from './SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiUsers, FiSearch, FiFilter, FiEdit, FiTrash, FiShield, FiCheckCircle, FiXCircle, FiMail, FiPhone } = FiIcons;

const UserManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedUser, setSelectedUser] = useState(null);

  const users = [
    {
      id: 1,
      name: "The Johnson Family",
      email: "****@*****.com", // Hidden for privacy
      phone: "****-***-****", // Hidden for privacy
      location: "Lisbon, Portugal",
      status: "verified",
      role: "family",
      joinDate: "2024-01-15",
      lastActive: "2 hours ago",
      children: 2,
      safetyScore: 98,
      messagesCount: 45
    },
    {
      id: 2,
      name: "The Anderson Family",
      email: "****@*****.com",
      phone: "****-***-****",
      location: "Bali, Indonesia",
      status: "pending",
      role: "family",
      joinDate: "2024-01-14",
      lastActive: "1 day ago",
      children: 1,
      safetyScore: 96,
      messagesCount: 23
    },
    {
      id: 3,
      name: "Sarah Mitchell",
      email: "****@*****.com",
      phone: "****-***-****",
      location: "Mexico City, Mexico",
      status: "verified",
      role: "individual",
      joinDate: "2024-01-10",
      lastActive: "30 min ago",
      children: 0,
      safetyScore: 94,
      messagesCount: 67
    }
  ];

  const filters = [
    { id: 'all', label: 'All Users', count: users.length },
    { id: 'verified', label: 'Verified', count: users.filter(u => u.status === 'verified').length },
    { id: 'pending', label: 'Pending', count: users.filter(u => u.status === 'pending').length },
    { id: 'families', label: 'Families', count: users.filter(u => u.role === 'family').length },
    { id: 'individuals', label: 'Individuals', count: users.filter(u => u.role === 'individual').length }
  ];

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = selectedFilter === 'all' ||
                         (selectedFilter === 'verified' && user.status === 'verified') ||
                         (selectedFilter === 'pending' && user.status === 'pending') ||
                         (selectedFilter === 'families' && user.role === 'family') ||
                         (selectedFilter === 'individuals' && user.role === 'individual');

    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'verified': return 'text-green-600 bg-green-100';
      case 'pending': return 'text-orange-600 bg-orange-100';
      case 'suspended': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold gradient-text mb-2">User Management</h1>
          <p className="text-ingrained-light">Manage platform users and family accounts</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-sm text-ingrained">
            <span className="font-semibold">{filteredUsers.length}</span> users found
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="neu-card-deep p-6">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <SafeIcon icon={FiSearch} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search users by name or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="neu-input w-full pl-12 pr-6 py-3 text-ingrained font-medium"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {filters.map(filter => (
              <motion.button
                key={filter.id}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  selectedFilter === filter.id
                    ? 'neu-card-pressed text-blue-600 bg-gradient-to-r from-blue-50 to-purple-50'
                    : 'neu-button text-ingrained hover:text-blue-600'
                }`}
                onClick={() => setSelectedFilter(filter.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {filter.label}
                <span className="ml-2 px-2 py-1 bg-gray-200 rounded-full text-xs text-ingrained-dark">
                  {filter.count}
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Users Table */}
      <div className="neu-card-deep overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-blue-50 to-purple-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-ingrained-dark">User</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-ingrained-dark">Contact</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-ingrained-dark">Status</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-ingrained-dark">Activity</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-ingrained-dark">Safety</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-ingrained-dark">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neu-dark/20">
              {filteredUsers.map((user) => (
                <motion.tr
                  key={user.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="hover:bg-blue-50/50 transition-colors cursor-pointer"
                  onClick={() => setSelectedUser(user)}
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 neu-card-deep flex items-center justify-center bg-gradient-to-br from-blue-400 to-purple-600 mr-3">
                        <SafeIcon icon={FiUsers} className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-ingrained-dark">{user.name}</div>
                        <div className="text-sm text-ingrained-light">{user.location}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm">
                      <div className="flex items-center text-ingrained">
                        <SafeIcon icon={FiMail} className="w-3 h-3 mr-1" />
                        {user.email}
                      </div>
                      <div className="flex items-center text-ingrained-light mt-1">
                        <SafeIcon icon={FiPhone} className="w-3 h-3 mr-1" />
                        {user.phone}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col gap-1">
                      <span className={`inline-flex px-2 py-1 rounded-lg text-xs font-medium ${getStatusColor(user.status)}`}>
                        {user.status}
                      </span>
                      <span className="text-xs text-ingrained-light">
                        {user.role} {user.children > 0 && `(${user.children} kids)`}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm">
                      <div className="text-ingrained">Joined: {user.joinDate}</div>
                      <div className="text-ingrained-light">Active: {user.lastActive}</div>
                      <div className="text-ingrained-light">{user.messagesCount} messages</div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className={`w-2 h-2 rounded-full mr-2 ${
                        user.safetyScore >= 95 ? 'bg-green-500' :
                        user.safetyScore >= 85 ? 'bg-orange-500' : 'bg-red-500'
                      }`}></div>
                      <span className="text-sm font-semibold text-ingrained-dark">{user.safetyScore}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-2">
                      <motion.button
                        className="neu-button p-2 text-blue-600 hover:text-blue-800"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <SafeIcon icon={FiEdit} className="w-4 h-4" />
                      </motion.button>
                      <motion.button
                        className="neu-button p-2 text-green-600 hover:text-green-800"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <SafeIcon icon={user.status === 'verified' ? FiCheckCircle : FiShield} className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="neu-card-deep p-6 text-center">
          <div className="text-2xl font-bold text-blue-600 mb-2">{users.length}</div>
          <div className="text-sm text-ingrained-light">Total Users</div>
        </div>
        <div className="neu-card-deep p-6 text-center">
          <div className="text-2xl font-bold text-green-600 mb-2">
            {users.filter(u => u.status === 'verified').length}
          </div>
          <div className="text-sm text-ingrained-light">Verified Users</div>
        </div>
        <div className="neu-card-deep p-6 text-center">
          <div className="text-2xl font-bold text-orange-600 mb-2">
            {users.filter(u => u.status === 'pending').length}
          </div>
          <div className="text-sm text-ingrained-light">Pending Verification</div>
        </div>
        <div className="neu-card-deep p-6 text-center">
          <div className="text-2xl font-bold text-purple-600 mb-2">
            {users.reduce((total, user) => total + user.children, 0)}
          </div>
          <div className="text-sm text-ingrained-light">Total Children</div>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;