import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { WHATSAPP_NUMBER, buildWhatsAppUrl } from '@/lib/contact';

export const WhatsAppFloatingButton = () => {
  const href = buildWhatsAppUrl(
    'Olá! Vim pela landing page da HMX e quero falar com a equipe.',
  );

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Falar no WhatsApp ${WHATSAPP_NUMBER}`}
      title={`WhatsApp: ${WHATSAPP_NUMBER}`}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="group fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] right-[calc(1rem+env(safe-area-inset-right))] md:bottom-[calc(1.5rem+env(safe-area-inset-bottom))] md:right-[calc(1.5rem+env(safe-area-inset-right))] z-50 flex items-center overflow-hidden rounded-full border border-white/10 bg-bg-primary/35 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.45)] transition-all duration-300 hover:border-success/40 hover:shadow-[0_12px_55px_rgba(34,197,94,0.22)] focus:outline-none focus-visible:ring-2 focus-visible:ring-success focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary"
    >
      <span className="absolute inset-0 pointer-events-none bg-[radial-gradient(180px_at_20%_30%,rgba(34,197,94,0.35),transparent_60%)] opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
      <span className="absolute inset-0 pointer-events-none bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer" />

      <span className="relative flex items-center gap-2 p-2 sm:gap-3 sm:pl-2 sm:pr-3">
        <span className="grid h-10 w-10 place-items-center rounded-full bg-success text-white shadow-[0_0_22px_rgba(34,197,94,0.35)] sm:h-11 sm:w-11">
          <MessageCircle className="h-5 w-5 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110" />
        </span>
        <span className="hidden sm:inline max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold tracking-wide text-white/95 opacity-0 transition-[max-width,opacity] duration-300 group-hover:max-w-[180px] group-hover:opacity-100 group-focus-visible:max-w-[180px] group-focus-visible:opacity-100">
          Falar no WhatsApp
        </span>
      </span>
    </motion.a>
  );
};
