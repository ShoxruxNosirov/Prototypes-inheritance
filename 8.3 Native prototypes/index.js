let obj = {};
console.log(obj.__proto__ === Object.prototype); // true
console.log(obj.toString === obj.__proto__.toString); //true
console.log(obj.toString === Object.prototype.toString); //true
console.log(Object.prototype.__proto__); // null

let arr = [1, 2, 3];
console.log(arr.__proto__ === Array.prototype); // true
console.log(arr.__proto__.__proto__ === Object.prototype); // true
console.log(arr.__proto__.__proto__.__proto__); // null

function f() { }
console.log(f.__proto__ == Function.prototype); // true
console.log(f.__proto__.__proto__ == Object.prototype); // true,

String.prototype.show = function () {
    console.log(this);
};
"BOOM!".show(); // BOOM!

if (!String.prototype.repeat) {
    String.prototype.repeat = function (n) {
        return new Array(n + 1).join(this);
    };
}

console.log("La".repeat(3)); // LaLaLa

let obj2 = {
    0: "Hello",
    1: "world!",
    length: 2,
};
obj2.join = Array.prototype.join;
console.log(obj2.join(',')); // Hello,world!