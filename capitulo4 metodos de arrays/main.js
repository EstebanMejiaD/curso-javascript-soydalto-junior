
// metodos de cadas de texto
let cadena = "cadena de prueba prueba";
let cadena2 = "cadena"
//metodos de cadena que solo sirven para mostrar cosas
let resultado = cadena.concat(cadena2);
let resultadoStartWith = cadena.startsWith("c");
let includes = cadena.includes(cadena2);
let indexOf = cadena.indexOf("prueba");
let lastIndexOf = cadena.lastIndexOf("prueba");

document.write(resultado);
document.write(`<br>`);
document.write(resultadoStartWith);
document.write(`<br>`);
document.write(includes);
document.write(`<br>`);
document.write(indexOf);
document.write(`<br>`);
document.write(lastIndexOf);

let cadena3 = "abc"
let cadena4 = "";
/**
 * Metodos de cadena donde se modifica la cadena rellenando
 */
let padStart = cadena3.padStart(5, "est");
let padEnd = cadena3.padEnd(10, "como")
document.write(`<br>`);
document.write(padStart);
document.write(`<br>`);
document.write(padEnd);

let repeat = cadena3.repeat(10);
document.write(`<br>`);
document.write(repeat);

/**
 * Metodos de cadena donde se modifica la cadena
 */

let texto = "Hola como estas";
let split = texto.split(" ");

document.write("<br>");
document.write(split[2]);

let substring = texto.substring(0,2);

document.write("<br>");
document.write(substring);

let toLowerCase = texto.toLowerCase();


document.write("<br>");
document.write(toLowerCase);


let toUpperCase = texto.toUpperCase();


document.write("<br>");
document.write(toUpperCase);


//metodos de arrays

let nombre = ["pedro", "maria", "jorge"];

let pop = nombre.pop();
document.write("<br>" + pop + "<br>");
document.write(nombre);

let shift = nombre.shift();
document.write("<br>" + shift + "<br>");
document.write(nombre);

let push = nombre.push("Esteban");
document.write("<br>" + push + "<br>");
document.write(nombre);

//Reverse

let numbers = [1,2,3,4,5];
document.write("<br>"+ numbers);
let reverse = numbers.reverse();
document.write("<br>"+ numbers);
document.write("<br>" +reverse);

//unshift
let numbersList = [1,2,3,4,5,7,8];
document.write("<br>"+ numbersList);
let unshift = numbersList.unshift(1, 3);
document.write("<br>" +unshift);
document.write("<br>" +numbersList);
document.write("<br>");
//sort
let numberList2 = [1,3,6,5,8,6,2];
document.write("<br>" + numberList2);
numberList2.sort();
document.write("<br>" +numberList2);

//splice
let array = ["esteban", "Andres", "Mejia", "De La Hoz"];
document.write("<br>"+array+"<br>");
array.splice(0,0, "Pablo", "amor");
document.write(array);

//metodos accesore
let arr = ["coco", "mango", "melon", "limon"];
// document.write("<br><br>"+arr);
// let res = arr.join(" <br> elemento:");
// document.write("<br>"+res);

let slice = arr.slice(0,2);
document.write("<br>"+slice);

document.write("<br><br><br>");
//metodos de repeticion de arrays

let nombres = ["Esteban", "Daniela", "Jose", "Andrea"];

nombres.filter(nombre => {
    document.write(nombre + "<br>");
});

let result = nombres.filter(nombre => nombre == "Daniela");

document.write("<br> "+result);




