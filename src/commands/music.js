module.exports = {
    name: 'music',
    description: `Shows some music that I like`,
    canBeExecuted: false,
    execute(message, args) {

        const music = [
            {
                name: "Where Millions Have Come to Die",
                artist: "Shadow of Intent",
                link: "https://www.youtube.com/watch?v=OIXf-gTOxRY",
            },
            {
                name: "From Ruin... We Rise",
                artist: "Shadow of Intent",
                link: "https://www.youtube.com/watch?v=w04vygx0ApI",
            },
            {
                name: "Forget Not",
                artist: "Ne Obliviscaris",
                link: "https://www.youtube.com/watch?v=ODrM2lo6B04I",
            }
        ];

        
        return `<h1>🎵 Music 🎵</h1>
        <p>Here is some music that I like:</p>
        <ul>
            ${music.map(song => `<li><i class="bi bi-arrow-return-right"></i> <b>Name:</b> ${song.name} - <b>Artist:</b> ${song.artist}</li>`).join("")}
        </ul>
        `;




    }
}