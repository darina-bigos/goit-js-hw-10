import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const { delay, state } = event.target.elements;

  const delayValue = +delay.value;
  const stateValue = state.value;

  setTimeout(() => {
    const promise = new Promise((resolve, reject) => {
      if (stateValue === 'fulfilled') {
        resolve(delayValue);
      } else {
        reject(delayValue);
      }
    });

    promise
      .then(delay => {
        iziToast.success({
          title: '✅',
          message: `Fulfilled promise in ${delayValue}ms`,
          position: 'topRight',
        });
      })
      .catch(delay => {
        iziToast.error({
          title: '❌',
          message: ` Rejected promise in ${delayValue}ms`,
          position: 'topRight',
        });
      });
  }, delayValue);

  form.reset();
});
