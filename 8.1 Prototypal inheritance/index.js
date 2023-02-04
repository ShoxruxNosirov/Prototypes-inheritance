let animal = {
    eats: true
};
let rabbit = {
    jumps: true
};
rabbit.__proto__ = animal;
console.log(rabbit.eats); // true 
console.log(rabbit.jumps); // true

animal = {
    eats: true,
    walk() {
        console.log("Animal walk");
    }
};
rabbit = {
    jumps: true,
    __proto__: animal
};
rabbit.walk(); // Animal walk

let longEar = {
    earLength: 10,
    __proto__: rabbit
};
longEar.walk(); // Animal walk
console.log(longEar.jumps); // true (from rabbit)

rabbit.walk = function () {
    console.log("Rabbit! Bounce-bounce!");
};
rabbit.walk(); // Rabbit! Bounce-bounce!

let user = {
    name: "John",
    surname: "Smith",
    set fullName(value) {
        [this.name, this.surname] = value.split(" ");
    },
    get fullName() {
        return `${this.name} ${this.surname}`;
    }
};
let admin = {
    __proto__: user,
    isAdmin: true
};
console.log(admin.fullName); // John Smith
admin.fullName = "Alice Cooper";
console.log(admin.fullName); // Alice Cooper
console.log(user.fullName); // John Smith

let animall = {
    walk() {
        if (!this.isSleeping) {
            console.log(`I walk`);
        }
    },
    sleep() {
        this.isSleeping = true;
    }
};
let rabbitt = {
    name: "White Rabbit",
    __proto__: animall
};
rabbit.sleep();
console.log(rabbitt.isSleeping); // true
console.log(animall.isSleeping); // undefined

let animalll = {
    eats: true
};
let rabbittt = {
    jumps: true,
    __proto__: animal
};
console.log(Object.keys(rabbittt)); // jumps
for (let prop in rabbittt) console.log(prop); // jumps, eats

for (let prop in rabbit) {
    let isOwn = rabbit.hasOwnProperty(prop);
    if (isOwn) {
        console.log(`Our: ${prop}`); // Our: jumps
    } else {
        console.log(`Inherited: ${prop}`); // Inherited: eats
    }
}