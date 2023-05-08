const axios = require("axios");

module.exports = {
    name: 'discord',
    description: 'Sends the discord invite link and the discord server',
    canBeExecuted: false,
    async execute(message, args) {

        const getOwnerPresence = async () => {
            const options = {
                method: 'GET',
                url: 'https://discord.com/api/v8/users/547923574833545226',
                headers: {
                    Authorization: `Bot ${process.env.DISCORD_TOKEN}`
                }
            };

            const response = await axios.request(options);

            return response.data;
        };

        const pres = await getOwnerPresence();



        return `<h1>📜 Discord 📜</h1>
        <p>Here is a list of all the discord links:</p>
        <ul>
            <li><i class="bi bi-discord"></i> <a href="https://discord.gg/ZuPHXurZvn">Goddess Anime (Project)</a></li>
            <li><i class="bi bi-discord"></i> <a href="https://discord.gg/hCqQDuUY3r">Neko Nation (Personal)</a></li>
        </ul>
        </br>
        <p>Here is my discord account:</p>
        <img src="https://img.shields.io/badge/Discord-${pres.username}%23${pres.discriminator}-7289DA?style=for-the-badge&logo=discord&logoColor=white" alt="Discord" />
        `;
    }
}