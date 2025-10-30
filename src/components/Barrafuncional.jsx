import React, { useState } from "react";
import Busqueda from "./Busqueda";
import ArtistasPopulares from "./ArtistasPopulares";
import ExplorarCategorias from "./ExplorarCategorias";
import artistas from "../js/artistasPopulares";
import categorias from "../js/categorias";

export default function Inicio() {
  const [busqueda, setBusqueda] = useState("");
  const artistasFiltrados = artistas.filter((a) =>
    a.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  const categoriasFiltradas = categorias.filter((c) =>
    c.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div>
      <Busqueda onBuscar={setBusqueda} />

      <ArtistasPopulares artistas={artistasFiltrados} />
      <ExplorarCategorias categorias={categoriasFiltradas} />
    </div>
  );
}
