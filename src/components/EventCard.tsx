import { Link } from 'react-router-dom';
import type { Event } from '../types/event';
import useCountdown from '../hooks/useCountdown';

interface EventCardProps {
  event: Event;
}

const EventCard = ({ event }: EventCardProps) => {
  const countdown = useCountdown(event.startDate);

  return (
    <article className="flex h-full flex-col rounded-3xl bg-cream p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-xl">
      <div className="flex flex-1 flex-col gap-4">
        <div className="flex items-center justify-between text-xs font-semibold text-caramel">
          <span className="rounded-full bg-caramel/15 px-3 py-1 uppercase tracking-wide text-caramel">
            {event.category}
          </span>
          <span>Comienza en: {countdown}</span>
        </div>
        <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-cocoa/20">
          <img src={event.image} alt={event.title} className="h-full w-full object-cover" />
        </div>
        <h3 className="text-lg font-semibold text-coffee">{event.title}</h3>
        <p className="text-sm text-coffee/80">{event.summary}</p>
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
