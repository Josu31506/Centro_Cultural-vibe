import { Link } from 'react-router-dom';
import useCountdown from '../hooks/useCountdown';
import type { Event } from '../types/event';

interface EventCardProps {
  event: Event;
}

const EventCard = ({ event }: EventCardProps) => {
  const countdown = useCountdown(event.startDate);
  const baseDescription = event.description?.trim() ?? '';
  const summary = baseDescription.length > 140 ? `${baseDescription.slice(0, 137)}…` : baseDescription || 'Pronto compartiremos más detalles del evento.';
  const priceLabel = event.costEntry > 0 ? `S/ ${event.costEntry.toFixed(2)}` : 'Ingreso libre';
  const imageSrc = event.imageUrl ??
    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80';

  return (
    <article className="flex h-full flex-col rounded-3xl bg-cream p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-xl">
      <div className="flex flex-1 flex-col gap-4">
        <div className="flex items-center justify-between text-xs font-semibold text-caramel">
          <span className="rounded-full bg-caramel/15 px-3 py-1 uppercase tracking-wide text-caramel">
            {event.type}
          </span>
          <span>Comienza en: {countdown}</span>
        </div>
        <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-cocoa/20">
          <img src={imageSrc} alt={event.title} className="h-full w-full object-cover" />
        </div>
        <h3 className="text-lg font-semibold text-coffee">{event.title}</h3>
        <p className="text-sm text-coffee/80">{summary}</p>
        <p className="text-sm font-semibold text-cocoa">{priceLabel}</p>
      </div>
      <Link
        to={`/eventos/${event.id}`}
        className="mt-6 inline-flex items-center justify-center rounded-full bg-caramel px-6 py-2 text-sm font-semibold text-cream transition hover:bg-cocoa"
      >
        Inscribirse
      </Link>
    </article>
  );
};

export default EventCard;