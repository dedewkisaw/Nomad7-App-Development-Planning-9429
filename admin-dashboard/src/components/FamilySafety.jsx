import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from './SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiShield, FiUsers, FiAlertTriangle, FiCheckCircle, FiEye, FiMessageSquare, FiLock, FiUserCheck, FiX, FiFlag } = FiIcons;

const FamilySafety = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedFamily, setSelectedFamily] = useState(null);
  const [showMessageModal, setShowMessageModal] = useState(false);

  const safetyOverview = {
    totalFamilies: 2847,
    verifiedFamilies: 2691,
    pendingVerification: 156,
    safetyIncidents: 8,
    resolvedIncidents: 234,
    activeReports: 3
  };

  const verificationQueue = [
    {
      id: 1,
      familyName: "The Martinez Family",
      submittedAt: "2024-01-15 14:30",
      documents: ["ID Verification", "Background Check", "References"],
      status: "pending_review",
      priority: "high",
      location: "Barcelona, Spain",
      children: 2
    },
    {
      id: 2,
      familyName: "The Chen Family",
      submittedAt: "2024-01-15 10:15",
      documents: ["ID Verification", "Address Proof"],
      status: "documents_pending",
      priority: "medium",
      location: "Singapore",
      children: 1
    },
    {
      id: 3,
      familyName: "The Williams Family",
      submittedAt: "2024-01-14 16:45",
      documents: ["ID Verification", "Background Check", "References", "Medical Records"],
      status: "approved",
      priority: "low",
      location: "Austin, USA",
      children: 3
    }
  ];

  const safetyReports = [
    {
      id: 1,
      reportType: "Inappropriate Message",
      reportedFamily: "The Anonymous Family",
      reportedBy: "The Johnson Family",
      severity: "medium",
      status: "investigating",
      submittedAt: "2024-01-15 09:30",
      description: "Received unsolicited messages with inappropriate content"
    },
    {
      id: 2,
      reportType: "Fake Profile",
      reportedFamily: "The Smith Family",
      reportedBy: "Multiple Users",
      severity: "high",
      status: "under_review",
      submittedAt: "2024-01-14 18:20",
      description: "Profile information appears to be fabricated"
    },
    {
      id: 3,
      reportType: "Harassment",
      reportedFamily: "The Brown Family",
      reportedBy: "The Garcia Family",
      severity: "high",
      status: "resolved",
      submittedAt: "2024-01-13 12:15",
      description: "Persistent unwanted contact after being asked to stop"
    }
  ];

  const messageMonitoring = [
    {
      id: 1,
      participants: ["The Johnson Family", "The Anderson Family"],
      messageCount: 23,
      flaggedContent: 0,
      lastActivity: "2 hours ago",
      encryptionStatus: "active",
      riskLevel: "low"
    },
    {
      id: 2,
      participants: ["The Garcia Family", "The Martinez Family"],
      messageCount: 45,
      flaggedContent: 1,
      lastActivity: "30 minutes ago",
      encryptionStatus: "active",
      riskLevel: "medium"
    },
    {
      id: 3,
      participants: ["The Chen Family", "The Williams Family"],
      messageCount: 12,
      flaggedContent: 0,
      lastActivity: "1 day ago",
      encryptionStatus: "active",
      riskLevel: "low"
    }
  ];

  const tabs = [
    { id: 'overview', label: 'Safety Overview', icon: FiShield },
    { id: 'verification', label: 'Verification Queue', icon: FiUserCheck },
    { id: 'reports', label: 'Safety Reports', icon: FiFlag },
    { id: 'monitoring', label: 'Message Monitoring', icon: FiMessageSquare }
  ];

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'high': return 'text-red-600 bg-red-100';
      case 'medium': return 'text-orange-600 bg-orange-100';
      case 'low': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'approved': return 'text-green-600 bg-green-100';
      case 'pending_review': return 'text-blue-600 bg-blue-100';
      case 'documents_pending': return 'text-orange-600 bg-orange-100';
      case 'investigating': return 'text-purple-600 bg-purple-100';
      case 'under_review': return 'text-yellow-600 bg-yellow-100';
      case 'resolved': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold gradient-text mb-2">Family Safety Management</h1>
          <p className="text-ingrained-light">Monitor and ensure platform safety for nomad families</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center text-green-600">
            <SafeIcon icon={FiShield} className="w-5 h-5 mr-2" />
            <span className="font-medium">Safety Score: 99.2%</span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="neu-card-deep p-2">
        <div className="flex space-x-2">
          {tabs.map(tab => (
            <motion.button
              key={tab.id}
              className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-lg text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? 'neu-card-pressed text-blue-600 bg-gradient-to-r from-blue-50 to-purple-50'
                  : 'neu-button text-ingrained hover:text-blue-600'
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
      </div>

      {/* Content */}
      <div className="min-h-[600px]">
        {activeTab === 'overview' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Safety Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="neu-card-deep p-6">
                <div className="flex items-center justify-between mb-4">
                  <SafeIcon icon={FiUsers} className="w-8 h-8 text-blue-600" />
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600">{safetyOverview.verifiedFamilies}</div>
                    <div className="text-sm text-ingrained-light">Verified Families</div>
                  </div>
                </div>
                <div className="text-xs text-green-600">
                  {((safetyOverview.verifiedFamilies / safetyOverview.totalFamilies) * 100).toFixed(1)}% verification rate
                </div>
              </div>

              <div className="neu-card-deep p-6">
                <div className="flex items-center justify-between mb-4">
                  <SafeIcon icon={FiAlertTriangle} className="w-8 h-8 text-orange-600" />
                  <div className="text-right">
                    <div className="text-2xl font-bold text-orange-600">{safetyOverview.activeReports}</div>
                    <div className="text-sm text-ingrained-light">Active Reports</div>
                  </div>
                </div>
                <div className="text-xs text-orange-600">
                  Requires immediate attention
                </div>
              </div>

              <div className="neu-card-deep p-6">
                <div className="flex items-center justify-between mb-4">
                  <SafeIcon icon={FiCheckCircle} className="w-8 h-8 text-green-600" />
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600">{safetyOverview.resolvedIncidents}</div>
                    <div className="text-sm text-ingrained-light">Resolved Issues</div>
                  </div>
                </div>
                <div className="text-xs text-green-600">
                  96.7% resolution rate
                </div>
              </div>
            </div>

            {/* Recent Alerts */}
            <div className="neu-card-deep p-6">
              <h3 className="text-xl font-bold carved-text-deep mb-6">Recent Safety Alerts</h3>
              <div className="space-y-4">
                {safetyReports.slice(0, 3).map((report) => (
                  <div key={report.id} className="flex items-center justify-between p-4 neu-button rounded-lg">
                    <div className="flex items-center space-x-4">
                      <SafeIcon icon={FiFlag} className={`w-5 h-5 ${
                        report.severity === 'high' ? 'text-red-600' : 
                        report.severity === 'medium' ? 'text-orange-600' : 'text-green-600'
                      }`} />
                      <div>
                        <div className="font-medium carved-text-deep">{report.reportType}</div>
                        <div className="text-sm carved-text-light">{report.description}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`px-2 py-1 rounded-lg text-xs font-medium ${getStatusColor(report.status)}`}>
                        {report.status.replace('_', ' ')}
                      </div>
                      <div className="text-xs carved-text-light mt-1">{report.submittedAt}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'verification' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="neu-card-deep p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold carved-text-deep">Family Verification Queue</h3>
              <div className="text-sm carved-text-light">{verificationQueue.length} families pending</div>
            </div>

            <div className="space-y-4">
              {verificationQueue.map((family) => (
                <div key={family.id} className="neu-button p-6 rounded-xl">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="font-bold carved-text-deep mb-2">{family.familyName}</h4>
                      <div className="flex items-center space-x-4 text-sm carved-text-light">
                        <span>📍 {family.location}</span>
                        <span>👥 {family.children} children</span>
                        <span>📅 {family.submittedAt}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className={`px-3 py-1 rounded-lg text-xs font-medium ${getSeverityColor(family.priority)}`}>
                        {family.priority} priority
                      </div>
                      <div className={`px-3 py-1 rounded-lg text-xs font-medium ${getStatusColor(family.status)}`}>
                        {family.status.replace('_', ' ')}
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-sm carved-text-deep mb-2">Submitted Documents:</div>
                    <div className="flex flex-wrap gap-2">
                      {family.documents.map((doc, idx) => (
                        <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-lg">
                          {doc}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <motion.button
                      className="neu-button-primary py-2 px-4 text-sm font-medium text-white"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Review Documents
                    </motion.button>
                    <motion.button
                      className="neu-button py-2 px-4 text-sm font-medium carved-text hover:text-blue-600"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Contact Family
                    </motion.button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === 'monitoring' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="neu-card-deep p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold carved-text-deep">Message Monitoring</h3>
              <div className="flex items-center text-green-600">
                <SafeIcon icon={FiLock} className="w-4 h-4 mr-2" />
                <span className="text-sm">End-to-End Encrypted</span>
              </div>
            </div>

            <div className="space-y-4">
              {messageMonitoring.map((conversation) => (
                <div key={conversation.id} className="neu-button p-6 rounded-xl">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="font-bold carved-text-deep mb-2">
                        {conversation.participants.join(' ↔ ')}
                      </h4>
                      <div className="flex items-center space-x-4 text-sm carved-text-light">
                        <span>💬 {conversation.messageCount} messages</span>
                        <span>🚩 {conversation.flaggedContent} flagged</span>
                        <span>⏰ {conversation.lastActivity}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className={`px-3 py-1 rounded-lg text-xs font-medium ${
                        conversation.riskLevel === 'high' ? 'text-red-600 bg-red-100' :
                        conversation.riskLevel === 'medium' ? 'text-orange-600 bg-orange-100' :
                        'text-green-600 bg-green-100'
                      }`}>
                        {conversation.riskLevel} risk
                      </div>
                      <div className="flex items-center text-green-600">
                        <SafeIcon icon={FiLock} className="w-4 h-4 mr-1" />
                        <span className="text-xs">Encrypted</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <motion.button
                      className="neu-button py-2 px-4 text-sm font-medium carved-text hover:text-blue-600"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      View Metadata
                    </motion.button>
                    {conversation.flaggedContent > 0 && (
                      <motion.button
                        className="neu-button-primary py-2 px-4 text-sm font-medium text-white"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Review Flags
                      </motion.button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default FamilySafety;