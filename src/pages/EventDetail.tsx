import { Link, useParams } from 'react-router-dom';
import { getEventById } from '../services/eventsService';
import useCountdown from '../hooks/useCountdown';

const EventDetail = () => {
  const { id } = useParams<{ id: string }>();
  const event = id ? getEventById(id) : undefined;

  const countdown = useCountdown(event?.startDate ?? new Date().toISOString());

  if (!event) {
    return (
      <div className="rounded-3xl bg-cream p-12 text-center shadow-soft">
        <h2 className="text-2xl font-semibold text-coffee">Evento no encontrado</h2>
        <p className="mt-4 text-coffee/70">El evento que buscas no existe o ha sido removido.</p>
        <Link
          to="/"
          className="mt-6 inline-flex rounded-full bg-caramel px-6 py-2 text-sm font-semibold text-cream hover:bg-cocoa"
        >
          Volver al inicio
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-10">
      <div className="flex items-center gap-4 text-sm text-caramel">
        <Link to="/" className="inline-flex items-center gap-2 font-semibold hover:text-coffee">
          ← Volver
        </Link>
        <span className="rounded-full bg-caramel/15 px-4 py-1 uppercase tracking-wide">{event.category}</span>
      </div>
      <section className="rounded-3xl bg-cream p-10 shadow-soft">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-4">
              <h1 className="text-3xl font-semibold text-coffee">{event.title}</h1>
              <span className="rounded-full border border-caramel px-4 py-1 text-sm font-medium text-caramel">
                Comienza en {countdown}
              </span>
            </div>
            <p className="text-base text-coffee/80">{event.description}</p>
            <div className="flex flex-wrap gap-3">
              {event.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-sand px-4 py-1 text-xs font-semibold uppercase tracking-wide text-caramel">
                  #{tag}
                </span>
              ))}
            </div>
            <div className="rounded-3xl bg-sand/70 p-6">
              <h2 className="text-lg font-semibold text-coffee">Detalles del evento</h2>
              <ul className="mt-4 space-y-3 text-sm text-coffee/80">
                <li className="flex items-center gap-3">
                  <span className="text-xl">📍</span>
                  {event.location}
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-xl">📅</span>
                  {event.date}
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-xl">⏰</span>
                  {event.time}
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-xl">💳</span>
                  {event.price}
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="overflow-hidden rounded-3xl bg-cocoa/20 shadow-soft">
              <img src={event.image} alt={event.title} className="h-full w-full object-cover" />
            </div>
            <Link
              to="/confirmacion"
              className="inline-flex items-center justify-center rounded-full bg-caramel px-6 py-3 text-base font-semibold text-cream shadow-soft transition hover:bg-cocoa"
            >
              Inscribirse ( {event.price} )
            </Link>
            <p className="text-xs text-coffee/60">
              Recibirás un correo con el QR de ingreso y las instrucciones de acceso.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventDetail;
