import React from "react";
import "../css/explorarcategorias.css";
import { useNavigate } from "react-router-dom";

export default function ExplorarCategorias({ categorias }) {
  const navigate = useNavigate();

  return (
    <section className="explorar-categorias">
      <h2>Explorar Categorías</h2>
      <div className="grid-categorias">
        {categorias.length > 0 ? (
          categorias.map((cat, i) => (
            <div
              key={i}
              className="categoria-card"
              style={{ backgroundColor: cat.color }}
              onClick={() =>
                navigate(`/categoria/${encodeURIComponent(cat.nombre)}`)
              }
            >
              <img src={cat.imagen} alt={cat.nombre} />
              <span>{cat.nombre}</span>
            </div>
          ))
        ) : (
          <p>No se encontraron categorías</p>
        )}
      </div>
    </section>
  );
}
