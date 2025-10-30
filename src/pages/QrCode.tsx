import { useEffect, useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useCountdown from '../hooks/useCountdown';
import { getEventById } from '../services/eventsService';
import type { Event } from '../types/event';

interface QrState {
  eventId?: number;
  eventTitle?: string;
}

const QrCode = () => {
  const location = useLocation();
  const state = (location.state as QrState | undefined) ?? {};
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState<boolean>(Boolean(state.eventId));
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let ignore = false;

    if (!state.eventId) {
      setLoading(false);
      return () => {
        ignore = true;
      };
    }

    const loadEvent = async () => {
      try {
        const response = await getEventById(state.eventId as number);
        if (!ignore) {
          setEvent(response);
        }
      } catch (err) {
        if (!ignore) {
          setError('No pudimos obtener la información del evento.');
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
  }, [state.eventId]);

  const countdown = useCountdown(event?.startDate ?? new Date().toISOString());
  const eventTitle = useMemo(() => event?.title ?? state.eventTitle ?? 'tu evento cultural', [event, state.eventTitle]);

  return (
    <section className="mx-auto max-w-3xl space-y-6">
      <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-caramel hover:text-coffee">
        ← Volver
      </Link>
      <div className="rounded-3xl bg-cream p-12 shadow-soft">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="rounded-3xl bg-sand px-4 py-2 text-sm font-semibold uppercase tracking-wide text-caramel">
            Tu QR de inscripción
          </div>
          <div className="grid gap-3 text-sm text-coffee/70">
            <span>Este es el QR de tu inscripción.</span>
            <span className="font-semibold text-coffee">No compartirlo para evitar inconvenientes.</span>
            <span>Evento: {eventTitle}</span>
            <span>Comienza en: {loading ? 'Cargando…' : countdown}</span>
            {error && <span className="text-red-600">{error}</span>}
          </div>
          <div className="rounded-3xl bg-sand p-6 shadow-inner">
            <div className="h-64 w-64 rounded-2xl bg-[radial-gradient(circle,rgba(140,76,36,0.4)_0%,rgba(242,240,203,0.9)_100%)] p-4">
              <div className="flex h-full w-full items-center justify-center rounded-xl bg-white">
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(eventTitle)}`}
                  alt="QR de inscripción"
                  className="h-52 w-52"
                />
              </div>
            </div>
          </div>
          {!state.eventId && (
            <p className="text-xs text-coffee/60">
              Si no ves tu QR actualizado, abre este enlace desde el correo de confirmación o inscríbete a un evento.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default QrCode;
