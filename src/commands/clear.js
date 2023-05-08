module.exports = {
    name: 'clear',
    description: 'Clears the output',
    canBeExecuted: true,
    execute(message, args) {
        return `document.querySelectorAll("#output").forEach(e => { e.innerHTML = ""; });`;
    }
}