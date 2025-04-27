"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

export function HeroCard() {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left;
    const y = e.clientY - box.top;
    const centerX = box.width / 2;
    const centerY = box.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
  };

  return (
    <motion.div
      className="relative w-full max-w-sm h-[400px] rounded-xl p-6 cursor-pointer"
      style={{
        transformStyle: "preserve-3d",
        transform: isHovered
          ? `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1.05, 1.05, 1.05)`
          : "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
        transition: "all 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        className={cn(
          "absolute inset-0 rounded-xl bg-gradient-to-br from-purple-600 via-blue-500 to-blue-400 p-px",
          isHovered ? "opacity-100" : "opacity-80"
        )}
        style={{
          transformStyle: "preserve-3d",
          transform: "translateZ(-1px)",
        }}
      >
        <div className="absolute inset-0 rounded-xl bg-black/80 backdrop-blur-xl" />
      </div>

      <div
        className="h-full w-full rounded-xl flex flex-col justify-between"
        style={{
          transformStyle: "preserve-3d",
          transform: "translateZ(20px)",
        }}
      >
        <div className="relative">
          <div className="text-white font-bold text-xl mb-2">Karan Singh</div>
          <div className="text-blue-300 text-sm">Full-Stack Developer</div>
          <div className="text-blue-300 text-sm">Post-Production Specialist</div>
          
          <div className="mt-6 space-y-2">
            <div className="bg-white/10 p-3 rounded-lg">
              <div className="text-white/70 text-xs uppercase tracking-wider mb-1">Skills</div>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "Node.js", "MongoDB", "Tailwind"].map((skill) => (
                  <span key={skill} className="text-xs bg-white/20 text-white px-2 py-1 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-white/10 p-3 rounded-lg">
              <div className="text-white/70 text-xs uppercase tracking-wider mb-1">Experience</div>
              <div className="text-white text-sm">
                Creative Head at Vivacity, LNMIIT
              </div>
              <div className="text-white text-sm">
                Core Member at TedxLNMIIT
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-auto">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-center py-2 rounded-lg text-sm font-medium">
            Available for Freelance Work
          </div>
        </div>
      </div>
      
      {/* Floating elements for 3D effect */}
      <div
        className="absolute top-10 right-10 w-20 h-20 rounded-full bg-purple-500/20 blur-xl"
        style={{
          transformStyle: "preserve-3d",
          transform: "translateZ(60px)",
        }}
      />
      <div
        className="absolute bottom-10 left-10 w-32 h-32 rounded-full bg-blue-500/20 blur-xl"
        style={{
          transformStyle: "preserve-3d",
          transform: "translateZ(80px)",
        }}
      />
    </motion.div>
  );
}
