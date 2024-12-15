import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import SkillBadge from "./SkillBadge";

const ProjectCard = ({ title, image, description, sourceCode, downloadUrl, skills, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const iconPath = require(`../assets/${image}`);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
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
      <img src={iconPath} alt="Company logo" className="w-20 h-20 object-contain rounded-lg"/>

      <h3 className="mt-3 text-2xl font-semibold">{title}</h3>
      <p className="mt-2">{description}</p>

      <div className="flex mt-3 space-x-2 mb-3">
        <a
          href={sourceCode}
          target="_blank"
          rel="noopener noreferrer"
          className="flex text-blue-500 hover:underline"
        >
          Source code
        </a>

        {downloadUrl ? (
          <div className="flex space-x-2">
            <text className="text-blue-500">|</text>
            <a
              href={downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex text-blue-500 hover:underline"
            >
              Download
            </a>
          </div>
        ) : <></>}
      </div>

      {skills ? (
        <div className="flex flex-wrap justify-start gap-4 mt-4">
          {skills.map((skill, index) => (
            <SkillBadge key={index} skill={skill}/>
          ))}
        </div>
      ) : <></>}

    </motion.div>
  );
};

export default ProjectCard;
