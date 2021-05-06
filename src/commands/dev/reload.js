const fs = require('fs');
const { ownerID } = require('../../config.json');

module.exports = {
    name: 'reload',
    description: 'Reloads a command, developer-exclusive',
    args: true,
    cooldown: 0,
    execute(message, args) {
        if (message.author.id != ownerID) {
            return;
        }

        if (!args.length) {
            return message.channel.send('You have to include a command to reload.')
        }

        const commandName = args[0].toLowerCase();
        const command = message.client.commands.get(commandName) || message.client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

        if (!command) {
            return message.channel.send(`No such command found.`);
        }

        const commandFolders = fs.readdirSync('./commands');
        const folderName = commandFolders.find(folder => fs.readdirSync(`./commands/${folder}`).includes(`${commandName}.js`));

        delete require.cache[require.resolve(`../${folderName}/${command.name}.js`)];

        try {
            const newCommand = require(`../${folderName}/${command.name}.js`);
            message.client.commands.set(newCommand.name, newCommand);
        }
        catch (error) {
            console.error(error);
            message.channel.send(`There was an error while reloading a command \`${command.name}\`:\n\`${error.message}\``);
        }

        message.channel.send(`Command \`${command.name}\` was reloaded.`);

    },
};