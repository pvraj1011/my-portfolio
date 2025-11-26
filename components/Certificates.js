"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const Certificates = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 6;

  // Replace this array with your actual certificates (20-30 items).
  // Each item: { id, title, provider, link }
  const certificates = [
    {
      id: 1,
      title: "IBM Full Stack Software Developer",
      provider: "Coursera",
      link: "https://coursera.org/share/b2ed8ca8092fd64950bede6979025ff9",
    },
    {
      id: 2,
      title: "IBM AI Developer",
      provider: "Coursera",
      link: "https://coursera.org/share/91abc0a0de2a1de3c0b20bc60ea0fe47",
    },
    {
      id: 3,
      title: "Oracle AI Vector Search Professional",
      provider: "Oracle",
      link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=29CAA3BD8F04847F08FB0A31D70F09797BB1E27C69118057EAAD3EC6115D1A91",
    },
    {
      id: 4,
      title: "OCI Data Science Professional",
      provider: "Oracle",
      link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=C3A076D4557B722160E846FCD7879FB3660EC0BA7DF96E922E8AB629E211C19A",
    },
    {
      id: 5,
      title: "Microsoft Full-Stack Developer",
      provider: "Coursera",
      link: "https://coursera.org/share/06cd7c1c6f6688181ba6020210e6fea5",
    },
    {
      id: 6,
      title: "Microsoft Back-End Developer",
      provider: "Coursera",
      link: "https://coursera.org/share/76a0d1e9be10b6dfca69fe57173155e8",
    },
    {
      id: 7,
      title: "OCI Generative AI Professional",
      provider: "Oracle",
      link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=32F169E7C3FA9E146312FBEC97E73714208C1941C7A79A4E3BD8ED16BE5C458C",
    },
    {
      id: 8,
      title: "IBM Applied DevOps Engineering",
      provider: "Coursera",
      link: "https://coursera.org/share/78fc4eeaaea8ce15e2e35b9711b68f8c",
    },
    {
      id: 9,
      title: "Web Design for Everybody",
      provider: "Coursera",
      link: "https://coursera.org/share/07ab33931203f7c9255aa729871ff64e",
    },
    {
      id: 10,
      title: "Introduction to Scripting in Python",
      provider: "Coursera",
      link: "https://coursera.org/share/2464098a42d7951365e91564e710b1a2",
    },
    {
      id: 11,
      title: "Machine Learning",
      provider: "Coursera",
      link: "https://coursera.org/share/13c69e27867303dea675fb418c95837d",
    },
    {
      id: 12,
      title: "Python 3 Programming",
      provider: "Coursera",
      link: "https://coursera.org/share/fad69604b2fdcce42f1c845c2160e9cf",
    },
  ];

  const totalPages = Math.ceil(certificates.length / ITEMS_PER_PAGE) || 1;
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const visibleCertificates = certificates.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const goToPage = (page) => {
    const safePage = Math.max(1, Math.min(totalPages, page));
    setCurrentPage(safePage);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 12, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="certificates" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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
            <span className="gradient-text">Certificates</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Verified achievements and credentials from trusted providers.
          </motion.p>
        </motion.div>

        {/* Text-only Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {visibleCertificates.map((cert) => (
            <motion.a
              key={cert.id}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-start justify-between gap-3 rounded-xl border border-zinc-800 bg-zinc-900 p-5 shadow hover:shadow-lg transition-all"
              aria-label={`Verify ${cert.title} on ${cert.provider}`}
            >
              <div>
                <h3 className="text-lg font-semibold text-white group-hover:text-white transition-colors line-clamp-2">
                  {cert.title}
                </h3>
                <p className="mt-1 text-sm text-gray-400">{cert.provider}</p>
              </div>
              <FaExternalLinkAlt
                className="mt-1 text-gray-400 group-hover:text-white transition-colors"
                size={16}
              />
            </motion.a>
          ))}
        </motion.div>

        {totalPages > 1 && (
          <div className="mt-10 flex flex-col items-center gap-4">
            <div className="flex items-center gap-2">
              <motion.button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                whileTap={{ scale: 0.95 }}
                className={`px-3 py-2 rounded-lg border ${
                  currentPage === 1
                    ? "border-gray-800 text-gray-500 bg-zinc-800 cursor-not-allowed"
                    : "border-gray-700 text-gray-200 bg-zinc-900 hover:bg-zinc-800"
                } transition-colors`}
                aria-label="Previous page"
              >
                Prev
              </motion.button>

              {Array.from({ length: totalPages }).map((_, idx) => {
                const page = idx + 1;
                const isActive = page === currentPage;
                return (
                  <motion.button
                    key={page}
                    onClick={() => goToPage(page)}
                    whileTap={{ scale: 0.95 }}
                    className={`min-w-9 px-3 py-2 rounded-lg border text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-white text-black border-white shadow"
                        : "bg-zinc-900 text-gray-200 border-gray-700 hover:bg-zinc-800"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                    aria-label={`Go to page ${page}`}
                  >
                    {page}
                  </motion.button>
                );
              })}

              <motion.button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                whileTap={{ scale: 0.95 }}
                className={`px-3 py-2 rounded-lg border ${
                  currentPage === totalPages
                    ? "border-gray-800 text-gray-500 bg-zinc-800 cursor-not-allowed"
                    : "border-gray-700 text-gray-200 bg-zinc-900 hover:bg-zinc-800"
                } transition-colors`}
                aria-label="Next page"
              >
                Next
              </motion.button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certificates;
