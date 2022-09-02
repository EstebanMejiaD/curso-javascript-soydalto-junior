let trabajo = "240 minutos de trabajo";
let estudio = "100 minutos de estudio";
let tp = "100 minutos hacer trabajos practicos";
let homework = "30 minutos de cosas de la casa";
let descanso = "10 minutos descanso";

console.log("TAREAS");

for (let index = 0; index < 14; index++) {
    
    if (index == 0) {
        console.group("Semana 1");
    }
console.group("dia "+ (index+1));
console.log(trabajo);
console.log(descanso);
console.log(estudio);
console.log(tp);
console.log(homework);
console.groupEnd();
    if (index == 7) {
    console.groupEnd();
    console.group("semana 2");
    }
}

console.groupEnd();
console.groupEnd();

console.log("--------------------------------------------");
console.log("--------------------------------------------");
console.log("---Luego viene el codigo de cofla 5A--------");
console.log("--------------------------------------------");
console.log("--------------------------------------------");
