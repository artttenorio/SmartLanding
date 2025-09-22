import React from "react";
import { motion } from "framer-motion";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";

const Portfolio: React.FC = () => {
  const { t } = useTranslation();

  const projects = [
    {
      id: 1,
      title: t("portfolio.projects.0.title"),
      description: t("portfolio.projects.0.description"),
      image:
        "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=600&h=400&fit=crop&crop=center",
      url: "https://smart-landing-curso-online.vercel.app/",
      category: "Education",
    },
    {
      id: 2,
      title: t("portfolio.projects.1.title"),
      description: t("portfolio.projects.1.description"),
      image: "images/wine.jpg",
      url: "https://wine-gallery-xi.vercel.app/",
      category: "Wine Gallery",
    },
    {
      id: 3,
      title: t("portfolio.projects.2.title"),
      description: t("portfolio.projects.2.description"),
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center",
      url: "https://example.com/saas-product",
      category: "SaaS",
    },
    {
      id: 4,
      title: t("portfolio.projects.3.title"),
      description: t("portfolio.projects.3.description"),
      image:
        "https://images.unsplash.com/photo-1559757175-8a6c315f97c4?w=600&h=400&fit=crop&crop=center",
      url: "https://example.com/medical-clinic",
      category: "Healthcare",
    },
    {
      id: 5,
      title: t("portfolio.projects.4.title"),
      description: t("portfolio.projects.4.description"),
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop&crop=center",
      url: "https://example.com/real-estate",
      category: "Real Estate",
    },
    {
      id: 6,
      title: t("portfolio.projects.5.title"),
      description: t("portfolio.projects.5.description"),
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&crop=center",
      url: "https://example.com/marketing-agency",
      category: "Marketing",
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section id="portfolio" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t("portfolio.title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("portfolio.subtitle")}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {project.description}
                </p>

                <motion.a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors duration-200"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t("portfolio.view_project")}
                  <ArrowTopRightOnSquareIcon className="ml-2 h-4 w-4" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.a
            href="mailto:smartlanding.dev@gmail.com"
            className="inline-flex bg-primary-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-primary-700 transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
