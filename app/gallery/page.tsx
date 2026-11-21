import Image from 'next/image';
import Link from 'next/link';
import exteriorPhoto from '../../images/galerie_außen.jpeg';
import exteriorLightsPhoto from '../../images/galerie_außenlicht.jpg';
import interiorOnePhoto from '../../images/galerie_innen1.jpeg';
import interiorTwoPhoto from '../../images/galerie_innen2.jpeg';
import interiorLightsPhoto from '../../images/galerie_wagen_innenraum.jpg';
import trailerPhoto from '../../images/galerie_titel.png';
import washAreaPhoto from '../../images/galerie_waschbecken.jpeg';
import christmasPhoto from '../../images/galerie_weihnachten.png';
import eventPhoto from '../../images/biertrailer.jpg';

export const metadata = {
  title: 'Galerie',
  description: 'Einblicke in den Biertrailer, Ausschankbereich und Ausstattung bei Veranstaltungen.',
};

const photos = [
  {
    src: exteriorPhoto,
    alt: 'Der Biertrailer bei einer Abendveranstaltung',
    caption: 'Der Trailer im Abendlicht',
  },
  {
    src: trailerPhoto,
    alt: 'Seitenansicht des BB’s Biertrailers',
    caption: 'Der Biertrailer von außen',
  },
  {
    src: interiorTwoPhoto,
    alt: 'Zapfhähne, Gläser und Theke im Biertrailer',
    caption: 'Bereit für den Ausschank',
  },
  {
    src: christmasPhoto,
    alt: 'Weihnachtlich dekorierter Biertrailer bei einer Veranstaltung',
    caption: 'Auch bei besonderen Anlässen dabei',
  },
  {
    src: interiorOnePhoto,
    alt: 'Blick auf Zapfanlage und Gläser im Ausschankwagen',
    caption: 'Ein Blick in den Ausschank',
  },
  {
    src: interiorLightsPhoto,
    alt: 'Getränke und Beleuchtung im Inneren des Biertrailers',
    caption: 'Stimmung am Abend',
  },
  {
    src: exteriorLightsPhoto,
    alt: 'Beleuchteter Ausschankbereich am Abend',
    caption: 'Licht an, Fest beginnt',
  },
  {
    src: washAreaPhoto,
    alt: 'Spül- und Waschbereich im Biertrailer',
    caption: 'Praktisch ausgestattet',
  },
  {
    src: eventPhoto,
    alt: 'BB’s Biertrailer bei einem Abend-Event',
    caption: 'Der mobile Treffpunkt für dein Event',
  },
];

export default function GalleryPage() {
  return (
    <>
      <section className="page-intro">
        <div className="container">
          <span className="eyebrow">Einblicke</span>
          <h1>Der Biertrailer in Aktion</h1>
          <p>Entdecke den Biertrailer von außen, den Ausschankbereich und die Ausstattung für dein Event.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="gallery-grid">
            {photos.map((photo, index) => (
              <figure className="gallery-card" key={photo.caption}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  priority={index === 0}
                  quality={80}
                  sizes="(max-width: 560px) 100vw, (max-width: 980px) 50vw, 33vw"
                />
                <figcaption>{photo.caption}</figcaption>
              </figure>
            ))}
          </div>
          <div className="button-row" style={{ justifyContent: 'center', marginTop: 28 }}>
            <Link className="button button-light" href="https://www.instagram.com/bb_biertrailer" target="_blank" rel="noreferrer">
              BB&apos;s auf Instagram ansehen <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
