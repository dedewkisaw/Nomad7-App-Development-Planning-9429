import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiUsers, FiMapPin, FiCalendar, FiMessageCircle, FiSearch, FiFilter, FiHeart, FiStar } = FiIcons;

const NomadFamilies = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

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
      bio: "Tech entrepreneur family traveling with kids, homeschooling while exploring Europe."
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
      bio: "Creative family documenting their journey through Southeast Asia."
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
      bio: "Large family exploring Latin American culture and cuisine."
    },
    {
      id: 4,
      name: "The Smiths",
      members: 2,
      children: 0,
      location: "Currently in Berlin, Germany",
      nextDestination: "Prague, Czech Republic",
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&h=300&fit=crop",
      interests: ["Music", "Nightlife", "Startups"],
      languages: ["English", "German"],
      experience: "4 years",
      rating: 4.9,
      bio: "Couple working in tech, love exploring European startup scenes."
    },
    {
      id: 5,
      name: "The Lees",
      members: 3,
      children: 1,
      location: "Currently in Bangkok, Thailand",
      nextDestination: "Ho Chi Minh City, Vietnam",
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&h=300&fit=crop",
      interests: ["Street Food", "Temples", "Markets"],
      languages: ["English", "Thai", "Chinese"],
      experience: "2 years",
      rating: 4.6,
      bio: "Family passionate about Asian culture and street food adventures."
    },
    {
      id: 6,
      name: "The Martins",
      members: 4,
      children: 2,
      location: "Currently in Dubai, UAE",
      nextDestination: "Istanbul, Turkey",
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&h=300&fit=crop",
      interests: ["Luxury", "Business", "Architecture"],
      languages: ["English", "Arabic", "French"],
      experience: "5 years",
      rating: 4.8,
      bio: "Business family exploring the intersection of tradition and modernity."
    }
  ];

  const filters = [
    { id: 'all', label: 'All Families' },
    { id: 'with-kids', label: 'With Kids' },
    { id: 'couples', label: 'Couples' },
    { id: 'experienced', label: 'Experienced (3+ years)' }
  ];

  const filteredFamilies = nomadFamilies.filter(family => {
    const matchesSearch = family.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         family.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         family.interests.some(interest => interest.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesFilter = selectedFilter === 'all' || 
                         (selectedFilter === 'with-kids' && family.children > 0) ||
                         (selectedFilter === 'couples' && family.children === 0) ||
                         (selectedFilter === 'experienced' && parseInt(family.experience) >= 3);
    
    return matchesSearch && matchesFilter;
  });

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
          <h1 className="text-4xl font-bold gradient-text mb-4">Nomad Families</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Connect with like-minded nomad families around the world and share your journey
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="neu-card p-6 mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <SafeIcon icon={FiSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search families, locations, or interests..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="neu-input w-full pl-10 pr-4 py-3 text-gray-700 placeholder-gray-400"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-2">
              {filters.map(filter => (
                <motion.button
                  key={filter.id}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedFilter === filter.id
                      ? 'neu-card-pressed text-nomad-blue'
                      : 'neu-button text-gray-600 hover:text-nomad-blue'
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
              className="neu-card overflow-hidden hover:shadow-neu-hover transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={family.image}
                  alt={family.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <div className="flex items-center bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
                    <SafeIcon icon={FiStar} className="w-4 h-4 text-yellow-500 mr-1" />
                    <span className="text-sm font-medium">{family.rating}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">{family.name}</h3>
                    <div className="flex items-center text-gray-600 mb-1">
                      <SafeIcon icon={FiUsers} className="w-4 h-4 mr-1" />
                      <span className="text-sm">{family.members} members</span>
                      {family.children > 0 && (
                        <span className="text-sm ml-2">({family.children} kids)</span>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-nomad-blue">{family.experience}</div>
                    <div className="text-xs text-gray-500">nomading</div>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-start text-gray-600">
                    <SafeIcon icon={FiMapPin} className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{family.location}</span>
                  </div>
                  <div className="flex items-start text-gray-600">
                    <SafeIcon icon={FiCalendar} className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Next: {family.nextDestination}</span>
                  </div>
                </div>

                <p className="text-sm text-gray-600 mb-4 line-clamp-2">{family.bio}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {family.interests.slice(0, 3).map((interest, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gradient-to-r from-nomad-blue/10 to-nomad-purple/10 text-nomad-blue text-xs rounded-full"
                    >
                      {interest}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <motion.button
                    className="flex-1 neu-button py-2 px-4 text-sm font-medium text-gray-700 hover:text-nomad-blue flex items-center justify-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <SafeIcon icon={FiMessageCircle} className="w-4 h-4 mr-1" />
                    Message
                  </motion.button>
                  <motion.button
                    className="neu-button p-2 text-gray-700 hover:text-red-500"
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
            className="text-center py-12"
          >
            <SafeIcon icon={FiUsers} className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">No nomad families found matching your criteria.</p>
          </motion.div>
        )}

        {/* Community Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 neu-card p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold gradient-text mb-2">Community Stats</h3>
            <p className="text-gray-600">Growing network of nomad families worldwide</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-nomad-blue mb-2">2,847</div>
              <div className="text-gray-600">Active Families</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-nomad-green mb-2">127</div>
              <div className="text-gray-600">Countries</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-nomad-purple mb-2">5,234</div>
              <div className="text-gray-600">Kids Traveling</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-nomad-orange mb-2">15,678</div>
              <div className="text-gray-600">Connections Made</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NomadFamilies;