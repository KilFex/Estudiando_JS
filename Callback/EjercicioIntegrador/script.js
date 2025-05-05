const inventario = [
  { nombre: 'Laptop', precio: 1500, disponible: true },
  { nombre: 'Mouse', precio: 50, disponible: true },
  { nombre: 'Teclado', precio: 80, disponible: true },
  { nombre: 'Monitor', precio: 700, disponible: false },
  { nombre: 'USB', precio: 20, disponible: true }
];

const productosCliente = ['Laptop', 'USB', 'Teclado'];

const procesarCompra = (...productos) => {
  const filtrarProductos = productos.filter(({ nombre, disponible }) =>
    disponible && productosCliente.includes(nombre)
  );

  const calcularDescuento = filtrarProductos.map(({ nombre, precio }) => {
    let descuento = 1;
    if (precio < 100) {
      descuento = 0.9; 
    }

    const precioFinal = +(precio * descuento).toFixed(2);

    return {
      nombre,
      precioOriginal: precio,
      precioFinal
    };
  });

  const ordenar = calcularDescuento.sort((a, b) =>
    a.precioFinal - b.precioFinal
  );

  function seguimientoPedido(callbacks) {
    let index = 0;
    function ejecutarAccion() {
      if (index < callbacks.length) {
        callbacks[index](); 
        index++;
        setTimeout(ejecutarAccion, 1000); 
      }
    }
    ejecutarAccion();
  }

  function preparando() {
    console.log('Preparando envio...');
  }
  function empaquetando() {
    console.log('Empaquetando productos...');
  }
  function enviado() {
    console.log('Enviado...');
  }
  function entregado() {
    console.log('Entrega Exitosa');
  }

  seguimientoPedido([preparando, empaquetando, enviado, entregado]);


  ordenar.forEach(({ nombre, precioOriginal, precioFinal }) => {
    const descuento = precioOriginal - precioFinal;
    let categoria = '';

    if (precioFinal < 80) {
      categoria = '[Barato]';
    } else if (precioFinal >= 80 && precioFinal < 120) {
      categoria = '[Regular]';
    } else {
      categoria = '[Caro]';
    }

    console.log(`${categoria}, Nombre: ${nombre}, P.Original: ${precioOriginal}, P.Final: ${precioFinal}, Descuento: ${descuento}`);
  });

  const totalCompra = ordenar.reduce((total, { precioFinal }) =>
    total + precioFinal, 0
  );

  const productoCaro = ordenar.reduce((max, actual) =>
    actual.precioFinal > max.precioFinal ? actual : max, ordenar[0]
  );

  const productoBarato = ordenar.reduce((min, actual) =>
    actual.precioFinal < min.precioFinal ? actual : min, ordenar[0]
  );

  console.log(`El precio total es: ${totalCompra}`);
  console.log(`El producto más caro es: ${productoCaro.nombre} - ${productoCaro.precioFinal}`);
  console.log(`El producto más barato es: ${productoBarato.nombre} - ${productoBarato.precioFinal}`);
};

procesarCompra(...inventario);
