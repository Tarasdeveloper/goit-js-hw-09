import flatpickr from 'flatpickr';
// Дополнительный импорт стилей
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const refs = {
  inputData: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('[data-start]'),
  valueDays: document.querySelector('[data-days]'),
  valueHours: document.querySelector('[data-hours]'),
  valueMinutes: document.querySelector('[data-minutes]'),
  valueSeconds: document.querySelector('[data-seconds]'),
};

refs.startBtn.setAttribute('disabled', true);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < Date.now()) {
      refs.startBtn.setAttribute('disabled', true);
      Notiflix.Notify.failure('Please choose a date in the future');
      return;
    }

    refs.startBtn.removeAttribute('disabled');

    refs.startBtn.addEventListener('click', onClickStartBtn);

    function onClickStartBtn() {
      refs.startBtn.setAttribute('disabled', true);

      const timeWork = setInterval(() => {
        const differenceTime = selectedDates[0] - Date.now();
        const timeComp = convertMs(differenceTime);
        showTime(timeComp);
        if (differenceTime < 1000) {
          Notiflix.Notify.success('Время закончилось!');
          clearInterval(timeWork);
        }
      }, 1000);
    }
  },
};

flatpickr(refs.inputData, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

function showTime({ days, hours, minutes, seconds }) {
  refs.valueDays.textContent = `${days}`;
  refs.valueHours.textContent = `${hours}`;
  refs.valueMinutes.textContent = `${minutes}`;
  refs.valueSeconds.textContent = `${seconds}`;
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
