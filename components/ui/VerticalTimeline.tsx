"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/utils/cn";

export const VerticalTimeline = ({
  items,
}: {
  items: {
    id: number;
    title: string;
    desc: string;
    thumbnail: string;
  }[];
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <div ref={containerRef} className="relative max-w-4xl mx-auto">
      {/* Vertical line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/30 via-blue-500/60 to-purple-500/30 transform -translate-x-1/2" />

      {items.map((item, index) => (
        <TimelineItem 
          key={item.id} 
          item={item} 
          index={index} 
          progress={scrollYProgress}
          total={items.length}
        />
      ))}
    </div>
  );
};

const TimelineItem = ({ 
  item, 
  index, 
  progress,
  total
}: { 
  item: { 
    id: number; 
    title: string; 
    desc: string; 
    thumbnail: string; 
  }; 
  index: number;
  progress: any;
  total: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  
  // Calculate the range for this item
  const start = index / total;
  const end = (index + 1) / total;
  
  // Transform the opacity and y position based on scroll
  const opacity = useTransform(
    progress,
    [start, start + 0.1, end - 0.1, end],
    [0.4, 1, 1, 0.4]
  );
  
  const y = useTransform(
    progress,
    [start, start + 0.1, end - 0.1, end],
    [60, 0, 0, 60]
  );

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y }}
      className={cn(
        "relative mb-16 md:mb-24",
        index % 2 === 0 ? "md:text-right" : "md:text-left"
      )}
    >
      {/* Circle on the timeline */}
      <div className="absolute left-1/2 top-0 w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 transform -translate-x-1/2 z-10" />
      
      {/* Content container */}
      <div className={cn(
        "flex flex-col md:flex-row items-center gap-6",
        index % 2 === 0 ? "md:flex-row-reverse" : ""
      )}>
        {/* Date/icon section */}
        <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center">
          <img 
            src={item.thumbnail} 
            alt={item.title} 
            className="w-full h-full object-contain"
          />
        </div>
        
        {/* Content section */}
        <div className={cn(
          "flex-1 p-6 rounded-xl bg-black/40 backdrop-blur-sm border border-white/10",
          "hover:border-purple-500/50 transition-all duration-300",
          "shadow-[0_0_15px_rgba(125,90,255,0.1)]"
        )}>
          <h3 className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-blue-300 mb-2">
            {item.title}
          </h3>
          <p className="text-gray-300 text-sm md:text-base">
            {item.desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
};
