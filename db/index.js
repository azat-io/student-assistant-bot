let phrases;
const lang = 'ru';

exports.connect = () => {
  if (lang == 'ru') {
    phrases = require('../lib/ru');
  }
  if (lang == 'uk') {
    phrases = require('../lib/uk');
  }
};

exports.getPhrase = name => {
  if (!phrases[name]) {
    throw new Error(`There is no phrase: ${name}`);
  }
  return phrases[name];
};
