const PubSub = require('../helpers/pub_sub.js');
const InputView = function() {};

InputView.prototype.bindEvents = function () {
  const input = document.querySelector('#input');

  input.addEventListener('input', (event) => {
    PubSub.publish('InputView:input', event.target.value);
  });
};

module.exports = InputView;
