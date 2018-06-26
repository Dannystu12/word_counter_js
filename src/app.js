const WordCounter = require('./models/word_counter.js');
const InputView = require('./views/input_view.js');
const ResultView = require('./views/result_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const wordCounter = new WordCounter();
  wordCounter.bindEvents();

  const inputView = new InputView();
  inputView.bindEvents();

  const resultView = new ResultView();
  resultView.bindEvents();
});
