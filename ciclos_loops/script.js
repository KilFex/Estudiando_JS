
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

/* Okey ahora, el ciclo for es un poco complejo de esplicar, pero lo describire de la manera mas entendible posible
okey el for esta compuesto por una declaracion de una variable, una condicion y una ejecucion, es decir
abajo vemos que estamos inicianco la varible 'let i = 0' aca estamos declarando una varible, luego vemos
'i < 15' ahora esta es la condicion la condicion dice ahi si el valor i que es 0 es menor que 15, lo cual tambien se cumple,
luego vemos la ultima parte donde dice 'i++' esta es la ejecucion que significa que la variable i que es 0 se va a sumar 
una ves hasta que llegue a cumplir la condicion*/

for (let i = 0; i<15; i++){
    console.log("for" + i);
}


let numero3 = [10,20,30,40,50,60,70,80];
numero3.push(90)


/* aca vemos que como condicion estamos pasando un arreglo, que esta asignado en la linea 37, que es numeros3, la condicion
dice asi: 'numero3.length' length es una propiedad del obejto array, que quiere decir longitud, en la parte de console.log
vemos que pasamos como parametro a numero[i] y si vemos en la inicializacion de la varible del ciclo for, vemos  que i = 0
luego la i que es 0 se comparar con la longitud del arreglo, y vemos que el arreglo tiene 8 posisiones entonces asi si se 
cumlpe esta condicion y luego se pasa a ejecutar el codigo */
for(let i = 0; i < numero3.length; i++){
    console.log(numero3[i]);
}


const ivan = {
    nombre: "Ivan",
    apellido: "Bazauri",
    edad: "28",
    soltero: false
}

/* ahora el for in se suele utilizar mas en los objetos, como vemos en la linea 51 estamos declarando uin objeto, con sus
atributos luego en le for declaramos una variable que en este caso se le llama propiedad in ivan -> esto quiere decir
propiedad de ivan asu ves esto quiere decir que se va a recorrer cada propiedad que se tiene en el array */
for(const propiedad in ivan){
    console.log(`Key ${propiedad}, Value: ${ivan[propiedad]}`)
}


for (const elemento of numero3) {
    console.log(elemento);
}


/* a diferancia del for in, el for of recorre dada elemento de la variable que lo asignemos, es decir en este caso, 
IVAN, recorrera letra por letra, lo que dice en el ciclo es: const letra de nombre, viste su mismo nombre dice 
lo que ara. */
let nombre = "IVAN";

for (const letra of nombre) {
    console.log(letra);
}