import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { canciones } from "../js/arraycanciones";
import "../css/paginacategoria.css";

export default function PaginaCategoria() {
  const { nombreCategoria } = useParams();
  const navigate = useNavigate();

  const categoria = decodeURIComponent(nombreCategoria).toLowerCase();
  const cancionesFiltradas = canciones.filter((c) =>
    c.genero.toLowerCase().includes(categoria)
  );

  return (
    <div className="pagina-categoria">
      <h2 className="titulo-categoria">{nombreCategoria} 🎵</h2>

      <div className="grid-canciones">
        {cancionesFiltradas.length > 0 ? (
          cancionesFiltradas.map((cancion) => (
            <div
              key={cancion.id}
              className="card-cancion"
              onClick={() =>
                navigate(`/detalles/${encodeURIComponent(cancion.titulo)}`)
              }
            >
              <img src={cancion.img} alt={cancion.titulo} />
              <p className="genero">{cancion.genero}</p>
              <h4>{cancion.titulo}</h4>
              <p>{cancion.artista}</p>
              <button onClick={() => navigate("")}>Play ▶</button>
            </div>
          ))
        ) : (
          <p>No hay canciones en esta categoría 😢</p>
        )}
      </div>

      <div>
        <button
          className="volver-pagcategorias"
          onClick={() => navigate("/")}
        >
          volver al inicio
        </button>
      </div>
    </div>
  );
}

