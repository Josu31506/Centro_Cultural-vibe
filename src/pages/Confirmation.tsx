import { Link, useLocation } from 'react-router-dom';

interface ConfirmationState {
  eventId?: number;
  eventTitle?: string;
}

const Confirmation = () => {
  const location = useLocation();
  const state = (location.state as ConfirmationState | undefined) ?? {};
  const eventTitle = state.eventTitle ?? 'tu evento cultural';

  return (
    <section className="mx-auto max-w-2xl rounded-3xl bg-cream p-16 text-center shadow-soft">
      <div className="space-y-6">
        <h1 className="text-3xl font-semibold text-coffee">¡Felicitaciones!</h1>
        <p className="text-base text-coffee/80">
          Te acabas de inscribir a{' '}
          <span className="font-semibold text-caramel">{eventTitle}</span>
        </p>
        <p className="text-sm text-coffee/70">
          Consulta tu correo para obtener tu QR de inscripción. Recuerda no compartir ese código para evitar inconvenientes.
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Link
            to="/qr"
            state={state}
            className="rounded-full bg-caramel px-6 py-3 text-sm font-semibold text-cream shadow-soft transition hover:bg-cocoa"
          >
            Ver mi QR
          </Link>
          <Link
            to="/"
            className="rounded-full border border-caramel px-6 py-3 text-sm font-semibold text-caramel transition hover:bg-caramel/10"
          >
            Explorar más eventos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Confirmation;