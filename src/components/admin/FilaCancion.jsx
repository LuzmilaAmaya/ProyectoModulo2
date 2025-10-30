import React from "react";
import Swal from "sweetalert2";
import { eliminarCancion } from "../../services/AdminService";

export default function FilaCancion({
  cancion,
  setEditarCancion,
  setShowEditar,
}) {
  function handleClickEditar() {
    setEditarCancion(cancion);
    setShowEditar(true);
  }

  function handleClickEliminar() {
    Swal.fire({
      title: "¿Estás seguro?",
      text: `¿Deseas eliminar la canción "${cancion.titulo}"?`,
      icon: "warning",
      showCancelButton: true,
      background: "#120C18",
      color: "#ffffff",
      confirmButtonColor: "#2C0F45",
      cancelButtonColor: "#321A4E",
      confirmButtonText: "Sí, eliminarla",
      cancelButtonText: "Cancelar",
      customClass: {
        confirmButton: "swal-confirm",
        cancelButton: "swal-cancel",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        eliminarCancion("canciones", cancion.id);
        Swal.fire(
          "¡Canción eliminada!",
          `${cancion.titulo} fue eliminada correctamente`,
          "success"
        );
      }
    });
  }

  return (
    <tr>
      <td>
        <img
          src={cancion.portadaUrl}
          alt={cancion.album}
          style={{ width: "60px", height: "60px", objectFit: "cover" }}
        />
      </td>
      <td>{cancion.titulo}</td>
      <td>{cancion.artista}</td>
      <td>{cancion.genero}</td>
      <td>{cancion.album}</td>
      <td>{cancion.duracion}</td>
      <td className="d-flex justify-content-around">
        <button
          type="button"
          onClick={handleClickEditar}
          className="btn btn-outline-secondary"
          style={{ margin: "2dvh" }}
        >
          <img
            src="https://img.icons8.com/?size=100&id=86376&format=png&color=9ca3af"
            alt="Editar"
            width="20"
          />
        </button>
        <button
          type="button"
          onClick={handleClickEliminar}
          className="btn btn-outline-danger"
          style={{ margin: "2dvh" }}
        >
          <img
            src="https://img.icons8.com/?size=100&id=68064&format=png&color=9CA3AF"
            alt="Eliminar"
            width="20"
          />
        </button>
      </td>
    </tr>
  );
}
