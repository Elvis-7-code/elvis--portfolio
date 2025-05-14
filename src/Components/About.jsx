import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="py-20 bg-white dark:bg-gray-900"
    >
      <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 dark:text-white">
        Hi, I’m <span className="text-blue-500">Elvis</span> 👨‍💻
      </h1>

      <p className="mt-4 text-lg text-center max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
        A passionate Front-End Developer crafting clean, responsive web experiences that connect ideas to reality.
      </p>
    </motion.section>
  );
};

export default About;
