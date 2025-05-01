/* Ejercicio: Procesamiento de Carrito de Compras
Tienes un inventario con varios productos. El usuario selecciona algunos productos por nombre.

Paso a paso (objetivo del ejercicio):
Unir el inventario principal con dos productos adicionales usando el spread operator.

Filtrar solo los productos disponibles y que el usuario haya seleccionado.

Aplicar los siguientes descuentos:

Menos de 100: 10%
Entre 100 y 200: 5%
Más de 200: sin descuento
Mostrar en consola:
Nombre del producto
Precio original
Precio con descuento
Categoría: "Barato" si < 80, "Regular" si entre 80 y 150, "Caro" si > 150
Calcular y mostrar el total a pagar usando .reduce().
 */
const inventario = [
  { nombre: 'Mouse', precio: 50, disponible: true },
  { nombre: 'Teclado', precio: 120, disponible: true },
  { nombre: 'Monitor', precio: 300, disponible: false },
  { nombre: 'USB', precio: 40, disponible: true },
  { nombre: 'Audífonos', precio: 90, disponible: true }
];

const extra1 = { nombre: 'Cámara', precio: 80, disponible: true };
const extra2 = { nombre: 'Impresora', precio: 200, disponible: true };

const seleccionUsuario = ['Mouse', 'USB', 'Impresora', 'Monitor'];

seleccionUsuario.push('Audífonos');

const consultaInventario = (...productos) => {
  const unirInventario = [...productos, extra1, extra2];
  const fitrarConsulta = unirInventario.filter(({
    disponible, nombre
  }) => disponible && seleccionUsuario.includes(nombre));
  const aplicarDescuento = fitrarConsulta.map(({ nombre, precio }) => {
    let descuento = 1;

    if (precio < 100) {
      descuento = 0.90;
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

  const barato = 80;
  const caro = 150;

  aplicarDescuento.forEach(({ nombre, precioOriginal, precioFinal }) => {
    const descuento = precioOriginal - precioFinal;
    let categoría = '';

    if (precioFinal < barato) {
      categoría = '[Barato]';
    } else if (precioFinal >= barato && precioFinal <= caro) {
      categoría = '[Regular]';
    } else {
      categoría = '[Caro]';
    }

    console.log(
        `${categoría} Nombre: ${nombre} | Original: S/${precioOriginal} | Descuento: ${descuento} | Final: ${precioFinal}`
    );
  });

  const sumaTotal = aplicarDescuento.reduce((total, { precioFinal }) => total + precioFinal, 0);

  console.log(`Sub total a pagar: ${sumaTotal.toFixed(2)}`);
};

consultaInventario(...inventario);
