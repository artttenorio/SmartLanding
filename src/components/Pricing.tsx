import React from "react";
import { motion } from "framer-motion";
import { CheckIcon } from "@heroicons/react/24/outline";
import { pricingTiers } from "../data";

const Pricing: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="pricing" className="py-20 bg-white">
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
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the license that fits your needs. All plans include lifetime
            access and updates.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              className={`relative bg-white rounded-2xl shadow-lg p-8 ${
                tier.popular
                  ? "ring-2 ring-primary-600 transform scale-105"
                  : "hover:shadow-xl"
              } transition-all duration-300`}
              variants={itemVariants}
              whileHover={!tier.popular ? { y: -5 } : {}}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary-600 text-white px-6 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Name */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {tier.name}
                </h3>

                {/* Price */}
                <div className="flex items-center justify-center">
                  <span className="text-5xl font-bold text-gray-900">
                    ${tier.price}
                  </span>
                  <span className="text-gray-500 ml-2">one-time</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <CheckIcon className="h-6 w-6 text-green-500 flex-shrink-0 mr-3 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.a
                href="mailto:smartlanding.dev@gmail.com"
                className={`w-full block text-center py-4 px-6 rounded-lg font-medium transition-colors duration-200 ${
                  tier.popular
                    ? "bg-primary-600 text-white hover:bg-primary-700"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started
              </motion.a>

              {/* Background Decoration */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-1 ${
                  tier.popular
                    ? "bg-gradient-to-r from-primary-600 to-accent-400"
                    : "bg-gray-200"
                } rounded-b-2xl`}
              ></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="mt-16 bg-gray-50 rounded-2xl p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-primary-600 mb-2">✓</div>
              <h4 className="font-semibold text-gray-900 mb-1">
                Lifetime Access
              </h4>
              <p className="text-sm text-gray-600">Download and use forever</p>
            </div>

            <div>
              <div className="text-2xl font-bold text-primary-600 mb-2">✓</div>
              <h4 className="font-semibold text-gray-900 mb-1">Free Updates</h4>
              <p className="text-sm text-gray-600">
                Get all future improvements
              </p>
            </div>

            <div>
              <div className="text-2xl font-bold text-primary-600 mb-2">✓</div>
              <h4 className="font-semibold text-gray-900 mb-1">
                30-Day Refund
              </h4>
              <p className="text-sm text-gray-600">Money-back guarantee</p>
            </div>

            <div>
              <div className="text-2xl font-bold text-primary-600 mb-2">✓</div>
              <h4 className="font-semibold text-gray-900 mb-1">
                Expert Support
              </h4>
              <p className="text-sm text-gray-600">Help when you need it</p>
            </div>
          </div>
        </motion.div>

        {/* FAQ Link */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-gray-600 mb-4">
            Have questions about our pricing?
          </p>
          <motion.button
            onClick={() => {
              const element = document.getElementById("faq");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-primary-600 font-medium hover:text-primary-700 transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
          >
            Check our FAQ →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
