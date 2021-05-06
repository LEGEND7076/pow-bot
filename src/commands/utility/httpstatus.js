const Discord = require('discord.js');

module.exports = {
    name: 'httpstatus',
    description: 'HTTP status codes explained with adorable cat images.',
    usage: '<status code>',
    aliases: ['http', 'httpcat'],
    execute(message, args) {
        const status_codes = ['100', '101', '102', '200', '201', '202', '204', '206', '207', '300', '301', '302', '303', '304', '305', '307', '308', '400', '401', '402', '403', '404', '405', '406', '408', '409', '410', '411', '412', '413', '414', '415', '416', '417', '418', '420', '421', '422', '423', '424', '425', '426', '429', '431', '444', '450', '451', '499', '500', '501', '502', '503', '504', '506', '507', '508', '509', '510', '511', '599']

        if (!args) {
            return message.reply('you need to include a proper HTTP status code.');
        }

        if (!status_codes.includes(args[0])) {
            return message.reply('that\'s an invalid HTTP status code.')
        }

        const httpEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('HTTP Cat')
            .setAuthor('http.cat', 'https://http.cat/favicon.png')
            .setImage(`https://http.cat/${args[0]}.jpg`)

        return message.channel.send(httpEmbed);
    }
}