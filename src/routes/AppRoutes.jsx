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
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="container py-4">
                <Header />
                <Busqueda />
                <ArtistasPopulares />
                <ExplorarCategorias />
                <Barrainferior />
              </div>
            </>
          }
        />
        <Route path="/artistas" element={<TodosLosArtistas />} />
        <Route path="/artista/:nombre" element={<PaginaArtista />} />
        <Route
          path="/categoria/:nombreCategoria"
          element={<PaginaCategoria />}
        />
        <Route path="/detalles/:nombreCancion" element={<Detalles />} />
        <Route path="/suscripcion" element={<Suscripcion />} />
        <Route path="/pago" element={<Pago />} />
      </Routes>
    </BrowserRouter>
  );
}
