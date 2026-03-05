import { useState, useEffect } from 'react';

interface Position {
  x: number;
  y: number;
}

interface TrailPoint extends Position {
  id: number;
}

export function CustomCursor() {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [trail, setTrail] = useState<TrailPoint[]>([]);

  useEffect(() => {
    let trailId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      setTrail(prev => {
        const newTrail = [...prev, { x: e.clientX, y: e.clientY, id: trailId++ }];
        return newTrail.slice(-8); 
      });
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('button, a, input, textarea, [role="button"]');
      setIsHovering(!!isInteractive);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 mix-blend-difference">
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="absolute w-1 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full"
          style={{
            left: point.x - 2,
            top: point.y - 2,
            opacity: (index + 1) / trail.length * 0.3,
            transform: `scale(${(index + 1) / trail.length})`,
          }}
        />
      ))}
      
      <div
        className={`absolute w-6 h-6 border-2 border-purple-400 rounded-full transition-all duration-200 ${
          isHovering ? 'scale-150 border-cyan-400' : 'scale-100'
        }`}
        style={{
          left: position.x - 12,
          top: position.y - 12,
          boxShadow: '0 0 20px rgba(168, 85, 247, 0.5)',
        }}
      >
        <div className="absolute inset-1 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full opacity-30 animate-pulse" />
      </div>
      
      <div
        className="absolute w-1 h-1 bg-white rounded-full"
        style={{
          left: position.x - 2,
          top: position.y - 2,
        }}
      />
    </div>
  );
}
