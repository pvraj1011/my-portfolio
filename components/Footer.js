"use client";

import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/pvraj1011",
      label: "GitHub",
    },
    {
      icon: FaLinkedin,
      href: "https://linkedin.com/in/vraj10",
      label: "LinkedIn",
    },
    {
      icon: FaEnvelope,
      href: "mailto:p.vraj2110@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="bg-gray-50 text-gray-900 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold gradient-text">Portfolio</h3>
            <p className="text-gray-600 leading-relaxed">
              A passionate developer creating innovative solutions and bringing
              ideas to life through code.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="text-gray-500 hover:text-primary-600 transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-text">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "About", href: "#home" },
                { name: "Skills", href: "#skills" },
                { name: "Projects", href: "#projects" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-text">Get In Touch</h4>
            <div className="space-y-2 text-gray-600">
              <p>📧 p.vraj2110@gmail.com</p>
              <p>📱 +91 8140396725</p>
              <p>📍 Ahmedabad, India</p>
            </div>
            <motion.a
              href="mailto:p.vraj2110@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg transition-colors duration-200"
            >
              Send Message
            </motion.a>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-gray-300 mt-8 pt-8 text-center"
        >
          <p className="text-gray-500">
            © {currentYear} Vraj Patel. All rights reserved. Built with ❤️ using
            Next.js
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
