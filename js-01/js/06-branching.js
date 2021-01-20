// Операторы ветвеления

// console.log("before");
// if (5 > 15) {
//   // тело
//   console.log("inside"); // если true, тело выполниться
// }

// console.log("after");

// -----------------------
// if...else и баланс на счету
// let balance = 10000;
// const payment = 2000;

// console.log(
//   `Общая стоимость заказа ${payment} кредитов. Проверяем кол-во доступных средств на счету`
// );

// if (balance >= payment) {
//   // balance -= payment; или:
//   balance = balance - payment;

//   console.log("Все хорошо! Снимаем деньги, спасибо за покупку!");
//   console.log(`На счету осталось ${balance} кредитов`);
// } else {
//   console.log("На счету недостаточно средств для проведения операции!");
// }

// console.log("Операция завершена!");

// -----------------------
// if...else if и скидка
// const totalExpenses = 20000;
// let payment = 500;
// let discount = 0;

// if (totalExpenses >= 100 && totalExpenses < 1000) {
//   discount = 0.02;
//   console.log("Бронзовый партнер, скидка 2%");
// } else if (totalExpenses >= 1000 && totalExpenses < 5000) {
//   discount = 0.05;
//   console.log("Серебрянный партнер, скидка 5%");
// } else if (totalExpenses >= 5000) {
//   discount = 0.1;
//   console.log("Золотой партнер, скидка 10%");
// } else {
//   console.log("У вас еще нет партнерской скидки");
// }

// payment = payment - payment * discount;
// console.log(payment);

// console.log(
//   `Оформляем заказ на сумму ${payment} со скидкой ${discount * 100}%`
// );

// -----------------------
// Область видимости
// const name = "Mango";
// console.log(name);

// if (true) {
//   console.log(name);
// }

// -----------------------
let discount = 0;

if (true) {
  discount = 10;
  const age = 5;
}

console.log(discount);
console.log(age); // age is not defined
