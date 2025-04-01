
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import CountdownTimer from './CountdownTimer';
import { Link } from 'react-router-dom';

// Set the hackathon date - change to your actual date
const hackathonDate = new Date('2023-12-31T09:00:00');

const HeroSection = () => {
  const [glitching, setGlitching] = useState(false);

  useEffect(() => {
    // Create random glitch effect
    const glitchInterval = setInterval(() => {
      setGlitching(true);
      setTimeout(() => setGlitching(false), 200);
    }, 5000);

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-16 pb-12">
      <div className="absolute inset-0 z-0 cyber-grid opacity-10"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.2,
              type: "spring",
              stiffness: 100
            }}
            className="mb-8"
          >
            <h1 
              className={`text-5xl md:text-7xl font-cyber font-black mb-4 ${glitching ? 'glitch' : ''}`}
              data-text="CYBER HACK 2023"
            >
              <span className="neon-text-red">CYBER</span> 
              <span className="neon-text-blue">HACK</span> 
              <span className="text-white">2023</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-6 text-gray-300">
              Redefine the future through code. 48 hours of innovation, collaboration, and breakthrough technologies.
            </p>
            <CountdownTimer targetDate={hackathonDate} />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 mt-8"
          >
            <Link 
              to="/register" 
              className="font-cyber bg-cyber-red px-8 py-3 rounded clip-slant hover:shadow-neon-red transition-all duration-300 text-lg uppercase tracking-wider"
            >
              Register Now
            </Link>
            <Link 
              to="/tracks" 
              className="font-cyber border border-neon-blue px-8 py-3 rounded clip-slant hover:shadow-neon-blue transition-all duration-300 text-lg uppercase tracking-wider"
            >
              Explore Tracks
            </Link>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <motion.div 
          animate={{ y: [0, -10, 0] }} 
          transition={{ 
            repeat: Infinity, 
            duration: 1.5 
          }}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="text-neon-red"
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <polyline points="19 12 12 19 5 12"></polyline>
          </svg>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
