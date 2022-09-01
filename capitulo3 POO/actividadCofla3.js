

// class Celular {
//     constructor(color, peso, tamaño, rdc, ram) {
//         this.color = color;
//         this.peso = peso;
//         this.tamaño = tamaño;
//         this.resolucionDeCamara = rdc;
//         this.memoriaRam = ram;
//         this.encendido = false;
//     }

//     presionarBotonEncendido() {
//         if (this.encendido == false) {
//             alert("celular prendido");
//             this.encendido = true;
//         } else{
//             alert("El celular esta apagado");
//             this.encendido = false;
//         }


//     }
//     reiniciar() {
//         if (this.encendido == true) {
//             alert("Reiniciando celular");
//         } else {
//             alert("el celular esta apagado");
//         }

//     }

//     tomarFoto() {
//         alert(`Tomada con una resolucion de: ${this.resolucionDeCamara}`);
//     }

//     grabarVideo(){
//         alert(`Grabando con una resolucion de: ${this.resolucionDeCamara}`);
//     }
//     getEspecificaciones() {
//         return `
//         Color: <b>${this.color}</b><br>
//         Peso: <b>${this.peso}</b><br>
//         Tamaño: <b>${this.tamaño}</b><br>
//         Resolucion de Camara: <b>${this.resolucionDeCamara}</b><br>
//         Resolucion de Video: <b>${this.resolucionDeCamara}</b><br>
//         Ram: <b>${this.memoriaRam}</b><br>
//         `;
//     }

// }



// class CelularAltaGama extends Celular{
//     constructor(color, peso, tamaño, rdc, ram, rdce){
//         super(color, peso, tamaño,rdc,ram);
//         this.camaraExtra = rdce;
//     }
//     grabarVideoLento() {
//         alert("estas grabando en camara lenta");

//     }
//     reconocimientoFacial() {
//         alert("Vamos a inicar el proceso de reconocimiento facial ");
//     }
//     getEspecificacionesAltaGama() {
//         return this.getEspecificaciones() + `Resolucion de camara extra: ${this.camaraExtra} <br>`
//     }
// }


// // const celular1 = new Celular("Negro", "150", "5`", "full hd", "2GB");
// // const celular2 = new Celular("Negro", "200", "6`", "hd", "1GB");
// // const celular3 = new Celular("azul", "180", "5.5`", "full hd", "2GB");

// const celular1 = new CelularAltaGama("blanco", "130g", "5`", "4k", "4GB");
// const celular2 = new CelularAltaGama("azul", "150g", "5.3`", "4k", "4GB");
// const celular3 = new CelularAltaGama("negro", "200g", "6``", "4k", "6GB");


// document.write(`
//  ${celular1.getEspecificaciones()}<br>
//  ${celular2.getEspecificaciones()}<br>
//  ${celular3.getEspecificaciones()}<br>
// `)
// celular1.grabarVideoLento();


class App {
    constructor(descargas, puntuacion, peso) {
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;
    }

    instalar() {
        if (this.instalada == false) {
            this.instalada = true;
            alert("App instalada");
        }

    }
    desinstalar() {
        if (this.instalada == true) {
            this.instalada = false;
            alert("App desinstalada");
        }
    }
    abrir() {
        if (this.iniciada == false && this.instalada == true) {
           this.iniciada = true; 
            alert("App abierta");
        }
    }
    cerrar() {
        if (this.iniciada == true && this.instalada == true) {
            this.iniciada = false;
            alert("App cerrada");
        }
    }
    
    appInfo() {
        return document.write(`
        Descargas: <b>${this.descargas}</b><br>
        Puntuacion: <b>${this.puntuacion}</b><br>
        Peso: <b>${this.peso}</b><br><br>
        `);
    }

}

const app = new App("16.000", "5 estrellas", "900mb");
const app1 = new App("1.000", "4.5 estrellas", "300mb");
const app2 = new App("10.000", "3.5 estrellas", "540mb");

// app.instalar();
// app.abrir();
// app.cerrar();
// app.desinstalar();
app.appInfo();
app1.appInfo();
app2.appInfo();


