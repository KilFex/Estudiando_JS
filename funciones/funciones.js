// esta es una funcion declarada
// esta funcion puede ser llamada al inicio pero ser declarada despues, esto es una mala practica, no hacer
sumar()

function sumar () {
  const a = 1
  const b = 2

  const resultado = a + b

  console.log(resultado)
};

// esta es una  funcion expresada
// a diferencia de la funcion declarada esta funcion no permite se llamada antes de ser declarada, primero tiene que estar
// declarada para que pueda ser llamada
const restar = function () {
  const a = 4
  const b = 5

  const resultado = b - a
  console.log(resultado)
}

restar()
