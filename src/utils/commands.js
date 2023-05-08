const fs = require("fs");
const path = require("path");


function commands() {
    const commands = fs.readdirSync(path.join(__dirname, "../commands"));

    const commandsArray = [];


    for (const command of commands) {
        const commandObject = require(`../commands/${command}`);


        commandsArray.push(commandObject);
    }

    return commandsArray;

}

function getCommand(commandName) {
    const commands = fs.readdirSync(path.join(__dirname, "../commands"));


    for (const command of commands) {

        const commandObject = require(`../commands/${command}`);

        if (commandObject.name == commandName) {
            return commandObject;
        }
    }

    return null;
}

module.exports = {
    commands,
    getCommand
}