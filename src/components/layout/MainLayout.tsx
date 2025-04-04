
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion } from 'framer-motion';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-cyber-darker via-cyber-dark to-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 cyber-grid opacity-20 z-0"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-cyber-purple/20 rounded-full filter blur-3xl z-0"></div>
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyber-blue/20 rounded-full filter blur-3xl z-0"></div>
      
      <Navbar />
      <motion.main 
        className="flex-grow relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
};

export default MainLayout;
