import { motion } from 'framer-motion';
import React from 'react';
import skills from '../data/skills.json';
import SkillBadge from './SkillBadge';

const Skills = () => (
  <section id="skills"
           className="p-12 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 flex justify-center">
    <div className="container">
      <h2 className="text-4xl font-bold text-center mt-6">Skills</h2>
      <motion.div
        className="flex flex-wrap justify-center gap-6 mt-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {skills.map((skill, index) => (
          <SkillBadge key={index} skill={skill}/>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Skills;
