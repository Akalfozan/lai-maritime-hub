import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import ServicesGrid from '@/components/home/ServicesGrid';
import WhyChooseLAI from '@/components/home/WhyChooseLAI';

const Index = () => {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <ServicesGrid />
        <WhyChooseLAI />
      </main>
      <Footer />
    </>
  );
};

export default Index;
