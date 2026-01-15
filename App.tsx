import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Metrics } from "@/components/sections/Metrics";
import { Services } from "@/components/sections/Services";
import { Method } from "@/components/sections/Method";
import { Cases } from "@/components/sections/Cases";
import { TargetAudience } from "@/components/sections/TargetAudience";
import { Testimonials } from "@/components/sections/Testimonials";
import { Plans } from "@/components/sections/Plans";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ApplicationForm } from "@/components/sections/ApplicationForm";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloatingButton } from "@/components/ui/WhatsAppFloatingButton";

function App() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary selection:bg-accent-primary/30">
      <Header />
      <main>
        <Hero />
        <Metrics />
        <Services />
        <Method />
        <TargetAudience />
        <Cases />
        <Testimonials />
        <Plans />
        <FAQ />
        <ApplicationForm />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
}

export default App;
