import React, { useState } from "react";
import vertodo from "../js/vertodos";
import "../css/todoslosartistas.css";
import { useNavigate } from "react-router-dom";

export default function TodosLosArtistas() {
  const navigate = useNavigate();
  const [busqueda, setBusqueda] = useState("");
  const [seleccionados, setSeleccionados] = useState([]);

  const handleSeleccion = (nombre) => {
    if (seleccionados.includes(nombre)) {
      setSeleccionados(seleccionados.filter((n) => n !== nombre));
    } else {
      setSeleccionados([...seleccionados, nombre]);
    }
  };

  const artistasFiltrados = vertodo.filter((a) =>
    a.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <section className="todos-artistas">
      <div className="header">
        <h2>Elige tus artistas favoritos</h2>
        <p>Esto nos ayudará a personalizar tus recomendaciones</p>
      </div>

      <div className="buscador-container">
        <input
          type="text"
          placeholder="Buscar artistas..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
      </div>

      <div className="grid-artistas">
        {artistasFiltrados.map((artista, index) => (
          <div
            key={index}
            className={`artista-item ${
              seleccionados.includes(artista.nombre) ? "seleccionado" : ""
            }`}
            onClick={() => handleSeleccion(artista.nombre)}
          >
            <img src={artista.imagen} alt={artista.nombre} />
            <p>{artista.nombre}</p>
          </div>
        ))}
      </div>

      <button className="confirmar-btn" onClick={() => navigate("/")}>
        Confirmar
      </button>
    </section>
  );
}
