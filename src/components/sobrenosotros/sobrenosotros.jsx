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
              src="https://st5.depositphotos.com/70796840/63605/v/450/depositphotos_636054014-stock-illustration-simspson-vector-cartoon-character.jpg"
              alt="foto de homero "
            />
            <h3 class="text-center">descripción</h3>
            <p>
             Homero es una persona , la cual le encanta tomar cerveza y le gusta pegarle a su hijo 
            </p>
          </div>

          <div className="card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpLSh_fDe6Lfdhz39vF56M_XsglS6wYZKOog&s"
              alt="foto de messi"
            />
            <h3>Descripcion</h3>
            <p>
              Lionel Messi es un jugador de futbol , el cual salio campeon del mundo con Argentina en el año 2022
            </p>
          </div>

          <div className="card">
            <img
              src="https://cdn-p.smehost.net/sites/5b3bac59eb36401694af3a241173447f/wp-content/uploads/2022/05/Captura-de-Pantalla-2022-05-10-a-las-9.58.24.png"
              alt="foto de tini "
            />
            <h3>Descripcion</h3>
            <p>
              Tini Stoessel es una cantante y actriz argentina, conocida por su
              papel en la serie "Violetta" y por su exitosa carrera musical.
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
