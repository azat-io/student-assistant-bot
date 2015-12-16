var TelegramBot = require('node-telegram-bot-api');
var token = require('./token.js');
var bot = new TelegramBot(token, {polling: true});

bot.on('message', function (msg) {
  var chatId = msg.chat.id;
  console.log(msg);
  if (msg.text == '/start') {
    var opts = {
      reply_markup: JSON.stringify({
        keyboard: [
          ['🇺🇸', '🇷🇺']
        ],
        resize_keyboard: true,
        one_time_keyboard: true
      })
    };
    bot.sendMessage(chatId, 'Hello!\n\nI\'m a Student Assistant Bot. And I want to help you in creating your own bot that will help you pass the exam. Before we begin, please choose your language.', opts);
  }
});
