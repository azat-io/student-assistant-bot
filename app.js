var TelegramBot = require('node-telegram-bot-api');
var token = require('./token.js');
var bot = new TelegramBot(token, {polling: true});

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
  if (msg.text == '🇺🇸' || msg.text.toLowerCase() == 'en' || msg.text.toLowerCase() == 'eng' || msg.text.toLowerCase() == 'english') {
    bot.sendMessage(chatId, 'English');
  }
  if (msg.text == '🇷🇺' || msg.text.toLowerCase() == 'ru' || msg.text.toLowerCase() == 'rus' || msg.text.toLowerCase() == 'russian' || msg.text.toLowerCase() == 'русский') {
    bot.sendMessage(chatId, 'Russian');
  }
});
