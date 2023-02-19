module.exports.webApp = {
  port: 8080,
  isOffline: false,
},

  module.exports.owner = {
    id: "547923574833545226",
    supportServer: "https://discord.gg/wGGp7PvT",
  },




  module.exports.news = {
    1: {
      title: "kiyodev.xyz goes Open Source!",
      description: `kiyo, has now made kiyodev.xyz open source on github!`,
      date: "2022-9-5",
      image: "./assets/img/news/akenoDevGithubBanner.png",
      link: "https://github.com/kiyolol/akenodev.xyz",
    },
    2: {
      title: "Aqua the Goddess Comes to Red Cafe!",
      description: `Aqua the Water Goddess comes to Red Cafe!`,
      date: "2022-10-23",
      image: "./assets/img/news/aquaGoddess.png",
      link: "https://kiyodev.xyz/invite"
    },
    3: {
      title: "Procs Gets Out of Beta!",
      description: `procs.space comes out of beta for the public to use!`,
      date: "2022-12-27",
      image: "https://media.tenor.com/k2V7yl0m9I0AAAAC/cidade.gif",
      link: "https://kiyodev.xyz/invite"
    },
  },

  module.exports.languages = {
    "JavaScript": {
      name: "JavaScript",
      options: {
        percentile: "98"
      }
    },
    "TypeScript": {
      name: "TypeScript",
      options: {
        percentile: "90"
      }
    },
    "HTML": {
      name: "HTML",
      options: {
        percentile: "69"
      }
    },
    "C#": {
      name: "C#",
      options: {
        percentile: "90"
      }
    },
    "C": {
      name: "C",
      options: {
        percentile: "50"
      }
    },
    "Python": {
      name: "Python",
      options: {
        percentile: "64"
      }
    },
    "Java": {
      name: "Java",
      options: {
        percentile: "70"
      }
    },
  };



module.exports.projects = {
  1: {
    name: "kiyodev.xyz",
    image: "/assets/img/projects/akenoWebsite.gif",
    role: "websites",
    button: {
      name: "View Repository",
      url: "https://github.com/kiyolol/kiyodev.xyz",
      color: "primary",
    },
  },
  2: {
    name: "React todo app",
    image: "/assets/img/projects/reactTodoApp.png",
    role: "websites tools",
    button: {
      name: "View Repository",
      url: "https://github.com/kiyolol/react-todo-app",
      color: "primary",
    },
  },
  3: {
    name: "Goddess Bot",
    image: "/assets/img/projects/goddessBot.png",
    role: "bots tools",
    button: {
      name: "View Repository",
      url: "https://github.com/kiyolol/Goddess-Bot",
      color: "primary",
    },
  },
  4: {
    name: "Epicgames npm",
    image: "/assets/img/projects/epicGames.png",
    role: "packages tools",
    button: {
      name: "Install Package",
      url: "https://www.npmjs.com/package/@akenodev/epicgames",
      color: "danger",
      warning: "When you install this package, *PLEASE* credit me. Thank you.",
    },
  },
  5: {
    name: "Discord Info",
    image: "/assets/img/projects/info.png",
    role: "tools",
    button: {
      name: "View Repository",
      url: "https://github.com/kiyolol/Discord-Info",
      color: "primary",
    },
  },
  6: {
    name: "Devo Bot",
    image: "/assets/img/projects/devoBot.png",
    role: "bots tools",
    button: {
      name: "View Repository",
      url: "https://github.com/kiyolol/Devo-Bot",
      color: "primary",
    },
  },
  7: {
    name: "Discord Webhook C#",
    image: "/assets/img/projects/discordLogo.png",
    role: "tools",
    button: {
      name: "View Repository",
      url: "https://github.com/kiyolol/Discord-Webhook-CSharp",
      color: "primary",
    },
  },
  8: {
    name: "Verbose Bot",
    image: "/assets/img/projects/verboseBot.png",
    role: "tools bots",
    button: {
      name: "View Repository",
      url: "https://github.com/kiyolol/verbose-bot",
      color: "primary",
    },
  },
  9: {
    name: "procs.space",
    image: "https://procs.space/assets/icons/procsLogo.png",
    role: "tools websites",
    button: {
      name: "View Website",
      url: "https://procs.space",
      color: "primary",
    },
  },
};

module.exports.profile = {
  aboutMe: ["Voice Actor", "Web Developer", "Discord / Telegram Bot Developer", "Discord Moderator", "Reddit Moderator", "Software Developer", "Anime Voice Actor"],
  socials: {
    github: "https://github.com/akenolol",
    twitter: "https://twitter.com/akeno_dev",
    reddit: "https://www.reddit.com/user/premage1010",
    discord: "https://discordapp.com/users/547923574833545226",
    telegram: "https://t.me/akenodev",
  },
  languages: [
    " en",
    " jp",
  ],



}

module.exports.clients = {
  1: {
    name: "Remi",
    image: "/assets/img/clients/remi.png",
    discriminator: "7095",
    rating: "5",
    discription: "Ordered a custom bot from kiyo, and it was amazing! She was very helpful and was able to make the bot exactly how I wanted it to be. I would highly recommend her to anyone who is looking for a custom bot!",
    whois: {
      name: "Discord Server Member",
      url: "https://kiyodev.xyz/invite",
    },
    isInServer: true,
    didContributeToRepo: false,

  },
  2: {
    name: "LunarDev",
    image: "/assets/img/clients/default.png",
    discriminator: "1265",
    rating: "5",
    discription: "I have worked with kiyo on a few projects, and she is a great developer. She is very helpful and is always willing to help. I would highly recommend her to anyone who is looking for a developer.",
    whois: {
      name: "Github Contributor",
      url: "https://kiyodev.xyz/invite",
    },
    isInServer: false,
    didContributeToRepo: true,

  }
};

