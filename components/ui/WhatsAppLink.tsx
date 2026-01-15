import { MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { WHATSAPP_NUMBER, buildWhatsAppUrl } from '@/lib/contact';

type WhatsAppLinkProps = {
  message?: string;
  label?: string;
  iconOnly?: boolean;
  className?: string;
  size?: 'sm' | 'md';
};

export const WhatsAppLink = ({
  message = 'Ola! Vim pela landing page da HMX e quero falar com a equipe.',
  label = 'Falar no WhatsApp',
  iconOnly = false,
  className,
  size = 'md',
}: WhatsAppLinkProps) => {
  const href = buildWhatsAppUrl(message);

  const sizes = {
    sm: iconOnly ? 'h-10 w-10' : 'h-10 px-4 text-sm',
    md: iconOnly ? 'h-11 w-11' : 'h-11 px-5 text-sm',
  } as const;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} (WhatsApp ${WHATSAPP_NUMBER})`}
      title={`WhatsApp: ${WHATSAPP_NUMBER}`}
      className={cn(
        'group inline-flex items-center justify-center gap-2 rounded-full border border-success/35 bg-success/10 text-success backdrop-blur-sm transition-all duration-300 hover:border-success/55 hover:bg-success/15 hover:shadow-[0_0_24px_rgba(34,197,94,0.25)] active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-success focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary',
        sizes[size],
        className,
      )}
    >
      <MessageCircle className="h-5 w-5 transition-transform duration-300 group-hover:rotate-3 group-hover:scale-110" />
      {!iconOnly && (
        <span className="font-semibold tracking-wide text-white/90 transition-colors group-hover:text-white">
          {label}
        </span>
      )}
    </a>
  );
};

