const Discord = require('discord.js')

module.exports = {
    name: 'help',
    description: 'Shows a comprehensive list of usable commands.',
    aliases: ['commands', 'cmds'],
    usage: `<command name>`,
    cooldown: 5,
    execute(message, args) {

        const helpEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('**List of PowBot Commands**')
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ size: 64 }))
            .addField("**General**", [
                
            ])
    }
}