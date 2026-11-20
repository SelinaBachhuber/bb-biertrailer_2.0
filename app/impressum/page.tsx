import Image from 'next/image';
import { content } from '../../src/data/content';
import facebookIcon from '../../images/facebook_icon.png';
import instagramIcon from '../../images/insta (1).png';

export default function ImpressumPage() {
  return (
    <>
      <section className="page-intro">
        <div className="container">
          <span className="eyebrow">Rechtliches</span>
          <h1>Impressum</h1>
          <p>Angaben gemäß § 5 DDG</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <article className="contact-card">
            <h2>{content.company.name}</h2>
            <p>
              Inhaber: {content.company.owner}<br />
              {content.company.address}<br />
              {content.company.country}
            </p>
            <h3>Kontakt</h3>
            <p>
              Telefon: <a className="contact-link" href={`tel:${content.company.phoneLink}`}>{content.company.phone}</a><br />
              E-Mail: <a className="contact-link" href={`mailto:${content.company.email}`}>{content.company.email}</a>
            </p>
            <p>
              Hinweis: Für ein vollständiges Impressum ist noch die vollständige
              ladungsfähige Anschrift zu ergänzen.
            </p>
            <div className="imprint-social-links" aria-label="Social Media">
              <a
                href="https://www.instagram.com/bb_biertrailer"
                target="_blank"
                rel="noreferrer"
                aria-label="BB's Biertrailer auf Instagram"
              >
                <Image src={instagramIcon} alt="" />
              </a>
              <a
                href="https://www.facebook.com/people/BBs-BierTrailer/61578590884425/"
                target="_blank"
                rel="noreferrer"
                aria-label="BB's Biertrailer auf Facebook"
              >
                <Image src={facebookIcon} alt="" />
              </a>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
