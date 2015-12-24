var phrases;

exports.connect = function() {
  phrases = require('../lib/ru.json');
};

exports.getPhrase = function(name) {
  if (!phrases[name]) {
    throw new Error('There is no phrase: ' + name);
  }
  return phrases[name];
};
