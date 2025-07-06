import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMail, FiPhone, FiMapPin, FiSend, FiMessageCircle, FiHeadphones, FiClock } = FiIcons;

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your message, ${formData.name}! We'll get back to you soon.`);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactMethods = [
    {
      icon: FiMail,
      title: 'Email Us',
      description: 'Send us an email anytime',
      contact: 'hello@nomad7.com',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: FiPhone,
      title: 'Call Us',
      description: '24/7 support available',
      contact: '+1 (555) 123-4567',
      color: 'from-green-400 to-green-600'
    },
    {
      icon: FiMessageCircle,
      title: 'Live Chat',
      description: 'Chat with our support team',
      contact: 'Available 9 AM - 6 PM EST',
      color: 'from-purple-400 to-purple-600'
    }
  ];

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
            <SafeIcon icon={FiHeadphones} className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">Contact Us</h1>
          <p className="text-xl text-ingrained-light max-w-3xl mx-auto leading-relaxed">
            Have questions? We're here to help! Reach out to us through any of the methods below.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="neu-card-deep p-8 text-center hover:shadow-neu-hover transition-all duration-300"
            >
              <div className={`w-16 h-16 neu-card-deep flex items-center justify-center bg-gradient-to-br ${method.color} mx-auto mb-4`}>
                <SafeIcon icon={method.icon} className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-ingrained-dark mb-2">{method.title}</h3>
              <p className="text-ingrained-light mb-4">{method.description}</p>
              <div className="text-blue-600 font-semibold">{method.contact}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="neu-card-deep p-8"
          >
            <h2 className="text-2xl font-bold text-ingrained-dark mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-ingrained-dark mb-2">Name</label>
                <input
                  type="text"
                  required
                  className="neu-input w-full px-4 py-3 text-ingrained"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-ingrained-dark mb-2">Email</label>
                <input
                  type="email"
                  required
                  className="neu-input w-full px-4 py-3 text-ingrained"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-ingrained-dark mb-2">Subject</label>
                <input
                  type="text"
                  required
                  className="neu-input w-full px-4 py-3 text-ingrained"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-ingrained-dark mb-2">Message</label>
                <textarea
                  required
                  rows={6}
                  className="neu-input w-full px-4 py-3 text-ingrained resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <motion.button
                type="submit"
                className="w-full neu-button-primary py-4 px-6 font-semibold text-white flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <SafeIcon icon={FiSend} className="w-5 h-5 mr-2" />
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-8"
          >
            <div className="neu-card-deep p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 neu-card-deep flex items-center justify-center bg-gradient-to-br from-orange-400 to-orange-600 mr-4">
                  <SafeIcon icon={FiClock} className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-ingrained-dark">Business Hours</h3>
              </div>
              <div className="space-y-2 text-ingrained-light">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>

            <div className="neu-card-deep p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 neu-card-deep flex items-center justify-center bg-gradient-to-br from-purple-400 to-purple-600 mr-4">
                  <SafeIcon icon={FiMapPin} className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-ingrained-dark">Our Locations</h3>
              </div>
              <div className="space-y-4 text-ingrained-light">
                <div>
                  <div className="font-semibold">Headquarters</div>
                  <div>Global Remote Team</div>
                  <div>Serving 70+ countries worldwide</div>
                </div>
                <div>
                  <div className="font-semibold">Support Centers</div>
                  <div>San Francisco, CA</div>
                  <div>London, UK</div>
                  <div>Singapore</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;