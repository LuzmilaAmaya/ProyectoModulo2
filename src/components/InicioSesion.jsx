import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import FormLogin from "../components/auth/FormLogin";
import "../css/register.css"; // reutiliza el mismo CSS violeta

const LoginPage = () => {
  return (
    <div className="login-modal">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <div className="login-box">
              <h2>Iniciar sesión</h2>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Ingrese su email"
                    isInvalid={errors.email}
                    {...register("email", {
                      required: "El campo es obligatorio",
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
                  <Form.Label>Contraseña</Form.Label>
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
                  <Form.Control.Feedback type="invalid">
                    {errors.password?.message}
                  </Form.Control.Feedback>
                </Form.Group>

                <Button type="submit" className="login-btn">
                  Iniciar sesión
                </Button>
              </Form>

              <div className="register-text mt-4">
                ¿No tenés cuenta? <Link to="/register">Registrate</Link>
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

export default LoginPage;
