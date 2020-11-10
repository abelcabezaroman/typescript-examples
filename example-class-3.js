var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MotorCycle = /** @class */ (function () {
    function MotorCycle(name, brand, numberOfWheels) {
        this.name = name;
        this.brand = brand;
        this.numberOfWheels = numberOfWheels;
    }
    MotorCycle.prototype.sound = function () {
        console.log('Brum brum');
    };
    MotorCycle.prototype.getName = function () {
        return this.name;
    };
    return MotorCycle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(name, brand, numberOfWheels, numberOfDoors) {
        var _this = _super.call(this, name, brand, numberOfWheels) || this;
        _this.numberOfDoors = numberOfDoors;
        return _this;
    }
    return Car;
}(MotorCycle));
var MotorBike = /** @class */ (function (_super) {
    __extends(MotorBike, _super);
    function MotorBike(name, brand, numberOfWheels, hasSidecar) {
        var _this = _super.call(this, name, brand, numberOfWheels) || this;
        _this.hasSidecar = hasSidecar;
        return _this;
    }
    return MotorBike;
}(MotorCycle));
var motorBike1 = new MotorBike('Yamaha 350z', 'Yamaha', 2, false);
var car1 = new Car('Mazda 6', 'Mazda', 4, 4);
console.log(car1.getName());
console.log(motorBike1.getName());
