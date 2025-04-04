
import { useRef, useEffect } from 'react';
import { use3DAnimation } from '@/hooks/use3DAnimation';
import { ArrowDown } from 'lucide-react';

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const shape1Ref = useRef<HTMLDivElement>(null);
  const shape2Ref = useRef<HTMLDivElement>(null);
  const shape3Ref = useRef<HTMLDivElement>(null);
  const { getRotation } = use3DAnimation();
  
  useEffect(() => {
    const handleMouseMove = () => {
      if (shape1Ref.current && shape2Ref.current && shape3Ref.current) {
        const rotation1 = getRotation(heroRef.current);
        const rotation2 = getRotation(heroRef.current);
        const rotation3 = getRotation(heroRef.current);
        
        shape1Ref.current.style.transform = `rotateX(${rotation1.x * 0.5}deg) rotateY(${rotation1.y * 0.5}deg) translateZ(20px)`;
        shape2Ref.current.style.transform = `rotateX(${rotation2.x * -0.8}deg) rotateY(${rotation2.y * -0.8}deg) translateZ(40px)`;
        shape3Ref.current.style.transform = `rotateX(${rotation3.x * 1.2}deg) rotateY(${rotation3.y * 1.2}deg) translateZ(60px)`;
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [getRotation]);
  
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-20"
      ref={heroRef}
    >
      {/* 3D Shapes */}
      <div className="absolute inset-0 perspective">
        <div 
          ref={shape1Ref}
          className="absolute left-1/4 top-1/4 w-32 h-32 rounded-full bg-gradient-to-r from-neon-purple/20 to-neon-cyan/20 backdrop-blur-xl preserve-3d animate-float"
          style={{ animationDelay: '0s' }}
        />
        <div 
          ref={shape2Ref}
          className="absolute right-1/3 bottom-1/3 w-48 h-48 rounded-lg bg-gradient-to-r from-neon-cyan/20 to-neon-pink/20 backdrop-blur-xl preserve-3d animate-float"
          style={{ animationDelay: '1s' }}
        />
        <div 
          ref={shape3Ref}
          className="absolute right-1/4 top-1/3 w-24 h-24 rounded-xl rotate-45 bg-gradient-to-r from-neon-pink/20 to-neon-purple/20 backdrop-blur-xl preserve-3d animate-float"
          style={{ animationDelay: '2s' }}
        />
      </div>
      
      {/* Hero Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="inline-block text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-glow tracking-tight">
          <span className="inline-block">Creative</span>
          <span className="inline-block ml-4 text-neon-purple">Developer</span>
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto text-foreground/80 mb-10">
          Building stunning digital experiences with modern web technologies.
          Specializing in interactive interfaces and creative development.
        </p>
        <div className="flex justify-center space-x-4">
          <a 
            href="#projects" 
            className="px-8 py-3 rounded-full bg-gradient-to-r from-neon-purple to-neon-cyan text-white font-medium hover:opacity-90 transition-opacity"
          >
            View Projects
          </a>
          <a 
            href="#contact" 
            className="px-8 py-3 rounded-full border border-foreground/20 hover:border-foreground/40 transition-colors"
          >
            Contact Me
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown size={24} />
      </div>
    </section>
  );
}
