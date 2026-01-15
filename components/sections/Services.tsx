import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Card } from '@/components/ui/Card';
import {
  BarChart2,
  Database,
  Filter,
  LayoutDashboard,
  Megaphone,
  MousePointerClick,
} from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';

const services = [
  {
    icon: MousePointerClick,
    title: 'Tráfego Pago',
    description:
      'Gestão estratégica em Meta Ads, Google Ads e LinkedIn Ads focada em conversão e ROI.',
  },
  {
    icon: Filter,
    title: 'Funis & LPs',
    description: 'Landing pages de alta conversão e estruturação de funis de vendas validados.',
  },
  {
    icon: BarChart2,
    title: 'CRO (Otimização)',
    description: 'Análise de dados e testes A/B constantes para aumentar a taxa de conversão.',
  },
  {
    icon: LayoutDashboard,
    title: 'BI & Dashboards',
    description: 'Visualização clara dos dados para tomada de decisão em tempo real com Power BI.',
  },
  {
    icon: Database,
    title: 'CRM & Automação',
    description: 'Integração de CRM e automações de WhatsApp e E-mail para recuperação de leads.',
  },
  {
    icon: Megaphone,
    title: 'Criativos & Copy',
    description: 'Produção de anúncios e textos persuasivos focados na dor e desejo do cliente.',
  },
] as const;

export const Services = () => {
  return (
    <Section id="services" className="bg-bg-secondary relative">
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <Container className="relative z-10">
        <Reveal width="100%">
          <SectionTitle
            subtitle="Nossas Especialidades"
            title="Tudo o que você precisa para escalar"
            className="md:mb-16"
          />
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.1} className="h-full">
              <Card className="group h-full hover:shadow-[0_0_30px_rgba(14,165,233,0.15)] transition-shadow flex flex-col justify-between">
                <div>
                  <div className="mb-6 p-4 rounded-xl bg-accent-primary/10 w-fit group-hover:bg-accent-primary/20 transition-colors group-hover:scale-110 duration-300">
                    <service.icon className="w-8 h-8 text-accent-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">{service.description}</p>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
};

