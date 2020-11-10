interface Car{
    brand: string;
    years: number;
    numberOfWheels?: number;
}

let car1: Car = {years: 5, brand: 'Mercedez'}
let car2: Car = {years: 5, brand: 'Mercedez', numberOfWheels: 5}








interface Persona {
	nombre: string;
    edad: number;
    profesion?: Profesion[];
}

interface Profesion {
    nombre: string;
    exp: number;
}

let juan : Persona = { nombre: 'Juan Perez', edad: 20};
let magdalena : Persona = { nombre: 'Juan Perez', edad: 20, profesion: [{nombre: 'Repostera', exp: 5}]};
console.log(juan);


