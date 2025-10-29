import { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa"; 
import Swal from "sweetalert2";
import "../components/Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usuarioLogueado, setUsuarioLogueado] = useState(false);

  function handleLogin() {
    setUsuarioLogueado(true);
    Swal.fire({
      title: "Bien hecho!",
      text: `Login exitoso`,
      icon: "success",
    });
  }

  function handleLogout() {
    setUsuarioLogueado(false);
    Swal.fire({
      title: "Hasta pronto!",
      text: `Sesión cerrada con éxito`,
      icon: "success",
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      Swal.fire({
        title: "Campos incompletos",
        text: "Por favor, completa todos los campos.",
        icon: "warning",
      });
      return;
    }

    const storedUsers = JSON.parse(localStorage.getItem("usuarios")) || [];
    const usuarioExistente = storedUsers.find((user) => user.email === email);

    if (usuarioExistente) {
      Swal.fire({
        title: "Usuario existente",
        text: "Este correo ya está registrado. Inicia sesión.",
        icon: "info",
      });
      return;
    }

    const nuevoUsuario = { email, password };
    storedUsers.push(nuevoUsuario);
    localStorage.setItem("usuarios", JSON.stringify(storedUsers));

    Swal.fire({
      title: "Registro exitoso",
      text: "✅ ¡Disfruta nuestro contenido!",
      icon: "success",
    });

    setEmail("");
    setPassword("");
  };

  return (
    <div className="login-modal">
      <div className="login-box">
        <h2>Registrarse</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Correo electrónico</label>
            <div className="input-icon">
              <FaEnvelope className="icon" />
              <input
                type="email"
                id="email"
                placeholder="Ingrese su Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <div className="input-icon">
              <FaLock className="icon" />
              <input
                type="password"
                id="password"
                placeholder="Ingrese su contraseña"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <button type="submit" className="login-btn">
            Registrarse
          </button>
        </form>

        <p className="politica-text">
          Al registrarte aceptas nuestra{" "}
          <a href="#">Política de Privacidad</a>
        </p>

        <p className="register-text">
          ¿Ya tienes cuenta? <a href="#">Inicia sesión aquí</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
