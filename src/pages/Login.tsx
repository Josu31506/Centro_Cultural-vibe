import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

const Login = () => (
  <div className="flex min-h-screen flex-col items-center justify-center bg-sand px-4 py-10">
    <div className="w-full max-w-md rounded-[40px] bg-cocoa px-10 py-12 text-center text-cream shadow-soft">
      <div className="flex flex-col items-center gap-6">
        <img src={logo} alt="Centro Cultural Amador Ballumbrosio" className="h-24 w-auto" />
        <form className="w-full space-y-5 text-left">
          <div>
            <label htmlFor="email" className="block text-sm font-semibold uppercase tracking-wide text-cream">
              Correo
            </label>
            <input
              id="email"
              type="email"
              placeholder="tu@correo.com"
              className="mt-2 w-full rounded-full border-none bg-cream px-6 py-3 text-sm text-coffee focus:outline-none focus:ring-2 focus:ring-caramel"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-semibold uppercase tracking-wide text-cream">
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              className="mt-2 w-full rounded-full border-none bg-cream px-6 py-3 text-sm text-coffee focus:outline-none focus:ring-2 focus:ring-caramel"
            />
          </div>
          <p className="text-xs text-cream/80">
            ¿No tienes cuenta?{' '}
            <Link to="/registrarse" className="font-semibold text-caramel underline-offset-2 hover:underline">
              Regístrate
            </Link>
          </p>
          <button
            type="submit"
            className="mt-4 w-full rounded-full bg-sand px-6 py-3 text-sm font-semibold text-cocoa transition hover:bg-cream"
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  </div>
);

export default Login;
