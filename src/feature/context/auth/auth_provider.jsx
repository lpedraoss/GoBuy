
import React, { useState } from 'react';
import AuthContext from './auth_context';

const AuthProvider = ({children}) => {
    // se crea como falsa para que se redireccione automaticamente al login
    const [authenticated, setAuthenticated] = useState(false);
    // cuando inicia sesion cambia a true 
    const login = ()=> {
          setAuthenticated(true);
    }
    const logout = () => {
        //aqui cambia a false para que no pueda acceder a las rutas privadas
        setAuthenticated(false);
    }
    return (
        <>
            <AuthContext.Provider value={{ authenticated,login,logout }} >
                { children }
            </AuthContext.Provider>   
        </>
    );
}

export default AuthProvider;
