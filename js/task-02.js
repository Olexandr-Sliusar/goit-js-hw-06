const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const navIngredientsEl = document.querySelector('#ingredients');

const elenmentsToAdd = ingredients.map(ingredient => {
  const element = document.createElement('li');
  element.textContent = ingredient;
  element.classList.add('item');
  return element;
});

navIngredientsEl.append(...elenmentsToAdd);
