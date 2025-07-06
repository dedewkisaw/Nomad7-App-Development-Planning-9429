import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiFileText, FiUsers, FiShield, FiDollarSign, FiAlertTriangle, FiMail } = FiIcons;

const TermsOfService = () => {
  const sections = [
    {
      id: 'acceptance',
      title: 'Acceptance of Terms',
      icon: FiFileText,
      content: [
        {
          subtitle: 'Agreement',
          text: 'By accessing and using Nomad7, you accept and agree to be bound by the terms and provision of this agreement.'
        },
        {
          subtitle: 'Modifications',
          text: 'We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting.'
        }
      ]
    },
    {
      id: 'user-accounts',
      title: 'User Accounts',
      icon: FiUsers,
      content: [
        {
          subtitle: 'Account Creation',
          text: 'You must create an account to access certain features of our platform. You are responsible for maintaining the confidentiality of your account credentials.'
        },
        {
          subtitle: 'Account Responsibility',
          text: 'You are responsible for all activities that occur under your account and must notify us immediately of any unauthorized use.'
        },
        {
          subtitle: 'Account Termination',
          text: 'We reserve the right to terminate or suspend your account at any time for violations of these terms.'
        }
      ]
    },
    {
      id: 'platform-use',
      title: 'Platform Use',
      icon: FiShield,
      content: [
        {
          subtitle: 'Permitted Use',
          text: 'You may use our platform for legitimate business purposes related to co-working space bookings and nomad community connections.'
        },
        {
          subtitle: 'Prohibited Activities',
          text: 'You may not use our platform for any illegal activities, spam, harassment, or any activity that could harm our platform or other users.'
        },
        {
          subtitle: 'Content Guidelines',
          text: 'All content you post must be accurate, legal, and respectful. We reserve the right to remove any content that violates these guidelines.'
        }
      ]
    },
    {
      id: 'payments',
      title: 'Payments and Bookings',
      icon: FiDollarSign,
      content: [
        {
          subtitle: 'Booking Terms',
          text: 'When you book a co-working space through our platform, you enter into a contract with the space provider, not with Nomad7.'
        },
        {
          subtitle: 'Payment Processing',
          text: 'We facilitate payments between users and co-working spaces. All payments are processed securely through our payment partners.'
        },
        {
          subtitle: 'Refunds',
          text: 'Refund policies are determined by individual co-working spaces. We will facilitate refunds according to the applicable space policy.'
        }
      ]
    },
    {
      id: 'liability',
      title: 'Limitation of Liability',
      icon: FiAlertTriangle,
      content: [
        {
          subtitle: 'Service Availability',
          text: 'We strive to maintain platform availability but cannot guarantee uninterrupted service. We are not liable for any downtime or service interruptions.'
        },
        {
          subtitle: 'Third-Party Services',
          text: 'Our platform integrates with third-party services. We are not responsible for the performance or availability of these external services.'
        },
        {
          subtitle: 'Damages',
          text: 'In no event shall Nomad7 be liable for any indirect, incidental, special, or consequential damages arising from your use of our platform.'
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
            <SafeIcon icon={FiFileText} className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">Terms of Service</h1>
          <p className="text-xl text-ingrained-light max-w-3xl mx-auto leading-relaxed">
            Please read these terms carefully before using our platform. They govern your use of Nomad7.
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
          transition={{ duration: 0.6, delay: 0.6 }}
          className="neu-card-deep p-8 mt-8"
        >
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 neu-card-deep flex items-center justify-center bg-gradient-to-br from-green-400 to-green-600 mr-4">
              <SafeIcon icon={FiMail} className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-ingrained-dark">Contact Us</h2>
          </div>

          <p className="text-ingrained-light leading-relaxed mb-4">
            If you have any questions about these Terms of Service, please contact us:
          </p>

          <div className="space-y-2 text-ingrained-light">
            <div>Email: legal@nomad7.com</div>
            <div>Phone: +1 (555) 123-4567</div>
            <div>Address: Global Remote Team</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;