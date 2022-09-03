
// let titulo = document.querySelector(".titulo");

//atributos globales con set atribute;
// titulo.setAttribute("contentEditable", "false");
// titulo.setAttribute("dir", "ltr");
// titulo.setAttribute("hidden", "true");

// titulo.setAttribute("title", "jajajaj");

// const input = document.querySelector(".input-normal");


// // input.accept = "image/png";
// // input.minLongth = "4";
// // input.placeholder = "a que no me podes tocar";
// input.required = "required";


const titulo = document.querySelector(".titulo");

// titulo.style.padding = "30px";
// titulo.style.backgroundColor = "red";


titulo.classList.add("grande");

titulo.classList.remove("grande");

let valor = titulo.classList.item(1);

document.write(valor);

let nombreDeClase = "amor"

let valor2 = titulo.classList.contains(nombreDeClase);


if (valor2) {
    document.write(`la clase: ${nombreDeClase} existe`);
    titulo.classList.remove(nombreDeClase);
} else {
    document.write(`la clase: ${nombreDeClase} <b>NO</b> existe`);
    titulo.classList.add(nombreDeClase);
}

titulo.classList.toggle("amorr", true);

titulo.classList.replace("amor", "chivo");