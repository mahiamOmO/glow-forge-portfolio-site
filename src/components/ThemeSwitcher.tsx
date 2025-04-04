
import { useTheme } from '@/hooks/useTheme';
import { Moon, Sun } from 'lucide-react';

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button 
      onClick={toggleTheme}
      className="relative p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <div className="relative w-6 h-6 overflow-hidden">
        <Sun 
          className={`absolute w-6 h-6 transition-all duration-300 ${
            theme === 'dark' ? 'opacity-0 rotate-90 translate-y-full' : 'opacity-100 rotate-0 translate-y-0'
          }`} 
        />
        <Moon 
          className={`absolute w-6 h-6 transition-all duration-300 ${
            theme === 'dark' ? 'opacity-100 rotate-0 translate-y-0' : 'opacity-0 -rotate-90 -translate-y-full'
          }`} 
        />
      </div>
    </button>
  );
}
