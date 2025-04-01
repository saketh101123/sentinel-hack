
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import CountdownTimer from './CountdownTimer';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

// Set the hackathon date - April 28-29, 2025
const hackathonDate = new Date('2025-04-28T09:00:00');

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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-16 pb-10">
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
            className="mb-6 sm:mb-8"
          >
            <h1 
              className={`text-3xl sm:text-5xl md:text-7xl font-cyber font-black mb-3 sm:mb-4 ${glitching ? 'glitch' : ''}`}
              data-text="SENTINEL HACK 5.0"
            >
              <span className="neon-text-red">SENTINEL</span> 
              <span className="neon-text-blue">HACK</span> 
              <span className="text-white">5.0</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-4 sm:mb-6 text-gray-300 px-2">
              24-hour state level hackathon on April 28-29, 2025. Redefine the future through code.
            </p>
            <CountdownTimer targetDate={hackathonDate} />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 mt-6 sm:mt-8"
          >
            <a 
              href="https://forms.google.com/register-sentinel-hack" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-cyber bg-cyber-red px-6 sm:px-8 py-3 rounded clip-slant hover:shadow-neon-red transition-all duration-300 text-sm sm:text-lg uppercase tracking-wider"
            >
              Register Now
            </a>
            <button 
              onClick={() => scrollToSection('tracks')}
              className="font-cyber border border-neon-blue px-6 sm:px-8 py-3 rounded clip-slant hover:shadow-neon-blue transition-all duration-300 text-sm sm:text-lg uppercase tracking-wider"
            >
              Explore Tracks
            </button>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <motion.button 
          onClick={() => scrollToSection('about')}
          animate={{ y: [0, 10, 0] }} 
          transition={{ 
            repeat: Infinity, 
            duration: 1.5 
          }}
          className="cursor-pointer bg-transparent border-none text-neon-blue hover:text-neon-red transition-colors duration-300"
          aria-label="Scroll down"
        >
          <ChevronDown size={30} strokeWidth={2.5} />
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;
