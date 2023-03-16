const btnEl = document.querySelector('.change-color');
const textEl = document.querySelector('.color');
const bodyEl = document.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const onClick = () => {
  const nameColor = getRandomHexColor();
  console.log(nameColor);

  textEl.textContent = nameColor;
  bodyEl.setAttribute('style', `background-color: ${nameColor}`);
};

btnEl.addEventListener('click', onClick);
