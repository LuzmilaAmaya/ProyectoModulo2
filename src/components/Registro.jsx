import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/registro.css";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div className="login-modal">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <div className="login-box">
              <h2>Crear cuenta</h2>
              <p className="text-center text-light mb-4">
                Registrate para empezar a disfrutar Melix Music 🎵
              </p>

              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
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
                  <Form.Control.Feedback type="invalid">
                    {errors.email?.message}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
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
                  </Form.Control.Feedback>{" "}
                </Form.Group>
                <button onClick={() => Navigate("/")} className="login-btn">
                  Limpiar formulario
                </button>
              </Form>

              <div className="register-text mt-4">
                ¿Ya tenés cuenta? <Link to="/login">Iniciar sesión</Link>
              </div>
              <div className="politica-text mt-2">
                <Link to="/">← Volver al inicio</Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RegisterPage;
