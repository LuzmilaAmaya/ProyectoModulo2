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
            img: "https://i0.wp.com/urbanroosters.news/wp-content/uploads/2020/05/duki-banner-x.jpg?resize=1024%2C550&ssl=1",
            title: "Conecta con millones de oyentes",
            desc: "Crea tu cuenta y hace crecer tu comunidad de fans en todo el mundo.",
        },
        {
            img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj7tiEGF6nrB_2AGYPpVeaya5LkV0tKapKUExpaq-pOuGM-03-Eaxy_6eyK0qStbBJPAiIlr2wIXATntVfuQ5rHi_WtPwvUHm9x4VC-mwLHvIEbbxHNM3PIvO75aSxG-X1Xwlb4cIbxmvxgdpdD0hEF1JjiD2LUmFlqMmmE5881v_2BFxVX8Q6nYgaH_FFo/s1600/YSY%20A%20head.jpg",
            title: "Escucha lo que esta sonando ahora",
            desc: "Descubri musica nueva cada dia, directamente de los artistas que marcan tendencia.",
        },
        {
            img: "https://radiografica.org.ar/wp-content/uploads/2024/05/unnamed-3-1-scaled-1.jpg",
            title: "Creamos el sonido del futuro",
            desc: "Unite a la comunidad y descubri el poder de compartir",
        },
    ];

    return (
        <div className="contenedor-carousel">
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
        </div>
    );
}