const refs = {
  navBoxesEl: document.getElementById('boxes'),
  navControlsEl: document.getElementById('controls'),
  navCountInput: document.querySelector('#controls>input'),
};
let sizeElement = 30;

refs.navControlsEl.addEventListener('click', onControlsActions);

function onControlsActions(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }
  const countElementsToAdd = Number(refs.navCountInput.value);

  if (countElementsToAdd < refs.navCountInput.min || countElementsToAdd > refs.navCountInput.max) {
    alert('Введено не корректное значение!');
    return;
  }

  if (event.target.hasAttribute('data-create')) {
    onCreateElements(countElementsToAdd);
  }

  if (event.target.hasAttribute('data-destroy')) {
    onDestroy();
  }
}

function onCreateElements(countElementsToAdd) {
  const elenmentsToAdd = [];
  for (let index = 0; index < countElementsToAdd; index++) {
    const element = document.createElement('div');
    element.style.width = `${sizeElement}px`;
    element.style.height = `${sizeElement}px`;
    element.style.backgroundColor = getRandomHexColor();
    elenmentsToAdd.push(element);
    sizeElement += 10;
  }
  refs.navBoxesEl.append(...elenmentsToAdd);
}

function onDestroy() {
  refs.navBoxesEl.innerHTML = '';
  sizeElement = 30;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
