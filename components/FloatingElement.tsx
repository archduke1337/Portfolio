'use client';

import { ReactNode, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface FloatingElementProps {
  children: ReactNode;
  delay?: number;
  offsetX?: number;
  offsetY?: number;
  className?: string;
}

export const FloatingElement = ({
  children,
  delay = 0,
  offsetX = 0,
  offsetY = 0,
  className = '',
}: FloatingElementProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    // Add floating animation
    const element = ref.current;
    let yPos = offsetY;
    let xPos = offsetX;
    let yVel = 0;

    const animate = () => {
      yPos -= 0.5; // Continuous upward drift
      element.style.transform = `translate(${xPos}px, ${yPos}px)`;
      requestAnimationFrame(animate);
    };

    const id = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(id);
  }, [offsetX, offsetY]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: 'easeOut' }}
      className={`absolute will-change-transform ${className}`}
      data-animate="true"
    >
      {children}
    </motion.div>
  );
};
