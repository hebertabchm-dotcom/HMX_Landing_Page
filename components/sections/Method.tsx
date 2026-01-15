import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Reveal } from '@/components/ui/Reveal';

const steps = [
  {
    title: 'Diagnóstico Estratégico',
    description: 'Análise profunda do seu negócio, concorrentes e oportunidades ocultas.'
  },
  {
    title: 'Plano de Ataque',
    description: 'Definição de canais, verba e projeção de resultados baseada em dados.'
  },
  {
    title: 'Implementação',
    description: 'Configuração de rastreamento, criação de campanhas e setup de ferramentas.'
  },
  {
    title: 'Otimização Semanal',
    description: 'Acompanhamento de métricas e ajustes finos para garantir ROI crescente.'
  },
  {
    title: 'Escala & Expansão',
    description: 'Aumento agressivo de investimento mantendo a rentabilidade.'
  }
];

export const Method = () => {
  return (
    <Section id="method" className="bg-bg-primary relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent-primary/5 blur-3xl pointer-events-none" />
      <Container>
        <Reveal width="100%">
            <SectionTitle 
                subtitle="Como trabalhamos" 
                title="O Método HMX de Crescimento" 
                className="md:mb-16"
            />
        </Reveal>
        
        <div className="relative max-w-3xl mx-auto">
            {/* Thread line */}
            <div className="absolute left-[20px] top-0 bottom-0 w-[2px] bg-white/10 md:left-1/2 md:-translate-x-1/2" />
            
            {steps.map((step, i) => (
                <div key={i} className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${i % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                    {/* Icon Node */}
                    <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-bg-primary border-4 border-bg-primary z-10 flex items-center justify-center">
                        <div className="w-4 h-4 rounded-full bg-accent-primary animate-pulse" />
                    </div>

                    {/* Content */}
                    <Reveal 
                        className={`pl-16 md:pl-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}
                        delay={i * 0.15}
                        direction={i % 2 === 0 ? "left" : "right"}
                    >
                        <div className="bg-white/5 p-6 rounded-2xl border border-white/5 hover:border-accent-primary/30 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
                            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2 justify-start md:justify-[inherit]">
                                <span className="text-accent-primary text-sm font-mono">0{i+1}.</span>
                                {step.title}
                            </h3>
                            <p className="text-text-secondary leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    </Reveal>
                </div>
            ))}
        </div>
      </Container>
    </Section>
  );
};
