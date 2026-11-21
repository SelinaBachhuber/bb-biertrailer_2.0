import ContactSection from '../components/sections/ContactSection';

export const metadata = {
  title: 'Anfrage',
  description: 'Verfügbarkeit für deinen Wunschtermin persönlich per Telefon oder E-Mail anfragen.',
};

export default function ContactPage() {
  return (
    <>
      <section className="page-intro">
        <div className="container">
          <span className="eyebrow">Wir sind gerne für dich da</span>
          <h1>Frag deinen Wunschtermin an.</h1>
          <p>Ein Anruf oder eine E-Mail genügt – direkt, persönlich und unkompliziert.</p>
        </div>
      </section>
      <ContactSection />
    </>
  );
}
