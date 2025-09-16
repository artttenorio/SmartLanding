import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog } from '@headlessui/react';
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { Template } from '../types';

interface TemplateModalProps {
  template: Template | null;
  isOpen: boolean;
  onClose: () => void;
}

const TemplateModal: React.FC<TemplateModalProps> = ({ template, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!template) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === template.screenshots.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? template.screenshots.length - 1 : prev - 1
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog
          as={motion.div}
          static
          open={isOpen}
          onClose={onClose}
          className="fixed inset-0 z-50 overflow-y-auto"
        >
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            {/* Background overlay */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-75"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
            />

            {/* Modal panel */}
            <motion.div
              className="inline-block w-full max-w-4xl my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-200"
              >
                <XMarkIcon className="h-6 w-6 text-gray-600" />
              </button>

              {/* Image carousel */}
              <div className="relative h-80 sm:h-96 bg-gray-100">
                <img
                  src={template.screenshots[currentImageIndex]}
                  alt={`${template.name} screenshot ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />

                {/* Navigation arrows */}
                {template.screenshots.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-200"
                    >
                      <ChevronLeftIcon className="h-6 w-6 text-gray-600" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-200"
                    >
                      <ChevronRightIcon className="h-6 w-6 text-gray-600" />
                    </button>
                  </>
                )}

                {/* Image indicators */}
                {template.screenshots.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {template.screenshots.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                          index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{template.name}</h3>
                    <p className="text-lg text-primary-600 font-medium">{template.category}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-gray-900">${template.price}</div>
                    <div className="text-sm text-gray-500">One-time purchase</div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Left column */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Features Included</h4>
                    <ul className="space-y-2 mb-6">
                      {template.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-primary-600 rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <h4 className="font-semibold text-gray-900 mb-3">Perfect For</h4>
                    <ul className="space-y-2">
                      {template.useCases.map((useCase, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-accent-400 rounded-full mr-3 flex-shrink-0"></div>
                          {useCase}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right column */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">What You Get</h4>
                    <ul className="space-y-2 mb-6">
                      {template.includedFiles.map((file, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                          {file}
                        </li>
                      ))}
                    </ul>

                    <h4 className="font-semibold text-gray-900 mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {template.techStack.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <motion.a
                      href={template.purchaseUrl}
                      className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors duration-200"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Get This Template
                      <ArrowTopRightOnSquareIcon className="ml-2 h-5 w-5" />
                    </motion.a>
                    <button
                      onClick={onClose}
                      className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200"
                    >
                      Continue Browsing
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Dialog>
      )}
    </AnimatePresence>
  );
};

export default TemplateModal;