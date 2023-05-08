module.exports = {
    name: 'socials',
    description: 'List all the socials',
    canBeExecuted: false,
    execute(message, args) {
       
        return `<h1>📜 Socials 📜</h1>
        <p>Here is a list of all the socials:</p>
        <ul>
            <li><i class="bi bi-twitter"></i> <a href="https://twitter.com/vthylia">Twitter</a></li>
            <li><i class="bi bi-discord"></i> <a href="https://discord.gg/hCqQDuUY3r">Discord</a></li>
            <li><i class="bi bi-github"></i> <a href="https://github.com/0xhylia">Github</a></li>
            <li><i class="bi bi-tv"></i> <a href="https://myanimelist.net/animelist/zenithlive">MyAnimeList</a></li>
        </ul>`;

    }
}