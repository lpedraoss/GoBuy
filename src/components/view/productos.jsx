import React from "react";
import Informacion_producto from "../pure/productos_informacion";
import Menu from "../pure/menu_inicio";
import { useNavigate } from 'react-router-dom';
import FooterGoBuy from "../pure/footer_goBuy";
import GoTop from "../pure/go_top";

const Productos = () => {
    const route = useNavigate();
  const handleGoCart = () => {
    route('/inicio');
  };
  return (
    <>
      {/*  */}
      {/* <button classNameName="button" onClick={handleLogout}>cerrar sesion</button> */}

      {/* Diseño del encabezado */}
      <header id="header">
      <Menu/>
        <section
          id="textos-header"
          style={{ cursor: "pointer" }}
          onClick={handleGoCart} 
        >

          <h1>GoBuy</h1>
          <h2>Página web de cambio y venta de objetos</h2>
        </section>

        <picture id="wave" style={{ height: "150px", overflow: "hidden" }}>
          {/* esto ayuda hacer la forma undulada No esta fuincionando */}
          {/*
          <svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;">
                <path d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
                    style="stroke: none; fill: #fff;">
                </path>
            </svg>
            */}
        </picture>
      </header>

      <main>
        {/* esto contiene todo el main de inicio 
        <Informacion/>*/}
        <Informacion_producto/>
      </main>

      {/* Pie de pagina */}
      <FooterGoBuy></FooterGoBuy>

      {/* Boton Gotop */}
      <GoTop></GoTop>
    </>
  );
};

export default Productos;