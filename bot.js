const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://fldora.glitch.me/`);
}, 280000);

// كل البكجات الي ممكن تحتجها في اي بوت 
const { Client, RichEmbed } = require("discord.js");
var { Util } = require('discord.js');
const {TOKEN, YT_API_KEY, prefix, devs} = require('./config')
const client = new Client({ disableEveryone: true})
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const Canvas = require("canvas");
const convert = require("hh-mm-ss")
const fetchVideoInfo = require("youtube-info");
const botversion = require('./package.json').version;
const simpleytapi = require('simple-youtube-api')
const moment = require("moment");
const fs = require('fs');
const util = require("util")
const gif = require("gif-search");
const opus = require("node-opus");
const ms = require("ms");
const jimp = require("jimp");
const { get } = require('snekfetch');
const guild = require('guild');
const dateFormat = require('dateformat');//npm i dateformat
const YouTube = require('simple-youtube-api');
const youtube = new YouTube('AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8');
const hastebins = require('hastebin-gen');
const getYoutubeID = require('get-youtube-id');
const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";
const pretty = require("pretty-ms");
client.login(TOKEN);
const queue = new Map();
var table = require('table').table
const Discord = require('discord.js');
client.on('ready', () => { 
  console.log(`Logged in as ${client.user.tag}!`);
var prefix = "$"
});
 

 //كود للتجربة 


console.log("==================================")
console.log("1")
console.log("2")
console.log("3")
console.log("=========> Bot Online <=========")
console.log("========> TestBot <========")
console.log("=======> Token Bot **** <=======")
console.log("3")
console.log("2")
console.log("1")
console.log("====================================")
console.log("Bot Online 24/7");




client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : iiLord_YT...?? ..#0061 `);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : iiLord_YT...?? ..#0061  ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`𝑭𝑳𝑶𝑹𝑰𝑫𝑨`,"http://twitch.tv/S-F")
client.user.setStatus("dnd")
});





client.on("message", message => {
    if (message.content.match(/([A-Z0-9]|-|_){24}\.([A-Z0-9]|-|_){6}\.([A-Z0-9]|-|_){27}|mfa\.([A-Z0-9]|-|_){84}/gi)) {
        if(!message.guild.members.get(client.user.id).hasPermission('MANAGE_MESSAGES')) return message.channel.send('**I need Permission \`MANAGE_MESSAGE\`To delete Tokens**')
        message.delete();
        message.reply(`مخك وين ترسل التوكن لحول`);
        return;
    }
    if(message.channel.type === "dm"){
    if (message.content.match(/([A-Z0-9]|-|_){24}\.([A-Z0-9]|-|_){6}\.([A-Z0-9]|-|_){27}|mfa\.([A-Z0-9]|-|_){84}/gi)) {
  
        message.reply(`مخك وين ترسل التوكن لحول`);
        return;
    }
}
});




