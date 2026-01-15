import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Check } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { WhatsAppLink } from '@/components/ui/WhatsAppLink';

const plans = [
  {
    name: 'Start',
    description: 'Para quem está começando a investir em tráfego.',
    features: ['Gestão de Meta Ads', 'Relatórios Mensais', 'Reunião Mensal', 'Setup Inicial'],
  },
  {
    name: 'Growth',
    description: 'Para empresas focadas em tração e escala.',
    featured: true,
    features: ['Gestão Meta & Google', 'Landing Pages Otimizadas', 'Dashboards  BI', 'Reuniões Quinzenais', 'Copy & Criativos'],
  },
  {
    name: 'Scale',
    description: 'Operação completa de growth marketing.',
    features: ['Gestão Full Stack', 'CRO Contínuo', 'Automação CRM', 'Consultoria Semanal', 'Time Dedicado'],
  },
];

export const Plans = () => {
   const handleWhatsappClick = (planName: string) => {
    const message = encodeURIComponent(
      `Olá, tenho interesse no plano ${planName} da HMX.`
    );
     window.open(`https://wa.me/5521969958530?text=${message}`, '_blank');
  };

  return (
    <Section id="plans" className="bg-bg-secondary relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-primary/20 to-transparent" />
      <Container>
        <Reveal width="100%">
            <SectionTitle 
                subtitle="Invista certo" 
                title="Planos para o seu momento" 
            />
        </Reveal>
        
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-start">
            {plans.map((item, i) => (
                <Reveal key={i} delay={i * 0.15} className={`h-full ${item.featured ? 'md:-mt-4 md:-mb-4 z-10' : ''}`}>
                     <Card 
                        className={`relative flex flex-col h-full ${
                            item.featured 
                            ? 'border-accent-primary shadow-[0_0_20px_rgba(14,165,233,0.15)] bg-bg-secondary transform md:scale-105' 
                            : 'hover:border-white/20 bg-surface/50'
                        }`}
                    >
                        {item.featured && (
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-lg shadow-accent-primary/40 animate-pulse">
                                Mais Popular
                            </div>
                        )}
                        <h3 className="text-2xl font-bold text-white mb-2">{item.name}</h3>
                        <p className="text-sm text-text-muted mb-8 min-h-[40px]">{item.description}</p>
                        
                        <ul className="space-y-4 mb-8 flex-grow">
                            {item.features.map((feature, f) => (
                                <li key={f} className="flex items-start gap-3 text-sm text-text-secondary">
                                    <div className="mt-0.5 min-w-[16px]">
                                        <Check size={16} className="text-success drop-shadow-[0_0_3px_rgba(34,197,94,0.5)]" />
                                    </div>
                                    <span className="leading-snug">{feature}</span>
                                </li>
                            ))}
                        </ul>
                        
                        <Button 
                            variant={item.featured ? 'primary' : 'outline'} 
                            className="w-full mt-auto"
                            onClick={() => handleWhatsappClick(item.name)}
                        >
                            Solicitar Orçamento
                        </Button>
                    </Card>
                </Reveal>
            ))}
        </div>
        <Reveal delay={0.4} width="100%">
            <p className="text-center text-sm text-text-muted mt-8 opacity-70">
                *O investimento varia conforme escopo e verba de mídia.
            </p>
        </Reveal>
        <Reveal delay={0.45} width="100%" className="mt-3 flex justify-center">
            <WhatsAppLink size="sm" />
        </Reveal>
      </Container>
    </Section>
  );
};
