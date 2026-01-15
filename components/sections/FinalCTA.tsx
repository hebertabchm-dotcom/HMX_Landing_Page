import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { MessageCircle } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
// import { WhatsAppLink } from '@/components/ui/WhatsAppLink';

export const FinalCTA = () => {
   const handleWhatsappClick = () => {
    const message = encodeURIComponent(
      "Olá, quero realizar o diagnóstico gratuito e descobrir onde estou perdendo dinheiro."
    );
     window.open(`https://wa.me/5521969958530?text=${message}`, '_blank');
  };

  return (
    <Section className="py-24 bg-bg-secondary relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
             <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] opacity-20"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent-primary/20 blur-[100px] rounded-full mix-blend-screen opacity-50 animate-pulse" style={{ animationDuration: '4s' }} />
        </div>

      <Container className="relative z-10 text-center">
        <Reveal width="100%">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight max-w-4xl mx-auto">
            Descubra onde seu negócio está <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">perdendo dinheiro.</span>
            </h2>
        </Reveal>
        
        <Reveal width="100%" delay={0.1}>
            <p className="text-lg md:text-xl text-text-secondary mb-10 max-w-2xl mx-auto leading-relaxed">
            Pare de gastar com o que não funciona. Receba um diagnóstico estratégico direto no WhatsApp e comece a escalar.
            </p>
        </Reveal>
        
        <Reveal width="100%" delay={0.2} className="flex justify-center">
            <Button size="lg" className="h-16 px-10 text-lg shadow-2xl shadow-accent-primary/20 hover:shadow-accent-primary/50 hover:scale-105 transition-all duration-300" onClick={handleWhatsappClick}>
            <MessageCircle className="mr-3 w-6 h-6" /> Falar com a HMX agora
            </Button>
        </Reveal>

        {/* <Reveal width="100%" delay={0.25} className="mt-6 flex justify-center">
          <WhatsAppLink size="sm" />
        </Reveal> */}
      </Container>
    </Section>
  );
};
