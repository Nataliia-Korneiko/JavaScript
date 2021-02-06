import users from "./users.js";
console.log("users :", users);

// Задание 4
// Получить массив только неактивных пользователей (поле isActive).

// const getInactiveUsers = users => {
//   твой код
// };

// console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

// Решение 4
const getInactiveUsers = (users) => {
  const usersArray = users.filter((user) => !user.isActive);

  return usersArray;
};

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]
