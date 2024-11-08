import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

const ExperienceItem = ({ role, company, duration, details, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      className="flex items-center justify-start mb-8 space-x-4 z-1"
      initial={{ opacity: 0, x: 100 }}
      animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.01 }}
    >
      <div className="flex flex-col items-center">
        <div className="flex-shrink-0 w-8 h-8 bg-blue-200 dark:bg-blue-500 rounded-full"/>
        <div className="w-1 h-16 bg-gray-300 dark:bg-gray-600"></div>
      </div>
      <div className="w-full p-6 rounded-lg shadow-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 transition-colors duration-300">
        <h3 className="text-2xl font-semibold">{role}</h3>
        <p className="text-lg font-medium mt-1">{company}</p>
        <p className="mt-1 italic text-gray-600 dark:text-gray-400">{duration}</p>
        <p className="mt-4">{details}</p>
      </div>
    </motion.div>
  );
};

export default ExperienceItem;
