const PubSub = require('../helpers/pub_sub.js');

const WordCounter = function() {};

WordCounter.prototype.countWords = function (string) {
  const result = string.split(" ").filter((word) => word != '');
  return result.length;.
};

WordCounter.prototype.bindEvents  = function() {
  PubSub.subscribe("InputView:input", (event) => {
    const string = event.detail;
    const result = this.countWords(string);
    PubSub.publish("WordCounter:result", result);
  });
};

module.exports = WordCounter;
