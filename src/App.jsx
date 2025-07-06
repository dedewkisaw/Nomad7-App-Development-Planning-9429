import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Dashboard from './components/Dashboard';
import CoWorkingSpaces from './components/CoWorkingSpaces';
import NomadFamilies from './components/NomadFamilies';
import RemoteWorkAssistant from './components/RemoteWorkAssistant';
import GlobalMap from './components/GlobalMap';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import ContactUs from './components/ContactUs';
import HelpCenter from './components/HelpCenter';
import TaxCompliance from './components/TaxCompliance';
import VisaRequirements from './components/VisaRequirements';
import LegalDocumentation from './components/LegalDocumentation';
import BlogPage from './components/BlogPage';
import SuccessStories from './components/SuccessStories';
import './App.css';

// Component to handle scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
};

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 }
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.5
  };

  return (
    <Router>
      <div className="min-h-screen bg-neu-bg font-inter">
        <ScrollToTop />
        <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={
              <motion.div
                key="home"
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Hero />
                <Dashboard />
                <GlobalMap />
              </motion.div>
            } />
            <Route path="/coworking" element={
              <motion.div
                key="coworking"
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <CoWorkingSpaces />
              </motion.div>
            } />
            <Route path="/families" element={
              <motion.div
                key="families"
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <NomadFamilies />
              </motion.div>
            } />
            <Route path="/assistant" element={
              <motion.div
                key="assistant"
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <RemoteWorkAssistant />
              </motion.div>
            } />
            <Route path="/privacy" element={
              <motion.div
                key="privacy"
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <PrivacyPolicy />
              </motion.div>
            } />
            <Route path="/terms" element={
              <motion.div
                key="terms"
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <TermsOfService />
              </motion.div>
            } />
            <Route path="/contact" element={
              <motion.div
                key="contact"
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <ContactUs />
              </motion.div>
            } />
            <Route path="/help" element={
              <motion.div
                key="help"
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <HelpCenter />
              </motion.div>
            } />
            {/* Service Pages */}
            <Route path="/tax-compliance" element={
              <motion.div
                key="tax-compliance"
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <TaxCompliance />
              </motion.div>
            } />
            <Route path="/visa-requirements" element={
              <motion.div
                key="visa-requirements"
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <VisaRequirements />
              </motion.div>
            } />
            <Route path="/legal-docs" element={
              <motion.div
                key="legal-docs"
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <LegalDocumentation />
              </motion.div>
            } />
            {/* Community Pages */}
            <Route path="/blog" element={
              <motion.div
                key="blog"
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <BlogPage />
              </motion.div>
            } />
            <Route path="/success-stories" element={
              <motion.div
                key="success-stories"
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <SuccessStories />
              </motion.div>
            } />
            {/* Placeholder routes for remaining footer links */}
            <Route path="/banking" element={
              <motion.div
                key="banking"
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <ContactUs />
              </motion.div>
            } />
            <Route path="/events" element={
              <motion.div
                key="events"
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <ContactUs />
              </motion.div>
            } />
            <Route path="/newsletter" element={
              <motion.div
                key="newsletter"
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <ContactUs />
              </motion.div>
            } />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  );
}

export default App;