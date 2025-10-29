import React from 'react';
import { useParams } from 'react-router-dom';
import "../css/detalles.css";
import { canciones } from '../js/arraycanciones';

export default function Detalles() {
  const { nombreCancion } = useParams();
  const decodedNombre = decodeURIComponent(nombreCancion);

  const cancion = canciones.find(c => c.titulo === decodedNombre);

  if (!cancion) {
    return (
      <div className='musica-page'>
        <h2>Canción no encontrada 😢</h2>
        <p>Verifica el nombre o vuelve a la página principal.</p>
      </div>
    );
  }

  
  const generosCancion = cancion.genero
    .toLowerCase()
    .split("/")
    .map(g => g.trim());

  
  const recomendaciones = canciones.filter(c => {
    if (c.id === cancion.id) return false; 
    const generosC = c.genero.toLowerCase().split("/").map(g => g.trim());
   
    return generosC.some(g => generosCancion.includes(g));
  });

  return (
    <div className='musica-page'>
      <section className='musica-detalle'>
        <div className='album-cover'>
          <img src={cancion.img} alt={cancion.titulo} />
        </div>

        <div className='albuminfo'>
          <p className='genero'>{cancion.genero}</p>
          <h2 className='titulo'>{cancion.titulo}</h2>
          <p className='artista'>{cancion.artista}</p>

          <div className='detalles'>
            <p>Duración: <strong>{cancion.duracion}</strong></p>
            <p>ID: <strong>{cancion.id}</strong></p>
          </div>

          <div className='botones'>
            <button className='btn-reproducir'>▶</button>
            <button className='btn-lista'>+ Añadir a la lista</button>
            <button className='btn-eliminar'>- Eliminar</button>
          </div>
        </div>
      </section>

      <section className='masartistas'>
        <h3>Recomendados <span className='parati'>para ti</span></h3>
        <div className='listacanciones'>
          {recomendaciones.length > 0 ? (
            recomendaciones.map((c) => (
              <div className='cancion' key={c.id}>
                <img src={c.img} alt={c.titulo} />
                <p className='genero'>{c.genero}</p>
                <h4>{c.titulo}</h4>
                <p>{c.artista}</p>
                <button>Play ▶</button>
              </div>
            ))
          ) : (
            <p>No hay canciones disponibles 😢😢</p>
          )}
        </div>
      </section>
    </div>
  );
}
