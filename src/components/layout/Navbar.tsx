
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Schedule', path: '/schedule' },
  { name: 'Tracks', path: '/tracks' },
  { name: 'Sponsors', path: '/sponsors' },
  { name: 'FAQs', path: '/faqs' },
  { name: 'Contact', path: '/contact' },
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

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'glassmorphism py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <div className="flex items-center gap-2">
              <span className="font-cyber text-xl md:text-2xl font-bold neon-text-red">
                CYBER
              </span>
              <span className="font-cyber text-xl md:text-2xl font-bold neon-text-blue">
                HACK
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="font-cyber text-sm uppercase tracking-wider hover:text-neon-red transition-colors duration-300"
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/register"
              className="font-cyber text-sm uppercase tracking-wider ml-4 bg-cyber-red px-6 py-2 rounded clip-slant hover:shadow-neon-red transition-all duration-300"
            >
              Register
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
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
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="font-cyber text-sm uppercase tracking-wider py-2 hover:text-neon-red transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/register"
                className="font-cyber text-sm uppercase tracking-wider bg-cyber-red px-6 py-2 text-center rounded clip-slant hover:shadow-neon-red transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Register
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
