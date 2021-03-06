// Задание 8 - дополнительное, выполнять не обязательно
// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

// <div id="controls">
//   <input type="number" min="0" max="100" step="1" />
//   <button type="button" data-action="render">Создать</button>
//   <button type="button" data-action="destroy">Очистить</button>
// </div>

// <div id="boxes"></div>

// Решение 8
const controlsRef = document.querySelector("#controls");
const inputRef = document.querySelector('input[type="number"]');
const renderBtnRef = document.querySelector('[data-action="render"]');
const destroyBtnRef = document.querySelector('[data-action="destroy"]');
const boxesRef = document.querySelector("#boxes");
// console.log("boxesRef :", boxesRef);

renderBtnRef.addEventListener("click", () => {
  const amount = inputRef.value;
  createBoxes(amount);
});

destroyBtnRef.addEventListener("click", () => {
  destroyBoxes();
});

let width = 30;
let height = 30;

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    let red = Math.round(Math.random() * 255);
    let green = Math.round(Math.random() * 255);
    let blue = Math.round(Math.random() * 255);

    const boxRef = document.createElement("div");
    // boxRef.style.border = "1px solid red";
    boxRef.style.width = `${width}px`;
    boxRef.style.height = `${height}px`;
    boxRef.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    // console.log("boxRef :", boxRef);
    boxesRef.append(boxRef);
    width += 10;
    height += 10;
  }
  inputRef.value = "";
}

function destroyBoxes() {
  console.dir(boxesRef);
  boxesRef.innerHTML = "";
  width = 30;
  height = 30;
  inputRef.value = "";
}
