import { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Reveal } from '@/components/ui/Reveal';
import { Send } from 'lucide-react';

export const ApplicationForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        whatsapp: '',
        company: '',
        website: '',
        revenue: '',
        challenge: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate a small delay for "processing" feel
        setTimeout(() => {
            const message = encodeURIComponent(
                `*Nova Aplicação via Site*\n\n` +
                `👤 *Nome:* ${formData.name}\n` +
                `📱 *WhatsApp:* ${formData.whatsapp}\n` +
                `🏢 *Empresa:* ${formData.company}\n` +
                `🌐 *Site:* ${formData.website}\n` +
                `💰 *Faturamento:* ${formData.revenue}\n` +
                `🎯 *Maior Desafio:* ${formData.challenge}`
            );
            
            window.open(`https://wa.me/5521969958530?text=${message}`, '_blank');
            setIsLoading(false);
            setIsSubmitted(true);
        }, 1200);
    };

    if (isSubmitted) {
        return (
            <Section id="application" className="bg-bg-primary relative min-h-[500px] flex items-center justify-center py-20">
                <Container className="max-w-2xl text-center">
                    <Reveal width="100%">
                        <div className="bg-surface/30 p-12 rounded-3xl border border-accent-primary/20 backdrop-blur-xl shadow-2xl">
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-success/20 text-success rounded-full mb-6">
                                <Send size={40} className="ml-1" />
                            </div>
                            <h2 className="text-3xl font-bold text-white mb-4">Aplicação Recebida!</h2>
                            <p className="text-text-secondary text-lg mb-8 leading-relaxed">
                                Sua solicitação foi enviada diretamente para nossa equipe. Em breve você receberá um contato no WhatsApp para agendarmos o seu diagnóstico.
                            </p>
                            <p className="text-sm text-text-muted mb-8">
                              Se precisar falar agora:{' '}
                              <a
                                href="https://wa.me/5521969958530"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-success hover:brightness-110 underline underline-offset-4"
                              >
                                21969958530
                              </a>
                            </p>
                            <Button variant="outline" size="lg" onClick={() => setIsSubmitted(false)}>
                                Enviar outra aplicação
                            </Button>
                        </div>
                    </Reveal>
                </Container>
            </Section>
        );
    }

  return (
    <Section id="application" className="bg-bg-primary relative scroll-mt-20">
      <Container className="max-w-4xl">
        <Reveal width="100%" className='mb-12'>
             <SectionTitle 
                subtitle="Aplicação" 
                title="Agende seu Diagnóstico" 
                center
                className="mb-4"
            />
            <p className="text-center text-text-secondary max-w-2xl mx-auto">
                Preencha o formulário abaixo para entendermos o seu momento. Se a sua empresa tiver o perfil que buscamos, entraremos em contato em até 24h.
            </p>
            <p className="mt-4 text-center text-sm text-text-muted">
              Ou fale direto no WhatsApp:{' '}
              <a
                href="https://wa.me/5521969958530"
                target="_blank"
                rel="noopener noreferrer"
                className="text-success hover:brightness-110 underline underline-offset-4"
              >
                21969958530
              </a>
            </p>
        </Reveal>

        <Reveal width="100%" delay={0.2}>
            <form onSubmit={handleSubmit} className="bg-surface/30 p-6 md:p-10 rounded-2xl border border-white/5 backdrop-blur-sm space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-text-secondary">Nome Completo</label>
                        <Input id="name" name="name" placeholder="Seu nome" required value={formData.name} onChange={handleChange} />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="whatsapp" className="text-sm font-medium text-text-secondary">WhatsApp com DDD</label>
                        <Input id="whatsapp" name="whatsapp" placeholder="(00) 00000-0000" required value={formData.whatsapp} onChange={handleChange} />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                         <label htmlFor="company" className="text-sm font-medium text-text-secondary">Nome da Empresa</label>
                         <Input id="company" name="company" placeholder="Sua empresa" required value={formData.company} onChange={handleChange} />
                    </div>
                     <div className="space-y-2">
                         <label htmlFor="website" className="text-sm font-medium text-text-secondary">Site / Instagram</label>
                         <Input id="website" name="website" placeholder="www.suaempresa.com.br" value={formData.website} onChange={handleChange} />
                    </div>
                </div>

                <div className="space-y-2">
                     <label htmlFor="revenue" className="text-sm font-medium text-text-secondary">Faturamento Mensal (Média)</label>
                     <select 
                        id="revenue" 
                        name="revenue" 
                        className="flex h-12 w-full rounded-[var(--radius-sm)] border border-white/10 bg-surface/50 px-3 py-2 text-sm text-text-primary ring-offset-bg-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200"
                        required
                        value={formData.revenue}
                        onChange={handleChange}
                    >
                        <option value="" disabled>Selecione uma opção</option>
                        <option value="Até 10k">Até R$ 10.000</option>
                        <option value="10k - 50k">de R$ 10.000 a R$ 50.000</option>
                        <option value="50k - 100k">de R$ 50.000 a R$ 100.000</option>
                        <option value="100k - 300k">de R$ 100.000 a R$ 300.000</option>
                        <option value="300k+">Acima de R$ 300.000</option>
                     </select>
                </div>

                <div className="space-y-2">
                    <label htmlFor="challenge" className="text-sm font-medium text-text-secondary">Qual seu maior desafio hoje?</label>
                    <Textarea id="challenge" name="challenge" placeholder="Ex: Leads desqualificados, CPA alto, falta de processo..." rows={4} value={formData.challenge} onChange={handleChange} />
                </div>

                <Button type="submit" size="lg" className="w-full" isLoading={isLoading}>
                    Enviar Aplicação <Send className="ml-2 w-4 h-4" />
                </Button>

                <p className="text-center text-xs text-text-muted flex items-center justify-center gap-2">
                   🔒 Seus dados estão seguros. Não enviamos spam.
                </p>
            </form>
        </Reveal>
      </Container>
    </Section>
  );
};
