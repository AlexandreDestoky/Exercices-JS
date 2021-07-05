"use strict";

///////////////////////////////////////
// Coding Challenge #4

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EV' child class of the 'Car' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class,
 and also update the 'brake' method in the 'CarCl' class. They experiment with chining!


GOOD LUCK 😀
*/


class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }
}

class EV extends Car{
  constructor(make,speed,charge) {
    super(make,speed);
    this._charge = charge;
  }
  chargeBattery() {
    this._charge += 10
    console.log(`Chargement de la voiture à ${this._charge}%`);
    return this;
  }
}

const dacia = new EV("Dacia",120,24);
dacia.accelerate().chargeBattery();