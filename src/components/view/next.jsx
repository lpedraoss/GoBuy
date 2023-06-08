import React, { useContext } from 'react';

import AuthContext from '../../feature/user/context/auth_context';
import UserContext from '../../feature/user/context/user_context';






const Next = () => {

    const { logout } = useContext(AuthContext); 
    const { name } = useContext(UserContext);
    const handleLogout = ()=>{
        logout();
    }
    return (
        <>
            <h1>Bienvenido: { name }</h1>
            
            <button className='button' onClick={handleLogout} >cerrar sesion</button>
        </>
    );
}

export default Next;
