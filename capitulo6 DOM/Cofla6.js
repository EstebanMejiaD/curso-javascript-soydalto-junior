const contenedor = document.querySelector(".flex-container");
const boton = document.querySelector(".send-button");
boton.value = boton.value.toUpperCase();

function crearLlave (nombre, modelo, precio) {
    
    img = "<img src='llave.png'>";
    nombre = `<h2>${nombre}</h2>`;
    modelo = `<h3>${modelo}</h3>`;
    precio = `<p>Precio: <b>${precio}</b></p>`;
    return [img, nombre, modelo, precio ];

}


const changeHidden = (number)=> {
    document.querySelector(".key-data").value = number; 
}

let documentFracment = document.createDocumentFragment();

for (let index = 0; index < 20; index++) {
    
    let modeloRandom = Math.round(Math.random()*1000);
    let precioRandom = Math.round(Math.random()*10+30);
    let llave = crearLlave(`llave ${index}`, `modelo ${modeloRandom}`, precioRandom);
    
    let div = document.createElement("DIV");
    div.addEventListener("click",()=>{changeHidden(modeloRandom)})
    div.tabIndex = index;
    div.classList.add(`item-${index}`, `flex-item`);
    div.innerHTML = llave[0] + llave[1] + llave[2] + llave[3];
    documentFracment.appendChild(div);
}

contenedor.appendChild(documentFracment);