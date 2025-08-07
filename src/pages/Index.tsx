import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import SpecialtiesSection from '@/components/SpecialtiesSection';
import ExamsSection from '@/components/ExamsSection';
import TeamSection from '@/components/TeamSection';
import ConveniosSection from '@/components/ConveniosSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ResultsSection from '@/components/ResultsSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <SpecialtiesSection />
        <ExamsSection />
        <TeamSection />
        <TestimonialsSection />
        <ConveniosSection />
        <ResultsSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
