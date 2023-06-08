import React, { useState } from 'react';

const UseGetUser = () => {
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    //almacena el nombre del usuario logeado
    const setNameContext = (nameLogged) =>{
        setName( nameLogged );
    }
    //almacena el email del usuario logeado
    const setEmailContext = ( emailLogged ) =>{
        setEmail( emailLogged );
    }
    return  { name, setNameContext, email, setEmailContext };

}

export default UseGetUser;