client.on("message", function(message) {
  if (message.author.bot) return;
  if (message.content.indexOf(prefix) !== 0) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
 
  if (command === "del") {
    message.channel.send("اختر الروم الذي تريد حذفه")
      .then(() => {
        message.channel.awaitMessages(res => res.author.id == message.author.id , {
        max: 1,
        time: 30000,
        errors: ['time']
      })
        .then((collected) => {
          let mentionMessage = collected.first();
          let channel = mentionMessage.mentions.channels.first();
          mentionMessage.channel.send("اختر الوقت الذي تريده:\n[1] = ثواني\n[2] = دقائق\n[3] = ساعه")
            .then(function(botMessage) {
              console.log(botMessage)
              botMessage.react("1⃣")
                .then(() => botMessage.react("2⃣") )
                .then(() => botMessage.react("3⃣") )
                .then(() => {
                  let filter = (reaction, user) => user.id === message.author.id
                  botMessage.awaitReactions(filter, {
                    max: 1,
                    time: 30000,
                    errors: ['time']
                  })
                    .then(collected => {
                      var reaction = collected.first();              
                      if (reaction._emoji.name == "1⃣") {
                        message.channel.send("اكتب عدد الثواني")
                          .then(() => {
                            message.channel.awaitMessages(res => res.author.id == message.author.id , {
                              max: 1,
                              time: 30000,
                              errors: ['time']
                            })
                              .then((collected1) => {
                                let content = collected1.first().content;
                                message.channel.send(" سوف يتم حذف الروم بعد انتهاء الوقت")
                                setTimeout(function() {
                                  channel.delete()
                                  message.channel.send(channel.name + " تم حذف روم")
                                }, (1000*parseInt(content)))
                              }).catch(console.error)
                            }).catch(console.error)
                        } else if (reaction._emoji.name == "2⃣") {
                          message.channel.send("اكتب عدد الدقائق")
                            .then(() => {
                              message.channel.awaitMessages(res => res.author.id == message.author.id , {
                                max: 1,
                                time: 30000,
                                errors: ['time']
                            })
                              .then((collected2) => {
                                let content = collected2.first().content;
                                message.channel.send(" سوف يتم حذف الروم بعد انتهاء الوقت")
                                setTimeout(function() {
                                  channel.delete()
                                  message.channel.send(channel.name + "  تم حذف روم")
                                }, (60000*parseInt(content)))
                              }).catch(console.error)
                          }).catch(console.error)
                        } else if(reaction._emoji.name == "3⃣") {
                          message.channel.send("اكتب عدد الساعات")
                            .then(() => {
                              message.channel.awaitMessages(res => res.author.id == message.author.id , {
                                max: 1,
                                time: 30000,
                                errors: ['time']
                              })
                                .then((collected3) => {
                                  let content = collected3.first().content;
                                  message.channel.send(" سوف يتم حذف الروم بعد انتهاء الوقت")
                                  setTimeout(function() {
                                    channel.delete()
                                    message.channel.send(channel.name + " تم حذف روم")
                                  }, (3600000*parseInt(content)))
                                }).catch(console.error)
                            }).catch(console.error)
                        }
                      }).catch(console.error);
                  }).catch(console.error)
              }).catch(console.error);
          }).catch(console.error);
      });
  }
});








client.on('message', message => {
  if(message.content.split(' ')[0] == `${prefix}ban`){
  if(!message.guild || message.author.bot) return undefined;
      if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('You don\'t have permission.');
      if(!message.guild.member(client.user).hasPermission('BAN_MEMBERS')) return message.channel.send('I don\'t have permission.');
      let args = message.content.split(" ").slice(1);
      let user = message.guild.members.get(message.content.split(' ')[1]) || message.mentions.members.first();
      let reason = message.content.split(" ").slice(2).join(" ");
      if(!user) return message.channel.send(`***• | Usage*** $ban \`\`@Name\`\` reason`);
      if(!reason) reason = 'No reason provided.';
      if(user.user.id === message.author.id) return message.channel.send('You can\'t ban yourself!');
      if(message.guild.member(user.user).highestRole.position >= message.guild.member(message.member).highestRole.position) return message.channel.send(`You can't ban **${user.user.tag}** because his role highest than your role!`);
      if(message.guild.member(user.user).highestRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`I can't ban **${user.user.tag}** because his role highest than my role!`);
      if(message.guild.member(user.user).hasPermission('MANAGE_GUILD') || user.user.id == message.guild.owner.id) return message.channel.send(`You can't ban **${user.user.tag}** because he have Administration permissions!`);
      if(!message.guild.member(user.user).bannable) return message.channel.send(`I can't ban **${user.user.tag}**.`);
      message.guild.member(user).ban(reason, user);
      message.channel.send(`Done :+1:, I Banned ${user.user.username} from the server!\nReason: \`\`${reason}\`\``);
    }
});








let room = "589830810786594816"

client.on("guildMemberAdd", member => {
    let guild = client.channels.get(room).guild.id

    if(member.guild.id != guild) return;
    client.channels.get(room).setName("Welcome "+member.user.username).then(m=> { setTimeout(() => {
        client.channels.get(room).setName(member.guild.name+" - "+member.guild.members.size)
    }, 3000)})
} )

client.on("guildMemberRemove", member => {
    let guild = client.channels.get(room).guild.id

    if(member.guild.id != guild) return;
    client.channels.get(room).setName("Member Left :(").then(m=> { setTimeout(() => {
        client.channels.get(room).setName(member.guild.name+" - "+member.guild.members.size)
    }, 3000)})
})

