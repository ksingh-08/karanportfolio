"use client";

import React from "react";
import { motion } from "framer-motion";
import BackgroundEffect from "./ui/BackgroundEffect";
import {
  FaGithub,
  FaLinkedin,
  FaCode,
  FaBehance,
  FaLaptopCode,
} from "react-icons/fa";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiOpenai,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
} from "react-icons/si";
import { TypewriterEffect } from "./ui/TypewriterEffect";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

import { HeroHighlight, Highlight } from "./ui/hero-highlight";

const Hero = () => {
  const words = [
    { text: "Hi, " },
    { text: "I'm " },
    { text: "Karan ", className: "text-purple-500" },
    { text: "Singh" },
  ];

  const techStack = [
    // { icon: <SiJavascript className="text-yellow-400" />, name: "JavaScript" },
    { icon: <SiTypescript className="text-blue-400" />, name: "TypeScript" },
    { icon: <SiReact className="text-cyan-400" />, name: "React.js" },
    { icon: <SiNextdotjs className="text-white" />, name: "Next.js" },
    // { icon: <SiNodedotjs className="text-green-500" />, name: "Node.js" },
    { icon: <SiExpress className="text-gray-300" />, name: "Express.js" },
    { icon: <SiTailwindcss className="text-cyan-300" />, name: "TailwindCSS" },
    // { icon: <SiMongodb className="text-green-400" />, name: "MongoDB" },
    { icon: <SiPostgresql className="text-blue-300" />, name: "PostgreSQL" },
    { icon: <SiOpenai className="text-gray-300" />, name: "OpenAI" },
    // { icon: <SiFirebase className="text-orange-400" />, name: "Firebase" },
  ];

  return (
    <BackgroundEffect 
      variant="gradient" 
      intensity="medium" 
      showSparkles={true}
      showFloatingIcons={true}
      className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden"
    >

      <div className="z-10 flex flex-col items-center text-center px-4 max-w-4xl">
        {/* Animated Badges */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {["Full-Stack Developer", "Gen-AI Developer"].map((badge, i) => (
            <motion.div
              key={badge}
              className="bg-gray-900/80 border border-purple-500/30 rounded-full px-4 py-1 text-sm font-medium text-gray-200"
              whileHover={{ scale: 1.05 }}
              transition={{ delay: i * 0.2 }}
            >
              {badge}
            </motion.div>
          ))}
        </motion.div>

        {/* Typewriter Name */}
        <TypewriterEffect
          words={words}
          className="text-5xl sm:text-6xl font-bold mb-4"
        />
        {/* Tagline */}
        {/* <h2 className="text-lg md:text-2xl font-medium text-gray-300">
          Building <span className="text-purple-500">real-time</span>, <span className="text-blue-400">AI-powered</span> digital experiences
        </h2> */}

        {/* Short Intro */}

        {/* Project Highlights
        <div className="mt-6 text-sm text-gray-400">
          <p>Featured Projects: <span className="text-white font-medium">LeetCode Coach</span>, <span className="text-white font-medium">ThinkFlow</span>, <span className="text-white font-medium">Blog App</span></p>
        </div> */}
        <div className="max-w-xl mt-4">
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: [20, -5, 0],
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="text-lg font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
          >
            <Highlight className="text-black dark:text-white">
              Full-Stack and Gen-AI Developer |{" "}
            </Highlight>
            Expertise in crafting serverless apps, real-time collaboration
            platforms, and AI-driven solutions
          </motion.h1>
        </div>
        {/* Tech Stack */}
        <div className="w-full mt-8">
          <h3 className="text-sm font-semibold text-gray-400 mb-4">
            Tech Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, i) => (
              <motion.div
                key={tech.name}
                className="flex items-center gap-2 bg-gray-900/50 backdrop-blur-sm px-3 py-2 rounded-full border border-gray-800 hover:border-purple-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 + i * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                {tech.icon}
                <span className="text-xs">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-5 mt-10">
          <motion.a
            href="#projects"
            className="relative group overflow-hidden w-44 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 via-blue-600 to-purple-600 bg-size-200 bg-pos-0 px-8 py-3 font-medium text-white shadow-md transition-all duration-500 hover:bg-pos-100 hover:shadow-lg hover:shadow-purple-500/20"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <span className="absolute inset-0 flex items-center justify-center">View Projects</span>
            <span className="absolute right-4 opacity-0 transition-all duration-300 group-hover:opacity-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </span>
          </motion.a>
          <motion.a
            href="#contact"
            className="relative group overflow-hidden w-44 h-12 flex items-center justify-center rounded-xl bg-transparent border border-gray-700 px-8 py-3 font-medium text-white backdrop-blur-sm transition-all duration-500 hover:border-purple-500 hover:bg-black/20 hover:shadow-lg hover:shadow-purple-500/10"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <span className="absolute inset-0 flex items-center justify-center">Let's Talk</span>
            <span className="absolute right-4 opacity-0 transition-all duration-300 group-hover:opacity-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </span>
          </motion.a>
        </div>

        {/* Social Links */}
        <motion.div
          className="flex gap-4 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.a
            href="https://github.com/ksingh-08"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800/50 hover:bg-gray-700 p-3 rounded-full border border-gray-700 hover:border-purple-500"
            whileHover={{ scale: 1.1 }}
          >
            <FaGithub className="text-xl" />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/karan-singh-774ba1227"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800/50 hover:bg-gray-700 p-3 rounded-full border border-gray-700 hover:border-blue-500"
            whileHover={{ scale: 1.1 }}
          >
            <FaLinkedin className="text-xl" />
          </motion.a>
          <motion.a
            href="https://leetcode.com/u/KSingh08/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800/50 hover:bg-gray-700 p-3 rounded-full border border-gray-700 hover:border-green-500"
            whileHover={{ scale: 1.1 }}
          >
            <FaLaptopCode className="text-xl" />
          </motion.a>
          <motion.a
            href="https://www.behance.net/gallery/203812557/Vivacity24-Fest-Branding"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800/50 hover:bg-gray-700 p-3 rounded-full border border-gray-700 hover:border-pink-500"
            whileHover={{ scale: 1.1 }}
          >
            <FaBehance className="text-xl" />
          </motion.a>
        </motion.div>
      </div>
    </BackgroundEffect>
  );
};

export default Hero;
