import { useEffect, useRef, useState, ReactNode } from 'react';

type Direction = 'up' | 'down' | 'left' | 'right' | 'fade';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
  threshold?: number;
}

export function ScrollReveal({ 
  children, 
  className = "", 
  delay = 0,
  direction = 'up',
  threshold = 0.1 
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [delay, threshold]);

  const getTransformClasses = () => {
    const baseClasses = "transition-all duration-1000 ease-out";
    
    if (isVisible) {
      return `${baseClasses} opacity-100 translate-x-0 translate-y-0`;
    }

    switch (direction) {
      case 'up':
        return `${baseClasses} opacity-0 translate-y-8`;
      case 'down':
        return `${baseClasses} opacity-0 -translate-y-8`;
      case 'left':
        return `${baseClasses} opacity-0 translate-x-8`;
      case 'right':
        return `${baseClasses} opacity-0 -translate-x-8`;
      case 'fade':
        return `${baseClasses} opacity-0`;
      default:
        return `${baseClasses} opacity-0 translate-y-8`;
    }
  };

  return (
    <div
      ref={elementRef}
      className={`${getTransformClasses()} ${className}`}
    >
      {children}
    </div>
  );
}
