import { useTheme } from './ThemeProvider';

interface TimelineItemProps {
  role: string;
  company: string;
  period: string;
  description: string;
  isLast?: boolean;
}

export function TimelineItem({ role, company, period, description, isLast = false }: TimelineItemProps) {
  const { theme } = useTheme();

  return (
    <div className="relative flex gap-6 pb-12">
      {!isLast && (
        <div className={`absolute left-4 top-8 w-px h-full bg-gradient-to-b transition-all duration-300 ${
          theme === 'dark'
            ? 'from-purple-500 via-blue-500 to-purple-500 shadow-lg shadow-purple-500/30'
            : 'from-blue-400 via-purple-400 to-blue-400 shadow-sm shadow-blue-500/20'
        }`}></div>
      )}
      
      <div className="relative z-10 flex items-center justify-center w-8 h-8">
        {theme === 'dark' && (
          <div className="absolute w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-md opacity-75 animate-pulse"></div>
        )}
        <div className={`relative w-6 h-6 rounded-full shadow-lg border-2 ${
          theme === 'dark'
            ? 'bg-gradient-to-r from-purple-500 to-blue-500 shadow-purple-500/50 border-purple-300'
            : 'bg-gradient-to-r from-blue-500 to-purple-500 shadow-blue-500/50 border-blue-300'
        }`}>
          <div className="absolute inset-1 bg-white rounded-full"></div>
        </div>
      </div>
      
      <div className="flex-1">
        <h4 className={`font-bold mb-1 ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>{role}</h4>
        <p className={`mb-3 ${
          theme === 'dark' ? 'text-purple-300' : 'text-blue-600'
        }`}>{company} • {period}</p>
        <p className={`text-sm leading-relaxed ${
          theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
        }`}>{description}</p>
      </div>
    </div>
  );
}
