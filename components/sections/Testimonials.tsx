import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Card } from '@/components/ui/Card';
import { Star } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';

const testimonials = [
  {
    name: 'Carlos Mendes',
    role: 'CEO, E-comm Shoes',
    content:
      'A HMX mudou o jogo para nós. Saímos de um ROI de 2 para 7 em 3 meses. A previsibilidade que eles trouxeram permitiu dobrar nosso estoque.',
  },
  {
    name: 'Amanda Torres',
    role: 'Fundadora, TechStart',
    content:
      'Eles não são apenas gestores de tráfego, são parceiros de negócio. O dashboard de BI nos dá clareza total de onde investir cada centavo.',
  },
  {
    name: 'Ricardo Gomes',
    role: 'Diretor Comercial, ImobPrime',
    content:
      'A qualificação dos leads melhorou absurdamente. O time de vendas parou de perder tempo com curiosos e começou a fechar contratos.',
  },
] as const;

export const Testimonials = () => {
  return (
    <Section className="bg-bg-primary">
      <Container>
        <Reveal width="100%">
          <SectionTitle subtitle="O que dizem" title="Parceiros de crescimento" className="md:mb-16" />
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item, i) => (
            <Reveal key={item.name} delay={i * 0.1} className="h-full">
              <Card className="flex flex-col h-full hover:border-accent-primary/20 hover:-translate-y-2 transition-transform duration-300">
                <div className="flex gap-1 mb-4 text-accent-primary">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      size={16}
                      fill="currentColor"
                      className="drop-shadow-[0_0_5px_rgba(14,165,233,0.5)]"
                    />
                  ))}
                </div>
                <p className="text-text-secondary mb-6 flex-grow leading-relaxed italic">
                  "{item.content}"
                </p>
                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-10 h-10 rounded-full bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center text-accent-primary font-bold">
                    {item.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-white text-sm">{item.name}</p>
                    <p className="text-xs text-text-muted">{item.role}</p>
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
};

