import Image from 'next/image';
import Link from 'next/link';
import trailerPhoto from '../../images/biertrailer.jpg';

export default function Hero() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">BB&apos;s Biertrailer · Dietfurt</span>
            <h1>Dein Event.<br /><span>Dein Ausschank.</span></h1>
            <p className="hero-copy">
              Der mobile Ausschankwagen für Hochzeiten, Vereinsfeste und
              besondere Momente. Persönlich geplant, flexibel gemietet.
            </p>
            <div className="button-row">
              <Link className="button" href="/contact">Jetzt unverbindlich anfragen <span aria-hidden="true">↗</span></Link>
              <Link className="button button-light" href="/products">Angebot entdecken</Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-photo">
              <Image
                src={trailerPhoto}
                alt="BB's Ausschankwagen bei einem abendlichen Event"
                fill
                priority
                sizes="(max-width: 850px) 100vw, 52vw"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="feature-strip">
        <div className="container feature-grid">
          {[
            'Stehtische inklusive',
            'Mit oder ohne Personal',
            'Getränke flexibel abstimmen',
            'Mobile Zapfanlage zum Ausleihen',
          ].map((feature) => (
            <div className="feature-item" key={feature}>
              <span className="check-mark" aria-hidden="true">✓</span>{feature}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
