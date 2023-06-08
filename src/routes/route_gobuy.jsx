import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from '../components/view/login';
import RegistrationAuth from '../components/view/registration_auth';
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