client.on("voiceStateUpdate" , (oldMember, newMember) => {
    let guild = client.channels.get(room).guild.id

    if(oldMember.guild.id != guild) return;
    let newUserChannel = newMember.voiceChannel
  let oldUserChannel = oldMember.voiceChannel
  if(oldUserChannel === undefined && newUserChannel !== undefined) {
        client.channels.get(room).setName("Hi, "+oldMember.user.username).then(m=> { setTimeout(() => {
            client.channels.get(room).setName(oldMember.guild.name+" - "+oldMember.guild.members.size)
            }, 3000)})
  } else if(newUserChannel === undefined){
        client.channels.get(room).setName("Bye, "+oldMember.user.username).then(m=> { setTimeout(() => {
            client.channels.get(room).setName(oldMember.guild.name+" - "+oldMember.guild.members.size)
        }, 3000)})
  }
} )





client.on('message', message => {
  if(message.content.split(' ')[0] == `${prefix}kick`){
  if(!message.guild || message.author.bot) return undefined;
      if(!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send(':no_entry: | You dont have **KICK_MEMBERS** Permission!');
      if(!message.guild.member(client.user).hasPermission('KICK_MEMBERS')) return message.channel.send(':no_entry: | I dont have **KICK_MEMBERS** Permission!');
      let args = message.content.split(" ").slice(1);
      let user = message.guild.members.get(message.content.split(' ')[1]) || message.mentions.members.first();
      let reason = message.content.split(" ").slice(2).join(" ");
      if(!user) return message.channel.send("**• | Usage** $kick \`\`@Name\`\` reason");
      if(!reason) reason = 'No reason provided.';
      if(user.user.id === message.author.id) return message.channel.send(':no_entry: | Why you want kick **Your Self** ?');
      if(user.user.id === message.guild.owner.id) return message.channel.send(':no_entry: | Nice try dude \:D');
      if(message.guild.member(user.user).highestRole.position >= message.guild.member(message.member).highestRole.position) return message.channel.send(`:no_entry: | You cant give **${user.user.username}** Kick because his role highest than your role!`);
      if(message.guild.member(user.user).highestRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`:no_entry: | I cant give **${user.user.username}** Kick because his role highest than my role!`);
      if(!message.guild.member(user.user).kickable) return message.channel.send(`:no_entry: | I cant give **${user.user.username}** Kick.`);
      if(message.guild.member(user.user).hasPermission('MANAGE_GUILD')) return message.channel.send(`:no_entry: | You cant give **${user.user.username}** Kick because he have Administration permissions!`);
      message.guild.member(user).kick(reason, user);
      message.channel.send(`:white_check_mark: | Successfully \`\`KICKED\`\` ${user.user.username} from the server! :airplane: \`\`${reason}\`\``);
    }
});







client.on("message", message => {
if(message.content.startsWith(prefix + "setnick")){
if(message.author.bot || message.channel.type == "dm" || !message.member.hasPermission("MANAGE_NICKNAMES") || !message.guild.member(client.user).hasPermission("MANAGE_NICKNAMES")) return;
var user = message.mentions.members.first();
var args = message.content.split(" ").slice(2);
var nick = args.join(" ");
if(!user || !args) return message.channel.send(`**• | Usage:** ${prefix}setnick \`\`@Name\`\` nickname`);
message.guild.member(user.user).setNickname(`${nick}`);
message.channel.send(`Successfully changed **${user}** nickname to **${nick}**`);
}
});






client.on('message' , message => {
      if(message.author.bot) return;
     
      if(message.content.startsWith(prefix + "bc")) {
        if (!message.member.hasPermission("ADMINISTRATOR"))  return;
        let args = message.content.split(" ").slice(2);
     var codes = args.join(' ')
       
        if(!codes) {
          message.channel.send("قم بكتابة الرسالة | `$rolebc role message`")
            return;
        }
     
     
              var role = message.mentions.roles.first();
                if(!role) {
                  message.reply("لا توجد رتبة بهذا الاسم")
                    return;
                }
            message.guild.members.filter(m => m.roles.get(role.id)).forEach(n => {
              n.send(`${codes}`)
            })
            message.channel.send(`لقد تم ارسال هذه الرسالة الى ${message.guild.members.filter(m => m.roles.get(role.id)).size} عضو`)
        }
    });








client.on("guildMemberAdd", member => {
  client.channels.find('id', '588287802849099778').send(`**Welcome TO  𝑭𝑳𝑶𝑹𝑰𝑫𝑨 𝑪𝑳𝑼𝑩:beers: :beer:  : [ ${member} ]**`)
});





client.on("message", msg=>{
if(msg.content.startsWith(`${prefix}setRole`)){
if(!msg.member.hasPermission("ADMINISTRATOR")) return msg.reply("you don't have permission").then(s => {s.delete(1600);})
msg.reply("منشن الروم الي تبي فيه التفعيل").then(msgs=>{
  const filter = response => response.author.id === msg.author.id;
  msg.channel.awaitMessages(filter, { maxMatches: 1, time: 30000, errors: ['time'] })
  .then( collected =>{
    msg.delete();
    let idC = msg.guild.channels.find(c=>c.id == collected.first().mentions.channels.first().id)
    if(!idC) return msgs.edit("لم اجد الروم");
     idC = idC.id;
     msgs.edit(`${msg.author}, ادخل الايموجي الذي تريدة للتفعيل`)
const filter = response => response.author.id === msg.author.id;
msg.channel.awaitMessages(filter, { maxMatches: 1, time: 30000, errors: ['time'] })
.then( collected =>{
if(!emojiss.hasEmoji(collected.first().mentions._content)) return msgs.edit("ادخل ايموجي صحيح !");
newemoji = collected.first().mentions._content;
msg.delete();
msgs.edit(`${msg.author}, منشن للرتبة الذي تريدها`)
const filter = response => response.author.id === msg.author.id;
msg.channel.awaitMessages(filter, { maxMatches: 1, time: 30000, errors: ['time'] })
.then( collected =>{
let roleW = collected.first().mentions.roles.first()
if(!roleW) {
  let embed = new Discord.RichEmbed()
  .setColor("#42f4f4")
  .setTitle(`:x: - منشن الرتبة `);
  msg.reply(embed).then( z => z.delete(3000)); return
};
let role = msg.guild.roles.find(`name`, roleW.name);
if(!role) {
  let embed = new Discord.RichEmbed()
  .setColor("#42f4f4")
  .setTitle(`:x: - Could't find \`${roleW.name}\` role.`);
msg.reply(embed).then( msgs => msgs.delete(3000));
return
}
roleNew = role;
msgs.edit(`${msg.author}, ادخل النص الذي تريدة`)
const filter = response => response.author.id === msg.author.id;
msg.channel.awaitMessages(filter, { maxMatches: 1, time: 30000, errors: ['time'] })
.then( collected =>{
stringNew = collected.first().mentions._content;
let channel = msg.guild.channels.get(idC);
if(!channel) {
  let embed = new Discord.RichEmbed()
  .setColor("#42f4f4")
  .setTitle(`:x: - Could't find \`${idC}\` Channel.`);
msg.reply(embed).then( msgs => msgs.delete(3000));
return
}
channel.bulkDelete(100)
channel.send(`@here || @everyone
${msg.guild.name}© :arrow_down:
 
${stringNew}
`).then( msgA =>{
msgA.react(newemoji).then(()=>{
  const Ac = (reaction, user) => reaction.emoji.name === newemoji && !user.bot;
  const Acc = msgA.createReactionCollector(Ac, {time: 120000});
  Acc.on("collect", r=>{
  let member = msg.guild.members.get(r.users.last().id);
  if(!member) return;
  r.remove(member.user);
if(member.roles.find(r=>r.name == roleNew.name)) return;
    member.addRole(roleNew);
  channel.send(`${member.user}, تم تفعيلك`).then(z => z.delete(1500));
})})})
}).catch(e => {console.log(e.message)});  
}).catch(e => {console.log(e.message)});
}).catch(e => {console.log(e.message)});
}).catch(e => {console.log(e.message)});
})
///
}});









client.on('typingStart', (ch, user) => {
    if(user.presence.status === 'offline') {
        
        ch.send(`${user} هاهاهاا , كشفتك وانت تكتب ي اوف لاين`)
        .then(msg => {
            msg.delete(10000)
        })
    }
})








client.on('message', message => {
    if(message.content.startsWith(prefix + "antispread off")) {
        if(!message.channel.guild) return message.reply('**This Command Only For Servers**');
        if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );
spread[message.guild.id] = {
onoff: 'Off',
}
message.channel.send(`**⛔ The AntiSpread Is __𝐎𝐅𝐅__ !**`)
          fs.writeFile("./spread.json", JSON.stringify(spread), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
          }

        })
        client.on('message', message => {
    if(message.content.startsWith(prefix + "antispread on")) {
        if(!message.channel.guild) return message.reply('**This Command Only For Servers**');
        if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );
spread[message.guild.id] = {
onoff: 'On',
}
message.channel.send(`**✅ The AntiSpread Is __𝐎𝐍__ !**`)
          fs.writeFile("./spread.json", JSON.stringify(spread), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
          }

        })
    client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('http://www.gmail.com/')){
            if(!spread[message.guild.id]) spread[message.guild.id] = {
        onoff: 'Off'
            }
        if(spread[message.guild.id].onoff === 'Off') return;
        message.delete()
    return message.reply(`**⛔ The Antispread ON ! So You Cant spread Here !**`)
    }
});

