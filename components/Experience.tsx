"use client";

import { workExperience } from '@/data';
import React from 'react';
import { motion } from 'framer-motion';
import { VerticalTimeline } from './ui/VerticalTimeline';
import { TracingBeam } from './ui/TracingBeam';

const Experience = () => {
  return (
    <div className='py-20 relative' id="testimonials">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-blue-900/5 to-black/0 pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-sm uppercase tracking-widest text-blue-400 mb-3">My Journey</h2>
        <h1 className='text-4xl md:text-5xl font-bold mb-4'>
          Professional
          <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500'>{' '}Background</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">A timeline of my professional experience and key milestones.</p>
      </motion.div>

      <TracingBeam className="px-6">
        <div className="max-w-5xl mx-auto">
          <VerticalTimeline items={workExperience} />
        </div>
      </TracingBeam>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center mt-16"
      >
        <a 
          href="#contact" 
          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300 font-medium"
        >
          Let's Work Together
        </a>
      </motion.div>
    </div>
  );
};

export default Experience;