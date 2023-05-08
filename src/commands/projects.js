module.exports = {
    name: 'projects',
    description: 'List all the projects or a specific one',
    canBeExecuted: false,
    execute(message, args) {


        const projectname = args;
       
        const projects = [
            {
                name: 'Chiyeko Discord Bot',
                description: 'Chiyeko is an up-and-coming AI Vtuber who is eagerly anticipated by fans all over the world. This is the discord bot for the discord server.',
                link: 'https://github.com/0xhylia/chiyeko-discord-bot',
                image: 'https://raw.githubusercontent.com/0xhylia/chiyeko-discord-bot/main/.github/842699899b05545dd9af86bc2a5965b9.jpg'
            },
            {
                name: 'Goddess Anime Card Game',
                description: 'Introducing Goddess Anime Cards, the newest addition to the world of anime card games! Collect cards, trade them with your friends, and play with them in a variety of games!',
                link: 'https://goddessanime.com',
                image: 'https://media.tenor.com/tlP1gAvWPmAAAAAC/kono-suba-anime.gif'
            }
        ];

        if (args.length === 0) {
            return `<h1> ⌨️ Projects ⌨️ </h1>
            <p>Here is a list of all the projects:</p>
            <ul>
                ${projects.map(project => `<li><i class="bi bi-file-earmark"></i> <a href="${project.link}">${project.name}</a></li>`).join('')}
            </ul>`;
        }

        const project = projects.find(project => project.name.toLowerCase() === projectname.join(' ').toLowerCase());

        if (!project) {
            return `<h1> ⌨️ Projects ⌨️ </h1>
            <p>Here is a list of all the projects:</p>
            <ul>
                ${projects.map(project => `<li><i class="bi bi-file-earmark"></i> <a href="${project.link}">${project.name}</a></li>`).join('')}
            </ul>`;
        }

        return `<h1> ⌨️ Projects ⌨️ </h1>
        <p>Here is the project you requested:</p>
        <ul>
            ${project.name}
        </ul>
        <p>${project.description}</p>
        <p><a href="${project.link}">Link</a></p>
        <img src="${project.image}" alt="${project.name}" />`;


    }
}