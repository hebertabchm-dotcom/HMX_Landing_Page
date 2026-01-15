import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ArrowRight, BarChart3, TrendingUp, Cpu, Database } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { motion } from 'framer-motion';
import { Reveal } from '@/components/ui/Reveal';
import { WhatsAppLink } from '@/components/ui/WhatsAppLink';

export const Hero = () => {
  const handleWhatsappClick = () => {
     const message = encodeURIComponent(
      "Olá, vim pela landing page da HMX.\nGostaria de agendar um diagnóstico estratégico para entender como posso melhorar minhas vendas e performance."
    );
     window.open(`https://wa.me/5521969958530?text=${message}`, '_blank');
  };

  return (
    <Section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden flex flex-col justify-center min-h-[90vh]">
        {/* Tech Background Grid */}
        <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        </div>

        {/* Ambient Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none z-0">
            <motion.div 
                animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }} 
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[-20%] left-[20%] w-[500px] h-[500px] bg-accent-primary/20 blur-[120px] rounded-full mix-blend-screen" 
            />
            <div className="absolute bottom-[-10%] right-[10%] w-[400px] h-[400px] bg-purple-500/10 blur-[120px] rounded-full mix-blend-screen opacity-30" />
        </div>

      <Container className="relative z-10 flex flex-col items-center text-center">
        <Reveal width="100%" className='flex justify-center'>
            <Badge className="mb-8 hover:scale-105 transition-transform cursor-default border-accent-secondary/50" icon={<TrendingUp size={14} />} variant="outline">
                Agência de Performance & Growth
            </Badge>
        </Reveal>
        
        <Reveal delay={0.1} width="100%" className="flex justify-center">
             <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6 max-w-5xl text-center">
                Performance real para vender mais <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary animate-pulse">todos os dias.</span>
            </h1>
        </Reveal>
        
        <Reveal delay={0.2} width="100%" className="flex justify-center">
            <p className="text-lg md:text-xl text-text-secondary mb-10 max-w-2xl leading-relaxed text-center">
            Estratégia, mídia paga, funil e dados trabalhando juntos para escalar seu faturamento sem promessas vazias.
            </p>
        </Reveal>
        
        <Reveal delay={0.3} width="100%" className="flex justify-center">
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center mb-16">
            <Button size="lg" onClick={handleWhatsappClick} className="w-full sm:w-auto h-14 px-8 text-lg shadow-accent-primary/20 hover:shadow-accent-primary/40">
                Agendar Diagnóstico <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="secondary" className="w-full sm:w-auto h-14 px-8 text-lg" onClick={() => document.getElementById('cases')?.scrollIntoView({ behavior: 'smooth' })}>
                Ver Cases
            </Button>
             </div>
             <div className="flex justify-center">
               <WhatsAppLink size="sm" />
             </div>
        </Reveal>

        <Reveal delay={0.4} width="100%" className='border-t border-white/5 pt-12 mt-4'>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 w-full max-w-4xl mx-auto">
                {[
                    { icon: TrendingUp, label: "ROI Focado" },
                    { icon: BarChart3, label: "Escala Previsível" },
                    { icon: Database, label: "Decisões por Dados" },
                    { icon: Cpu, label: "Otimização Contínua" },
                ].map((item, i) => (
                    <motion.div 
                        whileHover={{ y: -5 }}
                        key={i} 
                        className="flex flex-col items-center gap-2 group cursor-default"
                    >
                        <div className="p-3 bg-white/5 rounded-xl text-accent-primary group-hover:bg-accent-primary/20 group-hover:text-white group-hover:shadow-[0_0_15px_rgba(14,165,233,0.3)] transition-all duration-300">
                            <item.icon size={24} />
                        </div>
                        <span className="text-sm font-medium text-text-secondary">{item.label}</span>
                    </motion.div>
                ))}
            </div>
        </Reveal>

        {/* Scroll Indicator */}
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-muted hidden md:flex flex-col items-center gap-2"
        >
            <span className="text-[10px] uppercase tracking-[0.2em] font-medium opacity-50">Scroll para explorar</span>
            <motion.div 
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-5 h-8 border-2 border-white/10 rounded-full flex justify-center p-1"
            >
                <div className="w-1 h-2 bg-accent-primary rounded-full" />
            </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
};
