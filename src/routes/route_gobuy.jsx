import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from '../feature/components/container/login';
import RegistrationAuth from '../feature/components/container/registration_auth';
import Productos from '../../src/feature/components/container/productos';
import Next from '../feature/components/container/next';
import Inicio from '../feature/components/container/inicio';
import AuthContext from '../feature/context/auth/auth_context';
import { Status } from '../common/status.enum';
import { useContext } from 'react';
import PrivateRoute from './private_route'; // Importa como componente de ruta

const RouteGobuy = () => {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registro" element={<RegistrationAuth />} />
        <Route path='/inicio' element={<PrivateRoute to={'inicio'}></PrivateRoute>} /> 
        <Route path='/productos' element={<PrivateRoute to={'productos'}></PrivateRoute>} />
        <Route path='/carrito' element={<PrivateRoute to={'carrito'}></PrivateRoute>} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteGobuy;
