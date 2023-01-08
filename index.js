const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const ejs = require("ejs");
const path = require("path");
const fs = require("fs");
const Logger = require("./utils/logger.js");
const logger = new Logger({ debug: true });
const os = require("os");
const DiscordClient = require("./utils/discordClient.js");
const config = require("./config");
const port = process.env.PORT || config.webApp.port;
const { Octokit } = require("@octokit/core");
const { URLSearchParams } = require('url');
const fetch = require("node-fetch");
const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();
const discordClient = new DiscordClient(process.env.token);




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.engine(".ejs", ejs.__express);
app.use(express.static("public"));
app.use((req, res, next) => {
  if (config.webApp.isOffline) {
    res.render("down.ejs", {
    });
  } else {
    next();
  }
})


app.get("/latest-tweet", async (req, res) => {
  res.redirect("https://twitter.com/akeno_lol/status/1605740476782485504?s=20&t=E7ZdY7NcpnnF_P1enzbEPQ") // I will make a system to pull data from the twitter account later... I just do not have the time rn.
})


app.get("/", async (req, res) => {
  discordClient.getOwnerInfo().then(async (owner) => {


    const codingLanguagesArray = [];
    const clientUsers = [];
    const projectsArray = [];
    const newsArray = [];
    const serverWidget = await discordClient.getServerWidget(`1014190469628055552`, "shield");

    const socials = config.profile.socials;
    const codingLanguages = config.languages;
    const projects = config.projects;


    for (const project in projects) {
      projectsArray.push(projects[project]);
    }



    for (const language in codingLanguages) {
      codingLanguagesArray.push(codingLanguages[language]);
    }



    for (const news in config.news) {
      newsArray.push(config.news[news]);
    }
    
    
    for (const client in config.clients) {
      clientUsers.push(config.clients[client]);
    }
  

    
    res.render("index", {
      owner: owner,
      supportServer: config.owner.supportServer,
      codingLanguages: codingLanguagesArray,
      aboutMe: config.profile.aboutMe,
      socials: socials,
      serverWidget: serverWidget,
      news: newsArray,
      projects: projectsArray,
      clients: clientUsers,

    });
  })
});

app.get("/login", (req, res) => {
  res.redirect(process.env.redirectUrl)
});

app.get("/spotify", async (req, res) => {
  res.redirect("/redirect?url=https://open.spotify.com/playlist/3bZ1UCRHaChgW1pIsdvxnw?si=03a44d18212848d1&title=Spotify%20Playlist");
})

app.get("/api/:version/:field", async (req, res) => {
  const field = req.params.field;
  const version = req.params.version;
  const type = req.query.type;

  const supportedVersions = ["v1"];

  if (!supportedVersions.includes(version)) {
    return res.json({
      errorCode: 404,
      errorMessage: "Version not found"
    })
  }



    if (field === "news") {
     res.json(config.news);
    }
    if (field === "projects") {
      res.json(config.projects);
    }
    if (field === "items") {
      res.json(config.items);
    }
    if (field === "clients") {
    res.json(config.clients);
  }

})
app.get("/oauth2", async (req, res) => {
  const data_1 = new URLSearchParams();
  data_1.append('client_id', process.env.clientId);
  data_1.append('client_secret', process.env.clientSecret);
  data_1.append('grant_type', 'authorization_code');
  data_1.append('redirect_uri', `http://localhost:8080/oauth2`);
  data_1.append('scope', 'identify email');
  data_1.append('code', req.query.code);

  fetch('https://discord.com/api/oauth2/token', { method: "POST", body: data_1 }).then(response => response.json()).then(data2 => {
    const options = {
      method: 'GET',
      url: 'https://discord.com/api/users/@me',
      headers: {
        'Authorization': `Bearer ${data2.access_token}`
      }
    }


    axios.get(options.url, { headers: options.headers }).then(response => {


      const data = response.data;

      console.log(data)

      discordClient.joinSupportServer(data2.access_token, data.id).then(() => {
        console.log("Joined support server")
        res.render("purchase", {
          username: data.username,
          discriminator: data.discriminator,
          id: data.id,
          avatar: data.avatar,
          email: data.email,
        });
      })



    }).catch(err => {
      console.log(err);
    })

  })

});

