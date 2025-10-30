import React from "react";
import "../css/error404.css";
import "bootstrap";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Error404() {
  return (
    <section
      style={{
        position: "relative",
        width: "100dvw",
        height: "100dvh",
        overflow: "hidden",
        backgroundColor: "#120C18",
      }}
    >
      <DotLottieReact
        src="https://lottie.host/cf0cb7aa-72d7-4100-bbd7-ecb471dadf51/Gk9yO5uJW1.lottie"
        loop
        autoplay
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          objectFit: "cover",
        }}
      />

      {/* 🧩 Contenido principal */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          color: "white",
          textAlign: "center",
        }}
      >
        <h1
        className="jersey-10-regular"
          style={{
            background: "linear-gradient(90deg, #8c4bca, #321A4E)",
            color: "#2E03E5",
            WebkitBackgroundClip: "text",
            marginTop: "8dvh",
            fontSize:"15dvh",
          }}
        >
          Error
        </h1>
        <a className="btn" style={{ color: "#bca7ce", marginTop: "60dvh" }}>
          Volver al inicio
        </a>
      </div>
    </section>
  );
}
