"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

export const TracingBeam = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (ref.current) {
      const { left, top } = ref.current.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;
      setMousePosition({ x, y });
    }
  };

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      if (ref.current) {
        const { left, top } = ref.current.getBoundingClientRect();
        const x = ev.clientX - left;
        const y = ev.clientY - top;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn("relative", className)}
    >
      <motion.div
        className="absolute -inset-px rounded-md"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(120, 100, 255, 0.1), transparent 40%)`,
        }}
      />
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-purple-500 to-transparent"
        style={{
          opacity: isHovered ? 1 : 0,
          left: mousePosition.x,
          transition: "opacity 0.3s",
        }}
      />
      <motion.div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"
        style={{
          opacity: isHovered ? 1 : 0,
          top: mousePosition.y,
          transition: "opacity 0.3s",
        }}
      />
      <div className="relative">{children}</div>
    </motion.div>
  );
};
