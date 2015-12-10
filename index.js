var TelegramBot = require('node-telegram-bot-api');
var token = 'Bot token';
var bot = new TelegramBot(token, {polling: true});

bot.on('message', function (msg) {
  var chatId = msg.chat.id;
  console.log(msg);
  bot.sendMessage(chatId, "Hello!", {caption: "I'm a bot!"});
});
