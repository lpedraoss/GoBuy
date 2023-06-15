import React, { useContext, useEffect, useState } from "react";
import UserContext from "../../feature/user/context/user_context";
import ViewComponentContext from "../../feature/utils/view_component/context/view_component_context";
import { View } from "../../utils/view.enum";


const Menu = () => {
  const { view } = useContext(ViewComponentContext);
    const { logout } = useContext(UserContext);
    const handleLogout = () => {
      logout();
    };
    return (
      <>

        <nav id="nav">
        {
          view === View.INFORMACION?
          
           (
            <>
              <a href="#sobre-nosotros">Acerca de</a>
              <a href="#portafolio">Portafolio</a>
              <a href="#servicios">Servicios</a>
              <a href="#footer">Contacto</a>
            </>
            
            )
          :
            <></>
        }
          
          
          
         
          <a onClick={handleLogout} style={{ cursor: "pointer" }}>
            cerrar sesion
          </a>
        </nav>
      </>
    );
}

export default Menu;