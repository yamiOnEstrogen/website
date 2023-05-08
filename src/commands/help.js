const commands = require("../utils/commands");

module.exports = {
    name: 'help',
    description: 'List all the commands',
    canBeExecuted: false,
    execute(message, args) {
       
        if (args.length == 0) {
            return `<h1>📜 Commands 📜</h1>
            <p>Here is a list of all the commands:</p>
            <ul>
                ${commands.commands().map(command => `<li>${command.name}</li>`).join("")}
            </ul>`;
        }

        const command = commands.getCommand(args);

        if (command == null) {
            return `Command not found`;
        }

        return `<h1>📜 ${command.name} 📜</h1>
        <p>${command.description}</p>
        <p>Can be executed: ${command.canBeExecuted}</p>`;

    }
}