import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
  className?: string;
}

export const Reveal = ({ 
    children, 
    width = "fit-content", 
    delay = 0.25, 
    direction = "up",
    duration = 0.5,
    className
}: RevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const variants = {
    hidden: { opacity: 0, y: direction === "up" ? 75 : direction === "down" ? -75 : 0, x: direction === "left" ? 75 : direction === "right" ? -75 : 0 },
    visible: { opacity: 1, y: 0, x: 0 },
  };

  return (
    <div ref={ref} className={className} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={variants}
        initial="hidden"
        animate={mainControls}
        transition={{ duration, delay, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
};
