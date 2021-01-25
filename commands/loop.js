const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error");

module.exports = {
  info: {
    name: "loop",
    description: "Toggle music loop",
    usage: "loop",
    aliases: ["l"],
  },

  run: async function (client, message, args) {
    const serverQueue = message.client.queue.get(message.guild.id);
       if (serverQueue) {
            serverQueue.loop = !serverQueue.loop;
            return message.channel.send({
                embed: {
                    color: "YELLOW",
                    description: `🔁  **|**  Loop is **\`${serverQueue.loop === true ? "Etkin" : "Kapalı"}\`**`
                }
            });
        };
    return sendError("Bu sunucuda oynatılan hiçbir şey yok.", message.channel);
  },
};
