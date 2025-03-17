'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

// Define skill categories and skills
interface Skill {
  name: string;
  level: number; // 0-100
  color: string;
}

interface SkillCategory {
  name: string;
  icon: React.ReactNode;
  skills: Skill[];
}

// SVG icons for categories
const FrontendIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const BackendIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
  </svg>
);

const DesignIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
  </svg>
);

const OtherIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
  </svg>
);

// Skill data
const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend',
    icon: <FrontendIcon />,
    skills: [
      { name: 'React', level: 90, color: '#61DAFB' },
      { name: 'Next.js', level: 85, color: '#000000' },
      { name: 'JavaScript', level: 95, color: '#F7DF1E' },
      { name: 'TypeScript', level: 80, color: '#3178C6' },
      { name: 'HTML/CSS', level: 90, color: '#E34F26' },
      { name: 'Tailwind CSS', level: 85, color: '#06B6D4' },
    ]
  },
  {
    name: 'Backend',
    icon: <BackendIcon />,
    skills: [
      { name: 'Node.js', level: 80, color: '#339933' },
      { name: 'Express', level: 75, color: '#000000' },
      { name: 'MongoDB', level: 70, color: '#47A248' },
      { name: 'PostgreSQL', level: 65, color: '#336791' },
      { name: 'GraphQL', level: 60, color: '#E10098' },
    ]
  },
  {
    name: 'Design',
    icon: <DesignIcon />,
    skills: [
      { name: 'Figma', level: 80, color: '#F24E1E' },
      { name: 'Adobe XD', level: 65, color: '#FF61F6' },
      { name: 'Adobe Photoshop', level: 70, color: '#31A8FF' },
      { name: 'UI/UX Design', level: 75, color: '#0ACF83' },
    ]
  },
  {
    name: 'Other',
    icon: <OtherIcon />,
    skills: [
      { name: 'Git', level: 85, color: '#F05032' },
      { name: 'Docker', level: 70, color: '#2496ED' },
      { name: 'AWS', level: 65, color: '#FF9900' },
      { name: 'Vercel', level: 80, color: '#000000' },
      { name: 'Netlify', level: 75, color: '#00C7B7' },
    ]
  }
];

const SkillBar = ({ skill, index }: { skill: Skill; index: number }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{skill.name}</span>
        <span className="text-sm font-medium">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <motion.div
          className="h-2.5 rounded-full"
          style={{ backgroundColor: skill.color }}
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ delay: 0.1 * index, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  );
};

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].name);
  
  // Get the active category's skills
  const activeSkills = skillCategories.find(cat => cat.name === activeCategory)?.skills || [];
  
  return (
    <div className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
          >
            My Skills
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            I've worked with a variety of technologies and tools. Here's an overview of my technical skills and proficiency levels.
          </motion.p>
        </div>
        
        {/* Category selector tabs */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex overflow-x-auto pb-2 justify-center">
            {skillCategories.map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`flex items-center px-6 py-3 mr-4 rounded-lg font-medium transition-colors ${
                  activeCategory === category.name
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        {/* Skills bars */}
        <motion.div 
          className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-800">{activeCategory} Skills</h3>
          
          <div className="space-y-6">
            {activeSkills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
} 