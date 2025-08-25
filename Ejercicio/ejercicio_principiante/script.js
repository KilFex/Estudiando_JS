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
(nombre) de los productos que estaban disponibles y cuyo precio era menor o igual a 100. 

const productos = [
  { nombre: 'Camiseta', precio: 50, disponible: false },
  { nombre: 'pantalon', precio: 20, disponible: true },
  { nombre: 'zapatos', precio: 80, disponible: true },
  { nombre: 'gorra', precio: 30, disponible: true },
  { nombre: 'reloj', precio: 200, disponible: false }
];

const productosDisponibles = [];

productos.forEach((producto) => {
    if(producto.disponible & producto.precio <= 100){
        console.log(`Producto disponible: ${producto.nombre} - Precio: ${producto.precio}`)
    }
    if(!producto.disponible){
        console.log(`Producto no disponible: ${producto.nombre}`)
    }
})


console.log(`Estos son los productos disponibles: ${productosDisponibles}`)


const usuarios = [
  { nombre: "Lian", edad: 23, activo: true },
  { nombre: "Laura", edad: 21, activo: false },
  { nombre: "Carlos", edad: 30, activo: true },
  { nombre: "Marta", edad: 25, activo: false }
];


usuarios.forEach(({nombre, edad, activo})=>{
    if(activo)
        {
            console.log(`✅${nombre} tiene ${edad} años y esta activo`)
        }
    else
        {
            console.log(`❌${nombre} tiene ${edad} años y no esta activo`)
        }
})

const pedidos = [
  { cliente: "Ana", producto: "Laptop", precio: 1200, entregado: true },
  { cliente: "Luis", producto: "Celular", precio: 800, entregado: false },
  { cliente: "Marta", producto: "Audífonos", precio: 150, entregado: true },
  { cliente: "Pedro", producto: "Monitor", precio: 300, entregado: false }
];


pedidos.forEach(({cliente, producto, precio, entregado})=>{
    const pedido = entregado 
    ? `Pedido de ${cliente} - ${producto} por $${precio} ha sido entregado` 
    : `Pedido de ${cliente} - ${producto} por $${precio} está en proceso`

    console.log(pedido)
})
    

const estudiantes = [
  { nombre: "Ana", nota: 8 },
  { nombre: "Luis", nota: 15 },
  { nombre: "Carla", nota: 10 },
  { nombre: "Pedro", nota: 18 }
]

const bonificacion = estudiantes.map(({nombre, nota})=>{
    return{
        nombre,
        notaFinal: nota+ 0
    }
})

console.log(`Estudiantes con bonificación:`, bonificacion)

bonificacion.forEach(({nombre, notaFinal})=>{{
    if(notaFinal >= 13){
        console.log(`✅${nombre} ha aprobado con una nota de ${notaFinal}`)
    }
    else{
        console.log(`❌${nombre} ha reprobado con una nota de ${notaFinal}`)
    }
}})
*/
const productos = [
  { nombre: "Laptop", precio: 1500 },
  { nombre: "Mouse", precio: 50 },
  { nombre: "Teclado", precio: 100 }
];
/*
const nuevoArray = productos.map(({nombre, precio})=>{
    return{
        nombre: nombre.toUpperCase(),
        precio: precio * 0.9
    }
})

nuevoArray.forEach(({nombre, precio})=>{
    console.log(`Producto: ${nombre} | Precio: ${precio}`)
})*/

const precioDescuento = productos.forEach(({nombre, precio})=>{
    const descuento = precio * 0.9

    console.log(`Producto: ${nombre} | Precio: ${descuento}`)
})