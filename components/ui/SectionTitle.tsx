
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  center?: boolean;
}

export const SectionTitle = ({ title, subtitle, className, center = true }: SectionTitleProps) => {
  return (
    <div className={cn("mb-12", center && "text-center", className)}>
      {subtitle && (
        <span className="block text-accent-primary font-semibold tracking-wider text-sm uppercase mb-2">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
        {title}
      </h2>
    </div>
  );
};
