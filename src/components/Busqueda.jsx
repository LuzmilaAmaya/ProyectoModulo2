import React from "react";
import "../css/busqueda.css";

export default function Busqueda({ onBuscar }) {
  return (
    <div className="busqueda">
      <input
        type="text"
        placeholder="Buscar artistas, canciones..."
        onChange={(e) => onBuscar(e.target.value)}
      />
    </div>
  );
}
