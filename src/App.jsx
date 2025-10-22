import React from "react";
import Header from "./components/Header";
import Busqueda from "./components/Busqueda";
import ArtistasPopulares from "./components/ArtistasPopulares";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Header />

      <Busqueda />

      <ArtistasPopulares />
    </div>
  )
}

export default App;