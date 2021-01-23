// const friends = [
//   { name: "Mango", online: false },
//   { name: "Kiwi", online: true },
//   { name: "Poly", online: true },
//   { name: "Ajax", online: false },
// ];

// console.log(friends);
// console.table(friends);
// console.log(friends[2]);

// -----------------------
// const friends = [
//   { name: "Mango", online: false },
//   { name: "Kiwi", online: true },
//   { name: "Poly", online: true },
//   { name: "Ajax", online: false },
// ];

// const nameToFind = "Poly";
// for (const friend of friends) {
//   // console.log(friend.name);
//   console.log(friend);

//   if (friend.name === nameToFind) {
//     console.log("Нашли!!!");
//     break;
//   }
// }

// -----------------------
// Ищем друга по имени

// const friends = [
//   { name: "Mango", online: false },
//   { name: "Kiwi", online: true },
//   { name: "Poly", online: true },
//   { name: "Ajax", online: false },
// ];

// const findFriendByName = function (allFriends, name) {
//   for (const friend of allFriends) {
//     console.log(friend);

//     if (friend.name === name) {
//       return "Нашли!!!";
//     }
//   }

//   return "Не нашли :(";
// };

// console.log(findFriendByName(friends, "Poly"));
// console.log(findFriendByName(friends, "Chelsy"));

// -----------------------
// Получаем имена всех друзей

// const friends = [
//   { name: "Mango", online: false },
//   { name: "Kiwi", online: true },
//   { name: "Poly", online: true },
//   { name: "Ajax", online: false },
// ];

// const getAllNames = function (allFriends) {
//   const names = [];

//   for (const friend of allFriends) {
//     console.log(friend);
//     names.push(friend.name);
//   }

//   return names;
// };

// console.log(getAllNames(friends));

// -----------------------
// Получаем имена только друзей которые онлайн
// const friends = [
//   { name: "Mango", online: false },
//   { name: "Kiwi", online: true },
//   { name: "Poly", online: true },
//   { name: "Ajax", online: false },
// ];

// const getOnlineFriends = function (allFriends) {
//   const names = [];

//   for (const friend of allFriends) {
//     console.log(friend);

//     if (friend.online) {
//       names.push(friend.name);
//     }
//   }

//   return names;
// };

// console.log(getOnlineFriends(friends));

// -----------------------
// const friends = [
//   { name: "Mango", online: false },
//   { name: "Kiwi", online: true },
//   { name: "Poly", online: true },
//   { name: "Ajax", online: false },
// ];

// const getOfflineFriends = function (allFriends) {
//   const names = [];

//   for (const friend of allFriends) {
//     console.log(friend);

//     if (!friend.online) {
//       names.push(friend.name);
//     }
//   }

//   return names;
// };

// console.log(getOfflineFriends(friends));
