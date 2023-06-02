import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../feature/context/auth/auth_context';
import { Status } from '../common/status.enum';
import Login from '../feature/components/container/login';
import RegistrationAuth from '../feature/components/container/registration_auth';
import Next from '../feature/components/container/next';
import ProductList from '../feature/components/container/cart/product_list';
import Cart from '../feature/components/container/cart/cart';

const RouteGobuy = () => {
  const { authenticated } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registro" element={<RegistrationAuth />} />
        {authenticated === Status.LOGGED_IN ? (
          <>
            <Route path="/next" element={<Next />} />
            <Route path="/productos" element={<ProductList />} />
            <Route path="/cart" element={<Cart />} />
          </>
        ) : (
          <>
            <Route path="/next" element={<Navigate to="/" replace />} />
            <Route path="/productos" element={<Navigate to="/" replace />} />
            <Route path="/cart" element={<Navigate to="/" replace />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default RouteGobuy;
