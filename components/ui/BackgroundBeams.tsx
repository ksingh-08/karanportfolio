"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/utils/cn";

export const BackgroundBeams = ({
  className,
}: {
  className?: string;
}) => {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setMousePosition({
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
        });
      }
    };

    const element = ref.current;
    if (element) {
      element.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (element) {
        element.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "h-full w-full bg-black flex items-center justify-center overflow-hidden rounded-md",
        className
      )}
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(100, 100, 255, 0.15), transparent 40%)`,
        }}
      />
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(160, 100, 255, 0.1), transparent 40%)`,
        }}
      />
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(100, 200, 255, 0.1), transparent 30%)`,
        }}
      />
    </div>
  );
};
