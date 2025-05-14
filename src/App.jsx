import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Contact from './components/Contact'
import './Styles/style.css';
import './Styles/dark.css';
import './Styles/hero.css';
import './Styles/navbar.css';
import './Styles/about.css';
import './Styles/skills.css';
import './Styles/projects.css';
import './Styles/contact.css';
import './Styles/tailwind.css';
const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? 'dark' : ''}>
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 m-4 text-sm bg-gray-200 dark:bg-gray-800 dark:text-white rounded"
    >
      Toggle {darkMode ? 'Light' : 'Dark'} Mode
    </button>

      <div className="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}

export default App;
