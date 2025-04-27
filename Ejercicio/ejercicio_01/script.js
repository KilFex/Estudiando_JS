/* Ejercicio:

Tienes un array de objetos llamado productos. Cada objeto representa un producto con las siguientes propiedades:
nombre (string), precio (número) y disponible (boolean).

Debes hacer lo siguiente:

Recorrer el array con un bucle.

Para cada producto:

Si disponible es true y el precio es menor o igual a 100, mostrar en consola:
"Producto disponible: [nombre] - Precio: [precio]".

Si el producto no está disponible, mostrar:
"Producto no disponible: [nombre]".

Al final, fuera del bucle, muestra un listado nuevo (otro array) que contenga solo los nombres
(nombre) de los productos que estaban disponibles y cuyo precio era menor o igual a 100. */

const productos = [
  { nombre: 'Camiseta', precio: 50, disponible: false },
  { nombre: 'pantalon', precio: 150, disponible: false },
  { nombre: 'zapatos', precio: 80, disponible: true },
  { nombre: 'gorra', precio: 30, disponible: true },
  { nombre: 'reloj', precio: 200, disponible: false }
]

const productosDisponibles = []
/*
for(let i = 0; i < productos.length; i++){
    const producto = productos[i]

    if(producto.disponible & producto.precio <= 100){
        console.log(`Producto disponible: ${producto.nombre} - Precio: ${producto.precio}`)
        productosDisponibles.push(producto.nombre)
    }else if(!producto.disponible){
        console.log(`Producto no disponible: ${producto.nombre}`)
    }
}

console.log(`Productos disponibles a buen preio: ${productosDisponibles}`); */

productos.forEach((producto) => {
  if (producto.disponible & producto.precio <= 100) {
    console.log(`Producto disponible: ${producto.nombre} - Precio: ${producto.precio}`)
    productosDisponibles.push(producto.nombre)
  } else if (!producto.disponible) {
    console.log(`Producto no disponible: ${producto.nombre}`)
  }
})

console.log(`Productos disponibles a buen preio: ${productosDisponibles}`)