client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('https://www.snapchat.com/')){
            if(!spread[message.guild.id]) spread[message.guild.id] = {
        onoff: 'Off'

            }
        if(spread[message.guild.id].onoff === 'Off') return;
        message.delete()
    return message.reply(`**⛔ The Antispread ON ! So You Cant spread Here !**`)
    }
});


client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('https://www.instagram.com/')){
            if(!spread[message.guild.id]) spread[message.guild.id] = {
        onoff: 'Off'
            }
        if(spread[message.guild.id].onoff === 'Off') return;
        message.delete()
    return message.reply(`**⛔ The Antispread ON ! So You Cant spread Here !**`)
    }
});


client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('https://www.twitter.com/')){
            if(!spread[message.guild.id]) spread[message.guild.id] = {
        onoff: 'Off'
            }
        if(spread[message.guild.id].onoff === 'Off') return;
        message.delete()
    return message.reply(`**⛔ The Antispread ON ! So You Cant spread Here !**`)
    }
});


client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('http://www.facebook.com/')){
            if(!spread[message.guild.id]) spread[message.guild.id] = {
        onoff: 'Off'
            }
        if(spread[message.guild.id].onoff === 'Off') return;
        message.delete()
    return message.reply(`**⛔ The Antispread ON ! So You Cant spread Here !**`)
    }
});



