
//abrir una ventana
// let youtubeURL = "https://youtube.com";

// let ventana = window.open(youtubeURL);
//cerrar una ventana
// ventana.close();
//verificar si una ventana esta cerrada

// console.log(ventana.closed);

//detener la carga de la ventana
// ventana.stop();

// window.alert("rancio");

//imprimir la pagina
// print();

//prompt es para devolver un dato
// prompt("dame un dato");

// let respuesta = confirm("Estas seguro que deseas salir del sitio web?");

// console.log(respuesta);


//-----------------------------------
//Screen Scroll

// const screen = window.screen;
// document.write(screen);
// console.log(screen.availWidth);

const screenTop = window.screenTop;
const screenLeft = window.screenLeft;

document.write(screenTop);
document.write(screenLeft);

//scroll

//  ventana = window.open("https://youtube.com");
//  ventana1 = ventana.modeTo(100,300);


const href = window.location.href;
const pathname = window.location.pathname;
document.write(pathname);