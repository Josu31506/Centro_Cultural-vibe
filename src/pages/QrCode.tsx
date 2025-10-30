import { Link } from 'react-router-dom';

const QrCode = () => (
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
          <span>Evento: Conferencia de Arte Digital</span>
          <span>Comienza en: 0D:1H:15M:5S</span>
        </div>
        <div className="rounded-3xl bg-sand p-6 shadow-inner">
          <div className="h-64 w-64 rounded-2xl bg-[radial-gradient(circle,rgba(140,76,36,0.4)_0%,rgba(242,240,203,0.9)_100%)] p-4">
            <div className="flex h-full w-full items-center justify-center rounded-xl bg-white">
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=Conferencia%20Arte%20Digital"
                alt="QR de inscripción"
                className="h-52 w-52"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default QrCode;
