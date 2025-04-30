/* 🎯 Objetivo:
Crear una función que reciba una lista de productos (por argumentos), le agregue productos extra usando spread,
y luego aplique un descuento a los productos usando map y destructuración.

🛠 Requisitos del ejercicio:
Crea una función llamada procesarProductos(...productos).

Usa el rest operator para capturar los productos.

Usa spread operator para agregar los productoExtra1 y productoExtra2 al array.

Usa .map() con destructuración para:

Aplicar un 10% de descuento a cada producto.

Crear un nuevo array con nombre y precioFinal (precio * 0.9).

Muestra el nuevo array usando console.log.
*/
const productoExtra1 = { nombre: 'Cargador', precio: 80 };
const productoExtra2 = { nombre: 'USB', precio: 40 };

const procesarProductos = (...productos) => {
  const productosFinales = [...productos, productoExtra1, productoExtra2];
  const nuevoArray = productosFinales.map(({ nombre, precio }) => {
    return {
      nombre,
      precio: precio * 0.9
    };
  });

  nuevoArray.forEach(({ nombre, precio }) => {
    console.log(`Nombre: ${nombre} - Precio: ${precio}`);
  });
};

procesarProductos(
  { nombre: 'Laptop', precio: 1500 },
  { nombre: 'Audifonos', precio: 200 }
);

console.log('--------------Segundo  Ejercicio-------------------');

/*
🎯 Objetivo:
Crear una función que filtre productos disponibles, aplique descuento a los que cuesten menos de 100, y los muestre en consola.

🛠 Requisitos:
Crea una función llamada procesarTienda(...productos) que use rest para recibir cualquier cantidad de productos.

Usa spread para unir el array original productos con extra1 y extra2.

Filtra los productos disponibles.

Aplica un 10% de descuento solo a los productos que cuesten menos de 100.

Usa destructuración y map para crear un nuevo array con nombre y precioFinal.

Muestra los productos finales con forEach en consola en este formato:
*/

const productos = [
  { nombre: 'Mouse', precio: 50, disponible: true },
  { nombre: 'Teclado', precio: 120, disponible: true },
  { nombre: 'Monitor', precio: 300, disponible: false },
  { nombre: 'USB', precio: 40, disponible: true },
  { nombre: 'Audífonos', precio: 90, disponible: true }
];

const extra1 = { nombre: 'Webcam', precio: 80, disponible: true };
const extra2 = { nombre: 'Router', precio: 150, disponible: false };

const procesarTienda = (...productos) => {
  const unirProductos = [...productos, extra1, extra2];
  const filtrarProductos = unirProductos.filter(({ disponible, precio }) => disponible && precio < 100);
  const aplicarDescuento = filtrarProductos.map(({ nombre, precio }) => {
    return {
      nombre,
      precio: precio * 0.9
    };
  });

  aplicarDescuento.forEach(({ nombre, precio }) => {
    console.log(`Producto: ${nombre} - Precio: ${precio}`);
  });
};

procesarTienda(...productos);

console.log('--------Ejercicio Medio-------');

/*
🛒 Ejercicio propuesto: Carrito de Compras con Descuento y Stock
Tienes una lista de productos en stock, algunos disponibles y otros no. El usuario selecciona productos por nombre (como si estuviera armando su carrito).

Tu tarea es:

Crear una función procesarCarrito que reciba:

La lista de productos.

Una lista de nombres de productos seleccionados por el usuario.

Con filter y includes, obtén solo los productos que:

Estén disponibles.

Sean parte de la selección del usuario.

A esos productos:

Si el precio es menor a 100, aplica 10% de descuento.

Si el precio es 100 o más, aplica 5% de descuento.

Luego, imprime con forEach el nombre del producto, el precio original y el precio con descuento.

Usa destructuring y map.

Agrega un par de productos extra al final con spread.

*/

const stock = [
  { nombre: 'Mouse', precio: 50, disponible: true },
  { nombre: 'Teclado', precio: 120, disponible: true },
  { nombre: 'Monitor', precio: 300, disponible: false },
  { nombre: 'USB', precio: 40, disponible: true },
  { nombre: 'Audífonos', precio: 90, disponible: true }
];

const extra3 = { nombre: 'Cámara', precio: 80, disponible: true };
const extra4 = { nombre: 'Impresora', precio: 200, disponible: true };

const seleccionUsuario = ['Mouse', 'USB', 'Monitor', 'Impresora'];

const procesarCarrito = (...productos) => {
  const unirProductos = [...productos, extra3, extra4];
  const productosSeleccionados = unirProductos.filter(({ disponible, nombre }) =>
    seleccionUsuario.includes(nombre) && disponible
  );

  const productosConDescuento = productosSeleccionados.map(({ nombre, precio }) => {
    const descuento = (precio < 100) ? 0.9 : 0.95;
    return {
      nombre,
      precioOriginal: precio,
      precioConDescuento: +(precio * descuento).toFixed(2)
    };
  });

  productosConDescuento.forEach(({ nombre, precioOriginal, precioConDescuento }) => {
    console.log(`Producto: ${nombre} | Original: ${precioOriginal}| Descuento: ${precioConDescuento}`);
  });
};

procesarCarrito(...stock);
