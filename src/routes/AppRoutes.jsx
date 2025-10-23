import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Busqueda from "../components/Busqueda";
import ArtistasPopulares from "../components/ArtistasPopulares";
import TodosLosArtistas from "../components/TodosLosArtistas";
import Detalles from "../components/detalles/detalles";
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
              </>
            }
          />
          <Route path="/artistas" element={<TodosLosArtistas />} />
          <Route path="/detalles" element={<Detalles />} />
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}
