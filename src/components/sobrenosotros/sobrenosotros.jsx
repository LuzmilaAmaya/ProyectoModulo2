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
              src=""
              alt="foto de agustin"
            />
            <h3 class="text-center">descripción</h3>
            <p>
            </p>
          </div>

          <div className="card">
            <img
              src=""
              alt="foto de lautaro"
            />
            <h3>Descripcion</h3>
            <p>
                Hola, soy Lautaro Pérez, tengo 18 años y estudio Programación en RollingCode. Me apasiona la tecnología y la resolución de problemas. Disfruto aprender cosas nuevas, trabajar con código (aunque a veces lo rompa un poco antes de arreglarlo) y seguir mejorando cada día como desarrollador.
            </p>
          </div>

          <div className="card">
            <img
             src=""
             alt="foto de sofia "
            />
            <h3>Descripcion</h3>
            <p>
              
            </p>
          </div>
           <div className="card">
            <img
             src=""
             alt="foto de luzmila"
            />
            <h3>Descripcion</h3>
            <p>
              Hola!, soy Luzmila Amaya y tengo 18 años, actualmente me encuentro estudiando programación en RollingCode.
            </p>
          </div> <div className="card">
            <img
             src=""
             alt="foto de mateo"
            />
            <h3>Descripcion</h3>
            <p>
              Me llamo mateo rosas, tengo 16 añosy estoy en 5to  año, y mientras estoy haciendo el curso de programacion en Rolling Code School
            </p>
          </div>
        </div>
      <h3 class="">"Aqui ira escrita la frase decidida por el grupo , sobre la pagina"</h3>

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
