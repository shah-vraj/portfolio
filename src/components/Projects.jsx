import React from 'react';
import projects from '../data/projects.json'; // Adjust the path as needed
import ProjectCard from './ProjectCard';

const Projects = () => (
  <section id="projects" className="p-12 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
    <h2 className="text-4xl font-bold text-center mt-6">Projects</h2>
    <div className="flex flex-col mt-8"> {/* Use flex-col for correct alignment */}
      {projects.map((proj, index) => (
        <ProjectCard key={index} {...proj} index={index} />
      ))}
    </div>
  </section>
);

export default Projects;
