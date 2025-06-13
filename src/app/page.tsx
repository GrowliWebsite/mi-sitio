import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="space-y-24">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center gap-6 py-32 text-center">
        <h1 className="max-w-4xl text-5xl font-bold leading-tight">
          Diseño, Desarrollo <span className="text-brand">&</span> Mantenimiento Web de Alto Impacto
        </h1>
        <p className="max-w-xl text-lg text-gray-600">
          De la idea al lanzamiento y más allá. Llevamos tu presencia digital al siguiente nivel.
        </p>
        <Button>Solicita tu presupuesto</Button>
      </section>

      {/* Servicios */}
      <section className="mx-auto grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 px-4">
        {[
          { title: 'Diseño UX/UI', icon: '/icons/design.svg' },
          { title: 'Desarrollo',    icon: '/icons/code.svg' },
          { title: 'Lanzamiento',   icon: '/icons/rocket.svg' },
          { title: 'Soporte',       icon: '/icons/support.svg' },
        ].map(({ title, icon }) => (
          <Card key={title} className="flex flex-col items-center gap-4">
            <Image src={icon} alt={title} width={48} height={48} />
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-center text-sm text-gray-500">
              {`Servicio de ${title.toLowerCase()}`}
            </p>
          </Card>
        ))}
      </section>
    </main>
  );
}
