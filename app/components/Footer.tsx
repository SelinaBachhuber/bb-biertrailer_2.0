import Image from 'next/image';
import Link from 'next/link';
import wheatLogo from '../../images/weizen.png';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link className="brand footer-brand" href="/">
              <Image className="header-logo" src={wheatLogo} alt="" />
              <span>BB&apos;s Biertrailer</span>
            </Link>
            <p className="footer-copy">
              Ob nebenan oder weiter entfernt – wir kommen dorthin, wo gefeiert wird. Fragen Sie Ihren Wunschtermin einfach unverbindlich an.
            </p>
          </div>
          <div className="footer-column">
            <h2>Entdecken</h2>
            <nav className="footer-links" aria-label="Footer Navigation">
              <Link href="/about">Über uns</Link>
              <Link href="/products">Ausschankwagen</Link>
              <Link href="/services">Leistungen</Link>
              <Link href="/gallery">Galerie</Link>
              <Link href="/impressum">Impressum</Link>
            </nav>
          </div>
          <div className="footer-column">
            <h2>Kontakt &amp; Anbieter</h2>
            <div className="footer-links">
              <a href="tel:+4915155990636">0151 55990636</a>
              <a href="mailto:bb-biertrailer@mail.de">bb-biertrailer@mail.de</a>
              <span>BB&apos;s Biertrailer · Inhaber Bastian Bachhuber</span>
              <span>92345 Dietfurt an der Altmühl, Deutschland</span>
              <a href="https://www.instagram.com/bb_biertrailer" target="_blank" rel="noreferrer">Instagram ↗</a>
              <a href="https://www.facebook.com/people/BBs-BierTrailer/61578590884425/" target="_blank" rel="noreferrer">Facebook ↗</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>Version 2.0 · BB&apos;s Biertrailer</span>
          <Link href="/contact">Kontakt aufnehmen</Link>
        </div>
      </div>
    </footer>
  );
}
