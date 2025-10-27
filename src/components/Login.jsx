import React from "react";
import "../components/Login.css";

import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Por favor, completa todos los campos.");
      return;
    }
    const storedUsers = JSON.parse(localStorage.getItem("usuarios")) || [];

    const usuarioExistente = storedUsers.find((user) => user.email === email);

    if (usuarioExistente) {
      alert("Este correo ya está registrado! Inicia sesión.");
      return;
    }
    const nuevoUsuario = { email, password };

    storedUsers.push(nuevoUsuario);
    localStorage.setItem("usuarios", JSON.stringify(storedUsers));

    alert("✅ Registro exitoso. Disfruta nuesro contenido!");

    setEmail("");
    setPassword("");
  };

  return (
    <div className="login-modal m-5 p-5">
      <div className="login-box">
        <h2>Registrarse</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              id="email"
              placeholder="Ingrese su Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              placeholder="Ingrese su contraseña"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="login-btn">
            Registrarse
          </button>
        </form>

        <p className="politica-text">
          Al registrarte aceptas nuestra <a href="#">Política de Privacidad</a>
        </p>
        <p className="register-text">
          ¿Ya tienes cuenta? <a href="#">Inicia sesión aquí</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
