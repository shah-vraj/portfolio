import React from 'react';

const SkillBadge = ({ skill }) => {
  const iconPath = require(`../assets/${skill.icon}`);

  return (
    <span className="flex items-center px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-200 transition-colors duration-300">
      <img src={iconPath} alt={skill.title} className="w-8 h-8 mr-2" />
      {skill.title}
    </span>
  );
};

export default SkillBadge;
