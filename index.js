const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true})


bot.commands = new Discord.Collection()

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
});

bot.on("message", async message => {
  if(message.author.bot) return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ")
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

if(cmd === `${prefix}ping`){
  let pinging = new Discord.RichEmbed()
   .setTitle("<:Yellow:508987752835055646> Loading...")
   .setColor("#ffff00")
   
   
   message.channel.send(pinging).then(msg => {
   
   let pinged = new Discord.RichEmbed()
   .setTitle(`<:Green:508989275790901259> Ping: ${msg.createdTimestamp - message.createdTimestamp}ms`)
   .setColor("#00cd00")
   
     msg.edit(pinged);

   })};

   if(cmd === `${prefix}av`){
    
    let avatarEmbed = new Discord.RichEmbed()
    .setTitle(`<:Blue:508989275736375299> ${message.author.username}`)
    .setImage(message.author.avatarURL)
    .setColor(`#0055ff`)
    
   message.channel.send(avatarEmbed);
   }
  });

bot.login(botconfig.token);