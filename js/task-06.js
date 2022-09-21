const refs = {
  validationInput: document.querySelector('#validation-input'),
};

refs.validationInput.addEventListener('blur', onValidationInputBlur);

function onValidationInputBlur(event) {
  const maxLength = event.target.dataset.length;
  const currentLength = event.currentTarget.value.length;

  if (currentLength >= maxLength || currentLength < 1) {
    refs.validationInput.classList.remove('valid');
    refs.validationInput.classList.add('invalid');
    return;
  }
  refs.validationInput.classList.remove('invalid');
  refs.validationInput.classList.add('valid');
}
