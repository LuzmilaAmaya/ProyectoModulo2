import { obtenerCanciones, guardarCanciones } from "../services/AdminService";

const STORAGE_KEY = "canciones";

export const cancionesIniciales = [
  {
    portadaUrl: "https://example.com/portada1.jpg",
    nombre: "Bzrp Music Sessions #57",
    artista: "Bizarrap ft. (Artista invitado)",
    genero: "Urbano",
    album: "Bzrp Music Sessions",
    duracion: "3:40",
  },
  {
    portadaUrl: "https://example.com/portada2.jpg",
    nombre: "Cumbia 420",
    artista: "L-Gante",
    genero: "Cumbia",
    album: "Cumbia 420",
    duracion: "3:15",
  },
  {
    portadaUrl: "https://example.com/portada3.jpg",
    nombre: "Ella No Es Tuya",
    artista: "Nicki Nicole & Duki",
    genero: "Trap",
    album: "Parte de Mí",
    duracion: "3:22",
  },
  {
    portadaUrl: "https://example.com/portada4.jpg",
    nombre: "Sin Cadenas",
    artista: "Tiago PZK & Rels B",
    genero: "Urbano",
    album: "Sin Cadenas",
    duracion: "3:45",
  },
  {
    portadaUrl: "https://example.com/portada5.jpg",
    nombre: "La Noche",
    artista: "Ysy A",
    genero: "Rap",
    album: "La Noche",
    duracion: "3:50",
  },
  {
    portadaUrl: "https://example.com/portada6.jpg",
    nombre: "Loco",
    artista: "Emilia",
    album: "Loco",
    duracion: "3:30",
    genero: "Pop",
  },
  {
    portadaUrl: "https://example.com/portada7.jpg",
    nombre: "Quédate",
    artista: "Khea",
    genero: "Trap",
    album: "Quédate",
    duracion: "3:20",
  },
  {
    portadaUrl: "https://example.com/portada8.jpg",
    nombre: "Dejate Llevar",
    artista: "Rusherking ft. Maria Becerra",
    genero: "Pop",
    album: "Dejate Llevar",
    duracion: "3:00",
  },
];

export function inicializarCanciones() {
  const guardadas = obtenerCanciones(STORAGE_KEY);

  if (!guardadas || guardadas.length === 0) {
    guardarCanciones(STORAGE_KEY, cancionesIniciales);
    return cancionesIniciales;
  }

  return guardadas;
}

export function obtenerTodasLasCanciones() {
  return obtenerCanciones(STORAGE_KEY);
}
