import React from "react";
import "../css/artistaspopulares.css";
import artistas from "../js/artistasPopulares";
import { useNavigate } from "react-router-dom";

export default function ArtistasPopulares() {
  const navigate = useNavigate();

  // función para redirigir al artista
  const irAPaginaArtista = (nombre) => {
    navigate(`/artista/${encodeURIComponent(nombre)}`);
  };

  return (
    <section className="artistas-populares">
      <div className="artistas-header">
        <h2>Artistas populares</h2>
        <button className="ver-todos-btn" onClick={() => navigate("/artistas")}>
          Ver todos
        </button>
      </div>

      <div className="lista-artistas">
        {artistas.map((artista, index) => (
          <div
            className="artista"
            key={index}
            onClick={() => irAPaginaArtista(artista.nombre)}
          >
            <img src={artista.imagen} alt={artista.nombre} />
            <p>{artista.nombre}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
