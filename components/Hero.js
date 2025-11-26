"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaDownload, FaArrowDown, FaCode, FaRocket } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
    "AI/ML Engineer",
    "Full Stack Developer",
    "React Specialist",
    "MERN Stack Architect",
    "Problem Solver",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [roles]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const scrollToNext = () => {
    // Check if we're in the browser
    if (typeof document !== "undefined") {
      const skillsSection = document.querySelector("#skills");
      if (skillsSection) {
        skillsSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black pt-16"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/5 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-bounce-slow"></div>
      </div>

      {/* Floating Icons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute inset-0 pointer-events-none"
      >
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-24 left-4 md:top-20 md:left-10 text-white"
        >
          <FaCode className="text-2xl md:text-3xl" />
        </motion.div>
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute top-40 right-4 md:top-32 md:right-20 text-white"
        >
          <FaRocket className="text-xl md:text-2xl" />
        </motion.div>
        <motion.div
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-24 left-4 md:bottom-40 md:left-20 text-white"
        >
          <HiSparkles className="text-lg md:text-xl" />
        </motion.div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font text-gray-300 mb-6"
          >
            Hi, I'm{" "}
            <span className="gradient-text font-bold text-white">
              Vraj Patel
            </span>
          </motion.h1>

          {/* Dynamic Role */}
          <motion.div
            variants={itemVariants}
            className="mb-8 h-16 flex items-center justify-center"
          >
            <span className="text-2xl md:text-3xl lg:text-4xl text-gray-300">
              I'm a{" "}
              <motion.span
                key={currentRole}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="inline-block text-white font-semibold"
              >
                {roles[currentRole]}
              </motion.span>
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Bridging Full Stack development with intelligent systems. I leverage
            the MERN stack and expertise in AI/ML and Data Science to engineer
            dynamic, data-driven applications. Let's build the future, one smart
            application at a time!
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white hover:bg-gray-200 text-black px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 backdrop-blur-sm"
            >
              <FaRocket />
              View My Work
            </motion.a>
            <motion.a
              href="https://drive.google.com/uc?export=download&id=12X0FONY503sjIoBASmnQsXkuDOPzDrx-"
              download
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center gap-2 backdrop-blur-sm"
            >
              <FaDownload />
              Download Resume
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.button
            onClick={scrollToNext}
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-400 hover:text-white transition-colors duration-300"
            aria-label="Scroll to next section"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-sm font-medium">Scroll down</span>
              <FaArrowDown size={20} />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
