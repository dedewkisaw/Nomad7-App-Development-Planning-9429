import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiEdit, FiCalendar, FiUser, FiTag, FiSearch, FiArrowRight, FiClock } = FiIcons;

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: "The Ultimate Digital Nomad Tax Guide for 2024",
      excerpt: "Navigate complex tax requirements as a digital nomad with our comprehensive guide covering 15+ countries and practical tips.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
      author: "Sarah Johnson",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Tax & Legal",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=300&fit=crop",
      tags: ["Tax", "Legal", "Digital Nomad", "2024"],
      featured: true
    },
    {
      id: 2,
      title: "Top 10 Co-working Spaces in Lisbon",
      excerpt: "Discover the best co-working spaces in Portugal's capital, from trendy startups hubs to quiet productive environments.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      author: "Miguel Santos",
      date: "2024-01-12",
      readTime: "6 min read",
      category: "Co-working",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=300&fit=crop",
      tags: ["Lisbon", "Co-working", "Portugal"],
      featured: false
    },
    {
      id: 3,
      title: "Raising Kids as Digital Nomads: A Complete Guide",
      excerpt: "Everything you need to know about traveling the world with children while maintaining a successful remote career.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      author: "Emma Wilson",
      date: "2024-01-10",
      readTime: "12 min read",
      category: "Family Travel",
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&h=300&fit=crop",
      tags: ["Family", "Kids", "Travel", "Education"],
      featured: true
    },
    {
      id: 4,
      title: "Estonia's Digital Nomad Visa: Complete Application Guide",
      excerpt: "Step-by-step guide to applying for Estonia's digital nomad visa, requirements, and what to expect during the process.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      author: "Kai Tamm",
      date: "2024-01-08",
      readTime: "10 min read",
      category: "Visa & Immigration",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=300&fit=crop",
      tags: ["Estonia", "Visa", "Digital Nomad"],
      featured: false
    },
    {
      id: 5,
      title: "Building Community: How to Connect with Other Nomads",
      excerpt: "Tips and strategies for building meaningful connections and finding your tribe in the digital nomad community.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      author: "Alex Chen",
      date: "2024-01-05",
      readTime: "7 min read",
      category: "Community",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=300&fit=crop",
      tags: ["Community", "Networking", "Social"],
      featured: false
    },
    {
      id: 6,
      title: "Remote Work Setup: Essential Tools for Productivity",
      excerpt: "Discover the must-have tools, apps, and equipment that successful digital nomads use to stay productive anywhere.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      author: "David Rodriguez",
      date: "2024-01-03",
      readTime: "9 min read",
      category: "Productivity",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=300&fit=crop",
      tags: ["Productivity", "Tools", "Remote Work"],
      featured: false
    }
  ];

  const categories = [
    { id: 'all', label: 'All Posts', count: blogPosts.length },
    { id: 'Tax & Legal', label: 'Tax & Legal', count: blogPosts.filter(p => p.category === 'Tax & Legal').length },
    { id: 'Co-working', label: 'Co-working', count: blogPosts.filter(p => p.category === 'Co-working').length },
    { id: 'Family Travel', label: 'Family Travel', count: blogPosts.filter(p => p.category === 'Family Travel').length },
    { id: 'Visa & Immigration', label: 'Visa & Immigration', count: blogPosts.filter(p => p.category === 'Visa & Immigration').length },
    { id: 'Community', label: 'Community', count: blogPosts.filter(p => p.category === 'Community').length },
    { id: 'Productivity', label: 'Productivity', count: blogPosts.filter(p => p.category === 'Productivity').length }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="w-16 h-16 neu-card-deep flex items-center justify-center bg-gradient-to-br from-blue-400 to-purple-600 mx-auto mb-6">
            <SafeIcon icon={FiEdit} className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">Blog</h1>
          <p className="text-xl text-ingrained-light max-w-3xl mx-auto leading-relaxed">
            Insights, guides, and stories from the digital nomad community.
          </p>
        </motion.div>

        {/* Featured Posts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-ingrained-dark mb-8">Featured Posts</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.slice(0, 2).map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="neu-card-deep overflow-hidden hover:shadow-neu-hover transition-all duration-300 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-orange-400 to-pink-400 text-white text-sm rounded-lg font-semibold">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-ingrained-light mb-3">
                    <span className="flex items-center">
                      <SafeIcon icon={FiCalendar} className="w-4 h-4 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center">
                      <SafeIcon icon={FiClock} className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </span>
                    <span className="px-2 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 rounded-lg text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-ingrained-dark mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-ingrained-light mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <SafeIcon icon={FiUser} className="w-4 h-4 text-ingrained-light mr-2" />
                      <span className="text-sm text-ingrained">{post.author}</span>
                    </div>
                    <motion.button
                      className="neu-button py-2 px-4 text-sm font-semibold text-ingrained hover:text-blue-600 flex items-center"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Read More
                      <SafeIcon icon={FiArrowRight} className="w-4 h-4 ml-1" />
                    </motion.button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* Search and Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="neu-card-deep p-6 mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <SafeIcon icon={FiSearch} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="neu-input w-full pl-12 pr-6 py-3 text-ingrained font-medium"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <motion.button
                  key={category.id}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${selectedCategory === category.id
                    ? 'neu-card-pressed text-blue-600 bg-gradient-to-r from-blue-50 to-purple-50'
                    : 'neu-button text-ingrained hover:text-blue-600'
                    }`}
                  onClick={() => setSelectedCategory(category.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {category.label}
                  <span className="ml-2 px-2 py-1 bg-gray-200 rounded-full text-xs text-ingrained-dark">
                    {category.count}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="neu-card-deep overflow-hidden hover:shadow-neu-hover transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {post.featured && (
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 bg-gradient-to-r from-orange-400 to-pink-400 text-white text-xs rounded-lg font-semibold">
                      Featured
                    </span>
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-3 text-sm text-ingrained-light mb-3">
                  <span className="flex items-center">
                    <SafeIcon icon={FiCalendar} className="w-3 h-3 mr-1" />
                    {new Date(post.date).toLocaleDateString()}
                  </span>
                  <span className="flex items-center">
                    <SafeIcon icon={FiClock} className="w-3 h-3 mr-1" />
                    {post.readTime}
                  </span>
                </div>
                <span className="px-2 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 rounded-lg text-xs font-medium mb-3 inline-block">
                  {post.category}
                </span>
                <h3 className="text-lg font-bold text-ingrained-dark mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-ingrained-light text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {post.tags.slice(0, 3).map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <SafeIcon icon={FiUser} className="w-3 h-3 text-ingrained-light mr-1" />
                    <span className="text-xs text-ingrained">{post.author}</span>
                  </div>
                  <motion.button
                    className="neu-button py-1 px-3 text-xs font-semibold text-ingrained hover:text-blue-600 flex items-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Read
                    <SafeIcon icon={FiArrowRight} className="w-3 h-3 ml-1" />
                  </motion.button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="w-20 h-20 neu-card-deep flex items-center justify-center mx-auto mb-4">
              <SafeIcon icon={FiEdit} className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-ingrained-dark mb-2">No articles found</h3>
            <p className="text-ingrained-light">Try adjusting your search criteria or browse all categories.</p>
          </motion.div>
        )}

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="neu-card-deep p-8 mt-16 text-center"
        >
          <h3 className="text-3xl font-bold text-ingrained-dark mb-4">Never Miss an Update</h3>
          <p className="text-ingrained-light mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest insights, guides, and stories from the digital nomad community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="neu-input flex-1 px-4 py-3 text-ingrained"
            />
            <motion.button
              className="neu-button-primary py-3 px-8 font-semibold text-white"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPage;