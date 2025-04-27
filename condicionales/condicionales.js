const edad = 18

if (edad === 18) {
  console.log('eres mayor de edad')
} else {
  console.log('Eres menor de edad')
}

const imprimir = console.log()

const hora = 22

if (hora >= 1 && hora <= 6) {
  console.log('Estamos de madrugada, deja dormir')
} else if (hora >= 6 && hora <= 12) {
  console.log('Es de mañana Buenos dias')
} else if (hora >= 12 && hora <= 19) {
  console.log('Ya es La tarde, Buenas tardes')
} else {
  console.log('Ya llego la noches, Ve a descansar')
}

/* empezamos con el operador ternario,
declaracion de variable(condicion)? verdadero : falso */

const eresMAyor = (edad >= 18) ? 'Eres mayor de edad' : 'Eres menor de edad'

console.log(eresMAyor)

/* ahora veremos el switch - case */
const dia = 0

switch (dia) {
  case 0:
    console.log('Domingo')
    break
  case 1:
    console.log('lunes')
    break
  case 2:
    console.log('martes')
    break
  case 3:
    console.log('miercoles')
    break
  case 4:
    console.log('jueves')
    break
  case 5:
    console.log('viernes')
    break
  case 6:
    console.log('sabado')
    break
  default:
    console.log('no existe este dia, pero si pusiste 7 es domingo que se a asignado al numero 0')
    break
}
