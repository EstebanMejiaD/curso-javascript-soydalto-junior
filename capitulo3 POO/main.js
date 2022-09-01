

class Animal {
    constructor(especie, edad, color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.informacion = `soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color} <br>`;
    }
    verInfo(){
        document.write(this.informacion);
    }
    
}



/**
 * Herencia con el extends y el super
 */

class Perro extends Animal {
    constructor(especie, edad, color, raza){
        super(especie, edad, color);
        this.raza = null;
    }

     ladrar() {
        alert("wau");
    }

    /**
     * @param {string} newName
     */
    set setRaza(newName) {
        this.raza = newName;
    }

    get getRaza() {
        return this.raza;
    }
}



const perro = new Perro("perro", 2, "blanco", "doberman");
const gato = new Animal("gato", 4, "negro");
const pajaro = new Animal("pajaro", 2, "azul");
const tortuga = new Animal("tortuga", 50, "verde");

document.write(perro.informacion);
document.write(gato.informacion);
document.write(pajaro.informacion);
document.write(tortuga.informacion);
perro.ladrar();
perro.setRaza = "Pedro";
document.write(perro.getRaza);







