let animal = {
    eats: true
};
function Rabbit(name) {
    this.name = name;
}
let rabbit1 = new Rabbit("White Rabbit");
console.log(Rabbit.prototype.constructor == Rabbit);    // true
console.log(rabbit1.__proto__.constructor == Rabbit);                // true

Rabbit.prototype = animal;
let rabbit2 = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal
console.log(rabbit2.eats); // true

let rabbit3 = new rabbit1.constructor("Black Rabbit");
/* rabbit2 = {name: "Black Rabbit" }*/

Rabbit.prototype = {
    jumps: true
};
console.log(rabbit2.constructor == Rabbit); // false

Rabbit.prototype = rabbit2.__proto__;
Rabbit.prototype.jumps = true;
console.log(animal.jumps) // true

Rabbit.prototype = {
    jumps: true,
    constructor: Rabbit
};