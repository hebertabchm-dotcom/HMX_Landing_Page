import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'outline' | 'solid';
  icon?: React.ReactNode;
}

export const Badge = ({ children, className, variant = 'outline', icon, ...props }: BadgeProps) => {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium transition-colors backdrop-blur-sm",
        variant === 'outline' && "border border-accent-secondary/30 text-accent-secondary bg-accent-primary/5",
        variant === 'solid' && "bg-accent-primary/20 text-accent-secondary",
        className
      )}
      {...props}
    >
      {icon && <span className="mr-2 flex-shrink-0">{icon}</span>}
      {children}
    </span>
  );
};
