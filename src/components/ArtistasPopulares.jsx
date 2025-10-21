import React from "react";
import "../css/artistaspopulares.css"
import artistas from "../js/artistasPopulares";

export default function ArtistasPopulares() {
  return (
    <section className="artistas-populares">
        <div className="artistas-header">
            <h2>Artistas populares</h2>
            <button className="ver-todos-btn">Ver todos</button>
        </div>

        <div className="lista-artistas">
            {artistas.map((artistas, index) => (
                <div className="artista" key={index}>
                    <a href="#"><img src={artistas.imagen} alt={artistas.nombre} /></a>
                    <p>{artistas.nombre}</p>
                </div>
            ))}
        </div>
    </section>
  );
}
