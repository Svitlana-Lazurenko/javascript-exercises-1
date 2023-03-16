const inputEl = document.querySelector('#validation-input');

const onBlur = event => {
  const dataLength = event.currentTarget.dataset.length;
  const valueLength = event.currentTarget.value.trim().length;

  if (valueLength == dataLength) {
    event.currentTarget.classList.add('valid');
    event.currentTarget.classList.remove('invalid');
  } else {
    event.currentTarget.classList.add('invalid');
    event.currentTarget.classList.remove('valid');
  }
};

inputEl.addEventListener('blur', onBlur);
