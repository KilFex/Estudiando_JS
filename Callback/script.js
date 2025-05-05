/*
Que es un callback, esta es una funcion que pasa por parametro a otra funcion,
 lo cual lo ejecuta mas tarde.

EJEMPLO:
*/

// function saludar (nombre) {
//   console.log(`Hola, ${nombre}`);
// }

// function procesarUsuario (nombre, callback) {
//   callback(nombre);
// }

// procesarUsuario('Carlos', saludar);

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
// const enviarProducto = (producto, callback) => {
//   setTimeout(() => {
//     callback(producto);
//   }, 2000);
// };

// const notificarCliente = (producto) => {
//   console.log(`📦 El producto ${producto} ha sido entregado con éxito.`);
// };

// enviarProducto('Libro de Javascrip', notificarCliente);

// function validarUsuario(nombre, onSuccess, onError) {

//     const usuarios = ['Ana', 'Luis', 'Carlos'];

//     const existe = usuarios.includes(nombre);
//     setTimeout(() => {
//       if(existe){
//         onSuccess(nombre);
//       } else {
//         onError(nombre);
//       }
//     }, 2000);
// }

// function accesoPermitido(nombre) {
//   console.log(`✅ Acceso permitido: Bienvenido, ${nombre}.`);
// }

// function accesoDenegado(nombre) {
//   console.log(`❌ Acceso denegado: Usuario ${nombre} no encontrado.`);
// }

// validarUsuario('Maria', accesoPermitido, accesoDenegado);

// function mostraMensaje(nombre){
//   console.log(`Hola mi nombre es: ${nombre}`)
// }

// function mostrarNombre(nombre, callback){
//   callback(nombre)
// }

// mostrarNombre('Ivan', mostraMensaje)

// function procesarEnvio(producto, fn){
//   setTimeout(() => {
//     fn(producto)
//   }, 2000);
// }

// function nombreProducto(producto){
//   console.log(`El producto ${producto} ha sido enviado`)
// }

// procesarEnvio('Queso Mantecoso', nombreProducto)

// function seguimientoPedido(producto, ...acciones) {
//   acciones.forEach((accion, indice) => {
//     setTimeout(() => {
//       accion(producto);
//     }, (indice + 1) * 1000);
//   });
// }

// function preparandoEnvio(producto) {
//   console.log(`📦 Preparando el envío de ${producto}...`);
// }

// function enviandoPedido(producto) {
//   console.log(`🚚 Enviando ${producto}...`);
// }

// function pedidoEntregado(producto) {
//   console.log(`✅ Pedido entregado: ${producto}`);
// }

// seguimientoPedido('Queso Mantecoso', preparandoEnvio,enviandoPedido,pedidoEntregado)

/* SIMULANDO UN CALLBACK HELL */

function task1 (fn) {
  setTimeout(() => {
    console.log('task 1 complete');
    fn();
  }, 500);
}
function task2 (fn) {
  setTimeout(() => {
    console.log('task 2 complete');
    fn();
  }, 500);
}
function task3 (fn) {
  setTimeout(() => {
    console.log('task 3 complete');
    fn();
  }, 500);
}
function task4 (fn) {
  setTimeout(() => {
    console.log('task 4 complete');
    fn();
  }, 500);
}
function task5 (fn) {
  setTimeout(() => {
    console.log('task 5 complete');
    fn();
  }, 500);
}
function task6 (fn) {
  setTimeout(() => {
    console.log('task 6 complete');
    fn();
  }, 500);
};

task1(() => {
  task2(() => {
    task3(() => {
      task4(() => {
        task5(() => {
          task6(() => {
            task1(() => {
              task2(() => {
                task3(() => {
                  task4(() => {
                    task5(() => {
                      task6(() => {
                        task1(() => {
                          task2(() => {
                            task3(() => {
                              task4(() => {
                                task5(() => {
                                  task6(() => {
                                    task1(() => {
                                      task2(() => {
                                        task3(() => {
                                          task4(() => {
                                            task5(() => {
                                              task6(() => {

                                              });
                                            });
                                          });
                                        });
                                      });
                                    });
                                  });
                                });
                              });
                            });
                          });
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});
