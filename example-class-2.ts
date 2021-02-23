interface Ser {
    nombre: string;
    edad: number;
}

class Persona implements Ser {
    nombre: string;
    edad: number;

    // Además de definir los atributos, tenemos funciones, como el constructor
    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    // También podemos declarar otras funciones
    getName(): string {
        return this.nombre;
    }
}

class Alien implements Ser{
    nombre: string;
    edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    getEdad(){
        return this.edad;
    }

}

// Usaremos 'new' para generar nuevas instancias de la clase (haciendo uso del constructor interno)
let persona = new Persona('Juan Perez', 20);
let persona2 = new Persona('Julio Iglesias', 68);

console.log(persona.nombre)
console.log(persona2.nombre)


let nombre = persona.getName();
console.log(nombre)
