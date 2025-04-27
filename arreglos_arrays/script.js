const a = []
const b = [1, 'hola', 'x', ['a', 'b', 'c', [1, 2, 3]]]

console.log(a)
console.log(b)
console.log(b[1])
console.log(b[3][2])
console.log(b[3][3][0])

// este es una de las maneras modernas de declarar un array, aca estamos usando uno de los metodos
// del array que es el .of
const c = Array.of('A', 'B', 'C')

console.log(c)

/* Aca usamos el metodo .fill, lo que hace este metodo
es nombras a todos los 20 arrays que se a declarado como true, es decir se cambia su valor */
const d = Array(20).fill(true)
console.log(d)

const numerosImpares = [1, 3, 5, 7, 9]
console.log(numerosImpares)

// .push es tambien unos de los metodos que tienen los array, este , metodo hace que al final del array se
// se coloque el numero 11
numerosImpares.push(11)
console.log(numerosImpares)

/* .pop esta tambien es un metodo que tiene el objeto array, este metodo hace que se elimine el ultimo valor del array */
numerosImpares.pop()
console.log(numerosImpares)

const color = ['BLANCO', 'NEGRO', 'AZUL', 'CELESTE']
console.log(color)

/* el metodo .forEach al igual que el for, recorre cada elemento del array, este metodo puede
recibir una funcion dentro de ella ,aca estamos usando template string
para concatenar,  */
color.forEach(function (elemento, indice) {
  console.log(`<li id="${indice}">${elemento}</li>`)
})
