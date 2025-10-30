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
export default function App() {
  return (
    <BrowserRouter>
      <div className="container py-4">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Busqueda />
                <ArtistasPopulares />
                <ExplorarCategorias />
                <Barrainferior />
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
        </Routes>
      </div>
    </BrowserRouter>
  );
}
