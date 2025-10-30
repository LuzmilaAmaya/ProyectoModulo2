import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";
// import { guardarEnSessionStorage } from "../../utils/localStorage.js";
import "../css/Registro.css"; 

export default function FormLogin() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const navigate = useNavigate();

  function obtenerDelLocalStorage() {
    return JSON.parse(localStorage.getItem("usuarios")) || [];
  }

  function onSubmit(data) {
    const usuariosDelLocalStorage = obtenerDelLocalStorage();
    const usuarioExistente = usuariosDelLocalStorage.find(
      (usuario) => usuario.email === data.email
    );

    if (!usuarioExistente) {
      alert("EMAIL o PASSWORD INCORRECTO - EMAIL!");
      return;
    }

    if (usuarioExistente.password !== data.password) {
      alert("EMAIL o PASSWORD INCORRECTO - PASSWORD!");
      return;
    }

    guardarEnSessionStorage("usuario", usuarioExistente);
    alert("Inicio de sesión EXITOSO!");
    reset();
    navegacion("/");
  }

  return (
    <div className="login-modal">
      <div className="login-box">
        <h2>Iniciar Sesión</h2>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <Form.Label>Email</Form.Label>
            <Form.Control
              className="input-icon"
              type="email"
              placeholder="Ingrese su email"
              isInvalid={errors.email}
              {...register("email", {
                required: "El campo es obligatorio",
                minLength: {
                  value: 5,
                  message: "Debe ingresar al menos 5 caracteres",
                },
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Debe ingresar un email válido",
                },
              })}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email?.message}
            </Form.Control.Feedback>
          </div>

          <div className="form-group">
            <Form.Label>Password</Form.Label>
            <Form.Control
              className="input-icon"
              type="password"
              placeholder="Ingrese su password"
              isInvalid={errors.password}
              {...register("password", {
                required: "El campo es obligatorio",
                minLength: {
                  value: 4,
                  message: "Debe ingresar al menos 4 caracteres",
                },
              })}
            />
            <Form.Control.Feedback type="invalid">
              {errors.password?.message}
            </Form.Control.Feedback>
          </div>

          <Button type="submit" className="login-btn"  onClick={() => navigate("/")}>
            Iniciar Sesión
          </Button>

          <p className="politica-text">
            Al iniciar sesión aceptas nuestra{" "}
            <a href="#">Política de Privacidad</a>
          </p>
          <p className="register-text">
            ¿No tienes cuenta? <a href="/login">Regístrate aquí</a>
          </p>
        </Form>
      </div>
    </div>
  );
}
