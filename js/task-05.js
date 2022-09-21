const refs = {
  nameInput: document.querySelector('#name-input'),
  nameOutput: document.querySelector('#name-output'),
};
refs.nameInput.addEventListener('input', onInputChange);

function onInputChange(event) {
  refs.nameOutput.textContent =
    event.currentTarget.value === '' ? 'Anonymous' : event.currentTarget.value;
}
