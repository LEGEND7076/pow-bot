const Discord = require('discord.js')
const { version } = require('discord.js')

module.exports = {
    name: 'info',
    description: 'Displays information and statistics about PowBot.',
    aliases: ['stats', 'information', 'statistics'],
    execute(message, args, pow) {
        const secs = Math.floor(pow.uptime / 1000) % 60;
        const mins = Math.floor(pow.uptime / (1000 * 60)) % 60;
        const hrs = Math.floor(pow.uptime / (1000 * 60 * 60)) % 24;
        const days = Math.floor(pow.uptime / (1000 * 60 * 60 * 24)) % 7;
        const uptime = `${days} days, ${hrs} hours, ${mins} minutes, and ${secs} seconds`

        const infoEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Statistics for PowBot')
            .setDescription('PowBot is a programming-themed Discord bot coded by foop#6142.')
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ size: 64 }))
            .addField("Bot Stats", [
                `**Server Count:** ${pow.guilds.cache.size}`,
                `**User Count:** ${pow.guilds.cache.reduce((sum, guild) => sum + (guild.available ? guild.memberCount : 0), 0)}`,
                `**Channel Count:** ${pow.channels.cache.size}`,
                `**Uptime:** ${uptime}`,
                `**Total Memory Usage:** ${(process.memoryUsage().heapTotal / 1024 / 1024).toFixed(2)}MB`,
                `**Memory Usage:** ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB`
            ].join('\n'))
            .addField('Bot Versions', [
                `**Node.js Version:** ${process.version}`,
                `**Discord.js Version:** v${version}`,
                `**PowBot Version:** v0.1-alpha`
            ].join('\n'))
            .addField('Links', [
                "**Source Code:** [Github Repo](https://github.com/weiyi-m/pow-bot)",
            ]);
        
        return message.channel.send(infoEmbed);
    }
}