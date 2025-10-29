export function obtenerCanciones(key) {
  const datos = localStorage.getItem(key);
  return datos ? JSON.parse(datos) : [];
}

export function guardarCanciones(key, canciones) {
  localStorage.setItem(key, JSON.stringify(canciones));

  window.dispatchEvent(new Event("cancionesActualizadas"));
}

export function agregarCancion(key, cancionNueva) {
  const canciones = obtenerCanciones(key);

  cancionNueva.id = cancionNueva.id || crypto.randomUUID();
  canciones.push(cancionNueva);

  guardarCanciones(key, canciones);
}

export function eliminarCancion(key, id) {
  const canciones = obtenerCanciones(key);
  const cancionesFiltradas = canciones.filter((c) => c.id !== id);
  guardarCanciones(key, cancionesFiltradas);
}

export function editarCancion(key, id, cancionActualizada) {
  const canciones = obtenerCanciones(key);
  const cancionesEditadas = canciones.map((c) =>
    c.id === id ? { ...cancionActualizada, id } : c
  );
  guardarCanciones(key, cancionesEditadas);
}
