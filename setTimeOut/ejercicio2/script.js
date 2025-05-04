const tareas = [
  { nombre: 'Lavar platos', tiempo: 2, prioridad: 'media' },
  { nombre: 'Estudiar JavaScript', tiempo: 3, prioridad: 'alta' },
  { nombre: 'Ver redes sociales', tiempo: 1, prioridad: 'baja' },
  { nombre: 'Preparar comida', tiempo: 2, prioridad: 'alta' }
];

tareas.forEach(({ nombre, tiempo, prioridad }) => {
  setTimeout(() => {
    if (prioridad === 'baja') {
      console.log(`💤 Tarea opcional: ${nombre}`);
    } else if (prioridad === 'media') {
      console.log(`📌 Tarea pendiente: ${nombre}`);
    } else if (prioridad === 'alta') {
      console.log(`🚨 TAREA URGENTE: ${nombre}`);
    }
  }, tiempo * 1000);
});
