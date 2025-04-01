
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'Home', path: '/', id: 'home' },
  { name: 'About', path: '/#about', id: 'about' },
  { name: 'Tracks', path: '/#tracks', id: 'tracks' },
  { name: 'Sponsors', path: '/#sponsors', id: 'sponsors' },
  { name: 'FAQs', path: '/#faqs', id: 'faqs' },
  { name: 'Contact', path: '/#contact', id: 'contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'glassmorphism py-2' : 'bg-transparent py-3'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <div className="flex items-center gap-1 sm:gap-2">
              <span className="font-cyber text-base sm:text-xl md:text-2xl font-bold neon-text-red">
                SENTINEL
              </span>
              <span className="font-cyber text-base sm:text-xl md:text-2xl font-bold neon-text-blue">
                HACK
              </span>
              <span className="font-cyber text-base sm:text-xl md:text-2xl font-bold text-white">
                5.0
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2 lg:space-x-6">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.id)}
                className="font-cyber text-sm uppercase tracking-wider hover:text-neon-red transition-colors duration-300 px-1"
              >
                {item.name}
              </button>
            ))}
            <a
              href="https://forms.google.com/register-sentinel-hack"
              target="_blank" 
              rel="noopener noreferrer"
              className="font-cyber text-sm uppercase tracking-wider ml-1 bg-cyber-red px-3 lg:px-6 py-2 rounded clip-slant hover:shadow-neon-red transition-all duration-300"
            >
              Register
            </a>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glassmorphism absolute top-full left-0 w-full overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-3">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.id)}
                  className="font-cyber text-sm uppercase tracking-wider py-2 text-left hover:text-neon-red transition-colors duration-300"
                >
                  {item.name}
                </button>
              ))}
              <a
                href="https://forms.google.com/register-sentinel-hack"
                target="_blank" 
                rel="noopener noreferrer"
                className="font-cyber text-sm uppercase tracking-wider bg-cyber-red px-6 py-2 text-center rounded clip-slant hover:shadow-neon-red transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Register
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
