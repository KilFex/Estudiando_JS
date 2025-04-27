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
    { nombre: "Camiseta", precio: 50 },
    { nombre: "Zapatos", precio: 80 },
    { nombre: "Gorra", precio: 30 }
  ];

  
  const nuervoArray = productos.map(producto => {
    return{
        nombre: producto.nombre,
        precio: producto.precio * 0.8

    }
  });

  nuervoArray.forEach(producto => {
    console.log(`Estos son los productos con descuento: ${producto.nombre} - Precio: ${producto.precio}`)
  })

  console.log(nuervoArray)

  


  
  