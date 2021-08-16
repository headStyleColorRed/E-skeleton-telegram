const TelegramBot = require('node-telegram-bot-api');

function sendMessage(message, botId, chatId) {
  const bot = new TelegramBot(botId, { polling: false });
  
  try {
    bot.sendMessage(chatId, message)
  } catch {
    return 'Something went wrong when trying to send a Telegram notification'
  }

  return "Success sending Telegram notification"
}

module.exports = {
  sendMessage,
}