const refs = {
  validationInput: document.querySelector('#validation-input'),
};

refs.validationInput.addEventListener('blur', onValidationInputBlur);

function onValidationInputBlur(event) {
  const validLength = Number(event.target.dataset.length);
  const currentLength = event.currentTarget.value.length;

  if (currentLength !== validLength) {
    refs.validationInput.classList.remove('valid');
    refs.validationInput.classList.add('invalid');
    return;
  }

  refs.validationInput.classList.remove('invalid');
  refs.validationInput.classList.add('valid');
}
