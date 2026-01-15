import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Accordion, AccordionItem } from '@/components/ui/Accordion';
import { Reveal } from '@/components/ui/Reveal';

const faqs = [
  {
    q: 'O que diferencia a HMX de outras agências?',
    a: 'Não focamos em métricas de vaidade (curtidas, seguidores), focamos em vendas e ROI. Somos consultores de negócios que usam tráfego como ferramenta.',
  },
  {
    q: 'Qual o investimento mínimo?',
    a: 'Não temos um mínimo fixo, mas recomendamos uma verba de mídia que permita testes e otimização. Em nossa reunião de diagnóstico, avaliamos seu momento e sugerimos o budget ideal.',
  },
  {
    q: 'Quanto tempo demora para ter resultados?',
    a: 'O tráfego gera visitas imediatas. O tempo de maturação da campanha varia, mas nossos clientes costumam ver melhoria nas conversões já no primeiro mês de otimização (Setup + 30 dias).',
  },
  {
    q: 'Vocês atendem quais nichos?',
    a: 'Somos especialistas em empresas de serviço, e-commerce, infoprodutos e negócios locais que buscam escala. Se você tem um produto validado, podemos acelerar.',
  },
  {
    q: 'Como funciona o diagnóstico?',
    a: 'É uma reunião gratuita de 30 minutos onde analisamos sua estrutura atual, identificamos gargalos e apresentamos um plano de ação preliminar.',
  }
];

export const FAQ = () => {
  return (
    <Section id="faq" className="bg-bg-primary">
      <Container className="max-w-3xl">
        <Reveal width="100%">
             <SectionTitle 
                subtitle="Tire suas dúvidas" 
                title="Perguntas Frequentes" 
                center
                className="md:mb-16"
            />
        </Reveal>
       
        <Reveal width="100%" delay={0.2}>
            <Accordion>
                {faqs.map((item, i) => (
                    <AccordionItem key={i} title={item.q}>
                        {item.a}
                    </AccordionItem>
                ))}
            </Accordion>
        </Reveal>
      </Container>
    </Section>
  );
};
