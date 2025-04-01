
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
    <section className="py-20 relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-cyber mb-6">
            <span className="neon-text-blue">HACKATHON</span> TRACKS
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-300">
            Choose from our cutting-edge tracks and showcase your skills in the tech domain that excites you the most.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tracks.map((track, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glassmorphism p-6 rounded-lg border border-white/10 hover:border-neon-blue/50 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{track.icon}</div>
              <h3 className={`text-xl font-cyber mb-3 text-${track.color}`}>{track.title}</h3>
              <p className="text-gray-300 mb-4">{track.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-12"
        >
          <Link
            to="/tracks"
            className="font-cyber inline-flex items-center border border-neon-blue px-6 py-3 rounded hover:shadow-neon-blue transition-all duration-300"
          >
            Explore All Tracks
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 ml-2" 
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
