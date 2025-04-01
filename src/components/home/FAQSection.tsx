
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Who can participate in the hackathon?',
    answer: 'Sentinel Hack 5.0 is open to everyone - students, professionals, and hobbyists alike. All you need is a passion for technology and innovation. Teams can include up to 4 members.'
  },
  {
    question: 'What should I bring to the hackathon?',
    answer: "Participants should bring their own laptops, chargers, and any hardware they need for their projects. We'll provide the working space, internet, food, and beverages."
  },
  {
    question: 'Is there a registration fee?',
    answer: 'No, participation in Sentinel Hack 5.0 is completely free. All you need to do is register through our Google Form before the deadline.'
  },
  {
    question: 'Will there be prizes?',
    answer: 'Yes! We have a prize pool worth over $50,000, including cash prizes, tech gadgets, investment opportunities, and more for winners in different categories.'
  }
];

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-16 md:py-20 relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-cyber mb-4 md:mb-6">
            FREQUENTLY <span className="neon-text-blue">ASKED QUESTIONS</span>
          </h2>
          <p className="max-w-3xl mx-auto text-base md:text-lg text-gray-300">
            Everything you need to know about Sentinel Hack 5.0. Can't find the answer you're looking for? Contact our team.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full text-left glassmorphism p-4 md:p-5 rounded-lg border ${
                  activeIndex === index ? 'border-neon-blue' : 'border-white/10'
                } transition-all duration-300`}
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-cyber text-base md:text-lg pr-4">{faq.question}</h3>
                  <ChevronDown 
                    className={`h-5 w-5 transition-transform ${
                      activeIndex === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </div>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 text-gray-300 text-sm md:text-base"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-8 md:mt-12"
        >
          <Link
            to="/faqs"
            className="font-cyber inline-flex items-center border border-neon-blue px-4 md:px-6 py-2 md:py-3 rounded hover:shadow-neon-blue transition-all duration-300 text-sm md:text-base"
          >
            View All FAQs
            <ChevronDown className="h-4 w-4 ml-2 transform rotate-270" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
