const steps = [
  {
    number: '01',
    title: 'Termin anfragen',
    description: 'Ruf an oder schreib eine E-Mail mit deinem Veranstaltungstermin.',
  },
  {
    number: '02',
    title: 'Wünsche abstimmen',
    description: 'Wir besprechen Mietdauer, Getränke, Personal und Anlieferung.',
  },
  {
    number: '03',
    title: 'Entspannt feiern',
    description: 'Der Ausschankwagen kommt zum vereinbarten Zeitpunkt zu deinem Event.',
  },
];

export default function ServiceSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Unkompliziert geplant</span>
          <h2>Von der Anfrage bis zum Fest</h2>
          <p>Wir klären die Details direkt und persönlich – ganz ohne komplizierten Buchungsprozess.</p>
        </div>
        <div className="steps-grid">
          {steps.map((step) => (
            <article className="step-card" key={step.number}>
              <span className="step-number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
