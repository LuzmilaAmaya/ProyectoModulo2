import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/cardcancion.css";

export default function CardCancion({ cancion }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/Detalles/${encodeURIComponent(cancion.titulo)}`);
  };

  return (
    <div className="card-cancion" onClick={handleClick}>
      <img src={cancion.img} alt={cancion.titulo} className="card-imagen" />
      <div className="card-info">
        <h3 className="card-titulo">{cancion.titulo}</h3>
        <p className="card-genero">{cancion.genero}</p>
        <p className="card-duracion">{cancion.duracion}</p>
      </div>
    </div>
  );
}
