import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiGlobe, FiMail, FiPhone, FiMapPin, FiTwitter, FiInstagram, FiLinkedin, FiGithub } = FiIcons;

const Footer = () => {
  const footerSections = [
    {
      title: "Platform",
      links: [
        { name: "Co-working Spaces", href: "#" },
        { name: "Nomad Families", href: "#" },
        { name: "Remote Assistant", href: "#" },
        { name: "Global Map", href: "#" }
      ]
    },
    {
      title: "Services",
      links: [
        { name: "Tax Compliance", href: "#" },
        { name: "Visa Requirements", href: "#" },
        { name: "Legal Documentation", href: "#" },
        { name: "Banking Solutions", href: "#" }
      ]
    },
    {
      title: "Community",
      links: [
        { name: "Success Stories", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Events", href: "#" },
        { name: "Newsletter", href: "#" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "#" },
        { name: "Contact Us", href: "#" },
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" }
      ]
    }
  ];

  const socialLinks = [
    { icon: FiTwitter, href: "#", label: "Twitter" },
    { icon: FiInstagram, href: "#", label: "Instagram" },
    { icon: FiLinkedin, href: "#", label: "LinkedIn" },
    { icon: FiGithub, href: "#", label: "GitHub" }
  ];

  return (
    <footer className="bg-neu-bg border-t border-neu-dark/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <div className="flex items-center space-x-2 mb-4">
                <div className="neu-card p-2">
                  <SafeIcon icon={FiGlobe} className="w-6 h-6 text-nomad-blue" />
                </div>
                <span className="text-2xl font-bold gradient-text">Nomad7</span>
              </div>
              <p className="text-gray-600 mb-6">
                Connecting nomad families and auto-managing co-working spaces across 70+ countries 
                with intelligent cross-border remote work assistance.
              </p>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-3"
            >
              <div className="flex items-center space-x-3 text-gray-600">
                <SafeIcon icon={FiMail} className="w-4 h-4" />
                <span className="text-sm">hello@nomad7.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <SafeIcon icon={FiPhone} className="w-4 h-4" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <SafeIcon icon={FiMapPin} className="w-4 h-4" />
                <span className="text-sm">Global Remote Team</span>
              </div>
            </motion.div>
          </div>

          {/* Links Sections */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-nomad-blue transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-neu-dark/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-gray-600 text-sm mb-4 md:mb-0"
            >
              © 2024 Nomad7. All rights reserved. Built with ❤️ for digital nomads worldwide.
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex space-x-3"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="neu-button p-2 text-gray-600 hover:text-nomad-blue transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <SafeIcon icon={social.icon} className="w-4 h-4" />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;