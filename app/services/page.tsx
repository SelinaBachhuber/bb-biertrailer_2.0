import ServiceSection from '../components/sections/ServiceSection';
import CTA from '../components/CTA';

export default function ServicesPage() {
  return (
    <>
      <section className="page-intro">
        <div className="container">
          <span className="eyebrow">Dein Event, dein Umfang</span>
          <h1>Mehr als nur ein Wagen</h1>
          <p>Stehtische zum Ausschankwagen, eine mobile Zapfanlage zum Ausleihen und flexible Unterstützung – passend zu deiner Feier.</p>
        </div>
      </section>
      <ServiceSection />
      <CTA />
    </>
  );
}
