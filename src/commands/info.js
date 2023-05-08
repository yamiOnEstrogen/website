module.exports = {
    name: 'info',
    description: `Show some info about hylia`,
    canBeExecuted: false,
    execute(message, args) {

        const info = {
            name: "Hylia",
            age: "18",
            birthday: {
                full: `July 6th, 2004`,
                unix: 1089092400,
            },
            occupation: "Developer and Vtuber",
            languages: "English, Japanese",
            gender: "Female (She/Her) [TRANSFEM]",
            avatar: "https://www.goddessanime.com/api/user/547923574833545226/avatar",
            thingsILike: [
                "Anime",
                "Coding",
                "Vtubing",
                "Gaming",
                "Music",
                "Taking walks",
                "Taking pictures",
            ],
            relationship: `Engaged to <i style="color: #ff0000;" class="bi bi-heart-fill"></i> Alex <i style="color: #ff0000;" class="bi bi-heart-fill"></i>`,
            email: "live.hylia@outlook.com"
        };

        return `<h1>📜 Info 📜</h1>
        <p>Here is some info about me:</p>
        <ul>
            <li><i class="bi bi-arrow-return-right"></i> <b>Name:</b> ${info.name}</li>
            <li><i class="bi bi-arrow-return-right"></i> <b>Age:</b> ${info.age}</li>
            <li><i class="bi bi-arrow-return-right"></i> <b>Birthday:</b> ${new Date(info.birthday.unix * 1000).toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</li>
            <li><i class="bi bi-arrow-return-right"></i> <b>Occupation:</b> ${info.occupation}</li>
            <li><i class="bi bi-arrow-return-right"></i> <b>Languages:</b> ${info.languages}</li>
            <li <i class="bi bi-arrow-return-right"></i> <b>Gender:</b>  ${info.gender}</li>
            <li><i class="bi bi-arrow-return-right"></i> <b>Things I like:</b> ${info.thingsILike.join(", ")}</li>
            <li><i class="bi bi-arrow-return-right"></i> <b>Relationship:</b> ${info.relationship}</li>
            <li><i class="bi bi-arrow-return-right"></i> <b>Email:</b> <a href="mailto:${info.email}">${info.email}</a></li>

            </br>
            <img src="${info.avatar}" alt="Avatar" width="250" height="250" style="border-radius: 50%;" />
        </ul>`;




    }
}