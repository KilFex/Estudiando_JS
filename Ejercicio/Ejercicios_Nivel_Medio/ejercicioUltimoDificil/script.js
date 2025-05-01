const inventario = [
  { nombre: 'Monitor', precio: 350, disponible: true },
  { nombre: 'Mouse', precio: 80, disponible: true },
  { nombre: 'Teclado', precio: 150, disponible: false },
  { nombre: 'Webcam', precio: 120, disponible: true },
  { nombre: 'Audífonos', precio: 90, disponible: true },
  { nombre: 'USB', precio: 40, disponible: true },
  { nombre: 'Impresora', precio: 200, disponible: true }
];

const seleccionCliente = ['Monitor', 'Mouse', 'Teclado',
  'Webcam', 'USB', 'Impresora'];

const productosSeleccionados = (...productos) => {
  const producto = [...productos];
  const filtrarProductos = producto.filter(({ disponible, nombre }) =>
    disponible && seleccionCliente.includes(nombre));

  const aplicarDescuento = filtrarProductos.map(({ nombre, precio }) => {
    let descuento = 1;

    if (precio < 100) {
      descuento = 0.9;
    } else if (precio <= 200) {
      descuento = 0.95;
    }

    const preciofinal = +(precio * descuento).toFixed(2);

    return {
      nombre,
      precioOriginal: precio,
      preciofinal
    };
  });

  const ordenarProductos = aplicarDescuento.sort((a, b) =>
    a.preciofinal - b.preciofinal);
  ordenarProductos.forEach(({ nombre, precioOriginal, preciofinal }) => {
    const descuento = precioOriginal - preciofinal;
    let categoria = '';

    if (preciofinal < 80) {
      categoria = '[Barato]';
    } else if (preciofinal >= 80 && preciofinal <= 150) {
      categoria = '[Regular]';
    } else {
      categoria = '[Caro]';
    }
    console.log(
        `${categoria} | Nombre: ${nombre} | Precio Original: ${precioOriginal} | Precio Final: ${preciofinal} | Descuento: ${descuento}`
    );
  });

  const sudTotal = ordenarProductos.reduce((total, { preciofinal }) =>
    total + preciofinal, 0
  );
  const productoCaro = aplicarDescuento.reduce((max, actual) =>
    actual.preciofinal > max.preciofinal ? actual : max
  );

  const productoBarato = aplicarDescuento.reduce((min, actual) =>
    actual.preciofinal < min.preciofinal ? actual : min
  );
  console.log(`El monto total al pagar es: ${sudTotal}`);
  console.log(`El producto mas Caro es: ${productoCaro.nombre} | ${productoCaro.preciofinal}`);
  console.log(`El producto mas Barato es: ${productoBarato.nombre} |  ${productoBarato.preciofinal}`);
};

productosSeleccionados(...inventario);
