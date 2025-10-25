import React from "react";
import "../css/explorarcategorias.css";
import categorias from "../js/categorias";

export default function ExplorarCategorias() {
  return (
    <section className="explorar-categorias">
      <h2>Explorar Categorias</h2>
      <div className="grid-categorias">
        {categorias.map((cat, i) => (
          <div
            key={i}
            className="categoria-card"
            style={{ backgroundColor: cat.color }}
          >
            <img src={cat.imagen} alt={cat.nombre} />
            <span>{cat.nombre}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
