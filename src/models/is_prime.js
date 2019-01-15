// models/word_counter.js
const PubSub = require('../helpers/pub_sub.js');

const IsPrime = function() {

};

IsPrime.prototype.isPrime = function (number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
        return false;
    }
  }
  return true;
};

IsPrime.prototype.bindEvents = function () {
    PubSub.subscribe('FormView:number-submitted', (event) => {
      const inputtedNumber = event.detail;
      const result = this.isPrime(inputtedNumber);
      PubSub.publish('IsPrime:result-calculated', result);
  });
};
module.exports = IsPrime;
