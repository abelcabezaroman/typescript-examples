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


