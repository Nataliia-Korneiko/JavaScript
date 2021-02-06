import users from "./users.js";
console.log("users :", users);

// Задание 9
// Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)

// const getNamesSortedByFriendsCount = users => {
//   твой код
// };

// console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// Решение 9
const getNamesSortedByFriendsCount = (users) => {
  const usersArray = users
    .sort((a, b) => a.friends.length - b.friends.length)
    .map((user) => user.name);

  return usersArray;
};

console.log(getNamesSortedByFriendsCount(users)); // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
