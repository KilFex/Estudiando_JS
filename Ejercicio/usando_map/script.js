/*
👉 Tu misión:
Crea un nuevo array usando .map(), donde:

A cada producto le apliques un 20% de descuento.

El nuevo array debe contener objetos con:

el mismo nombre,

y el precio con descuento.

📢 REGLAS:
Solo puedes usar .map().

No puedes modificar el array original (productos).

Usa template strings para mostrar los productos finales en consola si quieres.

*/

const productos = [
  { nombre: 'Camiseta', precio: 50 },
  { nombre: 'Zapatos', precio: 80 },
  { nombre: 'Gorra', precio: 30 }
]

const nuervoArray = productos.map(producto => {
  return {
    nombre: producto.nombre,
    precio: producto.precio * 0.8

  }
})

nuervoArray.forEach(producto => {
  console.log(`Estos son los productos con descuento: ${producto.nombre} - Precio: ${producto.precio}`)
})

console.log(nuervoArray)

console.log('-----Segundo ejercicio--------')

/*
  🎯 Tu misión:
Filtrar los productos que estén disponibles.

Aplicar un 10% de descuento a los productos que cuesten menos de 100.

Crear una función expresada que realice todo el proceso.

Mostrar el nuevo array en consola.

📋 Reglas:
Usa .filter() para filtrar los disponibles.

Usa .map() para aplicar el descuento solo si el precio es menor a 100.

Usa una función expresada para hacer todo.

No modifiques el array original.

El array nuevo debe mostrar los productos con su precio actualizado.

  */

const productos2 = [
  { nombre: 'Camiseta', precio: 50, disponible: true },
  { nombre: 'Zapatos', precio: 80, disponible: false },
  { nombre: 'Gorra', precio: 30, disponible: true },
  { nombre: 'Mochila', precio: 90, disponible: true },
  { nombre: 'Pantalón', precio: 120, disponible: true }
]

const productosDisponibles = () => {
  const arrayProductosDisponibles = productos2.filter((producto) => producto.disponible && producto.precio < 100)
  console.table(arrayProductosDisponibles)

  const productoCondescuento = arrayProductosDisponibles.map(producto => {
    if (producto.precio < 100) {
      return {
        nombre: producto.nombre,
        precio: producto.precio * 0.9
      }
    }
  })

  productoCondescuento.forEach(producto => {
    console.log(`Estos son los productos con descuento: ${producto.nombre} - Precio: ${producto.precio}`)
  })
}

productosDisponibles()

/* Esta es una forma aun mas limpia de hacerla */

const productosDisponiblesConDescuento = () => {
  const productoDisponible = productos2.filter((producto) => producto.disponible && producto.precio < 100)

  productoDisponible.map(producto => {
    console.log(`Estos son los productos con descuento: ${producto.nombre} - Precio: ${producto.precio * 0.9}`)
  })
}

productosDisponiblesConDescuento()
/* Ahora una forma mas loca xd */

const disponibleConDescuento = () => {
  productos2.filter(p => p.disponible && p.precio < 100).map(p => ({ nombre: p.nombre, precio: p.precio * 0.9 })).forEach(p => { console.log(`Producto con descuento: ${p.nombre} - precio: ${p.precio}`) })
}
disponibleConDescuento()
