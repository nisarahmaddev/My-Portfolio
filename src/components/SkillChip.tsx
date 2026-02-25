import { useTheme } from './ThemeProvider';

interface SkillChipProps {
  name: string;
}

export function SkillChip({ name }: SkillChipProps) {
  const { theme } = useTheme();

  return (
    <span className={`group relative px-4 py-2 backdrop-blur-md border rounded-lg text-sm transition-all duration-300 cursor-default ${
      theme === 'dark'
        ? 'bg-gray-900/50 border-purple-500/30 text-purple-300 hover:bg-purple-500/20 hover:border-purple-400/60 hover:text-purple-200 hover:shadow-lg hover:shadow-purple-500/25'
        : 'bg-white/60 border-blue-200 text-blue-600 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 hover:shadow-lg hover:shadow-blue-500/25'
    }`}>
      {theme === 'dark' ? (
        <span className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></span>
      ) : (
        <span className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
      )}
      <span className="relative z-10">{name}</span>
    </span>
  );
}
