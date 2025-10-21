import FilaCanciones from "./FilaCanciones";
import "../../css/AdminTable.css";

export default function AdminTable({
  canciones,
  setEditarCanciones,
  setShowEditar,
  fetchCanciones,
}) {
  return (
    <>
      <div className="AdminTable">
        <div className="table-responsive justify-content-center m-4">
          {canciones.length === 0 ? (
            <section class="d-flex flex-column justify-content-center align-items-center text-center bg-dark text-light rounded-4 shadow-lg py-5 my-5 mx-auto w-75">
              <div class="mb-4">
                <img
                  src="./output-onlinegiftools.gif"
                  alt="Agregar Canciones"
                  class="img-fluid opacity-75"
                  style="max-width: 120px"
                />
              </div>
              <h2 class="fw-semibold mb-2">Agrega tu primera canción</h2>
              <p class="text-secondary mb-4">
                para comenzar a utilizar nuestra página 🎧
              </p>
              <button
                id="btn-agregar"
                class="btn text-white px-4 py-2 rounded-pill"
                style="background-color: #6f42c1"
              >
                Agregar canción
              </button>
            </section>
          ) : (
            <table className="table table-bordered table-hover">
              <thead className="table-dark">
                <tr>
                  <th>Titulo</th>
                  <th>Artista</th>
                  <th>Album</th>
                  <th>Duracion</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {alumnos.map((alumno, indice) => {
                  return (
                    <AdminRow
                      cancion={cancion}
                      key={indice}
                      setEditarCancion={setAlumnoEditar}
                      setShowEditar={setShowEditar}
                      fetchAlumnos={fetchAlumnos}
                    ></AdminRow>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
}
