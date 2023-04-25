const Discord = require("discord.js");
const client = new Discord.Client({ intents: [8] });
const { Client, MessageEmbeb, Collection, Guild } = require ("discord.js");

require("dotenv").config();
const keepAlive = require("./server.js");

client.on("ready", () => {
    const array = [
        {
            name: "Planteo City",
            type: "PLAYING"
        },
        {
            name: "Planteo City",
            type: "WATCHING"
        }
    ]

    setInterval(() => {
        function presence(){
            client.user.setPresence({
                status: "online",
                activity: array[Math.floor(Math.random() * array.length) ]
            });
        }

        presence();
    }, 10000);
    console.log("bot listo")
});

client.on('message', message => {
    if (message.content.startsWith('!embebido')) {
      const args = message.content.slice(10).split(',');
      const titulo = args[0];
      const contenido = args[1];
      const pieDePagina = args[2];
      
      const embed = new Discord.MessageEmbed()
        .setTitle(titulo)
        .setDescription(contenido)
        .setFooter(pieDePagina);
      message.channel.send(embed);
    }
});

token = "MTA5ODY3MTg1NjIzNzY4NjkwNA.GT1nz4.U7QUCP3ND1_Sl859ZjFRTr2uGQRqpXtThsPZBo";

client.login(token);