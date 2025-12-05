// const titulo = document.getElementById("titulo");
// console.log(titulo.textContent); // "Hola Mundo"

// const primero = document.querySelector(".texto");
// console.log(primero.textContent); // "Uno"


// const items = document.querySelectorAll(".item");

// items.forEach(el => {
//     console.log(el.textContent);
// });


// const titulo = document.getElementById("titulo");
// const descripcion = document.querySelector(".descripcion");
// const btnCambiar = document.querySelector("#btnCambiar");
// const btnColor = document.querySelector("#btnColor");


// btnCambiar.addEventListener("click", () => {
//     descripcion.textContent = "El texto cambio correctamente"
// });

// btnColor.addEventListener("click", () => {
//     const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
//     titulo.style.color = randomColor
// });


// const colorTexto = document.getElementById("colorTexto");
// const btnFondo = document.querySelector("#btnFondo");

// const generarColorRandom = () =>{
//     let color = Math.floor(Math.random() * 16777215).toString(16);

//ahora vamos a rrellenar el hex por si tiene menos de 6 digitos\

//     while(color.length < 6){
//         color = '0' + color;
//     }

//     return `#${color}`;
// };


// btnFondo.addEventListener("click",()=>{
    
//     const color = generarColorRandom();
//     document.body.style.backgroundColor = color;
//     colorTexto.textContent = `Color actual: ${color}`;
// });


// const texto = document.getElementById("texto");
// const btnToggle = document.getElementById("btnToggle");
// const oculto = document.querySelector(".oculto");

// btnToggle.addEventListener("click",()=>{

//     if(texto.classList.contains("oculto")){
//         texto.classList.remove("oculto");
//     }else{
//         texto.classList.add("oculto");
//     }

// })

// btnToggle.addEventListener("click",()=>{
//     texto.classList.toggle('oculto');
// });



// const btnTheme = document.getElementById("btnTheme");

// btnTheme.addEventListener("click", () =>{
//     document.body.classList.toggle('dark');

//     const esOscuro = document.body.classList.contains('dark');

//     btnTheme.textContent = esOscuro? 'Modo Claro' : 'Modo Oscuro';
// });

const usuarios = [
  { nombre: "Juan", edad: 25, premium: true },
  { nombre: "Ana", edad: 19, premium: false },
  { nombre: "Luis", edad: 30, premium: true },
  { nombre: "Maria", edad: 28, premium: false }
];


const listaUsuarios = document.getElementById("listaUsuarios");
const btnTodos = document.getElementById("btnTodos");
const btnPremium = document.getElementById("btnPremium");
const btnNombres = document.getElementById("btnNombres");


const renderLista = (items) => {
  listaUsuarios.innerHTML = ""; // limpiamos la lista

  items.forEach(({ nombre, edad, premium }) => {   
    const li = document.createElement("li");
    li.textContent = `${nombre} - Edad: ${edad} - ${premium ? "Premium" : "Normal"}`;
    listaUsuarios.appendChild(li);
  });
};


btnTodos.addEventListener("click", () => {
  renderLista(usuarios);
});


btnPremium.addEventListener("click", () => {
  const premiumUsers = usuarios.filter(user => user.premium);
  renderLista(premiumUsers);
});


btnNombres.addEventListener("click", () => {
  const soloNombres = usuarios.map(({ nombre }) => ({ nombre }));
  listaUsuarios.innerHTML = "";

  soloNombres.forEach(({ nombre }) => {
    const li = document.createElement("li");
    li.textContent = nombre;
    listaUsuarios.appendChild(li);
  });
});


const btnTheme = document.getElementById("btnTheme");

btnTheme.addEventListener("click", ()=>{
    document.body.classList.toggle('dark');

    const esClaro = document.body.classList.contains('dark');

    btnTheme.textContent = esClaro? 'Modo Claro' : 'Modo Oscuro'


})
