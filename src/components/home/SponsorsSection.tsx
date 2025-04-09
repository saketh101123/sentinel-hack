
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const sponsors = [
  { name: 'TechGiant', level: 'Platinum', image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=200&h=100&auto=format&fit=crop&q=80' },
  { name: 'QuantumSoft', level: 'Gold', image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=200&h=100&auto=format&fit=crop&q=80' },
  { name: 'CyberSystems', level: 'Gold', image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=200&h=100&auto=format&fit=crop&q=80' },
  { name: 'Datarithm', level: 'Silver', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=100&auto=format&fit=crop&q=80' },
  { name: 'InnovateLabs', level: 'Silver', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=200&h=100&auto=format&fit=crop&q=80' },
  { name: 'NexGen', level: 'Bronze', image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=200&h=100&auto=format&fit=crop&q=80' },
  { name: 'ByteCraft', level: 'Bronze', image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=200&h=100&auto=format&fit=crop&q=80' },
  { name: 'CloudPeak', level: 'Bronze', image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=200&h=100&auto=format&fit=crop&q=80' },
];

const SponsorsSection = () => {
  return (
    <section id="sponsors" className="py-12 sm:py-16 md:py-20 relative">
      <div className="absolute inset-0 z-0 cyber-grid opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-cyber mb-3 sm:mb-4 md:mb-6">
            OUR <span className="neon-text-red">SPONSORS</span>
          </h2>
          <p className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-gray-300">
            Sentinel Hack 5.0 is proudly supported by leading tech companies and organizations committed to fostering innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="flex flex-col items-center justify-center rounded-lg overflow-hidden border border-white/10 hover:border-neon-red/50 transition-all duration-300"
            >
              <Card className="w-full h-full bg-transparent border-0">
                <CardContent className="p-0">
                  <div className="flex flex-col items-center">
                    <div className="w-full h-16 sm:h-20 md:h-24 mb-2 bg-black/20 overflow-hidden">
                      <img 
                        src={sponsor.image} 
                        alt={`${sponsor.name} logo`} 
                        className="w-full h-full object-cover object-center" 
                      />
                    </div>
                    <div className="p-3 text-center">
                      <span className="text-sm sm:text-base md:text-xl font-cyber">{sponsor.name}</span>
                      <span className="block text-xs mt-1 md:mt-2 text-gray-400">{sponsor.level} Sponsor</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-6 sm:mt-8 md:mt-16"
        >
          <a 
            href="https://forms.google.com/sponsor-sentinel-hack" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-cyber inline-flex items-center border border-neon-red px-4 py-2 sm:px-6 sm:py-3 rounded hover:shadow-neon-red transition-all duration-300 text-xs sm:text-sm md:text-base"
          >
            Become a Sponsor
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
