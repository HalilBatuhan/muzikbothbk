const { MessageEmbed } = require("discord.js");

module.exports = {
  info: {
    name: "invite",
    description: "To add/invite the bot to your server",
    usage: "[invite]",
    aliases: ["inv"],
  },

  run: async function (client, message, args) {
    
    let invite = new MessageEmbed()
    .setTitle(`Invite ${client.user.username}`)
    .setDescription(`Want me in your server? Invite me today! \n\n [Invite Link](https://discord.com/api/oauth2/authorize?client_id=802070154959781929&permissions=8&redirect_uri=https%3A%2F%2Fglitch.com%2Fedit%2F%23%21%2Fjungle-orange-jupiter%3Fpath%3D.env%253A4%253A0&response_type=code&scope=bot%20applications.builds.read)`)
    .setColor("BLUE")
    return message.channel.send(invite);
  },
};
