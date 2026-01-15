import React from 'react';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';
import { motion, type HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant = 'primary', size = 'md', isLoading, ...props }, ref) => {
    
    // Base classes
    const baseClasses = 'inline-flex items-center justify-center rounded-[var(--radius-sm)] font-medium tracking-wide relative overflow-hidden transition-all duration-300';
    
    const variants = {
      primary: 'bg-accent-primary text-white shadow-lg shadow-accent-primary/25 hover:shadow-accent-primary/50 border border-transparent',
      secondary: 'bg-surface text-text-primary hover:bg-surface-hover backdrop-blur-sm border border-white/10 hover:border-white/20',
      outline: 'border border-accent-primary text-accent-primary hover:bg-accent-primary/10',
      ghost: 'text-text-secondary hover:text-white hover:bg-white/5',
    };

    const sizes = {
      sm: 'h-9 px-4 text-sm',
      md: 'h-12 px-6 text-base',
      lg: 'h-14 px-8 text-lg font-semibold',
    };

    return (
      <motion.button
        ref={ref}
        whileTap={{ scale: 0.98 }}
        whileHover={{ scale: 1.02 }}
        className={cn(baseClasses, "group", variants[variant], sizes[size], className)}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {/* Shimmer Effect for Primary */}
        {variant === 'primary' && (
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-[-100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-30deg] group-hover:animate-shimmer" />
            </div>
        )}
        
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        <span className="relative z-10 flex items-center">{children as React.ReactNode}</span>
      </motion.button>
    );
  }
);
Button.displayName = 'Button';
