import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from '../feature/components/container/login';
import RegistrationAuth from '../feature/components/container/registration_auth';
import UserProvider from '../feature/context/user/user_provider';
import AuthProvider from '../feature/context/auth/auth_provider';

import Next from '../feature/components/container/next';
import AuthContext from '../feature/context/auth/auth_context';

  const RouteGobuy = () => {
    const { authenticated } = AuthContext;
    return (
      <AuthProvider>
        <UserProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/registro" element={<RegistrationAuth />} />
              {!authenticated ? (
                <Route path="/next" element={<Next></Next>} />
              ) : (
                // Redirigir a la página de inicio de sesión si no está autenticado
                <Route path="/next" element={<Navigate to="/" replace />} />
              )}
              
            </Routes>
          </BrowserRouter>
        </UserProvider>
      </AuthProvider>
    );
  };
export default RouteGobuy;
