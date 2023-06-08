
import { useState } from 'react';
import { Status } from '../../../utils/status.enum';

const UseLoggedUser = () => {
    let statusLogin = Status.LOGGED_INITIAL;
    // se crea como falsa para que se redireccione automaticamente al login
    const [authenticated, setAuthenticated] = useState(statusLogin);
    console.log('sesion: ', authenticated)
    const login = ()=> {
        statusLogin = Status.LOGGED_IN;
        
        setAuthenticated(statusLogin);
        console.log('iniciando sesion: ',statusLogin);
    }
    const logout = () => {
        statusLogin = Status.LOGGED_OUT;
        setAuthenticated(statusLogin);
        console.log('cerrando sesion: ',statusLogin);
    }

    return  { login,logout, authenticated };
}

export default UseLoggedUser;
