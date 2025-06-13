export const metadata = { title: 'Contacto | Mi Sitio' };

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-3xl space-y-6 py-24 px-4">
      <h1 className="text-4xl font-bold">Contacto</h1>
      <p>
        ¿Tienes un proyecto en mente? Rellena el formulario y nos pondremos en
        contacto contigo.
      </p>
      <form
        action="https://formspree.io/f/your-id"
        method="POST"
        className="space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          required
          className="w-full rounded-xl2 border border-gray-300 p-3"
        />
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          required
          className="w-full rounded-xl2 border border-gray-300 p-3"
        />
        <textarea
          name="message"
          rows={5}
          placeholder="Cuéntanos sobre tu proyecto"
          required
          className="w-full rounded-xl2 border border-gray-300 p-3"
        />
        <button
          type="submit"
          className="rounded-xl2 bg-brand px-6 py-3 font-semibold text-white transition hover:bg-brand-hover"
        >
          Enviar
        </button>
      </form>
    </section>
  );
}
