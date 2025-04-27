/*
Tu misión:
Usa .filter() para crear un nuevo array que solo contenga los productos:

Disponibles (disponible === true)

Y que además tengan un precio menor o igual a 100.

Luego, muestra en consola:

El array filtrado completo.

Y para cada producto, muestra:
"Producto disponible: [nombre] - Precio: [precio]".
*/

const productos = [
  { nombre: 'Camiseta', precio: 50, categoria: 'Ropa', disponible: true },
  { nombre: 'Pantalón', precio: 120, categoria: 'Ropa', disponible: false },
  { nombre: 'Zapatos', precio: 80, categoria: 'Calzado', disponible: true },
  { nombre: 'Gorra', precio: 30, categoria: 'Accesorios', disponible: true },
  { nombre: 'Reloj', precio: 200, categoria: 'Accesorios', disponible: false },
  { nombre: 'Mochila', precio: 90, categoria: 'Accesorios', disponible: true }
]

const productosDisponibles = productos.filter((producto) => producto.disponible & producto.precio <= 100)
console.table(productosDisponibles)

productosDisponibles.forEach((producto) => {
  console.log(`Producto disponible: ${producto.nombre}`)
})
productos.filter((producto) => producto.disponible & producto.precio >= 80).forEach(
  (producto) => { console.log(`Producto mayor a 80: ${producto.nombre}`) }
)
