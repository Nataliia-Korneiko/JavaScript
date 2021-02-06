import users from "./users.js";
console.log("users :", users);

// Задание 7
// Получить общую сумму баланса (поле balance) всех пользователей.

// const calculateTotalBalance = users => {
//   твой код
// };

// console.log(calculateTotalBalance(users)); // 20916

// Решение 7
const calculateTotalBalance = (users) =>
  users.reduce((usersBalance, user) => usersBalance + user.balance, 0);

console.log(calculateTotalBalance(users)); // 20916
