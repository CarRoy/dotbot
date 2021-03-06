const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});


bot.commands = new Discord.Collection();

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
});

bot.on("message", async message => {
  if (message.author.bot) return;

  const prefix = botconfig.prefix;
  const messageArray = message.content.split(" ");
  const cmd = messageArray[0];
  const args = messageArray.slice(1);
  const noPermissions = "You do not have the permission to use this command.";
  


  //Help command

  if (cmd === `${prefix}help`) {
    const helpEmbed = new Discord.RichEmbed()
      .setTitle(`<:Blue:508989275736375299> ${message.author.username}`)
      .setColor("#0055ff")
      .addField("**__Main:__**", "**d.ping**\nDisplays Dot's ping.\n**d.help**\nShows a list of commands for Dot.\n**d.info**\nShows bot info.")
      .addField("**__Tools:__**", "**d.av**\nDisplays your avatar.\n**d.poll**\nCreates a poll.\n**d.say**\nSays given message.\n**d.embed**\nEmbeds given message.")
      .addField("**__Bot:__**", "**d.status**\nChanges Dot's status.")
      .setFooter(`Type d.<command> to use a command.`);
    message.channel.send(helpEmbed);
  }

  //Info command

  if (cmd === `${prefix}info`) {
  
    const infoEmbed = new Discord.RichEmbed()
      .setTitle(`<:Blue:508989275736375299> Dot`)
      .addField(`**__Information:__**`, `Dot is a Discord.js bot made by me, CarRoy#0001.\nI wanted to make a Discord bot to have fun and learn with.\nDot is currently hosted on CarRoy#0001's PC.`)
      .addField(`**__Resources:__**`, `Dot uses a set of emotes and colors, these are the hex colors and emotes for them.\n<:Blue:508989275736375299> #0055FF\n<:Green:508989275790901259> #00CD00\n<:Yellow:508987752835055646> #FFFF00\n<:Red:508989275757608980> #FF0000`)
      .setColor("#0055ff");
    message.channel.send(infoEmbed);
  }

  //Embed command

  if (cmd === `${prefix}embed`) {

    const embedMessage = args.join(" ");
     
    const embedTextEmbed = new Discord.RichEmbed()
        .addField(`<:Blue:508989275736375299> ${message.author.username}`, `${embedMessage}`)
        .setColor(#0055ff);
    if (message.author.id = `315381917996548097`) {
      
      message.delete().catch;

      if (embedMessage.length <= 1) {
        const embedNoEmbed = new Discord.RichEmbed()
          .addField(`<:Red:508989275757608980> ${message.author.username}`, "Add text to your message: d.embed <text>")
          .setColor("#ff0000");
        message.channel.send(embedNoEmbed);
        return;
      }
    message.channel.send(embedTextEmbed);
    }
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
      const embedNoEmbed = new Discord.RichEmbed()
        .addField(`<:Red:508989275757608980> ${message.author.username}`, noPermissions)
        .setColor("#ff0000");
      message.channel.send(embedNoEmbed);
      return;
    }
    message.channel.send(embedTextEmbed);
  }



  //Status command

  if (cmd === `${prefix}status`) {

    const statusMessage = args.join(" ");
    const statusNoTextEmbed = new Discord.RichEmbed()
      .addField(`<:Red:508989275757608980> ${message.author.username}`, "You need to add a status to your message, use this: d.status <text>")
      .setColor('#ff0000');
    
    if (statusMessage.length <= 0) return message.channel.send(statusNoTextEmbed);
    

    //Checks if te user is me or not
    const statusNoEmbed = new Discord.RichEmbed()
      .addField(`<:Red:508989275757608980> ${message.author.username}`, noPermissions) //Tells the user they can't use the command
      .setColor('#ff0000');

    const statusYesEmbed = new Discord.RichEmbed()
      .addField(`<:Green:508989275790901259> ${message.author.username}`, `Set status to "${statusMessage}"`)
      .setColor('#00cd00');

    if (message.author.id != `315381917996548097`) {
      message.channel.send(statusNoEmbed);
      return;
    }

    //Checks if the user is me or not
    if (message.author.id = `315381917996548097`) {
      bot.user.setActivity(statusMessage, {type: `PLAYING`});
      message.channel.send(statusYesEmbed);
    }
  }
  

  //Ping command

  if (cmd === `${prefix}ping`) {
    const pinging = new Discord.RichEmbed()
      .addField("<:Yellow:508987752835055646>", "Loading...")
      .setColor("#ffff00");
  
  
    message.channel.send(pinging).then(msg => {
   
      const ping = msg.createdTimestamp - message.createdTimestamp - 100; 
      //Just let me do my thing k?
      const pinged = new Discord.RichEmbed()
        .addField(`<:Green:508989275790901259> ${message.author.username}`, `Ping: ${ping}ms`)
        .setColor("#00cd00");
   
      msg.edit(pinged);

    });}

  //Avatar command

  if (cmd === `${prefix}av`) {
    
    const avatarEmbed = new Discord.RichEmbed()
      .setTitle(`<:Blue:508989275736375299> ${message.author.username}`)
      .setImage(message.author.avatarURL)
      .setColor(`#0055ff`);
    
    message.channel.send(avatarEmbed);
  }

  


  //Say command


  if (cmd === `${prefix}say`) {

    const sayMessage = args.join(" ");

    if (message.author.id = `315381917996548097`) {

      message.delete().catch;

      if (sayMessage.length <= 1) {

        const sayNoTextEmbed = new Discord.RichEmbed()
          .addField(`<:Red:508989275757608980> ${message.author.username}`, "Add text to your message: d.say <text>")
          .setColor("#ff0000");

        message.channel.send(sayNoTextEmbed);
        return;
      }
      message.channel.send(sayMessage);
      return;
    }


    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
      const sayNoEmbed = new Discord.RichEmbed()
        .addField(`<:Red:508989275757608980> ${message.author.username}`, noPermissions)
        .setColor("#ff0000");

      message.channel.send(sayNoEmbed);
      return;
    }

    if (message.member.hasPermission("MANAGE_MESSAGES")) {
      if (sayMessage.length <= 1) {
        const sayNoTextEmbed = new Discord.RichEmbed()
          .addField(`<:Red:508989275757608980> ${message.author.username}`, "Add text to your message: d.say <text>")
          .setColor("#ff0000");
        message.channel.send(sayNoTextEmbed);
        return;
      }
      message.channel.send(sayMessage);
    
    }

    

   
    //Poll command


    if (cmd === `${prefix}poll`) {

      const pollMessage = args.join(" ");
      const pollNoEmbed = new Discord.RichEmbed()
        .addField(`<:Red:508989275757608980> ${message.author.username}`, "You need to add text to your poll, use this: `d.poll <text>`")
        .setColor("#ff0000");
      if (pollMessage.length <= 0) return message.channel.send(pollNoEmbed);
      const pollEmbed = new Discord.RichEmbed()
        .addField(`<:Blue:508989275736375299> ${message.author.username}`, `${pollMessage}`)
        .setColor(`#0055ff`);
      message.delete();
      message.channel.send(pollEmbed)
        .then(function(message) {
          message;
          setTimeout(() => {
            message.react("👎");
          }, 100);
          message.react("👍");
        });
    }}});

bot.login(botconfig.token);
