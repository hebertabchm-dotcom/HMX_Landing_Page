import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Section = ({ children, className, ...props }: SectionProps) => {
  return (
    <section className={cn("py-14 sm:py-16 md:py-24", className)} {...props}>
      {children}
    </section>
  );
};
