import React, { useContext } from 'react';
import { Navigate, Route } from 'react-router-dom';
import Inicio from '../components/view/inicio';
import { Status } from '../utils/status.enum';
import UserContext from '../feature/user/context/user_context';


const PrivateRoute = ({ to }) => {
    const { authenticated } = useContext(UserContext);
    if (authenticated === Status.LOGGED_IN) {
        switch (to) {
        case 'inicio':
            return <Inicio />;
        default:
            return <Inicio></Inicio>;
        }
    } else {
        return <Navigate to="/" replace />;
    }
    };

    export default PrivateRoute;
