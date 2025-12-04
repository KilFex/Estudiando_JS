// const titulo = document.getElementById("titulo");
// console.log(titulo.textContent); // "Hola Mundo"

// const primero = document.querySelector(".texto");
// console.log(primero.textContent); // "Uno"


// const items = document.querySelectorAll(".item");

// items.forEach(el => {
//     console.log(el.textContent);
// });


const titulo = document.getElementById("titulo");
const descripcion = document.querySelector(".descripcion");
const btnCambiar = document.querySelector("#btnCambiar");
const btnColor = document.querySelector("#btnColor");


btnCambiar.addEventListener("click", () => {
    descripcion.textContent = "El texto cambio correctamente"
});

btnColor.addEventListener("click", () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    titulo.style.color = randomColor
});


const colorTexto = document.getElementById("colorTexto");
const btnFondo = document.querySelector("#btnFondo");

const generarColorRandom = () =>{
    let color = Math.floor(Math.random() * 16777215).toString(16);

    //ahora vamos a rrellenar el hex por si tiene menos de 6 digitos\

    while(color.length < 6){
        color = '0' + color;
    }

    return `#${color}`;
};


btnFondo.addEventListener("click",()=>{
    
    const color = generarColorRandom();
    document.body.style.backgroundColor = color;
    colorTexto.textContent = `Color actual: ${color}`;
});


const texto = document.getElementById("texto");
const btnToggle = document.getElementById("btnToggle");
const oculto = document.querySelector(".oculto");

btnToggle.addEventListener("click",()=>{

    if(texto.classList.contains("oculto")){
        texto.classList.remove("oculto");
    }else{
        texto.classList.add("oculto");
    }

})



