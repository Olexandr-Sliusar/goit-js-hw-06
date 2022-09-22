let counterValue = 0;

const counterEl = document.querySelector('#counter');
const counterValueEl = counterEl.querySelector('#value');

counterEl.addEventListener('click', counterActions);

function counterActions(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }

  const action = event.target.dataset.action;

  if (action === 'decrement') counterValue -= 1;
  if (action === 'increment') counterValue += 1;

  counterValueEl.textContent = counterValue;
}
