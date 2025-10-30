import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "../css/Registro.css";

export default function Registro() {
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

  const navegacion = useNavigate();

  function obtenerDelLocalStorage() {
    const usuariosDelLocalStorage =
      JSON.parse(localStorage.getItem("usuarios")) || [];
    return usuariosDelLocalStorage;
  }

  function guardarEnLocalStorage(nuevoListado) {
    localStorage.setItem("usuarios", JSON.stringify(nuevoListado));
  }

  function onSubmit(data) {
    try {
      const nuevoUsuario = {
        id: Date.now(),
        email: data.email,
        password: data.password,
        createdAt: new Date().toISOString(),
      };

      const listadoUsuariosLS = obtenerDelLocalStorage();
      guardarEnLocalStorage([...listadoUsuariosLS, nuevoUsuario]);

      alert("Usuario registrado con éxito ✅");
      reset();
      navegacion("/"); // redirige al home o login
    } catch (error) {
      console.log(error);
      alert("No se pudo crear el usuario ❌");
    }
  }

  return (
    <div className="login-modal">
      <div className="login-box">
        <h2>Crear Cuenta</h2>
        <Form onSubmit={handleSubmit(onSubmit)}>
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

          <Button variant="primary" type="submit" className="login-btn">
            Registrarse
          </Button>

          <p className="register-text mt-3">
            ¿Ya tienes cuenta?{" "}
            <a href="/iniciarsesion">Inicia sesión aquí</a>
          </p>
        </Form>
      </div>
    </div>
  );
}
