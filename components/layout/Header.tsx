import { useEffect, useState } from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { buildWhatsAppUrl } from '@/lib/contact';
import hmxLogoV2 from '@/hmx-logo-v2.png';

const navItems = [
  { label: 'Serviços', href: '#services' },
  { label: 'Método', href: '#method' },
  { label: 'Cases', href: '#cases' },
  { label: 'Planos', href: '#plans' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Aplicação', href: '#application' },
] as const;

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMobileMenuOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  const handleWhatsappClick = () => {
    window.open(
      buildWhatsAppUrl(
        'Olá, vim pela landing page da HMX.\nGostaria de agendar um diagnóstico estratégico para entender como posso melhorar minhas vendas e performance.',
      ),
      '_blank',
    );
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled
          ? 'bg-bg-primary/40 backdrop-blur-xl border-b border-white/5 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
          : 'bg-transparent py-5',
      )}
    >
      <Container className="flex items-center justify-between">
        <a
          href="#"
          className="flex items-center transition-all duration-300 hover:brightness-110 active:scale-95"
        >
          <img
            src={hmxLogoV2}
            alt="HMX Logo"
            className={cn(
              'w-auto object-contain transition-all duration-300',
              isScrolled ? 'h-12 md:h-14' : 'h-14 md:h-16',
            )}
          />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-text-secondary hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
          <Button size="sm" onClick={handleWhatsappClick}>
            Agendar Diagnóstico
          </Button>
        </nav>

        <button
          type="button"
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-nav"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      {isMobileMenuOpen && (
        <nav
          id="mobile-nav"
          aria-label="Navegação"
          className="absolute top-full left-0 right-0 bg-bg-secondary/95 backdrop-blur-xl border-b border-white/10 p-6 md:hidden flex flex-col gap-6 shadow-2xl animate-menu-in max-h-[calc(100vh-5rem)] overflow-auto"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-lg font-medium text-text-secondary hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <Button
            className="w-full"
            onClick={() => {
              setIsMobileMenuOpen(false);
              handleWhatsappClick();
            }}
          >
            Agendar Diagnóstico
          </Button>
        </nav>
      )}
    </header>
  );
};
