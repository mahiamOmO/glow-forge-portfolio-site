
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

// Mock project data
const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce solution with real-time inventory management.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVjb21tZXJjZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    link: '#'
  },
  {
    id: 2,
    title: 'AI Content Generator',
    description: 'Content creation tool powered by advanced artificial intelligence.',
    technologies: ['Python', 'TensorFlow', 'React', 'FastAPI'],
    image: 'https://images.unsplash.com/photo-1677442135146-4c14585be3a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEFJJTIwR2VuZXJhdGl2ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    link: '#'
  },
  {
    id: 3,
    title: '3D Portfolio Website',
    description: 'Interactive portfolio website with 3D elements and animations.',
    technologies: ['Three.js', 'React', 'GSAP', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1545670723-196ed0954986?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fDNkJTIwcmVuZGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
    link: '#'
  },
  {
    id: 4,
    title: 'Crypto Dashboard',
    description: 'Real-time cryptocurrency tracking and portfolio management app.',
    technologies: ['React', 'Redux', 'Chart.js', 'API Integration'],
    image: 'https://images.unsplash.com/photo-1639152201720-5e536d254d81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNyeXB0b2N1cnJlbmN5fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
    link: '#'
  },
];

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-glow">Featured Projects</h2>
          <p className="text-lg max-w-2xl mx-auto text-foreground/80">
            A selection of my recent work, showcasing my skills in development, design, and problem-solving.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12" ref={projectsRef}>
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group relative overflow-hidden rounded-xl bg-card hover:shadow-xl transition-all duration-300"
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-neon-purple transition-colors">
                  {project.title}
                </h3>
                <p className="text-foreground/70 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="text-xs px-3 py-1 rounded-full bg-secondary text-foreground/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link}
                  className="inline-flex items-center text-neon-purple hover:text-neon-cyan transition-colors"
                >
                  View Project <ArrowUpRight size={18} className="ml-1" />
                </a>
              </div>
              
              {/* Animated border on hover */}
              <div 
                className={`absolute inset-0 border-2 border-transparent rounded-xl transition-opacity duration-300 pointer-events-none ${
                  activeProject === project.id ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  background: 'linear-gradient(90deg, #8B5CF6, #0EA5E9, #D946EF, #8B5CF6) border-box',
                  backgroundSize: '300% 100%',
                  animation: 'gradient-shift 4s linear infinite',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