client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('https://www.youtube.com/')){
            if(!spread[message.guild.id]) spread[message.guild.id] = {
        onoff: 'Off'
            }
        if(spread[message.guild.id].onoff === 'Off') return;
        message.delete()
    return message.reply(`**⛔ The Antispread ON ! So You Cant spread Here !**`)
    }

});

client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('https://www.discordapp.com/')){
            if(!spread[message.guild.id]) spread[message.guild.id] = {
        onoff: 'Off'
            }
        if(spread[message.guild.id].onoff === 'Off') return;
        message.delete()
    return message.reply(`**⛔ The Antispread ON ! So You Cant spread Here !**`)
    }

});
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('https://discord.gg/')){
            if(!spread[message.guild.id]) spread[message.guild.id] = {
        onoff: 'Off'
            }
        if(spread[message.guild.id].onoff === 'Off') return;
        message.delete()
    return message.reply(`**⛔ The Antispread ON ! So You Cant spread Here !**`)
    }

});





client.on('guildMemberAdd', member=> {
    member.addRole(member.guild.roles.find("name","𝑴𝑬𝑴𝑩𝑬𝑹𝑺"));
    })




client.on("guildMemberAdd", member => {
    member.createDM().then(function (channel) {
    return channel.send(`:rose:  Welcome TO  𝑭𝑳𝑶𝑹𝑰𝑫𝑨 𝑪𝑳𝑼𝑩:beers: :beer::rose: 
  :crown:Welcome  ${member}:crown:  
  انت العضو رقم ${member.guild.memberCount} `) 
  }).catch(console.error)
  })





client.on("message", message => {
    
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
                if(!message.channel.guild) return;
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**No Permissions**');
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Done",
        color: 0x36393e,
        description: "The Room chat has been Deleted !",
        footer: {
          text: "Florida System©."
        }
      }}).then(msg => {msg.delete(3000)});
                          }

     
});







client.login('Token');

