import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <motion.section
      id="hero"
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center py-20 bg-white dark:bg-gray-900"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">
        Hello! I'm <span className="text-blue-600">Elvis</span>
      </h2>

      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
        A passionate Frontend Developer based in Kenya 🇰🇪 — building sleek and modern web experiences.
      </p>

      <motion.a
        href="#contact"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        Hire Me
      </motion.a>
    </motion.section>
  );
};

export default Hero