import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import TablaCanciones from "../components/admin/TablaCanciones.jsx";
import NuevaCancion from "../components/admin/NuevaCancion.jsx";
import { obtenerCanciones } from "../services/AdminService.js";
import EditarCancion from "../components/admin/EditarCancion.jsx";
import { inicializarCanciones } from "../constants/canciones.js";
import "../css/adminpage.css";

export default function AdminPage() {
  const [cancionBuscada, setCancionBuscada] = useState("");
  const [canciones, setCanciones] = useState([]);
  const [showCrear, setShowCrear] = useState(false);
  const [showEditar, setShowEditar] = useState(false);
  const [cancionEditar, setCancionEditar] = useState(null);

  const fetchCanciones = () => {
    const cancionesGuardadas = obtenerCanciones("canciones");
    setCanciones(cancionesGuardadas);
  };

  useEffect(() => {
    const cancionesIniciales = inicializarCanciones();
    setCanciones(cancionesIniciales);
  }, []);

  function handleClickBuscar(e) {
    e.preventDefault();
    if (cancionBuscada.trim() === "") return;

    Swal.fire({
      toast: true,
      position: "top-end",
      title: "Buscando...",
      text: `Filtrando canciones...`,
      icon: "info",
      showConfirmButton: false,
      timer: 1200,
      background: "#120C18",
      color: "#ffffff",
    });
  }

  function handleClickAgregar() {
    setShowCrear(true);
  }

  const cancionesFiltradas = canciones.filter((cancion) =>
    cancion.titulo.toLowerCase().includes(cancionBuscada.toLowerCase())
  );

  return (
    <section className="admin-section">
      <header className="text-center mb-4">
        <h3 className="text-white">Administrador de Canciones 🎵</h3>
      </header>

      <div className="d-flex flex-row justify-content-center align-items-center mb-4">
        <form className="d-flex" role="search" onSubmit={handleClickBuscar}>
          <input
            className="form-control search-input"
            type="search"
            placeholder="Buscar canción..."
            value={cancionBuscada}
            onChange={(event) => setCancionBuscada(event.target.value)}
          />
          <button className="btn btn-add-song ms-2" type="submit">
            <img
              src="https://img.icons8.com/?size=100&id=p3miLroKw4iR&format=png&color=ffffff"
              alt="Buscar"
              width="25"
            />
          </button>
        </form>

        <button
          type="button"
          onClick={handleClickAgregar}
          className="btn btn-add-song m-3"
        >
          Agregar Canción
        </button>
      </div>

      <TablaCanciones
        canciones={cancionesFiltradas}
        setShowEditar={setShowEditar}
        setEditarCancion={setCancionEditar} 
        fetchCanciones={fetchCanciones}
      />

      <NuevaCancion
        showCrear={showCrear}
        setShowCrear={setShowCrear}
        fetchCanciones={fetchCanciones}
      />

      <EditarCancion
        showEditar={showEditar}
        setShowEditar={setShowEditar}
        cancionEditar={cancionEditar}
        setCanciones={setCanciones}
      />
    </section>
  );
}
