import React from "react";
import Header from "./components/Header";
import Busqueda from "./components/Busqueda";
import ArtistasPopulares from "./components/ArtistasPopulares";

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