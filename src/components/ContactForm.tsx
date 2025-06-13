'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const data = Object.fromEntries(new FormData(e.currentTarget));

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    setLoading(false);
    if (res.ok) setSent(true);
    else setError('No se pudo enviar. Inténtalo más tarde.');
  }

  if (sent) {
    return (
      <div className="rounded-xl2 bg-green-100 p-6 text-center text-green-700">
        ¡Gracias! Tu mensaje se ha enviado correctamente.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
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
      {error && (
        <p className="rounded bg-red-100 p-3 text-red-700">{error}</p>
      )}
      <button
        type="submit"
        disabled={loading}
        className="rounded-xl2 bg-brand px-6 py-3 font-semibold text-white transition hover:bg-brand-hover disabled:opacity-50"
      >
        {loading ? 'Enviando…' : 'Enviar'}
      </button>
    </form>
  );
}
