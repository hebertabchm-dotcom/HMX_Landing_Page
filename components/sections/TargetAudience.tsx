import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Check, X } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';

export const TargetAudience = () => {
  return (
    <Section className="bg-bg-primary">
      <Container>
        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
            {/* Para quem é */}
            <Reveal width="100%" direction="right">
                <div className="bg-bg-secondary/50 p-8 rounded-[var(--radius-lg)] border border-success/10 hover:border-success/20 transition-colors h-full">
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                        <span className="bg-success/20 text-success p-1 rounded-full"><Check size={20} /></span>
                        Para quem é a HMX
                    </h3>
                    <ul className="space-y-4">
                        {[
                            "Empresas que buscam previsibilidade de vendas",
                            "Negócios focados em crescimento real e escala",
                            "Quem valoriza dados e processos validados",
                            "Líderes que querem delegar o growth para especialistas"
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-text-secondary">
                                <Check size={18} className="text-success mt-1 flex-shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </Reveal>

             {/* Para quem não é */}
             <Reveal width="100%" delay={0.2} direction="left">
                <div className="bg-bg-secondary/20 p-8 rounded-[var(--radius-lg)] border border-white/5 opacity-80 hover:opacity-100 transition-opacity h-full">
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                        <span className="bg-red-500/20 text-red-500 p-1 rounded-full"><X size={20} /></span>
                        Para quem NÃO é
                    </h3>
                    <ul className="space-y-4">
                        {[
                            "Quem busca 'fórmulas mágicas' de enriquecimento rápido",
                            "Empresas que não querem investir em mídia paga",
                            "Gestores que não acreditam em análise de dados",
                            "Quem procura a agência mais barata do mercado"
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-text-muted">
                                <X size={18} className="text-red-500 mt-1 flex-shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </Reveal>
        </div>
      </Container>
    </Section>
  );
};
