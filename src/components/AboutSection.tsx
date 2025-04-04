
import { useRef, useEffect } from 'react';
import { use3DAnimation } from '@/hooks/use3DAnimation';
import { Code, Palette, Zap, Smartphone } from 'lucide-react';

// Skills data
const skills = [
  {
    title: 'Frontend Development',
    description: 'Building responsive and accessible websites with modern frameworks.',
    icon: Code,
    color: 'from-neon-purple to-neon-pink'
  },
  {
    title: 'UI/UX Design',
    description: 'Creating intuitive interfaces and seamless user experiences.',
    icon: Palette,
    color: 'from-neon-cyan to-neon-purple'
  },
  {
    title: 'Performance Optimization',
    description: 'Optimizing applications for speed and efficiency.',
    icon: Zap,
    color: 'from-neon-pink to-neon-cyan'
  },
  {
    title: 'Responsive Design',
    description: 'Ensuring perfect display across all devices and screen sizes.',
    icon: Smartphone,
    color: 'from-neon-cyan to-neon-purple'
  }
];

export default function AboutSection() {
  const cardRef = useRef<HTMLDivElement>(null);
  const { getRotation } = use3DAnimation();
  
  useEffect(() => {
    const handleMouseMove = () => {
      if (cardRef.current) {
        const rotation = getRotation(cardRef.current);
        cardRef.current.style.transform = `rotateX(${rotation.x * 0.2}deg) rotateY(${rotation.y * 0.2}deg)`;
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [getRotation]);
  
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* About Me Card */}
          <div 
            ref={cardRef} 
            className="bg-card rounded-xl p-8 shadow-lg perspective preserve-3d transition-transform duration-200"
          >
            <h2 className="text-3xl font-bold mb-6 text-glow">About Me</h2>
            <p className="text-lg mb-4 text-foreground/90">
              I'm a passionate developer with a focus on creating immersive digital experiences. My work combines technical expertise with creative design thinking.
            </p>
            <p className="text-lg mb-6 text-foreground/90">
              With over 5 years of experience in web development, I've worked on projects ranging from small business websites to complex enterprise applications.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <h3 className="font-semibold mb-2">Education</h3>
                <p className="text-foreground/70">Computer Science, University of Technology</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-foreground/70">San Francisco, CA</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Experience</h3>
                <p className="text-foreground/70">5+ Years</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Freelance</h3>
                <p className="text-foreground/70">Available</p>
              </div>
            </div>
            
            <div className="flex space-x-3">
              <a 
                href="#contact" 
                className="px-6 py-2 rounded-full bg-gradient-to-r from-neon-purple to-neon-cyan text-white font-medium hover:opacity-90 transition-opacity"
              >
                Contact Me
              </a>
              <a 
                href="#" 
                className="px-6 py-2 rounded-full border border-foreground/20 hover:border-foreground/40 transition-colors"
              >
                Download CV
              </a>
            </div>
          </div>
          
          {/* Skills */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-glow">Skills & Expertise</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-xl bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-r ${skill.color} mb-4`}>
                    <skill.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                  <p className="text-foreground/70">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-neon-purple/10 filter blur-3xl" />
      <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-neon-cyan/10 filter blur-3xl" />
    </section>
  );
}
