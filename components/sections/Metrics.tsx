
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { CountUp } from '@/components/ui/CountUp';
import { Reveal } from '@/components/ui/Reveal';

const metrics = [
  { value: 150000, label: 'Leads Gerados', prefix: '+' },
  { value: 45, label: 'Conversão Média', suffix: '%' },
  { value: 50, label: 'Milhões Faturados', prefix: 'R$', suffix: 'M+' },
  { value: 20, label: 'Segmentos Atendidos', prefix: '+' }
];

export const Metrics = () => {
  return (
    <Section className="py-12 border-y border-white/5 bg-bg-secondary/50 backdrop-blur-sm -mt-10 relative z-20">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, i) => (
                <Reveal key={i} delay={i * 0.1}>
                    <div className="text-center group cursor-default">
                        <div className="text-3xl md:text-5xl font-bold text-white mb-2 group-hover:text-accent-primary transition-colors duration-300 font-mono">
                            <CountUp value={metric.value} suffix={metric.suffix} prefix={metric.prefix} />
                        </div>
                        <div className="text-sm md:text-base text-text-secondary uppercase tracking-widest text-[10px]">
                            {metric.label}
                        </div>
                    </div>
                </Reveal>
            ))}
        </div>
        <Reveal delay={0.4}>
            <p className="text-center text-xs text-text-muted mt-8 opacity-60">
                *Resultados variam conforme estratégia, mercado e execução.
            </p>
        </Reveal>
      </Container>
    </Section>
  );
};
