import Image from 'next/image';
import Link from 'next/link';
import trailerPhoto from '../../images/biertrailer.jpg';
import CTA from '../components/CTA';

export const metadata = {
  title: 'Ausschankwagen mieten',
  description: 'Mobilen Ausschankwagen mit Stehtischen für dein Fest in Dietfurt an der Altmühl und Umgebung mieten.',
};

const details = [
  'Stehtische sind beim Ausschankwagen dabei',
  'Mit oder ohne Personal buchbar',
  'Mit oder ohne Getränke',
  'Anlieferung am Vortag nach Absprache möglich',
  'Mietdauer für einen Abend oder mehrere Wochen',
  'Mobile Zapfanlage separat zum Ausleihen',
];

export default function ProductsPage() {
  return (
    <>
      <section className="page-intro">
        <div className="container">
          <span className="eyebrow">Der mobile Ausschank</span>
          <h1>Ausschankwagen mieten</h1>
          <p>Mach deine Veranstaltung zum Treffpunkt – mit Ausschankwagen und Stehtischen oder einer mobilen Zapfanlage zum Ausleihen.</p>
        </div>
      </section>
      <section className="section">
        <div className="container split-section">
          <div className="split-photo">
            <Image
              src={trailerPhoto}
              alt="Ausschankwagen von BB's Biertrailer auf einer Veranstaltung"
              fill
              priority
              sizes="(max-width: 850px) 100vw, 50vw"
            />
          </div>
          <div className="split-copy">
            <span className="eyebrow">Flexibel nach Absprache</span>
            <h2>Der Mittelpunkt für dein Fest.</h2>
            <p>
              Die Stehtische sind beim Ausschankwagen dabei. Ob für einen Abend
              oder mehrere Wochen: Gemeinsam finden wir den passenden Rahmen für
              deine Feier. Eine mobile Zapfanlage kannst du auch separat ausleihen.
            </p>
            <ul className="detail-list">
              {details.map((detail) => (
                <li key={detail}><span className="check-mark" aria-hidden="true">✓</span>{detail}</li>
              ))}
            </ul>
            <Link className="button" href="/contact">Verfügbarkeit anfragen <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
