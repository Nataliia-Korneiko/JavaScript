import users from "./users.js";
console.log("users :", users);

// Задание 2
// Получить массив объектов пользователей по цвету глаз (поле eyeColor).

// const getUsersWithEyeColor = (users, color) => {
//   твой код
// };

// console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

// Решение 2
const getUsersWithEyeColor = (users, color) => {
  const usersArray = users.filter((user) => user.eyeColor === color);

  return usersArray;
};

console.log(getUsersWithEyeColor(users, "blue")); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
