export default function ContactSection() {
  return (
    <section className="section">
      <div className="container contact-grid">
        <article className="contact-card">
          <span className="eyebrow">Direkter Draht</span>
          <h2>Erzähl uns von deinem Event.</h2>
          <p>
            Am einfachsten besprechen wir Verfügbarkeit und Wünsche persönlich.
            Ruf an oder schick eine E-Mail – wir freuen uns auf deine Anfrage.
          </p>
          <a className="contact-link" href="tel:+4915155990636">0151 55990636</a><br />
          <a className="contact-link" href="mailto:bb-biertrailer@mail.de">bb-biertrailer@mail.de</a>
        </article>
        <article className="contact-card">
          <h3>BB&apos;s Biertrailer</h3>
          <p>Inhaber: Bastian Bachhuber<br />92345 Dietfurt an der Altmühl<br />Deutschland</p>
          <p>Schreib am besten gleich deinen Wunschtermin und den Ort der Veranstaltung dazu.</p>
        </article>
      </div>
    </section>
  );
}
