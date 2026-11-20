import Link from 'next/link';

export default function CTA() {
  return (
    <section className="section">
      <div className="container">
        <div className="cta-panel">
          <div>
            <span className="eyebrow">Dein nächstes Fest</span>
            <h2>Du planst eine Feier? Wir machen den Ausschank einfach.</h2>
            <p>Melde dich ganz unkompliziert telefonisch oder per E-Mail.</p>
          </div>
          <Link className="button" href="/contact">Kontakt aufnehmen <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
    </section>
  );
}
