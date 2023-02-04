let animal = {
    eats: true
};
let rabbit = Object.create(animal); // rabbit = {__proto__: animal}
console.log(rabbit.eats); // true
console.log(Object.getPrototypeOf(rabbit) === animal); // true
Object.setPrototypeOf(rabbit, {}); // rabbit = {};

let rabbit2 = Object.create(animal, {
    jumps: {
        value: true
    }
});
console.log(rabbit2.jumps); // true

/*
let clone = Object.create(
  Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj)
);
*/

let obj = {};
let key = "__proto__";
obj[key] = "some value";
console.log(`${obj[key]}`);            // [object Object]

let map = new Map();
key = "__proto__";
map.set(key, "some value");
console.log(map.get(key));        // "some value"

obj = { __proto__: null }
key = "__proto__";
obj[key] = "some value";
console.log(obj[key]); // "some value"

// console.log(`${obj}`)       // Error

let chineseDictionary = Object.create(null);
chineseDictionary.hello = "你好";
chineseDictionary.bye = "再见";

console.log(`${Object.keys(chineseDictionary)}`); // hello,bye

