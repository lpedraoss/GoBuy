import React, { useContext } from 'react';
import { Navigate, Route } from 'react-router-dom';
import Inicio from '../components/view/inicio';
import Productos from '../components/view/productos';

import AuthContext from '../feature/user/context/auth_context';
import { Status } from '../utils/status.enum';

import Cart from '../components/pure/carrito';
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
