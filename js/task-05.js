const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', event => {
  const name =
    inputEl.value === ''
      ? (outputEl.textContent = 'Anonymous')
      : (outputEl.textContent = event.currentTarget.value.trim());
});
