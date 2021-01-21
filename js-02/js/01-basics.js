// const friends = ["Mango", "Kiwi", "Poly", "Ajax"];
// // console.table(friends);
// console.log(friends);
// console.log(friends[2]);

// friends[2] = "Chelsy";
// console.log(friends);
// console.log(friends[2]);

// console.log(friends.length); // 4

// // friends[4] = "Kongo";

// friends[420] = "Kongo";

// console.log(friends);

// console.log(friends[400]); // undefined

// console.log(friends.length); // 421

// -----------------------
// const friends = ["Mango", "Kiwi", "Poly", "Ajax"];

// for (let i = 0; i < friends.length; i += 1) {
//   // console.log(i);

//   console.log(friends[i]);
// }

// -----------------------
// const friends = ["Mango", "Kiwi", "Poly", "Ajax"];

// for (const friend of friends) {
//   console.log(friend);
// }

// -----------------------
// const friends = ["Mango", "Kiwi", "Poly", "Ajax"];
// const nameToFind = "Poly";

// for (let i = 0; i < friends.length; i += 1) {
//   const friend = friends[i];

//   if (nameToFind === friend) {
//     console.log("Нашли такого друга!");
//   }
// }

// // or:

// for (const friend of friends) {
//   if (nameToFind === friend) {
//     console.log("Нашли такого друга!");
//   }
// }

// -----------------------
// const friends = ["Mango", "Kiwi", "Poly", "Ajax"];
// const nameToFind = "Poly";
// let message;

// // for (const friend of friends) {
// //   if (nameToFind === friend) {
// //     message = "Нашли такого друга!";
// //     break;
// //   } else {
// //     message = "Такого друга нет!";
// //   }
// // }

// // or:
// for (const friend of friends) {
//   if (nameToFind === friend) {
//     message = "Нашли такого друга!";
//     break;
//   }
//   message = "Такого друга нет!";
// }

// console.log(message);

// -----------------------
// const friends = ["Mango", "Kiwi", "Poly", "Ajax"];
// const nameToFind = "Poly";
// let message = "Такого друга нет!";

// for (const friend of friends) {
//   if (nameToFind === friend) {
//     message = "Нашли такого друга!";
//     break;
//   }
// }

// console.log(message);

// -----------------------
// const board = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// console.log(board[0]); // [1, 2, 3]
// console.log(board[0][1]); // 2
