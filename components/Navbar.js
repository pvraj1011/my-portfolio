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

const Navbar = () => {
  const currentYear = new Date().getFullYear();

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Check if we're in the browser
    if (typeof window !== 'undefined') {
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
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
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
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href) => {
    // Check if we're in the browser
    if (typeof document !== 'undefined') {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-200"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} className="flex-shrink-0">
            <span className="text-2xl font-bold gradient-text">Portfolio</span>
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
                  className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
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
              className="text-gray-600 hover:text-primary-600 transition-colors"
            >
              <FaGithub size={20} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/vraj10"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="text-gray-400 hover:text-primary-400 transition-colors"
            >
              <FaLinkedin size={20} />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/v_i_r_u_1011/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="text-gray-600 hover:text-secondary-500 transition-colors"
            >
              <FaInstagram size={20} />
            </motion.a>
            <motion.a
              href="https://www.credly.com/users/vraj10"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="text-gray-400 hover:text-blue-500 transition-colors"
            >
              <SiCredly size={20} />
            </motion.a>
            <motion.a
              href="https://www.coursera.org/learner/vraj10"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="text-gray-400 hover:text-blue-600 transition-colors"
            >
              <SiCoursera size={20} />
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.95 }}
              className="text-gray-700 hover:text-primary-600 p-2 rounded-lg hover:bg-gray-100 transition-all duration-200 md:hidden"
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
              className="fixed inset-0 bg-black/30 z-40 md:hidden"
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed left-0 top-0 h-full w-80 bg-gradient-to-br from-white to-gray-50 z-50 md:hidden shadow-2xl overflow-y-auto border-r border-gray-200"
            >
              {/* Sidebar Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">V</span>
                  </div>
                  <div>
                    <h2 className="font-bold text-text">VRAJ PATEL</h2>
                    {/* <p className="text-sm text-gray-600">Navigation</p> */}
                  </div>
                </div>
                <motion.button
                  onClick={() => setIsOpen(false)}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <HiX size={24} className="text-gray-600" />
                </motion.button>
              </div>

              {/* Navigation Links */}
              <div className="p-6 space-y-2">
                <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-4">
                  Menu
                </h3>
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="flex items-center gap-4 w-full text-left p-4 rounded-xl hover:bg-gray-100 hover:shadow-md transition-all duration-200 group"
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="text-white text-sm font-bold">
                        {item.name.charAt(0)}
                      </span>
                    </div>
                    <span className="text-gray-700 font-medium group-hover:text-primary-600 transition-colors">
                      {item.name}
                    </span>
                  </motion.button>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="p-6 border-t border-gray-200">
                <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-4">
                  Quick Actions
                </h3>
                <div className="space-y-3">
                  <motion.a
                    href="#contact"
                    onClick={() => setIsOpen(false)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-3 p-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors"
                  >
                    <FaEnvelope size={18} />
                    <span className="font-medium">Get in Touch</span>
                  </motion.a>
                  <motion.a
                    href="https://drive.google.com/uc?export=download&id=12X0FONY503sjIoBASmnQsXkuDOPzDrx-"
                    download
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-3 p-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors"
                  >
                    <FaDownload size={18} />
                    <span className="font-medium">Download Resume</span>
                  </motion.a>
                </div>
              </div>

              {/* Social Links */}
              <div className="p-6 border-t border-gray-200">
                <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-4">
                  Connect
                </h3>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    {
                      icon: FaGithub,
                      href: "https://github.com",
                      color: "hover:bg-gray-800",
                    },
                    {
                      icon: FaLinkedin,
                      href: "https://linkedin.com",
                      color: "hover:bg-blue-600",
                    },
                    {
                      icon: FaInstagram,
                      href: "https://instagram.com",
                      color: "hover:bg-pink-600",
                    },
                    {
                      icon: SiCredly,
                      href: "https://credly.com/users/vraj10",
                      color: "hover:bg-orange-500",
                    },
                    {
                      icon: SiCoursera,
                      href: "https://coursera.org/learner/vraj10",
                      color: "hover:bg-blue-600",
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
                      className={`p-3 bg-gray-100 text-gray-700 ${social.color} text-white rounded-xl transition-all duration-200 flex items-center justify-center`}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="relative bottom-0 left-0 right-0 p-6 border-t border-gray-200">
                <div className="text-center">
                  <p className="text-xs text-gray-600">
                    © {currentYear} Portfolio. Made with ❤️
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
