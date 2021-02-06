import users from "./users.js";
console.log("users :", users);

// Задание 8
// Массив имен всех пользователей у которых есть друг с указанным именем.

// const getUsersWithFriend = (users, friendName) => {
//   твой код
// };

// console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

// Решение 8
const getUsersWithFriend = (users, friendName) => {
  const usersArray = users
    .filter((user) => user.friends.includes(friendName))
    .map((user) => user.name);
  return usersArray;
};

console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]
