// Литерал объекта, свойства, ключи (имя) и значения

// const hotel = {
//   name: "Sunset resort",
//   stars: 5,
//   capacity: 200,
//   isOnline: true,
// };

// console.log(hotel);
// console.log(hotel.stars); // 5
// console.log(hotel.guests); // undefined

// -----------------------
// Доступ к свойству по obj.key и obj['key']

// const hotel = {
//   name: "Sunset resort",
//   stars: 5,
//   capacity: 200,
//   isOnline: true,
// };

// console.log(hotel.name); // Sunset resort
// console.log(hotel["name"]); // Sunset resort

// const key = "stars";
// console.log(hotel[key]); // 5

// -----------------------
// const hotel = {
//   name: "Sunset resort",
//   stars: 5,
//   capacity: 200,
// };

// console.log(hotel.stars); // 5
// hotel.stars = 3;
// console.log(hotel.stars); // 3

// hotel.guests = [1, 2, 3];
// console.log(hotel.guests); // [1, 2, 3]

// -----------------------
// Ссылочный тип {} === {}

// const a = { x: 1, y: 2 };
// const b = a;

// console.log(b === a); // true

// -----------------------
// Массивы и функции = объекты

// const arr = ["a", "b", "c"];
// console.log(arr); // ["a", "b", "c"]

// arr.hello = ":)";
// console.log(arr); // ["a", "b", "c", hello: ":)"]

// const fn = function () {};
// fn.hello = "xD";
// console.log(fn.hello);

// -----------------------
// Методы объекта и this при обращении к свойствам в методах

// const hotel = {
//   name: "Sunset resort",
//   stars: 5,
//   capacity: 200,
//   updateName(newName) {
//     console.log(this.name);
//     this.name = newName;

//     // console.log("this: ", this); // это сам объект

//     this.someMethod();
//   },
//   someMethod() {
//     console.log("Hello from someMethod");
//   },
// };

// console.log(hotel);
// hotel.updateName("Lagoon");
// console.log(hotel);

// -----------------------

// На дно :)
// const objA = {
//   x: 1,
//   objB: {
//     y: 5,
//   },
// };

// console.log(objA.objB.y);

// -----------------------
// Перебор через for...in и Object.keys|values|entries

// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// let totalFeedback = 0;

// for (const key in feedback) {
//   console.log(key);
//   console.log(feedback[key]);

//   totalFeedback += feedback[key];
// }

// console.log("Total: ", totalFeedback);
// console.log("good" in feedback); // true

// -----------------------
// // Object.keys()
// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// const keys = Object.keys(feedback); // массив всех ключей
// console.log(keys); // ["good", "neutral", "bad"]

// -----------------------
// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// const keys = Object.keys(feedback);
// console.log(keys.length); // 3

// let totalFeedback = 0;

// for (const key of keys) {
//   console.log(key);
//   console.log(feedback[key]);

//   totalFeedback += feedback[key];
// }

// console.log("Total: ", totalFeedback);

// -----------------------
// // Object.values();
// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// const values = Object.values(feedback); // массив всех значений
// console.log(values);

// let totalFeedback = 0;

// for (const value of values) {
//   console.log(value);

//   totalFeedback += value;
// }

// console.log("Total: ", totalFeedback);

// -----------------------
// // Object.entries()
// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// console.log(Object.entries(feedback));
