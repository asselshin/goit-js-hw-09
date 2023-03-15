import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const inputField = document.querySelector('#datetime-picker');
const timer = document.querySelector('.timer');
const field = document.querySelectorAll('.field');
const value = document.querySelectorAll('.value');

timer.style.display = 'flex';
timer.style.margin = '0 -5px';

field.forEach(function (element) {
    element.style.margin = '0 5px';
});

value.forEach(function (el) {
    el.style.display = 'block';
    el.style.fontSize = '25px';
});

const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');
const btnStart = document.querySelector('[data-start]');

btnStart.disabled = true;

let timerId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      console.log(selectedDates[0]);
    
      if (selectedDates[0] < new Date()) {
          window.alert('Please choose a date in the future');
      } else {
          btnStart.disabled = false;
      };
  },
};
const fp = flatpickr(inputField, options);

btnStart.addEventListener('click', () => { 
    timerId = setInterval(timeCount, 1000);
});

function timeCount() {
    const timeDifference = fp.selectedDates[0] - new Date();
    if (timeDifference < 999) {
        clearInterval(timerId);
    };  
    const timeLeft = convertMs(timeDifference);
  
    days.textContent = addLeadingZero(timeLeft.days);
    hours.textContent = addLeadingZero(timeLeft.hours);
    minutes.textContent = addLeadingZero(timeLeft.minutes);
    seconds.textContent = addLeadingZero(timeLeft.seconds);
};        

function addLeadingZero(value) {
    value = String(value).padStart(2,"0");
   return value;
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day); // Remaining days
  const hours = Math.floor((ms % day) / hour); // Remaining hours
  const minutes = Math.floor(((ms % day) % hour) / minute); // Remaining minutes
  const seconds = Math.floor((((ms % day) % hour) % minute) / second); // Remaining seconds

  return { days, hours, minutes, seconds };
};