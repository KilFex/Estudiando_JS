function consoleLog (nivel, numero) {
  console.log(`-------Ejercicio setTimeOut ${nivel}, ${numero}--------`);
}

consoleLog('Facil', 1);

function saludoTarde (nombre) {
  setTimeout(() => {
    console.log('Este mensaje llego tarde');
  }, 3000);

  console.log(`Hola, ${nombre}!`);
}

saludoTarde('Maria');

setTimeout(() => {
  consoleLog('Facil', 2);
}, 500);

const timeOut = (vamos) => {
  setTimeout(() => {
    console.log('3');
  }, 1000);

  setTimeout(() => {
    console.log('2');
  }, 2000);

  setTimeout(() => {
    console.log('1');
  }, 3000);

  setTimeout(() => {
    console.log(`!${vamos}¡`);
  }, 4000);
};

timeOut('Despegue');

setTimeout(() => {
  consoleLog('Facil', 3);
}, 5000);

const cafeteria = ['Preparando cafe', 'Agregando azucar', 'Listo para servir'];

cafeteria.forEach((elmento, indice) => {
  setTimeout(() => {
    console.log(`${elmento}`);
  }, (indice + 1) * 1000);
});
