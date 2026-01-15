import React from 'react';
import { cn } from '@/lib/utils';
import { motion, type HTMLMotionProps } from 'framer-motion';

interface CardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  gradient?: boolean;
}

export const Card = ({ children, className, gradient = false, ...props }: CardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.01 }}
      className={cn(
        "relative group bg-surface rounded-[var(--radius-md)] border border-white/5 p-6 md:p-8 overflow-hidden",
        className
      )}
      {...props}
    >
        {/* Glow Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(400px_at_center,rgba(14,165,233,0.15),transparent)] pointer-events-none" />
        <div className="absolute inset-0 border border-t-[rgba(255,255,255,0.1)] border-l-[rgba(255,255,255,0.05)] rounded-[var(--radius-md)] pointer-events-none" />
        
        <div className={cn("relative z-10", className?.includes('h-full') ? 'h-full' : '')}>
            {children}
        </div>
    </motion.div>
  );
};
