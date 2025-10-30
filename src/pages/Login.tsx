import { FormEvent, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { useAuth } from '../hooks/useAuth';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as { from?: string } | null)?.from ?? '/';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState<boolean>(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setSubmitting(true);

    try {
      await login({ email, password });
      navigate(from, { replace: true });
    } catch (err) {
      setError('No pudimos iniciar sesión. Verifica tus credenciales e inténtalo nuevamente.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-sand px-4 py-10">
      <div className="w-full max-w-md rounded-[40px] bg-cocoa px-10 py-12 text-center text-cream shadow-soft">
        <div className="flex flex-col items-center gap-6">
          <img src={logo} alt="Centro Cultural Amador Ballumbrosio" className="h-24 w-auto" />
          <form className="w-full space-y-5 text-left" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold uppercase tracking-wide text-cream">
                Correo
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
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
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
                placeholder="••••••••"
                className="mt-2 w-full rounded-full border-none bg-cream px-6 py-3 text-sm text-coffee focus:outline-none focus:ring-2 focus:ring-caramel"
              />
            </div>
            {error && <p className="text-sm text-red-300">{error}</p>}
            <p className="text-xs text-cream/80">
              ¿No tienes cuenta?{' '}
              <Link to="/registrarse" className="font-semibold text-caramel underline-offset-2 hover:underline">
                Regístrate
              </Link>
            </p>
            <button
              type="submit"
              disabled={submitting}
              className="mt-4 w-full rounded-full bg-sand px-6 py-3 text-sm font-semibold text-cocoa transition hover:bg-cream disabled:cursor-not-allowed disabled:opacity-70"
            >
              {submitting ? 'Ingresando...' : 'Iniciar Sesión'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;