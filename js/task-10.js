const numberEl = document.querySelector('input');
const createBtnEl = document.querySelector('[data-create]');
const destroyBtnEl = document.querySelector('[data-destroy]');
const divEl = document.querySelector('#boxes');

createBtnEl.addEventListener('click', onCreateBoxes);
destroyBtnEl.addEventListener('click', onDestroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxes = [];
  let width = 30;
  let height = 30;

  for (let i = 0; i < amount; i += 1) {
    const color = getRandomHexColor();
    const box = `<div style="width:${width}px; height:${height}px; background-color:${color};"></div>`;
    width += 10;
    height += 10;

    boxes.push(box);
  }

  const markup = boxes.join('');
  divEl.insertAdjacentHTML('afterbegin', markup);
}

function onCreateBoxes() {
  const number = numberEl.value;
  createBoxes(number);
}

function onDestroyBoxes() {
  divEl.innerHTML = '';
  numberEl.value = '';
}
