import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";
import LanguageToggle from "./LanguageToggle";

const Header: React.FC = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: t("header.nav.services"), id: "services" },
    { label: t("header.nav.portfolio"), id: "portfolio" },
    { label: t("header.nav.features"), id: "features" },
    { label: t("header.nav.faq"), id: "faq" },
    { label: t("header.nav.contact"), id: "contact" },
  ];

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection("hero")}
          >
            <div className="flex items-center">
              <svg
                className="h-8 w-8 text-primary-600"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M13 3L4 14h7v7l9-11h-7V3z" />
              </svg>
              <span
                className={`ml-2 text-xl font-bold ${
                  isScrolled ? "text-gray-900" : "text-white"
                }`}
              >
                {t("header.brand")}
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors duration-200 hover:text-primary-600 ${
                  isScrolled ? "text-gray-700" : "text-white/90"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Language Toggle, CTA Button & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <LanguageToggle isScrolled={isScrolled} />

            <motion.a
              href="mailto:smartlanding.dev@gmail.com"
              className="hidden sm:inline-flex bg-primary-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t("header.cta")}
            </motion.a>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-md ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isMobileMenuOpen ? 1 : 0,
            height: isMobileMenuOpen ? "auto" : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md rounded-lg mt-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md w-full text-left"
              >
                {item.label}
              </button>
            ))}
            <a
              href="mailto:smartlanding.dev@gmail.com"
              className="block bg-primary-600 text-white px-3 py-2 rounded-md text-base font-medium hover:bg-primary-700 text-center mt-4"
            >
              {t("header.cta")}
            </a>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
