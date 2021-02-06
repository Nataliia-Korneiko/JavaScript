import users from "./users.js";
console.log("users :", users);

// Задание 1
// Получить массив имен всех пользователей (поле name).

// const getUserNames = users => {
//   твой код
// };

// console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// Решение 1
const getUserNames = (users) => {
  const usersArray = users.map((user) => user.name);

  return usersArray;
};

console.log(getUserNames(users)); // [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
