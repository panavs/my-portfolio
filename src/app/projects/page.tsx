// app/projects/[id]/page.tsx
import Link from 'next/link'

export default function ProjectsPage() {
  // Sample project data - replace with your actual projects
  const projects = [
    {
      id: 'project1',
      title: 'Cool Project',
      description: 'A really awesome web app that does amazing things.',
      technologies: ['React', 'TypeScript', 'Firebase'],
      link: 'https://example.com/project1'
    },
    {
      id: 'project2',
      title: 'Another Project',
      description: 'An innovative mobile app that solves important problems.',
      technologies: ['React Native', 'Node.js', 'MongoDB'],
      link: 'https://example.com/project2'
    },
    {
      id: 'project3',
      title: 'Awesome Tool',
      description: 'A handy utility that makes developers more productive.',
      technologies: ['Python', 'Django', 'PostgreSQL'],
      link: 'https://example.com/project3'
    }
  ];

  return (
    <main className="min-h-screen p-8 pt-16">
      <div className="max-w-4xl mx-auto">
        {/* Header with back link */}
        <div className="mb-8 flex items-center">
          <Link href="/" className="mr-4">
            <div className="w-10 h-10 flex items-center justify-center border-2 border-black rounded-full hover:bg-white transition-colors">
              ←
            </div>
          </Link>
          <h1 className="text-5xl" style={{ fontFamily: 'Caveat, cursive' }}>
            Projects
          </h1>
        </div>
        
        {/* Divider */}
        <div className="w-full h-4 mb-12 relative">
          <svg viewBox="0 0 400 10" className="w-full h-full">
            <path 
              d="M0,5 C80,15 120,-5 200,5 C280,15 320,-5 400,5" 
              fill="none" 
              stroke="black" 
              strokeWidth="2" 
              strokeLinecap="round"
            />
          </svg>
        </div>
        
        {/* Projects list */}
        <div className="space-y-8 mb-12">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="p-6 bg-white border-2 border-black rounded-lg shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:shadow-[6px_6px_0_0_rgba(0,0,0,1)] transition-all"
            >
              <h2 className="text-2xl mb-2" style={{ fontFamily: 'Caveat, cursive' }}>
                {project.title}
              </h2>
              
              <p className="mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-2 py-1 text-sm border border-black rounded-full"
                    style={{ backgroundColor: 'rgba(233, 196, 106, 0.2)' }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex justify-end">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 border-2 border-black rounded-lg bg-white hover:bg-gray-100 transition-colors"
                  style={{ fontFamily: 'Indie Flower, cursive' }}
                >
                  View Project →
                </a>
              </div>
              
              {/* Scribble decoration */}
              <svg 
                className="w-full h-12 mt-4 opacity-20" 
                viewBox="0 0 200 20"
              >
                <path 
                  d="M0,10 C20,5 40,15 60,10 C80,5 100,15 120,10 C140,5 160,15 180,10 C200,5 220,15 240,10" 
                  fill="none" 
                  stroke="black" 
                  strokeWidth="1" 
                  strokeLinecap="round"
                />
              </svg>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center">
          <Link 
            href="/" 
            className="scribble-button"
            style={{ backgroundColor: 'rgba(42, 157, 143, 0.2)' }}
          >
            Back Home
          </Link>
        </div>
      </div>
    </main>
  )
}