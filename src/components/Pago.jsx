import React, { useState, useEffect } from "react";
import "../css/pago.css";
import { useNavigate } from "react-router-dom";

export default function Pago() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [numero, setNumero] = useState("");
  const [fecha, setFecha] = useState("");
  const [cvv, setCvv] = useState("");
  const [tarjetas, setTarjetas] = useState([]);
  const [pagando, setPagando] = useState(false);
  const [exito, setExito] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const tarjetasGuardadas =
      JSON.parse(localStorage.getItem("tarjetas")) || [];
    setTarjetas(tarjetasGuardadas);
  }, []);

  useEffect(() => {
    localStorage.setItem("tarjetas", JSON.stringify(tarjetas));
  }, [tarjetas]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevaTarjeta = { nombre, apellido, numero, fecha, cvv };
    const nuevasTarjetas = [...tarjetas, nuevaTarjeta];
    setTarjetas(nuevasTarjetas);
    localStorage.setItem("tarjetas", JSON.stringify(nuevasTarjetas));

    setPagando(true);
    setTimeout(() => {
      setPagando(false);
      setExito(true);
      setTimeout(() => navigate("/"), 2500); 
    }, 2000);
  };

  return (
    <div className="pago-wrapper">
      <div className="pago-container">
        {pagando ? (
          <div className="animacion-pago">
            <div className="loader"></div>
            <p>Procesando pago...</p>
          </div>
        ) : exito ? (
          <div className="animacion-exito">
            <div className="checkmark">✔</div>
            <p>¡Pago exitoso!</p>
          </div>
        ) : (
          <>
            <h2>Pagar con tarjeta de Crédito/Débito</h2>
            <form className="pago-form" onSubmit={handleSubmit}>
              <label>Nombre del titular de la tarjeta</label>
              <div className="fila">
                <input
                  type="text"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  placeholder="Nombre"
                  required
                />
                <input
                  type="text"
                  value={apellido}
                  onChange={(e) => setApellido(e.target.value)}
                  placeholder="Apellido"
                  required
                />
              </div>

              <label>Número de tarjeta</label>
              <div className="card-number-wrapper">
                <input
                  type="text"
                  value={numero}
                  onChange={(e) => setNumero(e.target.value)}
                  placeholder="1234 1234 1234 1234"
                  required
                />
                <div className="card-icons" aria-hidden="true">
                  <img
                    src="https://alchetron.com/cdn/visa-debit-0a235bc5-b0c7-4a16-82fc-4daf5d5d39c-resize-750.jpg"
                    alt="Visa"
                  />
                  <img
                    src="https://tse4.mm.bing.net/th/id/OIP.uyN05FrNnesqzU2e_15SkQHaFL?rs=1&pid=ImgDetMain&o=7&rm=3"
                    alt="Mastercard"
                  />
                  <img
                    src="https://prestacreditos.com/wp-content/uploads/2024/05/logo-naranjax-fondo-transparente-blanco.jpg"
                    alt="Naranja"
                  />
                  <img
                    src="https://tse1.mm.bing.net/th/id/OIP.h8J6LHm6VjsmBsnwBd2pCQHaFV?rs=1&pid=ImgDetMain&o=7&rm=3"
                    alt="Cabal"
                  />
                </div>
              </div>

              <div className="fila">
                <div>
                  <label>Fecha de vencimiento</label>
                  <input
                    type="text"
                    value={fecha}
                    onChange={(e) => setFecha(e.target.value)}
                    placeholder="MM/AA"
                    required
                  />
                </div>
                <div>
                  <label>CVV</label>
                  <input
                    type="text"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    placeholder="123"
                    required
                  />
                </div>
              </div>

              <button type="submit">Pagar ahora</button>
            </form>

            <p className="seguro">🔒 Tu pago es 100% seguro.</p>
            <button className="btn-volver" onClick={() => navigate("/")}>
              ← Volver al inicio
            </button>
          </>
        )}
      </div>
    </div>
  );
}
