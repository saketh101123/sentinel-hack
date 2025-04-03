
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion } from 'framer-motion';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Fixed background with the new red cyberpunk image */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-10" 
        style={{ 
          backgroundImage: "url('/lovable-uploads/425a63c2-009f-48e6-8d55-31ac4bfa49fa.png')", 
          backgroundAttachment: "fixed" 
        }}
      ></div>
      
      {/* Dark gradient overlay to make content more readable */}
      <div className="fixed inset-0 bg-black/40 -z-10"></div>
      
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
