
import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { Button } from '@/components/ui/button';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="relative overflow-hidden transition-all duration-300 hover:scale-110"
      aria-label="Toggle theme"
    >
      <Sun className={`h-5 w-5 rotate-0 scale-100 transition-all duration-300 ${theme === 'dark' ? 'rotate-90 scale-0' : ''}`} />
      <Moon className={`absolute h-5 w-5 rotate-90 scale-0 transition-all duration-300 ${theme === 'dark' ? 'rotate-0 scale-100' : ''}`} />
    </Button>
  );
};

export default ThemeToggle;
