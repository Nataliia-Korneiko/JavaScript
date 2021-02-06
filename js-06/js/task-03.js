import users from "./users.js";
console.log("users :", users);

// Задание 3
// Получить массив имен пользователей по полу (поле gender).

// const getUsersWithGender = (users, gender) => {
//   твой код
// };

// console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// Решение 3
const getUsersWithGender = (users, gender) => {
  const usersArray = users
    .filter((user) => user.gender === gender)
    .map((user) => user.name);

  return usersArray;
};

console.log(getUsersWithGender(users, "male")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
