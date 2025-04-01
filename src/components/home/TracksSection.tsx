
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const tracks = [
  {
    title: 'Artificial Intelligence',
    description: 'Develop AI solutions that address real-world challenges in healthcare, education, or environmental sustainability.',
    icon: '🤖',
    color: 'neon-red'
  },
  {
    title: 'Blockchain Revolution',
    description: 'Create decentralized applications with blockchain technology that redefine financial systems, supply chains, or digital identity.',
    icon: '⛓️',
    color: 'neon-blue'
  },
  {
    title: 'Cybersecurity Defense',
    description: 'Build tools or systems that enhance digital security, protect privacy, or combat emerging cyber threats.',
    icon: '🔒',
    color: 'neon-purple'
  },
  {
    title: 'Augmented Reality',
    description: 'Design immersive AR experiences that transform education, shopping, entertainment, or workplace collaboration.',
    icon: '👓',
    color: 'neon-red'
  }
];

const TracksSection = () => {
  return (
    <section id="tracks" className="py-12 sm:py-16 md:py-20 relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-cyber mb-3 sm:mb-4 md:mb-6">
            <span className="neon-text-blue">HACKATHON</span> TRACKS
          </h2>
          <p className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-gray-300">
            Choose from our cutting-edge tracks and showcase your skills in the tech domain that excites you the most.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {tracks.map((track, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glassmorphism p-4 sm:p-5 md:p-6 rounded-lg border border-white/10 hover:border-neon-blue/50 transition-all duration-300"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3 md:mb-4">{track.icon}</div>
              <h3 className={`text-base sm:text-lg md:text-xl font-cyber mb-1 sm:mb-2 md:mb-3 text-${track.color}`}>{track.title}</h3>
              <p className="text-gray-300 text-xs sm:text-sm md:text-base">{track.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-6 sm:mt-8 md:mt-12"
        >
          <Link
            to="/tracks"
            className="font-cyber inline-flex items-center border border-neon-blue px-4 py-2 sm:px-6 sm:py-3 rounded hover:shadow-neon-blue transition-all duration-300 text-xs sm:text-sm md:text-base"
          >
            Explore All Tracks
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-3 w-3 sm:h-4 sm:w-4 ml-2" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 5l7 7-7 7" 
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default TracksSection;
