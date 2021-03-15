// const express = require("express");
// const throttle = require("lodash.throttle");
const validator = require("validator");
const greeter = require("./greeter");

greeter("Hello friends!");

const validateEmail = (email) => {
  return validator.isEmail(email);
};

console.log(
  "Is mango@mail.com a valid email?: ",
  validateEmail("mango@mail.com")
);

console.log(
  "Is Mangozedog.com a valid email?: ",
  validateEmail("Mangozedog.com")
);

// const app = express();
// app.get("/", (req, res) => {
//   res.send("<h1>Hello World</h1>");
// });

// app.listen(5000, () => {
//   console.log("App is running on port 5000");
// });

// -----------------------
// const app = express();
// app.get("/", (req, res) => {
//   res.send({
//     message: "Node is AMAZING!",
//   });
// });

// app.listen(5000, () => {
//   console.log("App is running on port 5000");
// });

// -----------------------
class User {
  static hello = "aloha";

  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }
}

const mango = new User("Mango");

console.log(mango.name);
