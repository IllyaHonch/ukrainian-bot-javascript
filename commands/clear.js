module.exports = {
    name: 'clear',
    desciption: "Clear messages!",
    async execute(message,args) {
        if(!args[0]) return message.reply("Please enter the amount of messages that you want to clear.");
        if(isNaN(!args[0])) return message.reply("Please enter a real number!");

        if(args[0] > 100) return message.reply("You can't delete more than 100 messages!");
        if(isNaN(!args[0])) return message.reply("You need to delete at least one comment!");
        
        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
        }); 
    }
}