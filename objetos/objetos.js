/* Dentro de un objeto a la variables se le llaman atributos o propiedades y a las funciones
se les llama metodos */

const datosPersonales = {
  nombre: 'Elmo',
  apeliidoPaterno: 'Bazauri',
  apellidoMaterno: 'Duran',
  dni: 77175351,
  soltero: false,
  pasatiempo: ['Caminar', 'Guitarra', 'Programar'],
  locacion: {
    calle: 'Leonardo da vinci',
    numero: 792
  },

  saludar: function () {
    console.log('Hola')
  },

  decirMiNombre: function () {
    console.log(`Hola me llamo ${this.nombre} ${this.apeliidoPaterno} y vivo en ${this.locacion.calle}
            ${this.locacion.numero}`)
  }
}

console.log(datosPersonales)
console.log(datosPersonales.nombre)
console.log(datosPersonales.apeliidoPaterno)

console.log(datosPersonales.apellidoMaterno)
console.log(datosPersonales.pasatiempo[1])
console.log(datosPersonales.locacion.calle)
console.log(datosPersonales.locacion.numero)
datosPersonales.decirMiNombre()

console.log(Object.keys(datosPersonales))
console.log(Object.values(datosPersonales))
console.log(datosPersonales.hasOwnProperty('nombre'))
