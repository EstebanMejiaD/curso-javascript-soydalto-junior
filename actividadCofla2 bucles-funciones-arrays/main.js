
/**
 funciones: recordatorio
 */
// function saludar() {
//     let respuesta = prompt("hola como te fue hoy");
//     if (respuesta == "bien") {
//         alert("me alegro")
//     } else {
//         alert("que mal");
//     }
// }


// const saludar = ()=> {
//     let respuesta = prompt("hola como te fue hoy");
//     if (respuesta == "bien") {
//         alert("me alegro")
//     } else {
//         alert("que mal");
//     }
// } 
// saludar();


let free = false;

const validarEdad = (time)=> { 
    let edad = prompt("cual es tu edad?");
    if (edad >= 18) {
        if (time >= 2 && time < 7 && free == false) {
            alert("pasas gratis por que eres la primera persona despes de la 2am ");
            free = true;
        } else { 
            alert(`son las ${time}:00Hs puedes pasar pero tienes ue pagar`);
        }

    } else {
        alert("No puedes pasar por menor de edad");

    }
    return free;

}



/**
 * problema 2
 */

let cantidad = prompt("cuantos alumnos son?");
let alumnosTotales = [];

for (let index = 0; index < cantidad; index++) {
        alumnosTotales[index] = [prompt("Nombre del alumno: "+(index + 1)),0];
}
const tomarAsistencia =  (nombre, p)=> {
    let presencia = prompt(nombre);
    if (presencia == "p" || presencia == "P") {
        alumnosTotales[p][1]++;
    }

}

for (i = 0; i < 30; i++) {
    for(alumno in alumnosTotales) {
        tomarAsistencia(alumnosTotales[alumno][0], alumno);
    }
}

for (alumno in alumnosTotales){
    let resultado = `${alumnosTotales[alumno][0]}: <br>
    __________Asisencias: ${alumnosTotales[alumno][1]} <br>
    __________Ausencias: ${30 - parseInt(alumnosTotales[alumno[1]])}
    `;
    if (30 - alumnosTotales[alumno][1] > 18) {
        resultado += "reprobado por inasistencias <br><br>";
    } else{
       resultado += "<br><br>";
    }
    document.write(resultado);
}
