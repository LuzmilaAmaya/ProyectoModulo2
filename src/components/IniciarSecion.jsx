import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import "../css/Registro.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function InicioSesion() {
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

  function obtenerUsuariosDelLocalStorage() {
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    return usuarios;
  }

  function iniciarSesion(data) {
    try {
      const usuarios = obtenerUsuariosDelLocalStorage();
      const usuarioEncontrado = usuarios.find(
        (u) => u.email === data.email && u.password === data.password
      );

      if (usuarioEncontrado) {
        sessionStorage.setItem(
          "usuarioActivo",
          JSON.stringify(usuarioEncontrado)
        );

        Swal.fire({
          icon: "success",
          title: "¡Bienvenido!",
          text: `Has iniciado sesión correctamente`,
        });

        reset();
        navigate("/");
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Email o contraseña incorrectos",
        });
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo iniciar sesión",
      });
    }
  }

  return (
    <div className="login-modal">
      <div className="login-box">
        <h2>Iniciar Sesión</h2>
        <Form onSubmit={handleSubmit(iniciarSesion)}>
          <Form.Group className="form-group" controlId="formBasicEmail">
            <div className="input-icon">
              <span className="icon">📧</span>
              <Form.Control
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
            </div>
            <Form.Control.Feedback type="invalid">
              {errors.email?.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="form-group" controlId="formBasicPassword">
            <div className="input-icon">
              <span className="icon">🔒</span>
              <Form.Control
                type="password"
                placeholder="Ingrese su contraseña"
                isInvalid={errors.password}
                {...register("password", {
                  required: "El campo es obligatorio",
                  minLength: {
                    value: 4,
                    message: "Debe ingresar al menos 4 caracteres",
                  },
                })}
              />
            </div>
            <Form.Control.Feedback type="invalid">
              {errors.password?.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Button type="submit" className="login-btn">
            Iniciar Sesión
          </Button>

          <p className="register-text mt-3">
            ¿No tienes cuenta? <a href="/registro">Regístrate aquí</a>
          </p>
        </Form>
      </div>
    </div>
  );
}
