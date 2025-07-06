import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiUsers, FiMapPin, FiCalendar, FiMessageCircle, FiSearch, FiFilter, FiHeart, FiStar, FiShield, FiLock, FiEye, FiEyeOff, FiX, FiSend, FiAlertTriangle } = FiIcons;

const NomadFamilies = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedFamily, setSelectedFamily] = useState(null);
  const [showMessageModal, setShowMessageModal] = useState(false);
  const [messageText, setMessageText] = useState('');
  const [isVerified, setIsVerified] = useState(false); // Simulated verification status
  const [showVerificationModal, setShowVerificationModal] = useState(false);

  const nomadFamilies = [
    {
      id: 1,
      name: "The Johnsons",
      members: 4,
      children: 2,
      location: "Currently in Lisbon, Portugal",
      nextDestination: "Barcelona, Spain",
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&h=300&fit=crop",
      interests: ["Tech", "Education", "Culture"],
      languages: ["English", "Spanish"],
      experience: "2 years",
      rating: 4.9,
      verified: true,
      safetyScore: 98,
      responseRate: 95,
      lastSeen: "2 hours ago",
      bio: "Tech entrepreneur family traveling with kids, homeschooling while exploring Europe.",
      publicProfile: {
        showEmail: false,
        showPhone: false,
        showSocialMedia: false
      },
      preferences: {
        familiesOnly: true,
        verifiedUsersOnly: true,
        similarAgeGroups: true
      }
    },
    {
      id: 2,
      name: "The Andersons",
      members: 3,
      children: 1,
      location: "Currently in Bali, Indonesia",
      nextDestination: "Chiang Mai, Thailand",
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&h=300&fit=crop",
      interests: ["Surfing", "Yoga", "Photography"],
      languages: ["English", "Indonesian"],
      experience: "3 years",
      rating: 4.8,
      verified: true,
      safetyScore: 96,
      responseRate: 88,
      lastSeen: "1 day ago",
      bio: "Creative family documenting their journey through Southeast Asia.",
      publicProfile: {
        showEmail: false,
        showPhone: false,
        showSocialMedia: true
      },
      preferences: {
        familiesOnly: false,
        verifiedUsersOnly: true,
        similarAgeGroups: false
      }
    },
    {
      id: 3,
      name: "The Garcias",
      members: 5,
      children: 3,
      location: "Currently in Mexico City, Mexico",
      nextDestination: "Buenos Aires, Argentina",
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&h=300&fit=crop",
      interests: ["Food", "History", "Art"],
      languages: ["Spanish", "English", "Portuguese"],
      experience: "1 year",
      rating: 4.7,
      verified: false,
      safetyScore: 85,
      responseRate: 92,
      lastSeen: "3 hours ago",
      bio: "Large family exploring Latin American culture and cuisine.",
      publicProfile: {
        showEmail: false,
        showPhone: false,
        showSocialMedia: false
      },
      preferences: {
        familiesOnly: true,
        verifiedUsersOnly: false,
        similarAgeGroups: true
      }
    }
  ];

  const filters = [
    { id: 'all', label: 'All Families' },
    { id: 'verified', label: 'Verified Only' },
    { id: 'with-kids', label: 'With Kids' },
    { id: 'couples', label: 'Couples' },
    { id: 'experienced', label: 'Experienced (3+ years)' }
  ];

  const filteredFamilies = nomadFamilies.filter(family => {
    const matchesSearch = family.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         family.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         family.interests.some(interest => interest.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesFilter = selectedFilter === 'all' ||
                         (selectedFilter === 'verified' && family.verified) ||
                         (selectedFilter === 'with-kids' && family.children > 0) ||
                         (selectedFilter === 'couples' && family.children === 0) ||
                         (selectedFilter === 'experienced' && parseInt(family.experience) >= 3);

    return matchesSearch && matchesFilter;
  });

  const handleSendMessage = (family) => {
    if (!isVerified) {
      setShowVerificationModal(true);
      return;
    }
    setSelectedFamily(family);
    setShowMessageModal(true);
  };

  const handleMessageSubmit = () => {
    if (messageText.trim()) {
      // Simulate sending secure message
      alert(`Secure message sent to ${selectedFamily.name}!\n\nYour message has been encrypted and will be delivered through our secure messaging system. They will be notified and can respond through the platform.`);
      setMessageText('');
      setShowMessageModal(false);
      setSelectedFamily(null);
    }
  };

  const handleVerification = () => {
    // Simulate verification process
    setIsVerified(true);
    setShowVerificationModal(false);
    alert('Verification process started! You will receive an email with verification steps including ID verification and background check options.');
  };

  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="w-16 h-16 neu-card-deep flex items-center justify-center bg-gradient-to-br from-blue-400 to-purple-600 mx-auto mb-6">
            <SafeIcon icon={FiUsers} className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">Nomad Families</h1>
          <p className="text-xl text-ingrained-light max-w-3xl mx-auto leading-relaxed">
            Connect with verified nomad families around the world through our secure, privacy-first platform
          </p>
        </motion.div>

        {/* Safety Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="neu-card-deep p-6 mb-8 bg-gradient-to-r from-green-50 to-blue-50"
        >
          <div className="flex items-center justify-center mb-4">
            <SafeIcon icon={FiShield} className="w-6 h-6 text-green-600 mr-3" />
            <h3 className="text-xl font-bold text-ingrained-dark">Your Safety is Our Priority</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="flex items-center justify-center">
              <SafeIcon icon={FiLock} className="w-5 h-5 text-blue-600 mr-2" />
              <span className="text-sm text-ingrained">End-to-End Encrypted Messages</span>
            </div>
            <div className="flex items-center justify-center">
              <SafeIcon icon={FiShield} className="w-5 h-5 text-green-600 mr-2" />
              <span className="text-sm text-ingrained">Verified Family Profiles</span>
            </div>
            <div className="flex items-center justify-center">
              <SafeIcon icon={FiEyeOff} className="w-5 h-5 text-purple-600 mr-2" />
              <span className="text-sm text-ingrained">Private Contact Information</span>
            </div>
          </div>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="neu-card-deep p-6 mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <SafeIcon icon={FiSearch} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search families, locations, or interests..."
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
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Families Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFamilies.map((family, index) => (
            <motion.div
              key={family.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="neu-card-deep overflow-hidden hover:shadow-neu-hover transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img src={family.image} alt={family.name} className="w-full h-full object-cover" />
                
                {/* Verification & Safety Badges */}
                <div className="absolute top-4 left-4 space-y-2">
                  {family.verified && (
                    <div className="flex items-center bg-green-500 text-white px-2 py-1 rounded-lg text-xs font-semibold">
                      <SafeIcon icon={FiShield} className="w-3 h-3 mr-1" />
                      Verified
                    </div>
                  )}
                  <div className="flex items-center bg-blue-500 text-white px-2 py-1 rounded-lg text-xs font-semibold">
                    <SafeIcon icon={FiStar} className="w-3 h-3 mr-1" />
                    Safety {family.safetyScore}%
                  </div>
                </div>

                <div className="absolute top-4 right-4">
                  <div className="flex items-center bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
                    <SafeIcon icon={FiStar} className="w-4 h-4 text-yellow-500 mr-1" />
                    <span className="text-sm font-medium">{family.rating}</span>
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <div className="glass-card p-2 rounded-lg">
                    <div className="text-white text-xs">
                      <div>Response Rate: {family.responseRate}%</div>
                      <div>Last seen: {family.lastSeen}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-ingrained-dark mb-1">{family.name}</h3>
                    <div className="flex items-center text-ingrained-light mb-1">
                      <SafeIcon icon={FiUsers} className="w-4 h-4 mr-1" />
                      <span className="text-sm">{family.members} members</span>
                      {family.children > 0 && (
                        <span className="text-sm ml-2">({family.children} kids)</span>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-blue-600">{family.experience}</div>
                    <div className="text-xs text-ingrained-light">nomading</div>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-start text-ingrained-light">
                    <SafeIcon icon={FiMapPin} className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{family.location}</span>
                  </div>
                  <div className="flex items-start text-ingrained-light">
                    <SafeIcon icon={FiCalendar} className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Next: {family.nextDestination}</span>
                  </div>
                </div>

                <p className="text-sm text-ingrained-light mb-4 line-clamp-2">{family.bio}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {family.interests.slice(0, 3).map((interest, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 text-xs rounded-lg font-medium"
                    >
                      {interest}
                    </span>
                  ))}
                </div>

                {/* Privacy Indicators */}
                <div className="flex items-center justify-between text-xs text-ingrained-light mb-4">
                  <div className="flex items-center">
                    <SafeIcon icon={FiLock} className="w-3 h-3 mr-1" />
                    <span>Private Contact</span>
                  </div>
                  <div className="flex items-center">
                    <SafeIcon icon={FiShield} className="w-3 h-3 mr-1" />
                    <span>Secure Messaging</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <motion.button
                    className="flex-1 neu-button-primary py-2 px-4 text-sm font-medium text-white flex items-center justify-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleSendMessage(family)}
                  >
                    <SafeIcon icon={FiMessageCircle} className="w-4 h-4 mr-1" />
                    Secure Message
                  </motion.button>
                  <motion.button
                    className="neu-button p-2 text-ingrained hover:text-red-500"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <SafeIcon icon={FiHeart} className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredFamilies.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="w-20 h-20 neu-card-deep flex items-center justify-center mx-auto mb-4">
              <SafeIcon icon={FiUsers} className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-ingrained-dark mb-2">No nomad families found</h3>
            <p className="text-ingrained-light">Try adjusting your search criteria or browse all categories above.</p>
          </motion.div>
        )}

        {/* Community Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 neu-card-deep p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold gradient-text mb-2">Secure Community Stats</h3>
            <p className="text-ingrained-light">Growing network of verified nomad families worldwide</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">2,847</div>
              <div className="text-ingrained-light">Verified Families</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">127</div>
              <div className="text-ingrained-light">Countries</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">5,234</div>
              <div className="text-ingrained-light">Kids Traveling</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">99.2%</div>
              <div className="text-ingrained-light">Safety Rating</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Verification Modal */}
      {showVerificationModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="neu-card-deep max-w-md w-full p-6"
          >
            <div className="text-center mb-6">
              <div className="w-16 h-16 neu-card-deep flex items-center justify-center bg-gradient-to-br from-orange-400 to-red-500 mx-auto mb-4">
                <SafeIcon icon={FiAlertTriangle} className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-ingrained-dark mb-2">Verification Required</h3>
              <p className="text-ingrained-light">
                To ensure family safety, you need to complete our verification process before messaging other families.
              </p>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center text-sm text-ingrained">
                <SafeIcon icon={FiShield} className="w-4 h-4 text-green-500 mr-3" />
                <span>Identity verification</span>
              </div>
              <div className="flex items-center text-sm text-ingrained">
                <SafeIcon icon={FiLock} className="w-4 h-4 text-blue-500 mr-3" />
                <span>Background check (optional)</span>
              </div>
              <div className="flex items-center text-sm text-ingrained">
                <SafeIcon icon={FiUsers} className="w-4 h-4 text-purple-500 mr-3" />
                <span>Family profile verification</span>
              </div>
            </div>

            <div className="flex gap-4">
              <motion.button
                className="flex-1 neu-button py-3 px-6 text-ingrained hover:text-blue-600"
                onClick={() => setShowVerificationModal(false)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Later
              </motion.button>
              <motion.button
                className="flex-1 neu-button-primary py-3 px-6 font-semibold text-white"
                onClick={handleVerification}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Start Verification
              </motion.button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Secure Message Modal */}
      {showMessageModal && selectedFamily && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="neu-card-deep max-w-lg w-full p-6"
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-ingrained-dark mb-2">
                  Secure Message to {selectedFamily.name}
                </h3>
                <div className="flex items-center text-sm text-green-600">
                  <SafeIcon icon={FiLock} className="w-4 h-4 mr-2" />
                  <span>End-to-end encrypted</span>
                </div>
              </div>
              <motion.button
                className="neu-button p-2 text-gray-600 hover:text-red-500"
                onClick={() => {
                  setShowMessageModal(false);
                  setSelectedFamily(null);
                  setMessageText('');
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <SafeIcon icon={FiX} className="w-5 h-5" />
              </motion.button>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-ingrained-dark mb-2">Your Message</label>
              <textarea
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                className="neu-input w-full px-4 py-3 text-ingrained resize-none"
                rows={4}
                placeholder="Hi! I'd love to connect with your family..."
              />
            </div>

            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <div className="flex items-start">
                <SafeIcon icon={FiShield} className="w-5 h-5 text-blue-600 mr-2 mt-0.5" />
                <div className="text-sm text-blue-800">
                  <p className="font-semibold mb-1">Privacy Protection</p>
                  <p>Your contact information remains private. All communication happens through our secure platform until both parties choose to share personal details.</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <motion.button
                className="flex-1 neu-button py-3 px-6 text-ingrained hover:text-blue-600"
                onClick={() => {
                  setShowMessageModal(false);
                  setSelectedFamily(null);
                  setMessageText('');
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Cancel
              </motion.button>
              <motion.button
                className="flex-1 neu-button-primary py-3 px-6 font-semibold text-white flex items-center justify-center"
                onClick={handleMessageSubmit}
                disabled={!messageText.trim()}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <SafeIcon icon={FiSend} className="w-4 h-4 mr-2" />
                Send Securely
              </motion.button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default NomadFamilies;