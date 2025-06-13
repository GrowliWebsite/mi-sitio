import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Contacto | Mi Sitio',
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-xl space-y-6 py-24 px-4">
      <h1 className="text-4xl font-bold">Contacto</h1>
      <p>
        ¿Tienes un proyecto en mente? Rellena el formulario y nos pondremos en
        contacto contigo.
      </p>
      <ContactForm />
    </section>
  );
}
