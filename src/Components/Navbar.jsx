import React from 'react'
import { motion } from 'framer-motion'

const Navbar = () => {
  return (    
    <nav>
            <h1>Hi, I’m Elvis, a front-end Web Developer bringing Ideas to Life with Code</h1>
  
  <ul className="flex gap-6 text-sm">
    <li><a href="#home" className="hover:text-blue-500">Home</a></li>
    <li><a href="#about" className="hover:text-blue-500">About</a></li>
    <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
    <li><a href="#skills" className="hover:text-blue-500">Skills</a></li>
    <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
  </ul>

  <a href="#projects" className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
  View My Work
  </a>

  <motion.section
  id='home'
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.7 }}
  className="py-20"
>

</motion.section>

    </nav>
  )
}

export default Navbar