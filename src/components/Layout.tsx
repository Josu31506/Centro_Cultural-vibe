import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => (
  <div className="min-h-screen bg-sand">
    <Navbar />
    <main className="mx-auto w-full max-w-6xl px-4 pb-16 pt-6">
      <Outlet />
    </main>
  </div>
);

export default Layout;
