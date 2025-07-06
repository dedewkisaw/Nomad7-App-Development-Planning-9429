import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMapPin, FiWifi, FiCoffee, FiUsers, FiStar, FiFilter, FiSearch, FiHeart, FiBookmark } = FiIcons;

const CoWorkingSpaces = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const coworkingSpaces = [
    {
      id: 1,
      name: "Hubud Bali",
      location: "Ubud, Bali",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&h=400&fit=crop",
      rating: 4.8,
      price: "$15/day",
      originalPrice: "$20/day",
      amenities: ["High-speed WiFi", "Coffee Bar", "Meeting Rooms", "Printing"],
      capacity: 50,
      available: true,
      featured: true
    },
    {
      id: 2,
      name: "Second Home Lisboa",
      location: "Lisbon, Portugal",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=500&h=400&fit=crop",
      rating: 4.9,
      price: "$25/day",
      amenities: ["Premium WiFi", "Rooftop Terrace", "Events", "Networking"],
      capacity: 80,
      available: true,
      featured: false
    },
    {
      id: 3,
      name: "Dojo Bali",
      location: "Canggu, Bali",
      image: "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=500&h=400&fit=crop",
      rating: 4.7,
      price: "$12/day",
      amenities: ["Beachside", "Surf Breaks", "Healthy Food", "Community"],
      capacity: 40,
      available: false,
      featured: false
    },
    {
      id: 4,
      name: "Selina Mexico City",
      location: "Roma Norte, Mexico City",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=500&h=400&fit=crop",
      rating: 4.6,
      price: "$18/day",
      amenities: ["24/7 Access", "Hostel", "Bar", "Cultural Events"],
      capacity: 60,
      available: true,
      featured: true
    },
    {
      id: 5,
      name: "HUBBA-TO",
      location: "Bangkok, Thailand",
      image: "https://images.unsplash.com/photo-1497366672149-e5e4b4d34eb3?w=500&h=400&fit=crop",
      rating: 4.5,
      price: "$20/day",
      amenities: ["Modern Design", "Startups", "Mentorship", "Funding"],
      capacity: 100,
      available: true,
      featured: false
    },
    {
      id: 6,
      name: "Rocket Internet",
      location: "Berlin, Germany",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=500&h=400&fit=crop",
      rating: 4.8,
      price: "$30/day",
      amenities: ["Tech Focus", "Accelerator", "Mentors", "Investors"],
      capacity: 120,
      available: true,
      featured: true
    }
  ];

  const filters = [
    { id: 'all', label: 'All Spaces', count: coworkingSpaces.length },
    { id: 'available', label: 'Available Now', count: coworkingSpaces.filter(s => s.available).length },
    { id: 'featured', label: 'Featured', count: coworkingSpaces.filter(s => s.featured).length },
    { id: 'budget', label: 'Budget Friendly', count: coworkingSpaces.filter(s => parseInt(s.price.replace('$', '')) <= 15).length }
  ];

  const filteredSpaces = coworkingSpaces.filter(space => {
    const matchesSearch = space.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         space.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = selectedFilter === 'all' || 
                         (selectedFilter === 'available' && space.available) ||
                         (selectedFilter === 'featured' && space.featured) ||
                         (selectedFilter === 'budget' && parseInt(space.price.replace('$', '')) <= 15);
    
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Elements */}
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
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">Co-Working Spaces</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover and book premium co-working spaces in 70+ countries worldwide
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="neu-card p-8 mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search */}
            <div className="flex-1 relative">
              <SafeIcon icon={FiSearch} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
              <input
                type="text"
                placeholder="Search spaces or locations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="neu-input w-full pl-12 pr-6 py-4 text-lg text-gray-700 placeholder-gray-400 font-medium"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-3">
              {filters.map(filter => (
                <motion.button
                  key={filter.id}
                  className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    selectedFilter === filter.id
                      ? 'neu-card-pressed text-blue-600 bg-gradient-to-r from-blue-50 to-purple-50'
                      : 'neu-button text-gray-600 hover:text-blue-600'
                  }`}
                  onClick={() => setSelectedFilter(filter.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {filter.label}
                  <span className="ml-2 px-2 py-1 bg-gray-200 rounded-full text-xs">
                    {filter.count}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Spaces Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSpaces.map((space, index) => (
            <motion.div
              key={space.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="neu-card overflow-hidden hover:shadow-neu-hover transition-all duration-300 group"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={space.image}
                  alt={space.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                
                {/* Status and Actions */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                  <div className="flex flex-col gap-2">
                    <div className={`px-3 py-1 rounded-full text-xs font-semibold status-indicator ${
                      space.available 
                        ? 'bg-emerald-500 text-white' 
                        : 'bg-red-500 text-white'
                    }`}>
                      {space.available ? 'Available' : 'Full'}
                    </div>
                    {space.featured && (
                      <div className="px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-orange-400 to-pink-400 text-white">
                        Featured
                      </div>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <motion.button
                      className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-white hover:bg-white hover:text-gray-700 transition-all"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <SafeIcon icon={FiBookmark} className="w-5 h-5" />
                    </motion.button>
                    <motion.button
                      className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-white hover:bg-white hover:text-red-500 transition-all"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <SafeIcon icon={FiHeart} className="w-5 h-5" />
                    </motion.button>
                  </div>
                </div>

                {/* Rating */}
                <div className="absolute bottom-4 left-4">
                  <div className="flex items-center glass-card px-3 py-1 rounded-full">
                    <SafeIcon icon={FiStar} className="w-4 h-4 text-yellow-400 mr-1" />
                    <span className="text-sm font-semibold text-white">{space.rating}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{space.name}</h3>
                    <div className="flex items-center text-gray-600">
                      <SafeIcon icon={FiMapPin} className="w-4 h-4 mr-1" />
                      <span className="text-sm">{space.location}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="text-2xl font-bold text-blue-600">{space.price}</div>
                      {space.originalPrice && (
                        <div className="text-sm text-gray-400 line-through">{space.originalPrice}</div>
                      )}
                    </div>
                    <div className="text-xs text-gray-500">per day</div>
                  </div>
                </div>

                <div className="flex items-center text-gray-600 mb-4">
                  <SafeIcon icon={FiUsers} className="w-4 h-4 mr-1" />
                  <span className="text-sm">Capacity: {space.capacity}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {space.amenities.slice(0, 3).map((amenity, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 text-xs rounded-full font-medium"
                    >
                      {amenity}
                    </span>
                  ))}
                  {space.amenities.length > 3 && (
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium">
                      +{space.amenities.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex gap-3">
                  <motion.button
                    className="flex-1 neu-button py-3 px-4 text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View Details
                  </motion.button>
                  <motion.button
                    className="flex-1 py-3 px-4 text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl hover:shadow-lg transition-all"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={!space.available}
                  >
                    {space.available ? 'Book Now' : 'Join Waitlist'}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredSpaces.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="w-24 h-24 neu-card flex items-center justify-center mx-auto mb-6">
              <SafeIcon icon={FiMapPin} className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No spaces found</h3>
            <p className="text-gray-600">Try adjusting your search criteria</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default CoWorkingSpaces;