
import { Container } from '@/components/ui/Container';
import { Instagram, Linkedin, Facebook, TrendingUp } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-bg-primary border-t border-white/5 py-12">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left flex flex-col items-center md:items-start">
                <a href="#" className="block mb-4 transition-transform hover:scale-105 duration-200">
                    <img 
                        src="/hmx-logo-v2.png" 
                        alt="HMX Logo" 
                        className="h-12 md:h-14 w-auto object-contain drop-shadow-[0_0_12px_rgba(14,165,233,0.2)]" 
                    />
                </a>
                <p className="text-text-muted text-sm max-w-xs leading-relaxed">
                    Transformando dados em lucro com estratégias de performance de elite para negócios ambiciosos.
                </p>
            </div>
            
            <div className="flex items-center gap-4">
                {[Instagram, Linkedin, Facebook].map((Icon, i) => (
                    <a 
                        key={i} 
                        href="#" 
                        className="text-text-muted hover:text-accent-primary transition-all duration-300 bg-white/5 p-3 rounded-full hover:bg-accent-primary/10 hover:shadow-[0_0_15px_rgba(14,165,233,0.2)]"
                    >
                        <Icon size={20} />
                    </a>
                ))}
            </div>
        </div>
        
        <div className="border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-text-muted text-xs">
                &copy; {new Date().getFullYear()} HMX. Todos os direitos reservados.
            </p>
            <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-xs font-medium text-text-muted hover:text-white transition-colors flex items-center gap-2 group"
            >
                Voltar ao topo 
                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-accent-primary transition-colors">
                    <TrendingUp size={12} className="-rotate-90" />
                </div>
            </button>
        </div>
      </Container>
    </footer>
  );
};
