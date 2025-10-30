import Swal from "sweetalert2";
import "../css/footer.css";

export default function Footer() {
  
  function handleRedes(nombreRed) {
    Swal.fire({
      title: "¡Próximamente!",
      text: `Podras ver nuestro ${nombreRed}`,
      imageUrl:
        "https://img.icons8.com/?size=100&id=PNjQBoR7BPiS&format=png&color=C850F2",
      imageWidth: 150,
      imageAlt: "Custom image",
      background: "#120C18",
      color: "#ffffff",
      confirmButtonColor: "#C850F2",
      showClass: {
        popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `,
      },
      hideClass: {
        popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
     `,
      },
    });
  }

  return (
    <footer className="footer-modern text-light py-5">
      <div className="container text-center text-md-start">
        <div className="row gy-4 align-items-center">
          <div className="col-12 col-md-3 text-center text-md-start">
            <img
              src="https://res.cloudinary.com/dw05hk9ht/image/upload/v1761780928/image_mty8ph.png"
              alt="Logo"
              className="footer-logo mb-3"
            />
            <p className="text-secondary text-center small mb-0">
              Descubrí, compartí y disfrutá de tu música favorita 🎵
            </p>
          </div>
          <div className="col-12 col-md-3 text-center">
            <h5 className="footer-title mb-3">Navegación</h5>
            <ul className="list-unstyled footer-links text-center">
              <li>
                <a href="#">Inicio</a>
              </li>
              <li>
                <a href="#">Explorar</a>
              </li>
              <li>
                <a href="#">Artistas</a>
              </li>
              <li>
                <a href="#">Tendencias</a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-3 text-center">
            <h5 className="footer-title mb-3">Contáctanos</h5>
            <ul className="list-unstyled footer-links text-center">
              <li>
                <a href="tel:+54938132545621" >+54 9 381 325-45621</a>
              </li>
              <li>
                <a href="mailto:usuario123@gmail.com">usuario123@gmail.com</a>
              </li>
              <li>
                <a href="https://www.google.com/maps?rlz=1C1YTUH_esAR1090AR1090&gs_lcrp=EgZjaHJvbWUqFQgDEC4YJxivARjHARiABBiKBRiOBTIGCAAQRRg8MgYIARBFGDkyCggCEC4YsQMYgAQyFQgDEC4YJxivARjHARiABBiKBRiOBTIMCAQQABhDGIAEGIoFMgYIBRBFGDwyBggGEEUYPDIGCAcQRRhB0gEIMzYwMmowajSoAgCwAgE&um=1&ie=UTF-8&fb=1&gl=ar&sa=X&geocode=KR0P89c6XSKUMeTjuFnWbGD4&daddr=Gral.+Jos%C3%A9+Mar%C3%ADa+Paz+576,+T4000+San+Miguel+de+Tucum%C3%A1n,+Tucum%C3%A1n">
                  General Paz 576, San Miguel de Tucumán
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-3 text-center">
            <h5 className="footer-title mb-3">Nuestras Redes</h5>
            <div className="d-flex justify-content-center gap-4">
              <a href="#" onClick={() => handleRedes("Facebook")}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                  alt="Facebook"
                  className="social-icon"
                />
              </a>
              <a href="#" onClick={() => handleRedes("Instagram")}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                  alt="Instagram"
                  className="social-icon"
                />
              </a>
              <a href="#" onClick={() => handleRedes("X")}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/5968/5968958.png"
                  alt="X"
                  className="social-icon"
                />
              </a>
              <a href="#" onClick={() => handleRedes("YouTube")}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3670/3670147.png"
                  alt="YouTube"
                  className="social-icon"
                />
              </a>
            </div>
          </div>
        </div>
        
        <hr className="footer-divider my-4" />
        <p className="text-center small text-secondary mb-0">
          © {new Date().getFullYear()} Melix Music. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}
