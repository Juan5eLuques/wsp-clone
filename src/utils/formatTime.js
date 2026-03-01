// Convierte una fecha ISO a formato de hora (ej: "12:05")
export const formatTime = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
};
