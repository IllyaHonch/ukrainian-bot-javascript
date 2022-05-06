const Discord = require("discord.js");
const config = require("./config.json");
const { joinVoiceChannel } = require('@discordjs/voice');

const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});

const prefix = "b; ";

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))
for(const file of commandFiles){
    const command = require(`./commands/${file}`)

    client.commands.set(command.name, command)
}

client.once('ready', () => {
 console.log('Ukrainian Bot is ready!');
});
client.once('reconnecting', () => {
 console.log('Reconnecting!');
});
client.once('disconnect', () => {
 console.log('Disconnect!');
});

client.on('message', message => { 
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    } else if(command === 'clear'){
        client.commands.get('clear').execute(message, args);
    } else if(command === 'play'){
        client.commands.get('play').execute(message, args);  
    } else if(command === 'leave'){
        client.commands.get('leave').execute(message, args);  
    } else if(command === 'kick'){
        client.commands.get('kick').execute(message,args);
    } else if(command === 'ban'){
        client.commands.get('ban').execute(message,args);
    } else if(command === 'mute'){
        client.commands.get('mute').execute(message,args);
    } else if(command === 'addAdminRole'){
        client.commands.get('addAdminRole').execute(message,args);
    } else if(command === 'help'){
        client.commands.get('help');
    }
});

client.login(config.BOT_TOKEN);
