import { useState, type ChangeEvent, type FormEvent } from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Reveal } from '@/components/ui/Reveal';
import { WhatsAppLink } from '@/components/ui/WhatsAppLink';
import { submitApplicationToN8n, type ApplicationWebhookPayload } from '@/lib/n8n';
import { Send } from 'lucide-react';

type ApplicationFormData = {
  name: string;
  whatsapp: string;
  company: string;
  website: string;
  revenue: string;
  challenge: string;
};

export const ApplicationForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [formData, setFormData] = useState<ApplicationFormData>({
    name: '',
    whatsapp: '',
    company: '',
    website: '',
    revenue: '',
    challenge: '',
  });

  const whatsAppMessage = [
    '*Nova aplicação via site*',
    '',
    `Nome: ${formData.name}`,
    `WhatsApp: ${formData.whatsapp}`,
    `Empresa: ${formData.company}`,
    `Site: ${formData.website}`,
    `Faturamento: ${formData.revenue}`,
    `Maior desafio: ${formData.challenge}`,
  ].join('\n');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitError(null);

    const payload: ApplicationWebhookPayload = {
      ...formData,
      submittedAt: new Date().toISOString(),
      pageUrl: window.location.href,
      referrer: document.referrer ?? '',
      userAgent: navigator.userAgent,
    };

    try {
      await submitApplicationToN8n(payload);
      setIsSubmitted(true);
    } catch {
      setSubmitError('Não foi possível enviar seus dados agora. Tente novamente ou envie pelo WhatsApp.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <Section
        id="application"
        className="bg-bg-primary relative min-h-[500px] flex items-center justify-center py-20"
      >
        <Container className="max-w-2xl text-center">
          <Reveal width="100%">
            <div className="bg-surface/[0.08] p-6 sm:p-10 md:p-12 rounded-3xl border border-accent-primary/20 backdrop-blur-xl shadow-2xl">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-success/20 text-success rounded-full mb-6">
                <Send size={40} className="ml-1" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Aplicação recebida!</h2>
              <p className="text-text-secondary text-lg mb-8 leading-relaxed">
                Sua solicitação foi enviada para nossa equipe. Se preferir, fale agora no WhatsApp para
                acelerar o atendimento.
              </p>
              <div className="mb-8 flex justify-center">
                <WhatsAppLink size="sm" label="Falar agora no WhatsApp" />
              </div>
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
        <Reveal width="100%" className="mb-12">
          <SectionTitle subtitle="Aplicação" title="Agende seu Diagnóstico" center className="mb-4" />
          <p className="text-center text-text-secondary max-w-2xl mx-auto">
            Preencha o formulário abaixo para entendermos o seu momento. Se a sua empresa tiver o perfil
            que buscamos, entraremos em contato em até 24h.
          </p>
          <div className="mt-6 flex justify-center">
            <WhatsAppLink size="sm" label="Falar no WhatsApp" />
          </div>
        </Reveal>

        <Reveal width="100%" delay={0.2}>
          <form
            onSubmit={handleSubmit}
            className="bg-surface/[0.08] p-6 md:p-10 rounded-2xl border border-white/5 backdrop-blur-sm space-y-6"
          >
            {submitError && (
              <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-text-secondary">
                <p>{submitError}</p>
                <div className="mt-3 flex justify-center">
                  <WhatsAppLink size="sm" label="Enviar pelo WhatsApp" message={whatsAppMessage} />
                </div>
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-text-secondary">
                  Nome completo
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Seu nome"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="name"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="whatsapp" className="text-sm font-medium text-text-secondary">
                  WhatsApp com DDD
                </label>
                <Input
                  id="whatsapp"
                  name="whatsapp"
                  placeholder="(00) 00000-0000"
                  required
                  value={formData.whatsapp}
                  onChange={handleChange}
                  inputMode="tel"
                  autoComplete="tel"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium text-text-secondary">
                  Nome da empresa
                </label>
                <Input
                  id="company"
                  name="company"
                  placeholder="Sua empresa"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  autoComplete="organization"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="website" className="text-sm font-medium text-text-secondary">
                  Site / Instagram
                </label>
                <Input
                  id="website"
                  name="website"
                  placeholder="www.suaempresa.com.br"
                  value={formData.website}
                  onChange={handleChange}
                  autoComplete="url"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="revenue" className="text-sm font-medium text-text-secondary">
                Faturamento mensal (média)
              </label>
              <select
                id="revenue"
                name="revenue"
                className="flex h-12 w-full rounded-[var(--radius-sm)] border border-white/10 bg-bg-secondary/40 px-3 py-2 text-sm text-text-primary ring-offset-bg-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200"
                required
                value={formData.revenue}
                onChange={handleChange}
              >
                <option value="" disabled className="bg-bg-secondary text-text-primary">
                  Selecione uma opção
                </option>
                <option value="Ate 10k" className="bg-bg-secondary text-text-primary">
                  Até R$ 10.000
                </option>
                <option value="10k - 50k" className="bg-bg-secondary text-text-primary">
                  de R$ 10.000 a R$ 50.000
                </option>
                <option value="50k - 100k" className="bg-bg-secondary text-text-primary">
                  de R$ 50.000 a R$ 100.000
                </option>
                <option value="100k - 300k" className="bg-bg-secondary text-text-primary">
                  de R$ 100.000 a R$ 300.000
                </option>
                <option value="300k+" className="bg-bg-secondary text-text-primary">
                  Acima de R$ 300.000
                </option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="challenge" className="text-sm font-medium text-text-secondary">
                Qual seu maior desafio hoje?
              </label>
              <Textarea
                id="challenge"
                name="challenge"
                placeholder="Ex: Leads desqualificados, CPA alto, falta de processo..."
                rows={4}
                value={formData.challenge}
                onChange={handleChange}
              />
            </div>

            <Button type="submit" size="lg" className="w-full" isLoading={isLoading}>
              Enviar aplicação <Send className="ml-2 w-4 h-4" />
            </Button>

            <p className="text-center text-xs text-text-muted">
              Seus dados estão seguros. Não enviamos spam.
            </p>
          </form>
        </Reveal>
      </Container>
    </Section>
  );
};
