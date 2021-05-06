module.exports = {
    name: 'ping',
    description: 'check your latency!',
    execute(message, args, pow) {
        message.reply('calculating ping...').then((resultMessage) => {
            const ping = resultMessage.createdTimestamp - message.createdTimestamp;

            resultMessage.edit(`:ping_pong: Ping! Bot latency: \`${ping}ms\`. API Latency is \`${Math.round(pow.ws.ping)}ms\`.`);
        });
    }
};