import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMapPin, FiWifi, FiCoffee, FiUsers, FiStar, FiFilter, FiSearch } = FiIcons;

const CoWorkingSpaces = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const coworkingSpaces = [
    {
      id: 1,
      name: "Hubud Bali",
      location: "Ubud, Bali",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop",
      rating: 4.8,
      price: "$15/day",
      amenities: ["High-speed WiFi", "Coffee Bar", "Meeting Rooms", "Printing"],
      capacity: 50,
      available: true
    },
    {
      id: 2,
      name: "Second Home Lisboa",
      location: "Lisbon, Portugal",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=400&h=300&fit=crop",
      rating: 4.9,
      price: "$25/day",
      amenities: ["Premium WiFi", "Rooftop Terrace", "Events", "Networking"],
      capacity: 80,
      available: true
    },
    {
      id: 3,
      name: "Dojo Bali",
      location: "Canggu, Bali",
      image: "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=400&h=300&fit=crop",
      rating: 4.7,
      price: "$12/day",
      amenities: ["Beachside", "Surf Breaks", "Healthy Food", "Community"],
      capacity: 40,
      available: false
    },
    {
      id: 4,
      name: "Selina Mexico City",
      location: "Roma Norte, Mexico City",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&h=300&fit=crop",
      rating: 4.6,
      price: "$18/day",
      amenities: ["24/7 Access", "Hostel", "Bar", "Cultural Events"],
      capacity: 60,
      available: true
    },
    {
      id: 5,
      name: "HUBBA-TO",
      location: "Bangkok, Thailand",
      image: "https://images.unsplash.com/photo-1497366672149-e5e4b4d34eb3?w=400&h=300&fit=crop",
      rating: 4.5,
      price: "$20/day",
      amenities: ["Modern Design", "Startups", "Mentorship", "Funding"],
      capacity: 100,
      available: true
    },
    {
      id: 6,
      name: "Rocket Internet",
      location: "Berlin, Germany",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=400&h=300&fit=crop",
      rating: 4.8,
      price: "$30/day",
      amenities: ["Tech Focus", "Accelerator", "Mentors", "Investors"],
      capacity: 120,
      available: true
    }
  ];

  const filters = [
    { id: 'all', label: 'All Spaces' },
    { id: 'available', label: 'Available Now' },
    { id: 'premium', label: 'Premium' },
    { id: 'budget', label: 'Budget Friendly' }
  ];

  const filteredSpaces = coworkingSpaces.filter(space => {
    const matchesSearch = space.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         space.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = selectedFilter === 'all' || 
                         (selectedFilter === 'available' && space.available) ||
                         (selectedFilter === 'premium' && parseInt(space.price.replace('$', '')) > 25) ||
                         (selectedFilter === 'budget' && parseInt(space.price.replace('$', '')) <= 15);
    
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
          <h1 className="text-4xl font-bold gradient-text mb-4">Co-Working Spaces</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover and book premium co-working spaces in 70+ countries worldwide
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
                placeholder="Search spaces or locations..."
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

        {/* Spaces Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSpaces.map((space, index) => (
            <motion.div
              key={space.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="neu-card overflow-hidden hover:shadow-neu-hover transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={space.image}
                  alt={space.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                    space.available 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {space.available ? 'Available' : 'Full'}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">{space.name}</h3>
                    <div className="flex items-center text-gray-600">
                      <SafeIcon icon={FiMapPin} className="w-4 h-4 mr-1" />
                      <span className="text-sm">{space.location}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-nomad-blue">{space.price}</div>
                    <div className="flex items-center">
                      <SafeIcon icon={FiStar} className="w-4 h-4 text-yellow-500 mr-1" />
                      <span className="text-sm text-gray-600">{space.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center text-gray-600 mb-4">
                  <SafeIcon icon={FiUsers} className="w-4 h-4 mr-1" />
                  <span className="text-sm">Capacity: {space.capacity}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {space.amenities.slice(0, 3).map((amenity, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                    >
                      {amenity}
                    </span>
                  ))}
                  {space.amenities.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      +{space.amenities.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex gap-2">
                  <motion.button
                    className="flex-1 neu-button py-2 px-4 text-sm font-medium text-gray-700 hover:text-nomad-blue"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View Details
                  </motion.button>
                  <motion.button
                    className="flex-1 py-2 px-4 text-sm font-medium text-white bg-gradient-to-r from-nomad-blue to-nomad-purple rounded-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={!space.available}
                  >
                    {space.available ? 'Book Now' : 'Waitlist'}
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
            className="text-center py-12"
          >
            <SafeIcon icon={FiMapPin} className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">No co-working spaces found matching your criteria.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default CoWorkingSpaces;