import Link from 'next/link';

const options = [
  {
    icon: '01',
    title: 'Der Ausschankwagen',
    description: 'Ein mobiler Mittelpunkt für deine Feier – ob bei Gartenfesten, Geburtstagen oder Vereinsfesten.',
  },
  {
    icon: '02',
    title: 'Mit oder ohne Personal',
    description: 'Du übernimmst den Ausschank selbst oder fragst Personal passend zu deinem Event an.',
  },
  {
    icon: '03',
    title: 'Getränke nach Wunsch',
    description: 'Miete den Wagen mit oder ohne Getränke. Die Details stimmen wir persönlich mit dir ab.',
  },
  {
    icon: '04',
    title: 'Mobile Zapfanlage',
    description: 'Auch ohne großen Wagen: Die mobile Zapfanlage kannst du separat für dein Event ausleihen.',
  },
];

export default function ProductSection() {
  return (
    <section className="section section-white">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Ein Wagen, viele Möglichkeiten</span>
          <h2>Alles für einen gelungenen Ausschank</h2>
          <p>
            Vom kompletten Ausschankwagen mit Stehtischen bis zur mobilen
            Zapfanlage: Wir stimmen den Mietumfang passend zu deinem Fest ab.
          </p>
        </div>
        <div className="offer-grid">
          {options.map((option) => (
            <article className="offer-card" key={option.title}>
              <span className="offer-icon" aria-hidden="true">{option.icon}</span>
              <h3>{option.title}</h3>
              <p>{option.description}</p>
            </article>
          ))}
        </div>
        <div className="button-row" style={{ justifyContent: 'center', marginTop: 32 }}>
          <Link className="button button-light" href="/products">Alle Mietmöglichkeiten <span aria-hidden="true">→</span></Link>
        </div>
      </div>
    </section>
  );
}
