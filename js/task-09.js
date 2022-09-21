const refs = {
  changeColorBtn: document.querySelector('.change-color'),
  outputBgColorEl: document.querySelector('.widget .color'),
};

refs.changeColorBtn.addEventListener('click', () => {
  const selectedColor = getRandomHexColor();
  refs.outputBgColorEl.textContent = selectedColor;
  document.body.style.backgroundColor = selectedColor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
