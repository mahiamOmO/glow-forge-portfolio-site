
import { useState, useEffect } from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-2 glass-effect' : 'py-4 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#home" className="text-2xl font-bold text-glow">
          Portfolio<span className="text-neon-purple">.</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="text-foreground/80 hover:text-foreground hover:text-glow transition-all duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <ThemeSwitcher />
        </nav>
        
        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center">
          <ThemeSwitcher />
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="ml-4 p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div 
        className={`md:hidden fixed inset-0 z-40 glass-effect overflow-hidden transition-all duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ top: '60px' }}
      >
        <nav className="flex flex-col items-center justify-center h-full">
          <ul className="flex flex-col items-center space-y-8 text-xl">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-foreground/80 hover:text-foreground hover:text-glow transition-all duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
