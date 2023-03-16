const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
const listEl = document.querySelector('#ingredients');

const arr = ingredients.map(ingredient => {
  const elementEl = document.createElement('li');

  elementEl.textContent = `${ingredient}`;
  elementEl.classList.add('item');

  return elementEl;
});

listEl.prepend(...arr);
