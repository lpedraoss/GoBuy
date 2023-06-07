import React, { useContext } from 'react';
import { Navigate, Route } from 'react-router-dom';
import Inicio from '../feature/components/container/inicio';
import Productos from '../feature/components/container/productos';

import AuthContext from '../feature/context/auth/auth_context';
import { Status } from '../common/status.enum';

import Cart from '../feature/components/pure/carrito';
const PrivateRoute = ({ to }) => {
    const { authenticated } = useContext(AuthContext);
    if (authenticated === Status.LOGGED_IN) {
        switch (to) {
        case 'inicio':
            return <Inicio />;
        case 'productos':
            return <Productos />;
        case 'carrito':
            return <Cart></Cart>;
        default:
            return <Inicio></Inicio>;
        }
    } else {
        return <Navigate to="/" replace />;
    }
    };

    export default PrivateRoute;
