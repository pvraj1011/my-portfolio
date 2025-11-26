"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaTelegram,
  FaInstagram,
} from "react-icons/fa";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset status after 3 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: HiMail,
      title: "Email",
      value: "p.vraj2110@gmail.com",
      link: "mailto:p.vraj2110@gmail.com",
      color: "text-white",
    },
    {
      icon: HiPhone,
      title: "Phone",
      value: "+91 8140396725",
      link: "tel:+918140396725",
      color: "text-white",
    },
    {
      icon: HiLocationMarker,
      title: "Location",
      value: "Ahmedabad, India",
      link: "https://www.google.com/maps/place/Ahmedabad,+Gujarat,+India",
      color: "text-white",
    },
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/pvraj1011",
      label: "GitHub",
      color: "hover:text-white",
    },
    {
      icon: FaLinkedin,
      href: "https://linkedin.com/in/vraj10",
      label: "LinkedIn",
      color: "hover:text-white",
    },
    {
      icon: FaInstagram,
      href: "https://instagram.com/v_i_r_u_1011",
      label: "Instagram",
      color: "hover:text-white",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Get In <span className="gradient-text">Touch</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-400 max-w-3xl mx-auto mb-8"
          >
            Ready to work together? Let's discuss your next project and bring
            your ideas to life.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 gap-16">
          {/* TOP — Centered Heading & Description */}
          {/* <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.h3
              variants={itemVariants}
              className="text-3xl font-bold text-white mb-6"
            >
              Let's Connect
            </motion.h3>

            <motion.p
              variants={itemVariants}
              className="text-gray-400 leading-relaxed"
            >
              I'm always interested in new opportunities and exciting projects.
              Whether you have a question, want to collaborate, or just want to
              say hi, feel free to reach out!
            </motion.p>
          </motion.div> */}

          {/* BOTTOM — 2 Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* LEFT BOTTOM — Contact Info (Email, Phone, Location) */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="space-y-6"
            >
              {contactInfo.map((info) => (
                <motion.a
                  key={info.title}
                  href={info.link}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-center gap-4 p-4 bg-zinc-900 rounded-xl shadow-md transition-all duration-300 border border-zinc-800"
                >
                  <div className={`${info.color} p-3 rounded-full bg-zinc-800`}>
                    <info.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{info.title}</h4>
                    <p className="text-gray-400">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* RIGHT BOTTOM — Stats + Follow Me */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="space-y-10"
            >
              {/* Stats */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-2 gap-4"
              >
                <div className="bg-zinc-900 p-6 rounded-xl shadow-md text-center border border-zinc-800">
                  <div className="text-2xl font-bold text-white">10+</div>
                  <div className="text-sm text-gray-400">
                    Projects Completed
                  </div>
                </div>
                <div className="bg-zinc-900 p-6 rounded-xl shadow-md text-center border border-zinc-800">
                  <div className="text-2xl font-bold text-white">1+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
              </motion.div>

              {/* Follow Me */}
              <motion.div variants={itemVariants}>
                <h4 className="text-lg font-semibold text-white mb-4">
                  Follow Me
                </h4>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-3 bg-zinc-800 rounded-full shadow-md text-gray-200 ${social.color} transition-all duration-300 border border-gray-700`}
                    >
                      <social.icon size={24} />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mt-16"
        >
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Let's create something amazing together. I'm here to help bring
              your vision to life.
            </p>
            <motion.a
              href="mailto:p.vraj2110@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-200"
            >
              Start a Conversation
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
