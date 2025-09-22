import React, { useState } from "react";
import { motion } from "framer-motion";
import { EyeIcon } from "@heroicons/react/24/outline";
import { templates } from "../data/templates";
import { Template } from "../types";
import TemplateModal from "./TemplateModal";

const Templates: React.FC = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState<string>("all");

  const categories = [
    "all",
    ...Array.from(new Set(templates.map((t) => t.category))),
  ];

  const filteredTemplates =
    filter === "all"
      ? templates
      : templates.filter((template) => template.category === filter);

  const openModal = (template: Template) => {
    setSelectedTemplate(template);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTemplate(null);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="templates" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Premium Website Templates
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hand-crafted, responsive templates designed to help your business
            stand out and convert visitors into customers.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="inline-flex bg-gray-100 rounded-lg p-1">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-3 rounded-md text-sm font-medium transition-all duration-200 ${
                  filter === category
                    ? "bg-white text-primary-600 shadow-sm"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {category === "all" ? "All Templates" : category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Templates Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {filteredTemplates.map((template) => (
            <motion.div
              key={template.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              {/* Template Image */}
              <div className="relative overflow-hidden">
                <img
                  src={template.thumbnail}
                  alt={template.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <motion.button
                    onClick={() => openModal(template)}
                    className="opacity-0 group-hover:opacity-100 bg-white text-gray-800 px-4 py-2 rounded-lg font-medium flex items-center space-x-2 transition-opacity duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <EyeIcon className="h-5 w-5" />
                    <span>Preview</span>
                  </motion.button>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                    {template.category}
                  </span>
                </div>

                {/* Price Badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    ${template.price}
                  </span>
                </div>
              </div>

              {/* Template Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {template.name}
                </h3>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {template.highlights.map((highlight, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  onClick={() => openModal(template)}
                  className="w-full bg-primary-600 text-white py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Details
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Can't find what you're looking for?
          </h3>
          <p className="text-gray-600 mb-6">
            We're constantly adding new templates. Contact us for custom
            solutions.
          </p>
          <motion.a
            href="mailto:smartlanding.dev@gmail.com"
            className="inline-flex items-center px-8 py-4 bg-accent-500 text-white rounded-lg text-lg font-medium hover:bg-accent-600 transition-colors duration-200 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </motion.a>
        </motion.div>
      </div>

      {/* Modal */}
      <TemplateModal
        template={selectedTemplate}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
};

export default Templates;
