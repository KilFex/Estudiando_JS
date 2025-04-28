/* 
🚀 Tu misión:
Filtrar solo los autos disponibles (disponible === true).

Con .map(), crear un nuevo array donde cada auto tenga:
marc
modelo
mensaje que diga: "Auto disponible del año [año]"

Finalmente, recorrer ese nuevo array con .forEach() e imprimir marca, modelo y mensaje.

🧠 OJO:
Usa desestructuración en el filter, map y forEach.
No te apures a usar .filter().map().forEach(), primero resuelve cada parte y luego lo unes si quieres.
*/

const autos = [
  { marca: 'Toyota', modelo: 'Corolla', año: 2020, disponible: true },
  { marca: 'Honda', modelo: 'Civic', año: 2018, disponible: false },
  { marca: 'Ford', modelo: 'Focus', año: 2019, disponible: true },
  { marca: 'Chevrolet', modelo: 'Cruze', año: 2021, disponible: true }
];

const autosDisponibles = autos.filter(({disponible}) => disponible);

const nuevoArrayAutos = autosDisponibles.map(({marca, modelo,año}) =>({
  marca,
  modelo,
  mensaje: `Auto disponible del año ${año}`
}));

nuevoArrayAutos.forEach(({marca,modelo,mensaje})=>
  console.log(`Marca: ${marca}, Modelo: ${modelo}, Mensaje: ${mensaje}`) 
);

 console.log(`------------segundo ejercicio--------`)

 const productos = [
  { nombre: "Laptop", precio: 1500, disponible: true },
  { nombre: "Mouse", precio: 25, disponible: true },
  { nombre: "Teclado", precio: 45, disponible: false },
  { nombre: "Monitor", precio: 300, disponible: true },
  { nombre: "Audífonos", precio: 100, disponible: false }
];

const productosDisponibles = (productoDisponible) => 
  productoDisponible.filter(({disponible}) => disponible);


const nuevoArrayDeProductos = (nuevoArray) =>
  nuevoArray.map(({nombre, precio}) => ({
    nombre,
    precio: precio * 0.9
  }));


const mostrarProductoDisponible = (mostrarProducto) => 
  mostrarProducto.forEach(({nombre,precio}) =>
    console.log(`Producto: ${nombre} - Precio Final: ${precio}`)
  );


const guardarProductosDisponibles = productosDisponibles(productos);
const productosConDescuento = nuevoArrayDeProductos(guardarProductosDisponibles);
mostrarProductoDisponible(productosConDescuento)