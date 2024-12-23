import { useEffect, useState } from 'react';

interface Snowflake {
  id: number;
  left: number;
  size: number;
  animationDuration: number;
  opacity: number;
}

interface SnowEffectProps {
  snowflakeCount?: number;
}

const SnowEffect: React.FC<SnowEffectProps> = ({ snowflakeCount = 50 }) => {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

  useEffect(() => {
    const initialSnowflakes = Array.from({ length: snowflakeCount }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 0.4 + 0.2,
      animationDuration: Math.random() * 3 + 2,
      opacity: Math.random() * 0.6 + 0.4
    }));
    
    setSnowflakes(initialSnowflakes);
  }, [snowflakeCount]);

  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      {snowflakes.map((snowflake) => (
        <div
          key={snowflake.id}
          className="absolute animate-fall"
          style={{
            left: `${snowflake.left}%`,
            width: `${snowflake.size}rem`,
            height: `${snowflake.size}rem`,
            opacity: snowflake.opacity,
            animation: `fall ${snowflake.animationDuration}s linear infinite`
          }}
        >
          <div className="w-full h-full bg-gray-300 rounded-full dark:bg-white" />
        </div>
      ))}
      
      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(-10px) rotate(0deg);
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
          }
        }
        .animate-fall {
          animation: fall linear infinite;
        }
      `}</style>
    </div>
  );
};

export default SnowEffect;