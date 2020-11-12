require('dotenv').config();


const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '$';

client.login(process.env.TOKEN);


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    
    if (msg.content.startsWith(prefix))
    {
        const [command, ...args] = msg.content.trim().substring(prefix.length).split(/\s+/);

        console.log();

    }


});
