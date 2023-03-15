const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
const body = document.body;
let timerId = null;

btnStart.addEventListener('click', () => {
    timerId = setInterval(bodyColor, 1000);
    btnStart.disabled = true;
});

btnStop.addEventListener('click', () => {
    clearInterval(timerId);
    btnStart.disabled = false;
 });

function bodyColor() {
    body.style.backgroundColor = getRandomHexColor();
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
