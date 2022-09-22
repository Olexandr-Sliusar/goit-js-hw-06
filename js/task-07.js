const refs = {
  fontSizeControlEl: document.querySelector('#font-size-control'),
  outputTextEl: document.querySelector('#text'),
};
refs.outputTextEl.style.fontSize = `${refs.fontSizeControlEl.value}px`;

refs.fontSizeControlEl.addEventListener('input', onInputChange);

function onInputChange(event) {
  refs.outputTextEl.style.fontSize = `${event.target.value}px`;
}
