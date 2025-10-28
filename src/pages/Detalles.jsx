import React from 'react';
import "../css/detalles.css";
import {canciones} from '../js/arraycanciones'; 

export default function Detalles() {
  const idcancion = "A1B2C3D4E";  
  const recomendaciones = canciones.filter(canciones => canciones.genero.toLowerCase().includes("pop"));
  return (
    <div className='musica-page'>
      <section className='musica-detalle'>
        <div className='album-cover'>
          <img src="https://imgs.search.brave.com/W4ttYeYvFCHF6jRSPA7VGpD17COj9mi_j04nFkz8eJI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmlo/ZWFydC5jb20vdjMv/Y2F0YWxvZy9hcnRp/c3QvMzQzNjIwMzY_/b3BzPWZpdCg3MjAs/NzIwKQ" alt="yan block"/>
        </div>

        <div className='albuminfo'>
          <p className='genero'>Trap</p>
          <h2 className='titulo'>18</h2>
          <p className='artista'>Yan Block</p>
          
          <div className='detalles'>
            <p>Duracion: <strong>3:00</strong></p>
            <p>id: <strong>{idcancion}</strong></p>
          </div>

          <div className='botones'>
            <button className='btn-reproducir'>▶</button>
            <button className='btn-lista'>+ añadir a la lista</button>
            <button className='btn-eliminar'>- eleiminar</button>
          </div>
        </div> 
      </section>

      <section className='masartistas'>
        <h3>Recomendados <span className='parati'> para ti</span></h3>
        <div className='listacanciones'>
          {recomendaciones.map((cancion) => (
            <div className='cancion' key={cancion.id}>
              <img src={cancion.img} alt={cancion.titulo} />
              <p className='genero'>{cancion.genero}</p>
              <h4>{cancion.titulo}</h4>
              <p>{cancion.artista}</p>
              <button>play ▶</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
    
    
     




   
