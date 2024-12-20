import experiences from '../data/experiences.json';
import ExperienceItem from './ExperienceItem';

const Experience = () => (
  <section id="experience"
           className="p-12 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 justify-center flex">
    <div className="container">
      <h2 className="text-4xl font-bold text-center mt-6">Experience</h2>
      <div className="flex flex-col space-y-8 mt-8 px-2">
        {experiences.map((exp, index) => (
          <ExperienceItem key={index} {...exp} index={index}/>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
