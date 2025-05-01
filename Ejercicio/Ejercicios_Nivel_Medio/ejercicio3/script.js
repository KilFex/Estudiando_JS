const inventario = [
  { nombre: 'Laptop', precio: 1500, disponible: true },
  { nombre: 'Mouse', precio: 50, disponible: true },
  { nombre: 'Teclado', precio: 120, disponible: true },
  { nombre: 'Monitor', precio: 300, disponible: false },
  { nombre: 'USB', precio: 40, disponible: true },
  { nombre: 'Audífonos', precio: 90, disponible: true }
];

const seleccionCliente = ['Mouse', 'USB', 'Monitor', 'Teclado', 'Audífonos'];

const productosSeleccionados = (...productos) => {
  const seleccion = [...productos];

  const filtrarProductos = seleccion.filter(({
    disponible, nombre
  }) => disponible && seleccionCliente.includes(nombre));

  const aplicarDescuento = filtrarProductos.map(({ nombre, precio }) => {
    let descuento = 1;

    if (precio < 100) {
      descuento = 0.90;
    } else if (precio <= 200) {
      descuento = 0.95;
    }

    const final = +(precio * descuento).toFixed(2);

    return {
      nombre,
      original: precio,
      final
    };
  });

  const barato = 80;
  const caro = 150;
 
  const productosOrdenados = aplicarDescuento.sort((a,b) => a.final - b.final);

  productosOrdenados.forEach(({ nombre, original, final }) => {
    const descuento = original - final;
    let categoria = '';
    
    if (final < barato) {
      categoria = '[Barato]';
      
    } else if (final >= barato && final <= caro) {
      categoria = '[Regular]';
      
    } else {
      categoria = '[Caro]';
     
    }

    console.log(
        `${categoria}  Nombre: ${nombre} |Precio Original: ${original} | Descuento: ${descuento} | Precio Final: ${final}`
    );
    
  });
  
  const subTotal = aplicarDescuento.reduce((total, { final }) =>
    total + final, 0
  );

  console.log(`Precio a pagar por el cliente: ${subTotal}`);
};

productosSeleccionados(...inventario);
