// class Car {
//     brand;
//     years;
//     numberOfWheels;

//     constructor(marca, anios, numeroDeRuedas) {
//         this.brand = marca;
//         this.years = anios;
//         this.numberOfWheels = numeroDeRuedas;
//     }

//     getAllData() {
//         return this.brand + this.years + this.numberOfWheels;
//     }
// }

// const audi = new Car('Audi', 5, 4);
// const mercedes = new Car('Mercedes', 2, 5);
// const volvo = new Car('Volvo', 1, 4);

// console.log(audi);
// console.log(audi.getAllData());
// console.log(mercedes);
// console.log(volvo);


class Toy {
    name: string;
    brand: string;
    minYears: number;

    // Además de definir los atributos, tenemos funciones, como el constructor
    constructor(name: string, brand: string, minYears: number = 2) {
        this.name = name;
        this.brand = brand;
        this.minYears = minYears;
    }

    sayMyName() {
        console.log('Soy el juguete ' + this.name + ' de la marca ' + this.brand +' y necesitas tener ' +this.minYears +' años para usarme')
    }

    sayMyNameTwice(){
        this.sayMyName();
        this.sayMyName();
    }
}

const toy1 = new Toy('Coche molón', 'HotWheels', 6);
const toy2 = new Toy('Buddy', 'Jossi Prechiochi', 2);
const toy3 = new Toy('Buzz LightYear', 'Control Z');


console.log(toy1.sayMyName()); // 'Coche molón'
console.log(toy2.sayMyName()); // 'Buddy'
console.log(toy3.minYears); // 2





