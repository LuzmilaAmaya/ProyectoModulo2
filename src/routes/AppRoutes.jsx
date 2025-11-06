import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Busqueda from "../components/Busqueda";
import ArtistasPopulares from "../components/ArtistasPopulares";
import TodosLosArtistas from "../components/TodosLosArtistas";
import Detalles from "../pages/Detalles";
import ExplorarCategorias from "../components/ExplorarCategorias";
import Barrainferior from "../components/Barrainferior";
import PaginaArtista from "../components/PaginaArtista";
import PaginaCategoria from "../components/PaginaCategoria";
import Suscripcion from "../components/Suscripciones";
import Pago from "../components/Pago";
import Error404 from "../pages/Error404";
import Registro from "../components/IniciarSecion";
import Login from "../components/Registrarse";
import React, { useState } from "react";
import artistas from "../js/artistasPopulares";
import categorias from "../js/categorias";
import AdminPage from "../pages/AdminPage";
export default function App() {
  const [busqueda, setBusqueda] = useState("");

  const artistasFiltrados = artistas.filter((a) =>
    a.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  const categoriasFiltradas = categorias.filter((c) =>
    c.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="container py-4">
              <Header />
              <Busqueda onBuscar={setBusqueda} />
              <ArtistasPopulares artistas={artistasFiltrados} />
              <ExplorarCategorias categorias={categoriasFiltradas} />

              <Barrainferior />
            </div>
          }
        />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/artistas" element={<TodosLosArtistas />} />
        <Route path="/artista/:nombre" element={<PaginaArtista />} />
        <Route
          path="/categoria/:nombreCategoria"
          element={<PaginaCategoria />}
        />
        <Route path="/detalles/:nombreCancion" element={<Detalles />} />
        <Route path="/iniciarsesion" element={<Registro />} />
        <Route path="/register" element={<Login />} />
        <Route path="/suscripcion" element={<Suscripcion />} />
        <Route path="/pago" element={<Pago />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}
