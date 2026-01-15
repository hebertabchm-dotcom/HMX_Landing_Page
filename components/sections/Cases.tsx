import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';

const cases = [
  {
    segment: 'E-commerce Moda',
    objective: 'Escalar vendas',
    solution: 'Meta Ads + CRO',
    result: '+340% ROI',
  },
  {
    segment: 'SaaS B2B',
    objective: 'Gerar Leads Qualificados',
    solution: 'LinkedIn Ads + Funil',
    result: '-45% CPA',
  },
  {
    segment: 'Educação',
    objective: 'Lançamento de Curso',
    solution: 'Estratégia 360º',
    result: 'R$ 1.2M faturados',
  },
  {
    segment: 'Imobiliária',
    objective: 'Venda de Imóveis',
    solution: 'Google Ads + CRM',
    result: 'R$ 15M VGV',
  },
];

export const Cases = () => {
  const handleWhatsappClick = () => {
    const message = encodeURIComponent(
     "Olá, vim pela landing page da HMX.\nGostaria de agendar um diagnóstico estratégico para entender como posso melhorar minhas vendas e performance."
   );
    window.open(`https://wa.me/5521000000000?text=${message}`, '_blank');
 };

  return (
    <Section id="cases" className="bg-bg-secondary">
      <Container>
        <Reveal width="100%">
            <SectionTitle 
                subtitle="Resultados Reais" 
                title="Quem já escalou com a HMX" 
            />
        </Reveal>
        
        <div className="grid md:grid-cols-2 lg:gap-8 gap-6 mb-12">
            {cases.map((item, i) => (
                <Reveal key={i} delay={i * 0.1}>
                    <Card className="group cursor-default hover:border-accent-primary/50 hover:shadow-[0_0_20px_rgba(14,165,233,0.1)] h-full flex flex-col justify-between">
                        <div>
                            <div className="flex justify-between items-start mb-6">
                                <span className="text-xs font-semibold tracking-wider text-accent-primary bg-accent-primary/10 px-3 py-1 rounded-full uppercase border border-accent-primary/20">
                                    {item.segment}
                                </span>
                                <ArrowUpRight className="text-white/20 group-hover:text-accent-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                            </div>
                            <div className="space-y-6">
                                <div>
                                    <p className="text-[10px] text-text-muted mb-2 uppercase tracking-widest font-bold">Desafio</p>
                                    <h4 className="text-lg text-white font-medium leading-relaxed">{item.objective}</h4>
                                </div>
                                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
                                    <div>
                                        <p className="text-[10px] text-text-muted mb-2 uppercase tracking-widest font-bold">Solução</p>
                                        <p className="text-text-secondary text-sm">{item.solution}</p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-text-muted mb-2 uppercase tracking-widest font-bold text-accent-primary">Resultado</p>
                                        <p className="text-xl font-bold text-white drop-shadow-[0_0_10px_rgba(14,165,233,0.3)]">{item.result}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </Reveal>
            ))}
        </div>
        
        <Reveal width="100%" className='flex justify-center'>
             <Button variant="outline" onClick={handleWhatsappClick}>
                Quero resultados assim
             </Button>
        </Reveal>
      </Container>
    </Section>
  );
};
