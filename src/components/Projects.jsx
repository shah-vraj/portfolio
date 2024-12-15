import React from 'react';
import projects from '../data/projects.json';
import ProjectCard from './ProjectCard';

const Projects = () => (
  <section id="projects"
           className="p-12 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 flex justify-center">
    <div className="container">
      <h2 className="text-4xl font-bold text-center mt-6">Projects</h2>
      <div className="flex flex-col mt-8">
        {projects.map((proj, index) => (
          <ProjectCard key={index} {...proj} index={index}/>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
