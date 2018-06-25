const WordCounter = {};

WordCounter.prototype.countWords = function (string) {
  return string.match(/\b(\w+\W+)/g).length;
};

module.exports = WordCounter;
