import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { ReadMore } from "./ReadMore";

const ExperienceItem = ({ role, company, logo, duration, details, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const iconPath = require(`../assets/${logo}`);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
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
      className="flex-row mb-8 p-6 space-x-4 z-1 rounded-lg shadow-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 transition-colors duration-300"
      initial={{ opacity: 0, x: 100 }}
      animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.01 }}
    >
      <div className="flex space-x-4">
        <img src={iconPath} alt="Company logo" className="w-16 h-16 object-contain rounded-lg"/>
        <div>
          <h3 className="text-2xl font-semibold">{role}</h3>
          <p className="text-lg font-medium mt-1">{company}</p>
          <p className="mt-1 italic text-gray-600 dark:text-gray-400">{duration}</p>
        </div>
      </div>
      <div className="w-full mt-4">
          <ReadMore>{details}</ReadMore>
      </div>
    </motion.div>
  );
};

export default ExperienceItem;
