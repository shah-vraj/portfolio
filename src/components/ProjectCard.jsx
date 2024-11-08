import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

const ProjectCard = ({ title, description, link, index }) => {
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
      className="p-6 rounded-lg shadow-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 transition-colors duration-300 w-full mb-8"
      initial={{ opacity: 0, x: -100 }}
      animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.01 }}
    >
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="mt-2">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex mt-6 text-blue-500 hover:underline justify-end"
      >
        View Project
      </a>
    </motion.div>
  );
};

export default ProjectCard;
