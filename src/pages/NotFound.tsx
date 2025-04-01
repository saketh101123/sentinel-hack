
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import { motion } from 'framer-motion';

const NotFound = () => {
  const location = useLocation();

  React.useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <MainLayout>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen flex items-center justify-center py-16 px-4"
      >
        <div className="text-center max-w-xl">
          <h1 className="text-9xl font-cyber mb-6 glitch" data-text="404">
            <span className="neon-text-red">4</span>
            <span className="neon-text-blue">0</span>
            <span className="neon-text-red">4</span>
          </h1>
          <p className="text-2xl font-cyber mb-8">SYSTEM // MALFUNCTION</p>
          <p className="text-xl mb-8 text-gray-300">
            The page you are looking for has been deleted or doesn't exist in this reality.
          </p>
          <div className="inline-block border border-neon-red p-px">
            <Link 
              to="/" 
              className="font-cyber bg-cyber-red px-8 py-3 inline-block hover:shadow-neon-red transition-all duration-300 uppercase tracking-wider"
            >
              Return to Base
            </Link>
          </div>
        </div>
      </motion.div>
    </MainLayout>
  );
};

export default NotFound;
