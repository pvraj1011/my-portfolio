"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaBriefcase, FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      id: 1,
      type: "job",
      title: "Full Stack Developer Intern",
      company: "Tech Innovations Inc.",
      location: "Remote",
      period: "June 2023 - Present",
      description: "Developing and maintaining web applications using React, Node.js, and MongoDB. Collaborating with cross-functional teams to deliver high-quality software solutions.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      achievements: [
        "Built responsive user interfaces that improved user engagement by 40%",
        "Implemented RESTful APIs that reduced server response time by 30%",
        "Collaborated with UX team to enhance user experience across platforms"
      ]
    },
    {
      id: 2,
      type: "job", 
      title: "Frontend Developer",
      company: "Digital Solutions Agency",
      location: "New York, NY",
      period: "January 2023 - May 2023",
      description: "Created interactive and responsive web applications for various clients. Focused on performance optimization and accessibility standards.",
      technologies: ["JavaScript", "React", "CSS3", "Git", "Webpack"],
      achievements: [
        "Optimized website performance, reducing load time by 50%",
        "Implemented accessibility features meeting WCAG 2.1 standards",
        "Mentored junior developers on best practices and code reviews"
      ]
    },
    {
      id: 3,
      type: "internship",
      title: "Software Engineering Intern",
      company: "StartUp Ventures",
      location: "San Francisco, CA",
      period: "May 2022 - August 2022",
      description: "Worked on developing MVP for a SaaS product. Gained experience in agile development and cloud deployment.",
      technologies: ["Python", "Django", "AWS", "Docker", "PostgreSQL"],
      achievements: [
        "Developed core features that attracted first 100 users",
        "Set up CI/CD pipeline reducing deployment time by 70%",
        "Participated in daily stand-ups and sprint planning sessions"
      ]
    },
    {
      id: 4,
      type: "education",
      title: "Bachelor of Computer Science",
      company: "University of Technology",
      location: "Boston, MA",
      period: "September 2019 - May 2023",
      description: "Focused on software engineering, algorithms, and data structures. Participated in various hackathons and coding competitions.",
      technologies: ["Java", "C++", "Data Structures", "Algorithms", "Machine Learning"],
      achievements: [
        "Graduated with Magna Cum Laude honors (GPA: 3.8/4.0)",
        "President of Computer Science Student Association",
        "Winner of University Hackathon 2022"
      ]
    }
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
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My journey through internships, jobs, and education that shaped my skills
            and passion for technology
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 h-full w-1 bg-gradient-to-b from-primary-500 to-accent-500 transform -translate-x-1/2 md:left-1/2" />
          
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
                <div className="absolute left-8 w-4 h-4 rounded-full bg-primary-500 border-4 border-white shadow-lg transform -translate-x-1/2 z-10 md:left-1/2" />
                
                {/* Content card */}
                <motion.div
                  variants={cardVariants}
                  whileHover="hover"
                  className={`flex-1 ml-16 p-6 bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 md:ml-0 ${
                    index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                  }`}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`p-3 rounded-full ${
                        experience.type === "job" ? "bg-blue-100 text-blue-600" :
                        experience.type === "internship" ? "bg-green-100 text-green-600" :
                        "bg-purple-100 text-purple-600"
                      }`}>
                        {experience.type === "education" ? (
                          <FaGraduationCap size={20} />
                        ) : (
                          <FaBriefcase size={20} />
                        )}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">
                          {experience.title}
                        </h3>
                        <p className="text-lg text-primary-600 font-medium">
                          {experience.company}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="flex items-center space-x-6 text-sm text-gray-600 mb-4">
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
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {experience.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  {experience.achievements && (
                    <div className="border-t pt-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {experience.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-primary-500 mr-2">•</span>
                            <span className="text-gray-700 text-sm">{achievement}</span>
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