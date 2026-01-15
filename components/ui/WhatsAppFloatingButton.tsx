import { MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER, buildWhatsAppUrl } from '@/lib/contact';

export const WhatsAppFloatingButton = () => {
  const href = buildWhatsAppUrl(
    'Ola! Vim pela landing page da HMX e quero falar com a equipe.',
  );

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Falar no WhatsApp ${WHATSAPP_NUMBER}`}
      title={`WhatsApp: ${WHATSAPP_NUMBER}`}
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-3 rounded-full bg-success px-4 py-3 text-white shadow-lg shadow-success/25 transition-all duration-300 hover:shadow-success/40 hover:brightness-110 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-success focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="text-sm font-semibold tracking-wide">WhatsApp</span>
    </a>
  );
};

