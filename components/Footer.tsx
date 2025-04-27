"use client";
import React, { useState } from "react";
import MagicButton from "./ui/MagicButton";
import {
  FaLocationArrow,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaPhone,
} from "react-icons/fa";
import { socialMedia } from "@/data";
import BackgroundEffect from "./ui/BackgroundEffect";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Footer = () => {
  const [isHovered, setIsHovered] = useState<string | null>(null);

  const handleSocialMediaClick = (url: string) => {
    window.open(url, "_blank");
  };

  const contactInfo = [
    {
      id: "email",
      icon: <FaEnvelope />,
      title: "Email",
      value: "mailtoksingh08@gmail.com",
      url: "mailto:mailtoksingh08@gmail.com",
    },
    {
      id: "phone",
      icon: <FaPhone />,
      title: "Phone",
      value: "+91 8619665396",
      url: "tel:+918619665396",
    },
    {
      id: "linkedin",
      icon: <FaLinkedin />,
      title: "LinkedIn",
      value: "https://www.linkedin.com/in/karan-singh/",
      url: "https://linkedin.com/in/karan-singh-774ba1227",
    },
    {
      id: "github",
      icon: <FaGithub />,
      title: "GitHub",
      value: "https://github.com/ksingh-08",
      url: "https://github.com/ksingh-08",
    },
  ];

  return (
    <BackgroundEffect
      variant="gradient"
      intensity="medium"
      showSparkles={true}
      showFloatingIcons={true}
      className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden"
    >
      <footer className="w-full relative pb-16 md:pb-10" id="contact">
        {/* Animated background gradient */}
        <div className="absolute inset-0  blur-xl opacity-30 animate-pulse"></div>

        {/* Content container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          {/* Purple accent line */}

          
          
          <div className="flex flex-col justify-center items-center">
          <h3 className="text-5xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-pink-200">
            Contact Me
          </h3>
          <div className="max-w-3xl pb-8 text-center mx-auto text-xl justify-center text-gray-300">
            <TextGenerateEffect
              words=" I'm currently looking for new opportunities. Whether you have a
              question or just want to say hi, I'll try my best to get back to
              you!"
              className="text-xl justify-center text-gray-300"
            />
          </div>

            {/* Contact cards grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-3xl mb-10">
              {contactInfo.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  className="flex items-center gap-3 p-4 rounded-lg backdrop-filter backdrop-blur-md bg-black-200/40 border border-black-300 hover:border-purple/40 transition-all duration-300 group"
                  onMouseEnter={() => setIsHovered(item.id)}
                  onMouseLeave={() => setIsHovered(null)}
                >
                  <div
                    className={`p-3 rounded-full ${
                      isHovered === item.id
                        ? "bg-purple text-white"
                        : "bg-black-300 text-gray-400"
                    } transition-all duration-300`}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">{item.title}</p>
                    <p className="text-white-200 font-medium">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <a href="mailto:mailtoksingh08@gmail.com">
              <MagicButton
                title="Let's get in touch"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>

            {/* Social media and copyright section */}
            <div className="flex mt-16 flex-col justify-between items-center">
              <p className="md:text-base text-sm md:font-normal font-light text-white-200/80">
                Copyright © 2025 Karan Singh. All rights reserved.
              </p>

              <div className="flex items-center gap-4 mt-6">
                {socialMedia.map((profile) => (
                  <div
                    key={profile.id}
                    className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg bg-black-200/70 rounded-lg border border-black-300 hover:border-purple/50 hover:scale-110 transition-all duration-300"
                    onClick={() => handleSocialMediaClick(profile.url)}
                  >
                    <img
                      src={profile.img}
                      alt={`Social media icon ${profile.id}`}
                      width={20}
                      height={20}
                      className="opacity-75 hover:opacity-100 transition-opacity"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom navigation */}
            <div className="mt-12 flex gap-6 text-sm text-white-200/60">
              <a href="/" className="hover:text-purple transition-colors">
                Home
              </a>
              <a href="#about" className="hover:text-purple transition-colors">
                About
              </a>
              <a
                href="#projects"
                className="hover:text-purple transition-colors"
              >
                Projects
              </a>
              <a
                href="/#contact"
                className="hover:text-purple transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </BackgroundEffect>
  );
};

export default Footer;
