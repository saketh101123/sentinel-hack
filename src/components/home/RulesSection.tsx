
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Check, AlertTriangle } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const RulesSection = () => {
  const rules = [
    {
      id: 1,
      title: "Team Composition",
      description: "Teams must consist of 2-4 members. All team members must be enrolled in an accredited college or university.",
      icon: <Shield className="h-8 w-8 text-cyber-red" />,
      type: "requirement"
    },
    {
      id: 2,
      title: "Original Work",
      description: "All code must be written during the hackathon. The use of open-source libraries and frameworks is permitted, but pre-built projects are not allowed.",
      icon: <Check className="h-8 w-8 text-cyber-red" />,
      type: "requirement"
    },
    {
      id: 3,
      title: "Intellectual Property",
      description: "All projects created during the hackathon remain the intellectual property of the team that created them.",
      icon: <Check className="h-8 w-8 text-cyber-red" />,
      type: "requirement"
    },
    {
      id: 4,
      title: "Code of Conduct",
      description: "Participants must adhere to the event's code of conduct. Any form of harassment or discrimination will not be tolerated.",
      icon: <AlertTriangle className="h-8 w-8 text-white" />,
      type: "restriction"
    },
    {
      id: 5,
      title: "Submission Deadline",
      description: "All projects must be submitted by the official deadline. Late submissions will not be considered for judging.",
      icon: <AlertTriangle className="h-8 w-8 text-white" />,
      type: "restriction"
    }
  ];

  return (
    <section id="rules" className="py-16 md:py-24 relative">
      <div className="absolute inset-0 z-0 cyber-grid opacity-30"></div>
      <div className="container mx-auto px-4 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-cyber font-bold mb-4">
            <span className="neon-text-red">COMPETITION</span> <span className="text-white">RULES</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            To ensure fair play and maintain the integrity of the hackathon, all participants must adhere to the following rules and guidelines.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-black/30 border border-cyber-red/30 p-6 rounded-lg glassmorphism"
          >
            <h3 className="text-2xl font-cyber font-bold mb-6 neon-text-red">Requirements</h3>
            <div className="space-y-6">
              {rules.filter(rule => rule.type === "requirement").map((rule) => (
                <div key={rule.id} className="flex gap-4">
                  <div className="shrink-0 mt-1">
                    {rule.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-cyber mb-2">{rule.title}</h4>
                    <p className="text-gray-300">{rule.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-black/30 border border-cyber-red/30 p-6 rounded-lg glassmorphism"
          >
            <h3 className="text-2xl font-cyber font-bold mb-6 text-white">Restrictions</h3>
            <div className="space-y-6">
              {rules.filter(rule => rule.type === "restriction").map((rule) => (
                <div key={rule.id} className="flex gap-4">
                  <div className="shrink-0 mt-1">
                    {rule.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-cyber mb-2">{rule.title}</h4>
                    <p className="text-gray-300">{rule.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 p-6 rounded-lg bg-black/30 border border-cyber-red/10 glassmorphism"
        >
          <h3 className="text-2xl font-cyber font-bold mb-4 text-center">Note</h3>
          <p className="text-gray-300 text-center">
            Failure to comply with these rules may result in disqualification from the competition.
            The judges' decisions are final on all matters relating to the hackathon.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default RulesSection;
