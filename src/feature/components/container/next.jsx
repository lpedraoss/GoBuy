import React, { useContext } from 'react';
import UserContext from '../../context/user/user_context';




const Next = () => {
    const {name} = useContext(UserContext);
    return (
        <div>
            <h1>Bienvenido: {name}</h1>
        </div>
    );
}

export default Next;
