import { useState, useEffect } from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'Serviços', href: '#services' },
  { label: 'Método', href: '#method' },
  { label: 'Cases', href: '#cases' },
  { label: 'Planos', href: '#plans' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Aplicação', href: '#application' },
];

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

  const handleWhatsappClick = () => {
    const message = encodeURIComponent(
      "Olá, vim pela landing page da HMX.\nGostaria de agendar um diagnóstico estratégico para entender como posso melhorar minhas vendas e performance."
    );
    window.open(`https://wa.me/5521000000000?text=${message}`, '_blank');
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled 
          ? 'bg-bg-primary/40 backdrop-blur-xl border-b border-white/5 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.3)]' 
          : 'bg-transparent py-5'
      )}
    >
      <Container className="flex items-center justify-between">
        <a href="#" className="flex items-center transition-all duration-300 hover:brightness-110 active:scale-95">
            <img 
                src="/hmx-logo-v2.png" 
                alt="HMX Logo" 
                className={cn(
                    "w-auto object-contain transition-all duration-300",
                    isScrolled ? "h-12 md:h-14" : "h-14 md:h-16"
                )} 
            />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
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

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-bg-secondary border-b border-white/10 p-6 md:hidden flex flex-col gap-6 shadow-2xl animate-in slide-in-from-top-5 duration-200">
           {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-lg font-medium text-text-secondary hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <Button className="w-full" onClick={handleWhatsappClick}>
            Agendar Diagnóstico
          </Button>
        </div>
      )}
    </header>
  );
};
