// Задание 5
// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

// <input type="text" placeholder="Ваше имя?" id="name-input" />
// <h1>Привет, <span id="name-output">незнакомец</span>!</h1>

// Решение 5
const inputRef = document.querySelector("#name-input");
const titleRef = document.querySelector("#name-output");

inputRef.addEventListener("input", handleInputChange);

function handleInputChange(e) {
  // console.log(e.target.value);
  e.target.value !== ""
    ? (titleRef.textContent = e.target.value)
    : (titleRef.textContent = "незнакомец");
}
