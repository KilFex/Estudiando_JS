const hacerPedido = (producto)=>{
    return new Promise((resolve, reject)=>{
        const productosDisponibles = ['pan', 'leche', 'queso'];

        console.log(`Revisnado disponibilidad de: ${producto}...`);

        setTimeout(()=>{
            if(productosDisponibles.includes(producto)){
                resolve(`✅ El producto "${producto}" está disponible. Enviando...`);
            } else {
                reject(`❌ El producto "${producto}" no está disponible.`);
            }
        },2000);
    });
}

/*Ahora usamos las promesas */

hacerPedido('queso').then((mensaje) =>{
    console.log(mensaje)
}).catch((error)=>{
    console.error(error)
})