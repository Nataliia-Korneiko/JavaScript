// Проверяем наличие работника на месте
// Сначала через for, потом includes

// const staff = ["Mango", "Poly", "Ajax", "Kiwi"];
// const query = "Ajax";
// let result = "Сотрудник отсутствует на работе!";

// for (const employee of staff) {
//   console.log(employee);

//   if (query === employee) {
//     result = "Сотрудник на работе!";
//     break;
//   }
// }

// console.log(result);

// -----------------------
const staff = ["Mango", "Poly", "Ajax", "Kiwi"];
const query = "Ajax";

// console.log(staff.includes("Poly")); // true

const result = staff.includes(query)
  ? "Сотрудник на работе!"
  : "Сотрудник отсутствует на работе!";

console.log(result);
