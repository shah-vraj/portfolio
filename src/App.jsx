import React, { useEffect, useState } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme) {
      setDarkMode(JSON.parse(savedTheme));
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', JSON.stringify(!darkMode));
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <button
        onClick={toggleDarkMode}
        className="fixed top-12 right-4 p-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-full shadow-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-300 z-50"
        style={{ fontSize: "1.5rem" }}
      >
        {darkMode ? "🌞" : "🌜"}
      </button>
      <Navbar />
      <main className="transition-colors duration-300 bg-light-background dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Home />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
};

export default App;
