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
            <h3 class="text-center">descripción</h3>
            <p>
              Hola soy Agustín Saez Cocciolo tengo 18 años me gusta mucho la
              programacion web y la tecnología también me gusta mucho jugar al
              fútbol con mis amigos
            </p>
          </div>
          <div className="card">
            <img
              src="https://res.cloudinary.com/dw05hk9ht/image/upload/v1761847310/WhatsApp_Image_2025-10-30_at_2.17.07_PM_rlvmqi.jpg"
              alt="foto de lautaro"
            />
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
            <p>
              Tengo 19 años y actualmente estoy cursando la carrera de
              Programador Universitario (UNT). Al mismo tiempo, me estoy
              formando como desarrolladora Full Stack en Rolling Code School.
            </p>
          </div>
          <div className="card">
            <img
              src="https://res.cloudinary.com/dw05hk9ht/image/upload/v1761851091/WhatsApp_Image_2025-10-30_at_4.01.46_PM_tex3xh.jpg"
              alt="foto de luzmila"
            />
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
          "Descubre la magia de la música en nuestra página,y conecta tu alma atravez de las notas"
        </h3>

        <div className="contact">
          <h4>Contacto</h4>
          <p>
            Escríbenos: hola@tunombre.com · Síguenos en redes para las últimas
            novedades.
          </p>
        </div>
      </div>
    </section>
  );
}
