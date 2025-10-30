import React from "react";
import Header from "./components/Header";
import Busqueda from "./components/Busqueda";
import ArtistasPopulares from "./components/ArtistasPopulares";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TodosLosArtistas from "./components/TodosLosArtistas";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return <AppRoutes />;
}

export default App;
