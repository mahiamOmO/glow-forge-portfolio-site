
import { useEffect, useRef, useState } from 'react';

interface Position {
  x: number;
  y: number;
}

export function use3DAnimation() {
  const [mousePosition, setMousePosition] = useState<Position>({ x: 0, y: 0 });
  const [cursorPosition, setCursorPosition] = useState<Position>({ x: 0, y: 0 });
  const animationRef = useRef<number | null>(null);
  
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);
  
  useEffect(() => {
    const animate = () => {
      setCursorPosition(prev => {
        const dx = mousePosition.x - prev.x;
        const dy = mousePosition.y - prev.y;
        
        return {
          x: prev.x + dx * 0.1,
          y: prev.y + dy * 0.1,
        };
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mousePosition]);
  
  const getRotation = (element: HTMLElement | null) => {
    if (!element) return { x: 0, y: 0 };
    
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const rotateX = (cursorPosition.y - centerY) / 30;
    const rotateY = (centerX - cursorPosition.x) / 30;
    
    return { x: rotateX, y: rotateY };
  };
  
  return { cursorPosition, getRotation };
}
