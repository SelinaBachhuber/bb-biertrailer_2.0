import AboutSection from '../components/sections/AboutSection';
import CTA from '../components/CTA';

export const metadata = {
  title: 'Über uns',
  description: 'Regionaler, persönlicher und unkomplizierter Ausschankwagen-Service aus Dietfurt an der Altmühl.',
};

export default function AboutPage() {
  return (
    <>
      <section className="page-intro">
        <div className="container">
          <span className="eyebrow">Über BB&apos;s Biertrailer</span>
          <h1>Regional. Persönlich. Unkompliziert.</h1>
          <p>Ein Ansprechpartner, flexible Möglichkeiten und ein mobiler Ausschank für besondere gemeinsame Momente.</p>
        </div>
      </section>
      <AboutSection
        ctaHref="/contact"
        ctaLabel="Jetzt unverbindlich anfragen"
      />
      <CTA />
    </>
  );
}
