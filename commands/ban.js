module.exports = {
    name: 'kick',
    desciption: "Kick members!",
    execute(messages, args) { 
        const member = messages.mentions.users.first();
        if(member){
            const memberTarget = messages.guild.members.cache.get(member.id);
            memberTarget.kick()
            messages.channel.send(`<@${memberTarget.user.id}> has been banned.`)
        } else {
            messages.channel.send('You can not ban this member!')
        }
    }
}