import React, { useEffect, useRef } from 'react';

interface ParallaxProps {
  children: React.ReactNode;
  speed?: number; // 1 = normal, <1 slower (background), >1 faster (foreground)
  className?: string;
  maxOffset?: number; // Limit the movement to prevent elements from drifting too far
}

const Parallax: React.FC<ParallaxProps> = ({ children, speed = 0.5, className = '', maxOffset }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const scrollY = window.scrollY;
      
      // Calculate offset:
      // (1 - speed) determines the direction and magnitude relative to scroll
      // speed 0.5 => offset = 0.5 * scrollY (Moves down/slower than scroll)
      // speed 1.2 => offset = -0.2 * scrollY (Moves up/faster than scroll)
      let offset = scrollY * (1 - speed);

      // Clamp if maxOffset is provided
      if (maxOffset) {
         offset = Math.max(Math.min(offset, maxOffset), -maxOffset);
      }

      ref.current.style.transform = `translateY(${offset}px)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed, maxOffset]);

  return (
    <div ref={ref} className={`will-change-transform ${className}`}>
      {children}
    </div>
  );
};

export default Parallax;