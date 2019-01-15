const FormView = require('./views/form_view.js');
const IsPrime = require('./models/is_prime.js');
const ResultView = require('./views/result_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const formView = new FormView();
  formView.bindEvents();

  const isPrime = new IsPrime();
  isPrime.bindEvents();

  const resultView = new ResultView(); // NEW
  resultView.bindEvents();
});
