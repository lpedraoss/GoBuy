import React, { useState } from "react";
import useUserData from "../../hook/use_data_user";


function Login() {

  const { authenticateUser } = useUserData();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    authenticateUser(email, password);
  };

  return (
    <>
      <header style={{ backgroundColor: '#A01BC4', margin: 0, padding: '20px', color: '#FFF' }}>Metasoft</header>
      <fieldset className="contenedor">
        <form className="formulario" onSubmit={handleLogin}>
          <h1>Login</h1>
          <section className="input-contenedor">
            <input
              className="input-text"
              type="text"
              placeholder="Correo Unal"
              value={email}
              onChange={handleEmailChange}
            />
          </section>
          <section className="input-contenedor">
            <input
              className="input-text"
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={handlePasswordChange}
            />
          </section>
          <button className="button" type="submit">Login</button>
          <p>Al registrarte, aceptas nuestras Condiciones de uso y Política de privacidad.</p>
          <p>¿No tienes una cuenta? <br /> <a className="link" href="registro.html">Registrate</a></p>
        </form>
      </fieldset>
    </>
  );
}

export default Login;
