import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiStar, FiMapPin, FiUsers, FiTrendingUp, FiHeart, FiQuote } = FiIcons;

const SuccessStories = () => {
  const [selectedStory, setSelectedStory] = useState(null);

  const successStories = [
    {
      id: 1,
      name: "Maria & Carlos Rodriguez",
      title: "From Corporate to Freedom",
      location: "Currently in Bali, Indonesia",
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&h=400&fit=crop",
      story: "After 15 years in corporate finance, Maria and Carlos decided to take the leap into digital nomadism. With two kids and a mortgage, it seemed impossible. But through careful planning and the support of the Nomad7 community, they've now been traveling for 2 years while growing their consulting business by 300%.",
      achievements: [
        "300% business growth",
        "Visited 25 countries",
        "Kids speak 3 languages",
        "Debt-free in 18 months"
      ],
      quote: "Nomad7 didn't just help us travel - it helped us redesign our entire life around what matters most: family, freedom, and fulfillment.",
      timeframe: "2 years nomading",
      category: "Family"
    },
    {
      id: 2,
      name: "Alex Chen",
      title: "Solo Developer Success",
      location: "Currently in Estonia",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      story: "Alex started as a junior developer in San Francisco, spending 60% of his income on rent. Through Nomad7's tax optimization and location recommendations, he's now a successful freelancer earning 5x more while spending 70% less on living expenses.",
      achievements: [
        "5x income increase",
        "70% cost reduction",
        "Built 3 successful apps",
        "Mentored 50+ developers"
      ],
      quote: "The tax savings alone paid for two years of travel. But the real value was the community and connections I made along the way.",
      timeframe: "3 years nomading",
      category: "Tech"
    },
    {
      id: 3,
      name: "The Johnson Family",
      title: "Homeschooling Around the World",
      location: "Currently in Portugal",
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&h=400&fit=crop",
      story: "With three kids aged 8-14, the Johnsons thought world travel was impossible. Through Nomad7's family network and educational resources, they've created a unique homeschooling experience that combines travel with world-class education.",
      achievements: [
        "30 countries visited",
        "Kids ahead academically",
        "Started family blog",
        "Featured in documentaries"
      ],
      quote: "Our children are getting an education no classroom could provide. They're confident, curious, and truly global citizens.",
      timeframe: "4 years nomading",
      category: "Education"
    },
    {
      id: 4,
      name: "Dr. Sarah Mitchell",
      title: "Telemedicine Pioneer",
      location: "Currently in Mexico",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop",
      story: "As a practicing physician, Sarah thought remote work was impossible in healthcare. Through Nomad7's legal assistance, she navigated telemedicine regulations and now runs a successful practice while traveling, serving patients across multiple states.",
      achievements: [
        "500+ remote patients",
        "Licensed in 8 states",
        "Reduced overhead by 80%",
        "Work-life balance achieved"
      ],
      quote: "I'm providing better care to more patients while living my dream of world travel. It seemed impossible, but Nomad7 made it reality.",
      timeframe: "1.5 years nomading",
      category: "Healthcare"
    },
    {
      id: 5,
      name: "Mike & Jennifer",
      title: "Retirement Reimagined",
      location: "Currently in Thailand",
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&h=400&fit=crop",
      story: "At 55 and 52, Mike and Jennifer realized their retirement savings wouldn't last in the US. Through Nomad7's retirement planning and location scouting, they're now living comfortably in Asia on 1/3 of their previous expenses.",
      achievements: [
        "Living on $2,500/month",
        "Healthcare costs 90% less",
        "Started travel blog",
        "Helping other retirees"
      ],
      quote: "We're living better than ever on a fraction of the cost. Retirement abroad isn't just financially smart - it's an adventure.",
      timeframe: "2 years nomading",
      category: "Retirement"
    },
    {
      id: 6,
      name: "Emma Thompson",
      title: "Creative Freelancer",
      location: "Currently in Colombia",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b05b?w=400&h=400&fit=crop",
      story: "Emma was struggling to make ends meet as a graphic designer in London. Through Nomad7's creative community and business mentorship, she built a six-figure design agency while exploring South America.",
      achievements: [
        "6-figure revenue",
        "Team of 8 designers",
        "50+ happy clients",
        "Featured in design magazines"
      ],
      quote: "The inspiration from traveling and the support from the Nomad7 community transformed not just my business, but my entire creative process.",
      timeframe: "2.5 years nomading",
      category: "Creative"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Stories', count: successStories.length },
    { id: 'Family', label: 'Families', count: successStories.filter(s => s.category === 'Family').length },
    { id: 'Tech', label: 'Tech', count: successStories.filter(s => s.category === 'Tech').length },
    { id: 'Education', label: 'Education', count: successStories.filter(s => s.category === 'Education').length },
    { id: 'Healthcare', label: 'Healthcare', count: successStories.filter(s => s.category === 'Healthcare').length },
    { id: 'Retirement', label: 'Retirement', count: successStories.filter(s => s.category === 'Retirement').length },
    { id: 'Creative', label: 'Creative', count: successStories.filter(s => s.category === 'Creative').length }
  ];

  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredStories = selectedCategory === 'all' 
    ? successStories 
    : successStories.filter(story => story.category === selectedCategory);

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
            <SafeIcon icon={FiStar} className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">Success Stories</h1>
          <p className="text-xl text-ingrained-light max-w-3xl mx-auto leading-relaxed">
            Real stories from our community members who have transformed their lives through digital nomadism.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="neu-card-deep p-6 mb-16"
        >
          <div className="flex flex-wrap gap-3 justify-center">
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
        </motion.div>

        {/* Success Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredStories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="neu-card-deep overflow-hidden hover:shadow-neu-hover transition-all duration-300 group cursor-pointer"
              onClick={() => setSelectedStory(story)}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-green-400 to-emerald-500 text-white text-sm rounded-lg font-semibold">
                    {story.category}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="glass-card p-3 rounded-lg">
                    <div className="flex items-center text-white text-sm">
                      <SafeIcon icon={FiMapPin} className="w-4 h-4 mr-1" />
                      <span>{story.location}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-ingrained-dark mb-2">{story.name}</h3>
                <p className="text-blue-600 font-semibold mb-3">{story.title}</p>
                <p className="text-ingrained-light text-sm mb-4 line-clamp-3">{story.story}</p>
                
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {story.achievements.slice(0, 4).map((achievement, idx) => (
                    <div key={idx} className="flex items-center text-xs text-ingrained">
                      <SafeIcon icon={FiTrendingUp} className="w-3 h-3 text-green-500 mr-1" />
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-ingrained-light">{story.timeframe}</span>
                  <motion.button
                    className="neu-button py-2 px-4 text-xs font-semibold text-ingrained hover:text-blue-600"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Read Full Story
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="neu-card-deep p-8 text-center"
        >
          <h3 className="text-3xl font-bold text-ingrained-dark mb-4">Ready to Write Your Success Story?</h3>
          <p className="text-ingrained-light mb-8 max-w-2xl mx-auto">
            Join thousands of digital nomads who have transformed their lives. Your adventure starts with a single step.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="neu-button-primary py-3 px-8 font-semibold text-white"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Start Your Journey
            </motion.button>
            <motion.button
              className="neu-button py-3 px-8 font-semibold text-ingrained hover:text-blue-600"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Join Our Community
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Story Detail Modal */}
      {selectedStory && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="neu-card-deep max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center">
                  <img
                    src={selectedStory.image}
                    alt={selectedStory.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h2 className="text-2xl font-bold text-ingrained-dark">{selectedStory.name}</h2>
                    <p className="text-blue-600 font-semibold">{selectedStory.title}</p>
                    <div className="flex items-center text-ingrained-light mt-1">
                      <SafeIcon icon={FiMapPin} className="w-4 h-4 mr-1" />
                      <span>{selectedStory.location}</span>
                    </div>
                  </div>
                </div>
                <motion.button
                  className="neu-button p-2 text-gray-600 hover:text-red-500"
                  onClick={() => setSelectedStory(null)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <SafeIcon icon={FiUsers} className="w-5 h-5" />
                </motion.button>
              </div>

              <div className="neu-card-pressed p-6 mb-6">
                <div className="flex items-start">
                  <SafeIcon icon={FiQuote} className="w-8 h-8 text-blue-600 mr-4 mt-1" />
                  <p className="text-lg text-ingrained italic">{selectedStory.quote}</p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-ingrained-dark mb-4">Their Story</h3>
                <p className="text-ingrained-light leading-relaxed">{selectedStory.story}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-bold text-ingrained-dark mb-4">Key Achievements</h3>
                  <ul className="space-y-2">
                    {selectedStory.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-center text-ingrained">
                        <SafeIcon icon={FiTrendingUp} className="w-4 h-4 text-green-500 mr-2" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-ingrained-dark mb-4">Journey Details</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-ingrained">Time Nomading:</span>
                      <span className="font-semibold text-ingrained-dark">{selectedStory.timeframe}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-ingrained">Category:</span>
                      <span className="font-semibold text-blue-600">{selectedStory.category}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-ingrained">Current Location:</span>
                      <span className="font-semibold text-ingrained-dark">{selectedStory.location.replace('Currently in ', '')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default SuccessStories;