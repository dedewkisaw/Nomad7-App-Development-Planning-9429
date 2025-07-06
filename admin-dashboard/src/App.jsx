import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import UserManagement from './components/UserManagement';
import FamilySafety from './components/FamilySafety';
import Analytics from './components/Analytics';
import Messages from './components/Messages';
import Settings from './components/Settings';
import Login from './components/Login';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [currentPage, setCurrentPage] = useState('dashboard');

  useEffect(() => {
    // Check for existing authentication
    const adminToken = localStorage.getItem('nomad7_admin_token');
    const userData = localStorage.getItem('nomad7_admin_user');
    
    if (adminToken && userData) {
      setIsAuthenticated(true);
      setCurrentUser(JSON.parse(userData));
    }
  }, []);

  const handleLogin = (userData) => {
    setIsAuthenticated(true);
    setCurrentUser(userData);
    localStorage.setItem('nomad7_admin_token', userData.token);
    localStorage.setItem('nomad7_admin_user', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentUser(null);
    localStorage.removeItem('nomad7_admin_token');
    localStorage.removeItem('nomad7_admin_user');
  };

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  const pageVariants = {
    initial: { opacity: 0, x: 20 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: -20 }
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.3
  };

  return (
    <Router>
      <div className="min-h-screen bg-neu-bg font-inter flex">
        <Sidebar 
          isOpen={sidebarOpen} 
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        
        <div className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-16'}`}>
          <Header 
            user={currentUser}
            onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
            onLogout={handleLogout}
          />
          
          <main className="p-6">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Navigate to="/dashboard" replace />} />
                <Route path="/dashboard" element={
                  <motion.div
                    key="dashboard"
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}
                  >
                    <Dashboard />
                  </motion.div>
                } />
                <Route path="/users" element={
                  <motion.div
                    key="users"
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}
                  >
                    <UserManagement />
                  </motion.div>
                } />
                <Route path="/family-safety" element={
                  <motion.div
                    key="family-safety"
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}
                  >
                    <FamilySafety />
                  </motion.div>
                } />
                <Route path="/analytics" element={
                  <motion.div
                    key="analytics"
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}
                  >
                    <Analytics />
                  </motion.div>
                } />
                <Route path="/messages" element={
                  <motion.div
                    key="messages"
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}
                  >
                    <Messages />
                  </motion.div>
                } />
                <Route path="/settings" element={
                  <motion.div
                    key="settings"
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}
                  >
                    <Settings />
                  </motion.div>
                } />
              </Routes>
            </AnimatePresence>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;