import { motion } from 'framer-motion'; // Import Framer Motion
import React from 'react';
import skills from '../data/skills.json';
import SkillBadge from './SkillBadge';

const Skills = () => (
  <section id="skills" className="p-12 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
    <h2 className="text-4xl font-bold text-center mt-6">Skills</h2>
    <motion.div
      className="flex flex-wrap justify-center gap-6 mt-8"
      initial={{ opacity: 0, y: 50 }} // Start with opacity 0 and slightly down
      animate={{ opacity: 1, y: 0 }} // Animate to full opacity and original position
      transition={{ duration: 0.5 }} // Animation duration
    >
      {skills.map((skill, index) => (
        <SkillBadge key={index} skill={skill} />
      ))}
    </motion.div>
  </section>
);

export default Skills;
