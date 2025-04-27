"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import BackgroundEffect from './ui/BackgroundEffect';
import { TextGenerateEffect } from './ui/TextGenerateEffect';

const About = () => {
  return (
    <BackgroundEffect 
      variant="gradient" 
      intensity="medium" 
      showSparkles={true}
      showFloatingIcons={true}
      className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden"
    >
    <div id="about" className=" min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
         <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-20 bg-black/70 backdrop-blur-sm"
                  >
            
                    <h3 className="text-5xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-pink-200">
                      About Me
                    </h3>
                  </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="border border-gray-800 rounded-2xl p-8 bg-black/70 backdrop-blur-sm"
        >
          {/* Introduction */}
          <div className="mb-8">
            <p className="text-lg text-white">
              I'm <span className="font-semibold">Karan Singh</span>, a passionate Software Developer currently pursuing a B.Tech in <span className="text-purple-400">Computers and Communication Engineering</span> at The LNM Institute of Information Technology (LNMIIT).
              I specialize in building full-stack web applications, crafting real-time collaborative tools, and integrating AI-driven solutions.
            </p>
          </div>

          {/* Skills */}
          <div className="mb-8">
            <p className="text-lg text-white">
              My skillset includes <span className="text-purple-400">React.js</span>, <span className="text-purple-400">Next.js</span>, <span className="text-purple-400">Node.js</span>, <span className="text-purple-400">Express.js</span>, <span className="text-purple-400">Cloudflare Workers</span>, <span className="text-purple-400">PostgreSQL</span>, <span className="text-purple-400">Prisma ORM</span>, and modern UI libraries like <span className="text-purple-400">TailwindCSS</span> and <span className="text-purple-400">ShadCN</span>. 
              I also explore AI capabilities through <span className="text-purple-400">OpenAI</span>, <span className="text-purple-400">RAG</span>, and prompt engineering.
            </p>
          </div>

          {/* Experience */}
          <div className="mb-10">
            <p className="text-lg text-white">
              Beyond coding, I'm actively involved in leadership activities. As the <span className="text-purple-400">Creative Head</span> of Vivacity, LNMIIT’s Cultural Fest, I led a team of 20+ creatives, producing branding and media content that reached over 7 lakh views and 7k+ followers.
            </p>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">Education</h3>
            <div className="border-l-2 border-purple-500 pl-6">
              <h4 className="text-xl text-purple-400">The LNM Institute of Information Technology, Jaipur</h4>
              <p className="text-white mb-1">B.Tech in Computers and Communication Engineering</p>
              <p className="text-gray-400">2022 – 2026</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
    </BackgroundEffect>
  );
};

export default About;
