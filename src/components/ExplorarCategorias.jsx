import React from "react";
import "../css/explorarcategorias.css";
import categorias from "../js/categorias";
import { useNavigate } from "react-router-dom";

export default function ExplorarCategorias() {
  const navigate = useNavigate();

  return (
    <section className="explorar-categorias">
      <h2>Explorar Categorías</h2>
      <div className="grid-categorias">
        {categorias.map((cat, i) => (
          <div
            key={i}
            className="categoria-card"
            style={{ backgroundColor: cat.color }}
            onClick={() => navigate(`/categoria/${encodeURIComponent(cat.nombre)}`)}
          >
            <img src={cat.imagen} alt={cat.nombre} />
            <span>{cat.nombre}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
