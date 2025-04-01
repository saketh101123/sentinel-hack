
import React, { useState } from 'react';
import MainLayout from '../components/layout/MainLayout';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

type FormData = {
  name: string;
  email: string;
  teamName: string;
  teamSize: string;
  track: string;
  experience: string;
  github: string;
  about: string;
};

const initialFormData: FormData = {
  name: '',
  email: '',
  teamName: '',
  teamSize: '1',
  track: '',
  experience: '',
  github: '',
  about: ''
};

const Register = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success('Registration submitted successfully!');
      setFormData(initialFormData);
      setSubmitting(false);
    }, 1500);
  };

  return (
    <MainLayout>
      <section className="pt-28 pb-16 min-h-screen">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4"
        >
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-cyber mb-4">
                <span className="neon-text-red">REGISTER</span> FOR CYBERHACK
              </h1>
              <p className="text-gray-300">
                Join the revolution. Secure your spot in the most innovative hackathon of the year.
              </p>
            </div>

            <div className="glassmorphism border border-white/10 rounded-lg p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div>
                  <h2 className="text-xl font-cyber mb-4 neon-text-blue">Personal Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full glassmorphism bg-black/20 border border-white/20 rounded px-4 py-2 focus:border-neon-red focus:outline-none focus:ring-1 focus:ring-neon-red"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full glassmorphism bg-black/20 border border-white/20 rounded px-4 py-2 focus:border-neon-red focus:outline-none focus:ring-1 focus:ring-neon-red"
                      />
                    </div>
                  </div>
                </div>

                {/* Team Information */}
                <div>
                  <h2 className="text-xl font-cyber mb-4 neon-text-blue">Team Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="teamName" className="block text-sm font-medium mb-1">
                        Team Name *
                      </label>
                      <input
                        type="text"
                        id="teamName"
                        name="teamName"
                        required
                        value={formData.teamName}
                        onChange={handleChange}
                        className="w-full glassmorphism bg-black/20 border border-white/20 rounded px-4 py-2 focus:border-neon-red focus:outline-none focus:ring-1 focus:ring-neon-red"
                      />
                    </div>
                    <div>
                      <label htmlFor="teamSize" className="block text-sm font-medium mb-1">
                        Team Size *
                      </label>
                      <select
                        id="teamSize"
                        name="teamSize"
                        required
                        value={formData.teamSize}
                        onChange={handleChange}
                        className="w-full glassmorphism bg-black/20 border border-white/20 rounded px-4 py-2 focus:border-neon-red focus:outline-none focus:ring-1 focus:ring-neon-red"
                      >
                        <option value="1">Solo (1 person)</option>
                        <option value="2">2 people</option>
                        <option value="3">3 people</option>
                        <option value="4">4 people</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Hackathon Details */}
                <div>
                  <h2 className="text-xl font-cyber mb-4 neon-text-blue">Hackathon Details</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="track" className="block text-sm font-medium mb-1">
                        Preferred Track *
                      </label>
                      <select
                        id="track"
                        name="track"
                        required
                        value={formData.track}
                        onChange={handleChange}
                        className="w-full glassmorphism bg-black/20 border border-white/20 rounded px-4 py-2 focus:border-neon-red focus:outline-none focus:ring-1 focus:ring-neon-red"
                      >
                        <option value="">Select a track</option>
                        <option value="ai">Artificial Intelligence</option>
                        <option value="blockchain">Blockchain Revolution</option>
                        <option value="cybersecurity">Cybersecurity Defense</option>
                        <option value="ar">Augmented Reality</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="experience" className="block text-sm font-medium mb-1">
                        Coding Experience *
                      </label>
                      <select
                        id="experience"
                        name="experience"
                        required
                        value={formData.experience}
                        onChange={handleChange}
                        className="w-full glassmorphism bg-black/20 border border-white/20 rounded px-4 py-2 focus:border-neon-red focus:outline-none focus:ring-1 focus:ring-neon-red"
                      >
                        <option value="">Select your experience</option>
                        <option value="beginner">Beginner (0-1 years)</option>
                        <option value="intermediate">Intermediate (1-3 years)</option>
                        <option value="advanced">Advanced (3-5 years)</option>
                        <option value="expert">Expert (5+ years)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div>
                  <h2 className="text-xl font-cyber mb-4 neon-text-blue">Additional Information</h2>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="github" className="block text-sm font-medium mb-1">
                        GitHub/Portfolio URL
                      </label>
                      <input
                        type="url"
                        id="github"
                        name="github"
                        value={formData.github}
                        onChange={handleChange}
                        className="w-full glassmorphism bg-black/20 border border-white/20 rounded px-4 py-2 focus:border-neon-red focus:outline-none focus:ring-1 focus:ring-neon-red"
                      />
                    </div>
                    <div>
                      <label htmlFor="about" className="block text-sm font-medium mb-1">
                        Why do you want to participate?
                      </label>
                      <textarea
                        id="about"
                        name="about"
                        rows={4}
                        value={formData.about}
                        onChange={handleChange}
                        className="w-full glassmorphism bg-black/20 border border-white/20 rounded px-4 py-2 focus:border-neon-red focus:outline-none focus:ring-1 focus:ring-neon-red"
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={submitting}
                    className={`w-full font-cyber bg-cyber-red px-6 py-3 rounded clip-slant hover:shadow-neon-red transition-all duration-300 flex items-center justify-center ${
                      submitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {submitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      'SUBMIT REGISTRATION'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </section>
    </MainLayout>
  );
};

export default Register;
