
import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-20 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-cyber mb-4 md:mb-6">
              ABOUT <span className="neon-text-red">SENTINEL HACK 5.0</span>
            </h2>
            <p className="text-base md:text-lg text-gray-300 mb-6">
              Sentinel Hack 5.0 is a premier 24-hour state level hackathon designed to bring together the brightest minds
              and innovative thinkers. Taking place on April 28-29, 2025, this event offers participants
              the chance to collaborate, create, and solve real-world challenges through technology.
            </p>
            <p className="text-base md:text-lg text-gray-300 mb-6">
              With mentorship from industry experts, workshops on cutting-edge technologies, and 
              opportunities to network with tech leaders, Sentinel Hack 5.0 is the perfect platform to showcase
              your skills and push the boundaries of what's possible.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 mt-8">
              <div className="glassmorphism p-4 text-center border border-white/10">
                <div className="text-2xl md:text-3xl font-cyber neon-text-blue mb-1">500+</div>
                <div className="text-xs md:text-sm text-gray-400">PARTICIPANTS</div>
              </div>
              <div className="glassmorphism p-4 text-center border border-white/10">
                <div className="text-2xl md:text-3xl font-cyber neon-text-red mb-1">24</div>
                <div className="text-xs md:text-sm text-gray-400">HOURS</div>
              </div>
              <div className="glassmorphism p-4 text-center border border-white/10">
                <div className="text-2xl md:text-3xl font-cyber neon-text-blue mb-1">₹50K+</div>
                <div className="text-xs md:text-sm text-gray-400">PRIZES</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glassmorphism p-4 md:p-6 border border-white/10 rounded-lg"
          >
            <div className="aspect-w-16 aspect-h-9 mb-6">
              <div className="w-full h-full bg-cyber-dark/50 flex items-center justify-center">
                <div className="text-center p-4">
                  <span className="text-xl md:text-2xl font-cyber neon-text-blue">SENTINEL HACK</span>
                  <p className="text-sm md:text-base mt-2 text-gray-300">
                    Video coming soon
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-cyber-red flex items-center justify-center mr-4">
                  <span className="text-xl">📅</span>
                </div>
                <div>
                  <h3 className="font-cyber text-base md:text-lg">Date & Time</h3>
                  <p className="text-sm md:text-base text-gray-300">April 28-29, 2025 • 09:00 AM - 09:00 AM</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-neon-blue flex items-center justify-center mr-4">
                  <span className="text-xl">📍</span>
                </div>
                <div>
                  <h3 className="font-cyber text-base md:text-lg">Venue</h3>
                  <p className="text-sm md:text-base text-gray-300">Innovation Hub, Tech University Campus</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-cyber-red flex items-center justify-center mr-4">
                  <span className="text-xl">👥</span>
                </div>
                <div>
                  <h3 className="font-cyber text-base md:text-lg">Team Size</h3>
                  <p className="text-sm md:text-base text-gray-300">2-4 members per team</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
