import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
}

export const AccordionItem = ({ title, children }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        className="w-full flex items-center justify-between py-4 text-left hover:text-accent-primary transition-colors focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-white group-hover:text-accent-primary transition-colors">{title}</span>
        <ChevronDown
          className={cn(
            "w-5 h-5 text-text-muted transition-transform duration-300 group-hover:text-accent-primary",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0"
        )}
      >
        <div className="text-text-secondary leading-relaxed text-sm md:text-base pr-4">
            {children}
        </div>
      </div>
    </div>
  );
};

export const Accordion = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return <div className={cn("space-y-1", className)}>{children}</div>;
};
