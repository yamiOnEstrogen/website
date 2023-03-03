module.exports.webApp = {
  port: 8080,
  isOffline: false,
},

  module.exports.owner = {
    id: "547923574833545226",
    supportServer: "https://discord.gg/wGGp7PvT",
  },



// Adding Soon!
  module.exports.languages = {
    "JavaScript": {
      name: "JavaScript",
      options: {
        percentile: "98",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
      }
    },
    "TypeScript": {
      name: "TypeScript",
      options: {
        percentile: "90",
        image: "https://bryntum.com/wp-content/uploads/2019/03/ts.png"
      }
    },
    "HTML": {
      name: "HTML",
      options: {
        percentile: "69",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT463ieWzeMzi7Zpo7phhQtwH9c0eg6_SMn3A&usqp=CAU"
      }
    },
    "C#": {
      name: "C#",
      options: {
        percentile: "90",
        image: "https://bryntum.com/wp-content/uploads/2019/03/ts.png"
      }
    },
    "C": {
      name: "C",
      options: {
        percentile: "50",
        image: "https://bryntum.com/wp-content/uploads/2019/03/ts.png"
      }
    },
    "Python": {
      name: "Python",
      options: {
        percentile: "64",
        image: "https://bryntum.com/wp-content/uploads/2019/03/ts.png"
      }
    },
    "Java": {
      name: "Java",
      options: {
        percentile: "70",
        image: "https://bryntum.com/wp-content/uploads/2019/03/ts.png"
      }
    },
  };



module.exports.projects = {
  1: {
    name: "Kiyodev.xyz",
    image: "/assets/img/backgroundAsset.jpg",
    tags: [
      "Website",
      "HTML",
      "Personal"
    ],
    button: {
      name: "View Repository",
      url: "https://github.com/kiyolol/kiyodev.xyz",
      color: "primary",
    },
  },
  2: {
    name: "Chika Bot",
    image: "https://repository-images.githubusercontent.com/604447888/85ec0c3b-e72e-48fb-870e-971bfd2c38a6",
    tags: [
      "Discord Bot",
      "JavaScript",
      "Node.js",
      "Discord.js",

    ],
    button: {
      name: "View Website",
      url: "https://github.com/kiyolol/Chika-Bot",
      color: "primary",
    },
  },
};

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

