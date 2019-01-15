// result_view.js
const PubSub = require('../helpers/pub_sub.js');
const ResultView = function () {

};

ResultView.prototype.displayResult = function (result) {
  const resultElement = document.querySelector('#result');
  resultElement.textContent = `${result}`;
};
ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('IsPrime:result-calculated', (event) => {
    const isPrime = event.detail;
    if (event.detail) {
      this.displayResult('This is a prime number!');
    } else {
      this.displayResult('This is not a prime number!');
    }
  });
};
module.exports = ResultView;
