"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
  FaInstagram,
} from "react-icons/fa";
import { SiCredly, SiCoursera } from "react-icons/si";
import Link from "next/link";

const Navbar = () => {
  const currentYear = new Date().getFullYear();

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Check if we're in the browser
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        const isScrolled = window.scrollY > 50;
        setScrolled(isScrolled);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    // Check if we're in the browser
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      if (isOpen) {
        // Get current scroll position
        const scrollY = window.scrollY;

        // Disable body scroll and preserve scroll position
        document.body.style.position = "fixed";
        document.body.style.top = `-${scrollY}px`;
        document.body.style.width = "100%";
        document.body.style.overflow = "hidden";
      } else {
        // Get the scroll position from the body's top style
        const scrollY = document.body.style.top;

        // Re-enable body scroll and restore scroll position
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        document.body.style.overflow = "";

        // Restore scroll position
        if (scrollY) {
          window.scrollTo(0, parseInt(scrollY || "0") * -1);
        }
      }

      // Cleanup function to ensure scroll is re-enabled when component unmounts
      return () => {
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        document.body.style.overflow = "";
      };
    }
  }, [isOpen]);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Certificates", href: "#certificates" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href) => {
    // Check if we're in the browser
    if (typeof document !== "undefined") {
      // Add a small delay to ensure DOM is ready
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
          });
        } else {
          console.warn(`Element with selector "${href}" not found`);
        }
      }, 100);
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/50 backdrop-blur-sm border-b border-zinc-800/40"
          : "bg-black/40 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} className="flex-shrink-0">
            <span className="text-2xl font-bold gradient-text">
              <Link href={"#home"}>VP</Link>
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Social Links - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.a
              href="https://github.com/pvraj1011"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="text-gray-300 hover:text-white transition-colors"
            >
              <FaGithub size={20} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/vraj10"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="text-gray-300 hover:text-white transition-colors"
            >
              <FaLinkedin size={20} />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/v_i_r_u_1011/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="text-gray-300 hover:text-white transition-colors"
            >
              <FaInstagram size={20} />
            </motion.a>
            <motion.a
              href="https://www.credly.com/users/vraj10"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="text-gray-300 hover:text-white transition-colors"
            >
              <SiCredly size={20} />
            </motion.a>
            <motion.a
              href="https://www.coursera.org/learner/vraj10"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="text-gray-300 hover:text-white transition-colors"
            >
              <SiCoursera size={20} />
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.95 }}
              className="text-gray-300 hover:text-white p-2 rounded-lg hover:bg-zinc-800 transition-all duration-200 md:hidden"
            >
              {isOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 z-40 md:hidden"
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed left-0 top-0 h-screen w-60 bg-gradient-to-br from-black to-zinc-900 z-50 md:hidden shadow-2xl overflow-y-auto border-r border-zinc-800"
            >
              {/* Sidebar Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-800">
                <div className="flex items-center gap-3">
                  {/* <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">V</span>
                  </div> */}
                  <div>
                    {/* <h2 className="font-bold text-text">VRAJ</h2> */}
                    <h1 className="gradient-text font-bold text-2xl bg-clip-text">
                      Vraj Patel
                    </h1>

                    {/* <p className="text-sm text-gray-600">Navigation</p> */}
                  </div>
                </div>
                <motion.button
                  onClick={() => setIsOpen(false)}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-full hover:bg-gray-800 transition-colors"
                >
                  <HiX size={24} className="text-gray-300" />
                </motion.button>
              </div>

              {/* Navigation Links */}
              <div className="p-6 space-y-2">
                {/* <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-4">
                  Menu
                </h3> */}
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center w-full text-left p-4 rounded-xl hover:bg-zinc-800 hover:border-zinc-700 border-2 border-transparent transition-all duration-200 active:bg-zinc-700"
                  >
                    <span className="text-gray-300 font-medium group-hover:text-white transition-colors">
                      {item.name}
                    </span>
                  </motion.button>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="p-6 border-t border-gray-800">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                  Quick Actions
                </h3>
                <div className="space-y-3">
                  <motion.a
                    href="#contact"
                    onClick={() => setIsOpen(false)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-3 p-3 bg-gray-700 text-white rounded-xl hover:bg-gray-600 transition-colors"
                  >
                    <FaEnvelope size={18} />
                    <span className="font-medium">Get in Touch</span>
                  </motion.a>
                  <motion.a
                    href="https://drive.google.com/uc?export=download&id=117nobHDHVumNs_4Glr2zoN3xI9QYBZD7"
                    download
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-3 p-3 bg-zinc-800 text-gray-200 rounded-xl hover:bg-zinc-700 transition-colors"
                  >
                    <FaDownload size={18} />
                    <span className="font-medium">Download Resume</span>
                  </motion.a>
                </div>
              </div>

              {/* Social Links */}
              <div className="p-6 border-t border-gray-800">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                  Connect
                </h3>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    {
                      icon: FaGithub,
                      href: "https://github.com/pvraj1011",
                      color: "bg-zinc-800",
                      textColor: "text-white",
                    },
                    {
                      icon: FaLinkedin,
                      href: "https://linkedin.com/in/vraj10",
                      color: "bg-zinc-800",
                      textColor: "text-white",
                    },
                    {
                      icon: FaInstagram,
                      href: "https://instagram.com/v_i_r_u_1011",
                      color: "bg-zinc-800",
                      textColor: "text-white",
                    },
                    {
                      icon: SiCredly,
                      href: "https://credly.com/users/vraj10",
                      color: "bg-zinc-800",
                      textColor: "text-white",
                    },
                    {
                      icon: SiCoursera,
                      href: "https://coursera.org/learner/vraj10",
                      color: "bg-zinc-800",
                      textColor: "text-white",
                    },
                  ].map((social, index) => (
                    <motion.a
                      key={social.href}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-3 ${social.color} ${social.textColor} rounded-xl transition-all duration-200 flex items-center justify-center shadow-md hover:shadow-lg`}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="relative bottom-0 left-0 right-0 p-6 border-t border-gray-800">
                <div className="text-center">
                  <p className="text-xs text-gray-400">
                    © {currentYear} Vraj Patel. All rights reserved.
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
