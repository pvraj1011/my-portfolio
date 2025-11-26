"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGithub, FaExternalLinkAlt, FaTimes, FaEye } from "react-icons/fa";
import {
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
  SiPython,
  SiStreamlit,
} from "react-icons/si";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const categories = ["ALL", "AI", "FRONTEND", "BACKEND", "FULLSTACK"];

  const projects = [
    {
      id: 1,
      title: "AI Diet & Workout Planner",
      description:
        "An intelligent fitness companion that generates personalized meal plans and workout routines based on individual goals and preferences.",
      longDescription:
        "A comprehensive AI-powered application built with Python and Streamlit that analyzes user profiles including age, weight, fitness goals, dietary preferences, and restrictions to create customized nutrition and exercise plans. The system provides detailed meal breakdowns with calorie tracking, macronutrient distribution, and exercise routines tailored to different fitness levels. Integrated with Google APIs for enhanced functionality and features a modern, responsive interface built with Tailwind CSS and smooth animations using Framer Motion.",
      image: "https://i.postimg.cc/RFyhbNp1/AI-DIET-PLANNER.png",
      category: "AI",
      technologies: ["Python", "Google APIs", "Streamlit", "Machine Learning"],
      icons: [SiPython, SiStreamlit],
      github: "https://github.com/pvraj1011/Ai-Diet-Planner",
      live: "https://ai-diet-planner-10.streamlit.app/",
      features: [
        "AI-powered personalized meal planning",
        "Customized workout routine generation",
        "Calorie and macronutrient tracking",
        "Dietary restriction accommodation",
        "Goal-based plan optimization",
        "Mobile-responsive design",
      ],
    },
    // {
    //   id: 2,
    //   title: "E-Commerce Platform",
    //   description:
    //     "A full-stack e-commerce platform with user authentication, payment integration, and admin dashboard.",
    //   longDescription:
    //     "This comprehensive e-commerce platform features a modern React frontend with Next.js, secure user authentication, integrated payment processing with Stripe, real-time inventory management, and a complete admin dashboard for order and product management.",
    //   image:
    //     "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    //   category: "fullstack",
    //   technologies: ["React", "Next.js", "Node.js", "MongoDB", "Stripe"],
    //   icons: [SiReact, SiNextdotjs, SiNodedotjs, SiMongodb],
    //   github: "https://github.com",
    //   live: "https://example.com",
    //   features: [
    //     "User authentication & authorization",
    //     "Payment processing with Stripe",
    //     "Real-time inventory updates",
    //     "Admin dashboard",
    //     "Responsive design",
    //     "SEO optimized",
    //   ],
    // },

    // {
    //   id: 3,
    //   title: "RESTful API Service",
    //   description:
    //     "A scalable REST API built with Node.js and Express, featuring authentication, rate limiting, and comprehensive documentation.",
    //   longDescription:
    //     "This robust API service provides secure endpoints with JWT authentication, rate limiting, input validation, comprehensive error handling, and auto-generated API documentation using Swagger.",
    //   image:
    //     "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
    //   category: "backend",
    //   technologies: ["Node.js", "Express", "MongoDB", "JWT", "Swagger"],
    //   icons: [SiNodedotjs, SiMongodb],
    //   github: "https://github.com",
    //   live: "https://example.com",
    //   features: [
    //     "JWT authentication",
    //     "Rate limiting",
    //     "Input validation",
    //     "Error handling",
    //     "API documentation",
    //     "Database optimization",
    //   ],
    // },
    // {
    //   id: 4,
    //   title: "Weather Dashboard",
    //   description:
    //     "A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
    //   longDescription:
    //     "This weather dashboard provides accurate forecasts using multiple weather APIs, interactive maps with weather overlays, detailed analytics, and personalized weather alerts.",
    //   image:
    //     "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
    //   category: "frontend",
    //   technologies: ["React", "TypeScript", "Chart.js", "OpenWeather API"],
    //   icons: [SiReact, SiTypescript],
    //   github: "https://github.com",
    //   live: "https://example.com",
    //   features: [
    //     "Location-based forecasts",
    //     "Interactive weather maps",
    //     "Weather analytics",
    //     "Custom alerts",
    //     "Historical data",
    //     "Offline support",
    //   ],
    // },
    // {
    //   id: 5,
    //   title: "Social Media Analytics",
    //   description:
    //     "A comprehensive social media analytics platform with real-time data visualization and engagement tracking.",
    //   longDescription:
    //     "This analytics platform aggregates data from multiple social media platforms, provides real-time insights, engagement tracking, content performance analysis, and customizable reporting dashboards.",
    //   image:
    //     "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    //   category: "fullstack",
    //   technologies: ["React", "Node.js", "PostgreSQL", "D3.js", "Redis"],
    //   icons: [SiReact, SiNodedotjs, SiMongodb],
    //   github: "https://github.com",
    //   live: "https://example.com",
    //   features: [
    //     "Multi-platform integration",
    //     "Real-time analytics",
    //     "Custom dashboards",
    //     "Data visualization",
    //     "Automated reports",
    //     "Performance optimization",
    //   ],
    // },
    // {
    //   id: 6,
    //   title: "Mobile Banking App",
    //   description:
    //     "A secure mobile banking application with biometric authentication and real-time transaction monitoring.",
    //   longDescription:
    //     "This mobile banking app features secure biometric authentication, real-time transaction processing, account management, bill payments, and comprehensive security monitoring.",
    //   image:
    //     "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
    //   category: "mobile",
    //   technologies: ["React Native", "Node.js", "MongoDB", "Biometric Auth"],
    //   icons: [SiReact, SiNodedotjs, SiMongodb],
    //   github: "https://github.com",
    //   live: "https://example.com",
    //   features: [
    //     "Biometric authentication",
    //     "Real-time transactions",
    //     "Account management",
    //     "Bill payments",
    //     "Security monitoring",
    //     "Push notifications",
    //   ],
    // },
  ];

  const filteredProjects =
    selectedCategory === "ALL"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

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

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <section id="projects" className="py-20 bg-black">
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
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-400 max-w-3xl mx-auto mb-8"
          >
            Explore my recent work and see how I bring ideas to life through
            code
          </motion.p>

          {/* Filter Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-white text-black shadow-lg"
                    : "bg-zinc-800 text-gray-200 hover:bg-zinc-700 border border-zinc-700"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                whileHover="hover"
                layout
                className="bg-zinc-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border border-zinc-800"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onLoad={(e) => e.target.classList.add("loaded")}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <motion.button
                      onClick={() => setSelectedProject(project)}
                      initial={{ opacity: 0, scale: 0 }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="opacity-0 group-hover:opacity-100 bg-slate-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 border border-slate-600"
                    >
                      <FaEye size={20} />
                    </motion.button>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech, index) => (
                      <span
                        key={tech}
                        className="bg-white/10 text-white px-2 py-1 rounded text-xs font-medium border border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-xs text-gray-400">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-gray-200 py-2 px-4 rounded-lg text-center font-medium transition-colors duration-200 flex items-center justify-center gap-2 border border-zinc-700"
                    >
                      <FaGithub size={16} />
                      Code
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 bg-white hover:bg-gray-200 text-black py-2 px-4 rounded-lg text-center font-medium transition-colors duration-200 flex items-center justify-center gap-2"
                    >
                      <FaExternalLinkAlt size={16} />
                      Live Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-zinc-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-zinc-800"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-t-2xl"
                />
                <motion.button
                  onClick={() => setSelectedProject(null)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute top-4 right-4 bg-slate-700 bg-opacity-90 hover:bg-opacity-100 p-2 rounded-full shadow-lg transition-all duration-200 border border-slate-600"
                >
                  <FaTimes size={20} />
                </motion.button>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                <h2 className="text-3xl font-bold text-white mb-4">
                  {selectedProject.title}
                </h2>
                <p className="text-lg text-gray-400 mb-6">
                  {selectedProject.longDescription}
                </p>

                {/* Features */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Key Features
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedProject.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <motion.a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-gray-200 py-3 px-6 rounded-lg text-center font-medium transition-colors duration-200 flex items-center justify-center gap-2 border border-zinc-700"
                  >
                    <FaGithub size={20} />
                    View Source Code
                  </motion.a>
                  <motion.a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-white hover:bg-gray-200 text-black py-3 px-6 rounded-lg text-center font-medium transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    <FaExternalLinkAlt size={20} />
                    Visit Live Site
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
