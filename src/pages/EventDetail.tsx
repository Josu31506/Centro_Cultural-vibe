import { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import useCountdown from '../hooks/useCountdown';
import { useAuth } from '../hooks/useAuth';
import { enrollInEvent, getEventById } from '../services/eventsService';
import type { Event } from '../types/event';

const EventDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { token } = useAuth();
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [enrolling, setEnrolling] = useState<boolean>(false);
  const [enrollError, setEnrollError] = useState<string | null>(null);

  useEffect(() => {
    let ignore = false;

    const loadEvent = async () => {
      if (!id) {
        setError('El identificador del evento no es válido.');
        setLoading(false);
        return;
      }

      try {
        const eventResponse = await getEventById(id);
        if (!ignore) {
          setEvent(eventResponse);
          setError(null);
        }
      } catch (err) {
        if (!ignore) {
          setError('No pudimos cargar la información del evento.');
          setEvent(null);
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    };

    void loadEvent();

    return () => {
      ignore = true;
    };
  }, [id]);

  const countdown = useCountdown(event?.startDate ?? new Date().toISOString());

  const formattedDate = useMemo(() => {
    if (!event) return '';
    return new Intl.DateTimeFormat('es-PE', { dateStyle: 'full' }).format(new Date(event.startDate));
  }, [event]);

  const formattedTime = useMemo(() => {
    if (!event) return '';
    return new Intl.DateTimeFormat('es-PE', { timeStyle: 'short' }).format(new Date(event.startDate));
  }, [event]);

  const priceLabel = useMemo(() => {
    if (!event) return '';
    return event.costEntry > 0 ? `S/ ${event.costEntry.toFixed(2)}` : 'Ingreso libre';
  }, [event]);

  const imageSrc = event?.imageUrl ??
    'https://images.unsplash.com/photo-1526243741027-444d633d7365?auto=format&fit=crop&w=1200&q=80';

  const handleEnroll = async () => {
    if (!event) return;

    if (!token) {
      navigate('/iniciar-sesion', { state: { from: `/eventos/${event.id}` } });
      return;
    }

    try {
      setEnrollError(null);
      setEnrolling(true);
      await enrollInEvent(event.id);
      navigate('/confirmacion', {
        state: { eventId: event.id, eventTitle: event.title }
      });
    } catch (err) {
      setEnrollError('No pudimos completar tu inscripción. Inténtalo nuevamente.');
    } finally {
      setEnrolling(false);
    }
  };

  if (loading) {
    return (
      <div className="rounded-3xl bg-cream p-12 shadow-soft">
        <div className="h-6 w-32 animate-pulse rounded-full bg-sand" />
        <div className="mt-6 h-10 w-3/4 animate-pulse rounded-full bg-sand" />
        <div className="mt-6 h-64 animate-pulse rounded-3xl bg-sand" />
      </div>
    );
  }

  if (error || !event) {
    return (
      <div className="rounded-3xl bg-cream p-12 text-center shadow-soft">
        <h2 className="text-2xl font-semibold text-coffee">Evento no disponible</h2>
        <p className="mt-4 text-coffee/70">{error ?? 'El evento que buscas no existe o ha sido removido.'}</p>
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
        <span className="rounded-full bg-caramel/15 px-4 py-1 uppercase tracking-wide">{event.type}</span>
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
            {event.tags.length > 0 && (
              <div className="flex flex-wrap gap-3">
                {event.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-sand px-4 py-1 text-xs font-semibold uppercase tracking-wide text-caramel">
                    #{tag}
                  </span>
                ))}
              </div>
            )}
            <div className="rounded-3xl bg-sand/70 p-6">
              <h2 className="text-lg font-semibold text-coffee">Detalles del evento</h2>
              <ul className="mt-4 space-y-3 text-sm text-coffee/80">
                <li className="flex items-center gap-3">
                  <span className="text-xl">📍</span>
                  {event.location}
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-xl">📅</span>
                  {formattedDate}
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-xl">⏰</span>
                  {formattedTime}
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-xl">💳</span>
                  {priceLabel}
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="overflow-hidden rounded-3xl bg-cocoa/20 shadow-soft">
              <img src={imageSrc} alt={event.title} className="h-full w-full object-cover" />
            </div>
            <button
              type="button"
              onClick={handleEnroll}
              disabled={enrolling}
              className="inline-flex items-center justify-center rounded-full bg-caramel px-6 py-3 text-base font-semibold text-cream shadow-soft transition hover:bg-cocoa disabled:cursor-not-allowed disabled:opacity-70"
            >
              {enrolling ? 'Procesando...' : `Inscribirme (${priceLabel})`}
            </button>
            {enrollError && <p className="text-sm text-red-600">{enrollError}</p>}
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