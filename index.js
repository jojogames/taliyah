const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready', function() { 
    bot.user.setActivity("Command: *help");
    console.log("Connectedç");
});

bot.login("NTUwMjkzMDc0MDYwNzcxMzI5.D1gWzQ.atoSuFNsjg79id97C8skWBDbow8");


bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.send("Liste des commandes: \n - *help");
    }

    if (message.content === "Salut"){
        message.reply("Bien le bonjour :)");
        console.log("Commande Salut effectué");
    }
});
