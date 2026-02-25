import { useEffect, useState } from 'react';

interface Shape {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  speed: number;
  direction: number;
  opacity: number;
}

export function FloatingShapes() {
  const [shapes, setShapes] = useState<Shape[]>([]);

  useEffect(() => {
    const colors = [
      'from-purple-500/10 to-blue-500/10',
      'from-blue-500/15 to-purple-500/15',
      'from-cyan-500/10 to-purple-500/10',
      'from-violet-500/10 to-blue-500/10',
    ];

    const initialShapes: Shape[] = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 120 + 60,
      color: colors[Math.floor(Math.random() * colors.length)],
      speed: Math.random() * 0.5 + 0.2,
      direction: Math.random() * Math.PI * 2,
      opacity: Math.random() * 0.3 + 0.1,
    }));

    setShapes(initialShapes);

    const animate = () => {
      setShapes(prev => prev.map(shape => ({
        ...shape,
        x: (shape.x + Math.cos(shape.direction) * shape.speed + 100) % 100,
        y: (shape.y + Math.sin(shape.direction) * shape.speed + 100) % 100,
        direction: shape.direction + 0.001,
      })));
    };

    const interval = setInterval(animate, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map(shape => (
        <div
          key={shape.id}
          className={`absolute bg-gradient-to-r ${shape.color} rounded-full blur-2xl transition-all duration-1000`}
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            opacity: shape.opacity,
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}
      
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '2.5s' }}></div>
      <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-purple-300 rounded-full animate-ping" style={{ animationDelay: '3s' }}></div>
      <div className="absolute top-2/3 left-2/3 w-1 h-1 bg-cyan-400 rounded-full animate-ping" style={{ animationDelay: '4s' }}></div>
      <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-violet-400 rounded-full animate-ping" style={{ animationDelay: '5s' }}></div>
    </div>
  );
}
