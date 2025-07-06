import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMapPin, FiWifi, FiCoffee, FiUsers, FiStar, FiFilter, FiSearch, FiHeart, FiBookmark, FiX, FiCalendar, FiClock, FiCheck } = FiIcons;

const CoWorkingSpaces = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedSpace, setSelectedSpace] = useState(null);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [bookingType, setBookingType] = useState('');
  const [bookingForm, setBookingForm] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: 1
  });

  const coworkingSpaces = [
    {
      id: 1,
      name: "Hubud Bali",
      location: "Ubud, Bali",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&h=400&fit=crop",
      rating: 4.8,
      price: "$15/day",
      originalPrice: "$20/day",
      amenities: ["High-speed WiFi", "Coffee Bar", "Meeting Rooms", "Printing", "24/7 Access", "Air Conditioning"],
      capacity: 50,
      available: true,
      featured: true,
      description: "A beautiful co-working space nestled in the heart of Ubud, surrounded by lush rice fields and traditional Balinese architecture. Perfect for digital nomads seeking inspiration and productivity.",
      hours: "8:00 AM - 10:00 PM",
      address: "Jl. Monkey Forest Rd, Ubud, Bali 80571, Indonesia",
      contact: "+62 361 978 374"
    },
    {
      id: 2,
      name: "Second Home Lisboa",
      location: "Lisbon, Portugal",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=500&h=400&fit=crop",
      rating: 4.9,
      price: "$25/day",
      amenities: ["Premium WiFi", "Rooftop Terrace", "Events", "Networking", "Kitchen", "Lounge Area"],
      capacity: 80,
      available: true,
      featured: false,
      description: "Modern co-working space in the heart of Lisbon with stunning city views. Features a rooftop terrace perfect for networking events and casual meetings.",
      hours: "7:00 AM - 11:00 PM",
      address: "Rua do Alecrim 12, 1200-017 Lisboa, Portugal",
      contact: "+351 21 123 4567"
    },
    {
      id: 3,
      name: "Dojo Bali",
      location: "Canggu, Bali",
      image: "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=500&h=400&fit=crop",
      rating: 4.7,
      price: "$12/day",
      amenities: ["Beachside", "Surf Breaks", "Healthy Food", "Community", "Yoga Classes", "Coworking Pods"],
      capacity: 40,
      available: false,
      featured: false,
      description: "Beachside co-working space perfect for surfers and digital nomads. Enjoy morning surf sessions and afternoon productivity with ocean views.",
      hours: "6:00 AM - 9:00 PM",
      address: "Jl. Pantai Berawa, Canggu, Bali 80361, Indonesia",
      contact: "+62 361 844 6966"
    },
    {
      id: 4,
      name: "Selina Mexico City",
      location: "Roma Norte, Mexico City",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=500&h=400&fit=crop",
      rating: 4.6,
      price: "$18/day",
      amenities: ["24/7 Access", "Hostel", "Bar", "Cultural Events", "Rooftop", "Community Kitchen"],
      capacity: 60,
      available: true,
      featured: true,
      description: "Vibrant co-working space in the trendy Roma Norte neighborhood. Perfect blend of work and play with cultural events and networking opportunities.",
      hours: "24/7",
      address: "Álvaro Obregón 13, Roma Nte., Mexico City, Mexico",
      contact: "+52 55 1234 5678"
    },
    {
      id: 5,
      name: "HUBBA-TO",
      location: "Bangkok, Thailand",
      image: "https://images.unsplash.com/photo-1497366672149-e5e4b4d34eb3?w=500&h=400&fit=crop",
      rating: 4.5,
      price: "$20/day",
      amenities: ["Modern Design", "Startups", "Mentorship", "Funding", "Event Space", "Private Offices"],
      capacity: 100,
      available: true,
      featured: false,
      description: "Thailand's leading startup co-working space with access to mentorship programs and funding opportunities. Perfect for entrepreneurs and tech professionals.",
      hours: "8:00 AM - 10:00 PM",
      address: "9/9 Moo 4, Chaengwattana Rd, Bangkok 10210, Thailand",
      contact: "+66 2 123 4567"
    },
    {
      id: 6,
      name: "Rocket Internet",
      location: "Berlin, Germany",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=500&h=400&fit=crop",
      rating: 4.8,
      price: "$30/day",
      amenities: ["Tech Focus", "Accelerator", "Mentors", "Investors", "High-speed Internet", "Conference Rooms"],
      capacity: 120,
      available: true,
      featured: true,
      description: "Premium tech-focused co-working space in Berlin's startup district. Access to accelerator programs, mentors, and investor networks.",
      hours: "7:00 AM - 11:00 PM",
      address: "Rocket-Internet-Platz 1, 10178 Berlin, Germany",
      contact: "+49 30 1234 5678"
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

  const handleViewDetails = (space) => {
    setSelectedSpace(space);
  };

  const handleBooking = (space, type) => {
    setSelectedSpace(space);
    setBookingType(type);
    setShowBookingModal(true);
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    // Simulate booking process
    alert(`Booking ${bookingType === 'book' ? 'confirmed' : 'waitlist joined'} for ${selectedSpace.name}!\n\nDetails:\nName: ${bookingForm.name}\nEmail: ${bookingForm.email}\nCheck-in: ${bookingForm.checkIn}\nCheck-out: ${bookingForm.checkOut}\nGuests: ${bookingForm.guests}`);
    setShowBookingModal(false);
    setBookingForm({ name: '', email: '', phone: '', checkIn: '', checkOut: '', guests: 1 });
  };

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
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${selectedFilter === filter.id
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
                    <div className={`px-2 py-1 rounded-lg text-xs font-semibold status-indicator ${space.available ? 'bg-emerald-500 text-white' : 'bg-red-500 text-white'}`}>
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
                    onClick={() => handleViewDetails(space)}
                  >
                    View Details
                  </motion.button>
                  <motion.button
                    className="flex-1 neu-button-primary py-2 px-3 text-xs font-semibold transition-all"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={!space.available}
                    onClick={() => handleBooking(space, space.available ? 'book' : 'waitlist')}
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

      {/* Details Modal */}
      {selectedSpace && !showBookingModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="neu-card-deep max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-ingrained-dark mb-2">{selectedSpace.name}</h2>
                  <div className="flex items-center text-ingrained-light mb-2">
                    <SafeIcon icon={FiMapPin} className="w-4 h-4 mr-1" />
                    <span>{selectedSpace.location}</span>
                  </div>
                  <div className="flex items-center">
                    <SafeIcon icon={FiStar} className="w-4 h-4 text-yellow-400 mr-1" />
                    <span className="font-semibold text-ingrained-dark">{selectedSpace.rating}</span>
                  </div>
                </div>
                <motion.button
                  className="neu-button p-2 text-gray-600 hover:text-red-500"
                  onClick={() => setSelectedSpace(null)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <SafeIcon icon={FiX} className="w-5 h-5" />
                </motion.button>
              </div>

              <img
                src={selectedSpace.image}
                alt={selectedSpace.name}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-ingrained-dark mb-3">Details</h3>
                  <div className="space-y-2 text-sm text-ingrained-light">
                    <div className="flex items-center">
                      <SafeIcon icon={FiClock} className="w-4 h-4 mr-2" />
                      <span>Hours: {selectedSpace.hours}</span>
                    </div>
                    <div className="flex items-center">
                      <SafeIcon icon={FiUsers} className="w-4 h-4 mr-2" />
                      <span>Capacity: {selectedSpace.capacity} people</span>
                    </div>
                    <div className="flex items-center">
                      <SafeIcon icon={FiMapPin} className="w-4 h-4 mr-2" />
                      <span>{selectedSpace.address}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-ingrained-dark mb-3">Pricing</h3>
                  <div className="text-2xl font-bold text-blue-600 mb-2">{selectedSpace.price}</div>
                  <div className="text-sm text-ingrained-light">per day</div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-ingrained-dark mb-3">Description</h3>
                <p className="text-ingrained-light">{selectedSpace.description}</p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-ingrained-dark mb-3">Amenities</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedSpace.amenities.map((amenity, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 text-sm rounded-lg font-medium"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <motion.button
                  className="flex-1 neu-button py-3 px-6 text-ingrained hover:text-blue-600 transition-colors"
                  onClick={() => setSelectedSpace(null)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Close
                </motion.button>
                <motion.button
                  className="flex-1 neu-button-primary py-3 px-6 font-semibold"
                  onClick={() => handleBooking(selectedSpace, selectedSpace.available ? 'book' : 'waitlist')}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={!selectedSpace.available}
                >
                  {selectedSpace.available ? 'Book Now' : 'Join Waitlist'}
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Booking Modal */}
      {showBookingModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="neu-card-deep max-w-lg w-full"
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-ingrained-dark mb-2">
                    {bookingType === 'book' ? 'Book Space' : 'Join Waitlist'}
                  </h2>
                  <p className="text-ingrained-light">{selectedSpace.name}</p>
                </div>
                <motion.button
                  className="neu-button p-2 text-gray-600 hover:text-red-500"
                  onClick={() => setShowBookingModal(false)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <SafeIcon icon={FiX} className="w-5 h-5" />
                </motion.button>
              </div>

              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-ingrained-dark mb-2">Name</label>
                  <input
                    type="text"
                    required
                    className="neu-input w-full px-4 py-3 text-ingrained"
                    value={bookingForm.name}
                    onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-ingrained-dark mb-2">Email</label>
                  <input
                    type="email"
                    required
                    className="neu-input w-full px-4 py-3 text-ingrained"
                    value={bookingForm.email}
                    onChange={(e) => setBookingForm({ ...bookingForm, email: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-ingrained-dark mb-2">Phone</label>
                  <input
                    type="tel"
                    className="neu-input w-full px-4 py-3 text-ingrained"
                    value={bookingForm.phone}
                    onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-ingrained-dark mb-2">Check-in</label>
                    <input
                      type="date"
                      required
                      className="neu-input w-full px-4 py-3 text-ingrained"
                      value={bookingForm.checkIn}
                      onChange={(e) => setBookingForm({ ...bookingForm, checkIn: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-ingrained-dark mb-2">Check-out</label>
                    <input
                      type="date"
                      required
                      className="neu-input w-full px-4 py-3 text-ingrained"
                      value={bookingForm.checkOut}
                      onChange={(e) => setBookingForm({ ...bookingForm, checkOut: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-ingrained-dark mb-2">Number of Guests</label>
                  <select
                    className="neu-input w-full px-4 py-3 text-ingrained"
                    value={bookingForm.guests}
                    onChange={(e) => setBookingForm({ ...bookingForm, guests: parseInt(e.target.value) })}
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                    ))}
                  </select>
                </div>

                <div className="flex gap-4 pt-4">
                  <motion.button
                    type="button"
                    className="flex-1 neu-button py-3 px-6 text-ingrained hover:text-blue-600 transition-colors"
                    onClick={() => setShowBookingModal(false)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Cancel
                  </motion.button>
                  <motion.button
                    type="submit"
                    className="flex-1 neu-button-primary py-3 px-6 font-semibold"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {bookingType === 'book' ? 'Confirm Booking' : 'Join Waitlist'}
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default CoWorkingSpaces;