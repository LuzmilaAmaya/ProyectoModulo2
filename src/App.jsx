import React from "react";
import Header from "./components/Header";
import Busqueda from "./components/Busqueda";
import ArtistasPopulares from "./components/ArtistasPopulares";
import SobreNosotros from "./components/sobrenosotros/sobrenosotros.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TodosLosArtistas from "./components/TodosLosArtistas";

function App() {
  return (
    <>
      <Header />

      <Busqueda />

      <ArtistasPopulares />
      <SobreNosotros />
    </>
  )
}

export default App;