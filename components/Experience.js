"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaBriefcase,
  FaGraduationCap,
  FaCalendarAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      id: 1,
      type: "education",
      title: "Computer Science & Engineering ( B.E. )",
      company: "LJ Institute of Engineering and Technology",
      location: "Ahmedabad, Gujarat",
      period: "November 2021 - June 2025",
      description:
        "Focused on software engineering, algorithms, and data structures. Participated in various hackathons and coding competitions.",
      technologies: [
        "Python",
        "C",
        "Data Structures & Algorithms",
        "Machine Learning",
        "Java",
      ],
      achievements: [
        "Awarded High Academic Honors for sustained top-tier performance (8.14/10 GPA).",
        "Excelled in core modules including software engineering, advanced algorithms, and data structures.",
      ],
    },

    {
      id: 2,
      type: "internship",
      title: "Artificial Intelligence Intern",
      company: "Edunet Foundation",
      location: "Gurugram, Haryana (Remote)",
      period: "September 2025 - October 2025",
      description:
        "Participated in a competitive 6-week national internship focused on Artificial Intelligence and Cloud Technology.",
      technologies: [
        "Python",
        "TensorFlow",
        "Scikit-learn",
        "Google API",
        "Cloud Applications",
      ],
      achievements: [
        "Applied ML/DL concepts and LLMs to solve a real-world personalization problem.",
        "Gained practical exposure to cloud-based workflows and deployment concepts taught during live sessions.",
        "Completed a Capstone project, creating an AI - DIET AND WORKOUT PLANNER, demonstrating practical application of AI concepts.",
      ],
    },
    // {
    //   id: 3,
    //   type: "internship",
    //   title: "Software Engineering Intern",
    //   company: "StartUp Ventures",
    //   location: "San Francisco, CA",
    //   period: "May 2022 - August 2022",
    //   description:
    //     "Worked on developing MVP for a SaaS product. Gained experience in agile development and cloud deployment.",
    //   technologies: ["Python", "Django", "AWS", "Docker", "PostgreSQL"],
    //   achievements: [
    //     "Developed core features that attracted first 100 users",
    //     "Set up CI/CD pipeline reducing deployment time by 70%",
    //     "Participated in daily stand-ups and sprint planning sessions",
    //   ],
    // },
    // {
    //   id: 4,
    //   type: "job",
    //   title: "Full Stack Developer Intern",
    //   company: "Tech Innovations Inc.",
    //   location: "Remote",
    //   period: "June 2023 - Present",
    //   description:
    //     "Developing and maintaining web applications using React, Node.js, and MongoDB. Collaborating with cross-functional teams to deliver high-quality software solutions.",
    //   technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    //   achievements: [
    //     "Built responsive user interfaces that improved user engagement by 40%",
    //     "Implemented RESTful APIs that reduced server response time by 30%",
    //     "Collaborated with UX team to enhance user experience across platforms",
    //   ],
    // },
  ];

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
    hidden: { y: 30, opacity: 0 },
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
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <section id="experience" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From key internships to challenging roles and focused education,
            this is the journey that accelerated my tech skills and solidified
            my passion for solving complex problems.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 h-full w-1 bg-gradient-to-b from-white/30 to-white/10 transform -translate-x-1/2 md:left-1/2" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-12"
          >
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                variants={itemVariants}
                className="relative flex flex-col md:flex-row items-start"
              >
                {/* Timeline dot */}
                <div className="absolute left-8 w-4 h-4 rounded-full bg-white border-4 border-white shadow-lg transform -translate-x-1/2 z-10 md:left-1/2" />

                {/* Content card */}
                <motion.div
                  variants={cardVariants}
                  whileHover="hover"
                  className={`flex-1 ml-16 p-6 bg-zinc-900 rounded-xl shadow-lg border border-zinc-800 hover:shadow-xl transition-all duration-300 md:ml-0 ${
                    index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                  }`}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div
                        className={`p-3 rounded-full ${
                          experience.type === "job"
                            ? "bg-white/10 text-white"
                            : experience.type === "internship"
                            ? "bg-white/10 text-white"
                            : "bg-white/10 text-white"
                        }`}
                      >
                        {experience.type === "education" ? (
                          <FaGraduationCap size={20} />
                        ) : (
                          <FaBriefcase size={20} />
                        )}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">
                          {experience.title}
                        </h3>
                        <p className="text-lg text-white font-medium">
                          {experience.company}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="flex items-center space-x-6 text-sm text-gray-400 mb-4">
                    <div className="flex items-center space-x-2">
                      <FaCalendarAlt size={14} />
                      <span>{experience.period}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FaMapMarkerAlt size={14} />
                      <span>{experience.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {experience.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-zinc-800 text-gray-300 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  {experience.achievements && (
                    <div className="border-t border-gray-800 pt-4">
                      <h4 className="font-semibold text-white mb-2">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-1">
                        {experience.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-white mr-2">•</span>
                            <span className="text-gray-300 text-sm">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
