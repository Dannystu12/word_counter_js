const PubSub = require('../helpers/pub_sub.js');

const ResultView = function() {

};

ResultView.prototype.updateView = function (result) {
  const resultElement = document.querySelector('#result');
  resultElement.textContent = result;
};

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('WordCounter:result', (event) => {
    this.updateView(event.detail);
  });
};

module.exports = ResultView;
