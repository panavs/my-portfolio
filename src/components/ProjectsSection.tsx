// components/ProjectsSection.tsx
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

// Define the project interface
interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  link: string;
  github?: string;
  featured: boolean;
  color: string;
}

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index, duration: 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
      className="w-full h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-full overflow-hidden rounded-xl shadow-lg border border-gray-200 group transition-all duration-300 hover:shadow-2xl bg-white">
        {/* Project image with overlay gradient */}
        <div className="relative h-48 overflow-hidden">
          <div 
            className="absolute inset-0 bg-gradient-to-r opacity-90"
            style={{ 
              backgroundImage: `linear-gradient(to right, ${project.color}99, ${project.color})`
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="text-3xl font-bold text-white">{project.title}</h3>
          </div>
          <motion.div
            className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent"
            initial={{ y: 60 }}
            animate={{ y: isHovered ? 0 : 60 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-white text-sm line-clamp-2">{project.description}</p>
          </motion.div>
        </div>
        
        {/* Project details */}
        <div className="p-5">
          {/* Tech stack tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech) => (
              <span 
                key={tech} 
                className="px-2 py-1 text-xs font-medium rounded-full"
                style={{ 
                  backgroundColor: `${project.color}20`,
                  color: project.color,
                }}
              >
                {tech}
              </span>
            ))}
          </div>
          
          {/* Action buttons */}
          <div className="flex gap-2 mt-4">
            {project.github && (
              <Link href={project.github} target="_blank" rel="noopener noreferrer" 
                className="flex items-center justify-center rounded-lg px-3 py-2 text-sm font-medium border border-gray-300 hover:bg-gray-100 transition-colors">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.934.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z"></path>
                </svg>
                Code
              </Link>
            )}
            <Link href={project.link} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center rounded-lg px-3 py-2 text-sm font-medium text-white transition-colors"
              style={{ backgroundColor: project.color }}>
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
              View Project
            </Link>
          </div>
        </div>
        
        {/* "Featured" badge for highlighted projects */}
        {project.featured && (
          <div className="absolute top-3 right-3 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full">
            Featured
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default function ProjectsSection() {
  // More realistic project data
  const projects: Project[] = [
    {
      id: "ecommerce-platform",
      title: "E-Commerce Platform",
      description: "A fully functional e-commerce platform with product listing, cart, checkout, and admin dashboard.",
      imageUrl: "/project1.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "https://my-ecommerce-demo.vercel.app",
      github: "https://github.com/yourusername/ecommerce-platform",
      featured: true,
      color: "#3B82F6"
    },
    {
      id: "ai-chatbot",
      title: "AI Chatbot",
      description: "An intelligent chatbot built with natural language processing capabilities for customer support.",
      imageUrl: "/project2.jpg",
      technologies: ["Python", "TensorFlow", "NLP", "Flask"],
      link: "https://ai-chatbot-demo.herokuapp.com",
      github: "https://github.com/yourusername/ai-chatbot",
      featured: false,
      color: "#2563EB"
    },
    {
      id: "fitness-tracker",
      title: "Fitness Tracker",
      description: "Mobile app that helps users track workouts, nutrition, and health metrics with visualization.",
      imageUrl: "/project3.jpg",
      technologies: ["React Native", "Firebase", "Charts.js"],
      link: "https://fitness-tracker-demo.netlify.app",
      github: "https://github.com/yourusername/fitness-tracker",
      featured: true,
      color: "#1D4ED8"
    },
    {
      id: "portfolio-site",
      title: "Portfolio Website",
      description: "A professionally designed portfolio website with 3D elements and smooth animations.",
      imageUrl: "/project4.jpg",
      technologies: ["Next.js", "Three.js", "Framer Motion"],
      link: "/",
      featured: false,
      color: "#1E40AF"
    }
  ];
  
  const [filter, setFilter] = useState<'all' | 'featured'>('all');
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.featured);
  
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-800 bg-clip-text text-transparent"
        >
          My Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-gray-600 max-w-2xl mx-auto"
        >
          Explore my recent work and personal projects. Each project represents a unique challenge and solution.
        </motion.p>
      </div>
      
      {/* Filter buttons */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex rounded-md shadow-sm">
          <button
            onClick={() => setFilter('all')}
            className={`px-5 py-2 text-sm font-medium rounded-l-lg border ${
              filter === 'all' 
                ? 'bg-blue-600 text-white border-blue-600' 
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
            }`}
          >
            All Projects
          </button>
          <button
            onClick={() => setFilter('featured')}
            className={`px-5 py-2 text-sm font-medium rounded-r-lg border ${
              filter === 'featured' 
                ? 'bg-blue-600 text-white border-blue-600' 
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
            }`}
          >
            Featured
          </button>
        </div>
      </div>
      
      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  )
}