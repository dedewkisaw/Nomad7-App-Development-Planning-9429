import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiShield, FiLock, FiEye, FiDatabase, FiUsers, FiMail } = FiIcons;

const PrivacyPolicy = () => {
  const sections = [
    {
      id: 'information-collection',
      title: 'Information We Collect',
      icon: FiDatabase,
      content: [
        {
          subtitle: 'Personal Information',
          text: 'We collect information you provide directly to us, such as when you create an account, book a co-working space, or contact us for support.'
        },
        {
          subtitle: 'Usage Information',
          text: 'We automatically collect information about your use of our platform, including your IP address, device information, and browsing patterns.'
        },
        {
          subtitle: 'Location Data',
          text: 'With your consent, we may collect location data to help you find nearby co-working spaces and connect with local nomad communities.'
        }
      ]
    },
    {
      id: 'information-use',
      title: 'How We Use Your Information',
      icon: FiEye,
      content: [
        {
          subtitle: 'Service Provision',
          text: 'We use your information to provide, maintain, and improve our services, including facilitating bookings and connecting nomad families.'
        },
        {
          subtitle: 'Communication',
          text: 'We may use your contact information to send you updates about our services, respond to your inquiries, and provide customer support.'
        },
        {
          subtitle: 'Legal Compliance',
          text: 'We may use your information to comply with legal obligations, resolve disputes, and enforce our terms of service.'
        }
      ]
    },
    {
      id: 'information-sharing',
      title: 'Information Sharing',
      icon: FiUsers,
      content: [
        {
          subtitle: 'Service Providers',
          text: 'We may share your information with third-party service providers who help us operate our platform and provide services to you.'
        },
        {
          subtitle: 'Co-working Spaces',
          text: 'When you book a space, we share necessary information with the co-working space to facilitate your reservation.'
        },
        {
          subtitle: 'Legal Requirements',
          text: 'We may disclose your information if required by law or to protect our rights, property, or safety.'
        }
      ]
    },
    {
      id: 'data-security',
      title: 'Data Security',
      icon: FiLock,
      content: [
        {
          subtitle: 'Security Measures',
          text: 'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.'
        },
        {
          subtitle: 'Encryption',
          text: 'All sensitive data is encrypted in transit and at rest using industry-standard encryption protocols.'
        },
        {
          subtitle: 'Access Controls',
          text: 'We limit access to your personal information to employees and contractors who need it to perform their job functions.'
        }
      ]
    }
  ];

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
            <SafeIcon icon={FiShield} className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">Privacy Policy</h1>
          <p className="text-xl text-ingrained-light max-w-3xl mx-auto leading-relaxed">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
          <div className="text-sm text-ingrained-light mt-4">
            Last updated: December 2024
          </div>
        </motion.div>

        <div className="space-y-8">
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="neu-card-deep p-8"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 neu-card-deep flex items-center justify-center bg-gradient-to-br from-blue-400 to-purple-600 mr-4">
                  <SafeIcon icon={section.icon} className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-ingrained-dark">{section.title}</h2>
              </div>

              <div className="space-y-6">
                {section.content.map((item, idx) => (
                  <div key={idx}>
                    <h3 className="text-lg font-semibold text-ingrained-dark mb-2">{item.subtitle}</h3>
                    <p className="text-ingrained-light leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="neu-card-deep p-8 mt-8"
        >
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 neu-card-deep flex items-center justify-center bg-gradient-to-br from-green-400 to-green-600 mr-4">
              <SafeIcon icon={FiMail} className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-ingrained-dark">Contact Us</h2>
          </div>

          <p className="text-ingrained-light leading-relaxed mb-4">
            If you have any questions about this Privacy Policy or our data practices, please contact us:
          </p>

          <div className="space-y-2 text-ingrained-light">
            <div>Email: privacy@nomad7.com</div>
            <div>Phone: +1 (555) 123-4567</div>
            <div>Address: Global Remote Team</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;