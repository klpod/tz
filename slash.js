const Discord = require('discord.js');
const config = require('./config.js');

module.exports = (client) => {
    client.on('message', async message => {
        if (message.content === '!setup') {
            if (!message.member.hasPermission('ADMINISTRATOR')) {
                return message.reply('❤ ليس لديك صلاحية لاستخدام هذا الأمر');
            }
            // تنفيذ أمر setup
            message.reply('جاري الإعداد...');
        }

        if (message.content === '!sendpanel') {
            if (!message.member.hasPermission('ADMINISTRATOR')) {
                return message.reply('❤ ليس لديك صلاحية لاستخدام هذا الأمر');
            }
            // تنفيذ أمر sendpanel
            global.resellerSystem.sendPanel(message);
        }
    });
};