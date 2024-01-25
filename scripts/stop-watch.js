const timerElem = document.querySelector('.js-timer');
const startElem = document.querySelector('.js-start');
const stopElem = document.querySelector('.js-stop');
const resetElem = document.querySelector('.js-reset');
const secondsElem = document.getElementById('seconds');
const tensElem = document.getElementById('tens');

let seconds = 0;
let tens = 0;
let interval;

startElem.addEventListener('click', () => {
  clearInterval(interval);
  interval = setInterval(() => {
    changeTimer();
  }, 10);
})

stopElem.addEventListener('click', () => {
  clearInterval(interval);
})

resetElem.addEventListener('click', () => {
  clearInterval(interval);
  tens = '00';
  seconds = '00';
  tensElem.innerHTML = tens;
  secondsElem.innerHTML = seconds;
})

function changeTimer() {
  tens++;

  if (tens < 9) {
    tensElem.innerHTML = '0' + tens;
  }

  if (tens > 9) {
    tensElem.innerHTML = tens;
  }

  if (tens > 99) {
    seconds++;
    secondsElem.innerHTML = '0' + seconds;
    tens = 0;
    tensElem.innerHTML = '0'+0;
  }

  if (seconds>9) {
    secondsElem.innerHTML = seconds;
  }
}