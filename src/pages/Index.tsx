
import React, { useEffect } from 'react';
import MainLayout from '../components/layout/MainLayout';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import TracksSection from '../components/home/TracksSection';
import SponsorsSection from '../components/home/SponsorsSection';
import FAQSection from '../components/home/FAQSection';
import CtaSection from '../components/home/CtaSection';
import { motion } from 'framer-motion';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainLayout>
      <HeroSection />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <AboutSection />
        <TracksSection />
        <SponsorsSection />
        <FAQSection />
        <CtaSection />
      </motion.div>
    </MainLayout>
  );
};

export default Index;
