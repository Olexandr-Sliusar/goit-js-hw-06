const refs = {
  navBoxesEl: document.getElementById('boxes'),
  navControlsEl: document.getElementById('controls'),
  navCountInput: document.querySelector('#controls>input'),
};

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
  const ElenmentsToAdd = [];
  for (let index = 0; index < countElementsToAdd; index++) {
    const element = document.createElement('div');
    element.style.width = `${30 + index * 10}px`;
    element.style.height = `${30 + index * 10}px`;
    element.style.backgroundColor = getRandomHexColor();
    ElenmentsToAdd.push(element);
  }
  refs.navBoxesEl.append(...ElenmentsToAdd);
}

function onDestroy() {
  refs.navBoxesEl.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
