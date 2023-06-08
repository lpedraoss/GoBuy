import React, { useContext } from 'react';
import UserContext from '../../feature/user/context/user_context';

const FooterGoBuy = () => {
    
    const {name, email } = useContext(UserContext);
    return (
        <footer id="footer">
            <ul className="contenedor-footer">
            <li className="content-foo">
                <h4>Phone</h4>
                <p>301 542 7889</p>
            </li>
            <li className="content-foo">
                <h4>Email</h4>
                <p>{ email }</p>
            </li>
            <li className="content-foo">
                <h4>Location</h4>
                <p>Calle falsa #123</p>
            </li>
            <li className="content-foo">
            <h4>Sesion iniciada por:</h4>
            <p>{ name }</p>
            </li>
            </ul>
            <h2 className="titulo-final">
            &copy; Metasoft | Sofware de intercambios y ventas
            </h2>
      </footer>

    );
}

export default FooterGoBuy;
