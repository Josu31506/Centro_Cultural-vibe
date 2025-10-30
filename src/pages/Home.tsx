import { Link } from 'react-router-dom';
import EventCard from '../components/EventCard';
import { getHighlightedEvents } from '../services/eventsService';

const Home = () => {
  const highlightedEvents = getHighlightedEvents();

  return (
    <div className="space-y-16">
      <section className="rounded-3xl bg-gradient-to-br from-caramel/60 via-caramel/70 to-coffee/80 px-8 py-12 text-cream shadow-soft">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
          <div className="flex-1 space-y-4">
            <h1 className="text-3xl font-semibold leading-tight md:text-4xl">
              Descubre experiencias culturales únicas en el Centro Cultural Amador Ballumbrosio
            </h1>
            <p className="max-w-xl text-base text-cream/90">
              Explora conferencias, exposiciones y talleres diseñados para inspirar y conectar a nuestra comunidad.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/registrarse"
                className="rounded-full bg-cream px-6 py-3 text-sm font-semibold text-cocoa transition hover:bg-sand"
              >
                Regístrate ahora
              </Link>
              <Link
                to="/eventos/arte-digital"
                className="rounded-full border border-cream px-6 py-3 text-sm font-semibold text-cream transition hover:bg-cream/10"
              >
                Ver próximos eventos
              </Link>
            </div>
          </div>
          <div className="relative mx-auto flex h-48 w-full max-w-sm items-center justify-center overflow-hidden rounded-3xl bg-cream/90 p-6 shadow-xl">
            <div className="absolute -left-16 -top-16 h-40 w-40 rounded-full bg-caramel/40 blur-3xl" />
            <div className="absolute -bottom-20 -right-10 h-48 w-48 rounded-full bg-coffee/40 blur-3xl" />
            <div className="relative text-center">
              <p className="text-xs uppercase tracking-widest text-caramel">Funciones destacadas</p>
              <ul className="mt-4 space-y-3 text-sm text-coffee">
                <li className="rounded-full bg-sand/80 px-4 py-2">• Gestiona tus inscripciones fácilmente</li>
                <li className="rounded-full bg-sand/80 px-4 py-2">• Accede a tu QR de ingreso al instante</li>
                <li className="rounded-full bg-sand/80 px-4 py-2">• Recibe recordatorios personalizados</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-coffee">Disfruta de nuestras funciones destacadas</h2>
            <p className="text-sm text-coffee/70">Selecciona un evento para conocer más y asegurar tu lugar.</p>
          </div>
          <Link to="/eventos/arte-digital" className="hidden rounded-full bg-caramel px-6 py-2 text-sm font-semibold text-cream shadow-soft transition hover:bg-cocoa md:inline-flex">
            Ver todos
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {highlightedEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
