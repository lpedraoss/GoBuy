import React, { useContext } from "react";

import Informacion from "../pure/inicio_informacion";
import Menu from "../pure/menu_inicio";
import UserContext from "../../feature/user/context/user_context";
import FooterGoBuy from "../pure/footer_goBuy";
import GoTop from "../pure/go_top";
import HeaderGobuy from "../pure/header_gobuy";
import ViewComponentContext from "../../feature/utils/view_component/context/view_component_context";
import Informacion_producto from "../pure/productos_informacion";
import { View } from "../../utils/view.enum";
import Cart from "../pure/carrito";

const Inicio = () => {
  const { view } = useContext(ViewComponentContext);
  return (
    <>
    
      {/*  */}
      {/* <button classNameName="button" onClick={handleLogout}>cerrar sesion</button> */}

      {/* Diseño del encabezado */}
      <HeaderGobuy></HeaderGobuy>
      <main>
        { view === View.INFORMACION?
          /* esto contiene todo el main de inicio */
          <Informacion></Informacion>: view === View.PRODUCTO?
          <Informacion_producto></Informacion_producto>:
          view === View.CART? <Cart></Cart>:
          <></>
        }
      
      </main>

      {/* Pie de pagina */}
     <FooterGoBuy></FooterGoBuy>
      {/* Boton Gotop */}
      <GoTop></GoTop>
    </>
  );
};

export default Inicio;
