import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  EnvelopeIcon,
  CalendarDaysIcon,
  DocumentTextIcon,
  ChartBarIcon,
  DevicePhoneMobileIcon,
  SwatchIcon
} from '@heroicons/react/24/outline';

const Services: React.FC = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const landingPageFeatures = [
    {
      title: t('services.landing_pages.intermediary.title'),
      description: t('services.landing_pages.intermediary.description'),
      features: t('services.landing_pages.intermediary.features', { returnObjects: true }) as string[],
      icon: EnvelopeIcon,
      color: 'bg-blue-500'
    },
    {
      title: t('services.landing_pages.premium.title'),
      description: t('services.landing_pages.premium.description'),
      features: t('services.landing_pages.premium.features', { returnObjects: true }) as string[],
      icon: SwatchIcon,
      color: 'bg-purple-500'
    }
  ];

  const basicApps = [
    {
      title: t('services.basic_apps.digital_catalog.title'),
      description: t('services.basic_apps.digital_catalog.description'),
      icon: DevicePhoneMobileIcon,
      color: 'bg-green-500'
    },
    {
      title: t('services.basic_apps.scheduling.title'),
      description: t('services.basic_apps.scheduling.description'),
      icon: CalendarDaysIcon,
      color: 'bg-orange-500'
    },
    {
      title: t('services.basic_apps.forms.title'),
      description: t('services.basic_apps.forms.description'),
      icon: DocumentTextIcon,
      color: 'bg-red-500'
    },
    {
      title: t('services.basic_apps.dashboard.title'),
      description: t('services.basic_apps.dashboard.description'),
      icon: ChartBarIcon,
      color: 'bg-indigo-500'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
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
            {t('services.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </motion.div>

        {/* Landing Pages Section */}
        <motion.div
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-2xl font-bold text-gray-900 mb-8 text-center"
            variants={itemVariants}
          >
            {t('services.landing_pages.title')}
          </motion.h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {landingPageFeatures.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-6">
                  <div className={`${service.color} p-3 rounded-lg mr-4`}>
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">{service.title}</h4>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>

                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Basic Apps Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-2xl font-bold text-gray-900 mb-8 text-center"
            variants={itemVariants}
          >
            {t('services.basic_apps.title')}
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {basicApps.map((app, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 text-center"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className={`${app.color} p-4 rounded-xl mx-auto w-16 h-16 flex items-center justify-center mb-4`}>
                  <app.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{app.title}</h4>
                <p className="text-gray-600 text-sm">{app.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.a
            href="mailto:hello@smartlanding.com"
            className="inline-flex items-center px-8 py-4 bg-primary-600 text-white rounded-lg text-lg font-medium hover:bg-primary-700 transition-colors duration-200 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('services.cta')}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;