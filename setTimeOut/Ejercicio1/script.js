// const nombres = ['Carlos', 'Lucía', 'Pedro', 'Ana'];

// nombres.map((nombre, indice) => {
//   setTimeout(() => {
//     console.log(nombre);
//   }, (indice + 1) * 1000);
// });

// const pasos = [
//   'Abrir el pan',
//   'Agregar lechuga',
//   'Agregar jamón',
//   'Agregar queso',
//   'Cerrar el pan',
//   'Servir el sándwich'
// ];

// pasos.forEach((ingredientes, index) => {
//   setTimeout(() => {
//     console.log(ingredientes);
//   }, (index + 1) * 1000);
// });

// const pedidos = [
//   { nombre: 'Hamburguesa', tiempo: 2 },
//   { nombre: 'Papas Fritas', tiempo: 1 },
//   { nombre: 'Gaseosa', tiempo: 0.5 },
//   { nombre: 'Helado', tiempo: 3 }
// ];

// pedidos.forEach(({ nombre, tiempo }) => {
//   console.log(`Preparando ${nombre}...`);
//   setTimeout(() => {
//     console.log(`Listo: ${nombre} (${tiempo})`);
//   }, tiempo * 1000);
// });

console.log('Ejercicio dificil');

const inventario = [
  { nombre: 'Laptop', precio: 2500, disponible: true },
  { nombre: 'Mouse', precio: 80, disponible: true },
  { nombre: 'Teclado', precio: 120, disponible: true },
  { nombre: 'Monitor', precio: 400, disponible: false },
  { nombre: 'Audífonos', precio: 60, disponible: true },
  { nombre: 'Webcam', precio: 150, disponible: true }
];

const seleccionCliente = ['Mouse', 'Teclado', 'Webcam', 'Audífonos'];

const comprasCliente = (...producto) => {
  const integrarCompras = [...producto];
  const filtrarCompra = integrarCompras.filter(({ disponible, nombre }) =>
    disponible && seleccionCliente.includes(nombre)
  );

  const aplicarDescuento = filtrarCompra.map(({ nombre, precio }) => {
    let descuento = 1;

    if (precio < 100) {
      descuento = 0.9;
    } else if (precio <= 200) {
      descuento = 0.95;
    }

    const precioFinal = +(precio * descuento).toFixed(2);

    return {
      nombre,
      precioOriginal: precio,
      precioFinal
    };
  });

  const ordenarPrecios = aplicarDescuento.sort((a, b) => a.precioFinal - b.precioFinal);

  ordenarPrecios.forEach(({ nombre, precioOriginal, precioFinal }) => {
    const descuento = precioOriginal - precioFinal;
    let categoria = '';

    if (precioFinal < 80) {
      categoria = '[Barato]';
    } else if (precioFinal <= 150) {
      categoria = '[Regular]';
    } else {
      categoria = '[Caro]';
    }

    console.log(
        `${categoria} - Producto: ${nombre} - Precio Original: ${precioOriginal} - Descuento: ${descuento} - Precio Final: ${precioFinal}`
    );
  });

  const subtotal = ordenarPrecios.reduce((total, { precioFinal }) => total + precioFinal, 0);

  const productoCaro = ordenarPrecios.reduce((max, actual) =>
    actual.precioFinal > max.precioFinal ? actual : max
  );

  const productoBarato = ordenarPrecios.reduce((min, actual) =>
    actual.precioFinal < min.precioFinal ? actual : min
  );

  console.log(`💰 Total a pagar: ${subtotal}`);
  console.log(`🔺 Producto más caro: ${productoCaro.nombre} - ${productoCaro.precioFinal}`);
  console.log(`🔻 Producto más barato: ${productoBarato.nombre} - ${productoBarato.precioFinal}`);

  ordenarPrecios.forEach(({ nombre, precioFinal }, index) => {
    setTimeout(() => {
      console.log(`🕐 Entregando: ${nombre} - Precio Final: ${precioFinal}`);
    }, (index + 1) * 1000);
  });
};

comprasCliente(...inventario);
