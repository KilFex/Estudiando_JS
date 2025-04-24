
/*Ahora veamos conceptos, en el WHILE primero evalua si la condicion se cumple, y si se cumple
ejecuta el codigo, pero si no se cumple, no ejecuta el codigo.

Muy diferente del DO WHILE, donde primero se ejecuta el codigo y luego evalua la condicion y si esta no se cumple
se termina alli, es un poco raro lo se, pero miralo de esta manera, si asigno a una variable el numero 10 como esta
en ese caso, y en la condicion del  DO WHILE, esta que si es menor de 10, se imprimiria 10 por que primero entra a
imprimir al codigo y luego pasa ala condicion y esta ve q vale 10, entonces ya no lo vuelve a ejecutar
*/


let numero = 0;
let numero2 = 15

while(numero < 10){
    console.log("while"+numero);
    numero++;
}

do{
    console.log("do while"+numero2);
    numero2++;
}while(numero2 < 10)

/* */

for (let i = 0; i<15; i++){
    console.log("for" + i);
}


let numero3 = [10,20,30,40,50,60,70,80];
numero3.push(90)


for(let i = 0; i < numero3.length; i++){
    console.log(numero3[i]);
}


const ivan = {
    nombre: "Ivan",
    apellido: "Bazauri",
    edad: "28",
    soltero: false
}

for(const propiedad in ivan){
    console.log(`Key ${propiedad}, Value: ${ivan[propiedad]}`)
}


for (const elemento of numero3) {
    console.log(elemento);
}

let nombre = "IVAN";

for (const letra of nombre) {
    console.log(letra);
}