app.get("/cv", async (req, res) => {
  res.redirect("https://docs.google.com/document/d/1tBfrkcgccE9dBIJFmCLS3BvLUhQcinSa0wAaE_0cUn4/edit?usp=sharing")
})

app.post("/purchase", async (req, res) => {
  const item = req.body.item;
  const user = req.body.user;
  //  res.send("Purchase has been sent to the owner!, He will contact you soon! (EMAIL)");

  discordClient.postPurchaseMessage({
    item: item,
    user: user,
  }).then(() => {
    res.send("Purchase has been sent to the owner!, He will contact you soon! (EMAIL)");
  })
})


app.get("/error", (req, res) => {
  const error = req.query.err;
  const code = req.query.code;
  if (error == null || error == "" || error == undefined) {
    res.json({
      error: "No error provided"
    });
  }
  else {
    res.render("error.ejs", {
      error: error,
      code: code,
    })
  }
})

app.post("/contact", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;

  discordClient.postContactMessage(name, email, message).then((channel) => {
    res.json({
      success: "Message sent successfully",
      message: channel,
    })
  })  
})

app.post("/bug", (req, res) => {
  const name = req.body.name;
  const expectedResult = req.body.expectedResult;
  const actualResult = req.body.actualResult;
  const howToReproduce = req.body.howToReproduce;

  discordClient.postBugMessage(name, expectedResult, actualResult, howToReproduce).then((channel) => {
    res.json({
      success: "Bug sent successfully",
      message: "If you are in the support server, please DM akeno#1010, and we will get back to you as soon as possible.",
    })
  })
})

app.get("/reportbug", async (req, res) => {
  res.render("reportBug.ejs", {

  });
})

app.get("/redirect", (req, res) => {
  const url = req.query.url;
  const title = req.query.title || "akenodev redirect feature";

  if (url == null || url == "" || url == undefined) {
    res.json({
      error: "No url provided"
    });
  }
  else {
    res.render("redirect", {
      REDIRECT_URL: url,
      REDIRECT_TITLE: title,
      HOST: req.hostname,
      REDIRECT_URL_SHORT: url
        .replace("https://", "")
        .replace("http://", "")
        .replace("www.", "")
        .split("/")[0],
      baseUrl: req.protocol + "://" + req.get("host"),
    });
    logger.log("Redirecting to " + url);
  }
});


app.get("/status", (req, res) => {
  status.getStatus().then((status) => {
    res.render("status", {
      homePage: status.homePage,
      redirectPage: status.redirectPage,
    });
  })
})


app.get("/invite", (req, res) => {
  res.redirect(`/redirect?url=${config.owner.supportServer}`)
});

app.get("/items", (req, res) => {

  const itemLists = {
    "8564564": {
      "name": "Discord Bot",
      "id": "8564564",
      "description": "A discord bot that can be used for moderation, fun, and more.",
      "price": 10,
    },
    "5473524": {
      "name": "Website",
      "id": "5473524",
      "description": "A website that can be used for anything.",
      "price": 20,
    },
    "4289640": {
      "name": "Twitter Bot",
      "id": "4289640",
      "description": "A twitter bot that can be used for moderation, fun, and more.",
      "price": 15,
    },
    "78403650": {
      "name": "Minecraft Plugin",
      "id": "78403650",
      "description": "A minecraft plugin that can be used for moderation, fun, and more.",
      "price": 10,
    },

  }

  res.json(itemLists);

})



app.listen(port, () => {
  console.clear()

  const interfaces = os.networkInterfaces();
  const addresses = [];
  for (k in interfaces) {
    for (k2 in interfaces[k]) {
      const address = interfaces[k][k2];
      if (address.family === 'IPv4' && !address.internal) {
        addresses.push(address.address);
      }
    }
  }



  logger.log(`To View on your Machine go to: http://localhost:${port}`);
  logger.log(`To View on your Network go to: http://${addresses[0]}:${port}`);

});








