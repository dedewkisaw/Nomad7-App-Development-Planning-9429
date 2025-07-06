import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHelpCircle, FiSearch, FiChevronDown, FiChevronUp, FiBook, FiMessageCircle, FiPhone, FiMail } = FiIcons;

const HelpCenter = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedFaq, setExpandedFaq] = useState(null);

  const categories = [
    {
      title: 'Getting Started',
      icon: FiBook,
      color: 'from-blue-400 to-blue-600',
      faqs: [
        {
          question: 'How do I create an account?',
          answer: 'Creating an account is simple! Click the "Sign Up" button in the top right corner, fill in your details, and verify your email address. You\'ll be ready to start exploring co-working spaces and connecting with nomad families right away.'
        },
        {
          question: 'How do I find co-working spaces?',
          answer: 'Use our search feature to find spaces by location, amenities, or price range. You can also browse our featured spaces or use filters to narrow down your options based on your specific needs.'
        },
        {
          question: 'How do I book a co-working space?',
          answer: 'Once you find a space you like, click "View Details" to see more information, then click "Book Now" to proceed with your reservation. You\'ll need to provide your dates and payment information to complete the booking.'
        }
      ]
    },
    {
      title: 'Bookings & Payments',
      icon: FiMessageCircle,
      color: 'from-green-400 to-green-600',
      faqs: [
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and various local payment methods depending on your location. All payments are processed securely through our encrypted payment system.'
        },
        {
          question: 'Can I cancel or modify my booking?',
          answer: 'Cancellation and modification policies vary by co-working space. You can view the specific policy for each space on their detail page. Most spaces offer flexible cancellation up to 24-48 hours before your booking date.'
        },
        {
          question: 'How do I get a refund?',
          answer: 'Refunds are processed according to the cancellation policy of the specific co-working space. If you\'re eligible for a refund, it will be processed back to your original payment method within 5-7 business days.'
        }
      ]
    },
    {
      title: 'Nomad Families',
      icon: FiPhone,
      color: 'from-purple-400 to-purple-600',
      faqs: [
        {
          question: 'How do I connect with other nomad families?',
          answer: 'Browse our Nomad Families section to see profiles of families currently traveling or in your destination. You can filter by location, family size, interests, and travel experience to find compatible families.'
        },
        {
          question: 'Is it safe to connect with other families?',
          answer: 'We verify all family profiles and encourage users to communicate through our platform initially. We also provide safety tips and guidelines for meeting other nomad families in person.'
        },
        {
          question: 'How do I create a family profile?',
          answer: 'Go to your account settings and select "Create Family Profile." Add photos, describe your family, list your interests, and share your travel plans. A complete profile helps you connect with like-minded families.'
        }
      ]
    },
    {
      title: 'Remote Work Assistant',
      icon: FiMail,
      color: 'from-orange-400 to-orange-600',
      faqs: [
        {
          question: 'What can the Remote Work Assistant help me with?',
          answer: 'Our AI assistant can help with tax compliance, visa requirements, legal documentation, banking solutions, and general questions about remote work regulations in different countries.'
        },
        {
          question: 'How accurate is the legal advice?',
          answer: 'Our assistant provides general guidance based on current regulations, but we recommend consulting with local legal professionals for specific situations. The assistant is designed to point you in the right direction and help you understand requirements.'
        },
        {
          question: 'Is the Remote Work Assistant free?',
          answer: 'Basic assistance is free for all users. Premium features like detailed legal document reviews and personalized tax advice are available with our paid plans.'
        }
      ]
    }
  ];

  const filteredCategories = categories.map(category => ({
    ...category,
    faqs: category.faqs.filter(
      faq =>
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.faqs.length > 0);

  const toggleFaq = (categoryIndex, faqIndex) => {
    const key = `${categoryIndex}-${faqIndex}`;
    setExpandedFaq(expandedFaq === key ? null : key);
  };

  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="w-16 h-16 neu-card-deep flex items-center justify-center bg-gradient-to-br from-blue-400 to-purple-600 mx-auto mb-6">
            <SafeIcon icon={FiHelpCircle} className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">Help Center</h1>
          <p className="text-xl text-ingrained-light max-w-3xl mx-auto leading-relaxed">
            Find answers to frequently asked questions and get the help you need.
          </p>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="neu-card-deep p-6 mb-12"
        >
          <div className="relative">
            <SafeIcon icon={FiSearch} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 icon-ingrained" />
            <input
              type="text"
              placeholder="Search for help..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="neu-input w-full pl-12 pr-6 py-3 text-ingrained font-medium"
            />
          </div>
        </motion.div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {filteredCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="neu-card-deep p-8"
            >
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 neu-card-deep flex items-center justify-center bg-gradient-to-br ${category.color} mr-4`}>
                  <SafeIcon icon={category.icon} className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-ingrained-dark">{category.title}</h2>
              </div>

              <div className="space-y-4">
                {category.faqs.map((faq, faqIndex) => (
                  <div key={faqIndex} className="neu-button p-4">
                    <motion.button
                      className="w-full flex items-center justify-between text-left"
                      onClick={() => toggleFaq(categoryIndex, faqIndex)}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      <span className="font-semibold text-ingrained-dark pr-4">{faq.question}</span>
                      <SafeIcon
                        icon={expandedFaq === `${categoryIndex}-${faqIndex}` ? FiChevronUp : FiChevronDown}
                        className="w-5 h-5 text-gray-400 flex-shrink-0"
                      />
                    </motion.button>
                    {expandedFaq === `${categoryIndex}-${faqIndex}` && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 pt-4 border-t border-gray-200"
                      >
                        <p className="text-ingrained-light leading-relaxed">{faq.answer}</p>
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {filteredCategories.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="w-20 h-20 neu-card-deep flex items-center justify-center mx-auto mb-4">
              <SafeIcon icon={FiHelpCircle} className="w-10 h-10 text-gray-400 icon-ingrained" />
            </div>
            <h3 className="text-lg font-semibold text-ingrained-dark mb-2">No results found</h3>
            <p className="text-ingrained-light">Try adjusting your search terms or browse all categories above.</p>
          </motion.div>
        )}

        {/* Contact Support */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="neu-card-deep p-8 mt-12 text-center"
        >
          <h3 className="text-2xl font-bold text-ingrained-dark mb-4">Still need help?</h3>
          <p className="text-ingrained-light mb-6">
            Can't find what you're looking for? Our support team is here to help you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="neu-button-primary py-3 px-6 font-semibold text-white flex items-center justify-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <SafeIcon icon={FiMessageCircle} className="w-5 h-5 mr-2" />
              Live Chat
            </motion.button>
            <motion.button
              className="neu-button py-3 px-6 font-semibold text-ingrained hover:text-blue-600 flex items-center justify-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <SafeIcon icon={FiMail} className="w-5 h-5 mr-2" />
              Email Support
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HelpCenter;