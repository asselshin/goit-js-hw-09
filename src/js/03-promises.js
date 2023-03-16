import Notiflix from 'notiflix';

const form = document.querySelector('.form');

form.addEventListener('submit', ev => {
  ev.preventDefault();

  const { delay, step, amount } = form;
  let counter = 1;
  let delayedTime = delay.valueAsNumber;

  while (counter <= amount.value) {
    createPromise(counter, delayedTime)
      .then(value => {
        Notiflix.Notify.success(value);
      })
      .catch(error => {
        Notiflix.Notify.failure(error);
      });
    delayedTime += step.valueAsNumber;
    counter += 1;
  };
});

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
};
