/*
    🎯 Tu misión:
Crea una función expresada llamada obtenerProductosDisponibles.

La función debe recibir un array de productos.

Usando .filter(), devolver solo los productos que estén disponibles (disponible === true).

Luego recorrer los productos filtrados con .forEach() y mostrar en consola:
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

const obtenerProductosDisponibles = function () {
  productos.filter(producto => producto.disponible).forEach((producto) => console.log(`Producto disponible: ${producto.nombre} - precio: ${producto.precio}`))
}

obtenerProductosDisponibles()

console.log('------------nuevo ejercicio-------------')
/*
 Tu misión:
Crea una función expresada llamada mostrarProductosFiltrados.

La función debe recibir dos parámetros:

Un array de productos

Un precio límite (por ejemplo, 100)

Usando .filter(), filtra los productos disponibles que tengan un precio menor o igual al precio límite.

Luego, recorre con .forEach() y en el console.log haz esto:

Si el producto cuesta menos de 50, muestra:
"Producto barato: [nombre] - Precio: [precio]".

Si el producto cuesta entre 50 y el precio límite, muestra:
"Producto recomendado: [nombre] - Precio: [precio]".

📌 Reglas:
Función expresada.

Usar .filter() y .forEach().

Dentro del .forEach(), usar if...else.

*/

const mostrarProductosFiltrador = function (productosArray, precioLimite) {
  productosArray.filter((producto) => producto.disponible && producto.precio <= precioLimite).forEach((producto) => {
    if (producto.precio < 50) {
      console.log(`Producto barato: ${producto.nombre} - precio: ${producto.precio}`)
    } else if (producto.precio >= 50 && producto.precio <= precioLimite) {
      console.log(`Producto recomendado: ${producto.nombre} - precio: ${producto.precio}`)
    }
  })
}

mostrarProductosFiltrador(productos, 100)
