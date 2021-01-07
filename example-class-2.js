var Persona = /** @class */ (function () {
    // Además de definir los atributos, tenemos funciones, como el constructor
    function Persona(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    // También podemos declarar otras funciones
    Persona.prototype.getName = function () {
        return this.nombre;
    };
    return Persona;
}());
// Usaremos 'new' para generar nuevas instancias de la clase (haciendo uso del constructor interno)
var persona = new Persona('Juan Perez', 20);
var persona2 = new Persona('Julio Iglesias', 68);
console.log(persona.nombre);
console.log(persona2.nombre);
var nombre = persona.getName();
console.log(nombre);
