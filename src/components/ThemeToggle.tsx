import { Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`
        fixed top-6 right-6 z-50 p-3 rounded-full backdrop-blur-md border transition-all duration-300
        ${theme === 'dark' 
          ? 'bg-gray-900/50 border-purple-500/30 text-purple-300 hover:border-purple-400/50 hover:bg-purple-500/10' 
          : 'bg-white/80 border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50'
        }
        hover:scale-110 active:scale-95
      `}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <Moon className="w-5 h-5" />
      ) : (
        <Sun className="w-5 h-5" />
      )}
    </button>
  );
}
