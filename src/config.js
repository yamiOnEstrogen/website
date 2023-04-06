const webApp = {
    isOffline: false, //! Whether the web app is offline or not (true/false) [true = offline, false = online]
    apiVersion: "v1", //! The API version
    allowedApiVersions: ["v1"], //! The allowed API versions
    theme: "pink", //? See zenithlive.lol/website-themes for more info
};

const owner = {
    name: "Zenith", //! Your name

    story: `Hi, my name is Zenith and I'm an 18-year-old developer. 
    I've been coding for three years now and it's been an incredible journey. 
    
    I started with Python, but I quickly moved over to JavaScript and C# as I grew more comfortable with programming.

    I'm proud to say that I'm not just a software developer, but also an AI developer and Vtuber.
    
    As a developer, I've worked on some really cool projects and I'm always looking for new challenges to push myself further. 
    
    My work in AI has been especially exciting, as I've been able to explore the potential of this rapidly growing field.
    
    As a Vtuber, I've been able to connect with people from all over the world and share my love of gaming and technology with them. 
    
    It's been an amazing experience to build a community around my online persona, and I'm constantly grateful for the support and encouragement I receive from my viewers.
    
    But what's made this journey even more special has been the amazing friends I've made along the way. 
    
    <a href="https://twitch.tv/varkely" style="color: #F700FF">Varkely</a>, <a href="https://twitter.com/Furdox" style="color: #F700FF">Furdox</a>, and <a href="https://twitter.com/SoapierGlobe" style="color: #F700FF">Lmay</a> have been there for me since the beginning, and I'm so grateful for their friendship. 
    
    We've grown together as developers, and it's been incredible to watch each other's progress and share in each other's successes.
    
    I wouldn't be where I am today without the support of my friends and community, and for that, I'm truly grateful. 
    
    I'm excited to see where this journey takes me next, and I know that with the help of my friends and community,
    
    I'll be able to achieve even greater things.`, //! Your story

    tag: "An 18-year-old developer with a passion for technology and innovation.",

    id: "547923574833545226", //! Your Discord ID

    isLooking4Work: true, //! Whether you are looking for work or not (true/false) [true = looking for work, false = not looking for work]

    email: "zenithlivebusiness@outlook.com",

    location: "Waycross GA", //! Your location


    skills: [
        {
            title: "Website Development",
            description: "I can develop websites using HTML, CSS, JavaScript, and Node.js. I can also develop websites using React.js and Next.js",
            icon: "globe",
        },
        {
            title: "Discord Bot Development",
            description: "I can develop Discord bots using Discord.js and Node.js. I have experience with Discord.js v12 and v13",
            icon: "discord",
        },
        {
            title: "Discord Bot Hosting",
            description: "Do you have a bot you want to host? I can host your bot for you! I can host your bot on a VPS or a dedicated server",
            icon: "server",
        }
    ], //! Your skills

    socials: [
        {
            name: "GitHub",
            link: "https://github.com/zenithvt",
        },
        {
            name: "Twitter",
            link: "https://twitter.com/_zenithvt",
        },
        {
            name: "Discord",
            link: "https://discord.gg/RyzuKecPX8",
        }
    ], //! Your socials


    education: [
        {
            school: "Penn Foster College",
            degree: "Bachelor's Degree in Computer Science",
            start: "2022",
            end: "2026",
        }
    ], //! Your education

    experience: [
        {
            company: "Unfatal",
            position: "Developer / CEO",
            start: "2023",
            end: "Present",
        },
        {
            company: "Indivoxy",
            position: "Developer / CEO",
            start: "2023",
            end: "Present",
        }
    ], //! Your experience




};





module.exports = {
    webApp,
    owner,
};