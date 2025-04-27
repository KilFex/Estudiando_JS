/* Tienes el siguiente array de productos (son objetos con nombre,
 precio, disponible y ahora también una nueva propiedad: categoria).

Debes hacer lo siguiente:

Recorrer todo el array.

Para cada producto:

Si el producto es disponible y su precio es menor o igual a 100, muestra en consola:
"Producto económico disponible: [nombre] - Categoría: [categoria]".

Si el producto no está disponible, muestra:
"Producto agotado: [nombre] - Categoría: [categoria]".

Si el producto es disponible pero su precio es mayor a 100, muestra:
"Producto premium disponible: [nombre] - Precio: [precio]".

Al final:

Crea dos nuevos arrays:

Uno con los nombres de todos los productos económicos disponibles (precio <= 100).

Otro con los nombres de todos los productos premium disponibles (precio > 100). */

const productos = [
  { nombre: 'Camiseta', precio: 50, categoria: 'Ropa', disponible: true },
  { nombre: 'Pantalon', precio: 120, categoria: 'Ropa', disponible: false },
  { nombre: 'Zapatos', precio: 80, categoria: 'Calzado', disponible: true },
  { nombre: 'Gorra', precio: 30, categoria: 'Accesorios', disponible: true },
  { nombre: 'Reloj', precio: 200, categoria: 'Accesorios', disponible: false },
  { nombre: 'Mochila', precio: 90, categoria: 'Accesorios', disponible: true }
]

const productosEconomicosDisponibles = []
const productosPremiunDisponibles = []

productos.forEach((producto) => {
  if (producto.disponible & producto.precio <= 100) {
    console.log(`Producto economico disopnible: ${producto.nombre} - 
            categoria: ${producto.categoria}`)
    productosEconomicosDisponibles.push(producto.nombre)
  } else if (!producto.disponible) {
    console.log(`Producto agotado: ${producto.nombre} - Categoria: ${producto.categoria}`)
  } else if (producto.disponible & producto.precio > 100) {
    console.log(`Producto premiun disponible: ${producto.nombre} - Precio: ${producto.precio}`)
    productosPremiunDisponibles.push(producto.nombre)
  }
})

console.log(`Productos economicos disponibles: ${productosEconomicosDisponibles}`)
console.log(`Productos premiun disponibles: ${productosPremiunDisponibles}`)
