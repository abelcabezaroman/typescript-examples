var Car = /** @class */ (function () {
    function Car(brand, years, numberOfWheels) {
        this.brand = brand;
        this.years = years;
        this.numberOfWheels = numberOfWheels;
    }
    return Car;
}());
var audi = new Car('Audi', 5, 4);
var mercedes = new Car('Mercedes', 2, 5);
var volvo = new Car('Volvo', 1, 4);
console.log(audi);
console.log(mercedes);
console.log(volvo);
// class Toy {
//     name: string;
//     brand: string;
//     minYears: number;
//     // Además de definir los atributos, tenemos funciones, como el constructor
//     constructor(name: string, brand: string, minYears: number = 2) {
//         this.name = name;
//         this.brand = brand;
//         this.minYears = minYears;
//     }
//     sayMyName(): string {
//         return this.name;
//     }
// }
// const toy1 = new Toy('Coche molón', 'HotWheels', 6);
// const toy2 = new Toy('Buddy', 'Jossi Prechiochi', 2);
// const toy3 = new Toy('Buzz LightYear', 'Control Z');
// console.log(toy1.sayMyName());
// console.log(toy2.sayMyName());
