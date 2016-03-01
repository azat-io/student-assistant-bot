import TelegramBot from 'node-telegram-bot-api'
import token from './token'
import db from './db'

const bot = new TelegramBot(token, {polling: true});

db.connect();

bot.on('message', msg => {
  const chatId = msg.chat.id;
  const messageText = msg.text;
  const selectLang = {
    reply_markup: JSON.stringify({
      keyboard: [
        ['🇺🇸', '🇷🇺']
      ],
      resize_keyboard: true,
      one_time_keyboard: true
    })
  };

  if (messageText == '/start') {
    bot.sendMessage(
      chatId,
      'Hello!\n\nI\'m a Student Assistant Bot. And I want to help you in creating your own bot that will help you pass the exam. Before we begin, please choose your language.',
      selectLang
    );
  }

  else if (msg.text == '🇺🇸' || msg.text.toLowerCase() == 'en' || msg.text.toLowerCase() == 'eng' || msg.text.toLowerCase() == 'english') {
    var lang = 'en';
    console.log(db.getPhrase('Hello, how are you?'));
  }

  else if (msg.text == '🇷🇺' || msg.text.toLowerCase() == 'ru' || msg.text.toLowerCase() == 'rus' || msg.text.toLowerCase() == 'russian' || msg.text.toLowerCase() == 'русский') {
    var lang = 'ru';
    console.log(db.getPhrase('Hello, how are you?'));
  }

  else {
    bot.sendMessage(chatId, 'You must choose your language!', selectLang);
  }
});
