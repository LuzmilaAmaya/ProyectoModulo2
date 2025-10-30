import { useState, useEffect } from "react";
import { FaEnvelope, FaLock, FaEdit, FaTrash, FaUser, FaImage } from "react-icons/fa";
import Swal from "sweetalert2";
import "../components/Login.css";
function Login() {
  const [username, setUsername] = useState("");
  const [profile, setProfile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [usuarios, setUsuarios] = useState([]);
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("usuarios")) || [];
    setUsuarios(stored);
  }, []);
  useEffect(() => {
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
  }, [usuarios]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !profile || !email || !password || !repeatPassword) {
      Swal.fire("Campos incompletos", "Completa todos los campos", "warning");
      return;
    }
    if (password !== repeatPassword) {
      Swal.fire("Error", "Las contraseñas no coinciden", "error");
      return;
    }
    const usuarioExistente = usuarios.find((u) => u.email === email);
    if (usuarioExistente) {
      Swal.fire("Ya existe", "Este correo ya esta registrado", "info");
      return;
    }
    const nuevoUsuario = { username, profile, email, password };
    setUsuarios([...usuarios, nuevoUsuario]);
    Swal.fire("Registro exitoso", "Usuario agregado correctamente", "success");
    setUsername("");
    setProfile("");
    setEmail("");
    setPassword("");
    setRepeatPassword("");
  };
  const editarUsuario = (email) => {
    Swal.fire({
      title: "Editar contraseña",
      input: "password",
      inputLabel: "Nueva contraseña",
      inputPlaceholder: "Escribe la nueva contraseña",
      showCancelButton: true,
      confirmButtonText: "Guardar",
      cancelButtonText: "Cancelar",
      inputValidator: (value) => {
        if (!value) return "Debes escribir una contraseña";
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const nuevaPassword = result.value;
        const nuevosUsuarios = usuarios.map((user) =>
          user.email === email ? { ...user, password: nuevaPassword } : user
        );
        setUsuarios(nuevosUsuarios);
        Swal.fire("Actualizado", "Contraseña modificada con éxito", "success");
      }
    });
  };
  const eliminarUsuario = (email) => {
    Swal.fire({
      title: "¿Eliminar usuario?",
      text: `Se eliminara ${email}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        const nuevosUsuarios = usuarios.filter((u) => u.email !== email);
        setUsuarios(nuevosUsuarios);
        Swal.fire("Eliminado", "Usuario borrado correctamente", "success");
      }
    });
  };
  return (
    <div className="login-modal">
      <div className="login-box">
        <h2>
          <FaUser style={{ marginRight: "10px", color: "#845d94ff" }} />
          Registrarse
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label id="usuario">Nombre de usuario</label>
            <div className="input-icon">
              <FaUser className="icon" />
              <input
                type="text"
                placeholder="Usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group">
            <label>Foto de perfil</label>
            <div className="input-icon">
              <FaImage className="icon" />
              <input
                type="text"
                placeholder="Perfil (URL o nombre)"
                value={profile}
                onChange={(e) => setProfile(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group">
            <label>Correo electronico</label>
            <div className="input-icon">
              <FaEnvelope className="icon" />
              <input
                type="email"
                placeholder="Correo"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group">
            <label>Contraseña</label>
            <div className="input-icon">
              <FaLock className="icon" />
              <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group">
            <label>confirma la contraseña</label>
            <div className="input-icon">
              <FaLock className="icon" />
              <input
                type="password"
                placeholder="Repite la contraseña"
                value={repeatPassword}
                onChange={(e) => setRepeatPassword(e.target.value)}
              />
            </div>
          </div>
          <button type="submit" className="login-btn">
            Registrar
          </button>
           <p className="politica-text">
          Al registrarte aceptas nuestra
          <a href="#">Política de Privacidad</a>
        </p>
        <p className="register-text">
          ¿Ya tienes cuenta? <a href="./">Inicia sesión aquí</a>
        </p>
        </form>
      </div>
    </div>
  );
}
export default Login;