/*
Que es un callback, esta es una funcion que pasa por parametro a otra funcion,
 lo cual lo ejecuta mas tarde.

EJEMPLO:
*/

function saludar (nombre) {
  console.log(`Hola, ${nombre}`);
}

function procesarUsuario (nombre, callback) {
  callback(nombre);
}

procesarUsuario('Carlos', saludar);

/* 🧪 Ejercicio: Simulación de Registro de Usuarios
Tienes una función registrarUsuario que simula registrar a un usuario y
 luego llama a un callback para mostrar un mensaje personalizado.

🧭 Requisitos:
La función registrarUsuario debe aceptar dos parámetros: nombre y callback.

Dentro de la función, usa setTimeout para simular un retardo de 2 segundos.

Después del retardo, llama al callback con el nombre y un mensaje que diga:
"Usuario registrado con éxito". */

// function usuario (nombre) {
//   console.log(`Hola ${nombre}, Usuario registrado con éxito`);
// }

// function registroUsuario (nombre, callback) {
//   console.log('Registrando usuario...');
//   setTimeout(() => {
//     callback(nombre);
//   }, 2000);
// }

// registroUsuario('Juan', usuario);

/* 🧠 Ejercicio: Procesar pedido en una tienda
Imagina que un cliente hace un pedido. Queremos procesar el pedido y
luego mostrar un mensaje personalizado cuando esté listo.
 Usa un callback para hacer esto.

📝 Enunciado:
Crea una función procesarPedido que reciba dos parámetros:
producto: un string con el nombre del producto.

callback: una función que será llamada cuando el pedido esté listo.

La función debe simular que el pedido toma 2 segundos,
 y luego ejecutar el callback pasándole el nombre del producto. */

// function procesarPedido (producto, fn) {
//   fn();
//   setTimeout(() => {
//     console.log(`Tu pedido de ${producto} esta listo.`);
//   }, 3000);
// }

// function pedido () {
//   console.log('Tu pedido de esta casi listo');
// }

// procesarPedido('cafe', pedido);
const enviarProducto = (producto, callback) => {
  setTimeout(() => {
    callback(producto);
  }, 2000);
};

const notificarCliente = (producto) => {
  console.log(`📦 El producto ${producto} ha sido entregado con éxito.`);
};

enviarProducto('Libro de Javascrip', notificarCliente);
