
/* Ahora estamos viendo el manejo de error, con el try catch, primero ante todo este manejo de errores mas se suele
usar para cuando el usuario ingresa datos, eso en el front end, pero en el backend se suele usar para hacer las apis.

Ahora explicaremos el funcionamiento del try cath, primero en el try tenemos que pasar el codigo que se va a evaluar, en 
el catch es el que captura si hay un error en el try, es decir si en el try hubiera un error, en el catch es el
que captura dicho error lanzado en el try, ahora el finally, todo lo que haya en esta parte se ejecutara si o si, 
esto no se suele usar mucho en el lado del front end, se suele usar mas en el backend*/

try {
    console.log(`En esta parte se evalua al codigo`)
    
} catch (error) {
    console.log(`En esta parte,captura el error del try ${error}`)
} finally{
    console.log(`Esta parte se ejecutara si o si`)

}




try {
    const numero = 2;

    if(isNaN(numero)){
        throw new ("El caracter introducido no es un numero")
    } else {
        console.log(numero * numero)
    }
} catch (error) {
    console.log(`Se produjo el siguiente errro ${error}`);
    
} finally {

}