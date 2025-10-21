import React from "react";
import Swal from "sweetalert2";
import { eliminarAlumno } from "../../services/alumnos.service.js";

export default function AdminRow({
  canciones,
  setEditarCanciones,
  setShowEditar,
  fetchCancion,
}) {
  function handleClickEditar() {
    setEditarCancion(cancion); 
    setShowEditar(true); 
  }
  function handleClickEliminar() {
    const confirmar = confirm("Seguro que desea eliminar la cancion?");
    if (!confirmar) return;
    eliminarAlumno("canciones", cancion.id);
    Swal.fire({
      title: "¡Cancion eliminado!",
      text: `${cancion.nombre} fue eliminado correctamente`,
      icon: "success",
    });
    fetchCancion();
  }
  return (
    <tr>
    
      <td className="">{cancion.titulo}</td>
      <td className="">{cancion.artista}</td>
      <td className="">{cancion.album}</td>
      <td className="">{cancion.duracion}</td>
      <td className="d-flex justify-content-around">
        <button
          type="button"
          onClick={handleClickEditar}
          className="btn btn-outline-secondary"
        >
          <img src="https://img.icons8.com/?size=100&id=86376&format=png&color=9ca3af" alt="Editar Cancion" />
        </button>
        <button
          type="button"
          onClick={handleClickEliminar}
          className="btn btn-outline-danger"
        >
          <img src="https://img.icons8.com/?size=100&id=68064&format=png&color=9CA3AF" alt="Eliminar Cancion" />
        </button>
      </td>
    </tr>
  );
}