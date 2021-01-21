// Задание 3
// Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную строку (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.

// const findLongestWord = function(string) {
//   // твой код
// };

// Вызовы функции для проверки работоспособности твоей реализации.

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
// console.log(findLongestWord('Google do a roll')); // 'Google'
// console.log(findLongestWord('May the force be with you')); // 'force'

// Решение 3 v1
// const findLongestWord = function (string) {
//   const array = string.split(" ");
//   // console.log(array);

//   let longestWord = array[0];

//   for (let i = 1; i < array.length; i += 1) {
//     if (array[i].length > longestWord.length) {
//       longestWord = array[i];
//     }
//     // console.log(array[i]);
//   }

//   return longestWord;
// };

// -----------------------
// Решение 3 v2
const findLongestWord = function (string) {
  const words = string.split(" ");
  let longestWord = " ";

  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'
console.log(findLongestWord("Google do a roll")); // 'Google'
console.log(findLongestWord("May the force be with you")); // 'force'
