// import { forwardRef, ButtonHTMLAttributes } from 'react';
// import { cn } from './ui/utils';
// import { useTheme } from './ThemeProvider';

// type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'neon';
// type ButtonSize = 'sm' | 'md' | 'lg';

// interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
//   variant?: ButtonVariant;
//   size?: ButtonSize;
// }

// const Button = forwardRef<HTMLButtonElement, ButtonProps>(
//   ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
//     const { theme } = useTheme();
    
//     const getVariantStyles = (): Record<ButtonVariant, string> => {
//           if (theme === 'dark') {
//             return {
//               primary: 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:shadow-xl transform hover:scale-105 backdrop-blur-sm border border-purple-400/30',
//               secondary: 'border-2 border-purple-400 text-purple-300 bg-transparent hover:bg-purple-500/10 hover:text-purple-200 hover:border-purple-300 hover:shadow-lg hover:shadow-purple-500/25',
//               ghost: 'text-gray-400 hover:text-purple-300 hover:bg-purple-500/10',
//               neon: 'bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-bold shadow-2xl shadow-cyan-500/50 hover:shadow-cyan-500/75 transform hover:scale-110 animate-pulse border-2 border-cyan-300',
//             };
//           } else {
//             return {
//               primary: 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:shadow-xl transform hover:scale-105',
//               secondary: 'border-2 border-blue-500 text-blue-600 bg-transparent hover:bg-blue-50 hover:text-blue-700 hover:border-blue-600 hover:shadow-lg hover:shadow-blue-500/25',
//               ghost: 'text-gray-600 hover:text-blue-600 hover:bg-blue-50',
//               neon: 'bg-gradient-to-r from-blue-400 to-purple-500 text-white font-bold shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/75 transform hover:scale-110 border-2 border-blue-300',
//             };
//           }
//         };

//     return (
//       <button
//         className={cn(
//           // Base styles
//           'inline-flex items-center justify-center gap-2 rounded-xl transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed font-semibold relative overflow-hidden',
//           // Size variants
//           {
//             'px-4 py-2 text-sm': size === 'sm',
//             'px-6 py-3 text-base': size === 'md',
//             'px-8 py-4 text-lg': size === 'lg',
//           },
//           // Theme-aware color variants
//           getVariantStyles(),
//           className
//         )}
//         ref={ref}
//         {...props}
//       >
//         {variant === 'neon' && theme === 'dark' && (
//           <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-75 blur-xl animate-pulse"></div>
//         )}
//         {variant === 'neon' && theme === 'light' && (
//           <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-50 blur-lg"></div>
//         )}
//         <span className="relative z-10">{children}</span>
//       </button>
//     );
//   }
// );

// Button.displayName = 'Button';

// export { Button };
