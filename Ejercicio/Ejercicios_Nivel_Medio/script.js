/*
🛒 Ejercicio: Carrito con Agrupamiento y Subtotales
Tienes un inventario inicial, dos productos extra, y una lista de selección del usuario.

Unir todos los productos.

Filtrar los productos disponibles y seleccionados por el usuario.

Aplicar descuento del 10% si el precio es menor a 100, 5% si es entre 100 y 200, y sin descuento si pasa de 200.

Crear un nuevo array con: nombre, precio original, descuento aplicado, y precio final.

Agrupar en consola los productos según su rango de precio final:

Barato: menos de 80

Medio: entre 80 y 150

Caro: más de 150

Mostrar subtotal por cada categoría.
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

const seleccionUsuario = ['Mouse', 'USB', 'Impresora', 'Cámara'];

const procesarCarrito = (...productos) => {
  const unirInventario = [...productos, extra1, extra2];
  const filtrarIventario = unirInventario.filter(({ disponible, nombre }) =>
    seleccionUsuario.includes(nombre) && disponible
  );
  const aplicarDescuento = filtrarIventario.map(({ nombre, precio }) => {
    if (precio < 100) {
      return {
        nombre,
        precioOriginal: precio,
        precioFinal: +(precio * 0.9).toFixed(2)
      };
    } else if (precio >= 100 && precio <= 200) {
      return {
        nombre,
        precioOriginal: precio,
        precioFinal: +(precio * 0.95).toFixed(2)
      };
    } else {
      return {
        nombre,
        precioOriginal: precio,
        precioFinal: precio
      };
    }
  });

  let subtotalBarato = 0;
  let subtotalMedio = 0;
  let subtotalCaro = 0;

  const barato = 80;
  const caro = 150;

  aplicarDescuento.forEach(({ nombre, precioOriginal, precioFinal }) => {
    const descuento = precioOriginal - precioFinal;

    if (precioFinal < barato) {
      subtotalBarato += precioFinal;
      console.log(`[Barato] Producto: ${nombre} | Original: ${precioOriginal} | Descuento: ${descuento} | Final: ${precioFinal}`);
    } else if (precioFinal >= barato && precioFinal <= caro) {
      subtotalMedio += precioFinal;
      console.log(`[Medio] Producto: ${nombre} | Original: ${precioOriginal} | Descuento: ${descuento} | Final: ${precioFinal}`);
    } else {
      subtotalCaro += precioFinal;
      console.log(`[Caro] Producto: ${nombre} | Original: ${precioOriginal} | Descuento: ${descuento} | Final: ${precioFinal}`);
    }
  });

  console.log('SUBTOTALES POR CATEGORIA');
  console.log(`Barato: S/${subtotalBarato.toFixed(2)}`);
  console.log(`Barato: S/${subtotalMedio.toFixed(2)}`);
  console.log(`Barato: S/${subtotalCaro.toFixed(2)}`);
};

procesarCarrito(...inventario);
