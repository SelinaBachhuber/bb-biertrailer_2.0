import AboutSection from './components/sections/AboutSection';
import ProductSection from './components/sections/ProductSection';
import ServiceSection from './components/sections/ServiceSection';
import CTA from './components/CTA';
import Hero from './components/Hero';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProductSection />
      <ServiceSection />
      <AboutSection />
      <CTA />
    </>
  );
}
