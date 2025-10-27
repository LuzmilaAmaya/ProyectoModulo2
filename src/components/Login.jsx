import React from "react";
import "../components/Login.css";

function Login() {
  return (
    <div className="login-modal m-5 p-5">
      <div className="login-box">
        <h2>Iniciar Sesion</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Correo electronico</label>
            <input
              type="email"
              id="email"
              placeholder="Ingrese su Email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              placeholder="Ingrese su contraseña"
              required
            />
          </div>

          <button type="submit" className="login-btn">
            registrarse
          </button>
        </form> 
        <p className="politica-text">
          al resgistrarte aceptas nuestra<a href="#">Politica de Privacidad</a>
        </p>
        <p className="register-text">
          ¿No tienes cuenta? <a href="#">Registrate aqui!</a>
        </p>
        
      </div>
    </div>
  );
}
export default Login;
