const refs = {
  fontSizeControlEl: document.querySelector('#font-size-control'),
  OutputTextEl: document.querySelector('#text'),
};
refs.OutputTextEl.style.fontSize = `${refs.fontSizeControlEl.value}px`;

refs.fontSizeControlEl.addEventListener('input', onInputChange);

function onInputChange(event) {
  refs.OutputTextEl.style.fontSize = `${event.target.value}px`;
}
