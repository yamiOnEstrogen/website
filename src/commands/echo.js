module.exports = {
    name: 'echo',
    description: 'Echoes the input',
    canBeExecuted: false,
    execute(message, args) {
        return `<i class="bi bi-person-circle"></i> ${args.join(" ")}`;
        

    }
}