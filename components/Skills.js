"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaGitAlt,
  FaDatabase,
  FaCode,
  FaRobot,
  FaGithub,
  FaChrome,
  FaBrain,
  FaChartBar,
  FaLaptopCode,
  FaNetworkWired,
  FaChartLine,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiRedux,
  SiVite,
  SiOpenai,
  SiJupyter,
  SiPostman,
  SiVisualstudiocode,
  SiExpress,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiPlotly,
} from "react-icons/si";

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: "Frontend Craftsmanship",
      icon: "🎨",
      skills: [
        { name: "React", icon: FaReact, color: "text-blue-400" },
        { name: "Next.js", icon: SiNextdotjs, color: "text-gray-300" },
        { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
        { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
        { name: "HTML5", icon: FaHtml5, color: "text-orange-400" },
        { name: "CSS3", icon: FaCss3Alt, color: "text-blue-400" },
        { name: "Redux", icon: SiRedux, color: "text-purple-400" },
        { name: "Vite", icon: SiVite, color: "text-cyan-400" },
      ],
    },
    {
      title: "Backend Engineering",
      icon: "⚙️",
      skills: [
        { name: "Node.js", icon: FaNodeJs, color: "text-green-400" },
        { name: "Express", icon: SiExpress, color: "text-gray-300" },
        { name: "Python", icon: FaPython, color: "text-blue-400" },
        { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-500" },
        { name: "SQL", icon: FaDatabase, color: "text-blue-600" },
      ],
    },
    {
      title: "AI & Data Science",
      icon: "🧠",
      skills: [
        { name: "Machine Learning", icon: FaBrain, color: "text-orange-400" },
        { name: "Deep Learning", icon: FaNetworkWired, color: "text-cyan-400" },
        { name: "Scikit-learn", icon: SiScikitlearn, color: "text-orange-500" },
        { name: "Pandas", icon: SiPandas, color: "text-green-600" },
        { name: "NumPy", icon: SiNumpy, color: "text-blue-600" },
        { name: "Matplotlib", icon: SiPlotly, color: "text-red-500" },
        { name: "TensorFlow", icon: SiTensorflow, color: "text-orange-500" },
        { name: "PyTorch", icon: SiPytorch, color: "text-red-500" },
      ],
    },
    {
      title: "Development Arsenal",
      icon: "🛠️",
      skills: [
        { name: "Git", icon: FaGitAlt, color: "text-orange-400" },
        { name: "GitHub", icon: FaGithub, color: "text-gray-300" },
        { name: "Postman", icon: SiPostman, color: "text-orange-500" },
        { name: "VS Code", icon: SiVisualstudiocode, color: "text-blue-400" },
        { name: "Jupyter", icon: SiJupyter, color: "text-orange-500" },
        { name: "OpenAI API", icon: SiOpenai, color: "text-green-400" },
        { name: "Chrome DevTools", icon: FaChrome, color: "text-blue-500" },
      ],
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
  };

  return (
    <section id="skills" className="py-20 bg-background">
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
            className="text-4xl md:text-5xl font-bold text-text mb-4"
          >
            Skills & <span className="gradient-text">Technologies</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            A comprehensive toolkit for building modern, scalable, and efficient
            applications
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
            >
              <div className="text-center mb-6">
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="text-2xl font-bold text-text mb-2">
                  {category.title}
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-primary-600 to-secondary-500 mx-auto rounded-full"></div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={
                      inView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.8 }
                    }
                    transition={{
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      duration: 0.5,
                    }}
                    whileHover={{ scale: 1.05, y: -3 }}
                    className="group relative bg-gray-50 rounded-lg p-1 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 cursor-pointer aspect-square"
                    title={skill.name}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      className={`${skill.color} transition-transform duration-200 w-full h-full rounded-lg bg-white flex items-center justify-center`}
                    >
                      <skill.icon size={40} />
                    </motion.div>

                    {/* Tooltip on hover */}
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10 border border-gray-600">
                      {skill.name}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-text mb-8">
            Additional Expertise
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "RESTful APIs",
              "API Integration",
              "Responsive Design",
              "Performance Optimization",
              "Algorithm Design",
              "Data Analysis",
              "Model Training",
              "Database Design",
              "Version Control",
              "Testing & Debugging",
              "Problem Solving",
              "Full-Stack Development",
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
                }
                transition={{ delay: 0.9 + index * 0.05, duration: 0.3 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="bg-primary-500/10 text-primary-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-primary-500/20 transition-colors duration-200 border border-primary-500/20"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
