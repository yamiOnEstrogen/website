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
const githubClient = require("./utils/githubClient");
const github = new githubClient();
const Status = require("./utils/status.js");




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.engine(".ejs", ejs.__express);
app.use(express.static("public"));


app.get("/", async (req, res) => {
  discordClient.getOwnerInfo().then(async (owner) => {


    const codingLanguagesArray = [];
    const clientUsers = [];
    const projectsArray = [];
    const serverWidget = await discordClient.getServerWidget(`1062574590406172692`, "shield");

    const codingLanguages = config.languages;
    const projects = config.projects;


    for (const project in projects) {
      projectsArray.push(projects[project]);
    }



    for (const language in codingLanguages) {
      codingLanguagesArray.push(codingLanguages[language]);
    }
    
    
    for (const client in config.clients) {
      clientUsers.push(config.clients[client]);
    }

    
    console.log(serverWidget)
    res.render("index", {
      owner: owner,
      supportServer: config.owner.supportServer,
      codingLanguages: codingLanguagesArray,
      serverWidget: serverWidget,
      projects: projectsArray,
      clients: clientUsers,
      githubProjects: await github.getRepos(),
    });
  })
});

app.get("/status", async (req, res) => {
  const statusCodes = await Status.getStatusCodes();
  

  if (process.env.NODE_ENV === "development") console.log(statusCodes);

  res.render("status", {
    statusCodes: statusCodes,
  });
})


app.get("/unfatal", async (req, res) => {
  res.redirect("https://home.unfatal.xyz/user/547923574833545226");
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


app.get("/cv", async (req, res) => {
  res.redirect("https://docs.google.com/document/d/1ePCT16ZVyROpo29NEEp0TKE2YiY0CPynlO7BeTdXrM0/edit?usp=sharing")
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




app.get("/invite", (req, res) => {
  res.redirect(`/redirect?url=https://discord.gg/ZuPHXurZvn`)
});



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



  logger.log(`To View on your Machine go to: http://localhost:${port}`, "websocket");
  logger.log(`To View on your Network go to: http://${addresses[0]}:${port}`, "websocket");

  // Status.updateStatusCodes();

  logger.log("Status codes have been updated", "status");



  setInterval(() => {
    Status.updateStatusCodes(); // Update status codes every 5 minutes
    logger.log("Status codes have been updated", "status");
  }, 300000); // 5 minutes

});
