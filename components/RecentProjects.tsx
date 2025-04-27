"use client";

import { projects } from '@/data';
import React, { useState } from 'react';
import { FaLocationArrow, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { BackgroundGradient } from './ui/background-gradient';
import { HoverBorderGradient } from './ui/InfiniteMovingCards';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import { SparklesCore } from './ui/sparkles';
import { cn } from '@/utils/cn';
import BackgroundEffect from './ui/BackgroundEffect';

// Define the shape of a project
interface Project {
  id: number;
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  link: string;
  liveLink?: string;
}

const RecentProjects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <div id="projects">
      <BackgroundEffect
        variant="blue"
        intensity="medium"
        showSparkles={true}
        showGrid={true}
        className='py-24 relative overflow-hidden'
      >
      
      {/* Section Header */}
      <div className="relative z-10">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-3">
            <div className="h-px w-8 bg-purple-400 mr-2"></div>
            <h2 className="text-sm uppercase tracking-widest text-purple-400">My Work</h2>
            <div className="h-px w-8 bg-purple-400 ml-2"></div>
          </div>
          
          <h1 className='text-4xl md:text-6xl font-bold mb-6'>
            <TextGenerateEffect words="Recent Projects" className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-500" />
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Explore my latest work showcasing full-stack development, AI integration, and modern UI design.
          </motion.p>
        </motion.div>
      </div>

      {/* Projects Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project: Project, index: number) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <BackgroundGradient
                className="rounded-[22px] p-0.5 bg-black"
                containerClassName="rounded-[22px]"
              >
                <div className="bg-black border border-white/[0.08] rounded-[20px] overflow-hidden h-full flex flex-col">
                  {/* Project Image with Hover Effect */}
                  <div className="relative w-full aspect-[16/9] overflow-hidden">
                    <img 
                      src={project.img} 
                      alt={project.title} 
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
                  </div>
                  
                  {/* Content Area */}
                  <div className="p-6 flex-1 flex flex-col">
                    {/* Technologies Icons */}
                    <div className="flex mb-4">
                      {project.iconLists.map((icon: string, idx: number) => (
                        <div 
                          key={idx} 
                          className="border border-white/[0.1] rounded-full bg-black/80 backdrop-blur-sm w-9 h-9 flex justify-center items-center" 
                          style={{transform: `translateX(-${idx * 8}px)`}}
                        >
                          <img src={icon} alt="technology" className="p-2" />
                        </div>
                      ))}
                    </div>
                    
                    {/* Project Title */}
                    <h3 className="font-bold text-2xl mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-blue-300">
                      {project.title}
                    </h3>
                    
                    {/* Project Description */}
                    <p className="text-gray-300 mb-6 flex-1">
                      {project.des}
                    </p>
                    
                    {/* Links */}
                    <div className="flex justify-between items-center mt-auto">
                      <HoverBorderGradient
                        as="a"
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-full text-white bg-black border-transparent flex items-center gap-2 group/link text-sm"
                        containerClassName="rounded-full"
                        duration={500}
                      >
                        <FaGithub className="text-lg" />
                        View Source
                        <FaLocationArrow className="text-xs transition-transform group-hover/link:translate-x-1" />
                      </HoverBorderGradient>
                      
                      {project.liveLink && (
                        <a 
                          href={project.liveLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-1 text-sm"
                        >
                          Live Demo
                          <FaLocationArrow className="text-xs transition-transform group-hover:translate-x-1" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </BackgroundGradient>
            </motion.div>
          ))}
        </div>
      </div>

      {/* More Projects Button */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
        className="text-center mt-20 relative z-10"
      >
        <HoverBorderGradient
          as="a"
          href="https://github.com/ksingh-08" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full text-lg font-medium"
          containerClassName="rounded-full"
          duration={500}
        >
          <FaGithub className="text-xl" />
          Explore More on GitHub
          <FaLocationArrow className="ml-1 transition-transform group-hover:translate-x-1" />
        </HoverBorderGradient>
      </motion.div>
      </BackgroundEffect>
    </div>
  );
};

export default RecentProjects;