import React, { useState } from "react";
import "../../css/detalles.css"
import { useNavigate } from "react-router-dom";
import "../js/id"

export default function detalles() {
   const navigate = useNavigate();
   const [Detalles, setDetalles] = useState("");
   const [seleccionados, setSeleccionados] = useState([]);
  return (
    <h1>holamundo</h1>
  )
}
