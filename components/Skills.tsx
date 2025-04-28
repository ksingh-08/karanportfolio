"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/utils/cn';
import BackgroundEffect from './ui/BackgroundEffect';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import { SparklesCore } from './ui/sparkles';

// Updated skills data based on resume
const skills = [
  {
    id: 1,
    category: "Languages & Frameworks",
    technologies: [
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "Java" },
      { name: "Python" },
      { name: "C" },
      { name: "React.js" },
      { name: "Next.js" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "Hono" }
    ]
  },
  {
    id: 2,
    category: "Front-End & UI",
    technologies: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "TailwindCSS" },
      { name: "ShadCN" },
      { name: "Aceternity UI" },
      { name: "Responsive Design" },
      { name: "UI/UX Design" },
      { name: "Accessibility" }
    ]
  },
  {
    id: 3,
    category: "Database & Backend",
    technologies: [
      { name: "MongoDB" },
      { name: "MySQL" },
      { name: "PostgreSQL" },
      { name: "Prisma ORM" },
      { name: "RESTful APIs" },
      { name: "Serverless" }
    ]
  },
  {
    id: 4,
    category: "AI & Tools",
    technologies: [
      { name: "OpenAI" },
      { name: "Prompt Engineering" },
      { name: "RAG" },
      { name: "Gemini" },
      { name: "Fine Tuning" },
      { name: "Cursor" },
      { name: "Lovable" },
      { name: "Windsurf" },
      { name: "Bolt" }
    ]
  },
  {
    id: 5,
    category: "DevOps & Hosting",
    technologies: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Vercel" },
      { name: "Firebase" },
      { name: "Cloudflare Workers" },
      { name: "CI/CD" }
    ]
  },
  {
    id: 6,
    category: "CS Fundamentals",
    technologies: [
      { name: "OOP" },
      { name: "Design Patterns" },
      { name: "DSA" },
      { name: "Computer Networks" },
      { name: "Performance Optimization" },
      { name: "Clean Code" }
    ]
  }
];

// Define interfaces for the skill data
interface Technology {
  name: string;
}

interface SkillCardProps {
  category: string;
  skills: Technology[];
  index: number;
}

const SkillCard = ({ category, skills, index }: SkillCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl opacity-75 group-hover:opacity-100 blur-sm group-hover:blur transition duration-1000"></div>
      <div className="relative border border-purple-500/20 rounded-xl p-8 backdrop-blur-md bg-black/30 h-full transition-all duration-300 group-hover:transform group-hover:scale-[1.01]">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-xl opacity-20">
          {isHovered && (
            <SparklesCore
              id={`tsparticles-skill-${index}`}
              background="transparent"
              minSize={0.4}
              maxSize={1.0}
              particleDensity={40}
              className="w-full h-full"
              particleColor="#8B5CF6"
            />
          )}
        </div>
        
        <div className="relative z-10">
          <h4 className="text-2xl font-bold mb-6 text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-300 pb-2 border-b border-purple-500/30">
            {category}
          </h4>
          <div className="flex flex-wrap gap-3">
            {skills.map((tech, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05, duration: 0.3 }}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(139, 92, 246, 0.2)" }}
                className="px-4 py-2 rounded-full text-sm bg-black/40 text-white/90 border border-purple-500/30 hover:border-purple-400/60 hover:text-white transition-all duration-300 shadow-sm shadow-purple-500/20"
              >
                {tech.name}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

interface SkillProgressBarProps {
  skill: string;
  value: number;
  index: number;
}

const SkillProgressBar = ({ skill, value, index }: SkillProgressBarProps) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-white/90 font-medium">{skill}</span>
        <span className="text-purple-400 text-sm">{value}%</span>
      </div>
      <div className="h-2 w-full bg-black/40 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          transition={{ duration: 1, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="h-full rounded-full bg-gradient-to-r from-purple-600 to-pink-500"
        />
      </div>
    </div>
  );
};

