import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

const Register = () => (
  <div className="flex min-h-screen flex-col items-center justify-center bg-sand px-4 py-10">
    <div className="w-full max-w-3xl rounded-[40px] bg-cocoa px-10 py-12 text-center text-cream shadow-soft">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="flex flex-col items-center justify-center gap-4">
          <img src={logo} alt="Centro Cultural Amador Ballumbrosio" className="h-28 w-auto" />
          <p className="text-sm text-cream/80">
            Únete a nuestra comunidad cultural y recibe novedades sobre eventos, talleres y experiencias exclusivas.
          </p>
        </div>
        <form className="space-y-4 text-left">
          <div className="grid gap-3 md:grid-cols-2">
            <div>
              <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wide text-cream">
                Correo
              </label>
              <input
                id="email"
                type="email"
                placeholder="tu@correo.com"
                className="mt-1 w-full rounded-full border-none bg-cream px-5 py-3 text-sm text-coffee focus:outline-none focus:ring-2 focus:ring-caramel"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wide text-cream">
                Número de celular
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="999 999 999"
                className="mt-1 w-full rounded-full border-none bg-cream px-5 py-3 text-sm text-coffee focus:outline-none focus:ring-2 focus:ring-caramel"
              />
            </div>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            <div>
              <label htmlFor="firstName" className="block text-xs font-semibold uppercase tracking-wide text-cream">
                Nombres
              </label>
              <input
                id="firstName"
                type="text"
                placeholder="Nombres"
                className="mt-1 w-full rounded-full border-none bg-cream px-5 py-3 text-sm text-coffee focus:outline-none focus:ring-2 focus:ring-caramel"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-xs font-semibold uppercase tracking-wide text-cream">
                Apellidos
              </label>
              <input
                id="lastName"
                type="text"
                placeholder="Apellidos"
                className="mt-1 w-full rounded-full border-none bg-cream px-5 py-3 text-sm text-coffee focus:outline-none focus:ring-2 focus:ring-caramel"
              />
            </div>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            <div>
              <label htmlFor="password" className="block text-xs font-semibold uppercase tracking-wide text-cream">
                Contraseña
              </label>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                className="mt-1 w-full rounded-full border-none bg-cream px-5 py-3 text-sm text-coffee focus:outline-none focus:ring-2 focus:ring-caramel"
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-xs font-semibold uppercase tracking-wide text-cream">
                Confirmar contraseña
              </label>
              <input
                id="confirmPassword"
                type="password"
                placeholder="••••••••"
                className="mt-1 w-full rounded-full border-none bg-cream px-5 py-3 text-sm text-coffee focus:outline-none focus:ring-2 focus:ring-caramel"
              />
            </div>
          </div>
          <p className="text-xs text-cream/80">
            ¿Ya tienes cuenta?{' '}
            <Link to="/iniciar-sesion" className="font-semibold text-caramel underline-offset-2 hover:underline">
              Inicia sesión
            </Link>
          </p>
          <button
            type="submit"
            className="mt-4 w-full rounded-full bg-sand px-6 py-3 text-sm font-semibold text-cocoa transition hover:bg-cream"
          >
            Registrarse
          </button>
        </form>
      </div>
    </div>
  </div>
);

export default Register;
