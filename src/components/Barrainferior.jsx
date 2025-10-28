import React from 'react'
import "../css/barrainferior.css"
import { Home, Compass, Music2, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Barrainferior() {
    const navigate = useNavigate();
    return (
        <nav className="barra-inferior">
            <div className="boton" onClick={() => navigate("/")}>
                <Home size={22} />
                <span>Inicio</span>
            </div>

            <div className='boton'>
                <Compass size={22} />
                <span>Explorar</span>
            </div>

            <div className='boton'>
                <Music2 size={22} />
                <span>Mi Musica</span>
            </div>

            <div className='boton'>
                <User size={22} />
                <span>Perfil</span>
            </div>
        </nav>
    );
}
