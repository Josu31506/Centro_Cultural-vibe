import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { useAuth } from '../hooks/useAuth';

const Navbar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { user, loading, logout } = useAuth();
  const isAuthPage = ['/iniciar-sesion', '/registrarse'].includes(pathname);

  if (isAuthPage) {
    return null;
  }

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const userInitials = user
    ? `${user.firstName?.[0] ?? user.email?.[0] ?? ''}${user.lastName?.[0] ?? ''}`.trim()
    : '';

  return (
    <header className="bg-cream/70 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center gap-6 px-4 py-6">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Centro Cultural Amador Ballumbrosio" className="h-14 w-auto" />
          <div className="hidden flex-col text-sm font-semibold text-coffee sm:flex">
            <span>Centro Cultural</span>
            <span>Amador Ballumbrosio</span>
          </div>
        </Link>
        <div className="relative hidden flex-1 md:block">
          <input
            type="search"
            placeholder="Buscar un evento..."
            className="w-full rounded-full border-none bg-cream px-6 py-3 text-coffee shadow-soft focus:outline-none focus:ring-2 focus:ring-caramel"
          />
          <span className="pointer-events-none absolute right-6 top-1/2 -translate-y-1/2 text-sm text-caramel">
            🔍
          </span>
        </div>
        <div className="ml-auto flex items-center gap-4">
          {!loading && !user && (
            <>
              <Link
                to="/iniciar-sesion"
                className="rounded-full border-2 border-cocoa px-6 py-2 text-sm font-semibold text-cocoa transition hover:bg-cocoa hover:text-cream"
              >
                Iniciar Sesión
              </Link>
              <Link
                to="/registrarse"
                className="rounded-full bg-caramel px-6 py-2 text-sm font-semibold text-cream shadow-soft transition hover:bg-cocoa"
              >
                Registrarse
              </Link>
            </>
          )}
          {!loading && user && (
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3 rounded-full bg-sand px-4 py-2 text-sm font-semibold text-cocoa shadow-soft">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-caramel text-sm text-cream">
                  {userInitials || '👤'}
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="text-xs text-coffee/70">Bienvenido</span>
                  <span>{user.firstName || user.email}</span>
                </div>
              </div>
              <button
                type="button"
                onClick={handleLogout}
                className="rounded-full border border-cocoa px-5 py-2 text-sm font-semibold text-cocoa transition hover:bg-cocoa hover:text-cream"
              >
                Cerrar sesión
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
