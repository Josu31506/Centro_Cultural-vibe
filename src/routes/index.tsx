import { Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import EventDetail from '../pages/EventDetail';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Confirmation from '../pages/Confirmation';
import QrCode from '../pages/QrCode';

const AppRoutes = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/eventos/:id" element={<EventDetail />} />
      <Route path="/confirmacion" element={<Confirmation />} />
      <Route path="/qr" element={<QrCode />} />
    </Route>
    <Route path="/iniciar-sesion" element={<Login />} />
    <Route path="/registrarse" element={<Register />} />
  </Routes>
);

export default AppRoutes;
