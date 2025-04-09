
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Agriculture, Book, Medkit, Shield, Wallet, Bulb } from 'lucide-react';

const tracks = [
  {
    title: "Agriculture",
    subtitle: "Innovative Farming Solutions",
    description: "Develop solutions to enhance farming efficiency, sustainability, and productivity through technology.",
    icon: <Agriculture className="h-8 w-8 text-cyber-blue" />,
    color: 'neon-blue'
  },
  {
    title: "Education",
    subtitle: "EdTech & Learning",
    description: "Create platforms and tools that revolutionize how we learn and teach in the digital age.",
    icon: <Book className="h-8 w-8 text-cyber-green" />,
    color: 'neon-green'
  },
  {
    title: "Healthcare",
    subtitle: "Medical Innovations",
    description: "Build solutions that improve healthcare access, diagnosis, treatment, and patient monitoring.",
    icon: <Medkit className="h-8 w-8 text-cyber-red" />,
    color: 'neon-red'
  },
  {
    title: "CyberSecurity",
    subtitle: "Digital Defense",
    description: "Develop tools and systems to protect digital assets, privacy, and security in our connected world.",
    icon: <Shield className="h-8 w-8 text-cyber-purple" />,
    color: 'neon-purple'
  },
  {
    title: "FinTech",
    subtitle: "Financial Technologies",
    description: "Create innovative solutions for financial services, transactions, and economic inclusivity.",
    icon: <Wallet className="h-8 w-8 text-cyber-yellow" />,
    color: 'neon-yellow'
  },
  {
    title: "Open Innovation",
    subtitle: "Creative Solutions",
    description: "Showcase your creativity with solutions that don't fit into other categories but solve real problems.",
    icon: <Bulb className="h-8 w-8 text-cyber-blue" />,
    color: 'neon-blue'
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {tracks.map((track, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glassmorphism p-4 sm:p-5 md:p-6 rounded-lg border border-white/10 hover:border-neon-blue/50 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-3 sm:mb-4">{track.icon}</div>
                <h3 className={`text-lg sm:text-xl md:text-xl font-cyber mb-1 sm:mb-2 text-${track.color}`}>{track.title}</h3>
                <h4 className="text-sm sm:text-base text-gray-400 mb-2 sm:mb-3 italic">{track.subtitle}</h4>
                <p className="text-gray-300 text-xs sm:text-sm md:text-base">{track.description}</p>
              </div>
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
