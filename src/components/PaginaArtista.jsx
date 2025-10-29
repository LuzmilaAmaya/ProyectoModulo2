import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import artistas from "../js/artistasPopulares";
import { canciones } from "../js/arraycanciones"; // importa el array
import CardCancion from "../components/CardCancion";
import "../css/paginaartista.css";

export default function PaginaArtista() {
  const { nombre } = useParams();
  const navigate = useNavigate();

  const artista = artistas.find((a) => a.nombre === nombre);

  if (!artista) {
    return (
      <div className="pagina-artista">
        <h2>Artista no encontrado 😕</h2>
        <button onClick={() => navigate(-1)}>Volver</button>
      </div>
    );
  }

  // Filtra las canciones de este artista
  const cancionesArtista = canciones.filter((c) =>
    c.artista.toLowerCase().includes(artista.nombre.toLowerCase())
  );

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

        {cancionesArtista.length > 0 ? (
          <div className="grilla-canciones">
            {cancionesArtista.map((cancion) => (
              <CardCancion key={cancion.id} cancion={cancion} />
            ))}
          </div>
        ) : (
          <p>No hay canciones disponibles.</p>
        )}
      </div>
    </div>
  );
}
