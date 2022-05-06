module.exports = {
    name: 'addAdminRole',
    desciption: "Cheat lol",
    execute(message,args) {
        const target = message.mentions.users.first();
        if(target) {
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Staff');
            let memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.roles.add(muteRole.id);
            message.channel.send(`<@${memberTarget.user.id}> has been added to role of Founding Fathers.`)
        } else {
            message.channel.send('Can not find that member!')
        }
    }
}