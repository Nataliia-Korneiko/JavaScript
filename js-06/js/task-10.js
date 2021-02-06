import users from "./users.js";
console.log("users :", users);

// Задание 10
// Получить массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.

// const getSortedUniqueSkills = users => {
//   твой код
// };

// console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]

// Решение 10
const getSortedUniqueSkills = (users) => {
  const skillsArray = users
    .reduce((skills, user) => {
      skills.push(...user.skills);
      return skills;
    }, [])
    .filter((skills, index, array) => {
      return array.indexOf(skills) === index;
    })
    .sort();

  return skillsArray;
};

console.log(getSortedUniqueSkills(users)); // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
