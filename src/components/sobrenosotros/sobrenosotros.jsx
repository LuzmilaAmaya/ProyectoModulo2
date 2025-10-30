import React from "react";
import "../../css/sobrenosotros.css";

export default function SobreNosotros() {
  return (
    <section id="sobrenosotros" className="sobrenosotros-section">
      <div className="sobrenosotros-container">
        <h2 className="title">Sobre Nosotros</h2>
        <p className="lead">
          Somos una plataforma dedicada a conectar artistas emergentes con
          oyentes de todo el mundo. Nuestro objetivo es facilitar que la música
          original llegue a nuevas audiencias y que los creadores encuentren su
          comunidad.
        </p>

        <div className="grid">
          <div className="card">
            <img
              src="https://res.cloudinary.com/dw05hk9ht/image/upload/v1761844680/WhatsApp_Image_2025-10-30_at_2.15.51_PM_xux7fo.jpg"
              alt="foto de agustin"
            />
            <h3 class="text-center">Descripción</h3>
            <p></p>
          </div>

          <div className="card">
            <img src=""
             alt="foto de lautaro" />
            <h3>Descripcion</h3>
            <p>
              Hola, soy Lautaro Pérez, tengo 18 años y estudio Programación en
              RollingCode. Me apasiona la tecnología y la resolución de
              problemas. Disfruto aprender cosas nuevas, trabajar con código
              (aunque a veces lo rompa un poco antes de arreglarlo) y seguir
              mejorando cada día como desarrollador.
            </p>
          </div>

          <div className="card">
            <img
              src="https://res.cloudinary.com/dw05hk9ht/image/upload/v1761844684/WhatsApp_Image_2025-10-28_at_8.28.25_PM_umbcpd.jpg"
              alt="foto de sofia "
            />
            <h3>Descripcion</h3>
            <p></p>
          </div>
          <div className="card">
            <img src="https://res.cloudinary.com/dw05hk9ht/image/upload/v1761847310/WhatsApp_Image_2025-10-30_at_2.17.07_PM_rlvmqi.jpg" alt="foto de luzmila" />
            <h3>Descripcion</h3>
            <p>
              Hola!, soy Luzmila Amaya y tengo 18 años, actualmente me encuentro
              estudiando programación en RollingCode.
            </p>
          </div>{" "}
          <div className="card">
            <img
              src="https://res.cloudinary.com/dw05hk9ht/image/upload/v1761844654/WhatsApp_Image_2025-10-30_at_2.16.13_PM_pt49s6.jpg"
              alt="foto de mateo"
            />
            <h3>Descripcion</h3>
            <p>
              Me llamo mateo rosas, tengo 16 años y estoy en 5to año de la
              secundaria, y mientras estoy haciendo el curso de programacion en
              Rolling Code School
            </p>
          </div>
        </div>
                 {/* Frase a destacar */}
        <h3>
          "Nuestra página es donde la música y la pasión se encuentran,
          encuentra tu ritmo y encuentrate a ti mismo"
        </h3>

        <div className="contact">
          <h4>Contacto</h4>
          <p>
            Escríbenos: usuario123"@gmail.com· Síguenos en redes para las últimas
            novedades.
          </p>
        </div>
      </div>
    </section>
  );
}
