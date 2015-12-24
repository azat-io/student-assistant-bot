var TelegramBot = require('node-telegram-bot-api');
var token = require('./token');
var db = require('./db');
var bot = new TelegramBot(token, {polling: true});

db.connect();

bot.on('message', function (msg) {
  var chatId = msg.chat.id;
  var messageText = msg.text;
  var lang = {
    reply_markup: JSON.stringify({
      keyboard: [
        ['🇺🇸', '🇷🇺']
      ],
      resize_keyboard: true,
      one_time_keyboard: true
    })
  };
  if (messageText == '/start') {
    bot.sendMessage(chatId, 'Hello!\n\nI\'m a Student Assistant Bot. And I want to help you in creating your own bot that will help you pass the exam. Before we begin, please choose your language.', lang);
  }
  else if (msg.text == '🇺🇸' || msg.text.toLowerCase() == 'en' || msg.text.toLowerCase() == 'eng' || msg.text.toLowerCase() == 'english') {
    console.log(db.getPhrase('Hello, how are you?'));
  }
  else if (msg.text == '🇷🇺' || msg.text.toLowerCase() == 'ru' || msg.text.toLowerCase() == 'rus' || msg.text.toLowerCase() == 'russian' || msg.text.toLowerCase() == 'русский') {
    console.log(db.getPhrase('Hello, how are you?'));
  }
  else {
    bot.sendMessage(chatId, 'You must choose your language!', lang);
  }
});
