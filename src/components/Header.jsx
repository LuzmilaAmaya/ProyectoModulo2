import React from "react";
import "./header.css"

export default function Header() {
    const slides = [
        {
            img: "https://a-v2.sndcdn.com/assets/images/front-hero-artist-fan-534fb484.jpeg",
            title: "Subi tu musica y descubri nuevos artistas",
            desc: "Todo empieza con una subida. Comparti tus canciones y descubri lo que sigue en la musica. ",
        },
        {
            img: "https://a-v2.sndcdn.com/assets/images/front-hero-artist-fan-534fb484.jpeg",
            title: "Conecta con millones de oyentes",
            desc: "Crea tu cuenta y hace crecer tu comunidad de fans en todo el mundo.",
        },
        {
            img: "https://a-v2.sndcdn.com/assets/images/front-hero-artist-fan-534fb484.jpeg",
            title: "Escucha lo que esta sonando ahora",
            desc: "Descubri musica nueva cada dia, directamente de los artistas que marcan tendencia.",
        },
        {
            img: "https://a-v2.sndcdn.com/assets/images/front-hero-artist-fan-534fb484.jpeg",
            title: "Creamos el sonido del futuro",
            desc: "Unite a la comunidad y descubri el poder de compartir",
        },
    ];

    return (
        <>
        <div className="carousel">
            <div className="top-buttons">
                <button className="btn-login">Iniciar Sesion</button>
                <button className="btn-register">Registrarse</button>
            </div>

       <div className="slides">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="slide"
            style={{ backgroundImage: `url(${slide.img})` }}
          >
            <div className="content">
              <h2>{slide.title}</h2>
              <p>{slide.desc}</p>
            </div>
          </div>
        ))}
          </div>
        </div>
        </>
    );
}