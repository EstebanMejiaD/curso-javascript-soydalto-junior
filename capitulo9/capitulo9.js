const buttons = document.querySelector(".button");
const contenedor = document.querySelector(".contenedor");
const input = document.querySelector(".input-prueba");

//addEventListener y event flow
// contenedor.addEventListener("click",(e)=>{
//     alert("click en contenedor rojo");
// });

// contenedor2.addEventListener("click", ()=>{
//     alert("click en contenedor azul");
// });

// buttons.addEventListener("click",(e)=>{
//     alert("click en el boton");
//     e.stopPropagation();
// });

//evebtos del mouse 

//double click
// buttons.addEventListener("dblclick",(e)=>{
//     alert("click en el boton");
//     e.stopPropagation();
// });

// evento mouse hover
//addEventListener y event flow
// contenedor.addEventListener("mouseover",(e)=>{
//     alert("click en contenedor rojo");
// });

//evento mouse out
// contenedor.addEventListener("mouseout",(e)=>{
//     alert("click en contenedor rojo");
// });

//eventos del teclado
input.addEventListener("keydown", (e)=>{
    console.log("Una tecla fue precionada");
});
input.addEventListener("keypress", (e)=>{
    console.log("Una tecla fue presionada y se soltó");
});

input.addEventListener("keyup",(e)=>{
    console.log("Una tecla fue soltada");
})


