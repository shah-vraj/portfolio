import React from 'react';

const SkillBadge = ({ skill }) => {
  // Construct the path to the icon based on the provided path in the JSON
  const iconPath = require(`../assets/${skill.icon}`); // Adjust path according to your project structure

  return (
    <span className="flex items-center px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-200 transition-colors duration-300">
      <img src={iconPath} alt={skill.title} className="w-8 h-8 mr-2" /> {/* Load icon image */}
      {skill.title}
    </span>
  );
};

export default SkillBadge;
