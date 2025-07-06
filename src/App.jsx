import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Dashboard from './components/Dashboard';
import CoWorkingSpaces from './components/CoWorkingSpaces';
import NomadFamilies from './components/NomadFamilies';
import RemoteWorkAssistant from './components/RemoteWorkAssistant';
import GlobalMap from './components/GlobalMap';
import Footer from './components/Footer';
import './App.css';

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
          </Routes>
        </AnimatePresence>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;