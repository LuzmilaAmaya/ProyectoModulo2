import React from "react";
import "../css/suscripcion.css";

export default function Suscripcion() {
  return (
    <div className="suscripcion">
      <h1>Elegí tu plan Premium</h1>

      {/* Sección de tarjetas */}
      <div className="planes">
        <div className="plan basico">
          <span className="oferta">Oferta de 2 meses</span>
          <h2>Individual</h2>
          <p className="precio">$3.299*** por 2 meses</p>
          <p className="detalle-precio">Después, cuesta $3.299*** al mes</p>
          <ul>
            <li>1 cuenta Premium</li>
            <li>Cancelá cuando quieras</li>
            <li>Pago por suscripción o pago único</li>
          </ul>
          <div className="botones">
            <button>Volver a Premium</button>
            <button className="secundario">Pago único</button>
          </div>
          <p className="terminos">
            $3.299*** por 2 meses. Después, cuesta $3.299*** al mes. Se aplican
            términos.
          </p>
        </div>

        <div className="plan estudiantes">
          <h2>Estudiantes</h2>
          <p className="precio">$1.799*** al mes</p>
          <ul>
            <li>1 cuenta Premium verificada</li>
            <li>Descuento para estudiantes</li>
            <li>Cancelá cuando quieras</li>
            <li>Pago por suscripción o pago único</li>
          </ul>
          <div className="botones">
            <button>Obtener Premium para Estudiantes</button>
            <button className="secundario">Pago único</button>
          </div>
          <p className="terminos">
            La oferta está disponible solo para estudiantes. Se aplican
            términos.
          </p>
        </div>

        <div className="plan duo">
          <h2>Duo</h2>
          <p className="precio">$4.399*** al mes</p>
          <ul>
            <li>2 cuentas Premium</li>
            <li>Cancelá cuando quieras</li>
            <li>Pago por suscripción o pago único</li>
          </ul>
          <div className="botones">
            <button>Obtener Premium Duo</button>
            <button className="secundario">Pago único</button>
          </div>
          <p className="terminos">
            Para parejas que viven en el mismo domicilio. Se aplican términos.
          </p>
        </div>
      </div>

      {/* 🔽 Sección adicional: Planes accesibles */}
      <div className="planes-accesibles">
        <h2>Planes accesibles para cada situación</h2>
        <p>
          Elegí un plan Premium y escuchá música sin anuncios y sin límites en
          tu teléfono, parlante y otros dispositivos. Accedé a varias formas de
          pago. Cancelá cuando quieras.
        </p>

        <div className="metodos-pago">
          <img src="https://alchetron.com/cdn/visa-debit-0a235bc5-b0c7-4a16-82fc-4daf5d5d39c-resize-750.jpg" alt="Visa" />
          <img src="https://th.bing.com/th/id/R.e4940e2a74966892c29e6b1d4be7c755?rik=8QHS4nqqgMmF6w&pid=ImgRaw&r=0g" alt="MasterCard" />
          <img src="https://prestacreditos.com/wp-content/uploads/2024/05/logo-naranjax-fondo-transparente-blanco.jpg" alt="NaranjaX" />
          <img src="https://tse1.mm.bing.net/th/id/OIP.h8J6LHm6VjsmBsnwBd2pCQHaFV?rs=1&pid=ImgDetMain&o=7&rm=3" alt="Cabal" />
        </div>
      </div>
    </div>
  );
}
