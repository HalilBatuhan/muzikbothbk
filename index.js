const prefix = process.env.PREFIX;
const fs = require("fs");
const { Collection, Client } = require("discord.js");

const client = new Client();//youtube.com/NoblesYT
client.commands = new Collection();//youtube.com/NoblesYT
client.queue = new Map()


//Loading Events
fs.readdir(__dirname + "/events/", (err, files) => {//youtube.com/NoblesYT
  if (err) return console.error(err);
  files.forEach((file) => {
    const event = require(__dirname + `/events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));//youtube.com/NoblesYT
    console.log("Event Yükleniyor: "+eventName)
  });
});

//Loading Commands
fs.readdir("./commands/", (err, files) => {//youtube.com/NoblesYT
  if (err) return console.error(err);
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);//youtube.com/NoblesYT
    console.log("Komut Yükleniyor: "+commandName)
  });
});

//youtube.com/NoblesYT
client.login(process.env.TOKEN)
