import React, { useContext } from 'react';
import { Navigate, Route } from 'react-router-dom';
import Inicio from '../components/view/inicio';
import Productos from '../components/view/productos';
import { Status } from '../utils/status.enum';

import UserContext from '../feature/user/context/user_context';
import CartScreen from '../components/view/cart_screen';

const PrivateRoute = ({ to }) => {
    const { authenticated } = useContext(UserContext);
    if (authenticated === Status.LOGGED_IN) {
        switch (to) {
        case 'inicio':
            return <Inicio />;
        case 'productos':
            return <Productos />;
        case 'carrito':
            return <CartScreen></CartScreen>;
        default:
            return <Inicio></Inicio>;
        }
    } else {
        return <Navigate to="/" replace />;
    }
    };

    export default PrivateRoute;
