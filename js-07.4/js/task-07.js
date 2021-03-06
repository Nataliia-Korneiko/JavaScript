// Задание 7
// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" />
// <br />
// <span id="text">Абракадабра!</span>

// Решение 7
const inputRef = document.querySelector("#font-size-control");
const titleRef = document.querySelector("#text");

inputRef.value = 14;

inputRef.addEventListener("input", handleInputChange);

function handleInputChange(e) {
  console.log(e.target.value);

  titleRef.style.fontSize = e.target.value + "px";
}
