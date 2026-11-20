import Image from 'next/image';
import Link from 'next/link';
import trailerPhoto from '../../../images/biertrailer.jpg';

export default function AboutSection() {
  return (
    <section className="section section-white">
      <div className="container split-section">
        <div className="split-photo">
          <Image
            src={trailerPhoto}
            alt="Der mobile Ausschankwagen von BB's Biertrailer"
            fill
            sizes="(max-width: 850px) 100vw, 50vw"
          />
        </div>
        <div className="split-copy">
          <span className="eyebrow">Persönlich aus der Region</span>
          <h2>Ein guter Ausschank gehört einfach dazu.</h2>
          <p>
            BB&apos;s Biertrailer aus Dietfurt an der Altmühl bringt den
            Ausschankwagen direkt zu deiner Veranstaltung. Du entscheidest,
            welche Unterstützung du brauchst.
          </p>
          <ul className="detail-list">
            <li><span className="check-mark" aria-hidden="true">✓</span>Persönlicher Kontakt mit Bastian Bachhuber</li>
            <li><span className="check-mark" aria-hidden="true">✓</span>Flexible Mietdauer – vom Abend bis zu mehreren Wochen</li>
            <li><span className="check-mark" aria-hidden="true">✓</span>Anlieferung am Vortag nach Absprache möglich</li>
          </ul>
          <Link className="button button-light" href="/about">Mehr über uns erfahren <span aria-hidden="true">→</span></Link>
        </div>
      </div>
    </section>
  );
}