const Skills = () => {
  const proficiencySkills = [
    { skill: "Front-End Development", value: 95 },
    { skill: "Back-End Engineering", value: 85 },
    { skill: "AI Integration", value: 90 },
    { skill: "System Architecture", value: 80 },
    { skill: "Problem Solving", value: 92 }
  ];

  return (
    <div id="skills">
      <BackgroundEffect
        variant="gradient"
        intensity="medium"
        showSparkles={true}
        className="py-28 relative overflow-hidden"
      >
        {/* Floating Orbs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-600/10 blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-indigo-600/10 blur-3xl"></div>
          <div className="absolute top-2/3 left-2/3 w-72 h-72 rounded-full bg-pink-600/10 blur-3xl"></div>
        </div>

        {/* Section Header */}
        <div className="relative z-10">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="flex items-center justify-center mb-3">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-400 mr-3"></div>
              <h2 className="text-sm uppercase tracking-widest text-purple-400 font-semibold">Core Expertise</h2>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-purple-400 ml-3"></div>
            </div>
            <h3 className="text-5xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-pink-200">
              Technical Skills
            </h3>
            <div className="max-w-3xl mx-auto text-xl text-gray-300">
              <TextGenerateEffect
                words="Leveraging cutting-edge technologies to build innovative and high-performance applications across the full development stack."
                className="text-xl text-gray-300"
              />
            </div>
          </motion.div>

          {/* Skills Categories */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((category, index) => (
                <SkillCard 
                  key={category.id}
                  category={category.category}
                  skills={category.technologies}
                  index={index}
                />
              ))}
            </div>
          </div>

          {/* Proficiency Bars Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto px-4 sm:px-6 mt-24"
          >
            {/* <div className="backdrop-blur-lg bg-black/30 rounded-2xl border border-purple-500/30 p-10 relative overflow-hidden">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl opacity-50 blur-xl"></div>
              
              <div className="relative z-10">
                <h4 className="text-2xl font-bold mb-8 text-white/90 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
                  Core Competencies
                </h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
                  {proficiencySkills.map((item, index) => (
                    <SkillProgressBar 
                      key={index}
                      skill={item.skill}
                      value={item.value}
                      index={index}
                    />
                  ))}
                </div>
              </div>
            </div> */}
          </motion.div>

          {/* Continuous Learning Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="max-w-7xl mx-auto px-4 sm:px-6 mt-24"
          >
            <div className="backdrop-blur-lg bg-black/30 rounded-2xl border border-purple-500/30 p-10 relative overflow-hidden">
              <div className="absolute inset-0 opacity-40">
                <SparklesCore
                  id="tsparticles-continuous-learning"
                  background="transparent"
                  minSize={0.6}
                  maxSize={1.4}
                  particleDensity={50}
                  className="w-full h-full"
                  particleColor="#8B5CF6"
                />
              </div>

              <div className="relative z-10">
                <h4 className="text-2xl font-bold mb-6 text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200 text-center">
                  Professional Growth
                </h4>
                <p className="text-gray-300 text-center max-w-3xl mx-auto text-lg mb-8">
                  I&apos;m passionate about continuous learning and staying at the forefront of technology trends. Currently exploring advanced state management techniques, serverless architectures, and integrating AI to enhance web application capabilities.
                </p>

                <div className="flex flex-wrap justify-center gap-4 mt-8">
                  {[
                    "Collaborative Development",
                    "Cross-platform Solutions",
                    "Microservices Architecture",
                    "Real-time Applications",
                    "Progressive Web Apps",
                    "API Design",
                    "Cloud Infrastructure",
                    "Testing & Automation"
                  ].map((skill, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(139, 92, 246, 0.2)" }}
                      transition={{ duration: 0.4, delay: index * 0.1, type: "spring" }}
                      viewport={{ once: true }}
                      className="px-5 py-2.5 rounded-full text-sm bg-black/40 text-white/90 border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 shadow-sm shadow-purple-500/20"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </BackgroundEffect>
    </div>
  );
};

export default Skills;