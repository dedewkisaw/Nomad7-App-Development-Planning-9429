import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiGlobe, FiMail, FiPhone, FiMapPin, FiTwitter, FiInstagram, FiLinkedin, FiGithub } = FiIcons;

const Footer = () => {
  const navigate = useNavigate();

  const footerSections = [
    {
      title: "Platform",
      links: [
        { name: "Co-working Spaces", href: "/coworking", type: "route" },
        { name: "Nomad Families", href: "/families", type: "route" },
        { name: "Remote Assistant", href: "/assistant", type: "route" },
        { name: "Global Map", href: "/", type: "route" }
      ]
    },
    {
      title: "Services",
      links: [
        { name: "Tax Compliance", href: "/tax-compliance", type: "route" },
        { name: "Visa Requirements", href: "/visa-requirements", type: "route" },
        { name: "Legal Documentation", href: "/legal-docs", type: "route" },
        { name: "Banking Solutions", href: "/contact", type: "route" }
      ]
    },
    {
      title: "Community",
      links: [
        { name: "Success Stories", href: "/success-stories", type: "route" },
        { name: "Blog", href: "/blog", type: "route" },
        { name: "Events", href: "/contact", type: "route" },
        { name: "Newsletter", href: "/contact", type: "route" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "/help", type: "route" },
        { name: "Contact Us", href: "/contact", type: "route" },
        { name: "Privacy Policy", href: "/privacy", type: "route" },
        { name: "Terms of Service", href: "/terms", type: "route" }
      ]
    }
  ];

  const socialLinks = [
    { icon: FiTwitter, href: "https://twitter.com/nomad7", label: "Twitter" },
    { icon: FiInstagram, href: "https://instagram.com/nomad7", label: "Instagram" },
    { icon: FiLinkedin, href: "https://linkedin.com/company/nomad7", label: "LinkedIn" },
    { icon: FiGithub, href: "https://github.com/nomad7", label: "GitHub" }
  ];

  const handleNavigation = (href) => {
    navigate(href);
    // Smooth scroll to top after navigation
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }, 100);
  };

  const renderLink = (link) => {
    return (
      <button
        onClick={() => handleNavigation(link.href)}
        className="carved-text-light hover:text-nomad-blue transition-colors duration-200 text-sm text-left"
      >
        {link.name}
      </button>
    );
  };

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
              <button
                onClick={() => handleNavigation('/')}
                className="flex items-center space-x-2 mb-4"
              >
                <div className="w-10 h-10 neu-card-deep flex items-center justify-center bg-gradient-to-br from-blue-400 to-purple-600">
                  <SafeIcon icon={FiGlobe} className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold gradient-text">Nomad7</span>
              </button>
              <p className="carved-text mb-6">
                Connecting nomad families and auto-managing co-working spaces across 70+ countries with intelligent cross-border remote work assistance.
              </p>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-3"
            >
              <div className="flex items-center space-x-3 carved-text">
                <SafeIcon icon={FiMail} className="w-4 h-4" />
                <span className="text-sm">hello@nomad7.com</span>
              </div>
              <div className="flex items-center space-x-3 carved-text">
                <SafeIcon icon={FiPhone} className="w-4 h-4" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 carved-text">
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
              <h3 className="text-lg font-semibold carved-text-deep mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    {renderLink(link)}
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
              className="carved-text text-sm mb-4 md:mb-0"
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
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neu-button p-2 carved-text hover:text-nomad-blue transition-colors duration-200"
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