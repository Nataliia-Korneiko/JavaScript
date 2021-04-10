'use strict';

const refs = {
  controls: document.querySelector('#tabs-1 [data-controls]'),
  panes: document.querySelector('#tabs-1 [data-panes]'),
};

refs.controls.addEventListener('click', onControlsClick);

function onControlsClick(event) {
  event.preventDefault(); // не обязательно, стоит якорь href="#apple"

  // console.log(event.target);

  if (event.target.nodeName !== 'A') {
    console.log('Кликнули не в ссылку!');
    return;
  }

  const currentActiveControlItem = refs.controls.querySelector(
    '.controls__item--active',
  );

  if (currentActiveControlItem) {
    currentActiveControlItem.classList.remove('controls__item--active');

    const paneId = getPaneId(currentActiveControlItem);
    // console.log(paneId);

    const pane = getPaneById(paneId);
    pane.classList.remove('pane--active');
  }

  const controlItem = event.target;
  controlItem.classList.add('controls__item--active');

  // console.log(controlItem);
  // console.log(controlItem.getAttribute('href').slice(1)); // apple

  const paneId = getPaneId(controlItem);
  // console.log(paneId);

  const pane = getPaneById(paneId);
  // console.log(pane);

  pane.classList.add('pane--active');
}

function getPaneId(control) {
  return control.getAttribute('href').slice(1);
}

function getPaneById(id) {
  return refs.panes.querySelector(`#${id}`);
}
