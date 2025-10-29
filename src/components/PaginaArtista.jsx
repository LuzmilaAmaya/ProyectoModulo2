import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import artistas from "../js/artistasPopulares";
import "../css/paginaartista.css";

export default function PaginaArtista() {
  const { nombre } = useParams();
  const navigate = useNavigate();

    // Busca los datos del artista
    console.log(nombre)
  const artista = artistas.find((a) => a.nombre === nombre);

  if (!artista) {
    return (
      <div className="pagina-artista">
        <h2>Artista no encontrado 😕</h2>
        <button onClick={() => navigate(-1)}>Volver</button>
      </div>
    );
  }

  return (
    <div className="pagina-artista">
      <div className="header-artista">
        <img src={artista.imagen} alt={artista.nombre} className="imagen-grande" />
        <div className="info-artista">
          <h1>{artista.nombre}</h1>
          <p>{artista.descripcion || "Información próximamente disponible."}</p>
        </div>
      </div>

      <div className="canciones-artista">
        <h2>Canciones populares</h2>
        <ul>
          {artista.canciones?.map((cancion, i) => (
            <li key={i}>
              {cancion.titulo} <span>{cancion.duracion}</span>
            </li>
          )) || <p>No hay canciones disponibles.</p>}
        </ul>
      </div>
    </div>
  );
}
