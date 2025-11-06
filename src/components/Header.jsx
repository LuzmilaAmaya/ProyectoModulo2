import React, { useEffect, useState } from "react";
import "../css/header.css";
import imglogo from "./img/imglogo.png";
import imgusuario from "./img/imgusuario.png";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Header() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const userData = JSON.parse(sessionStorage.getItem("usuarioActivo"));
    if (userData) setUsuario(userData);
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("usuarioActivo");
    setUsuario(null);

    Swal.fire({
      icon: "info",
      title: "Sesión cerrada",
      text: "Has cerrado sesión correctamente.",
      timer: 1500,
      showConfirmButton: false,
    });

    navigate("/");
  };

  const slides = [
    {
      img: "https://a-v2.sndcdn.com/assets/images/front-hero-artist-fan-534fb484.jpeg",
      title: "Subí tu música y descubrí nuevos artistas",
      desc: "Todo empieza con una subida. Compartí tus canciones y descubrí lo que sigue en la música.",
    },
    {
      img: "https://i0.wp.com/urbanroosters.news/wp-content/uploads/2020/05/duki-banner-x.jpg?resize=1024%2C550&ssl=1",
      title: "Conectá con millones de oyentes",
      desc: "Creá tu cuenta y hacé crecer tu comunidad de fans en todo el mundo.",
    },
    {
      img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj7tiEGF6nrB_2AGYPpVeaya5LkV0tKapKUExpaq-pOuGM-03-Eaxy_6eyK0qStbBJPAiIlr2wIXATntVfuQ5rHi_WtPwvUHm9x4VC-mwLHvIEbbxHNM3PIvO75aSxG-X1Xwlb4cIbxmvxgdpdD0hEF1JjiD2LUmFlqMmmE5881v_2BFxVX8Q6nYgaH_FFo/s1600/YSY%20A%20head.jpg",
      title: "Escuchá lo que está sonando ahora",
      desc: "Descubrí música nueva cada día, directamente de los artistas que marcan tendencia.",
    },
    {
      img: "https://radiografica.org.ar/wp-content/uploads/2024/05/unnamed-3-1-scaled-1.jpg",
      title: "Creamos el sonido del futuro",
      desc: "Unite a la comunidad y descubrí el poder de compartir.",
    },
  ];

  return (
    <div className="contenedor-carousel">
      <header className="header">
        <img src={imglogo} alt="Logo" className="logo" />
        {usuario ? (
          <img
            src={usuario.profile || imgusuario}
            alt="Foto de perfil"
            className="icono-usuario"
            title={usuario.username}
            onClick={handleLogout}
          />
        ) : (
          <img
            src={imgusuario}
            alt="Perfil"
            className="icono-usuario"
            onClick={() => navigate("/iniciarsesion")}
          />
        )}
      </header>

      <div className="carousel">
        <div className="top-buttons">
          {usuario ? (
            <button className="btn-logout" onClick={handleLogout}>
              Cerrar sesión
            </button>
          ) : (
            <>
              <button
                className="btn-login"
                onClick={() => navigate("/iniciarsesion")}
              >
                Iniciar Sesión
              </button>
              <button
                className="btn-register"
                onClick={() => navigate("/register")}
              >
                Registrarse
              </button>
            </>
          )}
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
