import FilaCancion from "./FilaCancion.jsx";

export default function TablaCanciones({
  canciones,
  setEditarCancion,
  setShowEditar,
  fetchCanciones,
}) {
  return (
    <div className="AdminTable container py-4">
      <div className="table-responsive m-1">
        {canciones.length === 0 ? (
          <section className="d-flex flex-column justify-content-center align-items-center text-center rounded-4 py-5 my-5 mx-auto w-75 empty-box">
            <div className="mb-4">
              <img
                src="./output-onlinegiftools.gif"
                alt="Agregar Canciones"
                className="img-fluid opacity-75"
                style={{ maxWidth: "120px" }}
              />
            </div>
            <h2 className="mb-2 text-white">Agrega tu primera canción</h2>
            <p className="text-secondary mb-4">
              Para comenzar a utilizar nuestra página 🎧
            </p>
          </section>
        ) : (
          <table className="table table-dark col-12  text-white align-middle">
            <thead>
              <tr>
                <th>Portada</th>
                <th>Titulo</th>
                <th>Artista</th>
                <th>Genero</th>
                <th>Album</th>
                <th>Duracion</th>
                <th className="text-center">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {canciones.map((cancion) => (
                <FilaCancion
                  key={cancion.id}
                  cancion={cancion}
                  setEditarCancion={setEditarCancion}
                  setShowEditar={setShowEditar}
                  fetchCanciones={fetchCanciones}
                />
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
