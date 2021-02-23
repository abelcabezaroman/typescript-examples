class MotorCycle {
    name: string;
    brand: string;
    numberOfWheels: number;

    constructor(name: string, brand: string, numberOfWheels: number) {
        this.name = name;
        this.brand = brand;
        this.numberOfWheels = numberOfWheels;
    }

    sound() {
        console.log('Brum brum')
    }

    getName() {
        return this.name;
    }
}

class Car extends MotorCycle {
    numberOfDoors: number;

    constructor(name: string, brand: string, numberOfWheels: number, numberOfDoors: number) {
        super(name, brand, numberOfWheels);
        this.numberOfDoors = numberOfDoors;
    }
}

class MotorBike extends MotorCycle {
    hasSidecar: boolean;

    constructor(name: string, brand: string, numberOfWheels: number, hasSidecar: boolean) {
        super(name, brand, numberOfWheels);
        this.hasSidecar = hasSidecar;
    }
}

const motorBike1 = new MotorBike('Yamaha 350z', 'Yamaha', 2, false)
const car1 = new Car('Mazda 6', 'Mazda', 4, 4)

console.log(car1.brand);
console.log(car1.getName());
console.log(car1.getName());
console.log(motorBike1.getName());
console.log(car1.sound());
console.log(motorBike1.sound());
console.log(motorBike1.brand);