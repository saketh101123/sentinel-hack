
import React from 'react';
import { motion } from 'framer-motion';

const sponsors = [
  { name: 'TechGiant', level: 'Platinum' },
  { name: 'QuantumSoft', level: 'Gold' },
  { name: 'CyberSystems', level: 'Gold' },
  { name: 'Datarithm', level: 'Silver' },
  { name: 'InnovateLabs', level: 'Silver' },
  { name: 'NexGen', level: 'Bronze' },
  { name: 'ByteCraft', level: 'Bronze' },
  { name: 'CloudPeak', level: 'Bronze' },
];

const SponsorsSection = () => {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 z-0 cyber-grid opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-cyber mb-6">
            OUR <span className="neon-text-red">SPONSORS</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-300">
            CyberHack is proudly supported by leading tech companies and organizations committed to fostering innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="glassmorphism flex flex-col items-center justify-center p-6 h-32 rounded-lg border border-white/10 hover:border-neon-red/50 transition-all duration-300"
            >
              <span className="text-xl font-cyber">{sponsor.name}</span>
              <span className="text-xs mt-2 text-gray-400">{sponsor.level} Sponsor</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <a 
            href="#" 
            className="font-cyber inline-flex items-center border border-neon-red px-6 py-3 rounded hover:shadow-neon-red transition-all duration-300"
          >
            Become a Sponsor
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
                d="M17 8l4 4m0 0l-4 4m4-4H3" 
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default SponsorsSection;
