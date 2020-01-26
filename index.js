const Discord = require('discord.js')
const path = require('path')
const fs = require('fs')


const bot = new Discord.Client()
const json_path = path.join(__dirname, 'json')
const config = JSON.parse(fs.readFileSync(path.join(json_path, 'config.json')))
const twitter = JSON.parse(fs.readFileSync(path.join(json_path, 'twitter.json')))
const PREFIX = '!'

bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag}!`)
})

bot.on('message', message => {
    // If the message is "ping"
    if (message.content === 'ping') {
      // Send "pong" to the same channel
      message.channel.send('pong')
    }

    let args = message.content.substring(PREFIX.length).split(' ')
    switch(args[0]){
        case 'twitter':
            if (typeof(args[1]) === "undefined"){
                message.reply("CWAD Bot @BotCwad, https://twitter.com/botcwad")
            } 
            else if (args[1].toLowerCase() === 'api'){
                message.reply(`
                    Consumer Key: ${twitter.consumer_key}
                    Consumer Secret: ${twitter.consumer_secret}
                    Access Token Key: ${twitter.access_token_key}
                    Access Token Secret: ${twitter.access_token_secret}
                `)
            }
            else if (args[1].toLowerCase() === 'login'){
                message.reply(`
                    Email: ${twitter.email}
                    Password: ${twitter.password}
                `)
            }
    } 
})


bot.login(config.discord_bot_token)