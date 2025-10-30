import { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { useAuth } from '../hooks/useAuth';

const Register = () => {
  const { register: registerUser } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [cellphone, setCellphone] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setSuccess(null);

    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden.');
      return;
    }

    setSubmitting(true);
    try {
      await registerUser({ email, password, firstName, lastName, cellphone });
      setSuccess('¡Registro exitoso! Te estamos redirigiendo.');
      setTimeout(() => navigate('/', { replace: true }), 1200);
    } catch (err) {
      setError('No pudimos completar tu registro. Inténtalo nuevamente.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-sand px-4 py-10">
      <div className="w-full max-w-3xl rounded-[40px] bg-cocoa px-10 py-12 text-center text-cream shadow-soft">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="flex flex-col items-center justify-center gap-4">
            <img src={logo} alt="Centro Cultural Amador Ballumbrosio" className="h-28 w-auto" />
            <p className="text-sm text-cream/80">
              Únete a nuestra comunidad cultural y recibe novedades sobre eventos, talleres y experiencias exclusivas.
            </p>
          </div>
          <form className="space-y-4 text-left" onSubmit={handleSubmit}>
            <div className="grid gap-3 md:grid-cols-2">
              <div>
                <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wide text-cream">
                  Correo
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
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
                  value={cellphone}
                  onChange={(event) => setCellphone(event.target.value)}
                  required
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
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
                  required
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
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value)}
                  required
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
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  required
                  minLength={6}
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
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                  required
                  placeholder="••••••••"
                  className="mt-1 w-full rounded-full border-none bg-cream px-5 py-3 text-sm text-coffee focus:outline-none focus:ring-2 focus:ring-caramel"
                />
              </div>
            </div>
            {error && <p className="text-sm text-red-300">{error}</p>}
            {success && <p className="text-sm text-emerald-200">{success}</p>}
            <p className="text-xs text-cream/80">
              ¿Ya tienes cuenta?{' '}
              <Link to="/iniciar-sesion" className="font-semibold text-caramel underline-offset-2 hover:underline">
                Inicia sesión
              </Link>
            </p>
            <button
              type="submit"
              disabled={submitting}
              className="mt-4 w-full rounded-full bg-sand px-6 py-3 text-sm font-semibold text-cocoa transition hover:bg-cream disabled:cursor-not-allowed disabled:opacity-70"
            >
              {submitting ? 'Registrando...' : 'Registrarse'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;