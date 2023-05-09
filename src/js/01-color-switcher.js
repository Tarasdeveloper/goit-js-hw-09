const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};

let timerId = null;

refs.startBtn.addEventListener('click', clickBtnStart);
refs.stopBtn.addEventListener('click', clickBtnStop);

function clickBtnStart() {
  timerId = setInterval(() => {
    document.body.style.background = getRandomHexColor();
  }, 1000);
  refs.startBtn.setAttribute('disabled', true);
  refs.stopBtn.removeAttribute('disabled');
}

function clickBtnStop() {
  clearInterval(timerId);
  refs.startBtn.removeAttribute('disabled');
  refs.stopBtn.setAttribute('disabled', true);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
