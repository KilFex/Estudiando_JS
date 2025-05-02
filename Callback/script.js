/*
Que es un callback, esta es una funcion que pasa por parametro a otra funcion,
 lo cual lo ejecuta mas tarde.

EJEMPLO:
*/

function consoleLog () {
  console.log('--------ejercicio nivel facil-------------');
}

function saludar (nombre) {
  console.log(`Hola ${nombre}`);
};

function procesarEntrada (callback) {
  const nombre = 'Carlos';

  callback(nombre);
}

procesarEntrada(saludar);

consoleLog();

function mostrarMensaje (nombre) {
  console.log(`Hola, ${nombre} . !Bienvenida¡`);
};

function procesarMensaje (callback) {
  const comida = 'Ana';
  callback(comida);
}

procesarMensaje(mostrarMensaje);

consoleLog();
