module.exports = {
    name: 'freinds',
    description: `Shows some of my friends and people who I owe a lot to`,
    canBeExecuted: false,
    execute(message, args) {

        const p = [
            {
                name: "Furdox",
                link: "https://twitter.com/Furdox",
            },
            {
                name: "Lmay",
                link: "https://twitter.com/SoapierGlobe",
            },
        ];

        return `<h1>👥 Friends 👥</h1>
        <p>Here are some of my friends and people who I owe a lot to:</p>
        <ul>
            ${p.map(person => `<li><i class="bi bi-arrow-return-right"></i> <b>Name:</b> ${person.name} - <b>Link:</b> <a href="${person.link}">${person.link}</a></li>`).join("")}
        </ul>
        `;


    }
}