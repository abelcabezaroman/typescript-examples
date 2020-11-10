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

    sayMyName(): string {
        return this.name;
    }
}

const toy1 = new Toy('Coche molón', 'HotWheels', 6);
const toy2 = new Toy('Buddy', 'Jossi Prechiochi', 2);
const toy3 = new Toy('Buzz LightYear', 'Control Z');


console.log(toy1.sayMyName());
console.log(toy2.sayMyName());





