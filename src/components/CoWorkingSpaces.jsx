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
          <p className="text-xl text-ingrained-light max-w-3xl mx-auto leading-relaxed">
            Discover and book premium co-working spaces in 70+ countries worldwide
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="neu-card-deep p-6 mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <SafeIcon icon={FiSearch} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 icon-ingrained" />
              <input
                type="text"
                placeholder="Search spaces or locations..."
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
        </motion.div>

        {/* Spaces Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSpaces.map((space, index) => (
            <motion.div
              key={space.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="neu-card-deep overflow-hidden hover:shadow-neu-hover transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={space.image}
                  alt={space.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                
                {/* Status and Actions */}
                <div className="absolute top-3 left-3 right-3 flex justify-between items-start">
                  <div className="flex flex-col gap-1">
                    <div className={`px-2 py-1 rounded-lg text-xs font-semibold status-indicator ${
                      space.available 
                        ? 'bg-emerald-500 text-white' 
                        : 'bg-red-500 text-white'
                    }`}>
                      {space.available ? 'Available' : 'Full'}
                    </div>
                    {space.featured && (
                      <div className="px-2 py-1 rounded-lg text-xs font-semibold bg-gradient-to-r from-orange-400 to-pink-400 text-white">
                        Featured
                      </div>
                    )}
                  </div>
                  <div className="flex gap-1">
                    <motion.button
                      className="w-8 h-8 rounded-lg glass-card flex items-center justify-center text-white hover:bg-white hover:text-gray-700 transition-all"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <SafeIcon icon={FiBookmark} className="w-4 h-4" />
                    </motion.button>
                    <motion.button
                      className="w-8 h-8 rounded-lg glass-card flex items-center justify-center text-white hover:bg-white hover:text-red-500 transition-all"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <SafeIcon icon={FiHeart} className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>

                {/* Rating */}
                <div className="absolute bottom-3 left-3">
                  <div className="flex items-center glass-card px-2 py-1 rounded-lg">
                    <SafeIcon icon={FiStar} className="w-3 h-3 text-yellow-400 mr-1" />
                    <span className="text-xs font-semibold text-white">{space.rating}</span>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-ingrained-dark mb-1">{space.name}</h3>
                    <div className="flex items-center text-ingrained-light">
                      <SafeIcon icon={FiMapPin} className="w-3 h-3 mr-1" />
                      <span className="text-xs">{space.location}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 mb-1">
                      <div className="text-lg font-bold text-blue-600">{space.price}</div>
                      {space.originalPrice && (
                        <div className="text-xs text-gray-400 line-through">{space.originalPrice}</div>
                      )}
                    </div>
                    <div className="text-xs text-ingrained-light">per day</div>
                  </div>
                </div>

                <div className="flex items-center text-ingrained-light mb-3">
                  <SafeIcon icon={FiUsers} className="w-3 h-3 mr-1" />
                  <span className="text-xs">Capacity: {space.capacity}</span>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {space.amenities.slice(0, 3).map((amenity, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 text-xs rounded-lg font-medium"
                    >
                      {amenity}
                    </span>
                  ))}
                  {space.amenities.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-ingrained-dark text-xs rounded-lg font-medium">
                      +{space.amenities.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex gap-2">
                  <motion.button
                    className="flex-1 neu-button py-2 px-3 text-xs font-semibold text-ingrained hover:text-blue-600 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View Details
                  </motion.button>
                  <motion.button
                    className="flex-1 neu-button-primary py-2 px-3 text-xs font-semibold transition-all"
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
            <div className="w-20 h-20 neu-card-deep flex items-center justify-center mx-auto mb-4">
              <SafeIcon icon={FiMapPin} className="w-10 h-10 text-gray-400 icon-ingrained" />
            </div>
            <h3 className="text-lg font-semibold text-ingrained-dark mb-2">No spaces found</h3>
            <p className="text-ingrained-light">Try adjusting your search criteria</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default CoWorkingSpaces;